import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Hellend Dak Isoleren Antwerpen — Buiten of Binnen",
  description:
    "Hellend dak isoleren in Antwerpen en omgeving. Advies over isolatie langs buiten, sarking en andere passende oplossingen. Gratis inspectie en offerte.",
  keywords: [
    "hellend dak isoleren",
    "schuin dak isoleren",
    "hellend dak isolatie",
    "dak isoleren langs buiten",
    "dakisolatie buitenzijde",
    "hellend dak isoleren antwerpen",
    "sarkingdak",
  ],
  alternates: { canonical: `${BRAND.url}/dakisolatie/hellend-dak` },
  openGraph: {
    title: "Hellend Dak Isoleren Antwerpen — Buiten of Binnen",
    description: "Hellend dak isoleren in Antwerpen en omgeving. Gratis inspectie en advies op maat.",
    url: `${BRAND.url}/dakisolatie/hellend-dak`,
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Kan een hellend dak langs buiten worden geïsoleerd?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Isolatie langs de buitenzijde van een hellend dak is mogelijk, onder meer via een sarkingoplossing. Of dit voor uw dak geschikt is, hangt af van de bestaande dakopbouw en de geplande renovatie.",
      },
    },
    {
      "@type": "Question",
      name: "Wanneer is sarking interessant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sarking is vooral interessant wanneer de buitenzijde van het hellend dak toch wordt gerenoveerd en u de isolatielaag aan de buitenzijde wilt doorlopen. ISOPROTECH beoordeelt dit tijdens de inspectie.",
      },
    },
    {
      "@type": "Question",
      name: "Helpt dakisolatie tegen een warme zolder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dakisolatie vertraagt warmte-uitwisseling via het dak. Dat kan het comfort onder het dak verbeteren, zowel tijdens koude als warme periodes. Ventilatie, ramen en de rest van de woningopbouw blijven eveneens belangrijk.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hellend dak isoleren",
  description: "Isolatie van hellende daken in Antwerpen en omgeving, inclusief isolatie langs de buitenzijde en sarking waar passend.",
  provider: { "@type": "LocalBusiness", name: BRAND.name, url: BRAND.url, telephone: BRAND.phone },
  url: `${BRAND.url}/dakisolatie/hellend-dak`,
};

export default function HellendDakPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />

      <section className="bg-teal-800 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-400">Dakisolatie · Hellend dak</p>
          <h1 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">Hellend dak isoleren in Antwerpen</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Isoleren langs buiten, sarking of een andere oplossing: de juiste keuze hangt af van de bestaande constructie en uw renovatieplan. We starten daarom altijd met een inspectie.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#offerte" className="rounded-xl bg-orange-400 px-6 py-3 font-bold text-white hover:bg-orange-500">Gratis inspectie aanvragen</a>
            <Link href="/diensten/dakisolatie" className="rounded-xl border border-white/35 px-6 py-3 font-bold text-white hover:bg-white/10">Dakisolatie overzicht</Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        <Breadcrumb items={[{ label: "Dakisolatie", href: "/diensten/dakisolatie" }, { label: "Hellend dak isoleren", href: "/dakisolatie/hellend-dak" }]} />
      </div>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-teal-800">Welke methode past bij uw hellend dak?</h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              Een hellend dak kan op verschillende manieren worden geïsoleerd. Bij renovatie van de buitenzijde kan isolatie langs buiten logisch zijn. In andere situaties kan een andere aanpak geschikter zijn. De bestaande dakopbouw bepaalt welke oplossing verantwoord is.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-2xl bg-stone-50 p-6"><h3 className="font-bold text-teal-800">Isolatie langs buiten</h3><p className="mt-2 text-sm leading-relaxed text-gray-600">Relevant wanneer de dakbedekking of buitenzijde wordt aangepakt en een doorlopende isolatielaag gewenst is.</p></div>
            <div className="rounded-2xl bg-stone-50 p-6"><h3 className="font-bold text-teal-800">Sarking</h3><p className="mt-2 text-sm leading-relaxed text-gray-600">Een methode waarbij isolatie aan de buitenzijde van de hellende dakconstructie wordt aangebracht. ISOPROTECH biedt sarking als dakisolatie-oplossing.</p></div>
            <div className="rounded-2xl bg-stone-50 p-6"><h3 className="font-bold text-teal-800">Projectspecifiek advies</h3><p className="mt-2 text-sm leading-relaxed text-gray-600">Dikte, bevestiging en technische opbouw worden pas bepaald nadat de bestaande situatie is beoordeeld.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-extrabold text-teal-800">Problemen waar klanten vaak mee starten</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Koude bovenverdieping", "Ruimtes onder het dak koelen snel af en blijven moeilijk comfortabel."],
              ["Warme zolder in de zomer", "De bovenste verdieping warmt snel op wanneer de buitentemperatuur stijgt."],
              ["Dakrenovatie gepland", "Wanneer het dak toch open gaat, is dit een logisch moment om de isolatiestrategie mee te bekijken."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-sm"><h3 className="font-bold text-teal-800">{title}</h3><p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-extrabold text-teal-800">Van inspectie tot uitvoering</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {[
            ["01", "Inspectie", "We bekijken dakconstructie, bereikbaarheid en zichtbare aandachtspunten."],
            ["02", "Advies", "We bespreken welke isolatiemethode past bij uw dak en renovatieplan."],
            ["03", "Offerte", "U ontvangt een duidelijke offerte zonder standaardprijzen die niet bij uw situatie passen."],
            ["04", "Uitvoering", "Onze ploeg voert de afgesproken dakisolatiewerken uit en controleert de aansluiting en afwerking."],
          ].map(([nr, title, text]) => (
            <div key={nr} className="rounded-2xl border border-gray-100 p-6 shadow-sm"><span className="text-3xl font-extrabold text-orange-200">{nr}</span><h3 className="mt-2 font-bold text-teal-800">{title}</h3><p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p></div>
          ))}
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-extrabold text-teal-800">Verder over dakisolatie</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <Link href="/dakisolatie/sarkingdak" className="rounded-xl border p-5 font-semibold text-teal-700 hover:border-orange-300">Sarkingdak</Link>
            <Link href="/dakisolatie/plat-dak" className="rounded-xl border p-5 font-semibold text-teal-700 hover:border-orange-300">Plat dak isoleren</Link>
            <Link href="/diensten/dakisolatie" className="rounded-xl border p-5 font-semibold text-teal-700 hover:border-orange-300">Dakisolatie overzicht</Link>
          </div>
        </div>
      </section>

      <section id="offerte" className="bg-teal-800 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-white">Hellend dak laten isoleren?</h2>
            <p className="mt-4 leading-relaxed text-white/70">Vraag een gratis inspectie aan. We bekijken uw dak ter plaatse en adviseren de oplossing die bij uw constructie en renovatie past.</p>
            <p className="mt-5 text-sm font-semibold text-orange-300">10 jaar garantie · lokale ploeg · transparante offerte</p>
          </div>
          <ContactForm defaultService="dakwerken" />
        </div>
      </section>
    </>
  );
}
