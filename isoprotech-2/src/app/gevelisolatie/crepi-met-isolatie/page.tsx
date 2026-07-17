import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { BRAND, PHOTOS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Crepi met Isolatie Antwerpen — ETICS Buitengevelisolatie",
  description:
    "Crepi met isolatie (ETICS) in Antwerpen: EPS 14–18 cm op uw gevel, wapeningslaag en structuurpleister. Rd tot 4,0+ m²K/W, BTW 6%, Mijn VerbouwPremie. Offerte op maat.",
  keywords: [
    "crepi met isolatie",
    "gevelisolatie crepi",
    "ETICS Antwerpen",
    "buitengevelisolatie",
    "EPS gevel isoleren",
    "crepi prijs Antwerpen",
    "gevelisolatie buiten",
    "thermische isolatie gevel",
  ],
  alternates: { canonical: `${BRAND.url}/gevelisolatie/crepi-met-isolatie` },
  openGraph: {
    title: "Crepi met Isolatie Antwerpen — ETICS Buitengevelisolatie",
    description:
      "Buitengevelisolatie met crepi (ETICS): EPS-isolatieplaten + wapeningslaag + structuurpleister. Vochtveilig, dampopen en koudebrug-vrij.",
    url: `${BRAND.url}/gevelisolatie/crepi-met-isolatie`,
    type: "website",
    images: [{ url: PHOTOS.gevelCrepiMeiseNa.src, width: 1200, height: 630 }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wat is ETICS of crepi met isolatie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ETICS staat voor External Thermal Insulation Composite System — in de volksmond 'crepi met isolatie'. Het systeem bestaat uit EPS- of minerale wolplaten die op de buitengevel worden gelijmd en gedybeld, vervolgens afgewerkt met een wapeningslaag en een textuurpleister (crepi). Het is de meest gangbare methode voor buitengevelisolatie in België.",
      },
    },
    {
      "@type": "Question",
      name: "Hoeveel isolatie is nodig voor gevelisolatie via crepi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Voor renovatie geldt in Vlaanderen een minimale Rd-waarde van 1,5 m²K/W voor de gevel (EPB-eis). Met 14 cm EPS (λ 0,036) haalt u Rd 3,9 m²K/W en voldoet u ruimschoots. Bij nieuwbouw of ingrijpende energetische renovatie (IER) geldt Rd ≥ 3,5 m²K/W. ISOPROTECH werkt standaard met 14–18 cm voor maximale energiebesparing.",
      },
    },
    {
      "@type": "Question",
      name: "Kan ik de kleur van de crepi zelf kiezen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, de afwerkpleister is beschikbaar in honderden RAL-kleuren en structuren (fijn, medium, grof, korrelgrootte 1,5 tot 3 mm). Houd rekening met het stedenbouwkundige voorschrift van uw gemeente voor kleur en textuur van gevels.",
      },
    },
    {
      "@type": "Question",
      name: "Wat is het verschil tussen crepi en steenstrips bij gevelisolatie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Crepi (ETICS) wordt afgewerkt met een dunlaagpleister. Steenstrips zijn dunne keramiektegels die op hetzelfde isolatiesysteem worden verlijmd voor een bakstenen look. Steenstrips kosten meer (±€40–60/m² meerprijs) maar geven een authentiekere uitstraling.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gevelisolatie met crepi (ETICS)",
  provider: {
    "@type": "LocalBusiness",
    name: BRAND.name,
    telephone: BRAND.phone,
    url: BRAND.url,
    address: { "@type": "PostalAddress", addressLocality: "Antwerpen", addressCountry: "BE" },
  },
  areaServed: { "@type": "City", name: "Antwerpen" },
  description: "Buitengevelisolatie via ETICS-systeem: EPS-isolatie 14–18 cm, wapeningslaag en structuurpleister (crepi). Inclusief sokkeldetails, vensterbanken en dorpels.",
  serviceType: "Buitengevelisolatie",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BRAND.url },
    { "@type": "ListItem", position: 2, name: "Gevelisolatie", item: `${BRAND.url}/diensten/gevelisolatie` },
    { "@type": "ListItem", position: 3, name: "Crepi met isolatie", item: `${BRAND.url}/gevelisolatie/crepi-met-isolatie` },
  ],
};

