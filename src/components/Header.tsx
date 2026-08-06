"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import {
  usePathname,
  useSearchParams,
} from "next/navigation";
import { useState, useEffect } from "react";
import {
  ShoppingBag,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { T } from "@/components/T";
import { CartItem } from "@/lib/types";

export function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { cart, getItemCount } = useCart();
  const itemCount = getItemCount();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  useEffect(() => {
    const handleScroll = () =>
      setIsScrolled(window.scrollY > 30);

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para generar la URL del cambio de idioma manteniendo la ruta actual
  const getLocalizedPath = (newLocale: string) => {
    if (!pathname) return `/${newLocale}`;

    const segments = pathname.split("/");
    segments[1] = newLocale;

    const newPath = segments.join("/");
    const query = searchParams?.toString();

    return `${newPath}${query ? `?${query}` : ""}`;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(price);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "border-b border-[#182b3a]/15 bg-[#f2efe8]/95 shadow-[0_16px_45px_rgba(24,43,58,0.05)] backdrop-blur-xl"
            : "border-b border-[#182b3a]/10 bg-[#f2efe8]/80 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-7 lg:px-10">
          <div
            className={`grid grid-cols-[1fr_auto] items-center transition-all duration-500 md:grid-cols-[240px_minmax(0,1fr)_240px] lg:grid-cols-[280px_minmax(0,1fr)_280px] ${
              isScrolled
                ? "min-h-[72px]"
                : "min-h-[88px]"
            }`}
          >
            {/* Marca */}
            <div className="flex h-full items-center md:border-r md:border-[#182b3a]/12 md:pr-8">
              <Link
                href={`/${locale}/`}
                className="group flex items-end font-serif text-[2rem] leading-none tracking-[-0.04em] text-[#182b3a] transition-colors hover:text-[#b96045] md:text-[2.35rem]"
              >
                Nomari

                <span className="ml-0.5 text-[2.7rem] leading-[0.65] text-[#b96045] transition-colors group-hover:text-[#182b3a] md:text-[3rem]">
                  .
                </span>
              </Link>

              <span className="ml-5 hidden border-l border-[#182b3a]/15 pl-5 text-[8px] font-semibold uppercase leading-relaxed tracking-[0.24em] text-[#182b3a]/40 lg:block">
                Experiencias
                <br />
                de autor
              </span>
            </div>

            {/* Navegación desktop */}
            <nav className="hidden h-full items-center justify-center md:flex">
              <div className="flex h-full items-center">
                <Link
                  href={`/${locale}/experiencias`}
                  className="group relative flex h-full min-w-[160px] items-center justify-center border-r border-[#182b3a]/10 px-7 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#182b3a]/65 transition-colors hover:text-[#b96045]"
                >
                  <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-[#b96045] transition-transform duration-300 group-hover:scale-x-100" />

                  <span className="mr-3 font-serif text-lg italic tracking-normal text-[#182b3a]/18">
                    01
                  </span>

                  <T>Expediciones</T>
                </Link>

                <Link
                  href={`/${locale}/#cotizar`}
                  className="group relative flex h-full min-w-[180px] items-center justify-center px-7 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#182b3a]/65 transition-colors hover:text-[#b96045]"
                >
                  <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-[#b96045] transition-transform duration-300 group-hover:scale-x-100" />

                  <span className="mr-3 font-serif text-lg italic tracking-normal text-[#182b3a]/18">
                    02
                  </span>

                  <T>Diseño a Medida</T>
                </Link>
              </div>
            </nav>

            {/* Acciones */}
            <div className="flex h-full items-center justify-end gap-2 md:border-l md:border-[#182b3a]/12 md:pl-7">
              {/* Idioma */}
              <Link
                href={getLocalizedPath(
                  locale === "es" ? "en" : "es",
                )}
                className="flex h-10 min-w-10 items-center justify-center border border-[#182b3a]/15 px-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#182b3a] transition-all duration-300 hover:border-[#b96045] hover:text-[#b96045] md:border-0"
              >
                {locale === "es" ? "EN" : "ES"}
              </Link>

              {/* Mini carrito desktop */}
              <div className="group relative hidden h-full items-center md:flex">
                <Link
                  href={`/${locale}/carrito`}
                  className="flex h-10 items-center gap-3 border-l border-[#182b3a]/15 pl-5 text-[#182b3a]"
                >
                  <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/65 transition-colors group-hover:text-[#b96045]">
                    <T>Bolsa</T>
                  </span>

                  <div className="relative flex h-9 w-9 items-center justify-center border border-[#182b3a]/15 transition-colors group-hover:border-[#b96045]">
                    <ShoppingBag
                      className="h-4 w-4 transition-colors group-hover:text-[#b96045]"
                      strokeWidth={1.35}
                    />

                    {itemCount > 0 && (
                      <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center bg-[#b96045] px-1 text-[8px] font-semibold text-white">
                        {itemCount}
                      </span>
                    )}
                  </div>
                </Link>

                {/* Dropdown del carrito */}
                <div className="invisible absolute right-0 top-full z-50 w-[420px] translate-y-3 border border-[#182b3a]/15 bg-[#f2efe8] opacity-0 shadow-[0_35px_90px_rgba(24,43,58,0.18)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {/* Encabezado carrito */}
                  <div className="grid grid-cols-[1fr_auto] items-end border-b border-[#182b3a]/15 bg-[#182b3a] px-7 py-6 text-[#f2efe8]">
                    <div>
                      <span className="block text-[8px] font-semibold uppercase tracking-[0.3em] text-[#d58a6f]">
                        Selección personal
                      </span>

                      <h3 className="mt-2 font-serif text-2xl leading-none">
                        <T>Bolsa</T>
                      </h3>
                    </div>

                    <span className="font-serif text-4xl italic leading-none text-[#f2efe8]/15">
                      {String(itemCount).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Artículos */}
                  <div className="max-h-[360px] overflow-y-auto">
                    {cart?.items?.length > 0 ? (
                      <div className="divide-y divide-[#182b3a]/15">
                        {cart.items.map(
                          (
                            item: CartItem,
                            idx: number,
                          ) => (
                            <div
                              key={idx}
                              className="group/item grid grid-cols-[82px_minmax(0,1fr)] gap-5 px-7 py-6"
                            >
                              <div className="relative h-[96px] w-[82px] overflow-hidden bg-[#ddd7ce]">
                                <img
                                  src={
                                    item.experience
                                      .images[0] ||
                                    "/placeholder.jpg"
                                  }
                                  alt={
                                    item.experience.title
                                  }
                                  className="h-full w-full object-cover transition-transform duration-700 group-hover/item:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#182b3a]/30 to-transparent" />

                                <span className="absolute bottom-2 left-2 font-serif text-xl italic text-white/70">
                                  {String(idx + 1).padStart(
                                    2,
                                    "0",
                                  )}
                                </span>
                              </div>

                              <div className="flex min-w-0 flex-col justify-between">
                                <div>
                                  <p className="line-clamp-2 font-serif text-lg leading-tight text-[#182b3a]">
                                    {item.experience.title}
                                  </p>

                                  <p className="mt-3 text-[8px] font-semibold uppercase leading-relaxed tracking-[0.18em] text-[#182b3a]/40">
                                    {item.people} pax
                                    <span className="mx-2 text-[#b96045]">
                                      ·
                                    </span>
                                    {item.date}
                                  </p>
                                </div>

                                <div className="mt-4 flex items-end justify-between gap-4 border-t border-[#182b3a]/10 pt-3">
                                  <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#182b3a]/35">
                                    Total
                                  </span>

                                  <span className="font-serif text-lg text-[#b96045]">
                                    {formatPrice(
                                      item.totalPrice,
                                    )}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ),
                        )}
                      </div>
                    ) : (
                      <div className="flex min-h-[230px] flex-col items-center justify-center px-7 py-12 text-center">
                        <span className="font-serif text-6xl italic leading-none text-[#182b3a]/10">
                          00
                        </span>

                        <div className="mt-5 flex h-12 w-12 items-center justify-center border border-[#182b3a]/15">
                          <ShoppingBag
                            className="h-5 w-5 text-[#182b3a]/30"
                            strokeWidth={1.2}
                          />
                        </div>

                        <p className="mt-5 font-serif text-xl text-[#182b3a]">
                          <T>Su bolsa está vacía.</T>
                        </p>

                        <span className="mt-4 h-px w-12 bg-[#b96045]" />
                      </div>
                    )}
                  </div>

                  {/* Resumen */}
                  {cart?.items?.length > 0 && (
                    <div className="border-t border-[#182b3a]/15 bg-[#e8e2d8] p-7">
                      <div className="mb-6 flex items-end justify-between gap-6">
                        <div>
                          <span className="block text-[8px] font-semibold uppercase tracking-[0.26em] text-[#182b3a]/40">
                            <T>Total</T>
                          </span>

                          <span className="mt-2 block text-[9px] uppercase tracking-[0.18em] text-[#182b3a]/35">
                            MXN
                          </span>
                        </div>

                        <span className="font-serif text-3xl leading-none tracking-[-0.03em] text-[#182b3a]">
                          {formatPrice(cart.total)}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <Link
                          href={`/${locale}/carrito`}
                          className="flex min-h-14 items-center justify-between border border-[#182b3a]/25 px-5 text-[#182b3a] transition-all duration-300 hover:bg-[#182b3a] hover:text-[#f2efe8]"
                        >
                          <span className="text-[8px] font-semibold uppercase tracking-[0.2em]">
                            <T>Ver detalles</T>
                          </span>

                          <span>↗</span>
                        </Link>

                        <Link
                          href={`/${locale}/checkout`}
                          className="flex min-h-14 items-center justify-between bg-[#b96045] px-5 text-white transition-colors duration-300 hover:bg-[#182b3a]"
                        >
                          <span className="text-[8px] font-semibold uppercase tracking-[0.2em]">
                            <T>Pagar ahora</T>
                          </span>

                          <ArrowRight
                            className="h-4 w-4"
                            strokeWidth={1.4}
                          />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Bolsa móvil */}
              <Link
                href={`/${locale}/carrito`}
                className="relative flex h-10 w-10 items-center justify-center border border-[#182b3a]/15 text-[#182b3a] md:hidden"
              >
                <ShoppingBag
                  className="h-[18px] w-[18px]"
                  strokeWidth={1.35}
                />

                {itemCount > 0 && (
                  <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center bg-[#b96045] px-1 text-[8px] font-semibold text-white">
                    {itemCount}
                  </span>
                )}
              </Link>

              {/* Botón móvil */}
              <button
                type="button"
                aria-label="Abrir menú"
                aria-expanded={mobileMenuOpen}
                className="flex h-10 w-10 items-center justify-center bg-[#182b3a] text-[#f2efe8] md:hidden"
                onClick={() =>
                  setMobileMenuOpen(true)
                }
              >
                <Menu
                  className="h-5 w-5"
                  strokeWidth={1.25}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menú móvil */}
      <div
        className={`fixed inset-0 z-[60] overflow-hidden bg-[#182b3a] text-[#f2efe8] transition-all duration-700 ${
          mobileMenuOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        {/* Decoración */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -right-40 top-20 h-96 w-96 rounded-full border border-[#d58a6f]/15" />
          <div className="absolute -right-8 top-48 h-52 w-52 rounded-full border border-white/5" />

          <div className="absolute bottom-24 left-0 h-px w-48 bg-[#b96045]/60" />

          <span className="absolute -bottom-20 -left-5 font-serif text-[15rem] italic leading-none text-white/[0.025]">
            N
          </span>
        </div>

        <div className="relative grid min-h-full grid-rows-[auto_1fr_auto]">
          {/* Cabecera móvil */}
          <div className="flex items-center justify-between border-b border-[#f2efe8]/15 px-6 py-6">
            <div>
              <Link
                href={`/${locale}/`}
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className="font-serif text-3xl tracking-[-0.04em]"
              >
                Nomari
                <span className="text-[#b96045]">
                  .
                </span>
              </Link>

              <span className="mt-2 block text-[7px] font-semibold uppercase tracking-[0.28em] text-[#f2efe8]/30">
                Experiencias de autor
              </span>
            </div>

            <button
              type="button"
              aria-label="Cerrar menú"
              className="flex h-12 w-12 items-center justify-center border border-[#f2efe8]/20 text-[#f2efe8] transition-colors hover:border-[#d58a6f] hover:text-[#d58a6f]"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              <X
                className="h-6 w-6"
                strokeWidth={1.1}
              />
            </button>
          </div>

          {/* Navegación móvil */}
          <div className="relative flex flex-col justify-center px-6 py-10">
            <span className="mb-8 text-[8px] font-semibold uppercase tracking-[0.34em] text-[#d58a6f]">
              Navegación
            </span>

            <nav className="border-y border-[#f2efe8]/15">
              <Link
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                href={`/${locale}/`}
                className="group grid grid-cols-[52px_minmax(0,1fr)_auto] items-center border-b border-[#f2efe8]/15 py-7"
              >
                <span className="font-serif text-2xl italic text-[#f2efe8]/15">
                  01
                </span>

                <span className="font-serif text-4xl leading-none tracking-[-0.03em] transition-colors group-hover:text-[#d58a6f]">
                  <T>Inicio</T>
                </span>

                <ArrowRight
                  className="h-5 w-5 text-[#f2efe8]/25 transition-all group-hover:translate-x-1 group-hover:text-[#d58a6f]"
                  strokeWidth={1.2}
                />
              </Link>

              <Link
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                href={`/${locale}/experiencias`}
                className="group grid grid-cols-[52px_minmax(0,1fr)_auto] items-center border-b border-[#f2efe8]/15 py-7"
              >
                <span className="font-serif text-2xl italic text-[#f2efe8]/15">
                  02
                </span>

                <span className="font-serif text-4xl leading-none tracking-[-0.03em] transition-colors group-hover:text-[#d58a6f]">
                  <T>Expediciones</T>
                </span>

                <ArrowRight
                  className="h-5 w-5 text-[#f2efe8]/25 transition-all group-hover:translate-x-1 group-hover:text-[#d58a6f]"
                  strokeWidth={1.2}
                />
              </Link>

              <Link
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                href={`/${locale}/#cotizar`}
                className="group grid grid-cols-[52px_minmax(0,1fr)_auto] items-center py-7"
              >
                <span className="font-serif text-2xl italic text-[#f2efe8]/15">
                  03
                </span>

                <span className="font-serif text-4xl leading-none tracking-[-0.03em] transition-colors group-hover:text-[#d58a6f]">
                  <T>Diseño a Medida</T>
                </span>

                <ArrowRight
                  className="h-5 w-5 text-[#f2efe8]/25 transition-all group-hover:translate-x-1 group-hover:text-[#d58a6f]"
                  strokeWidth={1.2}
                />
              </Link>
            </nav>

            <Link
              onClick={() =>
                setMobileMenuOpen(false)
              }
              href={`/${locale}/carrito`}
              className="mt-9 grid min-h-16 grid-cols-[1fr_auto] items-center bg-[#b96045] px-6 text-white"
            >
              <div>
                <span className="block text-[8px] font-semibold uppercase tracking-[0.24em] text-white/60">
                  Selección personal
                </span>

                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em]">
                  <T>Ver mi Bolsa</T> ({itemCount})
                </span>
              </div>

              <ShoppingBag
                className="h-5 w-5"
                strokeWidth={1.3}
              />
            </Link>
          </div>

          {/* Pie móvil */}
          <div className="relative grid grid-cols-2 border-t border-[#f2efe8]/15">
            <div className="border-r border-[#f2efe8]/15 px-6 py-5">
              <span className="block text-[7px] font-semibold uppercase tracking-[0.25em] text-[#f2efe8]/25">
                Sitio oficial
              </span>

              <span className="mt-2 block text-[9px] font-semibold uppercase tracking-[0.18em] text-[#f2efe8]/60">
                nomari.com.mx
              </span>
            </div>

            <Link
              href={getLocalizedPath(
                locale === "es" ? "en" : "es",
              )}
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="flex flex-col justify-center px-6 py-5"
            >
              <span className="text-[7px] font-semibold uppercase tracking-[0.25em] text-[#f2efe8]/25">
                Idioma
              </span>

              <span className="mt-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#d58a6f]">
                {locale === "es"
                  ? "English"
                  : "Español"}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}