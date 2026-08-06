"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { T } from "@/components/T";

export default function PoliticaDeReembolsosPage() {
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

          <div className="absolute left-0 top-[60rem] h-px w-36 bg-[#b96045]/30 md:w-72" />
          <div className="absolute right-0 top-[118rem] h-px w-44 bg-[#182b3a]/15 md:w-80" />

          <span className="absolute bottom-10 left-5 hidden font-serif text-[15rem] italic leading-none text-[#182b3a]/[0.025] lg:block">
            N
          </span>
        </div>

        <div className="container relative mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10 animate-fade-in-up">
          {/* Encabezado */}
          <header className="mb-20 grid border-y border-[#182b3a]/15 py-10 md:mb-28 md:grid-cols-[240px_minmax(0,1fr)] md:py-14 lg:grid-cols-[300px_minmax(0,1fr)]">
            <div className="mb-10 flex flex-col justify-between border-[#182b3a]/15 md:mb-0 md:min-h-[290px] md:border-r md:pr-10">
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.34em] text-[#b96045]">
                  <T>Documento Legal</T>
                </span>

                <span className="mt-6 block font-serif text-6xl italic leading-none text-[#182b3a]/15">
                  10
                </span>
              </div>

              <div className="mt-12 hidden md:block">
                <span className="block text-[9px] font-semibold uppercase tracking-[0.26em] text-[#182b3a]/40">
                  Nomari
                </span>

                <span className="mt-2 block max-w-[180px] text-xs font-light leading-relaxed text-[#182b3a]/60">
                  Condiciones aplicables a cancelaciones y devoluciones.
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-end md:pl-10 lg:pl-16">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/45">
                Reservaciones y servicios
              </p>

              <h1 className="max-w-5xl font-serif text-5xl leading-[0.94] tracking-[-0.04em] text-[#182b3a] sm:text-6xl md:text-7xl lg:text-[6rem]">
                <T>Política de Reembolsos y Cancelaciones</T>
              </h1>

              <div className="mt-8 flex items-center gap-5 border-t border-[#182b3a]/15 pt-7">
                <span className="h-px w-16 bg-[#b96045]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/45">
                  Nomari · México
                </span>
              </div>
            </div>
          </header>

          <div className="grid gap-16 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)]">
            {/* Información lateral */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 border-t border-[#182b3a]/20 pt-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#b96045]">
                  Referencia
                </p>

                <p className="mt-6 max-w-[220px] font-serif text-2xl leading-snug text-[#182b3a]">
                  Condiciones claras para cada reservación.
                </p>

                <div className="mt-10 space-y-7 border-l border-[#182b3a]/15 pl-5">
                  <div>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/40">
                      Sitio
                    </span>

                    <span className="mt-2 block text-sm font-light text-[#182b3a]/65">
                      nomari.com.mx
                    </span>
                  </div>

                  <div>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/40">
                      Contacto
                    </span>

                    <span className="mt-2 block break-all text-sm font-light text-[#182b3a]/65">
                      contacto@nomari.com.mx
                    </span>
                  </div>

                  <div>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/40">
                      Secciones
                    </span>

                    <span className="mt-2 block font-serif text-3xl italic text-[#182b3a]/30">
                      01 — 11
                    </span>
                  </div>
                </div>

                <div className="mt-12 h-px w-full bg-[#182b3a]/15" />

                <p className="mt-6 text-xs font-light leading-relaxed text-[#182b3a]/50">
                  Recomendamos revisar las condiciones particulares de cada
                  servicio antes de confirmar una reservación.
                </p>
              </div>
            </aside>

            {/* Documento */}
            <article className="min-w-0 border-t border-[#182b3a]/20">
              <div className="divide-y divide-[#182b3a]/15 text-sm font-light leading-[1.85] text-[#42515b] md:text-[15px] [&_strong]:font-semibold [&_strong]:text-[#182b3a]">
                {/* 1 */}
                <section className="grid gap-8 py-12 md:grid-cols-[80px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      01
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                      <T>1. Alcance</T>
                    </h3>

                    <div className="space-y-6">
                      <p>
                        <T>
                          La presente Política regula los supuestos en los que
                          procede o no la devolución de pagos realizados por los
                          Usuarios a través de los canales oficiales de NOMARI
                          (sitio web, correo electrónico o plataformas digitales
                          autorizadas).
                        </T>
                      </p>

                      <p>
                        <T>
                          Aplica a todos los Servicios contratados, incluidos
                          eventos, experiencias gastronómicas, tours, fan zones
                          y reservaciones en restaurantes o bares asociados.
                        </T>
                      </p>

                      <p>
                        <T>
                          Forma parte integral de los Términos y Condiciones
                          Generales de Contratación de NOMARI.
                        </T>
                      </p>
                    </div>
                  </div>
                </section>

                {/* 2 */}
                <section className="grid gap-8 py-12 md:grid-cols-[80px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      02
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                      <T>2. Condiciones generales de reembolso</T>
                    </h3>

                    <p className="mb-6">
                      <strong>
                        <T>2.1.</T>
                      </strong>{" "}
                      <T>
                        El Usuario podrá solicitar un reembolso siempre que:
                      </T>
                    </p>

                    <ul className="space-y-4 border-l border-[#b96045]/50 pl-6">
                      <li>
                        <T>
                          Se cumpla con el plazo mínimo de aviso indicado en las
                          condiciones particulares del Servicio (ejemplo: 7 días
                          naturales para eventos generales, 7 días para tours
                          gastronómicos, 1 día para experiencias de consumo
                          inmediato).
                        </T>
                      </li>

                      <li>
                        <T>
                          El proveedor correspondiente confirme que el reembolso
                          es procedente conforme a sus políticas internas.
                        </T>
                      </li>

                      <li>
                        <T>
                          El pago haya sido acreditado correctamente a través de
                          los sistemas autorizados por NOMARI.
                        </T>
                      </li>
                    </ul>

                    <p className="mt-8">
                      <strong>
                        <T>2.2.</T>
                      </strong>{" "}
                      <T>
                        Ningún reembolso será procesado si la solicitud se
                        presenta fuera de los plazos establecidos o en
                        contravención a las políticas de los proveedores.
                      </T>
                    </p>
                  </div>
                </section>

                {/* 3 */}
                <section className="grid gap-8 py-12 md:grid-cols-[80px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      03
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                      <T>3. Servicios no reembolsables</T>
                    </h3>

                    <p className="mb-6">
                      <strong>
                        <T>3.1.</T>
                      </strong>{" "}
                      <T>
                        No procederá reembolso alguno en los siguientes
                        supuestos:
                      </T>
                    </p>

                    <ul className="grid gap-px border border-[#182b3a]/15 bg-[#182b3a]/15 md:grid-cols-2">
                      <li className="bg-[#f2efe8] p-6">
                        <T>
                          Reservaciones en fechas de alta demanda (ejemplo:
                          partidos de la Copa Mundial FIFA 2026, festividades
                          nacionales o eventos masivos).
                        </T>
                      </li>

                      <li className="bg-[#f2efe8] p-6">
                        <T>
                          Servicios que indiquen expresamente la cláusula “no
                          reembolsable” en sus condiciones particulares.
                        </T>
                      </li>

                      <li className="bg-[#f2efe8] p-6">
                        <T>
                          Pagos de anticipos, apartados o depósitos de garantía
                          para asegurar disponibilidad.
                        </T>
                      </li>

                      <li className="bg-[#f2efe8] p-6">
                        <T>
                          Cancelaciones motivadas por incumplimiento del Usuario
                          (ej. impuntualidad, falta de documentos, incumplimiento
                          de requisitos de acceso, conducta inapropiada, consumo
                          excesivo de alcohol o sustancias).
                        </T>
                      </li>
                    </ul>

                    <p className="mt-8 border-y border-[#b96045]/30 py-6 font-serif text-xl leading-relaxed text-[#182b3a]">
                      <strong>
                        <T>3.2.</T>
                      </strong>{" "}
                      <T>
                        El Usuario reconoce y acepta que, en estos casos, la
                        pérdida del monto pagado será total.
                      </T>
                    </p>
                  </div>
                </section>

                {/* 4 */}
                <section className="grid gap-8 py-12 md:grid-cols-[80px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      04
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                      <T>4. Procedimiento para solicitar un reembolso</T>
                    </h3>

                    <p className="mb-6">
                      <strong>
                        <T>4.1.</T>
                      </strong>{" "}
                      <T>
                        El Usuario deberá enviar un correo electrónico a
                        contacto@nomari.com.mx, indicando:
                      </T>
                    </p>

                    <ul className="grid border-t border-[#182b3a]/15 sm:grid-cols-2">
                      <li className="border-b border-[#182b3a]/15 py-4 sm:pr-6">
                        <T>Nombre completo del titular de la reservación.</T>
                      </li>

                      <li className="border-b border-[#182b3a]/15 py-4 sm:pl-6">
                        <T>Número de reservación.</T>
                      </li>

                      <li className="border-b border-[#182b3a]/15 py-4 sm:pr-6">
                        <T>Servicio contratado.</T>
                      </li>

                      <li className="border-b border-[#182b3a]/15 py-4 sm:pl-6">
                        <T>Fecha prevista del Servicio.</T>
                      </li>

                      <li className="border-b border-[#182b3a]/15 py-4 sm:col-span-2">
                        <T>
                          Motivo de la cancelación y solicitud de reembolso.
                        </T>
                      </li>
                    </ul>

                    <div className="mt-8 space-y-6">
                      <p>
                        <strong>
                          <T>4.2.</T>
                        </strong>{" "}
                        <T>
                          NOMARI confirmará la recepción de la solicitud y
                          gestionará ante el proveedor correspondiente la
                          procedencia o improcedencia del reembolso.
                        </T>
                      </p>

                      <p>
                        <strong>
                          <T>4.3.</T>
                        </strong>{" "}
                        <T>
                          En caso de ser aprobado, se notificará al Usuario el
                          monto a devolver y la fecha estimada de acreditación.
                        </T>
                      </p>
                    </div>
                  </div>
                </section>

                {/* 5 */}
                <section className="grid gap-8 py-12 md:grid-cols-[80px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      05
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                      <T>5. Forma y tiempos de devolución</T>
                    </h3>

                    <div className="space-y-6">
                      <p>
                        <strong>
                          <T>5.1.</T>
                        </strong>{" "}
                        <T>
                          Los reembolsos se efectuarán, siempre que sea
                          técnicamente posible, a través del mismo método de
                          pago utilizado por el Usuario.
                        </T>
                      </p>

                      <p>
                        <strong>
                          <T>5.2.</T>
                        </strong>{" "}
                        <T>
                          En caso de imposibilidad técnica, el reembolso podrá
                          realizarse mediante transferencia bancaria a una
                          cuenta a nombre del titular original de la
                          reservación.
                        </T>
                      </p>

                      <p>
                        <strong>
                          <T>5.3.</T>
                        </strong>{" "}
                        <T>
                          Los plazos de acreditación dependen de las
                          instituciones financieras, pudiendo variar entre 5 y
                          20 días hábiles posteriores a la confirmación del
                          reembolso.
                        </T>
                      </p>

                      <p>
                        <strong>
                          <T>5.4.</T>
                        </strong>{" "}
                        <T>
                          NOMARI no será responsable por demoras imputables a
                          bancos, pasarelas de pago o terceros ajenos a su
                          control.
                        </T>
                      </p>
                    </div>
                  </div>
                </section>

                {/* 6 */}
                <section className="grid gap-8 py-12 md:grid-cols-[80px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      06
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                      <T>6. Reembolsos parciales</T>
                    </h3>

                    <div className="space-y-6">
                      <p>
                        <strong>
                          <T>6.1.</T>
                        </strong>{" "}
                        <T>
                          Cuando un Usuario haya utilizado parcialmente un
                          Servicio contratado (ejemplo: asistencia a una parte
                          del evento, consumo de algunos beneficios de un
                          paquete), sólo podrá solicitar un reembolso parcial,
                          si así lo autoriza el proveedor.
                        </T>
                      </p>

                      <p>
                        <strong>
                          <T>6.2.</T>
                        </strong>{" "}
                        <T>
                          En ningún caso procederá la devolución íntegra del
                          monto pagado si parte del Servicio ya fue disfrutado
                          por el Usuario.
                        </T>
                      </p>
                    </div>
                  </div>
                </section>

                {/* 7 */}
                <section className="grid gap-8 py-12 md:grid-cols-[80px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      07
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                      <T>
                        7. Cancelación por parte de NOMARI o proveedores
                      </T>
                    </h3>

                    <p className="mb-6">
                      <strong>
                        <T>7.1.</T>
                      </strong>{" "}
                      <T>
                        En caso de cancelación de un Servicio por causas
                        imputables a NOMARI o a un proveedor, el Usuario podrá
                        optar entre:
                      </T>
                    </p>

                    <div className="grid gap-px border border-[#182b3a]/15 bg-[#182b3a]/15 sm:grid-cols-2">
                      <div className="bg-[#f2efe8] p-6">
                        <span className="mb-4 block font-serif text-3xl italic text-[#b96045]">
                          A
                        </span>

                        <T>La reprogramación del Servicio en otra fecha.</T>
                      </div>

                      <div className="bg-[#f2efe8] p-6">
                        <span className="mb-4 block font-serif text-3xl italic text-[#b96045]">
                          B
                        </span>

                        <T>La devolución íntegra del monto pagado.</T>
                      </div>
                    </div>

                    <p className="mt-8">
                      <strong>
                        <T>7.2.</T>
                      </strong>{" "}
                      <T>
                        No procederá indemnización adicional por daños
                        indirectos, pérdidas de oportunidad o lucro cesante.
                      </T>
                    </p>
                  </div>
                </section>

                {/* 8 */}
                <section className="grid gap-8 py-12 md:grid-cols-[80px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      08
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                      <T>
                        8. Casos de fuerza mayor o causas ajenas a NOMARI
                      </T>
                    </h3>

                    <p className="mb-6">
                      <strong>
                        <T>8.1.</T>
                      </strong>{" "}
                      <T>
                        No procederán reembolsos cuando la cancelación o
                        modificación del Servicio se deba a:
                      </T>
                    </p>

                    <ul className="border-t border-[#182b3a]/15">
                      <li className="border-b border-[#182b3a]/15 py-4">
                        <T>Condiciones climáticas adversas.</T>
                      </li>

                      <li className="border-b border-[#182b3a]/15 py-4">
                        <T>
                          Medidas gubernamentales, sanitarias o de seguridad.
                        </T>
                      </li>

                      <li className="border-b border-[#182b3a]/15 py-4">
                        <T>Fallas técnicas o cortes de transmisión.</T>
                      </li>

                      <li className="border-b border-[#182b3a]/15 py-4">
                        <T>
                          Cualquier evento calificado como caso fortuito o
                          fuerza mayor.
                        </T>
                      </li>
                    </ul>

                    <p className="mt-8">
                      <strong>
                        <T>8.2.</T>
                      </strong>{" "}
                      <T>
                        En estos casos, NOMARI podrá ofrecer al Usuario
                        alternativas razonables (reprogramación, sustitución por
                        otro Servicio similar), sin que exista obligación de
                        devolución del monto pagado.
                      </T>
                    </p>
                  </div>
                </section>

                {/* 9 */}
                <section className="grid gap-8 py-12 md:grid-cols-[80px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      09
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                      <T>9. Contracargos y pagos no reconocidos</T>
                    </h3>

                    <p className="mb-6">
                      <strong>
                        <T>9.1.</T>
                      </strong>{" "}
                      <T>
                        Si un Usuario inicia un contracargo con su banco o
                        institución financiera, NOMARI se reserva el derecho de:
                      </T>
                    </p>

                    <ul className="space-y-4 border-l border-[#b96045]/50 pl-6">
                      <li>
                        <T>Suspender la prestación del Servicio.</T>
                      </li>

                      <li>
                        <T>Rechazar futuras contrataciones del Usuario.</T>
                      </li>

                      <li>
                        <T>
                          Reclamar judicial o extrajudicialmente los montos
                          adeudados, incluyendo comisiones y gastos legales.
                        </T>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* 10 */}
                <section className="grid gap-8 py-12 md:grid-cols-[80px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      10
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                      <T>10. Aceptación expresa</T>
                    </h3>

                    <p className="border-y border-[#b96045]/30 py-7 font-serif text-xl leading-relaxed text-[#182b3a]">
                      <T>
                        Al confirmar su reservación y efectuar el pago
                        correspondiente, el Usuario declara haber leído,
                        comprendido y aceptado íntegramente la presente Política
                        de Reembolsos, así como los Términos y Condiciones
                        Generales de Contratación de NOMARI.
                      </T>
                    </p>
                  </div>
                </section>

                {/* 11 */}
                <section className="grid gap-8 py-12 md:grid-cols-[80px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      11
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                      <T>11. Contacto</T>
                    </h3>

                    <p>
                      <T>
                        Para cualquier consulta relacionada con esta política,
                        el cliente podrá comunicarse al correo
                        contacto@nomari.com.mx o acudir directamente al
                        domicilio de NOMARI en Av. Río Consulado Cto Interior
                        516, Oficina 102, Colonia Tlatilco, Alcaldía
                        Azcapotzalco, C.P. 02860, Ciudad de México.
                      </T>
                    </p>

                    <div className="mt-12 grid border-y border-[#182b3a]/20 py-8 sm:grid-cols-2">
                      <div className="pb-7 sm:border-r sm:border-[#182b3a]/15 sm:pb-0 sm:pr-8">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#b96045]">
                          Nomari
                        </span>

                        <p className="mt-3 font-serif text-2xl text-[#182b3a]">
                          Curaduría de experiencias personalizadas.
                        </p>
                      </div>

                      <div className="border-t border-[#182b3a]/15 pt-7 sm:border-t-0 sm:pl-8 sm:pt-0">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/45">
                          Contacto
                        </span>

                        <p className="mt-3 break-all text-sm text-[#182b3a]/65">
                          contacto@nomari.com.mx
                        </p>

                        <p className="mt-1 text-sm text-[#182b3a]/65">
                          nomari.com.mx
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}