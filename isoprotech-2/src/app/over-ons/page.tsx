// src/app/over-ons/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Over ISOPROTECH — Dakisolatie & Gevelisolatie Antwerpen",
  description:
    "Ontdek wie ISOPROTECH is: een Antwerps renovatiebedrijf gespecialiseerd in dakisolatie, gevelisolatie, dakrenovatie en gevelafwerking. Eerlijk werk, duidelijke communicatie, 10 jaar garantie.",
  alternates: { canonical: `${BRAND.url}/over-ons` },
};

// ─── ICON COMPONENTS ────────────────────────────────────────────────

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// House / roof icon for dakisolatie
function RoofIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 9.5L12 3l9 6.5" />
      <path d="M9 21V12h6v9" />
      <rect x="3" y="9.5" width="18" height="11.5" rx="1" />
    </svg>
  );
}

// Wall / gevel icon
function WallIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <line x1="9" y1="9" x2="9" y2="3" />
      <line x1="15" y1="15" x2="15" y2="21" />
    </svg>
  );
}

// Wrench / renovation icon
function WrenchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

// Paintbrush icon for crepi/gevelafwerking
function PaintbrushIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18.37 2.63L14 7l-1.59-1.59a2 2 0 00-2.82 0L8 7l9 9 1.59-1.59a2 2 0 000-2.82L17 10l4.37-4.37a2.12 2.12 0 00-3-3z" />
      <path d="M9 8c-2 3-4 3.5-7 4l8 8c1-.5 3.5-2 4-7" />
      <path d="M14.5 17.5L4.5 15" />
    </svg>
  );
}

// WhatsApp icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.1-1.13l-.29-.174-3.01.79.8-2.93-.19-.3A7.96 7.96 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
    </svg>
  );
}

// ─── DATA ────────────────────────────────────────────────────────────

const stats = [
  { value: "150+", label: "Projecten afgerond" },
  { value: "10 jaar", label: "Schriftelijke garantie" },
  { value: "5/5", label: "Google review" },
];

const klantProfielen = [
  {
    title: "Oudere woning die veel warmte verliest",
    desc: "Woningen gebouwd vóór 1990 hebben vaak onvoldoende of geen isolatie. Precies daar maken wij het verschil.",
  },
  {
    title: "Hoge energiefactuur en hoog gasverbruik",
    desc: "Als uw energiefactuur te hoog aanvoelt voor de woning die u heeft, is isolatie waarschijnlijk de meest rendabele oplossing.",
  },
  {
    title: "Verouderde gevel of een verweerd dak",
    desc: "Een gevelrenovatie combineert esthetisch en energetisch resultaat. U investeert één keer en plukt jarenlang de vruchten.",
  },
  {
    title: "Slechte EPC-score die renovatie vereist",
    desc: "Met de renovatieplicht in aantocht moeten woningen met EPC-label E of F worden aangepakt. Wij begeleiden u stap voor stap.",
  },
  {
    title: "Één aanspreekpunt voor dak én gevel",
    desc: "Wij combineren dak- en gevelwerken in één werf — minder coördinatieproblemen, efficiëntere uitvoering.",
  },
  {
    title: "Woning klaar maken voor verkoop of verhuur",
    desc: "Een betere EPC-score vertaalt zich direct in een hogere woningwaarde en een bredere kopersmarkt.",
  },
];

const werkwijzeStappen = [
  {
    n: "01",
    title: "Gratis inspectie ter plaatse",
    desc: "Wij komen bij u langs, beoordelen de situatie en luisteren naar uw vragen. Geen obligaties, geen verborgen kosten.",
  },
  {
    n: "02",
    title: "Duidelijke offerte met vaste prijs",
    desc: "U ontvangt een offerte met alle werken, materialen en prijs. Geen verrassingen achteraf — de prijs is wat u betaalt.",
  },
  {
    n: "03",
    title: "Planning op maat",
    desc: "Wij plannen de werken op een moment dat u past en informeren u tijdig over de startdatum en doorlooptijd.",
  },
  {
    n: "04",
    title: "Vakkundige uitvoering",
    desc: "Ons team voert de werken uit met erkende, gecertificeerde systemen en ATG/BENOR-goedgekeurde materialen.",
  },
  {
    n: "05",
    title: "Oplevering en controle",
    desc: "Na afronding van de werken bekijken wij alles samen. Wij zijn pas tevreden als u dat ook bent.",
  },
  {
    n: "06",
    title: "10 jaar schriftelijke garantie",
    desc: "Na de oplevering ontvangt u een garantiedocument. Mochten er problemen zijn, wij lossen het op — dat is onze belofte.",
  },
];

const diensten = [
  {
    title: "Dakisolatie",
    desc: "Plat of hellend dak beter isoleren voor meer comfort en lagere energiefactuur.",
    href: "/diensten/dakisolatie",
    Icon: RoofIcon,
  },
  {
    title: "Gevelisolatie",
    desc: "Buitengevelisolatie met EPS of minerale wol — energiezuiniger en mooier in één ingreep.",
    href: "/diensten/gevelisolatie",
    Icon: WallIcon,
  },
  {
    title: "Dakrenovatie",
    desc: "Vernieuwing van dakpannen, dakbedekking en dakstructuur voor hellende en platte daken.",
    href: "/diensten/dakrenovatie",
    Icon: WrenchIcon,
  },
  {
    title: "Gevelafwerking — Crepi & Spuitkurk",
    desc: "Duurzame en esthetische gevelafwerking in crepi of spuitkurk, naar uw keuze van kleur en textuur.",
    href: "/diensten/crepi",
    Icon: PaintbrushIcon,
  },
];

