// src/app/contact/page.tsx
import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";
import { ContactForm } from "@/components/forms/ContactForm";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Contact — Gratis Inspectie & Offerte",
  description:
    "Neem contact op met ISOPROTECH voor een gratis inspectie en vrijblijvende offerte. Telefoon, WhatsApp, email. Antwerpen en omgeving.",
  alternates: { canonical: `${BRAND.url}/contact` },
  openGraph: {
    title: "Contact — Gratis Inspectie & Offerte",
    description: "Neem contact op met ISOPROTECH voor een gratis inspectie en vrijblijvende offerte. Telefoon, WhatsApp, email. Antwerpen.",
    images: [{ url: `${BRAND.url}/images/og-isoprotech.png`, width: 1080, height: 1080 }],
  },
};

const contactChannels = [
  {
    label: "Telefoon",
    value: BRAND.phoneDisplay,
    href: `tel:${BRAND.phone}`,
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "Stuur een bericht",
    href: BRAND.whatsapp,
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
  {
    label: "Adres",
    value: `${BRAND.address.street}, ${BRAND.address.zip} ${BRAND.address.city}`,
    href: BRAND.maps,
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-800 to-teal-600 py-28">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <span className="mb-4 inline-block rounded-full bg-orange-400/15 border border-orange-400/20 px-5 py-2 text-sm font-semibold text-orange-300">
            Contact
          </span>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl mb-6">
            Neem contact op
          </h1>
          <p className="text-lg text-white/60">
            Vraag een gratis inspectie en vrijblijvende offerte aan. Wij
            reageren binnen 24 uur.
          </p>
        </div>
      </section>

      <div className="container-wide">
        <Breadcrumb items={[{ label: "Contact", href: "/contact" }]} />
      </div>

      <section className="container-wide py-12">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <div>
            <div className="space-y-0 divide-y divide-gray-100">
              {contactChannels.map((ch) => (
                <a
                  key={ch.label}
                  href={ch.href}
                  target={ch.href.startsWith("http") ? "_blank" : undefined}
                  rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-5 py-5 group"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-400/10 text-orange-400 group-hover:bg-orange-400/15 transition-colors">
                    {ch.icon}
                  </span>
                  <div>
                    <span className="block text-xs text-gray-500">
                      {ch.label}
                    </span>
                    <span className="font-bold text-teal-800 group-hover:text-orange-400 transition-colors">
                      {ch.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-white border border-gray-100 p-6 shadow-sm">
              <h3 className="font-bold text-teal-800 mb-3">Openingstijden</h3>
              <dl className="text-sm text-gray-600 space-y-1">
                <div className="flex justify-between">
                  <dt>Maandag – Vrijdag</dt>
                  <dd className="font-semibold text-teal-800">{BRAND.hours.weekdays}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Zaterdag</dt>
                  <dd className="font-semibold text-teal-800">{BRAND.hours.saturday}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Zondag</dt>
                  <dd className="font-semibold text-teal-800">{BRAND.hours.sunday}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
