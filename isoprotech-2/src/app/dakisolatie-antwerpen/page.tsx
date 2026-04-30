// src/app/dakisolatie-antwerpen/page.tsx
// High-conversion landing page for dakisolatie — Google Ads / Meta Ads

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BRAND, PHOTOS } from "@/lib/constants";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Dakisolatie Antwerpen — Minder Warmteverlies, Meer Comfort | ISOPROTECH",
  description: "Dakisolatie en dakrenovatie in Antwerpen. Plat en hellend dak. Premie-advies inbegrepen. Gratis inspectie, vaste prijs, 10 jaar garantie. Bel +32 465 88 27 01.",
  keywords: ["dakisolatie antwerpen", "dakisolatie prijs", "dakrenovatie antwerpen", "plat dak isoleren", "dak renoveren antwerpen", "dakisolatie premie"],
  alternates: { canonical: `${BRAND.url}/dakisolatie-antwerpen` },
};

export default function DakisolatieLanding() {
  return (
    <>
      {/* ═══ 1. HERO ═══ */}
      <section className="relative min-h-[580px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={PHOTOS.dakisolatieService.src} alt={PHOTOS.dakisolatieService.alt} fill className="object-cover" priority sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-900/70" />
        <div className="relative container-wide py-28">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-white leading-[1.15] mb-5">
              Tot 30% minder warmteverlies met professionele dakisolatie in Antwerpen
            </h1>
            <p className="text-lg text-white/75 leading-relaxed mb-6">
              ISOPROTECH isoleert en renoveert uw dak van A tot Z. Plat of hellend — wij regelen
              alles inclusief premie-aanvraag. Eén aanspreekpunt, vaste prijs, 10 jaar garantie.
            </p>
            <div className="flex flex-col gap-2 mb-8">
              {["Gratis inspectie ter plaatse", "Premie-advies op maat", "Vaste prijs zonder verrassingen", "10 jaar garantie op de werken"].map((t) => (
                <div key={t} className="flex items-center gap-2.5">
                  <svg className="h-5 w-5 text-orange-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  <span className="text-white/90 text-sm font-medium">{t}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#offerte" className="btn-primary text-base px-7 py-3.5">Plan uw gratis dakinspectie</a>
              <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline-light text-base px-7 py-3.5 inline-flex items-center gap-2">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492l4.625-1.465A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. PROBLEM ═══ */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-4">Herkent u dit?</h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">Een slecht dak kost u elke dag geld en comfort.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Koud in de winter, heet in de zomer", desc: "Uw bovenverdieping is oncomfortabel. De warmte verdwijnt via het dak of de hitte komt binnen." },
              { title: "Stijgende energierekening", desc: "Tot 30% van uw warmte gaat verloren via een ongeïsoleerd dak." },
              { title: "Lekkages of vochtproblemen", desc: "Verouderde dakbedekking lekt water door. Schimmelvorming en houtrot als gevolg." },
              { title: "Verouderd dak", desc: "Uw dakpannen of roofing zijn aan het eind van hun levensduur." },
              { title: "Onduidelijkheid over premies", desc: "U weet dat er subsidies bestaan maar niet welke voor u gelden." },
              { title: "Asbest in het dak?", desc: "Woningen vóór 1990 bevatten vaak asbest. Verwijdering is wettelijk verplicht vóór dakwerken." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-100 p-5 bg-white">
                <h3 className="font-bold text-teal-800 text-sm mb-1.5">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. SOLUTION ═══ */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-10">Wat dakisolatie voor uw woning doet</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { icon: <svg className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" /></svg>, title: "Tot 30% energiebesparing", desc: "Dakisolatie is de meest rendabele energiemaatregel. Terugverdientijd van 5 tot 8 jaar." },
              { icon: <svg className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>, title: "Comfortabel wonen", desc: "Warm in de winter, koel in de zomer. Geen onaangename tocht of hitte meer op de bovenverdieping." },
              { icon: <svg className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>, title: "Bescherming van uw woning", desc: "Een goed dak beschermt tegen water, vocht en houtrot. Levensduur 30+ jaar bij correct onderhoud." },
              { icon: <svg className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>, title: "Premies mogelijk", desc: "Via Mijn VerbouwPremie kunt u mogelijk een deel recupereren. Wij bekijken uw situatie en helpen bij de aanvraag." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start p-5 rounded-xl bg-white border border-gray-100">
                <div className="shrink-0 mt-0.5">{item.icon}</div>
                <div><h3 className="font-bold text-teal-800 mb-1">{item.title}</h3><p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-10 bg-teal-800">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <p className="text-white/80 text-lg mb-4">Benieuwd wat dakisolatie voor uw woning kan opleveren?</p>
          <a href="#offerte" className="btn-primary text-base px-8 py-3.5">Plan uw gratis dakinspectie</a>
        </div>
      </section>

      {/* ═══ 4. SERVICES ═══ */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-10">Wat wij voor u doen</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { photo: PHOTOS.platDak, title: "Plat dak isolatie", desc: "PIR-platen + nieuwe waterdichte bedekking (EPDM, roofing of PVC). Warm-dak principe." },
              { photo: PHOTOS.dakrenovatie, title: "Hellend dak renovatie", desc: "Volledige dakrenovatie met isolatie, onderdak en nieuwe dakbedekking naar keuze." },
              { photo: PHOTOS.dakSchouw, title: "Details en afwerking", desc: "Schouwkappen, loodaansluitingen, dakramen — elk detail waterdicht en correct afgewerkt." },
              { photo: PHOTOS.dakkapellen, title: "Dakkapellen", desc: "Extra leefruimte en licht. Volledig geïntegreerd in uw bestaande dakstructuur." },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl overflow-hidden bg-white border border-gray-100">
                <div className="relative h-48"><Image src={s.photo.src} alt={s.photo.alt} fill className="object-cover" sizes="50vw" /></div>
                <div className="p-5"><h3 className="font-bold text-teal-800 mb-1.5">{s.title}</h3><p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. OFFER + 6. PROCESS ═══ */}
      <section className="section-padding bg-orange-50">
        <div className="container-wide max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold text-teal-800 mb-4">U hoeft nog niet te beslissen</h2>
          <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
            We bekijken eerst uw dak, luisteren naar uw wensen en geven duidelijk advies.
            Pas daarna ontvangt u een heldere offerte — zonder verplichtingen.
          </p>
        </div>
        <div className="container-wide max-w-3xl mx-auto">
          <div className="space-y-8">
            {[
              { n: "1", title: "Gratis aanvraag", desc: "Vul het formulier in of stuur een WhatsApp. Wij nemen binnen 48 uur contact op." },
              { n: "2", title: "Inspectie ter plaatse", desc: "Onze vakman bekijkt uw dak, bespreekt uw wensen en de mogelijkheden." },
              { n: "3", title: "Vaste offerte + premie-overzicht", desc: "Heldere prijs met breakdown plus overzicht van beschikbare premies." },
              { n: "4", title: "Professionele uitvoering", desc: "Ons team renoveert uw dak. Gemiddeld 3 tot 5 werkdagen. Oplevering met 10 jaar garantie." },
            ].map((s) => (
              <div key={s.n} className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-teal-800 text-white font-extrabold text-lg flex items-center justify-center shrink-0">{s.n}</div>
                <div><h3 className="font-bold text-teal-800 text-lg">{s.title}</h3><p className="text-gray-500 mt-1 leading-relaxed">{s.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7. REVIEWS ═══ */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-3">Wat klanten zeggen</h2>
          <p className="text-center text-gray-500 mb-10">Google 5/5 — echte ervaringen.</p>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { text: "Echte vakmannen die duidelijk weten waar ze mee bezig zijn. Andrii dacht telkens proactief mee. Een betrouwbare partner voor wie kwaliteit en communicatie belangrijk zijn.", author: "Woningeigenaar, Antwerpen" },
              { text: "Recently had my home insulated by ISOPROTECH, the entire experience was excellent. Their professional team did incredible work. Have already seen the huge difference on the EPC attest.", author: "Homeowner, Antwerp" },
            ].map((r, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex gap-0.5 mb-3">{Array.from({ length: 5 }).map((_, j) => (<svg key={j} className="h-4 w-4 text-orange-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}</div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">&ldquo;{r.text}&rdquo;</p>
                <p className="text-xs font-bold text-teal-800">{r.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. PREMIES ═══ */}
      <section className="section-padding bg-green-50">
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-4">Premies en subsidies</h2>
          <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
            Via Mijn VerbouwPremie kunt u mogelijk een deel van uw dakisolatiekosten recupereren.
            Het premiebedrag hangt af van uw inkomenscategorie en de uitgevoerde werken.
          </p>
          <div className="bg-white rounded-2xl border border-green-200 p-6">
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex gap-3 items-start">
                <svg className="h-5 w-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                <span><strong className="text-teal-800">Mijn VerbouwPremie</strong> — voor gebouwen aangesloten vóór 1 januari 2006. Premiebedrag afhankelijk van uw inkomen en gezinssituatie.</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="h-5 w-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                <span><strong className="text-teal-800">Verlaagd btw-tarief</strong> — 6% i.p.v. 21% voor woningen ouder dan 10 jaar.</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="h-5 w-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                <span><strong className="text-teal-800">Asbestverwijderingsbonus</strong> — extra €8/m² bij combinatie van dakisolatie met asbestverwijdering.</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="h-5 w-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                <span><strong className="text-teal-800">Lokale premies</strong> — sommige gemeenten bieden aanvullende premies. Wij checken dit voor u.</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-5">Let op: sinds 1 maart 2026 komen de twee hoogste inkomenscategorieën niet meer in aanmerking voor Mijn VerbouwPremie voor isolatiewerken. Wij bekijken samen welke mogelijkheden er zijn voor uw specifieke situatie.</p>
            <div className="text-center mt-5">
              <a href="#offerte" className="btn-primary text-sm px-6 py-3">Vraag premie-advies aan</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 11. FAQ ═══ */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-10">Veelgestelde vragen</h2>
          <div className="space-y-4">
            {[
              { q: "Wat kost dakisolatie?", a: "De prijs hangt af van het type dak, de oppervlakte, de dakbedekking en extra elementen zoals dakramen of schouwen. Gemiddeld liggen de kosten tussen €15.000 en €40.000 inclusief btw. Wij geven u een exacte prijs na de gratis inspectie." },
              { q: "Plat of hellend dak — wat is het verschil?", a: "Bij een plat dak werken wij met het warm-dak principe: PIR-isolatie bovenop de constructie + nieuwe waterdichte bedekking. Bij een hellend dak wordt de isolatie tussen of bovenop de spanten aangebracht, gevolgd door nieuwe pannen of leien." },
              { q: "Hoe lang duren de werken?", a: "Gemiddeld 3 tot 5 werkdagen voor een volledig dak, afhankelijk van de grootte en complexiteit." },
              { q: "Kom ik in aanmerking voor premie?", a: "Dat hangt af van het bouwjaar, de bereikte isolatiewaarde en uw gemeente. Wij bekijken dit bij de inspectie en helpen u met de aanvraag." },
              { q: "Moet mijn dak asbest bevatten worden verwijderd?", a: "Bij woningen vóór 1990 is een asbestinventarisatie wettelijk verplicht vóór dakwerken. ISOPROTECH begeleidt u hierbij volledig." },
              { q: "Is de gratis inspectie echt gratis?", a: "Ja, volledig. Wij bekijken uw dak, bespreken de mogelijkheden en geven advies. Zonder verplichting." },
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
            Wilt u weten wat dakisolatie voor uw woning kan betekenen?
          </h2>
          <p className="text-center text-gray-500 mb-8">Vul het formulier in. Geen verplichting — wij nemen contact op voor een eerste inschatting.</p>
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
