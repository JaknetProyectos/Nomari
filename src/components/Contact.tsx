"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { T } from "@/components/T";
import {
  Mail,
  Phone,
  MapPin,
  Loader2,
  CheckCircle,
} from "lucide-react";

export function Contact() {
  const locale = useLocale();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

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
          type: "CONTACT",
          customerName: nombre,
          email: email,
          message: mensaje,
          locale: locale,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setNombre("");
        setEmail("");
        setMensaje("");

        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert(
          "No se pudo enviar el mensaje. Inténtelo de nuevo.",
        );
      }
    } catch (error) {
      console.error(
        "Error enviando mensaje de contacto:",
        error,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "peer h-16 w-full rounded-none border-0 border-b border-[#182b3a]/20 bg-transparent px-0 pt-5 text-sm font-light text-[#182b3a] outline-none transition-colors placeholder:text-transparent hover:border-[#182b3a]/40 focus:border-[#b96045]";

  const labelClass =
    "pointer-events-none absolute left-0 top-0 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/45 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-[11px] peer-placeholder-shown:text-[#182b3a]/35 peer-focus:top-0 peer-focus:text-[9px] peer-focus:text-[#b96045]";

  return (
    <section
      id="contacto"
      className="relative scroll-mt-20 overflow-hidden bg-[#f2efe8] py-24 text-[#182b3a] md:py-32"
    >
      {/* Fondo editorial */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-[#182b3a]/10" />

        <div className="absolute -right-32 top-16 h-80 w-80 rounded-full border border-[#b96045]/15" />
        <div className="absolute -right-10 top-36 h-52 w-52 rounded-full border border-[#182b3a]/10" />

        <div className="absolute bottom-32 left-0 h-px w-40 bg-[#b96045]/30 md:w-72" />

        <span className="absolute -bottom-16 right-5 hidden font-serif text-[16rem] italic leading-none text-[#182b3a]/[0.025] lg:block">
          N
        </span>
      </div>

      <div className="container relative mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
        {/* Encabezado */}
        <div className="mb-16 grid gap-8 border-y border-[#182b3a]/15 py-10 md:mb-24 md:grid-cols-[220px_minmax(0,1fr)] md:py-14 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div className="flex items-start justify-between border-[#182b3a]/15 md:min-h-[220px] md:flex-col md:border-r md:pr-10">
            <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#b96045]">
              <T>Hablemos</T>
            </span>

            <span className="font-serif text-6xl italic leading-none text-[#182b3a]/15">
              02
            </span>
          </div>

          <div className="flex flex-col justify-end md:pl-10 lg:pl-16">
            <span className="mb-5 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/40">
              Contacto Nomari
            </span>

            <h2 className="max-w-4xl font-serif text-4xl leading-[0.98] tracking-[-0.035em] text-[#182b3a] md:text-6xl lg:text-7xl">
              <T>Estamos a su entera disposición.</T>
            </h2>
          </div>
        </div>

        <div className="grid items-stretch gap-0 border-y border-[#182b3a]/20 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
          {/* Información */}
          <div className="animate-fade-in-up bg-[#182b3a] px-7 py-12 text-[#f2efe8] sm:px-10 md:py-16 lg:px-12 xl:px-16">
            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#d58a6f]">
              Información de contacto
            </span>

            <p className="mt-7 max-w-md font-serif text-3xl leading-tight tracking-[-0.02em] md:text-4xl">
              Cada conversación puede ser el inicio de una experiencia
              excepcional.
            </p>

            <div className="mt-14 divide-y divide-[#f2efe8]/15 border-y border-[#f2efe8]/15">
              <div className="grid grid-cols-[48px_minmax(0,1fr)] gap-5 py-7">
                <div className="flex h-10 w-10 items-center justify-center border border-[#f2efe8]/20 text-[#d58a6f]">
                  <MapPin
                    className="h-4 w-4"
                    strokeWidth={1.4}
                  />
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#f2efe8]/40">
                    <T>Sede Central</T>
                  </p>

                  <p className="mt-3 text-sm font-light leading-relaxed text-[#f2efe8]/70">
                    <T>
                      Av. Rio Consulado Cto Interior 516 Oficina
                      102
                    </T>
                    <br />
                    Col Tlatilco, Azcapotzalco Cp 02860
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[48px_minmax(0,1fr)] gap-5 py-7">
                <div className="flex h-10 w-10 items-center justify-center border border-[#f2efe8]/20 text-[#d58a6f]">
                  <Phone
                    className="h-4 w-4"
                    strokeWidth={1.4}
                  />
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#f2efe8]/40">
                    <T>Teléfono</T>
                  </p>

                  <p className="mt-3 text-sm font-light text-[#f2efe8]/70">
                    +52 (55) 1940 6598
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[48px_minmax(0,1fr)] gap-5 py-7">
                <div className="flex h-10 w-10 items-center justify-center border border-[#f2efe8]/20 text-[#d58a6f]">
                  <Mail
                    className="h-4 w-4"
                    strokeWidth={1.4}
                  />
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#f2efe8]/40">
                    <T>Correo Electrónico</T>
                  </p>

                  <p className="mt-3 break-all text-sm font-light text-[#f2efe8]/70">
                    contacto@nomari.com.mx
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-14 flex items-center gap-5">
              <span className="h-px flex-1 bg-[#f2efe8]/15" />
              <span className="font-serif text-4xl italic text-[#f2efe8]/10">
                N
              </span>
            </div>
          </div>

          {/* Formulario */}
          <div className="animate-fade-in-up bg-[#ebe6dd] px-7 py-12 delay-150 sm:px-10 md:py-16 lg:px-12 xl:px-16">
            {isSuccess ? (
              <div className="flex min-h-[520px] flex-col justify-center">
                <div className="flex h-16 w-16 items-center justify-center border border-[#b96045]/40">
                  <CheckCircle
                    className="h-7 w-7 text-[#b96045]"
                    strokeWidth={1.2}
                  />
                </div>

                <span className="mt-10 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#b96045]">
                  Confirmación
                </span>

                <h3 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-5xl">
                  <T>Mensaje Enviado</T>
                </h3>

                <p className="mt-6 max-w-lg text-sm font-light leading-[1.8] text-[#182b3a]/60 md:text-base">
                  <T>
                    Gracias por contactarnos. Un especialista se
                    comunicará con usted a la brevedad.
                  </T>
                </p>

                <div className="mt-10 flex items-center gap-4">
                  <span className="h-px w-16 bg-[#b96045]" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/40">
                    Nomari
                  </span>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex min-h-[520px] flex-col justify-between"
              >
                <div>
                  <div className="mb-12 border-b border-[#182b3a]/15 pb-8">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#b96045]">
                      Escríbanos
                    </span>

                    <h3 className="mt-4 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                      Comparta su visión con nosotros.
                    </h3>
                  </div>

                  <div className="space-y-10">
                    <div className="relative">
                      <input
                        type="text"
                        id="c_name"
                        value={nombre}
                        onChange={(e) =>
                          setNombre(e.target.value)
                        }
                        required
                        className={inputClass}
                        placeholder="Su nombre"
                      />

                      <label
                        htmlFor="c_name"
                        className={labelClass}
                      >
                        <T>Nombre</T>
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        id="c_email"
                        value={email}
                        onChange={(e) =>
                          setEmail(e.target.value)
                        }
                        required
                        className={inputClass}
                        placeholder="Su correo"
                      />

                      <label
                        htmlFor="c_email"
                        className={labelClass}
                      >
                        <T>Correo Electrónico</T>
                      </label>
                    </div>

                    <div className="relative pt-2">
                      <textarea
                        id="c_msg"
                        rows={5}
                        value={mensaje}
                        onChange={(e) =>
                          setMensaje(e.target.value)
                        }
                        required
                        className="peer min-h-[150px] w-full resize-none rounded-none border-0 border-b border-[#182b3a]/20 bg-transparent px-0 pt-8 text-sm font-light leading-relaxed text-[#182b3a] outline-none transition-colors placeholder:text-transparent hover:border-[#182b3a]/40 focus:border-[#b96045]"
                        placeholder="Mensaje"
                      />

                      <label
                        htmlFor="c_msg"
                        className="pointer-events-none absolute left-0 top-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/45 transition-all peer-placeholder-shown:top-8 peer-placeholder-shown:text-[11px] peer-placeholder-shown:text-[#182b3a]/35 peer-focus:top-2 peer-focus:text-[9px] peer-focus:text-[#b96045]"
                      >
                        <T>¿En qué podemos ayudarle?</T>
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group mt-12 flex min-h-16 w-full items-center justify-between gap-6 bg-[#182b3a] px-7 py-5 text-[#f2efe8] transition-colors duration-300 hover:bg-[#b96045] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <span className="flex items-center gap-3">
                    {isSubmitting && (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    )}

                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em]">
                      {isSubmitting ? (
                        <T>Enviando...</T>
                      ) : (
                        <T>Enviar Mensaje</T>
                      )}
                    </span>
                  </span>

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}