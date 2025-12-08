import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL("https://carlinsmartinez.com"),
  title: {
    default: "Carla Martínez | Dietista Nutricionista en Barcelona",
    template: "%s | Carla Martínez Nutricionista",
  },
  description:
    "Dietista Nutricionista colegiada en Barcelona. Especialista en nutrición deportiva, vegetariana, embarazo y alimentación infantil. Consultas online y presenciales.",
  keywords: [
    "dietista Barcelona",
    "nutricionista Barcelona",
    "nutrición deportiva",
    "nutricionista deportivo",
    "alimentación vegetariana",
    "nutrición vegana",
    "nutrición embarazo",
    "alimentación infantil",
    "consulta nutricionista online",
    "dietista colegiada",
    "Carla Martínez nutricionista",
    "antropometría deportiva",
  ],
  authors: [{ name: "Carla Martínez Arribas" }],
  creator: "Carla Martínez Arribas",
  publisher: "Carla Martínez Arribas",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://carlinsmartinez.com",
    siteName: "Carla Martínez Nutricionista",
    title: "Carla Martínez | Dietista Nutricionista en Barcelona",
    description:
      "Dietista Nutricionista colegiada. Especialista en nutrición deportiva, vegetariana, embarazo y alimentación infantil. Consultas online y presenciales.",
    images: [
      {
        url: "/images/fotoperfil.jpg",
        width: 800,
        height: 600,
        alt: "Carla Martínez - Dietista Nutricionista",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carla Martínez | Dietista Nutricionista en Barcelona",
    description:
      "Dietista Nutricionista colegiada. Especialista en nutrición deportiva, vegetariana, embarazo y alimentación infantil.",
    images: ["/images/fotoperfil.jpg"],
  },
  verification: {
    google: "tu-codigo-de-verificacion-google", // Reemplazar con el código real
  },
  alternates: {
    canonical: "https://carlinsmartinez.com",
  },
  category: "health",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#566441" />
        <meta name="geo.region" content="ES-CT" />
        <meta name="geo.placename" content="Barcelona" />
      </head>
      <body className="min-h-screen bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://carlinsmartinez.com",
              name: "Carla Martínez - Dietista Nutricionista",
              image: "https://carlinsmartinez.com/images/fotoperfil.jpg",
              description:
                "Dietista Nutricionista colegiada en Barcelona. Especialista en nutrición deportiva, vegetariana, embarazo y alimentación infantil.",
              url: "https://carlinsmartinez.com",
              telephone: "+34636019161",
              email: "carla.martinez@codinucat.cat",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Barcelona",
                addressRegion: "Cataluña",
                addressCountry: "ES",
              },
              priceRange: "€€",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "20:00",
              },
              sameAs: ["https://instagram.com/carlinsmartinez"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Nutrición",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Nutrición Deportiva",
                      description: "Plan nutricional personalizado para deportistas",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Nutrición Vegetariana y Vegana",
                      description: "Asesoramiento para alimentación 100% vegetal",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Nutrición en el Embarazo",
                      description: "Acompañamiento nutricional durante el embarazo",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
