import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Plat Dak Isoleren Antwerpen — Dakisolatie met PIR",
  description:
    "Plat dak isoleren in Antwerpen en omgeving. Advies over PIR-isolatie en de geschikte dakopbouw voor uw woning. Gratis inspectie en vrijblijvende offerte.",
  keywords: [
    "plat dak isoleren",
    "plat dak isolatie",
    "plat dak isoleren antwerpen",
    "PIR dakisolatie",
    "dakisolatie plat dak",
    "plat dak isolatie buitenzijde",
  ],
  alternates: { canonical: `${BRAND.url}/dakisolatie/plat-dak` },
  openGraph: {
    title: "Plat Dak Isoleren Antwerpen — Dakisolatie met PIR",
    description:
      "Plat dak isoleren in Antwerpen en omgeving. Gratis inspectie en advies op maat voor uw dak.",
    url: `${BRAND.url}/dakisolatie/plat-dak`,
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hoe wordt een plat dak geïsoleerd?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "De geschikte methode hangt af van de bestaande dakopbouw, de staat van het dak en de beschikbare hoogte. ISOPROTECH inspecteert het dak eerst en adviseert daarna een passende oplossing, onder andere met PIR-isolatie.",
      },
    },
    {
      "@type": "Question",
      name: "Kan platdakisolatie helpen tegen warmteverlies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dakisolatie beperkt warmte-uitwisseling via het dak. Dat kan het comfort verbeteren in de winter en helpt ook om de bovenste verdieping in de zomer minder snel op te warmen. Het resultaat hangt af van de volledige woningopbouw.",
      },
    },
    {
      "@type": "Question",
      name: "Wat bepaalt de prijs van platdakisolatie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "De prijs hangt onder meer af van het dakoppervlak, de bestaande dakopbouw, de gekozen isolatie, de bereikbaarheid en eventueel bijkomend herstelwerk. Na inspectie ontvangt u een offerte op maat.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Plat dak isoleren",
  description:
    "Dakisolatie voor platte daken in Antwerpen en omgeving, met advies op maat en PIR als mogelijke isolatieoplossing.",
  provider: {
    "@type": "LocalBusiness",
    name: BRAND.name,
    url: BRAND.url,
    telephone: BRAND.phone,
  },
  url: `${BRAND.url}/dakisolatie/plat-dak`,
};

export default function PlatDakPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />

      <section className="bg-teal-800 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-400">Dakisolatie · Plat dak</p>
          <h1 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">Plat dak isoleren in Antwerpen</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Een plat dak vraagt een isolatie-oplossing die past bij de bestaande dakopbouw. ISOPROTECH inspecteert uw dak, bespreekt de mogelijkheden en voert de gekozen oplossing vakkundig uit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#offerte" className="rounded-xl bg-orange-400 px-6 py-3 font-bold text-white hover:bg-orange-500">Gratis inspectie aanvragen</a>
            <Link href="/diensten/dakisolatie" className="rounded-xl border border-white/35 px-6 py-3 font-bold text-white hover:bg-white/10">Alle dakisolatie</Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        <Breadcrumb items={[{ label: "Dakisolatie", href: "/diensten/dakisolatie" }, { label: "Plat dak isoleren", href: "/dakisolatie/plat-dak" }]} />
      </div>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-teal-800">Wanneer is platdakisolatie relevant?</h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              Platdakisolatie is vooral relevant wanneer het dak weinig of verouderde isolatie heeft, wanneer de bovenste verdieping snel afkoelt of opwarmt, of wanneer u een dakrenovatie plant en de isolatie meteen wilt verbeteren.
            </p>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li>• Bovenste verdieping voelt in de winter duidelijk kouder aan.</li>
              <li>• Zolder of slaapkamers onder het dak worden in de zomer snel warm.</li>
              <li>• U renoveert de dakbedekking en wilt isolatie combineren met de dakwerken.</li>
              <li>• U wilt de energieprestatie van de woning stap voor stap verbeteren.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-stone-50 p-7">
            <h2 className="text-2xl font-extrabold text-teal-800">Onze aanpak</h2>
            <ol className="mt-6 space-y-5 text-gray-600">
              <li><strong className="text-teal-800">1. Inspectie.</strong> We beoordelen de bestaande dakopbouw en zichtbare aandachtspunten.</li>
              <li><strong className="text-teal-800">2. Advies.</strong> We bepalen welke isolatiemethode technisch en praktisch past.</li>
              <li><strong className="text-teal-800">3. Offerte.</strong> U ontvangt een duidelijke offerte op basis van de werkelijke situatie.</li>
              <li><strong className="text-teal-800">4. Uitvoering.</strong> De werken worden uitgevoerd door onze ploeg met kwaliteitscontrole tijdens de werkzaamheden.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-extrabold text-teal-800">PIR-isolatie voor een plat dak</h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-gray-600">
            PIR is een van de isolatiematerialen die ISOPROTECH gebruikt voor dakisolatie. De juiste dikte en opbouw worden per project bepaald. We publiceren daarom geen standaard technische opbouw of vaste isolatiedikte alsof die voor elk dak hetzelfde is.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Dakopbouw", "De bestaande constructie bepaalt welke oplossing technisch geschikt is."],
              ["Bereikbaarheid", "Dakhoogte, randen, doorvoeren en bereikbaarheid beïnvloeden de uitvoering."],
              ["Combinatie met renovatie", "Bij geplande dakwerken kan isolatie logisch worden meegenomen in dezelfde renovatie."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-bold text-teal-800">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-extrabold text-teal-800">Veelgestelde vragen</h2>
        <div className="mt-8 space-y-4">
          {[
            ["Hoe wordt een plat dak geïsoleerd?", "Dat hangt af van de bestaande opbouw. Na inspectie adviseren we de geschikte methode en isolatieoplossing."],
            ["Helpt dakisolatie ook in de zomer?", "Isolatie vertraagt warmte-uitwisseling via het dak. Dat kan helpen om ruimtes onder het dak minder snel te laten opwarmen."],
            ["Wat kost platdakisolatie?", "De prijs is projectafhankelijk. Dakoppervlak, bestaande opbouw, bereikbaarheid, isolatie en bijkomende werken bepalen de offerte."],
          ].map(([q, a]) => (
            <details key={q} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <summary className="cursor-pointer font-bold text-teal-800">{q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-extrabold text-teal-800">Verder over dakisolatie</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <Link href="/dakisolatie/hellend-dak" className="rounded-xl border p-5 font-semibold text-teal-700 hover:border-orange-300">Hellend dak isoleren</Link>
            <Link href="/dakisolatie/sarkingdak" className="rounded-xl border p-5 font-semibold text-teal-700 hover:border-orange-300">Sarkingdak</Link>
            <Link href="/diensten/dakisolatie" className="rounded-xl border p-5 font-semibold text-teal-700 hover:border-orange-300">Dakisolatie overzicht</Link>
          </div>
        </div>
      </section>

      <section id="offerte" className="bg-teal-800 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-white">Uw plat dak laten beoordelen?</h2>
            <p className="mt-4 leading-relaxed text-white/70">Vraag een gratis inspectie aan. U krijgt advies op basis van uw echte dak, niet op basis van een standaardpakket.</p>
            <p className="mt-5 text-sm font-semibold text-orange-300">10 jaar garantie · lokale ploeg · transparante offerte</p>
          </div>
          <ContactForm defaultService="dakwerken" />
        </div>
      </section>
    </>
  );
}
