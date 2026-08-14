"use client";

import { T } from "@/components/T";
import { Utensils, Sparkles, Map, Users } from "lucide-react";

export function AboutServices() {
  const services = [
    {
      icon: Utensils,
      title: "Arte Gastronómico",
      desc: "Creación de propuestas y catas culinarias de autor.",
    },
    {
      icon: Sparkles,
      title: "Espacios Envolventes",
      desc: "Ambientación sensorial y diseño integral de atmósferas.",
    },
    {
      icon: Users,
      title: "Experiencias de Marca",
      desc: "Generamos conexiones memorables con audiencias selectas.",
    },
    {
      icon: Map,
      title: "Producción Exclusiva",
      desc: "Organización de alta precisión y hospitalidad de primer nivel.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f2efe8] py-24 text-[#182b3a] md:py-32">
      {/* Elementos decorativos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-[#182b3a]/10" />

        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full border border-[#b96045]/15" />
        <div className="absolute -right-10 top-40 h-52 w-52 rounded-full border border-[#182b3a]/10" />

        <div className="absolute bottom-32 left-0 h-px w-36 bg-[#b96045]/30 md:w-72" />

        <span className="absolute -bottom-14 right-5 hidden font-serif text-[15rem] italic leading-none text-[#182b3a]/[0.025] lg:block">
          N
        </span>
      </div>

      <div className="container relative mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20 xl:gap-28">
          {/* Introducción */}
          <div className="animate-fade-in-up">
            <div className="border-t border-[#182b3a]/20 pt-6">
              <div className="flex items-start justify-between gap-8">
                <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#b96045]">
                  <T>Nuestra Filosofía</T>
                </span>

                <span className="font-serif text-5xl italic leading-none text-[#182b3a]/15">
                  01
                </span>
              </div>

              <h2 className="mt-12 max-w-xl font-serif text-4xl leading-[1] tracking-[-0.035em] text-[#182b3a] md:text-5xl xl:text-6xl">
                <T>Creamos vivencias imborrables que despiertan los sentidos.</T>
              </h2>

              <div className="mt-10 grid gap-6 border-t border-[#182b3a]/15 pt-8 sm:grid-cols-[60px_minmax(0,1fr)]">
                <span className="mt-3 h-px w-12 bg-[#b96045]" />

                <div className="space-y-6">
                  <p className="text-sm font-light leading-[1.9] text-[#42515b] md:text-base">
                    <T>
                      Convertimos conceptos únicos en momentos inolvidables. Fusionamos la alta cocina con una producción impecable, permitiendo a marcas y anfitriones forjar vínculos genuinos con sus invitados.
                    </T>
                  </p>

                  <p className="text-sm font-light leading-[1.9] text-[#42515b] md:text-base">
                    <T>
                      Desde encuentros privados hasta celebraciones monumentales, cuidamos con minuciosidad cada detalle para entregar vivencias que trascienden lo ordinario y perduran en la memoria.
                    </T>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div className="border-t border-[#182b3a]/20">
            {services.map((srv, idx) => (
              <article
                key={idx}
                className="group grid gap-7 border-b border-[#182b3a]/15 py-9 animate-fade-in-up sm:grid-cols-[72px_minmax(0,1fr)_auto] sm:items-center md:py-11"
                style={{
                  animationDelay: `${idx * 150}ms`,
                }}
              >
                <div className="flex items-center justify-between sm:block">
                  <span className="font-serif text-3xl italic leading-none text-[#182b3a]/20">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center border border-[#182b3a]/20 text-[#182b3a] transition-all duration-300 group-hover:border-[#b96045] group-hover:bg-[#b96045] group-hover:text-[#fffaf4] sm:mt-6">
                    <srv.icon
                      className="h-5 w-5"
                      strokeWidth={1.4}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl leading-tight tracking-[-0.02em] text-[#182b3a] transition-colors duration-300 group-hover:text-[#b96045] md:text-3xl">
                    <T>{srv.title}</T>
                  </h3>

                  <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-[#42515b]">
                    <T>{srv.desc}</T>
                  </p>
                </div>

                <span className="hidden h-8 w-8 items-center justify-center border border-[#182b3a]/15 text-xs text-[#182b3a]/35 transition-all duration-300 group-hover:border-[#b96045] group-hover:text-[#b96045] sm:flex">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}