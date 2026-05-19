// src/app/layout.tsx
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { BRAND } from "@/lib/constants";
import { localBusinessSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import "@/styles/globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: "ISOPROTECH — Dak- en Gevelisolatie Antwerpen",
    template: "%s | ISOPROTECH",
  },
  description: BRAND.tagline + " Dakisolatie, gevelisolatie, crepi, spuitkurk en asbestverwijdering in Antwerpen en omgeving. Gratis inspectie, 10 jaar garantie.",
  keywords: ["gevelisolatie antwerpen", "dakisolatie antwerpen", "crepi antwerpen", "dakrenovatie", "asbestverwijdering", "isoprotech"],
  authors: [{ name: BRAND.name }],
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "nl_BE",
    siteName: BRAND.name,
    images: [{ url: "/images/og-isoprotech.png", width: 1080, height: 1080 }],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: BRAND.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={outfit.variable}>
      <head>
        {/* GTM — replace GTM-XXXX with your real container ID */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P37SR8T8');
            `,
          }}
        />
        <JsonLd data={localBusinessSchema()} />
      </head>
      <body className="font-sans bg-stone-50 text-gray-700 antialiased">
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P37SR8T8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Skip to content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-orange-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Ga naar inhoud
        </a>

        {/* Navbar will be imported as a component */}
        <Navbar />

        <main id="main-content">{children}</main>

        {/* Footer will be imported as a component */}
        <Footer />

        <CookieBanner />

        {/* Floating WhatsApp CTA */}
        <a
          href={BRAND.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Stuur een WhatsApp-bericht"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500 shadow-lg shadow-green-500/30 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2"
        >
          <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.1-1.13l-.29-.174-3.01.79.8-2.93-.19-.3A7.96 7.96 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
