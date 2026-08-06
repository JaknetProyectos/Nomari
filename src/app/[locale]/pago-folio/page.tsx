"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { T } from "@/components/T";
import { useT } from "@/hooks/useT";
import { useCart } from "@/context/CartContext";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function PagoFolioPage() {
  const router = useRouter();
  const locale = useLocale();
  const { addToCart } = useCart();

  const [monto, setMonto] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [folio, setFolio] = useState("");
  const [fecha, setFecha] = useState("");

  const btnConfirmar = useT("Añadir a la bolsa");

  const handleMontoChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const val = e.target.value.replace(/[^0-9.]/g, "");
    setMonto(val);
  };

  const isFormValid =
    parseFloat(monto) > 0 &&
    nombre.trim().length > 0 &&
    email.includes("@") &&
    folio.trim().length > 0 &&
    fecha !== "";

  const handleConfirmarReserva = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) return;

    const montoNumerico = parseFloat(monto);

    const customExperienceItem = {
      packageId: 0,
      experience: {
        id: 0,
        title: "Experiencia de Autor",
        slug: "experiencia-autor-personalizada",
        description: `Pago asociado al folio: ${folio}`,
        location: "Destino Personalizado",
        images: [
          "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070",
        ],
        category_id: 0,
      },
      levelName: "Diseño a Medida",
      date: fecha,
      people: 1,
      pricePerPerson: montoNumerico,
      totalPrice: montoNumerico,
    };

    addToCart(customExperienceItem);

    sessionStorage.setItem(
      "Mextripia_temp_contact",
      JSON.stringify({
        nombre,
        email,
        folio,
      }),
    );

    router.push(`/${locale}/checkout`);
  };

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split("T")[0];

  const inputClass =
    "peer h-14 w-full rounded-none border-0 border-b border-[#182b3a]/20 bg-transparent px-0 pt-5 text-sm font-normal text-[#182b3a] outline-none transition-colors placeholder:text-transparent hover:border-[#182b3a]/40 focus:border-[#b96045]";

  const labelClass =
    "pointer-events-none absolute left-0 top-0 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/45 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[11px] peer-placeholder-shown:text-[#182b3a]/35 peer-focus:top-0 peer-focus:text-[9px] peer-focus:text-[#b96045]";

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

          <div className="absolute left-0 top-[58rem] h-px w-36 bg-[#b96045]/30 md:w-72" />
          <div className="absolute bottom-40 right-0 h-px w-44 bg-[#182b3a]/15 md:w-80" />

          <span className="absolute bottom-8 left-5 hidden font-serif text-[15rem] italic leading-none text-[#182b3a]/[0.025] lg:block">
            N
          </span>
        </div>

        <div className="container relative mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          {/* Encabezado */}
          <header className="mb-16 grid border-y border-[#182b3a]/15 py-10 md:mb-24 md:grid-cols-[240px_minmax(0,1fr)] md:py-14 lg:grid-cols-[300px_minmax(0,1fr)]">
            <div className="mb-10 flex flex-col justify-between border-[#182b3a]/15 md:mb-0 md:min-h-[250px] md:border-r md:pr-10">
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.34em] text-[#b96045]">
                  Pago personalizado
                </span>

                <span className="mt-6 block font-serif text-6xl italic leading-none text-[#182b3a]/15">
                  09
                </span>
              </div>

              <div className="mt-12 hidden md:block">
                <span className="block text-[9px] font-semibold uppercase tracking-[0.26em] text-[#182b3a]/40">
                  Nomari
                </span>

                <span className="mt-2 block max-w-[180px] text-xs font-light leading-relaxed text-[#182b3a]/60">
                  Experiencias diseñadas de manera personal.
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-end md:pl-10 lg:pl-16">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/45">
                Reserva a medida
              </p>

              <h1 className="max-w-5xl font-serif text-5xl leading-[0.94] tracking-[-0.04em] text-[#182b3a] sm:text-6xl md:text-7xl lg:text-[6rem]">
                <T>Confirmación de Folio</T>
              </h1>

              <div className="mt-8 flex items-center gap-5 border-t border-[#182b3a]/15 pt-7">
                <span className="h-px w-16 bg-[#b96045]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/45">
                  Proceso protegido
                </span>
              </div>
            </div>
          </header>

          {/* Contenido */}
          <div className="grid items-stretch gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-24">
            {/* Imagen y descripción */}
            <section className="flex flex-col">
              <div className="relative min-h-[520px] flex-1 overflow-hidden bg-[#dcd6cd] lg:min-h-[760px]">
                <Image
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
                  alt="Alta Gastronomía"
                  fill
                  className="object-cover transition-transform duration-[1800ms] ease-out hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#182b3a]/75 via-[#182b3a]/5 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-10">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/60">
                    Experiencia de autor
                  </span>

                  <p className="mt-4 max-w-md font-serif text-3xl leading-tight md:text-4xl">
                    Nomari · Diseño a Medida
                  </p>

                  <div className="mt-7 flex items-center gap-4 border-t border-white/20 pt-5">
                    <ShieldCheck
                      className="h-4 w-4 shrink-0 text-[#e29a7e]"
                      strokeWidth={1.5}
                    />

                    <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/65">
                      <T>Conexión Cifrada y Segura</T>
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-8 max-w-xl text-sm font-light leading-[1.8] text-[#182b3a]/60">
                <T>
                  Procesamiento seguro para su evento diseñado a medida. Ingrese
                  los datos proporcionados por nuestro equipo de hospitalidad
                  para añadir su experiencia a la bolsa y proceder al pago.
                </T>
              </p>
            </section>

            {/* Formulario */}
            <section className="border-t border-[#182b3a]/20">
              <form
                onSubmit={handleConfirmarReserva}
                className="divide-y divide-[#182b3a]/15"
              >
                {/* Monto */}
                <div className="grid gap-8 py-10 md:grid-cols-[80px_minmax(0,1fr)] md:py-14">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      01
                    </span>
                  </div>

                  <div>
                    <span className="mb-4 block text-[9px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/40">
                      Inversión acordada
                    </span>

                    <label className="block">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/50">
                        <T>Monto Acordado (MXN + IVA)</T>
                      </span>

                      <div className="mt-5 flex items-baseline border-b border-[#182b3a]/20 pb-4 transition-colors focus-within:border-[#b96045]">
                        <span className="mr-3 font-serif text-4xl text-[#b96045] md:text-5xl">
                          $
                        </span>

                        <input
                          type="text"
                          value={monto}
                          onChange={handleMontoChange}
                          placeholder="0.00"
                          required
                          className="min-w-0 flex-1 border-0 bg-transparent p-0 font-serif text-5xl leading-none tracking-[-0.03em] text-[#182b3a] outline-none placeholder:text-[#182b3a]/15 md:text-6xl"
                        />
                      </div>
                    </label>

                    <p className="mt-4 text-[9px] font-medium uppercase tracking-[0.2em] text-[#182b3a]/35">
                      Moneda nacional · Pesos mexicanos
                    </p>
                  </div>
                </div>

                {/* Datos del titular */}
                <div className="grid gap-8 py-10 md:grid-cols-[80px_minmax(0,1fr)] md:py-14">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      02
                    </span>
                  </div>

                  <div>
                    <div className="mb-10">
                      <span className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/40">
                        Información personal
                      </span>

                      <h2 className="font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                        Datos del titular
                      </h2>
                    </div>

                    <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
                      <div className="relative">
                        <input
                          type="text"
                          id="nombre"
                          value={nombre}
                          onChange={(e) => setNombre(e.target.value)}
                          required
                          className={inputClass}
                          placeholder="Nombre"
                        />

                        <label
                          htmlFor="nombre"
                          className={labelClass}
                        >
                          <T>Titular de la Reserva</T>
                        </label>
                      </div>

                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className={inputClass}
                          placeholder="Correo"
                        />

                        <label
                          htmlFor="email"
                          className={labelClass}
                        >
                          <T>Correo Electrónico</T>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Datos de cotización */}
                <div className="grid gap-8 py-10 md:grid-cols-[80px_minmax(0,1fr)] md:py-14">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      03
                    </span>
                  </div>

                  <div>
                    <div className="mb-10">
                      <span className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/40">
                        Referencia de reserva
                      </span>

                      <h2 className="font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                        Datos de cotización
                      </h2>
                    </div>

                    <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
                      <div className="relative">
                        <input
                          type="text"
                          id="folio"
                          value={folio}
                          onChange={(e) =>
                            setFolio(e.target.value.toUpperCase())
                          }
                          required
                          className={`${inputClass} uppercase tracking-[0.12em]`}
                          placeholder="Folio"
                        />

                        <label
                          htmlFor="folio"
                          className={labelClass}
                        >
                          <T>Folio de Cotización</T>
                        </label>
                      </div>

                      <div className="relative">
                        <input
                          type="date"
                          id="fecha"
                          value={fecha}
                          min={minDateStr}
                          onChange={(e) => setFecha(e.target.value)}
                          required
                          className={`${inputClass} text-[#182b3a]/70 [color-scheme:light]`}
                          placeholder="Fecha"
                        />

                        <label
                          htmlFor="fecha"
                          className={labelClass}
                        >
                          <T>Fecha del Evento</T>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Acción */}
                <div className="grid gap-8 py-10 md:grid-cols-[80px_minmax(0,1fr)] md:py-14">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      04
                    </span>
                  </div>

                  <div>
                    <div className="mb-8 flex items-start gap-4 border-l border-[#b96045]/50 pl-5">
                      <ShieldCheck
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#b96045]"
                        strokeWidth={1.4}
                      />

                      <p className="max-w-xl text-xs font-light leading-relaxed text-[#182b3a]/55">
                        <T>
                          Conexión Cifrada y Segura
                        </T>
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={!isFormValid}
                      className="group flex min-h-16 w-full items-center justify-between gap-8 bg-[#182b3a] px-7 py-5 text-[#f2efe8] transition-colors duration-300 hover:bg-[#b96045] disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-[0.24em]">
                        {btnConfirmar}
                      </span>

                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                    </button>

                    <div className="mt-8 flex items-center gap-4">
                      <span className="h-px flex-1 bg-[#182b3a]/15" />
                      <span className="h-1.5 w-1.5 rotate-45 border border-[#b96045]" />
                      <span className="h-px flex-1 bg-[#182b3a]/15" />
                    </div>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}