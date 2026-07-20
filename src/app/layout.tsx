import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";  // ✅ Funciona porque están en la misma carpeta

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://www.claro-red.app"); // ⚠️ Asegúrate que esta sea tu URL real

// ✅ CORREGIDO: La imagen debe tener URL absoluta
const OG_IMAGE = {
  url: `${SITE_URL}/claro-banner.jpg`, // URL absoluta
  secureUrl: `${SITE_URL}/claro-banner.jpg`, // URL absoluta
  width: 1280,
  height: 720,
  alt: "Claro Web - Descarga Mi Claro App",
  type: "image/jpeg",
};

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
        url: `${SITE_URL}/claro-banner.jpg`, // ✅ URL absoluta
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
    images: [`${SITE_URL}/claro-banner.jpg`], // ✅ URL absoluta
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
        {children}  {/* ✅ CORREGIDO: solo {children} sin el > */}
      </body>
    </html>
  );
}