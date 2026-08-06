"use client";

import { useLocale } from "next-intl";
import { T } from "@/components/T";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";
import {
  Trophy,
  CalendarDays,
  MapPin,
  MonitorPlay,
  UtensilsCrossed,
  Crown,
  CheckCircle2,
  Info,
} from "lucide-react";
import Image from "next/image";

export default function FifaPage() {
  const locale = useLocale();

  // 1. Información parafraseada de la imagen de "Experiencias disponibles" (Fan Zones)
  const fanZones = [
    {
      title: "Inmersión Temática",
      subtitle: "La emoción en su estado puro",
      icon: <MonitorPlay className="h-6 w-6" />,
      features: [
        "Transmisiones en vivo a través de pantallas de formato monumental.",
        "Mobiliario tipo lounge y asientos ergonómicos para máximo confort.",
        "Ambientación inmersiva con elementos representativos de las selecciones.",
        "Zonas de actividad física con dinámicas de fútbol reducido.",
        "Espacios fotográficos tematizados para capturar el momento.",
      ],
    },
    {
      title: "Ruta Culinaria Mundialista",
      subtitle: "Sabores que acompañan la pasión",
      icon: <UtensilsCrossed className="h-6 w-6" />,
      features: [
        "Todos los beneficios de la Inmersión Temática.",
        "Estaciones gastronómicas combinando la alta cocina mexicana e internacional.",
        "Mixología de autor inspirada en los países competidores.",
        "Catas y maridajes con destilados de agave y cervezas artesanales.",
        "Gestión prioritaria para cenas post-partido en restaurantes aliados.",
      ],
    },
    {
      title: "Hospitalidad Élite Experiencial",
      subtitle: "Exclusividad sin compromisos",
      icon: <Crown className="h-6 w-6" />,
      features: [
        "Acceso total a las amenidades de los niveles anteriores.",
        "Salas privadas equipadas con mobiliario de diseño premium.",
        "Atención personalizada con servicio de meseros dedicados.",
        "Sesiones musicales en vivo y DJ sets marcando el ritmo del evento.",
        "Posibilidad de organizar encuentros privados con figuras históricas del deporte.",
      ],
    },
  ];

  // 2. Información parafraseada de la imagen de "Restaurantes / Bares en CDMX"
  const alliedVenues = [
    "Flamingos Restaurante y Marisquería",
    "Sonora Grill (Sucursal Nápoles)",
    "Pinche Gringo BBQ",
    "Papa Bill's Stadium (Polanco)",
    "Hooters",
    "Buffalo Wild Wings",
    "Alboa",
    "Sports & Chips",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f2efe8] text-[#182b3a]">
      <Header />

      {/* HERO */}
      <section className="relative pb-20 pt-32 md:pb-28 md:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-[#182b3a]/10" />

          <div className="absolute -right-32 top-20 h-80 w-80 rounded-full border border-[#b96045]/15" />
          <div className="absolute -right-8 top-44 h-52 w-52 rounded-full border border-[#182b3a]/10" />

          <span className="absolute bottom-0 right-4 hidden font-serif text-[17rem] italic leading-none text-[#182b3a]/[0.025] lg:block">
            26
          </span>
        </div>

        <div className="container relative mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <div className="grid border-y border-[#182b3a]/15 py-10 md:grid-cols-[240px_minmax(0,1fr)] md:py-14 lg:grid-cols-[300px_minmax(0,1fr)]">
            <div className="mb-10 flex flex-col justify-between border-[#182b3a]/15 md:mb-0 md:min-h-[430px] md:border-r md:pr-10">
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.34em] text-[#b96045] animate-fade-in-up">
                  <T>Copa Mundial 2026</T>
                </span>

                <span className="mt-7 block font-serif text-7xl italic leading-none text-[#182b3a]/15">
                  08
                </span>
              </div>

              <div className="mt-16 hidden md:block">
                <span className="block text-[9px] font-semibold uppercase tracking-[0.26em] text-[#182b3a]/40">
                  Nomari
                </span>

                <span className="mt-2 block max-w-[180px] text-xs font-light leading-relaxed text-[#182b3a]/60">
                  Hospitalidad, gastronomía y celebración.
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-end md:pl-10 lg:pl-16">
              <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/45 animate-fade-in-up">
                Edición especial
              </p>

              <h1 className="max-w-6xl font-serif text-5xl leading-[0.92] tracking-[-0.045em] text-[#182b3a] animate-fade-in-up delay-150 sm:text-6xl md:text-7xl lg:text-[7.25rem]">
                <T>El fervor del juego.</T>
                <br />

                <span className="italic text-[#b96045]">
                  <T>El lujo del detalle.</T>
                </span>
              </h1>

              <div className="mt-10 grid max-w-4xl gap-6 border-t border-[#182b3a]/15 pt-8 sm:grid-cols-[90px_minmax(0,1fr)] animate-fade-in-up delay-300">
                <span className="mt-3 h-px w-16 bg-[#b96045]" />

                <p className="max-w-2xl text-base font-light leading-relaxed text-[#182b3a]/60 md:text-lg">
                  <T>
                    Viva la máxima justa deportiva a través de una curaduría de
                    espacios, gastronomía y hospitalidad diseñada
                    exclusivamente para paladares y espectadores exigentes.
                  </T>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FECHAS CLAVE */}
      <section className="relative bg-[#182b3a] py-20 text-[#f2efe8] md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <span className="absolute -bottom-14 right-4 font-serif text-[12rem] italic leading-none text-white/[0.025] md:text-[18rem]">
            2026
          </span>
        </div>

        <div className="container relative mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <div className="mb-12 flex items-end justify-between gap-8 border-b border-[#f2efe8]/15 pb-6">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#d58a6f]">
                Calendario oficial
              </span>
            </div>

            <span className="font-serif text-2xl italic text-[#f2efe8]/20">
              01 — 03
            </span>
          </div>

          <div className="grid lg:grid-cols-3">
            <article className="border-b border-[#f2efe8]/15 py-10 lg:border-b-0 lg:border-r lg:pr-10">
              <div className="mb-10 flex items-start justify-between gap-6">
                <CalendarDays
                  className="h-7 w-7 text-[#d58a6f]"
                  strokeWidth={1.2}
                />

                <span className="font-serif text-4xl italic text-[#f2efe8]/10">
                  01
                </span>
              </div>

              <h3 className="font-serif text-3xl leading-tight text-[#f2efe8]">
                <T>Duración del Torneo</T>
              </h3>

              <p className="mt-6 max-w-sm text-sm font-light leading-[1.8] text-[#f2efe8]/60">
                <T>
                  La celebración global tomará lugar del jueves 11 de junio al
                  domingo 19 de julio de 2026, marcando un hito en la historia
                  del deporte.
                </T>
              </p>
            </article>

            <article className="border-b border-[#f2efe8]/15 py-10 lg:border-b-0 lg:border-r lg:px-10">
              <div className="mb-10 flex items-start justify-between gap-6">
                <MapPin
                  className="h-7 w-7 text-[#d58a6f]"
                  strokeWidth={1.2}
                />

                <span className="font-serif text-4xl italic text-[#f2efe8]/10">
                  02
                </span>
              </div>

              <h3 className="font-serif text-3xl leading-tight text-[#f2efe8]">
                <T>El Gran Inicio</T>
              </h3>

              <p className="mt-6 max-w-sm text-sm font-light leading-[1.8] text-[#f2efe8]/60">
                <T>
                  El silbatazo inaugural resonará el 11 de junio de 2026 en el
                  majestuoso Estadio Azteca, ubicado en el corazón de la Ciudad
                  de México.
                </T>
              </p>
            </article>

            <article className="py-10 lg:pl-10">
              <div className="mb-10 flex items-start justify-between gap-6">
                <Trophy
                  className="h-7 w-7 text-[#d58a6f]"
                  strokeWidth={1.2}
                />

                <span className="font-serif text-4xl italic text-[#f2efe8]/10">
                  03
                </span>
              </div>

              <h3 className="font-serif text-3xl leading-tight text-[#f2efe8]">
                <T>La Cumbre Final</T>
              </h3>

              <p className="mt-6 max-w-sm text-sm font-light leading-[1.8] text-[#f2efe8]/60">
                <T>
                  El campeón se coronará el domingo 19 de julio de 2026 en el
                  MetLife Stadium, en East Rutherford, Nueva Jersey.
                </T>
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* NIVELES DE FAN ZONE */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <div className="mb-16 grid gap-8 border-b border-[#182b3a]/15 pb-10 lg:grid-cols-[280px_minmax(0,1fr)]">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#b96045]">
                <T>Centros de Celebración</T>
              </span>
            </div>

            <div>
              <h2 className="max-w-4xl font-serif text-4xl leading-[1] tracking-[-0.035em] text-[#182b3a] md:text-6xl">
                <T>Entornos diseñados para la pasión</T>
              </h2>

              <p className="mt-7 max-w-3xl text-base font-light leading-relaxed text-[#182b3a]/60">
                <T>
                  Más allá de los estadios, hemos estructurado tres niveles de
                  hospitalidad para que viva cada encuentro rodeado de un
                  ambiente vibrante, comodidad absoluta y propuestas culinarias
                  excepcionales.
                </T>
              </p>
            </div>
          </div>

          <div className="border-t border-[#182b3a]/20">
            {fanZones.map((zone, idx) => (
              <article
                key={idx}
                className="group grid gap-8 border-b border-[#182b3a]/20 py-12 md:grid-cols-[90px_minmax(0,0.8fr)_minmax(0,1.2fr)] md:py-16"
              >
                <div className="flex items-start justify-between md:block">
                  <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center border border-[#182b3a]/20 text-[#182b3a] transition-colors duration-300 group-hover:border-[#b96045] group-hover:bg-[#b96045] group-hover:text-[#fffaf4] md:mt-8">
                    {zone.icon}
                  </div>
                </div>

                <div>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#182b3a]/40">
                    <T>{zone.subtitle}</T>
                  </span>

                  <h3 className="mt-4 max-w-sm font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                    <T>{zone.title}</T>
                  </h3>
                </div>

                <ul className="border-t border-[#182b3a]/15">
                  {zone.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start gap-4 border-b border-[#182b3a]/15 py-4 text-sm font-light leading-relaxed text-[#42515b]"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#b96045]"
                        strokeWidth={1.5}
                      />

                      <span>
                        <T>{feature}</T>
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESTAURANTES EN CDMX */}
      <section className="relative border-y border-[#182b3a]/15 py-24 md:py-32">
        <div className="container mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <div className="grid items-stretch gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#b96045]">
                  <T>Circuitos Gastronómicos</T>
                </span>

                <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1] tracking-[-0.035em] text-[#182b3a] md:text-6xl">
                  <T>Su lugar reservado en la capital</T>
                </h2>

                <p className="mt-8 max-w-2xl text-base font-light leading-[1.8] text-[#182b3a]/60">
                  <T>
                    Le aseguramos espacios privilegiados en los establecimientos
                    más icónicos de la Ciudad de México. Disfrute de las
                    transmisiones en vivo inmerso en una atmósfera festiva,
                    combinada con la oferta culinaria distintiva de cada
                    recinto.
                  </T>
                </p>
              </div>

              <div className="mt-12">
                <div className="border-y border-[#182b3a]/20 py-7">
                  <h4 className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/45">
                    <T>Nuestra Selección en CDMX</T>
                  </h4>

                  <div className="mt-7 grid sm:grid-cols-2">
                    {alliedVenues.map((venue, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 border-t border-[#182b3a]/15 py-4 text-sm font-light text-[#42515b] sm:odd:pr-6 sm:even:pl-6"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#b96045]" />

                        <T>{venue}</T>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-[auto_minmax(0,1fr)] gap-5 border-l border-[#b96045]/50 pl-5">
                  <Info
                    className="mt-0.5 h-5 w-5 text-[#b96045]"
                    strokeWidth={1.4}
                  />

                  <div className="space-y-3 text-[11px] font-light leading-relaxed text-[#182b3a]/55">
                    <p>
                      <T>
                        Nuestra labor garantiza su acceso y comodidad en un
                        entorno deportivo ideal. Para otorgarle total libertad
                        de elección, el consumo de alimentos y bebidas es
                        independiente y no está incluido en la tarifa de
                        reserva.
                      </T>
                    </p>

                    <p className="italic">
                      <T>
                        * La disponibilidad está sujeta a la capacidad de cada
                        sede. Aplican los términos de cada establecimiento.
                        Sugerimos anticipar su solicitud.
                      </T>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagen */}
            <div className="relative min-h-[560px] overflow-hidden bg-[#dcd6cd] lg:min-h-[780px]">
              <Image
                src="https://images.pexels.com/photos/34649301/pexels-photo-34649301.jpeg?auto=format&fit=crop"
                alt="Ambiente de restaurante durante transmisión deportiva"
                fill
                className="object-cover transition-transform duration-[1800ms] ease-out hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#182b3a]/65 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-7 text-white md:p-10">
                <div className="border-l border-white/60 pl-4">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/60">
                    Ciudad de México
                  </span>

                  <p className="mt-3 max-w-sm font-serif text-3xl leading-tight">
                    Nomari Mundial 2026
                  </p>
                </div>

                <span className="hidden font-serif text-6xl italic leading-none text-white/20 sm:block">
                  MX
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO DE RESERVA */}
      <section
        id="cotizar-mundial"
        className="relative bg-[#e8e2d8] py-24 md:py-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <span className="absolute -bottom-12 right-4 hidden font-serif text-[16rem] italic leading-none text-[#182b3a]/[0.025] lg:block">
            N
          </span>
        </div>

        <div className="container relative mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 grid gap-8 border-t border-[#182b3a]/20 pt-10 md:grid-cols-[100px_minmax(0,1fr)]">
              <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                04
              </span>

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#182b3a]/45">
                  Planificación a Medida
                </span>

                <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-[1] tracking-[-0.035em] text-[#182b3a] md:text-6xl">
                  Asegure su experiencia mundialista
                </h2>

                <p className="mt-7 max-w-3xl text-base font-light leading-relaxed text-[#182b3a]/60">
                  <T>
                    Permítanos diseñar su itinerario perfecto. Complete sus
                    datos y un concierge especializado le presentará una
                    propuesta detallada.
                  </T>
                </p>
              </div>
            </div>

            <div className="overflow-hidden border border-[#182b3a]/15 bg-[#f2efe8]">
              {/* Aquí se inyecta tu formulario que guarda en la tabla de cotizaciones */}
              <Pricing />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}