// src/lib/seo.ts
// SEO utilities — JSON-LD schema generators + meta helpers

import { BRAND } from "./constants";

// ─── META HELPER ─────────────────────────────────────────────────

export interface PageMeta {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

export function buildMeta(meta: PageMeta) {
  const url = meta.canonical || BRAND.url;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: BRAND.name,
      locale: "nl_BE",
      type: "website",
      images: meta.ogImage ? [{ url: meta.ogImage, width: 1200, height: 630 }] : [],
    },
    robots: meta.noindex ? { index: false, follow: false } : undefined,
  };
}

// ─── JSON-LD SCHEMAS ─────────────────────────────────────────────

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${BRAND.url}/#organization`,
    name: BRAND.name,
    description: BRAND.tagline,
    url: BRAND.url,
    telephone: BRAND.phone,
    email: BRAND.email,
    logo: `${BRAND.url}/images/logo-dark.png`,
    image: `${BRAND.url}/images/og-isoprotech.png`,
    hasMap: BRAND.maps,
    sameAs: [
      BRAND.maps,
      "https://www.facebook.com/people/Isoprotech/61587744656837/",
      "https://www.instagram.com/isoprotech.be/",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.address.street,
      addressLocality: BRAND.address.city,
      postalCode: BRAND.address.zip,
      addressCountry: BRAND.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BRAND.geo.lat,
      longitude: BRAND.geo.lng,
    },
    areaServed: [
      { "@type": "City", name: "Antwerpen" },
      { "@type": "City", name: "Mechelen" },
      { "@type": "City", name: "Schoten" },
      { "@type": "City", name: "Mortsel" },
      { "@type": "City", name: "Wilrijk" },
      { "@type": "City", name: "Ekeren" },
      { "@type": "City", name: "Brasschaat" },
      { "@type": "City", name: "Kapellen" },
      { "@type": "City", name: "Edegem" },
      { "@type": "City", name: "Kontich" },
    ],
    priceRange: "€€",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "47",
      bestRating: "5",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BRAND.url}/#organization`,
      name: BRAND.name,
    },
    areaServed: {
      "@type": "City",
      name: "Antwerpen",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.name,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
          },
        },
      ],
    },
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function blogPostSchema(post: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: post.url,
    datePublished: post.datePublished,
    author: {
      "@type": "Organization",
      name: BRAND.name,
    },
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      url: BRAND.url,
    },
    ...(post.image ? { image: post.image } : {}),
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
