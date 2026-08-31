import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Sarkingdak Antwerpen — Dak Isoleren Langs Buiten",
  description:
    "Sarkingdak in Antwerpen en omgeving: hellend dak isoleren langs buiten met PIR waar technisch passend. Gratis inspectie, advies en vrijblijvende offerte.",
  keywords: [
    "sarkingdak",
    "sarking isolatie",
    "sarkingdak antwerpen",
    "dak isoleren langs buiten",
    "hellend dak isoleren buitenzijde",
    "PIR sarking",
  ],
  alternates: { canonical: `${BRAND.url}/dakisolatie/sarkingdak` },
  openGraph: {
    title: "Sarkingdak Antwerpen — Dak Isoleren Langs Buiten",
    description: "Hellend dak isoleren langs buiten met een sarkingoplossing. Gratis inspectie en advies op maat.",
    url: `${BRAND.url}/dakisolatie/sarkingdak`,
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wat is een sarkingdak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bij een sarkingdak wordt de isolatie aan de buitenzijde van de hellende dakconstructie aangebracht. Daardoor kan een doorlopende isolatielaag worden gemaakt zonder de binnenruimte als uitgangspunt te nemen.",
      },
    },
    {
      "@type": "Question",
      name: "Wanneer is sarking geschikt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sarking is vooral relevant wanneer de buitenzijde van het hellend dak wordt gerenoveerd. De bestaande constructie, details en dakopbouw bepalen of deze methode voor uw woning geschikt is.",
      },
    },
    {
      "@type": "Question",
      name: "Gebruikt ISOPROTECH PIR voor sarking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PIR behoort tot de isolatiematerialen die ISOPROTECH gebruikt voor dakisolatie en sarking. De exacte dikte en productkeuze worden per project bepaald en niet als vaste standaard voor elk dak gepubliceerd.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sarkingdak",
  description: "Buitenisolatie van hellende daken in Antwerpen en omgeving, met PIR als mogelijke isolatieoplossing.",
  provider: { "@type": "LocalBusiness", name: BRAND.name, url: BRAND.url, telephone: BRAND.phone },
  url: `${BRAND.url}/dakisolatie/sarkingdak`,
};

export default function SarkingdakPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />

      <section className="bg-teal-800 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-400">Dakisolatie · Sarking</p>
          <h1 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">Sarkingdak in Antwerpen</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Bij sarking wordt een hellend dak langs de buitenzijde geïsoleerd. Dat maakt deze methode bijzonder relevant wanneer de buitenkant van het dak toch wordt gerenoveerd.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#offerte" className="rounded-xl bg-orange-400 px-6 py-3 font-bold text-white hover:bg-orange-500">Gratis inspectie aanvragen</a>
            <Link href="/dakisolatie/hellend-dak" className="rounded-xl border border-white/35 px-6 py-3 font-bold text-white hover:bg-white/10">Hellend dak isoleren</Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        <Breadcrumb items={[{ label: "Dakisolatie", href: "/diensten/dakisolatie" }, { label: "Hellend dak isoleren", href: "/dakisolatie/hellend-dak" }, { label: "Sarkingdak", href: "/dakisolatie/sarkingdak" }]} />
      </div>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-teal-800">Wat betekent sarking?</h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              Een sarkingoplossing brengt de isolatielaag aan de buitenzijde van de hellende dakconstructie. Daardoor kan de isolatie over de constructie doorlopen. De precieze technische opbouw verschilt per dak en wordt pas na inspectie vastgelegd.
            </p>
          </div>
          <div className="rounded-2xl bg-stone-50 p-7">
            <h2 className="text-2xl font-extrabold text-teal-800">Wanneer bekijken we sarking?</h2>
            <ul className="mt-5 space-y-3 text-gray-600">
              <li>• Wanneer een volledige of gedeeltelijke dakrenovatie gepland is.</li>
              <li>• Wanneer isoleren langs buiten praktisch beter past dan ingrepen aan de binnenzijde.</li>
              <li>• Wanneer de klant de binnenruimte zoveel mogelijk wil behouden.</li>
              <li>• Wanneer de bestaande dakconstructie geschikt blijkt na inspectie.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-extrabold text-teal-800">Sarking en PIR</h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-gray-600">
            ISOPROTECH biedt dakisolatie langs buiten aan en gebruikt PIR als een van de isolatie-oplossingen. De dikte, bevestiging en verdere laagopbouw worden niet vooraf als universeel pakket vastgelegd: die keuze hoort bij de technische beoordeling van het project.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Bestaande constructie", "De staat en opbouw van het dak zijn bepalend voor de gekozen uitvoering."],
              ["Aansluitingen", "Dakramen, randen, goten en andere details moeten in de projectoplossing worden meegenomen."],
              ["Combinatie met dakrenovatie", "Sarking is vaak het meest logisch wanneer de buitenzijde van het dak toch wordt aangepakt."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-sm"><h3 className="font-bold text-teal-800">{title}</h3><p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-extrabold text-teal-800">Veelgestelde vragen over sarking</h2>
        <div className="mt-8 space-y-4">
          {[
            ["Is sarking hetzelfde als dakisolatie langs buiten?", "Sarking is een methode voor hellende daken waarbij de isolatie aan de buitenzijde van de dakconstructie wordt aangebracht."],
            ["Is sarking altijd mogelijk?", "Nee. De bestaande dakconstructie, details en geplande werken bepalen of sarking passend is. Daarom inspecteren we eerst het dak."],
            ["Welke isolatie gebruiken jullie?", "PIR behoort tot de materialen die we voor dakisolatie gebruiken. De exacte keuze en dikte worden per project bepaald."],
          ].map(([q, a]) => (
            <details key={q} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"><summary className="cursor-pointer font-bold text-teal-800">{q}</summary><p className="mt-3 text-sm leading-relaxed text-gray-600">{a}</p></details>
          ))}
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-extrabold text-teal-800">Verder over dakisolatie</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <Link href="/dakisolatie/hellend-dak" className="rounded-xl border p-5 font-semibold text-teal-700 hover:border-orange-300">Hellend dak isoleren</Link>
            <Link href="/dakisolatie/plat-dak" className="rounded-xl border p-5 font-semibold text-teal-700 hover:border-orange-300">Plat dak isoleren</Link>
            <Link href="/diensten/dakisolatie" className="rounded-xl border p-5 font-semibold text-teal-700 hover:border-orange-300">Dakisolatie overzicht</Link>
          </div>
        </div>
      </section>

      <section id="offerte" className="bg-teal-800 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-white">Is sarking geschikt voor uw dak?</h2>
            <p className="mt-4 leading-relaxed text-white/70">Vraag een gratis inspectie aan. We beoordelen uw dak en geven gericht advies over sarking of een andere passende dakisolatie-oplossing.</p>
            <p className="mt-5 text-sm font-semibold text-orange-300">10 jaar garantie · lokale ploeg · transparante offerte</p>
          </div>
          <ContactForm defaultService="dakwerken" />
        </div>
      </section>
    </>
  );
}