// ─── PAGE ───────────────────────────────────────────────────────────

export default function OverOns() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: BRAND.url },
          { name: "Over ons", url: `${BRAND.url}/over-ons` },
        ])}
      />

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative bg-teal-800 py-28 md:py-36 overflow-hidden">
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1.5px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Decorative blobs */}
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-teal-700/40 blur-3xl pointer-events-none" />

        <div className="relative container-wide text-center max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center justify-center gap-2 text-sm text-white/40" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/70 transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/70">Over ons</span>
          </nav>

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-orange-300 uppercase">
              Antwerpen · Meer dan 150 projecten
            </span>
          </div>

          <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-[3.25rem] leading-tight mb-6">
            Over ISOPROTECH
          </h1>
          <p className="text-lg text-white/65 leading-relaxed">
            Een Antwerps renovatiebedrijf met een duidelijke missie: uw woning beter,
            energiezuiniger en meer waard maken — zonder stress.
          </p>
        </div>
      </section>

      {/* ─── WIE WE ZIJN ──────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <span className="section-label">Ons verhaal</span>
              <h2 className="section-heading mt-2 mb-6">
                ISOPROTECH: vakmannen uit Antwerpen
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed text-base md:text-lg">
                <p>
                  ISOPROTECH is een Antwerps bedrijf gespecialiseerd in dakisolatie,
                  gevelisolatie, dakrenovatie en gevelafwerking. Wij werken voor eigenaars
                  van woningen in Antwerpen en de ruime omgeving die hun woning
                  energiezuiniger, comfortabeler en beter beschermd willen maken.
                </p>
                <p>
                  Ons team combineert technische kennis met eerlijke communicatie. Wij
                  vertellen u wat u nodig hebt — niet meer, niet minder. Dat respect voor
                  uw woning en uw budget is de basis van elke samenwerking.
                </p>
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-stone-50 p-6 text-center shadow-sm"
                >
                  <span className="text-3xl font-black text-teal-800 leading-none">
                    {s.value}
                  </span>
                  <span className="mt-2 text-sm text-gray-500 leading-snug">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── VOOR WIE ─────────────────────────────────────────── */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide">
          <div className="text-center mb-10 md:mb-14">
            <span className="section-label">Onze klanten</span>
            <h2 className="section-heading mt-2 mb-4">
              Wie kiest voor ISOPROTECH?
            </h2>
            <p className="section-subheading mx-auto">
              Wij helpen eigenaars van woningen in Antwerpen en omgeving die&hellip;
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {klantProfielen.map((item, i) => (
              <div
                key={i}
                className="group flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-800 text-white">
                  <CheckIcon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-teal-800 text-base leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WERKWIJZE ────────────────────────────────────────── */}
      <section className="section-padding bg-teal-800 overflow-hidden relative">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1.5px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-orange-400/8 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-teal-700/40 blur-3xl pointer-events-none" />

        <div className="relative container-wide">
          <div className="text-center mb-12 md:mb-16">
            <span className="section-label text-orange-400">Onze aanpak</span>
            <h2 className="mt-2 text-3xl font-extrabold text-white md:text-4xl">
              Hoe werkt ISOPROTECH?
            </h2>
            <p className="mt-4 text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
              Een helder proces — van eerste contact tot oplevering en garantie.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {werkwijzeStappen.map((stap, i) => (
              <div
                key={stap.n}
                className="relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/8 transition-colors"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-black text-lg ${
                    i === 0
                      ? "bg-orange-400 text-white shadow-lg shadow-orange-400/30"
                      : "border border-white/20 bg-white/10 text-white"
                  }`}
                >
                  {stap.n}
                </div>
                <div>
                  <h3 className="font-bold text-white text-base leading-snug mb-2">
                    {stap.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">{stap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIENSTEN ─────────────────────────────────────────── */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide">
          <div className="text-center mb-10 md:mb-14">
            <span className="section-label">Wat wij doen</span>
            <h2 className="section-heading mt-2">Onze diensten</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {diensten.map((dienst) => (
              <Link
                key={dienst.href}
                href={dienst.href}
                className="group flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-800/8 text-teal-800 group-hover:bg-teal-800 group-hover:text-white transition-colors duration-200">
                  <dienst.Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-teal-800 text-base leading-snug mb-2">
                    {dienst.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{dienst.desc}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-400 group-hover:gap-2.5 transition-all">
                  Meer info
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-800 to-teal-700 section-padding">
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-orange-400/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-teal-600/30 blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1.5px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative container-wide text-center max-w-3xl mx-auto">
          <span className="section-label text-orange-400">Gratis inspectie</span>
          <h2 className="mt-2 text-3xl font-extrabold text-white md:text-4xl leading-tight mb-5">
            Wil u weten wat ISOPROTECH voor uw woning kan betekenen?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Vraag een gratis inspectie aan — wij komen ter plaatse en geven u een eerlijk
            beeld van de mogelijkheden.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
            <a
              href={`tel:${BRAND.phone}`}
              className="btn-primary text-base px-8 py-4 inline-flex items-center justify-center gap-2"
            >
              <svg
                className="h-4 w-4 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Bel nu direct
            </a>
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/25 px-8 py-4 text-base font-bold text-white hover:border-white/50 hover:bg-white/5 transition-all"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              Stuur een bericht
            </a>
          </div>

          <Link
            href="/realisaties"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/50 hover:text-white/80 transition-colors"
          >
            Bekijk onze realisaties
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
