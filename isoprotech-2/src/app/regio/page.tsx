import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { cities } from "@/content/cities";

export const metadata: Metadata = {
  title: "Werkgebied — Dak- & Gevelisolatie Regio Antwerpen",
  description: "ISOPROTECH voert dak- en gevelisolatie uit in de regio Antwerpen: Wilrijk, Mortsel, Mechelen, Schoten, Brasschaat, Ekeren en meer. Gratis inspectie.",
  openGraph: {
    title: "Werkgebied — Dak- \& Gevelisolatie Regio Antwerpen",
    description: "ISOPROTECH voert dak- en gevelisolatie uit in de regio Antwerpen: Wilrijk, Mortsel, Mechelen, Schoten, Brasschaat, Ekeren en meer. Gratis inspectie.",
  },
  alternates: { canonical: `${BRAND.url}/regio` },
};

export default function RegioOverview() {
  return (
    <>
      <section className="section-padding bg-stone-50">
        <div className="container-wide max-w-4xl mx-auto">
          <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">Werkgebied</span>
          <h1 className="mt-2 text-3xl font-extrabold text-teal-800 mb-4">
            Isolatie in Antwerpen en omgeving
          </h1>
          <p className="text-gray-600 mb-10 max-w-2xl">
            ISOPROTECH voert dak- en gevelisolatie uit in de volledige regio Antwerpen.
            Gratis inspectie ter plaatse — wij komen naar u toe.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {cities.map((city) => (
              <Link
                key={city.id}
                href={`/regio/${city.slug}`}
                className="group flex items-center justify-between rounded-xl border border-gray-100 bg-white p-5 shadow-sm hover:border-orange-200 hover:shadow-md transition-all"
              >
                <div>
                  <div className="font-bold text-teal-800 group-hover:text-orange-500 transition-colors">
                    {city.name}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">{city.zip} {city.province}</div>
                </div>
                <svg className="h-5 w-5 text-gray-300 group-hover:text-orange-400 transition-colors shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-teal-800 text-white p-8 text-center">
            <h2 className="text-xl font-extrabold mb-2">Uw gemeente staat er niet bij?</h2>
            <p className="text-white/70 mb-5">
              Wij werken ook in andere gemeenten in de provincie Antwerpen. Neem contact op voor meer info.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/contact" className="btn-primary px-6 py-3">Gratis inspectie aanvragen</a>
              <a href={`tel:${BRAND.phone}`} className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors">
                {BRAND.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
