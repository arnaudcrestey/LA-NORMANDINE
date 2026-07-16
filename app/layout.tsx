import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
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

  applicationName: "La Normandine",

  authors: [
    {
      name: "Arnaud Crestey",
      url: "https://www.arnaudcrestey.com",
    },
  ],

  creator: "Arnaud Crestey",
  publisher: "Arnaud Crestey",

  category: "Immobilier",

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

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateListing",
      "@id": `${siteUrl}/#listing`,
      url: siteUrl,
      name: "La Normandine — Propriété à vendre à Viessoix",
      headline: "La Normandine — Une propriété, plusieurs vies possibles",
      description:
        "Propriété en vente directe à Viessoix — Valdallière, comprenant deux maisons, des dépendances et environ deux hectares de terrain arboré.",
      image: `${siteUrl}/opengraph-image.jpg`,
      datePosted: "2026-07-16",
      inLanguage: "fr-FR",
      mainEntity: {
        "@id": `${siteUrl}/#property`,
      },
      offers: {
        "@id": `${siteUrl}/#offer`,
      },
    },
    {
      "@type": "SingleFamilyResidence",
      "@id": `${siteUrl}/#property`,
      name: "La Normandine",
      url: siteUrl,
      description:
        "Propriété de caractère comprenant une maison principale, une seconde maison indépendante, des dépendances et environ deux hectares de terrain arboré.",
      image: `${siteUrl}/opengraph-image.jpg`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Viessoix",
        addressRegion: "Normandie",
        addressCountry: "FR",
      },
      floorSize: {
        "@type": "QuantitativeValue",
        value: 180,
        unitCode: "MTK",
        unitText: "m²",
      },
      numberOfRooms: 2,
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Maison principale",
          value: "Environ 180 m²",
        },
        {
          "@type": "PropertyValue",
          name: "Seconde maison indépendante",
          value: "Environ 60 m²",
        },
        {
          "@type": "PropertyValue",
          name: "Potentiel complémentaire",
          value: "Environ 70 m² sur deux niveaux",
        },
        {
          "@type": "PropertyValue",
          name: "Terrain",
          value: "Environ 2 hectares",
        },
      ],
    },
    {
      "@type": "Offer",
      "@id": `${siteUrl}/#offer`,
      url: siteUrl,
      price: "560000",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      businessFunction: "https://purl.org/goodrelations/v1#Sell",
      itemOffered: {
        "@id": `${siteUrl}/#property`,
      },
      seller: {
        "@type": "Person",
        name: "Arnaud Crestey",
        url: "https://www.arnaudcrestey.com",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "La Normandine",
      description:
        "Site de présentation de La Normandine, propriété à vendre à Viessoix — Valdallière, en Normandie.",
      inLanguage: "fr-FR",
      mainEntity: {
        "@id": `${siteUrl}/#listing`,
      },
    },
  ],
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${serif.variable} ${sans.variable}`}
    >
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
