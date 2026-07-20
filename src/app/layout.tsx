import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ URL ABSOLUTA Y FIJA - Cambia esto por tu URL real
const SITE_URL = "https://www.descarga-5g.online";

export const metadata: Metadata = {
  title: "Claro Web | Actualiza tu app",
  description:
    "Actualiza y gestiona tu app Mi Claro: descarga la última versión y mantén tus servicios siempre al día.",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [{ url: "/logo-claro-rojo.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/logo-claro-rojo.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo-claro-rojo.svg", type: "image/svg+xml" }],
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Claro Web | Actualiza tu app",
    description:
      "Actualiza y gestiona tu app Mi Claro: descarga la última versión y mantén tus servicios siempre al día.",
    url: SITE_URL,
    type: "website",
    locale: "es",
    siteName: "Claro Web",
    images: [
      {
        // ✅ URL ABSOLUTA Y COMPLETA
        url: `${SITE_URL}/claro-banner.jpg`,
        secureUrl: `${SITE_URL}/claro-banner.jpg`,
        width: 1280,
        height: 720,
        alt: "Claro Web - Descarga Mi Claro App",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claro Web | Actualiza tu app",
    description:
      "Actualiza y gestiona tu app Mi Claro: descarga la última versión y mantén tus servicios siempre al día.",
    // ✅ URL ABSOLUTA Y COMPLETA
    images: [`${SITE_URL}/claro-banner.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}