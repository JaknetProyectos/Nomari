"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { T } from "@/components/T";

export default function AvisoDePrivacidadPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-[#f2efe8] text-[#182b3a]">
      <Header />

      <main className="relative flex-1 pt-36 pb-24 md:pt-44 md:pb-32">
        {/* Fondo editorial */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-[#182b3a]/10" />

          <div className="absolute -right-24 top-24 h-72 w-72 rounded-full border border-[#b96045]/15" />
          <div className="absolute -right-8 top-40 h-48 w-48 rounded-full border border-[#182b3a]/10" />

          <div className="absolute left-0 top-[44rem] h-px w-36 bg-[#b96045]/30 md:w-64" />
          <div className="absolute right-0 top-[72rem] h-px w-40 bg-[#182b3a]/15 md:w-72" />

          <div className="absolute bottom-32 left-8 hidden text-[12rem] font-serif leading-none text-[#182b3a]/[0.025] lg:block">
            N
          </div>
        </div>

        <div className="container relative mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          {/* Portada */}
          <div className="mb-20 grid border-y border-[#182b3a]/15 py-10 md:mb-28 md:grid-cols-[220px_minmax(0,1fr)] md:py-14 lg:grid-cols-[280px_minmax(0,1fr)]">
            <div className="mb-10 flex flex-col justify-between border-[#182b3a]/15 md:mb-0 md:border-r md:pr-10">
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.34em] text-[#b96045]">
                  <T>Documento Legal</T>
                </span>

                <span className="mt-5 block font-serif text-5xl italic leading-none text-[#182b3a]/20">
                  01
                </span>
              </div>

              <div className="mt-12 hidden md:block">
                <span className="block text-[9px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/45">
                  Nomari
                </span>
                <span className="mt-2 block text-xs leading-relaxed text-[#182b3a]/60">
                  nomari.com.mx
                </span>
              </div>
            </div>

            <div className="md:pl-10 lg:pl-16">
              <div className="max-w-4xl">
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#182b3a]/45">
                  Privacidad y protección de datos
                </p>

                <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.035em] text-[#182b3a] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
                  <T>Aviso de Privacidad</T>
                </h1>

                <div className="mt-8 flex items-center gap-5">
                  <span className="h-px w-16 bg-[#b96045]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/50">
                    Nomari · México
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Composición general */}
          <div className="grid gap-16 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)]">
            {/* Columna lateral */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 border-t border-[#182b3a]/20 pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#b96045]">
                  Información
                </p>

                <p className="mt-6 max-w-[210px] font-serif text-2xl leading-snug text-[#182b3a]">
                  Transparencia en el manejo de tu información.
                </p>

                <div className="mt-10 space-y-6 border-l border-[#182b3a]/15 pl-5">
                  <div>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/40">
                      Sitio
                    </span>
                    <span className="mt-1 block text-sm text-[#182b3a]/70">
                      nomari.com.mx
                    </span>
                  </div>

                  <div>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/40">
                      Contacto
                    </span>
                    <span className="mt-1 block break-all text-sm text-[#182b3a]/70">
                      contacto@nomari.com.mx
                    </span>
                  </div>
                </div>

                <div className="mt-12 h-px w-full bg-[#182b3a]/15" />

                <p className="mt-6 text-xs font-light leading-relaxed text-[#182b3a]/50">
                  Este documento explica cómo se recaban, utilizan, conservan y
                  protegen los datos personales.
                </p>
              </div>
            </aside>

            {/* Documento */}
            <article className="min-w-0 border-t border-[#182b3a]/20">
              <div className="divide-y divide-[#182b3a]/15 text-sm font-light leading-[1.85] text-[#42515b] md:text-[15px] [&_strong]:font-semibold [&_strong]:text-[#182b3a]">
                {/* A */}
                <section className="grid gap-7 py-12 md:grid-cols-[70px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      A
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.02em] text-[#182b3a] md:text-4xl">
                      <T>A. Responsable de los datos personales</T>
                    </h3>

                    <div className="space-y-6">
                      <p>
                        <strong>
                          <T>A.1. Identidad del responsable.</T>
                        </strong>{" "}
                        <T>
                          El tratamiento de los datos personales recabados a
                          través de nomari.com.mx, así como por otros medios
                          electrónicos o físicos, corresponde a GREATDEN S.A. DE
                          C.V. (en adelante, “NOMARI” o el “Responsable”).
                        </T>
                      </p>

                      <p>
                        <strong>
                          <T>A.2. Domicilio.</T>
                        </strong>{" "}
                        <T>
                          Av. Río Consulado Cto Interior 516, Oficina 102, Col.
                          Tlatilco, Alcaldía Azcapotzalco, C.P. 02860, Ciudad de
                          México.
                        </T>
                      </p>

                      <p>
                        <strong>
                          <T>A.3. Medios de contacto.</T>
                        </strong>{" "}
                        <T>
                          Para privacidad y datos personales:
                          contacto@nomari.com.mx.
                        </T>
                      </p>
                    </div>
                  </div>
                </section>

                {/* B */}
                <section className="grid gap-7 py-12 md:grid-cols-[70px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      B
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.02em] text-[#182b3a] md:text-4xl">
                      <T>B. Titulares de los datos</T>
                    </h3>

                    <div className="space-y-6">
                      <p>
                        <strong>
                          <T>B.1. Alcance subjetivo.</T>
                        </strong>{" "}
                        <T>
                          Aplica a toda persona física cuyos datos sean tratados
                          por NOMARI.
                        </T>
                      </p>

                      <p>
                        <strong>
                          <T>B.2. Colectivos incluidos (enunciativo).</T>
                        </strong>{" "}
                        <T>
                          Clientes, prospectos, visitantes del sitio, aliados
                          comerciales (contactos de empresas), proveedores y sus
                          representantes, candidatos a empleo y asistentes a
                          eventos/experiencias.
                        </T>
                      </p>

                      <p>
                        <strong>
                          <T>B.3. Obtención.</T>
                        </strong>{" "}
                        <T>
                          Cualquier persona que proporcione datos mediante
                          formularios web, correo, mensajería, llamadas,
                          contratos, tarjetas, QR, check-in en eventos o
                          comunicación directa se considera Titular.
                        </T>
                      </p>
                    </div>
                  </div>
                </section>

                {/* C */}
                <section className="grid gap-7 py-12 md:grid-cols-[70px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      C
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.02em] text-[#182b3a] md:text-4xl">
                      <T>C. Categorías de datos que podremos recabar</T>
                    </h3>

                    <ul className="grid gap-x-10 gap-y-0 border-t border-[#182b3a]/15 sm:grid-cols-2">
                      <li className="border-b border-[#182b3a]/15 py-5 sm:pr-4">
                        <strong>
                          <T>C.1. Identificación:</T>
                        </strong>{" "}
                        <T>
                          nombre completo, edad/fecha de nacimiento,
                          nacionalidad, género, CURP/RFC (si procede), firma
                          autógrafa/electrónica.
                        </T>
                      </li>

                      <li className="border-b border-[#182b3a]/15 py-5 sm:pl-4">
                        <strong>
                          <T>C.2. Contacto:</T>
                        </strong>{" "}
                        <T>
                          domicilio, correos, teléfonos (incl. WhatsApp
                          laboral/personal).
                        </T>
                      </li>

                      <li className="border-b border-[#182b3a]/15 py-5 sm:pr-4">
                        <strong>
                          <T>C.3. Fiscales/Facturación:</T>
                        </strong>{" "}
                        <T>
                          razón social, RFC, domicilio fiscal, CFDI/uso del
                          CFDI.
                        </T>
                      </li>

                      <li className="border-b border-[#182b3a]/15 py-5 sm:pl-4">
                        <strong>
                          <T>C.4. Preferencias y servicio:</T>
                        </strong>{" "}
                        <T>
                          idioma, número de acompañantes, restricciones
                          alimenticias, accesibilidad, horarios preferidos,
                          comentarios logísticos.
                        </T>
                      </li>

                      <li className="border-b border-[#182b3a]/15 py-5 sm:pr-4">
                        <strong>
                          <T>C.5. Relación proveedor/aliado:</T>
                        </strong>{" "}
                        <T>
                          datos de contacto de representantes,
                          poderes/identificación para firma (cuando resulte
                          necesario).
                        </T>
                      </li>

                      <li className="border-b border-[#182b3a]/15 py-5 sm:pl-4">
                        <strong>
                          <T>C.6. Candidatos:</T>
                        </strong>{" "}
                        <T>
                          CV, historial laboral/formativo, referencias,
                          expectativa económica, disponibilidad.
                        </T>
                      </li>

                      <li className="border-b border-[#182b3a]/15 py-5 sm:pr-4">
                        <strong>
                          <T>C.7. Imagen y voz:</T>
                        </strong>{" "}
                        <T>
                          fotografías, audio y video captados en eventos y
                          experiencias (ver finalidad secundaria).
                        </T>
                      </li>

                      <li className="border-b border-[#182b3a]/15 py-5 sm:pl-4">
                        <strong>
                          <T>
                            C.8. Datos sensibles (casos excepcionales):
                          </T>
                        </strong>{" "}
                        <T>
                          alergias, condiciones médicas relevantes o movilidad
                          cuando sean indispensables para seguridad/adecuación
                          del servicio. Se tratarán con consentimiento expreso y
                          medidas reforzadas. No solicitamos datos de
                          convicciones religiosas, ideología, orientación
                          sexual ni información financiera completa de
                          tarjetas.
                        </T>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* D */}
                <section className="grid gap-7 py-12 md:grid-cols-[70px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      D
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.02em] text-[#182b3a] md:text-4xl">
                      <T>D. Finalidades del tratamiento</T>
                    </h3>

                    <p className="mb-5">
                      <strong>
                        <T>
                          D.1. Finalidades primarias (indispensables para la
                          relación):
                        </T>
                      </strong>
                    </p>

                    <ul className="space-y-3 border-l border-[#b96045]/50 pl-6">
                      <li>
                        <T>
                          Gestionar solicitudes y reservaciones (altas, cambios,
                          confirmaciones).
                        </T>
                      </li>
                      <li>
                        <T>
                          Contratación y operación de servicios (experiencias,
                          tours, fan zones, reservaciones en
                          restaurantes/bares, logística).
                        </T>
                      </li>
                      <li>
                        <T>
                          Cobranza y pagos vía pasarelas seguras; facturación y
                          comprobación contable.
                        </T>
                      </li>
                      <li>
                        <T>
                          Atención al cliente (incidencias, reprogramaciones,
                          cancelaciones y reembolsos conforme a políticas).
                        </T>
                      </li>
                      <li>
                        <T>
                          Cumplimientos legales (fiscales, comerciales,
                          seguridad/sanidad, respuesta a autoridades).
                        </T>
                      </li>
                      <li>
                        <T>
                          Gestión de proveedores/aliados (alta, verificación,
                          administración contractual).
                        </T>
                      </li>
                      <li>
                        <T>Procesos de selección (para candidatos).</T>
                      </li>
                    </ul>

                    <p className="mb-5 mt-10">
                      <strong>
                        <T>D.2. Finalidades secundarias (opcionales):</T>
                      </strong>
                    </p>

                    <ul className="space-y-3 border-l border-[#182b3a]/20 pl-6">
                      <li>
                        <T>
                          Comunicaciones comerciales (promociones, newsletters,
                          encuestas, invitaciones).
                        </T>
                      </li>
                      <li>
                        <T>
                          Análisis y métricas de uso del sitio, preferencias y
                          tendencias para mejorar servicios.
                        </T>
                      </li>
                      <li>
                        <T>
                          Uso de imagen/voz captada en eventos para fines
                          promocionales de NOMARI (sitio, redes, materiales).
                        </T>
                      </li>
                      <li>
                        <T>
                          Perfilamiento básico (p. ej., segmentos por destino
                          preferido o franja horaria) sin decisiones
                          automatizadas que produzcan efectos legales.
                        </T>
                      </li>
                    </ul>

                    <p className="mt-9 border-y border-[#b96045]/30 py-6 font-serif text-xl leading-relaxed text-[#182b3a]">
                      <T>
                        Puedes optar por no recibir comunicaciones promocionales
                        o negar las finalidades secundarias escribiendo a
                        contacto@nomari.com.mx. La negativa no afecta la
                        prestación de los servicios primarios.
                      </T>
                    </p>
                  </div>
                </section>

                {/* E */}
                <section className="grid gap-7 py-12 md:grid-cols-[70px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      E
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.02em] text-[#182b3a] md:text-4xl">
                      <T>E. Base de licitud</T>
                    </h3>

                    <p>
                      <T>
                        Tratamos datos conforme a la LFPDPPP bajo: (i)
                        consentimiento; (ii) ejecución de contrato/relación
                        jurídica; (iii) cumplimiento legal; (iv) interés
                        legítimo (p. ej. seguridad del sitio, métricas de mejora,
                        prevención de fraude), sin menoscabar tus derechos. Los
                        datos sensibles se tratan únicamente con consentimiento
                        expreso y cuando sean estrictamente necesarios.
                      </T>
                    </p>
                  </div>
                </section>

                {/* F */}
                <section className="grid gap-7 py-12 md:grid-cols-[70px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      F
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.02em] text-[#182b3a] md:text-4xl">
                      <T>F. Transferencias y destinatarios</T>
                    </h3>

                    <p className="mb-5">
                      <strong>
                        <T>
                          F.1. Nacionales/internacionales (cuando apliquen):
                        </T>
                      </strong>
                    </p>

                    <ul className="space-y-3 border-l border-[#b96045]/50 pl-6">
                      <li>
                        <T>
                          Proveedores de servicios necesarios para operar
                          (pasarelas de pago, hosting, CRM, email, mensajería,
                          verificación de identidad, venues,
                          restaurantes/bares, guías, transportistas, fotógrafos,
                          productoras).
                        </T>
                      </li>
                      <li>
                        <T>
                          Aliados/comerciales para co-ejecución del servicio
                          contratado o administración.
                        </T>
                      </li>
                      <li>
                        <T>
                          Autoridades administrativas o judiciales, cuando
                          exista requerimiento u obligación.
                        </T>
                      </li>
                      <li>
                        <T>
                          Auditores/asesores (legales, contables, fiscales) bajo
                          deber de confidencialidad.
                        </T>
                      </li>
                    </ul>

                    <div className="mt-8 space-y-6">
                      <p>
                        <strong>
                          <T>F.2. Encargados.</T>
                        </strong>{" "}
                        <T>
                          Algunos terceros actúan como encargados (procesan por
                          cuenta del Responsable) bajo contratos con cláusulas
                          de confidencialidad y seguridad.
                        </T>
                      </p>

                      <p>
                        <strong>
                          <T>F.3. No comercialización.</T>
                        </strong>{" "}
                        <T>
                          No vendemos tus datos. Fuera de estos supuestos,
                          cualquier transferencia requerirá tu consentimiento
                          expreso.
                        </T>
                      </p>
                    </div>
                  </div>
                </section>

                {/* G */}
                <section className="grid gap-7 py-12 md:grid-cols-[70px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      G
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.02em] text-[#182b3a] md:text-4xl">
                      <T>G. Medidas de seguridad</T>
                    </h3>

                    <ul className="grid gap-px overflow-hidden border border-[#182b3a]/15 bg-[#182b3a]/15 md:grid-cols-2">
                      <li className="bg-[#f2efe8] p-6">
                        <strong>
                          <T>G.1.</T>
                        </strong>{" "}
                        <T>
                          Controles administrativos, técnicos y físicos
                          proporcionales al riesgo: control de accesos,
                          principio de mínima necesidad, registros,
                          entrenamiento, acuerdos de confidencialidad.
                        </T>
                      </li>

                      <li className="bg-[#f2efe8] p-6">
                        <strong>
                          <T>G.2.</T>
                        </strong>{" "}
                        <T>
                          Seguridad tecnológica: cifrado TLS/SSL, segmentación
                          de redes, hash de contraseñas, registros de acceso,
                          pasarelas certificadas (p. ej., PCI DSS), monitoreo
                          antifraude.
                        </T>
                      </li>

                      <li className="bg-[#f2efe8] p-6">
                        <strong>
                          <T>G.3.</T>
                        </strong>{" "}
                        <T>
                          Gestión de incidentes: procedimiento interno de
                          respuesta a brechas; notificación a titulares y
                          autoridades cuando legalmente proceda.
                        </T>
                      </li>

                      <li className="bg-[#f2efe8] p-6">
                        <strong>
                          <T>G.4.</T>
                        </strong>{" "}
                        <T>
                          Aun con medidas reforzadas, ningún sistema es
                          invulnerable; se limita la responsabilidad conforme a
                          ley y T&C.
                        </T>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* H */}
                <section className="grid gap-7 py-12 md:grid-cols-[70px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      H
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.02em] text-[#182b3a] md:text-4xl">
                      <T>H. Conservación (retención) de datos</T>
                    </h3>

                    <ul className="space-y-6">
                      <li>
                        <strong>
                          <T>H.1.</T>
                        </strong>{" "}
                        <T>
                          Conservamos datos solo el tiempo necesario para
                          finalidades declaradas y plazos legales (fiscales,
                          comerciales, prescripción).
                        </T>
                      </li>
                      <li>
                        <strong>
                          <T>H.2.</T>
                        </strong>{" "}
                        <T>
                          Cumplidas finalidades/plazos, procedemos a supresión,
                          bloqueo o anonimización segura.
                        </T>
                      </li>
                      <li>
                        <strong>
                          <T>H.3.</T>
                        </strong>{" "}
                        <T>
                          Criterios: tipo de dato, riesgo, obligaciones
                          regulatorias, defensa de derechos y necesidades
                          operativas.
                        </T>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* I */}
                <section className="grid gap-7 py-12 md:grid-cols-[70px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      I
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 max-w-4xl font-serif text-3xl leading-tight tracking-[-0.02em] text-[#182b3a] md:text-4xl">
                      <T>
                        I. Derechos ARCO, limitación de uso y revocación del
                        consentimiento
                      </T>
                    </h3>

                    <div className="space-y-6">
                      <p>
                        <strong>
                          <T>I.1. Ejercicio ARCO.</T>
                        </strong>{" "}
                        <T>
                          Envía solicitud a contacto@nomari.com.mx con: Nombre
                          completo y copia de identificación; descripción de los
                          derechos a ejercer
                          (acceso/rectificación/cancelación/oposición);
                          datos/periodo a localizar; medio para notificar
                          respuesta.
                        </T>
                      </p>

                      <p>
                        <strong>
                          <T>I.2. Plazos.</T>
                        </strong>{" "}
                        <T>
                          Responderemos en máximo 20 días hábiles; de ser
                          procedente, ejecutaremos en 15 días hábiles
                          siguientes.
                        </T>
                      </p>

                      <p>
                        <strong>
                          <T>I.3. Prevención.</T>
                        </strong>{" "}
                        <T>
                          Si faltara información, te requeriremos en 5 días
                          hábiles; tendrás 10 días hábiles para completar.
                        </T>
                      </p>

                      <p>
                        <strong>
                          <T>I.4. Limitación de uso/divulgación.</T>
                        </strong>{" "}
                        <T>
                          Puedes solicitar inscripción/actualización en nuestros
                          listados de no contacto (opt-out marketing).
                        </T>
                      </p>

                      <p>
                        <strong>
                          <T>I.5. Revocación.</T>
                        </strong>{" "}
                        <T>
                          Puedes revocar tu consentimiento para finalidades no
                          indispensables; en finalidades primarias, la
                          revocación puede imposibilitar la
                          prestación/continuidad del servicio.
                        </T>
                      </p>

                      <p>
                        <strong>
                          <T>I.6. Medios alternos.</T>
                        </strong>{" "}
                        <T>
                          También puedes ejercer derechos a través de
                          representante legal con poderes suficientes.
                        </T>
                      </p>
                    </div>
                  </div>
                </section>

                {/* J */}
                <section className="grid gap-7 py-12 md:grid-cols-[70px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      J
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.02em] text-[#182b3a] md:text-4xl">
                      <T>J. Menores y personas con capacidad limitada</T>
                    </h3>

                    <ul className="space-y-6">
                      <li>
                        <strong>
                          <T>J.1.</T>
                        </strong>{" "}
                        <T>
                          No recabamos intencionalmente datos de menores de 18
                          años sin consentimiento de madre/padre/tutor.
                        </T>
                      </li>
                      <li>
                        <strong>
                          <T>J.2.</T>
                        </strong>{" "}
                        <T>
                          Si detectamos registro sin autorización, procederemos
                          a supresión.
                        </T>
                      </li>
                      <li>
                        <strong>
                          <T>J.3.</T>
                        </strong>{" "}
                        <T>
                          Para accesos a experiencias con restricción de edad
                          (p. ej., alcohol), se podrá solicitar identificación.
                        </T>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* K */}
                <section className="grid gap-7 py-12 md:grid-cols-[70px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      K
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.02em] text-[#182b3a] md:text-4xl">
                      <T>K. Cookies, web beacons y tecnologías similares</T>
                    </h3>

                    <div className="space-y-6">
                      <p>
                        <strong>
                          <T>K.1. Finalidad.</T>
                        </strong>{" "}
                        <T>
                          Usamos cookies y tecnologías afines para: (i) recordar
                          sesión/preferencias (idioma, zona horaria), (ii)
                          analítica de uso y desempeño del sitio, (iii)
                          seguridad y prevención de fraude, (iv) eventualmente
                          publicidad y retargeting.
                        </T>
                      </p>

                      <div>
                        <p className="mb-5">
                          <strong>
                            <T>K.2. Tipos.</T>
                          </strong>
                        </p>

                        <ul className="grid gap-x-10 border-t border-[#182b3a]/15 sm:grid-cols-2">
                          <li className="border-b border-[#182b3a]/15 py-4 sm:pr-4">
                            <T>
                              Esenciales: funcionamiento del sitio/checkout.
                            </T>
                          </li>
                          <li className="border-b border-[#182b3a]/15 py-4 sm:pl-4">
                            <T>
                              De desempeño/analítica: métricas y mejoras (p.
                              ej., páginas visitadas, tiempo de sesión).
                            </T>
                          </li>
                          <li className="border-b border-[#182b3a]/15 py-4 sm:pr-4">
                            <T>Funcionales: recordar opciones del usuario.</T>
                          </li>
                          <li className="border-b border-[#182b3a]/15 py-4 sm:pl-4">
                            <T>
                              Publicidad: mostrar anuncios relevantes (si se
                              habilitan).
                            </T>
                          </li>
                        </ul>
                      </div>

                      <p>
                        <strong>
                          <T>K.3. Gestión.</T>
                        </strong>{" "}
                        <T>
                          Puedes deshabilitarlas en tu navegador o configurar
                          preferencias; desactivar cookies esenciales puede
                          afectar el funcionamiento.
                        </T>
                      </p>

                      <p>
                        <strong>
                          <T>K.4. Señales “Do Not Track”.</T>
                        </strong>{" "}
                        <T>
                          Si tu navegador envía DNT, haremos esfuerzos razonables
                          para respetar dicha preferencia conforme a nuestras
                          capacidades técnicas.
                        </T>
                      </p>

                      <p>
                        <strong>
                          <T>K.5. Terceros.</T>
                        </strong>{" "}
                        <T>
                          Herramientas analíticas/ads de terceros (si se usan)
                          operan con sus propias políticas; te sugerimos
                          revisarlas.
                        </T>
                      </p>
                    </div>
                  </div>
                </section>

                {/* L */}
                <section className="grid gap-7 py-12 md:grid-cols-[70px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      L
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.02em] text-[#182b3a] md:text-4xl">
                      <T>L. Decisiones automatizadas y perfilamiento</T>
                    </h3>

                    <ul className="space-y-6">
                      <li>
                        <strong>
                          <T>L.1.</T>
                        </strong>{" "}
                        <T>
                          No adoptamos decisiones automatizadas que produzcan
                          efectos legales significativos.
                        </T>
                      </li>
                      <li>
                        <strong>
                          <T>L.2.</T>
                        </strong>{" "}
                        <T>
                          Podemos realizar perfilamiento básico (segmentos por
                          destino/horarios/frecuencia) para mejorar
                          comunicaciones; puedes oponerte vía ARCO.
                        </T>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* M */}
                <section className="grid gap-7 py-12 md:grid-cols-[70px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      M
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.02em] text-[#182b3a] md:text-4xl">
                      <T>M. Uso de imagen en eventos/experiencias</T>
                    </h3>

                    <ul className="space-y-6">
                      <li>
                        <strong>
                          <T>M.1.</T>
                        </strong>{" "}
                        <T>
                          En actividades organizadas por NOMARI podremos
                          registrar foto/video/voz para documentación y
                          promoción.
                        </T>
                      </li>
                      <li>
                        <strong>
                          <T>M.2.</T>
                        </strong>{" "}
                        <T>
                          Antes de la captura con fines promocionales
                          procuraremos señalización o cláusula visible; podrás
                          manifestar oposición razonable cuando sea viable sin
                          afectar la operación/seguridad.
                        </T>
                      </li>
                      <li>
                        <strong>
                          <T>M.3.</T>
                        </strong>{" "}
                        <T>
                          Cuando se trate de menores, requerimos consentimiento
                          del tutor.
                        </T>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* N */}
                <section className="grid gap-7 py-12 md:grid-cols-[70px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      N
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.02em] text-[#182b3a] md:text-4xl">
                      <T>N. Transferencias internacionales y hosting</T>
                    </h3>

                    <ul className="space-y-6">
                      <li>
                        <strong>
                          <T>N.1.</T>
                        </strong>{" "}
                        <T>
                          Algunos proveedores tecnológicos pueden hospedar o
                          procesar datos fuera de México bajo cláusulas
                          contractuales y salvaguardas adecuadas.
                        </T>
                      </li>
                      <li>
                        <strong>
                          <T>N.2.</T>
                        </strong>{" "}
                        <T>
                          Adoptamos medidas para asegurar que dichos terceros
                          mantengan estándares de seguridad y confidencialidad
                          equivalentes.
                        </T>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* O */}
                <section className="grid gap-7 py-12 md:grid-cols-[70px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      O
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.02em] text-[#182b3a] md:text-4xl">
                      <T>O. Quejas y medios de defensa</T>
                    </h3>

                    <ul className="space-y-6">
                      <li>
                        <strong>
                          <T>O.1.</T>
                        </strong>{" "}
                        <T>
                          Si consideras que tu derecho a la protección de datos
                          ha sido vulnerado, puedes acudir ante NOMARI
                          (contacto@nomari.com.mx).
                        </T>
                      </li>
                      <li>
                        <strong>
                          <T>O.2.</T>
                        </strong>{" "}
                        <T>
                          También puedes presentar una queja ante el INAI
                          conforme a los plazos y procedimientos legales.
                        </T>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* P */}
                <section className="grid gap-7 py-12 md:grid-cols-[70px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      P
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.02em] text-[#182b3a] md:text-4xl">
                      <T>P. Modificaciones al Aviso</T>
                    </h3>

                    <ul className="space-y-6">
                      <li>
                        <strong>
                          <T>P.1.</T>
                        </strong>{" "}
                        <T>
                          Podremos modificar este Aviso por cambios legales,
                          regulatorios, contractuales, tecnológicos u
                          operativos.
                        </T>
                      </li>
                      <li>
                        <strong>
                          <T>P.2.</T>
                        </strong>{" "}
                        <T>
                          La versión vigente estará disponible en nomari.com.mx
                          y entrará en vigor desde su publicación. Recomendamos
                          revisarlo periódicamente.
                        </T>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Q */}
                <section className="grid gap-7 py-12 md:grid-cols-[70px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">
                      Q
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-8 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.02em] text-[#182b3a] md:text-4xl">
                      <T>Q. Aceptación</T>
                    </h3>

                    <ul className="space-y-6">
                      <li>
                        <strong>
                          <T>Q.1.</T>
                        </strong>{" "}
                        <T>
                          Al proporcionar datos, navegar en el sitio, enviar
                          formularios, contratar o asistir a
                          eventos/experiencias, declaras que leíste y aceptas
                          este Aviso.
                        </T>
                      </li>
                      <li>
                        <strong>
                          <T>Q.2.</T>
                        </strong>{" "}
                        <T>
                          Para finalidades secundarias y/o datos sensibles,
                          recabaremos tu consentimiento expreso.
                        </T>
                      </li>
                    </ul>

                    <div className="mt-14 grid border-y border-[#182b3a]/20 py-8 sm:grid-cols-2">
                      <div className="pb-6 sm:border-r sm:border-[#182b3a]/15 sm:pb-0 sm:pr-8">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#b96045]">
                          Nomari
                        </span>
                        <p className="mt-3 font-serif text-2xl text-[#182b3a]">
                          Curaduría de experiencias personalizadas.
                        </p>
                      </div>

                      <div className="border-t border-[#182b3a]/15 pt-6 sm:border-t-0 sm:pl-8 sm:pt-0">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/45">
                          Contacto
                        </span>
                        <p className="mt-3 break-all text-sm text-[#182b3a]/70">
                          contacto@nomari.com.mx
                        </p>
                        <p className="mt-1 text-sm text-[#182b3a]/70">
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