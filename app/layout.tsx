import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://normandine.arnaudcrestey.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "La Normandine | Propriété à vendre à Viessoix, Normandie",
  description:
    "Découvrez La Normandine, une propriété en vente directe à Viessoix — Valdallière : deux maisons, des dépendances et environ deux hectares de terrain arboré.",
  keywords: [
    "propriété à vendre en Normandie",
    "maison avec terrain à Viessoix",
    "propriété à Valdallière",
    "domaine avec seconde maison",
    "maison avec dépendances",
    "propriété avec deux hectares",
    "vente immobilière directe",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
  type: "website",
  locale: "fr_FR",
  url: "/",
  siteName: "La Normandine",
  title: "La Normandine — Une propriété, plusieurs vies possibles",
  description:
    "Deux maisons, des dépendances et environ deux hectares arborés à Viessoix — Valdallière, en Normandie.",
  images: [
    {
      url: "/opengraph-image.jpg",
      width: 1200,
      height: 630,
      alt: "La Normandine, propriété à vendre en Normandie.",
    },
  ],
},

twitter: {
  card: "summary_large_image",
  title: "La Normandine — Une propriété, plusieurs vies possibles",
  description:
    "Deux maisons, des dépendances et environ deux hectares arborés à Viessoix — Valdallière, en Normandie.",
  images: ["/opengraph-image.jpg"],
},

icons: {
  icon: "/icons/icon.png",
  apple: "/icons/apple-icon.png",
},
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#24372D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${serif.variable} ${sans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
