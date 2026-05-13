// src/app/layout.tsx
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { BRAND } from "@/lib/constants";
import { localBusinessSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/TrackingButtons";
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
    images: [{ url: "/images/og-isoprotech.png", width: 1200, height: 630 }],
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
              })(window,document,'script','dataLayer','GTM-XXXX');
            `,
          }}
        />
        <JsonLd data={localBusinessSchema()} />
      </head>
      <body className="font-sans bg-stone-50 text-gray-700 antialiased">
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXX"
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

        {/* Floating WhatsApp CTA — tracked */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
