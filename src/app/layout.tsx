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

const SITE_URL = "https://www.claro-red.app";

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
    siteName: "Claro Web",
    images: [
      {
        url: new URL("/opengraph-image", SITE_URL).toString(),
        width: 1200,
        height: 630,
        alt: "Claro Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claro Web | Actualiza tu app",
    description:
      "Actualiza y gestiona tu app Mi Claro: descarga la última versión y mantén tus servicios siempre al día.",
    images: [new URL("/opengraph-image", SITE_URL).toString()],
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
