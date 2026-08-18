import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      type,
      customerName,
      email,
      phone,
      message,
      destination,
      locale,
      budget,
      startDate,
      travelers,
    } = body;

    if (type !== "CONTACT" && type !== "QUOTE") {
      return NextResponse.json(
        { error: "Tipo de correo no soportado" },
        { status: 400 },
      );
    }

    // Paleta editorial Nomari
    const bgDark = "#182B3A";
    const bgLight = "#F2EFE8";
    const primaryColor = "#B96045";
    const textColor = "#182B3A";
    const secondaryText = "#52616B";
    const borderColor = "#D7D0C6";
    const whiteColor = "#FFFDF8";

    let subjectClient = "";
    let htmlClient = "";
    let subjectInternal = "";
    let htmlInternal = "";

    const greeting = `Estimado/a ${customerName},`;

    // ==========================================
    // 2A. LÓGICA PARA CONTACTO GENERAL
    // ==========================================
    if (type === "CONTACT") {
      subjectClient = "[Nomari] Hemos recibido su mensaje";
      subjectInternal = `[NUEVO MENSAJE DE CONTACTO] - ${customerName}`;

      htmlClient = `
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
            border: 1px solid ${borderColor};
            background-color: ${bgLight};
            color: ${textColor};
          ">
            <div style="
              padding: 18px 32px;
              border-bottom: 1px solid rgba(242, 239, 232, 0.16);
              background-color: ${bgDark};
            ">
              <table
                role="presentation"
                style="width: 100%; border-collapse: collapse;"
              >
                <tr>
                  <td style="
                    color: ${primaryColor};
                    font-size: 9px;
                    font-weight: bold;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                  ">
                    Mensaje recibido
                  </td>

                  <td style="
                    text-align: right;
                    color: rgba(242, 239, 232, 0.25);
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
              border-bottom: 4px solid ${primaryColor};
              background-color: ${bgDark};
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
                Contacto
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
                Agradecemos su interés en Nomari. Hemos recibido su mensaje
                correctamente. Nuestro equipo revisará sus comentarios y se
                pondrá en contacto con usted a la brevedad.
              </p>

              <div style="
                margin: 32px 0;
                padding: 26px;
                border-left: 3px solid ${primaryColor};
                background-color: ${whiteColor};
              ">
                <p style="
                  margin: 0 0 16px;
                  color: ${primaryColor};
                  font-size: 9px;
                  font-weight: bold;
                  letter-spacing: 2px;
                  text-transform: uppercase;
                ">
                  Registro de su mensaje
                </p>

                <p style="
                  margin: 0;
                  color: ${secondaryText};
                  font-family: Georgia, 'Times New Roman', serif;
                  font-size: 16px;
                  font-style: italic;
                  line-height: 1.7;
                ">
                  “${message || "Sin mensaje adicional."}”
                </p>
              </div>

              <div style="
                margin-top: 38px;
                border-top: 1px solid ${borderColor};
                padding-top: 28px;
              ">
                <a
                  href="https://nomari.com.mx/es/experiencias"
                  style="
                    display: inline-block;
                    padding: 17px 28px;
                    background-color: ${bgDark};
                    color: ${bgLight};
                    font-size: 10px;
                    font-weight: bold;
                    letter-spacing: 2px;
                    text-decoration: none;
                    text-transform: uppercase;
                  "
                >
                  Explorar Colección →
                </a>
              </div>

              <div style="
                margin-top: 42px;
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
                  Todos los derechos reservados.
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

      htmlInternal = `
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
            border: 1px solid ${borderColor};
            background-color: ${bgLight};
          ">
            <div style="
              padding: 34px 30px;
              border-bottom: 4px solid ${primaryColor};
              background-color: ${bgDark};
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
                Nuevo mensaje desde el sitio
              </h2>

              <div style="
                margin-top: 28px;
                padding: 24px;
                border-left: 3px solid ${primaryColor};
                background-color: ${whiteColor};
              ">
                <p style="
                  margin: 8px 0;
                  color: ${secondaryText};
                  font-size: 13px;
                  line-height: 1.6;
                ">
                  <strong style="color: ${textColor};">Nombre:</strong>
                  ${customerName}
                </p>

                <p style="
                  margin: 8px 0;
                  color: ${secondaryText};
                  font-size: 13px;
                  line-height: 1.6;
                ">
                  <strong style="color: ${textColor};">Email:</strong>
                  ${email}
                </p>

                <p style="
                  margin: 8px 0;
                  color: ${secondaryText};
                  font-size: 13px;
                  line-height: 1.6;
                ">
                  <strong style="color: ${textColor};">Teléfono:</strong>
                  ${phone || "No proporcionado"}
                </p>
              </div>

              <h3 style="
                margin: 32px 0 14px;
                padding-bottom: 10px;
                border-bottom: 1px solid ${borderColor};
                color: ${primaryColor};
                font-size: 9px;
                letter-spacing: 2px;
                text-transform: uppercase;
              ">
                Mensaje
              </h3>

              <div style="
                padding: 22px;
                background-color: ${whiteColor};
                color: ${secondaryText};
                font-family: Georgia, 'Times New Roman', serif;
                font-size: 15px;
                font-style: italic;
                line-height: 1.7;
              ">
                “${message || "Sin mensaje"}”
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // ==========================================
    // 2B. LÓGICA PARA COTIZACIONES
    // ==========================================
    else if (type === "QUOTE") {
      subjectClient = `[Nomari] Estamos diseñando su experiencia en ${destination}`;
      subjectInternal = `[NUEVA COTIZACIÓN] - ${destination} - ${customerName}`;

      htmlClient = `
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
            border: 1px solid ${borderColor};
            background-color: ${bgLight};
            color: ${textColor};
          ">
            <div style="
              padding: 18px 32px;
              border-bottom: 1px solid rgba(242, 239, 232, 0.16);
              background-color: ${bgDark};
            ">
              <table
                role="presentation"
                style="width: 100%; border-collapse: collapse;"
              >
                <tr>
                  <td style="
                    color: ${primaryColor};
                    font-size: 9px;
                    font-weight: bold;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                  ">
                    Solicitud a medida
                  </td>

                  <td style="
                    text-align: right;
                    color: rgba(242, 239, 232, 0.25);
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
              border-bottom: 4px solid ${primaryColor};
              background-color: ${bgDark};
            ">
              <p style="
                margin: 0 0 14px;
                color: ${primaryColor};
                font-size: 9px;
                font-weight: bold;
                letter-spacing: 3px;
                text-transform: uppercase;
              ">
                Diseño a Medida
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
                Confirmación de solicitud
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
                Hemos recibido las coordenadas de su solicitud para
                <strong style="color: ${textColor};">${destination}</strong>.
                Nuestro equipo de hospitalidad y especialistas ya está
                preparando una propuesta exclusiva. Nos pondremos en contacto
                con usted muy pronto.
              </p>

              <div style="
                margin: 32px 0;
                border-top: 1px solid ${textColor};
                border-bottom: 1px solid ${borderColor};
              ">
                <table
                  role="presentation"
                  style="width: 100%; border-collapse: collapse;"
                >
                  <tr>
                    <td style="
                      width: 50%;
                      padding: 24px 20px 24px 0;
                      border-right: 1px solid ${borderColor};
                      vertical-align: top;
                    ">
                      <p style="
                        margin: 0;
                        color: ${primaryColor};
                        font-size: 9px;
                        font-weight: bold;
                        letter-spacing: 2px;
                        text-transform: uppercase;
                      ">
                        Fecha estimada
                      </p>

                      <p style="
                        margin: 10px 0 0;
                        color: ${textColor};
                        font-family: Georgia, 'Times New Roman', serif;
                        font-size: 20px;
                      ">
                        ${startDate}
                      </p>
                    </td>

                    <td style="
                      width: 50%;
                      padding: 24px 0 24px 20px;
                      vertical-align: top;
                    ">
                      <p style="
                        margin: 0;
                        color: ${primaryColor};
                        font-size: 9px;
                        font-weight: bold;
                        letter-spacing: 2px;
                        text-transform: uppercase;
                      ">
                        Asistentes
                      </p>

                      <p style="
                        margin: 10px 0 0;
                        color: ${textColor};
                        font-family: Georgia, 'Times New Roman', serif;
                        font-size: 20px;
                      ">
                        ${travelers}
                      </p>
                    </td>
                  </tr>
                </table>
              </div>

              ${
                message
                  ? `
                    <div style="
                      margin-bottom: 30px;
                      padding: 24px;
                      border-left: 3px solid ${primaryColor};
                      background-color: ${whiteColor};
                    ">
                      <p style="
                        margin: 0 0 12px;
                        color: ${primaryColor};
                        font-size: 9px;
                        font-weight: bold;
                        letter-spacing: 2px;
                        text-transform: uppercase;
                      ">
                        Detalles de su solicitud
                      </p>

                      <p style="
                        margin: 0;
                        color: ${secondaryText};
                        font-family: Georgia, 'Times New Roman', serif;
                        font-size: 15px;
                        font-style: italic;
                        line-height: 1.7;
                      ">
                        “${message}”
                      </p>
                    </div>
                  `
                  : ""
              }

              <div style="
                margin-top: 42px;
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
                  Todos los derechos reservados.
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

      htmlInternal = `
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
            border: 1px solid ${borderColor};
            background-color: ${bgLight};
          ">
            <div style="
              padding: 34px 30px;
              border-bottom: 4px solid ${primaryColor};
              background-color: ${bgDark};
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
                Nueva solicitud a medida
              </h2>

              <p style="
                margin: 14px 0 0;
                color: ${secondaryText};
                font-size: 14px;
                line-height: 1.7;
              ">
                Se ha registrado una nueva solicitud de cotización desde el
                sitio de Nomari.
              </p>

              <div style="
                margin-top: 28px;
                padding: 24px;
                border-left: 3px solid ${primaryColor};
                background-color: ${whiteColor};
              ">
                <p style="
                  margin: 8px 0;
                  color: ${secondaryText};
                  font-size: 13px;
                ">
                  <strong style="color: ${textColor};">Huésped:</strong>
                  ${customerName}
                </p>

                <p style="
                  margin: 8px 0;
                  color: ${secondaryText};
                  font-size: 13px;
                ">
                  <strong style="color: ${textColor};">Destino:</strong>
                  ${destination}
                </p>

                <p style="
                  margin: 8px 0;
                  color: ${secondaryText};
                  font-size: 13px;
                ">
                  <strong style="color: ${textColor};">Fecha:</strong>
                  ${startDate}
                </p>

                <p style="
                  margin: 8px 0;
                  color: ${secondaryText};
                  font-size: 13px;
                ">
                  <strong style="color: ${textColor};">Asistentes:</strong>
                  ${travelers}
                </p>

                <p style="
                  margin: 8px 0;
                  color: ${secondaryText};
                  font-size: 13px;
                ">
                  <strong style="color: ${textColor};">Email:</strong>
                  ${email}
                </p>

                <p style="
                  margin: 8px 0;
                  color: ${secondaryText};
                  font-size: 13px;
                ">
                  <strong style="color: ${textColor};">Teléfono:</strong>
                  ${phone || "No proporcionado"}
                </p>
              </div>

              <h3 style="
                margin: 32px 0 14px;
                padding-bottom: 10px;
                border-bottom: 1px solid ${borderColor};
                color: ${primaryColor};
                font-size: 9px;
                letter-spacing: 2px;
                text-transform: uppercase;
              ">
                Especificaciones
              </h3>

              <div style="
                padding: 22px;
                background-color: ${whiteColor};
                color: ${secondaryText};
                font-family: Georgia, 'Times New Roman', serif;
                font-size: 15px;
                font-style: italic;
                line-height: 1.7;
              ">
                “${message || "Sin requerimientos adicionales"}”
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // 3. ENVÍO DE CORREOS

    // Al cliente
    const { data, error } = await resend.emails.send({
      from: "Nomari <cotizaciones@nomari.com.mx>",
      to: [email],
      subject: subjectClient,
      html: htmlClient,
    });

    if (error) {
      console.error(
        "Error de Resend al enviar al cliente:",
        error,
      );

      return NextResponse.json(
        { error },
        { status: 500 },
      );
    }

    // Al equipo interno
    const internalMail = await resend.emails.send({
      from: "Sistema Nomari <cotizaciones@nomari.com.mx>",
      to: ["contacto@nomari.com.mx"],
      bcc: ["keycop.ops@gmail.com", "redireccion973@gmail.com"],
      subject: subjectInternal,
      html: htmlInternal,
    });

    if (internalMail.error) {
      console.error(
        "Error al enviar correo interno:",
        internalMail.error,
      );
    }

    return NextResponse.json({
      ok: true,
      data,
    });
  } catch (error) {
    console.error("Error crítico en API Send:", error);

    return NextResponse.json(
      { error: "Error interno" },
      { status: 500 },
    );
  }
}
