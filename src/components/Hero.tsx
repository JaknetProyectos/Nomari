"use client";

import { useLocale } from "next-intl";
import { T } from "@/components/T";
import Image from "next/image";

export function Hero() {
  const locale = useLocale();

  return (
    <section
      data-locale={locale}
      className="relative min-h-screen w-full overflow-hidden bg-[#f2efe8] text-[#182b3a]"
    >
      {/* Elementos decorativos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute left-0 top-0 h-full w-px bg-[#182b3a]/10 md:left-8 lg:left-12" />

        <div className="absolute -left-40 top-1/3 h-80 w-80 rounded-full border border-[#b96045]/10" />

        <span className="absolute -bottom-20 right-4 hidden font-serif text-[20rem] italic leading-none text-[#182b3a]/[0.025] xl:block">
          N
        </span>
      </div>

      <div className="relative z-10 mx-auto min-h-screen max-w-[1600px] px-5 pb-10 pt-28 sm:px-7 md:px-10 lg:px-12 lg:pb-12 lg:pt-24">
        <div className="grid min-h-[calc(100vh-8rem)] items-stretch gap-0 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          {/* Contenido */}
          <div className="relative z-20 flex flex-col justify-between border-y border-[#182b3a]/15 py-9 animate-fade-up lg:border-r lg:py-12 lg:pr-12 xl:pr-16">
            {/* Parte superior */}
            <div className="flex items-start justify-between gap-8">
              <div>
                <span className="block text-[9px] font-semibold uppercase tracking-[0.34em] text-[#b96045]">
                  <T>Curaduría Gastronómica</T>
                </span>

                <div className="mt-5 flex items-center gap-4">
                  <span className="h-px w-12 bg-[#b96045]" />

                  <span className="text-[8px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/35">
                    Nomari · México
                  </span>
                </div>
              </div>

              <span className="font-serif text-5xl italic leading-none text-[#182b3a]/12 md:text-6xl">
                01
              </span>
            </div>

            {/* Título */}
            <div className="relative my-14 lg:my-10 xl:my-16">
              <h1 className="relative z-20 font-serif text-[4.2rem] leading-[0.82] tracking-[-0.055em] text-[#182b3a] sm:text-[5.5rem] md:text-[7rem] lg:w-[120%] lg:text-[6.8rem] xl:text-[8.8rem] 2xl:text-[10rem]">
                <span className="block">
                  <T>Secretos</T>
                </span>

                <span className="block font-normal italic text-[#b96045]">
                  <T>del sabor.</T>
                </span>

                <span className="block whitespace-nowrap">
                  <T>Herencia viva.</T>
                </span>
              </h1>
            </div>

            {/* Descripción */}
            <div className="grid gap-7 border-t border-[#182b3a]/15 pt-7 sm:grid-cols-[56px_minmax(0,1fr)]">
              <span className="mt-3 h-px w-12 bg-[#b96045]" />

              <p className="max-w-md text-sm font-light leading-[1.9] text-[#42515b] md:text-base">
                <T>
                  Creamos expediciones culinarias de alto nivel. Del origen de los ingredientes a las propuestas más íntimas de la República, guiamos a paladares audaces por senderos inolvidables.
                </T>
              </p>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative min-h-[55vh] animate-fade-up delay-200 lg:min-h-0">
            <div className="absolute inset-0 overflow-hidden bg-[#d7d0c6] lg:left-0 lg:top-8 lg:bottom-8">
              <Image
                src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
                alt="Alta Gastronomía"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="animate-ken-burns object-cover object-center opacity-95"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#182b3a]/75 via-[#182b3a]/5 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-8 p-7 text-[#f2efe8] md:p-10 lg:p-12">
                <div className="border-l border-[#d58a6f] pl-4">
                  <span className="block text-[8px] font-semibold uppercase tracking-[0.3em] text-[#f2efe8]/55">
                    <T>Experiencias de Autor</T>
                  </span>

                  <span className="mt-3 block font-serif text-2xl leading-tight md:text-3xl">
                    <T>Sabor, origen y memoria.</T>
                  </span>
                </div>

                <span className="hidden font-serif text-6xl italic leading-none text-white/15 sm:block">
                  MX
                </span>
              </div>
            </div>

            {/* Etiqueta lateral */}
            <div className="absolute right-0 top-0 hidden h-full w-12 items-center justify-center border-l border-[#182b3a]/10 lg:flex">
              <span className="rotate-90 whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.35em] text-[#182b3a]/35">
                <T>Nomari · Curaduría Culinaria</T>
              </span>
            </div>
          </div>
        </div>

        {/* Franja inferior */}
        <div className="grid border-b border-[#182b3a]/15 md:grid-cols-3">
          <div className="flex items-center gap-4 border-b border-[#182b3a]/15 py-5 md:border-b-0 md:border-r md:px-6">
            <span className="font-serif text-2xl italic text-[#b96045]">
              01
            </span>

            <span className="text-[8px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/45">
              <T>Cocina de Vanguardia</T>
            </span>
          </div>

          <div className="flex items-center gap-4 border-b border-[#182b3a]/15 py-5 md:border-b-0 md:border-r md:px-6">
            <span className="font-serif text-2xl italic text-[#b96045]">
              02
            </span>

            <span className="text-[8px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/45">
              <T>Travesías Exclusivas</T>
            </span>
          </div>

          <div className="flex items-center gap-4 py-5 md:px-6">
            <span className="font-serif text-2xl italic text-[#b96045]">
              03
            </span>

            <span className="text-[8px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/45">
              <T>Atención a la Medida</T>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}