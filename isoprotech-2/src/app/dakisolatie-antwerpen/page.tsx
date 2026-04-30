// src/app/dakisolatie-antwerpen/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BRAND, PHOTOS } from "@/lib/constants";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Dakisolatie Antwerpen — Gratis Inspectie | ISOPROTECH",
  description: "Dakisolatie en dakrenovatie in Antwerpen met 10 jaar garantie. Plat en hellend dak. Gratis inspectie, vaste prijs. Bel +32 465 88 27 01.",
  alternates: { canonical: `${BRAND.url}/dakisolatie-antwerpen` },
  openGraph: {
    title: "Dakisolatie Antwerpen — ISOPROTECH",
    description: "Professionele dakisolatie en dakrenovatie. 10 jaar garantie. Gratis inspectie binnen 48u.",
  },
};

export default function DakisolatieLanding() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={PHOTOS.dakisolatieService.src} alt={PHOTOS.dakisolatieService.alt} fill className="object-cover" priority sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-teal-900/80" />
        <div className="relative container-wide py-28 max-w-3xl mx-auto text-center">
          <span className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-bold px-4 py-1.5 rounded-full mb-5">
            Antwerpen en omgeving
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-5">
            Dakisolatie met <span className="text-orange-400">10 jaar garantie</span>
          </h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
            Plat of hellend dak — wij isoleren en renoveren uw dak compleet.
            Inclusief premie-aanvraag. Gratis inspectie binnen 48u.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${BRAND.phone}`} className="btn-primary text-base px-8 py-4">
              Bel nu — {BRAND.phoneDisplay}
            </a>
            <a href="#offerte" className="btn-outline-light text-base px-8 py-4">
              Gratis offerte aanvragen
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="container-wide flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-medium text-teal-800">
          <span>Google 5/5</span>
          <span>10 jaar garantie</span>
          <span>ATG/BENOR-gekeurd</span>
          <span>Gratis inspectie</span>
          <span>Premies tot €5.200</span>
        </div>
      </div>

      {/* WHY */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-10">
            Waarom uw dak isoleren?
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: "🔥", title: "Tot 30% warmteverlies", desc: "Via een slecht geïsoleerd dak. Dakisolatie is de meest rendabele energiemaatregel." },
              { icon: "💶", title: "Tot €5.200 premies", desc: "Fluvius + Mijn VerbouwPremie + gemeentelijke premie Antwerpen. Wij regelen de aanvraag." },
              { icon: "🛡️", title: "10 jaar garantie", desc: "Op materiaal én arbeid. Schriftelijke garantie bij elk project." },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-2xl bg-stone-50 border border-gray-100">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-bold text-teal-800 mt-3 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-10">Wat wij doen</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { photo: PHOTOS.platDak, title: "Plat dak", desc: "Isolatie met PIR-platen + nieuwe waterdichte bedekking (EPDM, roofing of PVC). Warm-dak principe voor maximale prestaties." },
              { photo: PHOTOS.dakrenovatie, title: "Hellend dak", desc: "Volledige dakrenovatie met isolatie, onderdak en nieuwe dakbedekking. Pannen, leien of shingles naar keuze." },
              { photo: PHOTOS.dakSchouw, title: "Schouw & details", desc: "Correcte loodaansluitingen, schouwkappen en dakdoorvoeren. Elk detail waterdicht afgewerkt." },
              { photo: PHOTOS.dakkapellen, title: "Dakkapellen", desc: "Extra leefruimte en licht in uw woning. Volledig geïntegreerd in de dakstructuur." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm">
                <div className="relative h-48">
                  <Image src={item.photo.src} alt={item.photo.alt} fill className="object-cover" sizes="50vw" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-teal-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-10">Hoe werkt het?</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Gratis inspectie", desc: "Onze vakman bekijkt uw dak, meet op en adviseert over de beste aanpak." },
              { step: "2", title: "Vaste offerte + premie-overzicht", desc: "Heldere offerte met vaste prijs plus overzicht van alle beschikbare premies." },
              { step: "3", title: "Uitvoering", desc: "Ons team isoleert en renoveert uw dak. Gemiddeld 3 tot 5 werkdagen." },
              { step: "4", title: "Oplevering + premie-aanvraag", desc: "Eindcontrole, schriftelijke garantie en wij helpen u met de premie-aanvraag." },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 items-start">
                <div className="w-11 h-11 rounded-xl bg-orange-500 text-white font-extrabold text-lg flex items-center justify-center shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-teal-800">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIES */}
      <section className="section-padding bg-green-50">
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-3">Premies voor dakisolatie</h2>
          <p className="text-center text-gray-500 mb-8">Combineer premies voor maximaal voordeel.</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { name: "Fluvius", amount: "tot €3.500", desc: "€7/m², max €3.500 bij R-waarde ≥ 4.5" },
              { name: "Mijn VerbouwPremie", amount: "tot €1.200", desc: "Voor woningen gebouwd vóór 2006" },
              { name: "Gemeente Antwerpen", amount: "tot €500", desc: "Bij dakoppervlakte vanaf 40 m²" },
            ].map((p) => (
              <div key={p.name} className="bg-white rounded-2xl border border-green-200 p-5 text-center">
                <div className="text-2xl font-black text-green-600 mb-1">{p.amount}</div>
                <div className="font-bold text-teal-800 mb-1">{p.name}</div>
                <p className="text-xs text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR CTA */}
      <section className="section-padding bg-teal-800">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Bereken uw dakprijs in 2 minuten</h2>
          <p className="text-white/60 mb-8">Inclusief premie-overzicht en indicatieve netto-investering.</p>
          <Link href="/calculator/dak" className="btn-primary text-base px-10 py-4">
            Start dakcalculator
          </Link>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-3">Wat klanten zeggen</h2>
          <p className="text-center text-gray-500 mb-10">Google 5/5 — echte ervaringen.</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { text: "Echte vakmannen die duidelijk weten waar ze mee bezig zijn. Andrii dacht telkens proactief mee en stelde oplossingen voor. Een betrouwbare partner voor wie kwaliteit en communicatie belangrijk zijn.", author: "Klant via Google" },
              { text: "Recently had my home insulated by ISOPROTECH, the entire experience was excellent. Their professional team did incredible work. Have already seen the huge difference on the EPC attest.", author: "Klant via Google" },
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} className="h-4 w-4 text-orange-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">&ldquo;{review.text}&rdquo;</p>
                <p className="text-xs font-bold text-teal-800">{review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="offerte" className="section-padding">
        <div className="container-wide max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-3">Gratis offerte aanvragen</h2>
          <p className="text-center text-gray-500 mb-8">Wij nemen binnen 48u contact op voor een gratis inspectie.</p>
          <ContactForm />
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-gray-200 p-3 flex gap-3 sm:hidden">
        <a href={`tel:${BRAND.phone}`} className="btn-primary flex-1 text-center text-sm py-3">
          Bel nu
        </a>
        <a href={BRAND.whatsapp} className="btn-outline flex-1 text-center text-sm py-3">
          WhatsApp
        </a>
      </div>
    </>
  );
}
