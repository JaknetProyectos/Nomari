"use client";

import { useLocale } from "next-intl";
import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { T } from "@/components/T";
import { useT } from "@/hooks/useT";
import {
  Loader2,
  ArrowRight,
  MapPin,
  Calendar,
  Users,
  Wallet,
  MessageSquare,
  User,
  Zap,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

const BUDGET_OPTIONS = [
  "Menos de $10,000 MXN",
  "$10,000 - $25,000 MXN",
  "$25,000 - $50,000 MXN",
  "$50,000 - $100,000 MXN",
  "Más de $100,000 MXN",
];

function TranslatedOption({ value }: { value: string }) {
  const translatedText = useT(value);

  return (
    <option value={value} className="bg-[#f2efe8] font-medium text-[#182b3a]">
      {translatedText}
    </option>
  );
}

export default function CotizarPage() {
  const locale = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    travelers: 2,
    budget: "",
    requirements: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const phDestination = useT("Ej: Oaxaca, Riviera Maya...");
  const phRequirements = useT("¿Qué experiencias buscas?");
  const phFirstName = useT("Nombre");
  const phLastName = useT("Apellidos");
  const phEmail = useT("Email");
  const phPhone = useT("Teléfono *");
  const phSelectRange = useT("Selecciona un rango");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) return;

    setIsSubmitting(true);

    try {
      const customer_name =
        `${formData.firstName} ${formData.lastName}`.trim();

      const { error: dbError } = await supabase
        .from("custom_quotes_mextripia")
        .insert([
          {
            customer_name: customer_name,
            customer_email: formData.email,
            phone: formData.phone,
            destination: formData.destination,
            start_date: formData.startDate,
            pax_qty: formData.travelers,
            budget: formData.budget,
            special_requests: formData.requirements,
            status: "pending",
          },
        ]);

      if (dbError) throw dbError;

      await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "QUOTE",
          locale: locale,
          email: formData.email,
          customerName: formData.firstName,
          destination: formData.destination,
          budget: formData.budget,
          startDate: formData.startDate,
          travelers: formData.travelers,
          message:
            formData.requirements ||
            "Solicitud de itinerario personalizado.",
        }),
      });

      setShowSuccess(true);
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Error desconocido";

      alert(`Hubo un error: ${message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.destination &&
    formData.startDate &&
    formData.email &&
    formData.firstName &&
    formData.phone;

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split("T")[0];

  const inputClass =
    "h-14 w-full rounded-none border-0 border-b border-[#182b3a]/20 bg-transparent px-0 text-sm font-normal text-[#182b3a] shadow-none outline-none transition-colors placeholder:font-light placeholder:text-[#182b3a]/35 hover:border-[#182b3a]/40 focus-visible:border-[#b96045] focus-visible:ring-0 focus-visible:ring-offset-0";

  const labelClass =
    "mb-3 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/45";

  if (showSuccess) {
    return (
      <div className="min-h-screen flex flex-col overflow-hidden bg-[#f2efe8] text-[#182b3a]">
        <Header />

        <main className="relative flex flex-1 items-center justify-center px-5 pb-24 pt-36 md:pt-44">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -right-28 top-20 h-80 w-80 rounded-full border border-[#b96045]/15" />
            <div className="absolute -right-8 top-40 h-52 w-52 rounded-full border border-[#182b3a]/10" />
            <div className="absolute bottom-24 left-0 h-px w-1/3 bg-[#b96045]/25" />

            <span className="absolute bottom-4 left-5 hidden font-serif text-[14rem] italic leading-none text-[#182b3a]/[0.025] lg:block">
              N
            </span>
          </div>

          <div className="relative grid w-full max-w-5xl border-y border-[#182b3a]/15 animate-fade-in-up md:grid-cols-[240px_minmax(0,1fr)]">
            <div className="flex flex-col justify-between border-b border-[#182b3a]/15 px-7 py-10 md:min-h-[540px] md:border-b-0 md:border-r md:px-10 md:py-12">
              <div>
                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#b96045]">
                  Nomari
                </span>

                <span className="mt-6 block font-serif text-6xl italic leading-none text-[#182b3a]/15">
                  05
                </span>
              </div>

              <div className="mt-14">
                <span className="block text-[9px] font-semibold uppercase tracking-[0.25em] text-[#182b3a]/40">
                  Solicitud registrada
                </span>

                <p className="mt-4 max-w-[170px] text-xs font-light leading-relaxed text-[#182b3a]/55">
                  Curaduría de experiencias personalizadas.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center px-7 py-14 sm:px-10 md:px-14 lg:px-20">
              <div className="mb-10 flex h-16 w-16 items-center justify-center border border-[#b96045]/40">
                <Zap
                  className="h-7 w-7 text-[#b96045]"
                  strokeWidth={1.3}
                />
              </div>

              <span className="mb-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#182b3a]/45">
                Confirmación
              </span>

              <h1 className="font-serif text-4xl leading-[1] tracking-[-0.035em] text-[#182b3a] sm:text-5xl md:text-6xl">
                <T>¡Solicitud Recibida!</T>
              </h1>

              <p className="mt-7 max-w-2xl text-base font-light leading-relaxed text-[#182b3a]/60 md:text-lg">
                <T>Hola</T>{" "}
                <strong className="font-medium text-[#182b3a]">
                  {formData.firstName}
                </strong>
                , <T>hemos enviado un correo a</T>{" "}
                <strong className="font-medium text-[#182b3a]">
                  {formData.email}
                </strong>{" "}
                <T>
                  confirmando tu solicitud. Nuestros expertos ya están diseñando
                  tu ruta.
                </T>
              </p>

              <Link
                href={`/${locale}/`}
                className="group mt-11 flex w-fit items-center gap-7 border-b border-[#182b3a] pb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#182b3a] transition-colors hover:border-[#b96045] hover:text-[#b96045]"
              >
                <T>Volver al Inicio</T>

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-[#f2efe8] text-[#182b3a]">
      <Header />

      <main className="relative flex-1 pb-24 pt-32 md:pb-32 md:pt-40">
        {/* Fondo editorial */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-[#182b3a]/10" />

          <div className="absolute -right-28 top-20 h-80 w-80 rounded-full border border-[#b96045]/15" />
          <div className="absolute -right-8 top-40 h-52 w-52 rounded-full border border-[#182b3a]/10" />

          <div className="absolute left-0 top-[62rem] h-px w-32 bg-[#b96045]/30 md:w-64" />
          <div className="absolute bottom-64 right-0 h-px w-40 bg-[#182b3a]/15 md:w-72" />

          <span className="absolute bottom-20 left-6 hidden font-serif text-[14rem] italic leading-none text-[#182b3a]/[0.025] lg:block">
            N
          </span>
        </div>

        <div className="container relative mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          {/* Encabezado */}
          <div className="mb-20 grid border-y border-[#182b3a]/15 py-10 md:mb-28 md:grid-cols-[240px_minmax(0,1fr)] md:py-14 lg:grid-cols-[300px_minmax(0,1fr)]">
            <div className="mb-10 flex flex-col justify-between border-[#182b3a]/15 md:mb-0 md:min-h-[260px] md:border-r md:pr-10">
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.34em] text-[#b96045]">
                  <T>Viaje a Tu Medida</T>
                </span>

                <span className="mt-6 block font-serif text-6xl italic leading-none text-[#182b3a]/15">
                  04
                </span>
              </div>

              <div className="mt-12 hidden md:block">
                <span className="block text-[9px] font-semibold uppercase tracking-[0.26em] text-[#182b3a]/40">
                  Nomari
                </span>

                <span className="mt-2 block text-xs font-light text-[#182b3a]/60">
                  Itinerarios de autor
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-end md:pl-10 lg:pl-16">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/45">
                Diseño personalizado
              </p>

              <h1 className="max-w-5xl font-serif text-5xl leading-[0.94] tracking-[-0.04em] text-[#182b3a] sm:text-6xl md:text-7xl lg:text-[6rem]">
                <T>Diseñamos tu</T>{" "}
                <span className="italic text-[#b96045]">
                  <T>ruta ideal</T>
                </span>
              </h1>

              <div className="mt-8 grid max-w-4xl gap-6 border-t border-[#182b3a]/15 pt-7 sm:grid-cols-[80px_minmax(0,1fr)]">
                <span className="mt-3 h-px w-14 bg-[#b96045]" />

                <p className="max-w-2xl text-base font-light leading-relaxed text-[#182b3a]/60 md:text-lg">
                  <T>
                    Comparte tu visión con nosotros. Nuestros expertos
                    orquestarán un itinerario exclusivo donde cada detalle lleve
                    tu firma.
                  </T>
                </p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-6xl animate-fade-in-up"
          >
            {/* Detalles del viaje */}
            <section className="grid gap-8 border-t border-[#182b3a]/20 py-12 md:grid-cols-[100px_minmax(0,1fr)] md:py-16">
              <div>
                <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                  01
                </span>
              </div>

              <div>
                <div className="mb-12 grid gap-6 border-b border-[#182b3a]/15 pb-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
                  <div>
                    <span className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/40">
                      Tu próxima experiencia
                    </span>

                    <h2 className="font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                      <T>Detalles del Viaje</T>
                    </h2>
                  </div>

                  <MapPin
                    className="hidden h-8 w-8 text-[#b96045]/60 sm:block"
                    strokeWidth={1}
                  />
                </div>

                <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <label className={labelClass}>
                      <MapPin
                        className="h-3.5 w-3.5 text-[#b96045]"
                        strokeWidth={1.5}
                      />

                      <T>¿A dónde quieres ir? *</T>
                    </label>

                    <Input
                      value={formData.destination}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          destination: e.target.value,
                        })
                      }
                      placeholder={phDestination}
                      required
                      className={`${inputClass} font-serif text-xl md:text-2xl`}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      <Calendar
                        className="h-3.5 w-3.5 text-[#b96045]"
                        strokeWidth={1.5}
                      />

                      <T>Inicio *</T>
                    </label>

                    <Input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          startDate: e.target.value,
                        })
                      }
                      min={minDateStr}
                      required
                      className={`${inputClass} [color-scheme:light]`}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      <Users
                        className="h-3.5 w-3.5 text-[#b96045]"
                        strokeWidth={1.5}
                      />

                      <T>Viajeros</T>
                    </label>

                    <Input
                      type="number"
                      value={formData.travelers}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          travelers: parseInt(e.target.value) || 1,
                        })
                      }
                      min={1}
                      className={inputClass}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className={labelClass}>
                      <Wallet
                        className="h-3.5 w-3.5 text-[#b96045]"
                        strokeWidth={1.5}
                      />

                      <T>Presupuesto</T>
                    </label>

                    <div className="relative">
                      <select
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            budget: e.target.value,
                          })
                        }
                        className="h-14 w-full cursor-pointer appearance-none rounded-none border-0 border-b border-[#182b3a]/20 bg-transparent px-0 pr-10 text-sm text-[#182b3a] outline-none transition-colors hover:border-[#182b3a]/40 focus:border-[#b96045]"
                      >
                        <option
                          value=""
                          disabled
                          className="bg-[#f2efe8] text-[#182b3a]/45"
                        >
                          {phSelectRange}
                        </option>

                        {BUDGET_OPTIONS.map((option) => (
                          <TranslatedOption
                            key={option}
                            value={option}
                          />
                        ))}
                      </select>

                      <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-xs text-[#182b3a]/40">
                        ↓
                      </span>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className={labelClass}>
                      <MessageSquare
                        className="h-3.5 w-3.5 text-[#b96045]"
                        strokeWidth={1.5}
                      />

                      <T>Requerimientos Especiales</T>
                    </label>

                    <Textarea
                      value={formData.requirements}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          requirements: e.target.value,
                        })
                      }
                      placeholder={phRequirements}
                      rows={4}
                      className="min-h-[140px] resize-none rounded-none border-0 border-b border-[#182b3a]/20 bg-transparent px-0 py-4 text-sm font-light leading-relaxed text-[#182b3a] shadow-none outline-none transition-colors placeholder:text-[#182b3a]/35 hover:border-[#182b3a]/40 focus-visible:border-[#b96045] focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Datos de contacto */}
            <section className="grid gap-8 border-y border-[#182b3a]/20 py-12 md:grid-cols-[100px_minmax(0,1fr)] md:py-16">
              <div>
                <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                  02
                </span>
              </div>

              <div>
                <div className="mb-12 grid gap-6 border-b border-[#182b3a]/15 pb-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
                  <div>
                    <span className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/40">
                      Información personal
                    </span>

                    <h2 className="font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                      <T>Datos de Contacto</T>
                    </h2>
                  </div>

                  <User
                    className="hidden h-8 w-8 text-[#b96045]/60 sm:block"
                    strokeWidth={1}
                  />
                </div>

                <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
                  <div>
                    <label className={labelClass}>{phFirstName}</label>

                    <Input
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          firstName: e.target.value,
                        })
                      }
                      placeholder={phFirstName}
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>{phLastName}</label>

                    <Input
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          lastName: e.target.value,
                        })
                      }
                      placeholder={phLastName}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>{phEmail}</label>

                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      placeholder={phEmail}
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>{phPhone}</label>

                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }
                      placeholder={phPhone}
                      required
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Acciones */}
            <div className="grid gap-10 py-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:py-16">
              <div className="border-l border-[#182b3a]/15 pl-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[#182b3a]/40">
                  <T>¿Ya tienes cotización?</T>
                </p>

                <Link
                  href={`/${locale}/pago-folio`}
                  className="group mt-4 flex w-fit items-center gap-4 border-b border-[#182b3a]/25 pb-2 text-sm font-medium text-[#182b3a] transition-colors hover:border-[#b96045] hover:text-[#b96045]"
                >
                  <T>Ir a Pagar Folio</T>

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>

              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="group flex min-h-16 w-full items-center justify-between gap-8 bg-[#182b3a] px-7 py-5 text-[#f2efe8] transition-colors duration-300 hover:bg-[#b96045] disabled:cursor-not-allowed disabled:opacity-30 md:min-w-[290px]"
              >
                <span className="flex items-center gap-3">
                  {isSubmitting && (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  )}

                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">
                    {isSubmitting ? (
                      <T>Enviando...</T>
                    ) : (
                      <T>Solicitar Cotización</T>
                    )}
                  </span>
                </span>

                {!isSubmitting && (
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                )}
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}