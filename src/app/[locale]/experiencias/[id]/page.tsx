"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import {
  Loader2,
  Calendar as CalendarIcon,
  MapPin,
  Clock,
  Utensils,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { T } from "@/components/T";
import { useCart } from "@/context/CartContext";
import { ActivityPackage, Experience } from "@/lib/types";

export default function ExperienceDetailPage() {
  const params = useParams();
  const locale = useLocale();
  const router = useRouter();
  const { addToCart } = useCart();

  const [experience, setExperience] = useState<Experience | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState("");
  const [pax, setPax] = useState(1);
  const [selectedPackage, setSelectedPackage] =
    useState<ActivityPackage | null>(null);

  useEffect(() => {
    async function fetchDetail() {
      const { data, error } = await supabase
        .from("activities_mextripia")
        .select(
          `*, categories:categories_mextripia(name, slug), packages:activity_packages_mextripia(*)`,
        )
        .eq("id", params.id as string)
        .single();

      if (data) {
        if (data.packages) {
          data.packages.sort(
            (a: ActivityPackage, b: ActivityPackage) =>
              a.min_pax - b.min_pax,
          );
        }

        setExperience(data);
      }

      setLoading(false);
    }

    fetchDetail();
  }, [params.id]);

  useEffect(() => {
    if (experience?.packages?.length) {
      const matched = experience.packages.find(
        (pkg) => pax >= pkg.min_pax && pax <= (pkg.max_pax || 999),
      );

      setSelectedPackage(
        matched || experience.packages[experience.packages.length - 1],
      );
    }
  }, [pax, experience]);

  const handleAddToCart = () => {
    // Le agregamos !experience a esta validación
    if (!selectedDate || !selectedPackage || !experience) return;

    const cartItem = {
      packageId: selectedPackage.id,
      experience: experience,
      levelName: selectedPackage.package_name,
      date: selectedDate,
      people: pax,
      pricePerPerson: selectedPackage.price,
      totalPrice: selectedPackage.price * pax,
    };

    addToCart(cartItem);
    router.push(`/${locale}/carrito`);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f2efe8]">
        <div className="flex flex-col items-center gap-5">
          <Loader2 className="h-9 w-9 animate-spin text-[#b96045]" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#182b3a]/45">
            Nomari
          </span>
        </div>
      </div>
    );
  }

  if (!experience) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f2efe8] px-6 text-center">
        <div>
          <span className="mb-5 block font-serif text-6xl italic text-[#b96045]">
            404
          </span>

          <p className="font-serif text-3xl text-[#182b3a]">
            <T>Experiencia no encontrada</T>
          </p>
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

          <div className="absolute -right-32 top-24 h-80 w-80 rounded-full border border-[#b96045]/15" />
          <div className="absolute -right-10 top-44 h-52 w-52 rounded-full border border-[#182b3a]/10" />

          <div className="absolute left-0 top-[70rem] h-px w-36 bg-[#b96045]/30 md:w-72" />
          <div className="absolute bottom-40 right-0 h-px w-40 bg-[#182b3a]/15 md:w-72" />

          <span className="absolute bottom-16 left-5 hidden font-serif text-[14rem] italic leading-none text-[#182b3a]/[0.025] lg:block">
            N
          </span>
        </div>

        <div className="container relative mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          {/* Encabezado */}
          <header className="mb-12 grid border-y border-[#182b3a]/15 py-9 md:mb-16 md:grid-cols-[220px_minmax(0,1fr)] md:py-12 lg:grid-cols-[280px_minmax(0,1fr)]">
            <div className="mb-9 flex flex-col justify-between border-[#182b3a]/15 md:mb-0 md:min-h-[230px] md:border-r md:pr-10">
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.34em] text-[#b96045]">
                  {experience.location}
                </span>

                <span className="mt-6 block font-serif text-6xl italic leading-none text-[#182b3a]/15">
                  06
                </span>
              </div>

              <div className="mt-12 hidden md:block">
                <span className="block text-[9px] font-semibold uppercase tracking-[0.26em] text-[#182b3a]/40">
                  Nomari
                </span>

                <span className="mt-2 block text-xs font-light text-[#182b3a]/60">
                  Experiencia seleccionada
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-end md:pl-10 lg:pl-16">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/45">
                Curaduría de experiencias
              </p>

              <h1 className="max-w-5xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-[#182b3a] sm:text-6xl md:text-7xl lg:text-[6rem]">
                {experience.title}
              </h1>

              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[#182b3a]/15 pt-6">
                <span className="flex items-center gap-3 text-xs font-light text-[#182b3a]/60">
                  <MapPin
                    className="h-3.5 w-3.5 text-[#b96045]"
                    strokeWidth={1.5}
                  />
                  {experience.location}
                </span>

                <span className="flex items-center gap-3 text-xs font-light text-[#182b3a]/60">
                  <Clock
                    className="h-3.5 w-3.5 text-[#b96045]"
                    strokeWidth={1.5}
                  />
                  {experience.duration}
                </span>
              </div>
            </div>
          </header>

          {/* Imagen principal */}
          <div className="relative mb-16 aspect-[16/9] w-full overflow-hidden bg-[#ded8cf] md:mb-24">
            <Image
              src={experience.images?.[0] || "/placeholder.jpg"}
              alt={experience.title}
              fill
              className="object-cover transition-transform duration-[1800ms] ease-out hover:scale-[1.02]"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#182b3a]/45 via-transparent to-transparent" />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 text-white sm:p-8 md:p-10">
              <div>
                <span className="block text-[9px] font-semibold uppercase tracking-[0.28em] text-white/60">
                  Destino
                </span>

                <span className="mt-2 block font-serif text-2xl">
                  {experience.location}
                </span>
              </div>

              <span className="hidden border-l border-white/40 pl-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/70 sm:block">
                Nomari
              </span>
            </div>
          </div>

          <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-10 xl:gap-16">
            {/* Información */}
            <div className="lg:col-span-7 xl:col-span-8">
              {/* Descripción */}
              <section className="grid gap-8 border-t border-[#182b3a]/20 py-12 md:grid-cols-[90px_minmax(0,1fr)] md:py-16">
                <div>
                  <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                    01
                  </span>
                </div>

                <div>
                  <span className="mb-4 block text-[9px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/40">
                    Esencia del recorrido
                  </span>

                  <h2 className="mb-8 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                    <T>La Experiencia</T>
                  </h2>

                  <p className="max-w-4xl whitespace-pre-line text-base font-light leading-[1.9] text-[#42515b] md:text-lg">
                    {experience.description}
                  </p>
                </div>
              </section>

              {/* Datos */}
              <section className="grid gap-8 border-t border-[#182b3a]/20 py-12 md:grid-cols-[90px_minmax(0,1fr)] md:py-16">
                <div>
                  <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                    02
                  </span>
                </div>

                <div>
                  <span className="mb-4 block text-[9px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/40">
                    Información esencial
                  </span>

                  <div className="grid border-y border-[#182b3a]/15 sm:grid-cols-2">
                    <div className="flex items-start gap-5 border-b border-[#182b3a]/15 py-7 sm:border-b-0 sm:border-r sm:pr-8">
                      <Clock
                        className="mt-1 h-5 w-5 shrink-0 text-[#b96045]"
                        strokeWidth={1.3}
                      />

                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/40">
                          <T>Duración</T>
                        </p>

                        <p className="mt-3 font-serif text-2xl text-[#182b3a]">
                          {experience.duration}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5 py-7 sm:pl-8">
                      <MapPin
                        className="mt-1 h-5 w-5 shrink-0 text-[#b96045]"
                        strokeWidth={1.3}
                      />

                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/40">
                          <T>Encuentro</T>
                        </p>

                        <p className="mt-3 font-serif text-2xl text-[#182b3a]">
                          {experience.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Inclusiones */}
              <section className="grid gap-8 border-y border-[#182b3a]/20 py-12 md:grid-cols-[90px_minmax(0,1fr)] md:py-16">
                <div>
                  <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                    03
                  </span>
                </div>

                <div>
                  <span className="mb-4 block text-[9px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/40">
                    Considerado en tu recorrido
                  </span>

                  <h2 className="mb-9 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                    <T>Inclusiones</T>
                  </h2>

                  <ul className="grid border-t border-[#182b3a]/15 md:grid-cols-2">
                    {experience.included_general?.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 border-b border-[#182b3a]/15 py-5 text-sm font-light leading-relaxed text-[#42515b] md:odd:pr-8 md:even:pl-8"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#b96045]"
                          strokeWidth={1.5}
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>

            {/* Reserva */}
            <aside className="lg:col-span-5 xl:col-span-4">
              <div className="sticky top-28 overflow-hidden bg-[#182b3a] text-[#f2efe8]">
                <div className="border-b border-[#f2efe8]/15 px-7 py-7 md:px-9 md:py-8">
                  <div className="flex items-center justify-between gap-6">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#d58a6f]">
                      Reserva
                    </span>

                    <span className="font-serif text-4xl italic leading-none text-[#f2efe8]/10">
                      N
                    </span>
                  </div>

                  <h3 className="mt-8 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#f2efe8] md:text-4xl">
                    <T>Reservar Expedición</T>
                  </h3>
                </div>

                <div className="space-y-0 px-7 py-8 md:px-9 md:py-10">
                  {/* Fecha */}
                  <div className="border-b border-[#f2efe8]/15 pb-7">
                    <label className="mb-3 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#f2efe8]/45">
                      <CalendarIcon
                        className="h-3.5 w-3.5 text-[#d58a6f]"
                        strokeWidth={1.5}
                      />

                      <T>Fecha</T>
                    </label>

                    <input
                      type="date"
                      className="h-12 w-full border-0 border-b border-[#f2efe8]/20 bg-transparent px-0 text-sm text-[#f2efe8] outline-none transition-colors [color-scheme:dark] focus:border-[#d58a6f]"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  {/* Personas */}
                  <div className="border-b border-[#f2efe8]/15 py-7">
                    <label className="mb-4 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#f2efe8]/45">
                      <Utensils
                        className="h-3.5 w-3.5 text-[#d58a6f]"
                        strokeWidth={1.5}
                      />

                      <T>Comensales</T>
                    </label>

                    <div className="grid grid-cols-[48px_minmax(0,1fr)_48px] border border-[#f2efe8]/20">
                      <button
                        onClick={() => setPax(Math.max(1, pax - 1))}
                        className="flex h-12 items-center justify-center border-r border-[#f2efe8]/20 text-lg text-[#f2efe8] transition-colors hover:bg-[#f2efe8] hover:text-[#182b3a]"
                      >
                        −
                      </button>

                      <input
                        type="number"
                        value={pax}
                        readOnly
                        className="h-12 w-full bg-transparent text-center font-serif text-xl text-[#f2efe8] outline-none"
                      />

                      <button
                        onClick={() => setPax(pax + 1)}
                        className="flex h-12 items-center justify-center border-l border-[#f2efe8]/20 text-lg text-[#f2efe8] transition-colors hover:bg-[#f2efe8] hover:text-[#182b3a]"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Paquete */}
                  {selectedPackage && (
                    <div className="border-b border-[#f2efe8]/15 py-7">
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-start xl:flex-row xl:items-end">
                        <div>
                          <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#d58a6f]">
                            {selectedPackage.package_name}
                          </p>

                          <p className="mt-2 text-xs font-light text-[#f2efe8]/45">
                            <T>Precio por persona</T>
                          </p>
                        </div>

                        <p className="font-serif text-2xl text-[#f2efe8]">
                          {new Intl.NumberFormat("es-MX", {
                            style: "currency",
                            currency: "MXN",
                          }).format(selectedPackage.price)}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Total */}
                  <div className="pt-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-start xl:flex-row xl:items-end">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#f2efe8]/45">
                        <T>Total</T>
                      </span>

                      <span className="font-serif text-4xl leading-none tracking-[-0.03em] text-[#f2efe8]">
                        {new Intl.NumberFormat("es-MX", {
                          style: "currency",
                          currency: "MXN",
                        }).format((selectedPackage?.price || 0) * pax)}
                      </span>
                    </div>

                    <p className="mt-3 text-right text-[9px] uppercase tracking-[0.2em] text-[#f2efe8]/35">
                      <T> IVA Incluido</T>
                    </p>

                    <button
                      onClick={handleAddToCart}
                      disabled={!selectedDate}
                      className="group mt-8 flex w-full items-center justify-between bg-[#b96045] px-6 py-5 text-[#fffaf4] transition-colors duration-300 hover:bg-[#ca6f52] disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">
                        <T>Añadir a la Bolsa</T>
                      </span>

                      <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                    </button>

                    <div className="mt-8 flex items-center gap-4">
                      <span className="h-px flex-1 bg-[#f2efe8]/15" />
                      <span className="h-1.5 w-1.5 rotate-45 border border-[#d58a6f]" />
                      <span className="h-px flex-1 bg-[#f2efe8]/15" />
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}