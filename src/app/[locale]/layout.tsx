import "../globals.css";
import { ClientBody } from "@/app/ClientBody";
import { ReactNode } from "react";
import type { Metadata } from "next";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: "Nomari - Curaduría de Experiencias Personalizadas",
  description:
    "Diseñamos itinerarios personalizados y experiencias de primer nivel. Explora destinos extraordinarios con el respaldo, cuidado y exclusividad de Nomari.",
};

export default async function RootLayout({
  children,
  params,
}: Props) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  return (
    <html lang={locale}>
      <ClientBody locale={locale}>{children}</ClientBody>
    </html>
  );
}