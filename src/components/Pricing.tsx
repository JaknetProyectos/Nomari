"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { T } from "@/components/T";
import {
  ArrowRight,
  CreditCard,
  Loader2,
  CheckCircle,
} from "lucide-react";

export function Pricing() {
  const locale = useLocale();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [lugar, setLugar] = useState("");
  const [fecha, setFecha] = useState("");
  const [asistentes, setAsistentes] = useState("");
  const [detalles, setDetalles] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "QUOTE",
          customerName: nombre,
          email: email,
          phone: telefono,
          destination: lugar,
          startDate: fecha,
          travelers: asistentes,
          budget: "A convenir",
          message: detalles,
          locale: locale,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setNombre("");
        setEmail("");
        setTelefono("");
        setLugar("");
        setFecha("");
        setAsistentes("");
        setDetalles("");

        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert(
          "Ocurrió un error al enviar su solicitud. Inténtelo de nuevo.",
        );
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "peer h-16 w-full rounded-none border-0 border-b border-[#f2efe8]/20 bg-transparent px-0 pt-5 text-sm font-light text-[#f2efe8] outline-none transition-colors placeholder:text-transparent hover:border-[#f2efe8]/40 focus:border-[#d58a6f]";

  const labelClass =
    "pointer-events-none absolute left-0 top-0 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#f2efe8]/40 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-[11px] peer-placeholder-shown:text-[#f2efe8]/30 peer-focus:top-0 peer-focus:text-[9px] peer-focus:text-[#d58a6f]";

  return (
    <section
      id="cotizar"
      className="relative scroll-mt-24 overflow-hidden bg-[#f2efe8] py-24 text-[#182b3a] md:py-32"
    >
      {/* Elementos decorativos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-[#182b3a]/10" />

        <div className="absolute -left-36 top-28 h-80 w-80 rounded-full border border-[#b96045]/15" />
        <div className="absolute -left-8 top-48 h-48 w-48 rounded-full border border-[#182b3a]/10" />

        <div className="absolute bottom-28 right-0 h-px w-44 bg-[#b96045]/30 md:w-80" />

        <span className="absolute -bottom-16 right-5 hidden font-serif text-[17rem] italic leading-none text-[#182b3a]/[0.025] lg:block">
          N
        </span>
      </div>

      <div className="container relative mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
        {/* Encabezado */}
        <header className="mb-16 grid gap-8 border-y border-[#182b3a]/15 py-10 animate-fade-in-up md:mb-24 md:grid-cols-[220px_minmax(0,1fr)] md:py-14 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div className="flex items-start justify-between border-[#182b3a]/15 md:min-h-[230px] md:flex-col md:border-r md:pr-10">
            <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#b96045]">
              <T>Servicio Personalizado</T>
            </span>

            <span className="font-serif text-6xl italic leading-none text-[#182b3a]/15">
              05
            </span>
          </div>

          <div className="flex flex-col justify-end md:pl-10 lg:pl-16">
            <span className="mb-5 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/40">
              <T>Eventos · Hospitalidad · Gastronomía</T>
            </span>

            <h2 className="max-w-5xl font-serif text-4xl leading-[0.98] tracking-[-0.04em] text-[#182b3a] md:text-6xl lg:text-7xl">
              <T>Hagamos realidad su próxima gran ocasión.</T>
            </h2>

            <div className="mt-8 flex items-center gap-5">
              <span className="h-px w-16 bg-[#b96045]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/40">
                <T>Propuestas Exclusivas</T>
              </span>
            </div>
          </div>
        </header>

        {/* Contenido principal */}
        <div className="grid items-stretch gap-0 border-y border-[#182b3a]/20 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
          {/* Información */}
          <div className="animate-fade-in-up bg-[#e8e2d8] px-7 py-12 sm:px-10 md:py-16 lg:px-12 xl:px-16">
            <div className="flex items-start justify-between gap-8">
              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#b96045]">
                <T>Atención Privada</T>
              </span>

              <span className="font-serif text-5xl italic leading-none text-[#182b3a]/10">
                01
              </span>
            </div>

            <p className="mt-12 max-w-lg text-sm font-light leading-[1.9] text-[#42515b] md:text-base">
              <T>
                Desde cenas íntimas hasta encuentros multitudinarios, coordinamos montajes y propuestas culinarias que capturan su esencia con máxima exactitud y elegancia.
              </T>
            </p>

            <div className="mt-12 border-y border-[#182b3a]/15 py-8">
              <span className="block text-[9px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/40">
                <T>Metodología</T>
              </span>

              <div className="mt-7 space-y-6">
                <div className="grid grid-cols-[40px_minmax(0,1fr)] gap-4">
                  <span className="font-serif text-2xl italic text-[#b96045]">
                    01
                  </span>

                  <p className="text-sm font-light leading-relaxed text-[#42515b]">
                    <T>Comparta los aspectos clave de su celebración.</T>
                  </p>
                </div>

                <div className="grid grid-cols-[40px_minmax(0,1fr)] gap-4">
                  <span className="font-serif text-2xl italic text-[#b96045]">
                    02
                  </span>

                  <p className="text-sm font-light leading-relaxed text-[#42515b]">
                    <T>Nuestros especialistas diseñarán una propuesta integral.</T>
                  </p>
                </div>

                <div className="grid grid-cols-[40px_minmax(0,1fr)] gap-4">
                  <span className="font-serif text-2xl italic text-[#b96045]">
                    03
                  </span>

                  <p className="text-sm font-light leading-relaxed text-[#42515b]">
                    <T>Obtenga una solución personalizada según sus expectativas.</T>
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-9 text-sm font-light italic leading-[1.8] text-[#182b3a]/55">
              <T>
                Indíquenos los requerimientos de su evento y elaboraremos una cotización personalizada. Si ya cuenta con una orden previa y número de folio, puede liquidar directamente en nuestra pasarela.
              </T>
            </p>

            <Link
              href={`/${locale}/pago-folio`}
              className="group mt-10 flex min-h-16 w-full items-center justify-between border border-[#182b3a]/20 px-6 text-[#182b3a] transition-all duration-300 hover:border-[#b96045] hover:bg-[#b96045] hover:text-white"
            >
              <span className="flex items-center gap-4">
                <CreditCard
                  className="h-4 w-4"
                  strokeWidth={1.4}
                />

                <span className="text-[9px] font-semibold uppercase tracking-[0.22em]">
                  <T>Liquidar Folio Registrado</T>
                </span>
              </span>

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>

            <blockquote className="mt-12 border-l border-[#b96045]/60 pl-6">
              <p className="font-serif text-xl italic leading-relaxed text-[#182b3a] md:text-2xl">
                <T>
                  &quot;El arte de la hospitalidad radica en armonizar cada elemento para que los anfitriones disfruten plenamente de la ocasión.&quot;
                </T>
              </p>
            </blockquote>
          </div>

          {/* Formulario */}
          <div className="animate-fade-in-up bg-[#182b3a] px-7 py-12 text-[#f2efe8] delay-150 sm:px-10 md:py-16 lg:px-12 xl:px-16">
            {isSuccess ? (
              <div className="flex min-h-[720px] flex-col justify-center">
                <div className="flex h-16 w-16 items-center justify-center border border-[#d58a6f]/50">
                  <CheckCircle
                    className="h-7 w-7 text-[#d58a6f]"
                    strokeWidth={1.15}
                  />
                </div>

                <span className="mt-10 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#d58a6f]">
                  <T>Confirmación</T>
                </span>

                <h3 className="mt-5 max-w-xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#f2efe8] md:text-5xl">
                  <T>Petición Enviada</T>
                </h3>

                <p className="mt-7 max-w-xl text-sm font-light leading-[1.9] text-[#f2efe8]/60 md:text-base">
                  <T>
                    Nuestro equipo curatorial revisará sus datos para presentarle una solución diseñada a su medida muy pronto.
                  </T>
                </p>

                <div className="mt-12 flex items-center gap-5">
                  <span className="h-px w-16 bg-[#d58a6f]" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[#f2efe8]/35">
                    Nomari
                  </span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-12 flex items-start justify-between gap-8 border-b border-[#f2efe8]/15 pb-8">
                  <div>
                    <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#d58a6f]">
                      <T>Formulario de Cotización</T>
                    </span>

                    <h3 className="mt-4 max-w-xl font-serif text-3xl leading-tight tracking-[-0.025em] text-[#f2efe8] md:text-4xl">
                      <T>Comparta los detalles de su idea.</T>
                    </h3>
                  </div>

                  <span className="hidden font-serif text-5xl italic leading-none text-[#f2efe8]/10 sm:block">
                    02
                  </span>
                </div>

                <div className="space-y-10">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      required
                      className={inputClass}
                      placeholder="Nombre"
                    />

                    <label htmlFor="name" className={labelClass}>
                      <T>Nombre y Apellido</T>
                    </label>
                  </div>

                  <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={inputClass}
                        placeholder="Email"
                      />

                      <label htmlFor="email" className={labelClass}>
                        <T>Correo de Contacto</T>
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        required
                        className={inputClass}
                        placeholder="Teléfono"
                      />

                      <label htmlFor="phone" className={labelClass}>
                        <T>Número Telefónico</T>
                      </label>
                    </div>
                  </div>

                  <div className="grid gap-x-8 gap-y-10 md:grid-cols-3">
                    <div className="relative">
                      <input
                        type="text"
                        id="lugar"
                        value={lugar}
                        onChange={(e) => setLugar(e.target.value)}
                        required
                        className={inputClass}
                        placeholder="Destino"
                      />

                      <label htmlFor="lugar" className={labelClass}>
                        <T>Ciudad / Sede</T>
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="date"
                        id="fecha"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        required
                        className={`${inputClass} [color-scheme:dark]`}
                        placeholder="Fecha"
                      />

                      <label htmlFor="fecha" className={labelClass}>
                        <T>Fecha Estimada</T>
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="number"
                        id="asistentes"
                        value={asistentes}
                        onChange={(e) => setAsistentes(e.target.value)}
                        required
                        min="1"
                        className={inputClass}
                        placeholder="Asistentes"
                      />

                      <label htmlFor="asistentes" className={labelClass}>
                        <T>Número de Invitados</T>
                      </label>
                    </div>
                  </div>

                  <div className="relative pt-2">
                    <textarea
                      id="details"
                      rows={5}
                      value={detalles}
                      onChange={(e) => setDetalles(e.target.value)}
                      className="peer min-h-[160px] w-full resize-none rounded-none border-0 border-b border-[#f2efe8]/20 bg-transparent px-0 pt-8 text-sm font-light leading-relaxed text-[#f2efe8] outline-none transition-colors placeholder:text-transparent hover:border-[#f2efe8]/40 focus:border-[#d58a6f]"
                      placeholder="Detalles"
                    />

                    <label
                      htmlFor="details"
                      className="pointer-events-none absolute left-0 top-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#f2efe8]/40 transition-all peer-placeholder-shown:top-8 peer-placeholder-shown:text-[11px] peer-placeholder-shown:text-[#f2efe8]/30 peer-focus:top-2 peer-focus:text-[9px] peer-focus:text-[#d58a6f]"
                    >
                      <T>Detalles y Requerimientos Especiales</T>
                    </label>
                  </div>
                </div>

                <div className="mt-12 grid items-center gap-7 border-t border-[#f2efe8]/15 pt-8 md:grid-cols-[minmax(0,1fr)_auto]">
                  <p className="max-w-md text-xs font-light leading-relaxed text-[#f2efe8]/40">
                    <T>
                      Al completar y enviar este formulario, nuestro equipo procesará su información para preparar un presupuesto personalizado.
                    </T>
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex min-h-16 min-w-[250px] items-center justify-between gap-8 bg-[#b96045] px-7 text-white transition-colors duration-300 hover:bg-[#d58a6f] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <span className="text-[9px] font-semibold uppercase tracking-[0.22em]">
                      {isSubmitting ? (
                        <T>Enviando...</T>
                      ) : (
                        <T>Solicitar Cotización</T>
                      )}
                    </span>

                    {isSubmitting ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}