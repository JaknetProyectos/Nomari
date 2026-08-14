"use client";

import { useLocale } from "next-intl";
import { useState, Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { CheckCircle, Loader2, Lock, ShieldCheck } from "lucide-react";
import { T } from "@/components/T";
import { useT } from "@/hooks/useT";

function CheckoutContent() {
  const router = useRouter();
  const { cart, clearCart } = useCart();
  const finalTotal = cart.total;

  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [billingInfo, setBillingInfo] = useState({
    pais: "",
    direccion: "",
    localidad: "",
    estado: "",
    codigo_postal: "",
  });

  const [addNotes, setAddNotes] = useState(false);
  const [orderNotes, setOrderNotes] = useState("");

  const [cardInfo, setCardInfo] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  const locale = useLocale();

  useEffect(() => {
    const savedData = sessionStorage.getItem("explonix_temp_contact");

    if (savedData) {
      const { nombre, email, folio } = JSON.parse(savedData);

      setContactInfo((prev) => ({
        ...prev,
        firstName: nombre,
        email: email,
      }));

      setOrderNotes(`Pago referente al Folio: ${folio}`);
      setAddNotes(true);
      sessionStorage.removeItem("explonix_temp_contact");
    }
  }, []);

  const phNombre = useT("Nombre");
  const phApellidos = useT("Apellidos");
  const phEmail = useT("Email");
  const phTelefono = useT("Teléfono");
  const phPais = useT("País / Región");
  const phDireccion = useT("Dirección completa (Calle y número)");
  const phLocalidad = useT("Localidad / Ciudad");
  const phEstado = useT("Región / Estado");
  const phCP = useT("Código Postal");
  const phTarjeta = useT("Número de tarjeta");
  const phNombreTarjeta = useT("Nombre en la tarjeta");
  const phFecha = useT("MM/AA");
  const phCvv = useT("CVV");
  const textProcesando = useT("Procesando pago...");
  const textPagar = useT("Completar Reserva");
  const phNotas = useT(
    "Ej: Alergias alimentarias, peticiones especiales...",
  );

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 2,
    }).format(price);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale,
          contactInfo,
          billingInfo,
          orderNotes: addNotes ? orderNotes : null,
          cart,
          cardInfo,
          formattedTotal: formatPrice(finalTotal),
          manualFolioData: null,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Error procesando el pago");
      }

      setShowSuccess(true);
      clearCart();
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Error desconocido";

      alert(`Error al procesar el pago: ${errorMessage}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const isFormValid =
    contactInfo.firstName &&
    contactInfo.email &&
    contactInfo.phone &&
    billingInfo.pais &&
    billingInfo.direccion &&
    billingInfo.localidad &&
    billingInfo.estado &&
    billingInfo.codigo_postal &&
    cardInfo.number.length >= 15 &&
    cardInfo.name &&
    cardInfo.expiry.length === 5 &&
    cardInfo.cvv.length >= 3 &&
    cart.items.length > 0;

  const handleExpiryChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    let val = e.target.value.replace(/\D/g, "");

    if (val.length > 4) {
      val = val.slice(0, 4);
    }

    if (val.length > 2) {
      val = `${val.slice(0, 2)}/${val.slice(2)}`;
    }

    setCardInfo({
      ...cardInfo,
      expiry: val,
    });
  };

  const inputClass =
    "w-full border-0 border-b border-[#182b3a]/20 bg-transparent px-0 py-3 text-sm text-[#182b3a] outline-none transition-colors placeholder:text-[#182b3a]/30 focus:border-[#b96045]";

  const labelClass =
    "mb-2 block text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/45";

  if (showSuccess) {
    return (
      <main className="relative flex flex-1 items-center justify-center overflow-hidden bg-[#f2efe8] px-5 pb-24 pt-36 md:pt-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -right-28 top-20 h-80 w-80 rounded-full border border-[#b96045]/15" />
          <div className="absolute -right-8 top-40 h-52 w-52 rounded-full border border-[#182b3a]/10" />
          <div className="absolute bottom-20 left-0 h-px w-1/3 bg-[#182b3a]/10" />

          <span className="absolute bottom-5 left-5 hidden font-serif text-[14rem] italic leading-none text-[#182b3a]/[0.025] lg:block">
            N
          </span>
        </div>

        <div className="relative grid w-full max-w-5xl overflow-hidden border-y border-[#182b3a]/15 bg-[#f2efe8] animate-fade-in-up md:grid-cols-[230px_minmax(0,1fr)]">
          <div className="flex flex-col justify-between border-b border-[#182b3a]/15 px-7 py-10 md:min-h-[500px] md:border-b-0 md:border-r md:px-9 md:py-12">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#b96045]">
                Nomari
              </span>

              <span className="mt-6 block font-serif text-6xl italic leading-none text-[#182b3a]/15">
                04
              </span>
            </div>

            <p className="mt-12 max-w-[170px] text-xs font-light leading-relaxed text-[#182b3a]/50">
              Curaduría de experiencias personalizadas.
            </p>
          </div>

          <div className="flex flex-col justify-center px-7 py-14 sm:px-10 md:px-14 lg:px-20">
            <CheckCircle
              className="mb-9 h-14 w-14 text-[#b96045]"
              strokeWidth={1}
            />

            <span className="mb-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#182b3a]/45">
              Confirmación
            </span>

            <h1 className="max-w-3xl font-serif text-4xl leading-[1] tracking-[-0.035em] text-[#182b3a] sm:text-5xl md:text-6xl">
              <T>Reserva Confirmada</T>
            </h1>

            <p className="mt-7 max-w-2xl text-base font-light leading-relaxed text-[#182b3a]/60 md:text-lg">
              <T>
                Su pago ha sido procesado exitosamente. Hemos enviado los
                detalles de su itinerario por correo electrónico.
              </T>
            </p>

            <Link
              href={`/${locale}/`}
              className="group mt-10 flex w-fit items-center gap-8 border-b border-[#182b3a] pb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#182b3a] transition-colors hover:border-[#b96045] hover:text-[#b96045]"
            >
              <T>Volver al Inicio</T>

              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative flex-1 overflow-hidden bg-[#f2efe8] pb-24 pt-32 text-[#182b3a] md:pb-32 md:pt-40">
      {/* Fondo decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-[#182b3a]/10" />

        <div className="absolute -right-28 top-20 h-80 w-80 rounded-full border border-[#b96045]/15" />
        <div className="absolute -right-8 top-40 h-52 w-52 rounded-full border border-[#182b3a]/10" />

        <div className="absolute left-0 top-[52rem] h-px w-32 bg-[#b96045]/30 md:w-64" />
        <div className="absolute bottom-60 right-0 h-px w-40 bg-[#182b3a]/15 md:w-72" />

        <span className="absolute bottom-20 left-6 hidden font-serif text-[14rem] italic leading-none text-[#182b3a]/[0.025] lg:block">
          N
        </span>
      </div>

      <div className="container relative mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10 animate-fade-in-up">
        {/* Encabezado */}
        <div className="mb-16 grid border-y border-[#182b3a]/15 py-9 md:mb-24 md:grid-cols-[220px_minmax(0,1fr)] md:py-12 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div className="mb-9 flex flex-col justify-between border-[#182b3a]/15 md:mb-0 md:min-h-48 md:border-r md:pr-10">
            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.34em] text-[#b96045]">
                <T>Paso Final</T>
              </span>

              <span className="mt-5 block font-serif text-5xl italic leading-none text-[#182b3a]/20">
                03
              </span>
            </div>

            <div className="mt-10 hidden md:block">
              <span className="block text-[9px] font-semibold uppercase tracking-[0.26em] text-[#182b3a]/40">
                Nomari
              </span>

              <span className="mt-2 block text-xs font-light text-[#182b3a]/60">
                Reserva segura
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-end md:pl-10 lg:pl-16">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/45">
              Confirmación de experiencia
            </p>

            <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.035em] text-[#182b3a] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              <T>Finalizar Compra</T>
            </h1>

            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-14 bg-[#b96045]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/45">
                Pago protegido
              </span>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid items-start gap-16 lg:grid-cols-12 lg:gap-10 xl:gap-16"
        >
          {/* Formulario */}
          <div className="space-y-0 lg:col-span-7 xl:col-span-8">
            {/* Datos de facturación */}
            <section className="grid gap-8 border-t border-[#182b3a]/20 py-12 md:grid-cols-[80px_minmax(0,1fr)] md:py-16">
              <div>
                <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                  01
                </span>
              </div>

              <div>
                <div className="mb-10">
                  <span className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/40">
                    Información personal
                  </span>

                  <h2 className="font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                    <T>Datos de Facturación</T>
                  </h2>
                </div>

                <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>{phNombre}</label>

                    <input
                      value={contactInfo.firstName}
                      onChange={(e) =>
                        setContactInfo({
                          ...contactInfo,
                          firstName: e.target.value,
                        })
                      }
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>{phApellidos}</label>

                    <input
                      value={contactInfo.lastName}
                      onChange={(e) =>
                        setContactInfo({
                          ...contactInfo,
                          lastName: e.target.value,
                        })
                      }
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>{phEmail}</label>

                    <input
                      type="email"
                      value={contactInfo.email}
                      onChange={(e) =>
                        setContactInfo({
                          ...contactInfo,
                          email: e.target.value,
                        })
                      }
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>{phTelefono}</label>

                    <input
                      type="tel"
                      value={contactInfo.phone}
                      onChange={(e) =>
                        setContactInfo({
                          ...contactInfo,
                          phone: e.target.value,
                        })
                      }
                      required
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Dirección */}
            <section className="grid gap-8 border-t border-[#182b3a]/20 py-12 md:grid-cols-[80px_minmax(0,1fr)] md:py-16">
              <div>
                <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                  02
                </span>
              </div>

              <div>
                <div className="mb-10">
                  <span className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/40">
                    Ubicación fiscal
                  </span>

                  <h2 className="font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                    <T>Dirección de Facturación</T>
                  </h2>
                </div>

                <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className={labelClass}>{phPais}</label>

                    <input
                      required
                      value={billingInfo.pais}
                      onChange={(e) =>
                        setBillingInfo({
                          ...billingInfo,
                          pais: e.target.value,
                        })
                      }
                      className={inputClass}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className={labelClass}>{phDireccion}</label>

                    <input
                      required
                      value={billingInfo.direccion}
                      onChange={(e) =>
                        setBillingInfo({
                          ...billingInfo,
                          direccion: e.target.value,
                        })
                      }
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>{phLocalidad}</label>

                    <input
                      required
                      value={billingInfo.localidad}
                      onChange={(e) =>
                        setBillingInfo({
                          ...billingInfo,
                          localidad: e.target.value,
                        })
                      }
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>{phEstado}</label>

                    <input
                      required
                      value={billingInfo.estado}
                      onChange={(e) =>
                        setBillingInfo({
                          ...billingInfo,
                          estado: e.target.value,
                        })
                      }
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>{phCP}</label>

                    <input
                      required
                      value={billingInfo.codigo_postal}
                      onChange={(e) =>
                        setBillingInfo({
                          ...billingInfo,
                          codigo_postal: e.target.value,
                        })
                      }
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="mt-12 border-y border-[#182b3a]/15 py-6">
                  <label className="group flex cursor-pointer items-start gap-4 text-sm font-medium text-[#182b3a]">
                    <input
                      type="checkbox"
                      checked={addNotes}
                      onChange={(e) => setAddNotes(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-[#b96045]"
                    />

                    <span className="transition-colors group-hover:text-[#b96045]">
                      <T>Añadir peticiones especiales o alergias</T>
                    </span>
                  </label>

                  {addNotes && (
                    <div className="mt-7 animate-fade-in-up">
                      <textarea
                        placeholder={phNotas}
                        value={orderNotes}
                        onChange={(e) => setOrderNotes(e.target.value)}
                        className="w-full resize-none border-0 border-b border-[#182b3a]/20 bg-transparent px-0 py-4 text-sm leading-relaxed text-[#182b3a] outline-none transition-colors placeholder:text-[#182b3a]/30 focus:border-[#b96045]"
                        rows={3}
                      />
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Pago */}
            <section className="grid gap-8 border-y border-[#182b3a]/20 py-12 md:grid-cols-[80px_minmax(0,1fr)] md:py-16">
              <div>
                <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                  03
                </span>
              </div>

              <div>
                <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <span className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/40">
                      Transacción segura
                    </span>

                    <h2 className="font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                      <T>Información de Pago</T>
                    </h2>
                  </div>

                  <div className="h-6 opacity-55">
                    <img
                      src="/logo-keycop-2.png"
                      alt="Powered by Keycop"
                      className="h-full object-contain grayscale"
                    />
                  </div>
                </div>

                <div className="relative overflow-hidden bg-[#182b3a] px-6 py-8 text-[#f2efe8] sm:px-8 md:px-12 md:py-12">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                  >
                    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#f2efe8]/10" />
                    <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full border border-[#b96045]/40" />
                    <span className="absolute bottom-0 right-4 font-serif text-8xl italic leading-none text-[#f2efe8]/[0.035]">
                      N
                    </span>
                  </div>

                  <div className="relative z-10 grid gap-9">
                    <div className="flex items-center justify-between border-b border-[#f2efe8]/10 pb-6">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#d58a6f]">
                        Nomari
                      </span>

                      <Lock
                        className="h-4 w-4 text-[#f2efe8]/45"
                        strokeWidth={1.5}
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.22em] text-[#f2efe8]/45">
                        {phTarjeta}
                      </label>

                      <input
                        required
                        maxLength={19}
                        value={cardInfo.number}
                        onChange={(e) =>
                          setCardInfo({
                            ...cardInfo,
                            number: e.target.value.replace(/\D/g, ""),
                          })
                        }
                        className="w-full border-0 border-b border-[#f2efe8]/20 bg-transparent px-0 py-3 font-serif text-xl tracking-[0.15em] text-[#f2efe8] outline-none transition-colors placeholder:text-[#f2efe8]/15 focus:border-[#d58a6f] sm:text-2xl"
                        placeholder="0000 0000 0000 0000"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.22em] text-[#f2efe8]/45">
                        {phNombreTarjeta}
                      </label>

                      <input
                        required
                        value={cardInfo.name}
                        onChange={(e) =>
                          setCardInfo({
                            ...cardInfo,
                            name: e.target.value.toUpperCase(),
                          })
                        }
                        className="w-full border-0 border-b border-[#f2efe8]/20 bg-transparent px-0 py-3 text-sm font-medium tracking-[0.18em] text-[#f2efe8] outline-none transition-colors placeholder:text-[#f2efe8]/15 focus:border-[#d58a6f]"
                        placeholder="TITULAR DE LA TARJETA"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-8 md:gap-12">
                      <div>
                        <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.22em] text-[#f2efe8]/45">
                          {phFecha}
                        </label>

                        <input
                          required
                          maxLength={5}
                          value={cardInfo.expiry}
                          onChange={handleExpiryChange}
                          className="w-full border-0 border-b border-[#f2efe8]/20 bg-transparent px-0 py-3 text-sm font-medium tracking-[0.18em] text-[#f2efe8] outline-none transition-colors placeholder:text-[#f2efe8]/15 focus:border-[#d58a6f]"
                          placeholder="MM/AA"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.22em] text-[#f2efe8]/45">
                          {phCvv}
                        </label>

                        <input
                          type="password"
                          required
                          maxLength={4}
                          value={cardInfo.cvv}
                          onChange={(e) =>
                            setCardInfo({
                              ...cardInfo,
                              cvv: e.target.value.replace(/\D/g, ""),
                            })
                          }
                          className="w-full border-0 border-b border-[#f2efe8]/20 bg-transparent px-0 py-3 text-sm font-medium tracking-[0.18em] text-[#f2efe8] outline-none transition-colors placeholder:text-[#f2efe8]/15 focus:border-[#d58a6f]"
                          placeholder="***"
                        />
                      </div>
                    </div>

                    <div className="mt-2 flex items-center gap-3 border-t border-[#f2efe8]/10 pt-6">
                      <ShieldCheck
                        className="h-4 w-4 shrink-0 text-[#d58a6f]"
                        strokeWidth={1.5}
                      />

                      <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#f2efe8]/50">
                        <T>Conexión cifrada de extremo a extremo.</T>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Resumen */}
          <aside className="lg:col-span-5 xl:col-span-4">
            <div className="sticky top-28 overflow-hidden border border-[#182b3a]/15 bg-[#ebe6dd]">
              <div className="border-b border-[#182b3a]/15 px-7 py-7 md:px-9 md:py-8">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#b96045]">
                    Resumen
                  </span>

                  <span className="font-serif text-4xl italic leading-none text-[#182b3a]/10">
                    N
                  </span>
                </div>

                <h2 className="mt-8 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a]">
                  <T>Detalle de Inversión</T>
                </h2>
              </div>

              <div className="px-7 py-8 md:px-9 md:py-10">
                <div className="mb-10 space-y-0 border-t border-[#182b3a]/15">
                  {cart.items.length === 0 ? (
                    <p className="border-b border-[#182b3a]/15 py-6 text-sm font-light text-[#182b3a]/55">
                      <T>Tu carrito está vacío.</T>
                    </p>
                  ) : (
                    cart.items.map((item, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-[minmax(0,1fr)_auto] gap-5 border-b border-[#182b3a]/15 py-6 text-sm"
                      >
                        <span className="font-light leading-relaxed text-[#182b3a]/60">
                          <T>{item.experience.title}</T>

                          <span className="mt-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#182b3a]">
                            x{item.people} <T>personas</T>
                          </span>
                        </span>

                        <span className="font-medium text-[#182b3a]">
                          {formatPrice(item.totalPrice)}
                        </span>
                      </div>
                    ))
                  )}
                </div>

                <div className="border-t border-[#182b3a]/20 pt-8">
                  <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-start xl:flex-row xl:items-end">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/45">
                      <T>Total A Pagar</T>
                    </span>

                    <div className="sm:text-right lg:text-left xl:text-right">
                      <div className="font-serif text-4xl leading-none tracking-[-0.03em] text-[#182b3a]">
                        {formatPrice(finalTotal)}
                      </div>

                      <div className="mt-2 text-[9px] font-medium uppercase tracking-[0.2em] text-[#182b3a]/40">
                        <T>IVA incluido</T>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!isFormValid || isProcessing}
                    className="group flex w-full items-center justify-between bg-[#b96045] px-6 py-5 text-[#fffaf4] transition-colors duration-300 hover:bg-[#ca6f52] disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <span className="flex items-center gap-3">
                      {isProcessing ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Lock className="h-4 w-4" strokeWidth={1.5} />
                      )}

                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">
                        {isProcessing ? textProcesando : textPagar}
                      </span>
                    </span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>

                  <div className="mt-8 flex items-center gap-4">
                    <span className="h-px flex-1 bg-[#182b3a]/15" />
                    <span className="h-1.5 w-1.5 rotate-45 border border-[#b96045]" />
                    <span className="h-px flex-1 bg-[#182b3a]/15" />
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </form>
      </div>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f2efe8]">
      <Header />

      <Suspense
        fallback={
          <div className="flex flex-1 items-center justify-center bg-[#f2efe8]">
            <div className="flex flex-col items-center gap-5">
              <Loader2 className="h-8 w-8 animate-spin text-[#b96045]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/45">
                Nomari
              </span>
            </div>
          </div>
        }
      >
        <CheckoutContent />
      </Suspense>

      <Footer />
    </div>
  );
}