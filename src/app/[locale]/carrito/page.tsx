"use client";

import { T } from "@/components/T";
import { useLocale } from "next-intl";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import {
  Trash2,
  Minus,
  Plus,
  ShoppingBag,
  ArrowRight,
  Calendar,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export default function CarritoPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const locale = useLocale();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 2,
    }).format(price);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + "T00:00:00");

    return date.toLocaleDateString("es-MX", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-[#f2efe8] text-[#182b3a]">
      <Header />

      <main className="relative flex-1 pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Fondo decorativo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-[#182b3a]/10" />

          <div className="absolute -right-28 top-20 h-80 w-80 rounded-full border border-[#b96045]/15" />
          <div className="absolute -right-10 top-40 h-52 w-52 rounded-full border border-[#182b3a]/10" />

          <div className="absolute left-0 top-[42rem] h-px w-28 bg-[#b96045]/35 md:w-60" />
          <div className="absolute right-0 bottom-48 h-px w-36 bg-[#182b3a]/15 md:w-72" />

          <span className="absolute bottom-16 left-4 hidden font-serif text-[14rem] italic leading-none text-[#182b3a]/[0.025] lg:block">
            N
          </span>
        </div>

        <div className="container relative mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10 animate-fade-in-up">
          {/* Encabezado editorial */}
          <div className="mb-16 grid border-y border-[#182b3a]/15 py-9 md:mb-24 md:grid-cols-[220px_minmax(0,1fr)] md:py-12 lg:grid-cols-[280px_minmax(0,1fr)]">
            <div className="mb-9 flex flex-col justify-between border-[#182b3a]/15 md:mb-0 md:min-h-48 md:border-r md:pr-10">
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.34em] text-[#b96045]">
                  <T>Su Selección</T>
                </span>

                <span className="mt-5 block font-serif text-5xl italic leading-none text-[#182b3a]/20">
                  02
                </span>
              </div>

              <div className="mt-10 hidden md:block">
                <span className="block text-[9px] font-semibold uppercase tracking-[0.26em] text-[#182b3a]/40">
                  Nomari
                </span>

                <span className="mt-2 block text-xs font-light text-[#182b3a]/60">
                  nomari.com.mx
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8 md:pl-10 lg:flex-row lg:items-end lg:pl-16">
              <div>
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/45">
                  Colección personal
                </p>

                <h1 className="font-serif text-5xl leading-[0.95] tracking-[-0.035em] text-[#182b3a] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                  <T>Su Bolsa</T>
                </h1>

                <div className="mt-7 flex items-center gap-4">
                  <span className="h-px w-14 bg-[#b96045]" />

                  <p className="text-xs font-light italic text-[#182b3a]/60">
                    {cart.items.length}{" "}
                    {cart.items.length === 1 ? (
                      <T>experiencia</T>
                    ) : (
                      <T>experiencias</T>
                    )}
                  </p>
                </div>
              </div>

              {cart.items.length > 0 && (
                <button
                  onClick={clearCart}
                  className="group flex w-fit items-center gap-3 border-b border-[#182b3a]/20 pb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#182b3a]/55 transition-colors hover:border-[#b96045] hover:text-[#b96045]"
                >
                  <Trash2
                    className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-6"
                    strokeWidth={1.4}
                  />

                  <T>Vaciar bolsa</T>
                </button>
              )}
            </div>
          </div>

          {cart.items.length === 0 ? (
            /* Estado vacío */
            <div className="grid min-h-[460px] border-y border-[#182b3a]/15 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div className="flex flex-col justify-center py-16 lg:pr-16">
                <div className="mb-10 flex items-center gap-5">
                  <span className="font-serif text-7xl italic leading-none text-[#b96045] md:text-8xl">
                    00
                  </span>

                  <span className="h-px flex-1 bg-[#182b3a]/15" />
                </div>

                <ShoppingBag
                  className="mb-8 h-10 w-10 text-[#182b3a]/30"
                  strokeWidth={1}
                />

                <h2 className="max-w-xl font-serif text-3xl leading-tight tracking-[-0.02em] text-[#182b3a] md:text-5xl">
                  <T>Su bolsa está vacía</T>
                </h2>

                <p className="mt-6 max-w-lg font-light leading-relaxed text-[#182b3a]/60">
                  <T>
                    La mesa está puesta, solo falta elegir su destino.
                  </T>
                </p>

                <Link
                  href={`/${locale}/experiencias`}
                  className="group mt-10 flex w-fit items-center gap-5 border-b border-[#182b3a] pb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#182b3a] transition-colors hover:border-[#b96045] hover:text-[#b96045]"
                >
                  <T>Explorar Colección</T>

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </div>

              <div className="relative hidden border-l border-[#182b3a]/15 lg:block">
                <div className="absolute inset-10 border border-[#182b3a]/10" />
                <div className="absolute inset-x-0 top-1/2 h-px bg-[#182b3a]/10" />
                <div className="absolute inset-y-0 left-1/2 w-px bg-[#182b3a]/10" />

                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-9xl italic text-[#182b3a]/10">
                  N
                </span>
              </div>
            </div>
          ) : (
            <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-10 xl:gap-16">
              {/* Lista de experiencias */}
              <div className="lg:col-span-7 xl:col-span-8">
                <div className="border-t border-[#182b3a]/20">
                  {cart.items.map((item) => {
                    const itemImage =
                      item.experience.images &&
                      item.experience.images.length > 0
                        ? item.experience.images[0]
                        : "/placeholder.jpg";

                    return (
                      <article
                        key={`${item.packageId}-${item.date}`}
                        className="group grid gap-7 border-b border-[#182b3a]/15 py-10 sm:grid-cols-[180px_minmax(0,1fr)] md:gap-10 md:py-12 xl:grid-cols-[220px_minmax(0,1fr)]"
                      >
                        {/* Imagen */}
                        <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#ded8cf]">
                          <Image
                            src={itemImage}
                            alt={item.experience.title}
                            fill
                            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-[#182b3a]/25 via-transparent to-transparent" />

                          <span className="absolute bottom-4 left-4 border-l border-white/70 pl-3 text-[9px] font-semibold uppercase tracking-[0.24em] text-white">
                            Nomari
                          </span>
                        </div>

                        {/* Información */}
                        <div className="flex min-w-0 flex-col justify-between">
                          <div>
                            <div className="mb-5 flex items-start justify-between gap-6">
                              <span className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[#b96045]">
                                <T>{item.levelName}</T>
                              </span>

                              <button
                                onClick={() =>
                                  removeFromCart(item.packageId, item.date)
                                }
                                className="group/remove flex h-9 w-9 shrink-0 items-center justify-center border border-[#182b3a]/15 text-[#182b3a]/50 transition-colors hover:border-[#b96045] hover:text-[#b96045]"
                                aria-label="Eliminar"
                              >
                                <Trash2
                                  className="h-4 w-4 transition-transform duration-300 group-hover/remove:-rotate-6"
                                  strokeWidth={1.4}
                                />
                              </button>
                            </div>

                            <h3 className="max-w-2xl font-serif text-3xl leading-[1.05] tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                              <T>{item.experience.title}</T>
                            </h3>

                            <div className="mt-7 grid gap-4 border-y border-[#182b3a]/15 py-5 text-xs font-light text-[#182b3a]/60 md:grid-cols-2">
                              <span className="flex items-start gap-3">
                                <MapPin
                                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#b96045]"
                                  strokeWidth={1.5}
                                />

                                <span>{item.experience.location}</span>
                              </span>

                              <span className="flex items-start gap-3">
                                <Calendar
                                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#b96045]"
                                  strokeWidth={1.5}
                                />

                                <T>{formatDate(item.date)}</T>
                              </span>
                            </div>
                          </div>

                          <div className="mt-8 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                              <span className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.25em] text-[#182b3a]/45">
                                <T>Asistentes</T>
                              </span>

                              <div className="flex w-fit items-center border border-[#182b3a]/20">
                                <button
                                  onClick={() =>
                                    updateQuantity(
                                      item.packageId,
                                      item.date,
                                      item.people - 1,
                                    )
                                  }
                                  disabled={item.people <= 1}
                                  className="flex h-10 w-10 items-center justify-center text-[#182b3a] transition-colors hover:bg-[#182b3a] hover:text-[#f2efe8] disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-[#182b3a]"
                                >
                                  <Minus className="h-3 w-3" />
                                </button>

                                <span className="flex h-10 min-w-11 items-center justify-center border-x border-[#182b3a]/20 text-sm font-medium text-[#182b3a]">
                                  {item.people}
                                </span>

                                <button
                                  onClick={() =>
                                    updateQuantity(
                                      item.packageId,
                                      item.date,
                                      item.people + 1,
                                    )
                                  }
                                  className="flex h-10 w-10 items-center justify-center text-[#182b3a] transition-colors hover:bg-[#182b3a] hover:text-[#f2efe8]"
                                >
                                  <Plus className="h-3 w-3" />
                                </button>
                              </div>
                            </div>

                            <div className="sm:text-right">
                              <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/40">
                                Total
                              </span>

                              <p className="font-serif text-2xl text-[#182b3a] md:text-3xl">
                                {formatPrice(item.totalPrice)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>

              {/* Resumen */}
              <aside className="lg:col-span-5 xl:col-span-4">
                <div className="sticky top-28 overflow-hidden bg-[#182b3a] text-[#f2efe8]">
                  <div className="border-b border-[#f2efe8]/15 px-7 py-7 md:px-9 md:py-8">
                    <div className="flex items-center justify-between gap-6">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#d58a6f]">
                        Nomari
                      </span>

                      <span className="font-serif text-4xl italic leading-none text-[#f2efe8]/10">
                        N
                      </span>
                    </div>

                    <h2 className="mt-8 font-serif text-3xl tracking-[-0.025em] text-[#f2efe8] md:text-4xl">
                      <T>Resumen</T>
                    </h2>
                  </div>

                  <div className="px-7 py-8 md:px-9 md:py-10">
                    <div className="border-b border-[#f2efe8]/15 pb-8">
                      <span className="block text-[9px] font-semibold uppercase tracking-[0.24em] text-[#f2efe8]/45">
                        <T>Total (IVA Inc)</T>
                      </span>

                      <span className="mt-4 block font-serif text-4xl leading-none tracking-[-0.025em] text-[#f2efe8] md:text-5xl">
                        {formatPrice(cart.total)}
                      </span>
                    </div>

                    <Link
                      href={`/${locale}/checkout`}
                      className="group mt-8 flex w-full items-center justify-between bg-[#b96045] px-6 py-5 text-[#fffaf4] transition-colors duration-300 hover:bg-[#d0775a]"
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-[0.23em]">
                        <T>Proceder al Pago</T>
                      </span>

                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                    </Link>

                    <div className="mt-8 flex items-center gap-4">
                      <span className="h-px flex-1 bg-[#f2efe8]/15" />
                      <span className="h-1.5 w-1.5 rotate-45 border border-[#d58a6f]" />
                      <span className="h-px flex-1 bg-[#f2efe8]/15" />
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}