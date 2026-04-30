// src/app/gevelisolatie-antwerpen/page.tsx
// High-conversion landing page for Google Ads / Meta Ads traffic
// Structure: 12 sections, every block builds trust or pushes toward contact

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BRAND, PHOTOS } from "@/lib/constants";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Gevelisolatie Antwerpen — Warmer Huis, Lagere Energiekosten | ISOPROTECH",
  description: "Buitengevelisolatie in Antwerpen met crepi, spuitkurk of steenstrips. Gratis inspectie ter plaatse, duidelijke offerte, 10 jaar garantie. Bel +32 465 88 27 01.",
  keywords: ["gevelisolatie antwerpen", "gevelisolatie prijs", "crepi antwerpen", "spuitkurk antwerpen", "buitengevel isoleren", "gevelrenovatie antwerpen", "gevelisolatie laten plaatsen"],
  alternates: { canonical: `${BRAND.url}/gevelisolatie-antwerpen` },
  openGraph: { title: "Gevelisolatie Antwerpen — ISOPROTECH", description: "Warmer huis, lagere energiekosten. Gratis inspectie, vaste prijs, 10 jaar garantie." },
};

export default function GevelisolatieLanding() {
  return (
    <>
      {/* ═══ 1. HERO — 5 seconds to answer: what, for whom, where, result, next step ═══ */}
      <section className="relative min-h-[580px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={PHOTOS.gevelCrepiMeise.src} alt={PHOTOS.gevelCrepiMeise.alt} fill className="object-cover" priority sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-900/70" />
        <div className="relative container-wide py-28">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-white leading-[1.15] mb-5">
              Een warmer huis en lagere energiekosten met gevelisolatie in Antwerpen
            </h1>
            <p className="text-lg text-white/75 leading-relaxed mb-6">
              ISOPROTECH isoleert en renoveert uw gevel van A tot Z. Eén aanspreekpunt,
              duidelijke prijs, 10 jaar garantie. Uw woning ziet er weer uit als nieuw.
            </p>
            {/* Trust bullets */}
            <div className="flex flex-col gap-2 mb-8">
              {["Gratis inspectie ter plaatse", "Duidelijke offerte zonder verrassingen", "Lokale specialist in Antwerpen", "10 jaar garantie op de werken"].map((t) => (
                <div key={t} className="flex items-center gap-2.5">
                  <svg className="h-5 w-5 text-orange-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  <span className="text-white/90 text-sm font-medium">{t}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#offerte" className="btn-primary text-base px-7 py-3.5">
                Plan uw gratis gevelinspectie
              </a>
              <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline-light text-base px-7 py-3.5 inline-flex items-center gap-2">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492l4.625-1.465A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.115 0-4.142-.6-5.895-1.727l-.422-.262-2.742.87.876-2.672-.282-.44A9.723 9.723 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75S21.75 6.615 21.75 12s-4.365 9.75-9.75 9.75z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. PROBLEM — "Herkent u dit?" ═══ */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-4">Herkent u dit?</h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">Veel woningeigenaren in Antwerpen herkennen zich in deze situatie.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Koude muren in de winter", desc: "Ondanks de verwarming voelen uw buitenmuren koud aan. De warmte verdwijnt dwars door de gevel." },
              { title: "Hoge energierekening", desc: "Uw verwarmingskosten blijven stijgen, terwijl het comfort niet verbetert." },
              { title: "Verouderde, lelijke gevel", desc: "De buitenkant van uw woning is aan vernieuwing toe — scheuren, verkleuringen of afbladderende verf." },
              { title: "Vocht- en schimmelproblemen", desc: "Condensatie op de binnenmuren, schimmelvorming in de hoeken. Een teken van slechte isolatie." },
              { title: "Onduidelijkheid over premies", desc: "U weet dat er subsidies bestaan, maar niet of u ervoor in aanmerking komt." },
              { title: "Angst voor verborgen kosten", desc: "Eerdere ervaringen met aannemers die achteraf met meerwerk kwamen." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-100 p-5 bg-white">
                <h3 className="font-bold text-teal-800 text-sm mb-1.5">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. SOLUTION — What facade insulation actually does ═══ */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-4">Wat gevelisolatie voor uw woning doet</h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">Het gaat niet om isolatiemateriaal. Het gaat om wat u ermee wint.</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { icon: <svg className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>, title: "Lagere energiekosten", desc: "Tot 35% besparing op uw verwarmingsrekening. De investering verdient zichzelf terug in 5 tot 8 jaar." },
              { icon: <svg className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" /></svg>, title: "Meer wooncomfort", desc: "Warme muren in de winter, koele muren in de zomer. Geen koude tocht meer langs de buitenmuren." },
              { icon: <svg className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" /></svg>, title: "Mooiere gevel", desc: "Uw woning ziet eruit als nieuw. Keuze uit crepi, spuitkurk of steenstrips — altijd strak afgewerkt." },
              { icon: <svg className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>, title: "Hogere woningwaarde", desc: "Een beter EPC-label verhoogt de marktwaarde van uw woning. Gemiddeld +5% tot +10% bij verkoop." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start p-5 rounded-xl bg-white border border-gray-100">
                <div className="shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-teal-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA repeat ═══ */}
      <section className="py-10 bg-teal-800">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <p className="text-white/80 text-lg mb-4">Benieuwd wat gevelisolatie voor uw woning kan betekenen?</p>
          <a href="#offerte" className="btn-primary text-base px-8 py-3.5">Plan uw gratis gevelinspectie</a>
        </div>
      </section>

      {/* ═══ 4. SERVICES — "Wat wij voor u doen" ═══ */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-10">Wat wij voor u doen</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Buitengevelisolatie", desc: "EPS, PUR of minerale wol — afgestemd op uw woning en budget." },
              { title: "Crepi afwerking", desc: "Strakke minerale pleister in elke kleur en structuur." },
              { title: "Spuitkurk", desc: "Elastische, naadloze afwerking. Ademend en vochtbestendig." },
              { title: "Steenstrips", desc: "Klinkerlook zonder volle baksteen. Dun, duurzaam, authentiek." },
              { title: "Gevelrenovatie", desc: "Volledige vernieuwing van uw buitengevel, inclusief details en afwerking." },
              { title: "Advies rond premies", desc: "Wij bekijken samen welke subsidies en premies mogelijk zijn voor uw situatie." },
            ].map((s) => (
              <div key={s.title} className="rounded-xl border border-gray-100 p-5 bg-white hover:border-orange-200 transition-colors">
                <h3 className="font-bold text-teal-800 mb-1.5">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. STRONG OFFER ═══ */}
      <section className="section-padding bg-orange-50">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-teal-800 mb-4">U hoeft nog niet te beslissen</h2>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto">
            We bekijken eerst uw gevel, luisteren naar uw wensen en geven duidelijk advies over de
            beste oplossing. Pas daarna ontvangt u een heldere offerte — zonder verplichtingen, zonder verrassingen.
          </p>
          <a href="#offerte" className="btn-primary text-base px-8 py-3.5">Vraag een gratis prijsindicatie aan</a>
          <p className="text-xs text-gray-400 mt-4">Gratis · Vrijblijvend · Binnen 48u contact</p>
        </div>
      </section>

      {/* ═══ 6. PROCESS — 4 steps ═══ */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-10">Hoe werkt het?</h2>
          <div className="space-y-8">
            {[
              { n: "1", title: "Gratis aanvraag", desc: "Vul het formulier in of stuur een WhatsApp. Wij nemen binnen 48 uur contact op." },
              { n: "2", title: "Inspectie ter plaatse", desc: "Onze vakman bekijkt uw gevel, meet op en bespreekt uw wensen en mogelijkheden." },
              { n: "3", title: "Duidelijke offerte", desc: "U ontvangt een vaste prijs met heldere breakdown. Geen verborgen kosten, geen verrassingen." },
              { n: "4", title: "Professionele uitvoering", desc: "Ons team voert de werken uit. Gemiddeld 1 tot 2 weken voor een volledige gevel. Oplevering met 10 jaar garantie." },
            ].map((s) => (
              <div key={s.n} className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-teal-800 text-white font-extrabold text-lg flex items-center justify-center shrink-0">{s.n}</div>
                <div>
                  <h3 className="font-bold text-teal-800 text-lg">{s.title}</h3>
                  <p className="text-gray-500 mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7. TRUST / REVIEWS ═══ */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-3">Wat klanten zeggen</h2>
          <p className="text-center text-gray-500 mb-10">Google 5/5 — echte ervaringen van woningeigenaren in Antwerpen.</p>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { text: "Echte vakmannen die duidelijk weten waar ze mee bezig zijn. Andrii dacht telkens proactief mee en stelde oplossingen voor. Een betrouwbare partner voor wie kwaliteit, communicatie en vakmanschap belangrijk zijn. Absoluut een aanrader!", author: "Woningeigenaar, Antwerpen" },
              { text: "Het team houdt zich aan afspraken en planning. Zij werken zeer nauwkeurig en netjes. De communicatie verloopt vriendelijk, vlot en transparant. Wij zijn zeer tevreden over het eindresultaat.", author: "Woningeigenaar, Antwerpen" },
              { text: "Wij zijn bijzonder tevreden over onze samenwerking. Van bij de start viel de zeer klantgerichte aanpak en duidelijke communicatie op. De renovatie van onze buitengevel met steenstrips werd uiterst professioneel uitgevoerd, en dat bovendien binnen een korte termijn.", author: "Woningeigenaar, Antwerpen" },
              { text: "Recently had my home insulated by ISOPROTECH, the entire experience was excellent. Their professional team did incredible work. The quality of the material used is excellent, have already seen the huge difference on the EPC attest.", author: "Homeowner, Antwerp" },
            ].map((r, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex gap-0.5 mb-3">{Array.from({ length: 5 }).map((_, j) => (<svg key={j} className="h-4 w-4 text-orange-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}</div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">&ldquo;{r.text}&rdquo;</p>
                <p className="text-xs font-bold text-teal-800">{r.author}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-10 text-sm text-gray-500 font-medium">
            <span>Lokaal team in Antwerpen</span>
            <span>Eén vast aanspreekpunt</span>
            <span>Geen verborgen kosten</span>
            <span>10 jaar schriftelijke garantie</span>
          </div>
        </div>
      </section>

      {/* ═══ CTA repeat ═══ */}
      <section className="py-10 bg-teal-800">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <p className="text-white/80 text-lg mb-4">Klaar voor een gevel waar u trots op bent?</p>
          <a href="#offerte" className="btn-primary text-base px-8 py-3.5">Ontvang advies voor uw gevel</a>
        </div>
      </section>

      {/* ═══ 8. PRICE EXPECTATION ═══ */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-4">Wat kost gevelisolatie?</h2>
          <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto">De prijs hangt af van uw specifieke situatie. Deze factoren spelen mee:</p>
          <div className="grid gap-3 sm:grid-cols-2 mb-8">
            {[
              "Oppervlakte van de gevel (m²)",
              "Isolatiedikte en -type",
              "Type afwerking: crepi, spuitkurk of steenstrips",
              "Staat van de bestaande gevel",
              "Stellingen en bereikbaarheid",
              "Vensterbanken, plint en details",
            ].map((f) => (
              <div key={f} className="flex items-center gap-3 p-3 rounded-lg bg-stone-50 border border-gray-100">
                <svg className="h-4 w-4 text-orange-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                <span className="text-sm text-gray-700">{f}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#offerte" className="btn-primary text-sm px-7 py-3">Vraag een prijsindicatie op basis van uw woning aan</a>
          </div>
        </div>
      </section>

      {/* ═══ 9. SUBSIDIES ═══ */}
      <section className="section-padding bg-green-50">
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-4">Premies en subsidies</h2>
          <p className="text-center text-gray-600 mb-6 max-w-xl mx-auto">
            Afhankelijk van uw situatie komt u mogelijk in aanmerking voor renovatie- en isolatiepremies
            via Mijn VerbouwPremie, Fluvius of uw gemeente.
          </p>
          <div className="bg-white rounded-2xl border border-green-200 p-6 text-center">
            <p className="text-gray-600 leading-relaxed mb-4">
              Wij bekijken samen welke mogelijkheden er zijn voor uw situatie en helpen u bij de aanvraag.
              Zo haalt u het maximale uit uw investering.
            </p>
            <a href="#offerte" className="btn-primary text-sm px-6 py-3">Vraag premie-advies aan</a>
          </div>
        </div>
      </section>

      {/* ═══ 10. BEFORE / AFTER ═══ */}
      <section className="section-padding">
        <div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-3">Voor en na</h2>
          <p className="text-center text-gray-500 mb-10">Echte projecten in Antwerpen — geen stockfoto&apos;s.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { before: PHOTOS.gevelBefore1, after: PHOTOS.gevelAfter1, label: "Spuitkurk afwerking" },
              { before: PHOTOS.crepiBefore1, after: PHOTOS.crepiAfter1, label: "Crepi achtergevel" },
              { before: PHOTOS.gevelAntwBefore, after: PHOTOS.gevelAntwAfter, label: "Appartement crepi" },
            ].map((pair) => (
              <div key={pair.label} className="rounded-2xl overflow-hidden bg-white border border-gray-100">
                <div className="grid grid-cols-2 h-52">
                  <div className="relative">
                    <Image src={pair.before.src} alt={pair.before.alt} fill className="object-cover" sizes="25vw" />
                    <span className="absolute bottom-2 left-2 bg-red-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">VOOR</span>
                  </div>
                  <div className="relative">
                    <Image src={pair.after.src} alt={pair.after.alt} fill className="object-cover" sizes="25vw" />
                    <span className="absolute bottom-2 right-2 bg-green-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">NA</span>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <span className="text-sm font-bold text-teal-800">{pair.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 11. FAQ ═══ */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-10">Veelgestelde vragen</h2>
          <div className="space-y-4">
            {[
              { q: "Wat kost gevelisolatie?", a: "De prijs hangt af van de oppervlakte, het isolatiemateriaal, de afwerking en de staat van uw gevel. Gemiddeld liggen de kosten voor een volledige gevel in Antwerpen tussen €12.000 en €35.000 inclusief btw. Wij geven u een exacte prijs na de gratis inspectie." },
              { q: "Kom ik in aanmerking voor premie?", a: "Dat hangt af van het bouwjaar, de isolatiewaarde en uw gemeente. Wij bekijken dit samen bij de inspectie en helpen u met de aanvraag als u in aanmerking komt." },
              { q: "Hoe lang duren de werken?", a: "Gemiddeld 1 tot 2 weken voor een volledige gevel, afhankelijk van de grootte en complexiteit. Wij plannen alles duidelijk in zodat u weet wat u kunt verwachten." },
              { q: "Moet ik thuis zijn tijdens de werken?", a: "Niet noodzakelijk. Alle werken gebeuren aan de buitenzijde. Wel vragen wij om bij de start- en eindoplevering aanwezig te zijn." },
              { q: "Welke afwerking is het beste?", a: "Dat hangt af van uw voorkeur en budget. Crepi is het meest populair en budgetvriendelijk. Spuitkurk is naadloos en vochtbestendig. Steenstrips bieden een authentieke klinkerlook. Wij adviseren u graag." },
              { q: "Is crepi beter dan spuitkurk?", a: "Beide hebben hun voordelen. Crepi geeft een strakke minerale uitstraling, spuitkurk is flexibeler en dekt oneffenheden beter af. De beste keuze hangt af van uw gevel en esthetische voorkeur." },
              { q: "Werken jullie in mijn regio?", a: "Wij werken in heel Antwerpen en omgeving: Wilrijk, Mortsel, Schilde, Ekeren, Schoten, Brasschaat, Kapellen, Kontich, Edegem, Mechelen en meer." },
              { q: "Is een gratis inspectie echt gratis?", a: "Ja, volledig. Wij komen langs, bekijken uw gevel, bespreken uw wensen en geven advies. Zonder verplichting, zonder kosten." },
            ].map((faq) => (
              <details key={faq.q} className="group rounded-xl border border-gray-100 bg-white">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-teal-800 text-sm">
                  {faq.q}
                  <svg className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 12. FINAL CTA + FORM ═══ */}
      <section id="offerte" className="section-padding">
        <div className="container-wide max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-3">
            Wilt u weten wat gevelisolatie voor uw woning kan betekenen?
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Vul het formulier in en wij nemen contact op voor een eerste inschatting. Geen verplichting.
          </p>
          <ContactForm />
          <p className="text-xs text-gray-400 text-center mt-4">Geen verplichting. We nemen contact op voor een eerste inschatting.</p>
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500 mb-2">Liever direct contact?</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={`tel:${BRAND.phone}`} className="btn-outline text-sm px-5 py-2.5">{BRAND.phoneDisplay}</a>
              <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm px-5 py-2.5 inline-flex items-center gap-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492l4.625-1.465A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STICKY MOBILE CTA ═══ */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-gray-200 p-3 flex gap-3 sm:hidden">
        <a href={`tel:${BRAND.phone}`} className="btn-primary flex-1 text-center text-sm py-3">Bel nu</a>
        <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 text-center text-sm py-3">WhatsApp</a>
      </div>
    </>
  );
}