export default function CrepiMetIsolatiePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="relative min-h-[460px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={PHOTOS.gevelCrepiMeiseNa.src}
            alt="Crepi met isolatie Antwerpen ETICS"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-teal-900/78" />
        <div className="relative mx-auto max-w-4xl px-6 py-32 text-center">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-4">
            Buitengevelisolatie
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Crepi met Isolatie in Antwerpen
          </h1>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto mb-8">
            ETICS-systeem: EPS-isolatieplaten 14–18 cm op uw gevel, afgewerkt met
            wapeningslaag en duurzame structuurpleister. Koudebrug-vrij en dampopen.
          </p>
          <a
            href="#offerte"
            className="inline-block bg-orange-400 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-full transition-colors"
          >
            Gratis offerte aanvragen
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-4">
        <Breadcrumb
          items={[
            { label: "Gevelisolatie", href: "/diensten/gevelisolatie" },
            { label: "Crepi met isolatie", href: "/gevelisolatie/crepi-met-isolatie" },
          ]}
        />
      </div>

      {/* What is ETICS */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
            Systeem uitgelegd
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-6">
            Wat is ETICS — crepi met isolatie?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            ETICS (<em>External Thermal Insulation Composite System</em>) is het meest gebruikte systeem voor
            buitengevelisolatie in België en Nederland. In de volksmond heet het <strong>crepi met isolatie</strong>,
            naar de afwerkpleister (crépi) die het systeem zichtbaar afsluit.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het principe is eenvoudig maar effectief: isolatieplaten van EPS (geëxpandeerd polystyreen) of
            minerale wol worden rechtstreeks op de bestaande gevel gelijmd én gemechanisch verankerd. Daarna
            volgt een wapeningslaag met glasvezelnet en een dampopen afwerkpleister in de gewenste kleur en textuur.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Het grote voordeel tegenover binnenisolatie: de thermische massa van de muur blijft binnenin, er
            ontstaan geen koudebruggen, en u verliest geen woonruimte. Bovendien vernieuwt u gelijktijdig het
            uitzicht van uw gevel.
          </p>
        </div>
      </section>

      {/* Build-up layers */}
      <section className="py-14 bg-stone-50">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
            Opbouw
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-8">
            De 6 lagen van een ETICS-systeem
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                num: "1",
                label: "Bestaande gevel",
                desc: "De ondergrond wordt gereinigd en hersteld. Loszittend bepleistering wordt verwijderd. Scheuren worden gedicht.",
              },
              {
                num: "2",
                label: "Hechtmortel / lijm",
                desc: "Speciale hechtmortel wordt in band- en stippenpatroon (minimaal 40% contact) aangebracht op de EPS-platen.",
              },
              {
                num: "3",
                label: "EPS-isolatieplaat",
                desc: "14 of 18 cm EPS (λ ≈ 0,036 W/mK) levert respectievelijk Rd 3,9 of 5,0 m²K/W. Brandklasse E; voor zones met brandrisico: minerale wol.",
              },
              {
                num: "4",
                label: "Mechanische verankering",
                desc: "4–6 kunststofdybels per plaat fixeren het systeem thermisch koudebrug-vrij. Verplicht bij gevels hoger dan 8 m en bij ondergronden met beperkte hechting.",
              },
              {
                num: "5",
                label: "Wapeningslaag + glasvezelnet",
                desc: "Basiscoat met ingelegde glasvezelmat (160 g/m²) verdeelt spanningen, verhindert scheurvorming en vormt de hechtondergrond voor de pleister.",
              },
              {
                num: "6",
                label: "Afwerkpleister (crepi)",
                desc: "Dampopen minerale of silicaatpleister in diverse texturen (K15, K20, K30) en kleuren. Hydrofobe toevoeging weert regenwater.",
              },
            ].map((layer, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 shadow-sm bg-white p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-9 h-9 rounded-full bg-teal-700 text-white font-bold flex items-center justify-center text-sm">
                    {layer.num}
                  </span>
                  <h3 className="font-bold text-teal-800">{layer.label}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials comparison */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
            Materialen
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-8">
            EPS of minerale wol?
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-teal-700 text-white">
                  <th className="py-3 px-4 text-left">Eigenschap</th>
                  <th className="py-3 px-4 text-center">EPS (grijs/wit)</th>
                  <th className="py-3 px-4 text-center">Minerale wol</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Lambda-waarde", "0,031–0,036 W/mK", "0,035–0,040 W/mK"],
                  ["Rd bij 14 cm", "~3,9–4,5 m²K/W", "~3,5–4,0 m²K/W"],
                  ["Brandklasse", "E (met brandstrook)", "A1 (niet-brandbaar)"],
                  ["Vochtbestendigheid", "Goed (niet hygroscopisch)", "Goed (bij correcte montage)"],
                  ["Dampweerstand", "Laag (sd < 1 m)", "Zeer laag (volledig dampopen)"],
                  ["Prijs (materiaal)", "Lager", "25–40% hoger"],
                  ["Aanbevolen voor", "Standaard gevels", "Brand-/geluidsgevoelige zones"],
                ].map(([kenmerk, eps, mw], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="py-3 px-4 font-medium text-gray-700">{kenmerk}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{eps}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{mw}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            ISOPROTECH werkt standaard met grijs EPS (graphite EPS, λ 0,031) voor optimale dikte-prestatieverhouding.
            Op brandgevoelige zones (bovenaan gebouwen hoger dan 10 m of bij EPC-vereiste) plaatsen we een minerale wolstrook
            als brandbelemmering.
          </p>
        </div>
      </section>

      {/* Rd table */}
      <section className="py-14 bg-stone-50">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
            Isolatiewaarden
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-8">
            Rd-waarden per dikte (EPS grijs, λ 0,031)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-teal-700 text-white">
                  <th className="py-3 px-4 text-center">Dikte</th>
                  <th className="py-3 px-4 text-center">Rd (m²K/W)</th>
                  <th className="py-3 px-4 text-left">Toepassing</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["10 cm", "3,2", "Minimum renovatie — voldoet aan EPB-eis Rd 1,5"],
                  ["12 cm", "3,9", "Comfortabele renovatie"],
                  ["14 cm", "4,5", "ISOPROTECH standaard — voldoet aan IER Rd 3,5"],
                  ["16 cm", "5,2", "Hoge-prestatierenovatie"],
                  ["18 cm", "5,8", "ISOPROTECH premium — richting bijna-nulenergie"],
                  ["20 cm", "6,5", "Passiefhuis of EPB-eis nieuwbouw Rd 3,5+"],
                ].map(([dikte, rd, toep], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="py-3 px-4 text-center font-semibold text-teal-700">{dikte}</td>
                    <td className="py-3 px-4 text-center">{rd}</td>
                    <td className="py-3 px-4 text-gray-600">{toep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Bron: Buildwise (vroeger WTCB), technische goedkeuring EPS-systemen. EPB-eisen Vlaanderen: renovatie Rd ≥ 1,5;
            IER Rd ≥ 3,5 (bron: VEKA, geraadpleegd juni 2026).
          </p>
        </div>
      </section>

      {/* Critical details */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
            Technische details
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-8">
            Kritische aansluitingen bij ETICS
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Sokkeldetail",
                desc: "De onderkant van het ETICS-systeem eindigt minstens 30 cm boven maaiveld op een goed verankerd sokkelprofilé. Hieronder wordt XPS (drukvast) gebruikt in plaats van EPS. Correcte uitvoering verhindert vochtcapillariteit.",
              },
              {
                title: "Vensterbanken en dorpels",
                desc: "Bestaande vensterbanken moeten worden verlengd of vervangen (min. 4 cm uitsprong na isolatie). Dakrandprofielen met druipneus worden voorzien. Slordig afgewerkte vensterbanken leiden op termijn tot vochtinfiltatie.",
              },
              {
                title: "Lateien en koudebruggen",
                desc: "Boven ramen en deuren bevinden zich bouwkundige koudebruggen (betonnen lateien). ETICS elimineert deze volledig door de isolatielaag ononderbroken door te trekken.",
              },
              {
                title: "Gevel-dakrand aansluiting",
                desc: "Waar de gevelisolatie aansluit op de dakrand of kroonlijst, moet de continuïteit van de luchtdichting en isolatie gegarandeerd zijn. ISOPROTECH coördineert deze aansluiting met het dakwerk.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-teal-700 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price */}
      <section className="py-14 bg-stone-50">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
            Indicatieve prijs
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-8">
            Wat kost crepi met isolatie?
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-teal-700 text-white">
                  <th className="py-3 px-4 text-left">Systeem</th>
                  <th className="py-3 px-4 text-center">Dikte</th>
                  <th className="py-3 px-4 text-center">Rd</th>
                  <th className="py-3 px-4 text-center">Prijs incl. 6% BTW</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["EPS grijs + crepi", "14 cm", "~4,5 m²K/W", "€85–110 /m²"],
                  ["EPS grijs + crepi", "18 cm", "~5,8 m²K/W", "€100–125 /m²"],
                  ["EPS grijs + steenstrip", "14 cm", "~4,5 m²K/W", "€130–170 /m²"],
                  ["Minerale wol + crepi", "14 cm", "~3,5–4,0 m²K/W", "€110–145 /m²"],
                ].map(([sys, dikte, rd, prijs], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="py-3 px-4 font-medium text-gray-700">{sys}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{dikte}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{rd}</td>
                    <td className="py-3 px-4 text-center font-semibold text-teal-700">{prijs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-2xl bg-teal-50 border border-teal-100 p-5 text-sm text-teal-800">
            <strong>Mijn VerbouwPremie:</strong> Via het Vlaamse premieprogramma kunt u premie ontvangen voor
            gevelisolatie op een woning gebouwd vóór 2006. Controleer de actuele bedragen op{" "}
            <a
              href="https://www.vlaanderen.be/mijn-verbouwpremie"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              vlaanderen.be/mijn-verbouwpremie
            </a>{" "}
            (geraadpleegd juni 2026). ISOPROTECH begeleidt u bij de aanvraag.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
            Veelgestelde vragen
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-8">FAQ — Crepi met isolatie</h2>
          <div className="space-y-5">
            {[
              {
                q: "Wat is ETICS of crepi met isolatie?",
                a: "ETICS staat voor External Thermal Insulation Composite System. EPS-isolatieplaten worden op de buitengevel gelijmd en gedybeld, afgewerkt met een wapeningslaag en een dampopen structuurpleister (crepi). Het is de meest gebruikte methode voor buitengevelisolatie in België.",
              },
              {
                q: "Hoeveel isolatiedikte raden jullie aan?",
                a: "ISOPROTECH werkt standaard met 14 cm (Rd 4,5 m²K/W) tot 18 cm (Rd 5,8 m²K/W) EPS grijs. Dat overstijgt ruim de minimale EPB-eis (Rd 1,5 bij renovatie) en de eis voor ingrijpende energetische renovatie (IER, Rd 3,5). Bron: VEKA, geraadpleegd juni 2026.",
              },
              {
                q: "Heb ik een omgevingsvergunning nodig?",
                a: "In de meeste Antwerpse gemeenten is ETICS op de gevel vergunningsvrij als de kleur en textuur overeenkomen met de omgeving. In beschermde stadswijken of bij monumenten gelden extra regels. ISOPROTECH adviseert u over de lokale regelgeving.",
              },
              {
                q: "Hoe lang gaat een ETICS-systeem mee?",
                a: "Een correct uitgevoerd ETICS-systeem heeft een levensduur van 25–40 jaar. Na ±20 jaar kan de buitenpleister worden gereinigd of opnieuw overschilderd zonder de isolatielaag aan te tasten.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-teal-800 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-12 bg-stone-50">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-teal-800 mb-6">Verwante pagina&apos;s</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Steenstrips met isolatie", href: "/gevelisolatie/steenstrips-met-isolatie", desc: "Bakstenen look met dezelfde isolatieprestatie" },
              { label: "Gevelisolatie prijs", href: "/gevelisolatie/prijs", desc: "Overzicht van alle gevelisolatiekosten" },
              { label: "Isolatiedikte gevel", href: "/gevelisolatie/dikte", desc: "14 cm of 18 cm — wat is optimaal?" },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="rounded-xl border border-gray-100 shadow-sm p-5 hover:border-teal-200 hover:shadow-md transition-all group bg-white"
              >
                <p className="font-semibold text-teal-700 group-hover:text-teal-600 mb-1">{link.label}</p>
                <p className="text-sm text-gray-500">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="offerte" className="py-20 bg-teal-800">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-10">
            <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
              Gratis en vrijblijvend
            </p>
            <h2 className="text-3xl font-bold text-white mb-4">
              Offerte voor gevelisolatie met crepi
            </h2>
            <p className="text-teal-200 max-w-xl mx-auto">
              Stuur ons uw plannen of foto&apos;s en wij bezorgen u een gedetailleerde offerte
              met materiaalspecificaties en Rd-berekening.
            </p>
          </div>
          <ContactForm defaultService="gevelwerken" />
        </div>
      </section>
    </>
  );
}
