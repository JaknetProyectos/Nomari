"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { T } from "@/components/T";
import Image from "next/image";

export function Experiences() {
  const locale = useLocale();

  const tours = [
    {
      id: 1,
      title: "Herencia Prehispánica",
      location: "Oaxaca",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Tradición y Agave",
      location: "Jalisco",
      image:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Costas del Pacífico",
      location: "Riviera Nayarit",
      image:
        "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#ebe6dd] py-24 text-[#182b3a] md:py-32">
      {/* Fondo editorial */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-[#182b3a]/10" />

        <div className="absolute -left-28 top-28 h-72 w-72 rounded-full border border-[#b96045]/15" />
        <div className="absolute -left-6 top-48 h-44 w-44 rounded-full border border-[#182b3a]/10" />

        <div className="absolute bottom-32 right-0 h-px w-40 bg-[#b96045]/30 md:w-72" />

        <span className="absolute -bottom-14 right-5 hidden font-serif text-[16rem] italic leading-none text-[#182b3a]/[0.025] lg:block">
          N
        </span>
      </div>

      <div className="container relative mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
        {/* Encabezado */}
        <div className="mb-16 grid gap-8 border-y border-[#182b3a]/15 py-10 animate-fade-in-up md:mb-24 md:grid-cols-[220px_minmax(0,1fr)] md:py-14 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div className="flex items-start justify-between border-[#182b3a]/15 md:min-h-[220px] md:flex-col md:border-r md:pr-10">
            <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#b96045]">
              <T>Itinerarios</T>
            </span>

            <span className="font-serif text-6xl italic leading-none text-[#182b3a]/15">
              03
            </span>
          </div>

          <div className="flex flex-col justify-end md:pl-10 lg:pl-16">
            <span className="mb-5 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/40">
              <T>Selección Nomari</T>
            </span>

            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-3xl font-serif text-4xl leading-[0.98] tracking-[-0.035em] text-[#182b3a] md:text-6xl lg:text-7xl">
                <T>Caminos Culinarios</T>
              </h2>

              <Link
                href={`/${locale}/experiencias`}
                className="group flex w-fit items-center gap-5 border-b border-[#182b3a]/30 pb-3 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a] transition-colors hover:border-[#b96045] hover:text-[#b96045]"
              >
                <T>Descubrir Selección</T>

                <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Colección */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3 lg:gap-x-10">
          {tours.map((tour, idx) => (
            <Link
              href={`/${locale}/experiencias`}
              key={tour.id}
              className={`group block animate-fade-in-up ${
                idx === 1 ? "md:mt-16" : ""
              }`}
              style={{
                animationDelay: `${idx * 150}ms`,
              }}
            >
              <article className="flex h-full flex-col">
                <div className="mb-5 flex items-end justify-between gap-6 border-t border-[#182b3a]/20 pt-4">
                  <span className="font-serif text-3xl italic leading-none text-[#182b3a]/20">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <span className="text-right text-[9px] font-semibold uppercase tracking-[0.24em] text-[#b96045]">
                    <T>{tour.location}</T>
                  </span>
                </div>

                {/* Imagen */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#d5cfc5]">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover opacity-95 transition-all duration-[1400ms] ease-out group-hover:scale-[1.045] group-hover:opacity-100"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#182b3a]/55 via-transparent to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-75" />

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 text-white">
                    <span className="border-l border-white/60 pl-3 text-[8px] font-semibold uppercase tracking-[0.24em] text-white/70">
                      Nomari
                    </span>

                    <span className="font-serif text-3xl italic leading-none text-white/25">
                      MX
                    </span>
                  </div>
                </div>

                {/* Información */}
                <div className="flex flex-1 flex-col pt-7">
                  <h3 className="font-serif text-3xl leading-[1.05] tracking-[-0.025em] text-[#182b3a] transition-colors duration-300 group-hover:text-[#b96045]">
                    <T>{tour.title}</T>
                  </h3>

                  <div className="mt-7 flex items-center justify-between gap-6 border-t border-[#182b3a]/15 pt-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/40">
                      <T>{tour.location}</T>
                    </p>

                    <span className="flex h-9 w-9 items-center justify-center border border-[#182b3a]/20 text-sm transition-all duration-300 group-hover:border-[#b96045] group-hover:bg-[#b96045] group-hover:text-[#fffaf4]">
                      ↗
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Cierre */}
        <div className="mt-20 flex items-center gap-5 border-t border-[#182b3a]/15 pt-7 md:mt-28">
          <span className="h-px w-16 bg-[#b96045]" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[#182b3a]/40">
            <T>Gastronomía · Cultura · Territorio</T>
          </span>
        </div>
      </div>
    </section>
  );
}