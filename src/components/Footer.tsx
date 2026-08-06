"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { T } from "@/components/T";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  const locale = useLocale();

  return (
    <footer className="relative overflow-hidden bg-[#182b3a] pb-10 pt-20 text-[#f2efe8] md:pt-28">
      {/* Elementos decorativos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-[#f2efe8]/10" />

        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full border border-[#d58a6f]/10" />
        <div className="absolute -right-8 top-40 h-52 w-52 rounded-full border border-[#f2efe8]/5" />

        <span className="absolute -bottom-20 left-4 hidden font-serif text-[18rem] italic leading-none text-white/[0.025] lg:block">
          N
        </span>
      </div>

      <div className="container relative z-10 mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
        {/* Marca */}
        <div className="grid gap-10 border-y border-[#f2efe8]/15 py-10 md:grid-cols-[220px_minmax(0,1fr)] md:py-14 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div className="flex items-start justify-between border-[#f2efe8]/15 md:min-h-[190px] md:flex-col md:border-r md:pr-10">
            <span className="text-[9px] font-semibold uppercase tracking-[0.34em] text-[#d58a6f]">
              Curaduría de experiencias
            </span>

            <span className="font-serif text-6xl italic leading-none text-[#f2efe8]/10">
              05
            </span>
          </div>

          <div className="flex flex-col justify-end md:pl-10 lg:pl-16">
            <span className="mb-5 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#f2efe8]/35">
              Gastronomía · Cultura · Hospitalidad
            </span>

            <Link
              href={`/${locale}/`}
              className="group block w-fit font-serif text-6xl leading-none tracking-[-0.045em] text-[#f2efe8] transition-colors duration-300 hover:text-[#d58a6f] sm:text-7xl md:text-8xl lg:text-[7rem]"
            >
              Nomari
              <span className="text-[#b96045] transition-colors duration-300 group-hover:text-[#f2efe8]">
                .
              </span>
            </Link>

            <div className="mt-8 flex items-center gap-5">
              <span className="h-px w-16 bg-[#b96045]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#f2efe8]/35">
                México
              </span>
            </div>
          </div>
        </div>

        {/* Navegación */}
        <div className="grid border-b border-[#f2efe8]/15 md:grid-cols-3">
          {/* Navegación */}
          <div className="border-b border-[#f2efe8]/15 py-10 md:border-b-0 md:border-r md:pr-8 lg:py-14">
            <span className="mb-7 block text-[9px] font-semibold uppercase tracking-[0.3em] text-[#d58a6f]">
              <T>Navegación</T>
            </span>

            <nav className="flex flex-col items-start gap-5">
              <Link
                href={`/${locale}/`}
                className="group flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f2efe8]/65 transition-colors hover:text-[#f2efe8]"
              >
                <span className="h-px w-0 bg-[#b96045] transition-all duration-300 group-hover:w-5" />
                <T>Inicio</T>
              </Link>

              <Link
                href={`/${locale}/experiencias`}
                className="group flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f2efe8]/65 transition-colors hover:text-[#f2efe8]"
              >
                <span className="h-px w-0 bg-[#b96045] transition-all duration-300 group-hover:w-5" />
                <T>Expediciones</T>
              </Link>

              <Link
                href={`/${locale}/cotizar`}
                className="group flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f2efe8]/65 transition-colors hover:text-[#f2efe8]"
              >
                <span className="h-px w-0 bg-[#b96045] transition-all duration-300 group-hover:w-5" />
                <T>Eventos Privados</T>
              </Link>
            </nav>
          </div>

          {/* Contacto */}
          <div className="border-b border-[#f2efe8]/15 py-10 md:border-b-0 md:border-r md:px-8 lg:py-14">
            <span className="mb-7 block text-[9px] font-semibold uppercase tracking-[0.3em] text-[#d58a6f]">
              <T>Contacto</T>
            </span>

            <div className="space-y-6">
              <a
                href="mailto:contacto@nomari.com.mx"
                className="group grid grid-cols-[36px_minmax(0,1fr)] items-center gap-4 text-sm font-light text-[#f2efe8]/65 transition-colors hover:text-[#f2efe8]"
              >
                <span className="flex h-9 w-9 items-center justify-center border border-[#f2efe8]/15 text-[#d58a6f] transition-colors group-hover:border-[#d58a6f]">
                  <Mail
                    className="h-3.5 w-3.5"
                    strokeWidth={1.4}
                  />
                </span>

                <span className="break-all">
                  contacto@nomari.com.mx
                </span>
              </a>

              <a
                href="tel:+525519406598"
                className="group grid grid-cols-[36px_minmax(0,1fr)] items-center gap-4 text-sm font-light text-[#f2efe8]/65 transition-colors hover:text-[#f2efe8]"
              >
                <span className="flex h-9 w-9 items-center justify-center border border-[#f2efe8]/15 text-[#d58a6f] transition-colors group-hover:border-[#d58a6f]">
                  <Phone
                    className="h-3.5 w-3.5"
                    strokeWidth={1.4}
                  />
                </span>

                <span>+52 (55) 1940 6598</span>
              </a>
            </div>
          </div>

          {/* Legales */}
          <div className="py-10 md:pl-8 lg:py-14">
            <span className="mb-7 block text-[9px] font-semibold uppercase tracking-[0.3em] text-[#d58a6f]">
              <T>Legales</T>
            </span>

            <nav className="flex flex-col items-start gap-5">
              <Link
                href={`/${locale}/aviso-de-privacidad`}
                className="group flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f2efe8]/65 transition-colors hover:text-[#f2efe8]"
              >
                <span className="h-px w-0 bg-[#b96045] transition-all duration-300 group-hover:w-5" />
                <T>Aviso de Privacidad</T>
              </Link>

              <Link
                href={`/${locale}/terminos-y-condiciones`}
                className="group flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f2efe8]/65 transition-colors hover:text-[#f2efe8]"
              >
                <span className="h-px w-0 bg-[#b96045] transition-all duration-300 group-hover:w-5" />
                <T>Términos y Condiciones</T>
              </Link>

              <Link
                href={`/${locale}/politica-de-cancelacion`}
                className="group flex items-start gap-4 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.2em] text-[#f2efe8]/65 transition-colors hover:text-[#f2efe8]"
              >
                <span className="mt-2 h-px w-0 shrink-0 bg-[#b96045] transition-all duration-300 group-hover:w-5" />
                <T>Política de Reembolsos y Cancelaciones</T>
              </Link>
            </nav>
          </div>
        </div>

        {/* Pagos y copyright */}
        <div className="flex flex-col gap-8 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="mb-4 block text-[8px] font-semibold uppercase tracking-[0.26em] text-[#f2efe8]/30">
              Métodos de pago
            </span>

            <div className="flex gap-2">
              <div className="flex h-8 items-center justify-center bg-white px-3">
                <svg
                  className="h-4"
                  viewBox="0 0 780 500"
                  fill="none"
                  aria-label="Visa"
                >
                  <rect
                    width="780"
                    height="500"
                    rx="40"
                    fill="white"
                  />

                  <path
                    fill="#1434CB"
                    d="M293.2 348.7l33.3-190.4h53.3l-33.3 190.4h-53.3zM500.8 163c-10.5-3.9-27-8.1-47.6-8.1-52.4 0-89.3 26.4-89.6 64.2-.3 28 26.5 43.6 46.7 52.9 20.7 9.5 27.7 15.6 27.6 24.1-.1 13-16.6 19-31.9 19-21.3 0-32.6-3-50.1-10.3l-6.9-3.1-7.5 43.8c12.4 5.4 35.5 10.1 59.4 10.4 55.7 0 91.9-26.1 92.3-66.5.2-22.2-14-39.1-44.6-53-18.6-9-30-15-29.9-24.1 0-8.1 9.6-16.7 30.5-16.7 17.4-.3 30 3.5 39.8 7.5l4.8 2.3 7.2-42.4h.8zM581.8 158.3h-41c-12.7 0-22.2 3.5-27.8 16.2l-78.8 178.2h55.7l11.1-29.1h68.1l6.5 29.1H624l-42.2-194.4zm-65.6 125.2c4.4-11.2 21.3-54.4 21.3-54.4-.3.5 4.4-11.4 7.1-18.7l3.6 16.9s10.2 46.6 12.4 56.2h-44.4z"
                  />

                  <path
                    fill="#1434CB"
                    d="M239.5 158.3L187.4 289l-5.5-26.8c-9.6-30.7-39.5-64-73-80.6l47.5 166.9h56l83.2-190.2h-56.1z"
                  />

                  <path
                    fill="#F7B600"
                    d="M146.9 158.3H61.3l-.6 3.5c66.4 16 110.3 54.7 128.5 101.2l-18.5-88.8c-3.2-12.1-12.5-15.5-23.8-15.9z"
                  />
                </svg>
              </div>

              <div className="flex h-8 items-center justify-center bg-white px-3">
                <svg
                  className="h-4"
                  viewBox="0 0 152 100"
                  fill="none"
                  aria-label="Mastercard"
                >
                  <rect
                    width="152"
                    height="100"
                    rx="8"
                    fill="white"
                  />

                  <circle
                    cx="55"
                    cy="50"
                    r="30"
                    fill="#EB001B"
                  />

                  <circle
                    cx="97"
                    cy="50"
                    r="30"
                    fill="#F79E1B"
                  />

                  <path
                    d="M76 27.5C82.6 32.8 87 40.8 87 50C87 59.2 82.6 67.2 76 72.5C69.4 67.2 65 59.2 65 50C65 40.8 69.4 32.8 76 27.5Z"
                    fill="#FF5F00"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="text-left md:text-right">
            <span className="block text-[9px] font-light uppercase tracking-[0.2em] text-[#f2efe8]/35">
              © {new Date().getFullYear()} Nomari.{" "}
              <T>Todos los derechos reservados.</T>
            </span>

            <span className="mt-2 block text-[8px] font-semibold uppercase tracking-[0.26em] text-[#d58a6f]">
              nomari.com.mx
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}