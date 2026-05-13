// src/app/regio/page.tsx
// Hub page for all service regions — fixes 404 breadcrumb link from city pages

import type { Metadata } from "next";
import Link from "next/link";
import { cities } from "@/content/cities";
import { BRAND } from "@/lib/constants";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Werkgebied — Antwerpen en omgeving",
  description:
    "ISOPROTECH voert dak- en gevelisolatie uit in heel Antwerpen en omgeving: Mechelen, Mortsel, Edegem, Boom, Schoten en tientallen andere gemeenten. Bekijk uw gemeente.",
  alternates: { canonical: `${BRAND.url}/regio` },
};

export default function RegioPage() {
  const provinces = [...new Set(cities.map((c) => c.province))];

  return (
    <>
      <section className="bg-gradient-to-br from-teal-800 to-teal-950 py-24">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <span className="mb-4 inline-block rounded-full bg-orange-500/15 border border-orange-500/20 px-5 py-2 text-sm font-semibold text-orange-300">
            Werkgebied
          </span>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl mb-6">
            Actief in Antwerpen en omgeving
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            ISOPROTECH voert dak- en gevelisolatie uit in {cities.length}+ gemeenten
            in de regio Antwerpen. Selecteer uw gemeente voor lokale informatie,
            premies en referentieprojecten.
          </p>
        </div>
      </section>

      <div className="container-wide">
        <Breadcrumb items={[{ label: "Werkgebied", href: "/regio" }]} />
      </div>

      <section className="container-wide py-16">
        {provinces.map((province) => {
          const provinceCities = cities.filter((c) => c.province === province);
          return (
            <div key={province} className="mb-12">
              <h2 className="text-xl font-extrabold text-teal-800 mb-6 pb-3 border-b border-gray-100">
                {province}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {provinceCities.map((city) => (
                  <Link
                    key={city.id}
                    href={`/regio/${city.slug}`}
                    className="group flex items-start justify-between rounded-xl bg-white border border-gray-100 px-5 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md"
                  >
                    <div>
                      <p className="font-bold text-teal-800 group-hover:text-orange-500 transition-colors">
                        {city.name}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">{city.zip}</p>
                    </div>
                    <svg
                      className="h-4 w-4 mt-1 text-orange-400 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="bg-teal-900 py-16">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-4">
            Uw gemeente niet in de lijst?
          </h2>
          <p className="text-white/60 mb-8">
            Wij werken in heel de regio Antwerpen en omstreken. Neem contact op
            — wij laten u weten of wij bij u kunnen langskomen.
          </p>
          <a href={`tel:${BRAND.phone}`} className="btn-primary">
            Bel ons: {BRAND.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
