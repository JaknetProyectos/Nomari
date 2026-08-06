"use client";

import { useLocale } from "next-intl";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import { Loader2, MapPin, ArrowRight } from "lucide-react";
import {
  Experience,
  SupabaseExperienceResponse,
} from "@/lib/types";
import { T } from "@/components/T";

type ExperienceWithPrice = Experience & {
  displayPrice: number;
};

function ExperienciasContent() {
  const locale = useLocale();
  const [experiences, setExperiences] = useState<ExperienceWithPrice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: actData, error } = await supabase
          .from("activities_mextripia")
          .select(`
            id, title, slug, description, location, images, category_id,
            categories:categories_mextripia(id, name, slug),
            activity_packages:activity_packages_mextripia(price)
          `);

        if (error) return console.error(error);

        if (actData) {
          const mappedData: ExperienceWithPrice[] = (
            actData as unknown as SupabaseExperienceResponse[]
          ).map((item) => ({
            ...item,
            categories: item.categories || undefined,
            description: item.description || "",
            images: item.images || [],
            displayPrice: item.activity_packages?.[0]?.price || 0,
          }));

          setExperiences(mappedData);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f2efe8]">
        <div className="flex flex-col items-center gap-5">
          <Loader2
            className="h-9 w-9 animate-spin text-[#b96045]"
            strokeWidth={1.4}
          />

          <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#182b3a]/45">
            Nomari
          </span>
        </div>
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

          <div className="absolute -right-32 top-20 h-80 w-80 rounded-full border border-[#b96045]/15" />
          <div className="absolute -right-10 top-40 h-52 w-52 rounded-full border border-[#182b3a]/10" />

          <div className="absolute left-0 top-[68rem] h-px w-40 bg-[#b96045]/30 md:w-72" />
          <div className="absolute bottom-52 right-0 h-px w-40 bg-[#182b3a]/15 md:w-80" />

          <span className="absolute bottom-8 left-4 hidden font-serif text-[15rem] italic leading-none text-[#182b3a]/[0.025] lg:block">
            N
          </span>
        </div>

        <div className="container relative mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          {/* Encabezado */}
          <header className="mb-20 grid border-y border-[#182b3a]/15 py-10 md:mb-28 md:grid-cols-[240px_minmax(0,1fr)] md:py-14 lg:grid-cols-[300px_minmax(0,1fr)]">
            <div className="mb-10 flex flex-col justify-between border-[#182b3a]/15 md:mb-0 md:min-h-[280px] md:border-r md:pr-10">
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.34em] text-[#b96045]">
                  <T>Curaduría Culinaria</T>
                </span>

                <span className="mt-6 block font-serif text-6xl italic leading-none text-[#182b3a]/15">
                  07
                </span>
              </div>

              <div className="mt-12 hidden md:block">
                <span className="block text-[9px] font-semibold uppercase tracking-[0.26em] text-[#182b3a]/40">
                  Nomari
                </span>

                <span className="mt-2 block text-xs font-light text-[#182b3a]/60">
                  Selección de experiencias
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-end md:pl-10 lg:pl-16">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/45">
                Colección de autor
              </p>

              <h1 className="max-w-5xl font-serif text-5xl leading-[0.94] tracking-[-0.04em] text-[#182b3a] sm:text-6xl md:text-7xl lg:text-[6.25rem]">
                <T>Nuestras</T>{" "}
                <span className="italic text-[#b96045]">
                  <T>Expediciones.</T>
                </span>
              </h1>

              <div className="mt-8 grid max-w-4xl gap-6 border-t border-[#182b3a]/15 pt-7 sm:grid-cols-[80px_minmax(0,1fr)]">
                <span className="mt-3 h-px w-14 bg-[#b96045]" />

                <p className="max-w-2xl text-base font-light leading-relaxed text-[#182b3a]/60 md:text-lg">
                  <T>
                    Diseñamos inmersiones gastronómicas exclusivas. Desde la
                    cosecha en la tierra hasta las mesas más reservadas de
                    México.
                  </T>
                </p>
              </div>
            </div>
          </header>

          {/* Índice de colección */}
          <div className="mb-14 flex items-center justify-between border-b border-[#182b3a]/15 pb-5">
            <span className="text-[9px] font-semibold uppercase tracking-[0.27em] text-[#182b3a]/40">
              Colección Nomari
            </span>

            <span className="font-serif text-lg italic text-[#182b3a]/45">
              {String(experiences.length).padStart(2, "0")} experiencias
            </span>
          </div>

          {/* Colección */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-9 lg:gap-y-24">
            {experiences.map((exp, idx) => {
              const thumbImage =
                exp.images?.length > 0
                  ? exp.images[0]
                  : "/placeholder.jpg";

              return (
                <Link
                  key={exp.id}
                  href={`/${locale}/experiencias/${exp.id}`}
                  className="group block animate-fade-in-up lg:even:mt-16"
                  style={{
                    animationDelay: `${idx * 100}ms`,
                  }}
                >
                  <article className="flex h-full flex-col">
                    {/* Número y ubicación */}
                    <div className="mb-5 flex items-end justify-between gap-6 border-t border-[#182b3a]/20 pt-4">
                      <span className="font-serif text-3xl italic leading-none text-[#182b3a]/20">
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      <span className="flex items-center gap-2 text-right text-[9px] font-semibold uppercase tracking-[0.22em] text-[#b96045]">
                        <MapPin
                          className="h-3 w-3 shrink-0"
                          strokeWidth={1.5}
                        />

                        <T>{exp.location}</T>
                      </span>
                    </div>

                    {/* Imagen */}
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#dcd6cd]">
                      <Image
                        src={thumbImage}
                        alt={exp.title}
                        fill
                        className="object-cover opacity-95 transition-all duration-[1400ms] ease-out group-hover:scale-[1.045] group-hover:opacity-100"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#182b3a]/50 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 sm:p-6">
                        <div className="border-l border-white/60 pl-3">
                          <span className="block text-[8px] font-semibold uppercase tracking-[0.24em] text-white/60">
                            Desde
                          </span>

                          <span className="mt-1 block font-serif text-xl text-white">
                            {formatPrice(exp.displayPrice)}
                          </span>
                        </div>

                        <span className="text-right text-[8px] font-medium uppercase tracking-[0.18em] text-white/60">
                          <T> IVA Incluido</T>
                        </span>
                      </div>
                    </div>

                    {/* Información */}
                    <div className="flex flex-1 flex-col pt-7">
                      <h2 className="font-serif text-3xl leading-[1.06] tracking-[-0.025em] text-[#182b3a] transition-colors duration-300 group-hover:text-[#b96045]">
                        <T>{exp.title}</T>
                      </h2>

                      <div className="mt-7 flex items-center justify-between gap-6 border-t border-[#182b3a]/15 pt-5">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/45">
                          <T>Explorar</T>
                        </span>

                        <span className="flex h-9 w-9 items-center justify-center border border-[#182b3a]/20 transition-all duration-300 group-hover:border-[#b96045] group-hover:bg-[#b96045] group-hover:text-[#fffaf4]">
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function ExperienciasPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#f2efe8]">
          <div className="flex flex-col items-center gap-5">
            <Loader2
              className="h-9 w-9 animate-spin text-[#b96045]"
              strokeWidth={1.4}
            />

            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#182b3a]/45">
              Nomari
            </span>
          </div>
        </div>
      }
    >
      <ExperienciasContent />
    </Suspense>
  );
}