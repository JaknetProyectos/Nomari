"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { T } from "@/components/T";
import Image from "next/image";
import { Trophy } from "lucide-react";

export function FifaSection() {
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#f2efe8] py-24 text-[#182b3a] md:py-32">
      {/* Fondo editorial */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-[#182b3a]/10" />

        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full border border-[#b96045]/15" />
        <div className="absolute -right-10 top-40 h-52 w-52 rounded-full border border-[#182b3a]/10" />

        <div className="absolute bottom-28 left-0 h-px w-40 bg-[#b96045]/30 md:w-72" />

        <span className="absolute -bottom-12 left-5 hidden font-serif text-[16rem] italic leading-none text-[#182b3a]/[0.025] lg:block">
          26
        </span>
      </div>

      <div className="container relative mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
        {/* Encabezado */}
        <div className="mb-14 grid gap-8 border-y border-[#182b3a]/15 py-10 animate-fade-in-up md:mb-20 md:grid-cols-[220px_minmax(0,1fr)] md:py-14 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div className="flex items-start justify-between border-[#182b3a]/15 md:min-h-[200px] md:flex-col md:border-r md:pr-10">
            <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#b96045]">
              <T>Hospitalidad de Élite</T>
            </span>

            <span className="font-serif text-6xl italic leading-none text-[#182b3a]/15">
              04
            </span>
          </div>

          <div className="flex flex-col justify-end md:pl-10 lg:pl-16">
            <span className="mb-5 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/40">
              <T>Especial Mundial 2026</T>
            </span>

            <h2 className="max-w-4xl font-serif text-4xl leading-[0.98] tracking-[-0.035em] text-[#182b3a] md:text-6xl lg:text-7xl">
              <T>Viva la Fiesta del Fútbol con la Máxima Distinción.</T>
            </h2>
          </div>
        </div>

        {/* Composición principal */}
        <div className="grid items-stretch gap-0 lg:grid-cols-[minmax(0,1.25fr)_minmax(380px,0.75fr)]">
          {/* Imagen */}
          <div className="relative min-h-[500px] overflow-hidden bg-[#d4cec4] animate-fade-in-up md:min-h-[680px]">
            <Image
              src="https://images.unsplash.com/photo-1614632537190-23e4146777db?q=80&w=2000&auto=format&fit=crop"
              alt="Hospitalidad Mundial"
              fill
              className="object-cover transition-transform duration-[1800ms] ease-out hover:scale-[1.025]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#182b3a]/70 via-[#182b3a]/5 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-8 p-7 text-white md:p-10">
              <div className="border-l border-white/60 pl-4">
                <span className="text-[9px] font-semibold uppercase tracking-[0.26em] text-white/60">
                  Nomari
                </span>

                <p className="mt-3 max-w-sm font-serif text-3xl leading-tight md:text-4xl">
                  <T>Copa del Mundo 2026</T>
                </p>
              </div>

              <span className="hidden font-serif text-6xl italic leading-none text-white/20 sm:block">
                MX
              </span>
            </div>
          </div>

          {/* Contenido */}
          <div className="flex animate-fade-in-up flex-col justify-between bg-[#182b3a] px-7 py-12 text-[#f2efe8] delay-150 sm:px-10 md:py-16 lg:px-12 xl:px-14">
            <div>
              <div className="flex items-start justify-between gap-8">
                <div className="flex h-12 w-12 items-center justify-center border border-[#f2efe8]/20 text-[#d58a6f]">
                  <Trophy
                    className="h-5 w-5"
                    strokeWidth={1.3}
                  />
                </div>

                <span className="font-serif text-5xl italic leading-none text-[#f2efe8]/10">
                  2026
                </span>
              </div>

              <span className="mt-12 block text-[9px] font-semibold uppercase tracking-[0.3em] text-[#d58a6f]">
                <T>Hospitalidad Deportiva</T>
              </span>

              <h3 className="mt-5 font-serif text-3xl leading-[1.05] tracking-[-0.025em] text-[#f2efe8] md:text-4xl">
                <T>Una Experiencia Mundialista Incomparable.</T>
              </h3>

              <p className="mt-8 text-sm font-light leading-[1.9] text-[#f2efe8]/60 md:text-base">
                <T>
                  Asegure su lugar en las experiencias y espacios gastronómicos más codiciados del torneo. Gestionamos reservaciones preferenciales y accesos exclusivos para que disfrute de cada momento sin preocupaciones.
                </T>
              </p>
            </div>

            <div className="mt-14">
              <Link
                href={`/${locale}/mundial-2026`}
                className="group flex min-h-16 w-full items-center justify-between gap-6 bg-[#b96045] px-6 py-5 text-[#fffaf4] transition-colors duration-300 hover:bg-[#ca6f52]"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">
                  <T>Conocer Paquetes VIP</T>
                </span>

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>

              <div className="mt-8 flex items-center gap-4">
                <span className="h-px flex-1 bg-[#f2efe8]/15" />
                <span className="h-1.5 w-1.5 rotate-45 border border-[#d58a6f]" />
                <span className="h-px flex-1 bg-[#f2efe8]/15" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}