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
              { icon: <svg className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" /></svg>, title: "Tot 30% warmteverlies", desc: "Via een slecht geïsoleerd dak. Dakisolatie is de meest rendabele energiemaatregel." },
              { icon: <svg className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>, title: "Tot €5.200 premies", desc: "Fluvius + Mijn VerbouwPremie + gemeentelijke premie Antwerpen. Wij regelen de aanvraag." },
              { icon: <svg className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>, title: "10 jaar garantie", desc: "Op materiaal én arbeid. Schriftelijke garantie bij elk project." },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-2xl bg-stone-50 border border-gray-100">
                <div className="flex justify-center mb-3">{item.icon}</div>
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
