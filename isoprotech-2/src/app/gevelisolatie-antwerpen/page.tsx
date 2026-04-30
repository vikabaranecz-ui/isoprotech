// src/app/gevelisolatie-antwerpen/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BRAND, PHOTOS } from "@/lib/constants";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Gevelisolatie Antwerpen — Gratis Inspectie | ISOPROTECH",
  description: "Buitengevelisolatie in Antwerpen met 10 jaar garantie. Crepi, spuitkurk of steenstrips. Gratis inspectie, vaste prijs. Bel +32 465 88 27 01.",
  alternates: { canonical: `${BRAND.url}/gevelisolatie-antwerpen` },
  openGraph: {
    title: "Gevelisolatie Antwerpen — ISOPROTECH",
    description: "Professionele buitengevelisolatie met crepi, spuitkurk of steenstrips. 10 jaar garantie. Gratis inspectie.",
  },
};

export default function GevelisolatieLanding() {
  return (
    <>
      {/* HERO — 3 seconds to convert */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={PHOTOS.gevelCrepiMeise.src} alt={PHOTOS.gevelCrepiMeise.alt} fill className="object-cover" priority sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-teal-900/80" />
        <div className="relative container-wide py-28 max-w-3xl mx-auto text-center">
          <span className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-bold px-4 py-1.5 rounded-full mb-5">
            Antwerpen en omgeving
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-5">
            Gevelisolatie met <span className="text-orange-400">10 jaar garantie</span>
          </h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
            Uw gevel isoleren en afwerken met crepi, spuitkurk of steenstrips.
            Vaste prijs, geen verrassingen. Gratis inspectie binnen 48u.
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
          <span>Vaste prijs</span>
        </div>
      </div>

      {/* PROBLEM → SOLUTION */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-10">
            Waarom uw gevel isoleren?
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: <svg className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>, title: "Tot 35% besparing", desc: "Op uw jaarlijkse verwarmingskosten. De investering verdient zichzelf terug." },
              { icon: <svg className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" /></svg>, title: "Nieuwe uitstraling", desc: "Uw woning ziet eruit als nieuw. Keuze uit crepi, spuitkurk of steenstrips." },
              { icon: <svg className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>, title: "Hogere woningwaarde", desc: "Beter EPC-label = hogere verkoopwaarde. Gemiddeld +5% tot +10% meerwaarde." },
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

      {/* BEFORE / AFTER */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-3">Voor en na</h2>
          <p className="text-center text-gray-500 mb-10">Echte projecten in Antwerpen — geen stockfoto&apos;s.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { before: PHOTOS.gevelBefore1, after: PHOTOS.gevelAfter1, label: "Spuitkurk afwerking" },
              { before: PHOTOS.crepiBefore1, after: PHOTOS.crepiAfter1, label: "Crepi achtergevel" },
              { before: PHOTOS.gevelAntwBefore, after: PHOTOS.gevelAntwAfter, label: "Appartement crepi" },
            ].map((pair) => (
              <div key={pair.label} className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm">
                <div className="grid grid-cols-2 h-48">
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

      {/* HOW IT WORKS */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-10">Hoe werkt het?</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Gratis inspectie", desc: "Onze vakman komt langs, meet op en adviseert — volledig vrijblijvend." },
              { step: "2", title: "Vaste offerte", desc: "U ontvangt een heldere offerte met vaste prijs. Geen verrassingen achteraf." },
              { step: "3", title: "Uitvoering", desc: "Ons team isoleert en werkt uw gevel af. Gemiddeld 1 tot 2 weken voor een volledige woning." },
              { step: "4", title: "Oplevering + garantie", desc: "Eindcontrole, schoonmaak en 10 jaar schriftelijke garantie." },
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

      {/* CALCULATOR CTA */}
      <section className="section-padding bg-teal-800">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Bereken uw gevelprijs in 2 minuten</h2>
          <p className="text-white/60 mb-8">Gebruik onze calculator voor een indicatieve richtprijs op maat.</p>
          <Link href="/calculator" className="btn-primary text-base px-10 py-4">
            Start gevelcalculator
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
              { text: "Echte vakmannen die duidelijk weten waar ze mee bezig zijn. Andrii dacht telkens proactief mee en stelde oplossingen voor. Een betrouwbare partner voor wie kwaliteit en communicatie belangrijk zijn.", author: "Klant via Google", rating: 5 },
              { text: "Het team houdt zich aan afspraken en planning. Zij werken zeer nauwkeurig en netjes. De communicatie verloopt vriendelijk, vlot en transparant. Wij zijn zeer tevreden over het eindresultaat.", author: "Klant via Google", rating: 5 },
              { text: "Wij zijn bijzonder tevreden. Van bij de start viel de klantgerichte aanpak en duidelijke communicatie op. De renovatie van onze buitengevel met steenstrips werd uiterst professioneel uitgevoerd.", author: "Klant via Google", rating: 5 },
              { text: "Recently had my home insulated by ISOPROTECH, the entire experience was excellent. Their professional team did incredible work. Have already seen the huge difference on the EPC attest.", author: "Klant via Google", rating: 5 },
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
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
