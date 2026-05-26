// src/components/calculators/DakCalculator.tsx
"use client";

import { useState, useMemo } from "react";
import {
  calculateDak,
  formatEur,
  PLAT_DAK_OPTIES,
  HELLEND_DAK_OPTIES,
  type DakType,
  type DakIsolatieType,
  type Bouwjaar,
} from "@/lib/calculator";
import { track } from "@/lib/tracking";
import { ProgressBar, RadioCard, NumberInput, StepNav } from "./CalcUI";

// 5 config steps — contact info is OPTIONAL on the result screen
const STEPS = ["Daktype", "Oppervlakte", "Bedekking", "Isolatie", "Bouwjaar"];

export function DakCalculator() {
  const [step, setStep] = useState(0);
  const [daktype, setDaktype] = useState<DakType | null>(null);
  const [area, setArea] = useState(80);
  const [dakramen, setDakramen] = useState(0);
  const [schouwen, setSchouwen] = useState(0);
  const [bedekking, setBedekking] = useState<string | null>(null);
  const [bedekkingSurcharge, setBedekkingSurcharge] = useState(0);
  const [isolatie, setIsolatie] = useState<DakIsolatieType | null>(null);
  const [bouwjaar, setBouwjaar] = useState<Bouwjaar | null>(null);

  // Result screen state
  const [showResult, setShowResult] = useState(false);
  // Optional contact fields on result screen
  const [qNaam, setQNaam] = useState("");
  const [qTelefoon, setQTelefoon] = useState("");
  const [ctaSent, setCtaSent] = useState(false);

  const bedekkingOpts = daktype === "Plat dak" ? PLAT_DAK_OPTIES : HELLEND_DAK_OPTIES;

  const canNext = useMemo(() => {
    switch (step) {
      case 0: return !!daktype;
      case 1: return area >= 10;
      case 2: return !!bedekking;
      case 3: return !!isolatie;
      case 4: return !!bouwjaar;
      default: return false;
    }
  }, [step, daktype, area, bedekking, isolatie, bouwjaar]);

  const result = useMemo(() => {
    if (!daktype || !bedekking || !isolatie || !bouwjaar) return null;
    return calculateDak({
      daktype,
      area,
      dakramen,
      schouwen,
      dakbedekking: bedekking,
      dakbedekkingSurcharge: bedekkingSurcharge,
      isolatie,
      bouwjaar,
    });
  }, [daktype, area, dakramen, schouwen, bedekking, bedekkingSurcharge, isolatie, bouwjaar]);

  function handleNext() {
    if (!canNext) return;
    if (step === 1 && bedekkingOpts.length === 1) {
      setBedekking(bedekkingOpts[0].name);
      setBedekkingSurcharge(bedekkingOpts[0].surcharge);
      setStep(3);
      return;
    }
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Step 4 → show result immediately, no gate
      setShowResult(true);
      if (result) {
        track.calculatorComplete("dak", result.grossMin, result.grossMax);
      }
    }
  }

  function handleBack() {
    if (showResult) {
      setShowResult(false);
    } else if (step === 3 && bedekkingOpts.length === 1) {
      setStep(1);
    } else if (step > 0) {
      setStep(step - 1);
    }
  }

  function handleWhatsApp() {
    const lines = [
      "🏠 *Dakcalculator aanvraag via isoprotech.be*",
      "",
      qNaam ? `👤 Naam: ${qNaam}` : null,
      qTelefoon ? `📞 Telefoon: ${qTelefoon}` : null,
      "",
      `🏗️ Daktype: ${daktype}`,
      `📐 Oppervlakte: ${area} m²`,
      `🔧 Dakbedekking: ${bedekking}`,
      `🧱 Isolatie: ${isolatie}`,
      `📅 Bouwjaar: ${bouwjaar}`,
      result ? `💰 Richtprijs: ${formatEur(result.gross)} (incl. BTW)` : null,
    ].filter(Boolean).join("\n");

    window.open(
      `https://wa.me/32470802020?text=${encodeURIComponent(lines)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setCtaSent(true);

    // Send to API only if contact info provided
    if (qNaam.trim() && qTelefoon.trim()) {
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: qNaam,
          phone: qTelefoon,
          service: "dakwerken",
          message: `Dakcalculator: ${daktype}, ${area}m², ${bedekking}, ${isolatie}, ${bouwjaar}${result ? `, ${formatEur(result.gross)}` : ""}`,
          privacy: true,
        }),
      }).catch(() => {});
    }
  }

  const ic = "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 transition bg-white placeholder:text-gray-400";

  // ─── RESULT VIEW ─────────────────────────────────────────
  if (showResult && result) {
    return (
      <div className="max-w-2xl mx-auto animate-fadeInUp">
        <div className="inline-block bg-green-100 text-green-800 border border-green-200 px-3 py-1.5 rounded-full text-xs font-bold mb-4">
          ✓ Uw richtprijs is klaar
        </div>

        <h2 className="text-2xl font-extrabold text-teal-800 mb-1">
          Dakprijs — vrijblijvende schatting
        </h2>
        <p className="text-sm text-gray-500 mb-5">
          Exacte prijs na gratis plaatsbezoek in Antwerpen.
        </p>

        {/* Summary pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[result.daktype, `${result.area} m²`, result.dakbedekking, result.isolatie].map((pill) => (
            <span key={pill} className="bg-stone-100 border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full text-xs font-bold">
              {pill}
            </span>
          ))}
        </div>

        {/* Price card */}
        <div className="rounded-2xl border border-gray-200 shadow-lg overflow-hidden bg-white mb-5">
          <div className="flex flex-wrap gap-6 p-5 bg-gradient-to-b from-orange-50 to-white">
            <div className="flex-1 min-w-[200px]">
              <div className="text-xs font-bold text-gray-500 mb-1">Bruto richtprijs incl. BTW</div>
              <div className="text-3xl font-black text-teal-800">{formatEur(result.gross)}</div>
              <div className="text-xs text-gray-400 mt-1">Bandbreedte: {formatEur(result.grossMin)} – {formatEur(result.grossMax)}</div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="text-xs font-bold text-gray-500 mb-1">Na premies</div>
              <div className="text-3xl font-black text-green-600">{formatEur(result.net)}</div>
              <div className="text-xs text-green-600 mt-1">- {formatEur(result.premieTotal)} premies</div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-100 space-y-2">
            <div className="flex justify-between text-sm"><span className="font-bold text-gray-700">Werken (materiaal + arbeid)</span><span className="text-gray-500">{formatEur(result.base)}</span></div>
            <div className="flex justify-between text-sm"><span className="font-bold text-gray-700">Dakbedekking</span><span className="text-gray-500">{formatEur(result.dakbedekkingKost)}</span></div>
            <div className="flex justify-between text-sm"><span className="font-bold text-gray-700">Extra elementen</span><span className="text-orange-400">{result.extrasKost > 0 ? formatEur(result.extrasKost) : "—"}</span></div>
            <div className="flex justify-between text-sm"><span className="font-bold text-gray-700">Geschatte premies</span><span className="text-green-600">- {formatEur(result.premieTotal)}</span></div>
          </div>
        </div>

        {/* Premies card */}
        {result.premies.length > 0 && (
          <div className="rounded-2xl bg-green-50 border border-green-200 p-4 mb-4">
            <h4 className="font-bold text-green-700 mb-3 text-sm">Premies die u kan aanvragen</h4>
            {result.premies.map((p) => (
              <div key={p.name} className="flex justify-between py-1.5 text-sm font-bold text-green-800">
                <span>{p.name}</span>
                <span>tot {formatEur(p.amount)}</span>
              </div>
            ))}
          </div>
        )}

        {/* Asbest warning */}
        {result.asbestRequired && (
          <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4 mb-4 text-sm text-amber-800">
            <strong>Asbestinventarisatie vereist</strong>
            <br />
            Uw woning dateert van vóór 1990. Een wettelijke asbestinventarisatie is
            verplicht vóór dakwerken in België. Isoprotech begeleidt u van A tot Z.
          </div>
        )}

        {/* ── CTA BLOCK — no required fields, contact is optional ── */}
        <div className="rounded-2xl bg-orange-50 border border-orange-300 p-5 mb-4">
          <h4 className="font-bold text-teal-800 mb-1 text-base">Plan gratis plaatsbezoek — vrijblijvend</h4>
          <p className="text-sm text-gray-600 mb-4">
            Onze vakman meet exact op in Antwerpen en geeft u een vaste prijs. Gratis, binnen 48u.
          </p>

          {!ctaSent ? (
            <div className="space-y-3">
              {/* Optional contact fields */}
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  className={ic}
                  placeholder="Uw naam (optioneel)"
                  value={qNaam}
                  onChange={(e) => setQNaam(e.target.value)}
                  autoComplete="name"
                />
                <input
                  className={ic}
                  type="tel"
                  placeholder="Telefoon (optioneel)"
                  value={qTelefoon}
                  onChange={(e) => setQTelefoon(e.target.value)}
                  autoComplete="tel"
                />
              </div>
              <button
                onClick={handleWhatsApp}
                className="btn-primary w-full text-sm"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.1-1.13l-.29-.174-3.01.79.8-2.93-.19-.3A7.96 7.96 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
                Plan gratis plaatsbezoek via WhatsApp
              </button>
              <p className="text-[11px] text-gray-400 text-center">
                Geen verplichte velden — klik direct of vul eerst uw naam/telefoon in.
              </p>
            </div>
          ) : (
            <div className="text-green-700 font-bold text-sm">
              WhatsApp wordt geopend!
              <br />
              <span className="font-normal">Klik op &ldquo;Verstuur&rdquo; in WhatsApp om uw aanvraag te bevestigen.</span>
            </div>
          )}

          <p className="text-xs text-gray-400 mt-3 text-center">Gratis · Vrijblijvend · Binnen 48u contact</p>
        </div>

        {/* Alternative: call */}
        <div className="rounded-xl border border-gray-200 p-4 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white mb-4">
          <div>
            <p className="text-sm font-bold text-teal-800">Liever direct bellen?</p>
            <p className="text-xs text-gray-500">Ma – Vr 08:00–18:00, Za 09:00–14:00</p>
          </div>
          <a href="tel:+32465882701" className="btn-outline text-sm px-5 py-2.5 whitespace-nowrap">
            +32 465 88 27 01
          </a>
        </div>

        {/* Trust + disclaimer */}
        <p className="text-center text-xs text-gray-400 mb-1">Google 5/5 · ATG & BENOR · 10 jaar garantie · Antwerpen</p>
        <p className="text-center text-[11px] text-gray-300">* Richtprijs op basis van uw gegevens. Exacte prijs na gratis plaatsbezoek.</p>

        {/* Back button */}
        <div className="mt-6">
          <button onClick={handleBack} className="btn-outline text-sm">← Terug naar calculator</button>
        </div>
      </div>
    );
  }

  // ─── STEP VIEWS ──────────────────────────────────────────
  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div>
            <h2 className="text-xl font-extrabold text-teal-800 mb-1">Wat voor dak heeft uw woning?</h2>
            <p className="text-sm text-gray-500 mb-5">Dit bepaalt de isolatiemethode en beschikbare dakbedekkingen.</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <RadioCard selected={daktype === "Plat dak"} onClick={() => { setDaktype("Plat dak"); setBedekking(null); }} title="Plat dak (helling onder 15°)" desc="Warm-dak principe met membraanopbouw" />
              <RadioCard selected={daktype === "Hellend dak"} onClick={() => { setDaktype("Hellend dak"); setBedekking(null); }} title="Hellend dak (klassiek schuindak)" desc="Geschikt voor pannen, leien of shingles" />
            </div>
          </div>
        );

      case 1:
        return (
          <div>
            <h2 className="text-xl font-extrabold text-teal-800 mb-1">Hoe groot is het dak?</h2>
            <p className="text-sm text-gray-500 mb-5">Schatting is prima — wij meten exact op bij het gratis plaatsbezoek.</p>
            <NumberInput label="Dakoppervlakte" value={area} onChange={setArea} suffix="m²" min={10} max={2000} />
            <div className="mt-4 rounded-xl border border-gray-200 p-4 bg-white">
              <h4 className="font-bold text-sm text-teal-800 mb-3">Extra elementen op het dak (optioneel)</h4>
              <div className="grid gap-4 sm:grid-cols-2">
                <NumberInput label="Dakramen" value={dakramen} onChange={setDakramen} suffix="stuks" max={20} />
                <NumberInput label="Schouwen" value={schouwen} onChange={setSchouwen} suffix="stuks" max={10} />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h2 className="text-xl font-extrabold text-teal-800 mb-1">Welke dakbedekking wenst u?</h2>
            <p className="text-sm text-gray-500 mb-5">Kies het materiaal dat het beste bij uw woning past.</p>
            <div className={`grid gap-3 ${daktype === "Plat dak" ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
              {bedekkingOpts.map((opt) => (
                <button
                  key={opt.name}
                  type="button"
                  onClick={() => { setBedekking(opt.name); setBedekkingSurcharge(opt.surcharge); }}
                  aria-pressed={bedekking === opt.name}
                  className={`text-left rounded-2xl border-2 p-4 transition-all ${
                    bedekking === opt.name
                      ? "border-orange-400 bg-orange-50 shadow-md"
                      : "border-gray-150 bg-white hover:border-gray-300"
                  }`}
                >
                  <span className="block font-bold text-sm text-teal-800">{opt.name}</span>
                  <span className="block text-xs text-gray-500 mt-1">{opt.desc}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h2 className="text-xl font-extrabold text-teal-800 mb-1">Welk isolatiemateriaal?</h2>
            <p className="text-sm text-gray-500 mb-5">Alle opties halen de minimale R=4.5 voor Fluvius-premies.</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {([
                { k: "PIR-platen" as const, t: "PIR-platen", d: "Hoogste isolatiewaarde per cm", badge: "Populairste keuze", badgeColor: "orange" },
                { k: "Minerale wol" as const, t: "Minerale wol", d: "Goede geluid- & brandisolatie" },
                { k: "Houtvezel" as const, t: "Houtvezel", d: "Ecologisch, zomers comfort", badge: "Ecologisch", badgeColor: "green" },
                { k: "Advies gewenst" as const, t: "Laat Isoprotech adviseren", d: "Wij kiezen de beste optie voor uw situatie" },
              ] as Array<{ k: DakIsolatieType; t: string; d: string; badge?: string; badgeColor?: string }>).map((opt) => (
                <button
                  key={opt.k}
                  type="button"
                  onClick={() => setIsolatie(opt.k)}
                  aria-pressed={isolatie === opt.k}
                  className={`text-left rounded-2xl border-2 p-4 transition-all ${
                    isolatie === opt.k
                      ? "border-orange-400 bg-orange-50 shadow-md"
                      : "border-gray-150 bg-white hover:border-gray-300"
                  }`}
                >
                  <span className="block font-bold text-sm text-teal-800">{opt.t}</span>
                  <span className="block text-xs text-gray-500 mt-1">{opt.d}</span>
                  {opt.badge && (
                    <span className={`inline-block mt-2 px-2 py-1 rounded-lg text-[11px] font-bold ${
                      opt.badgeColor === "green" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-600"
                    }`}>
                      {opt.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h2 className="text-xl font-extrabold text-teal-800 mb-1">Wanneer is de woning gebouwd?</h2>
            <p className="text-sm text-gray-500 mb-5">Bepaalt uw premie-aansprankelijkheid en of een asbestcheck vereist is.</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {([
                { k: "Vóór 1970" as const, t: "Vóór 1970", badge: "Asbestcheck vereist", badgeColor: "orange" },
                { k: "1970 – 1990" as const, t: "1970 – 1990", badge: "Asbestcheck vereist", badgeColor: "orange" },
                { k: "1990 – 2005" as const, t: "1990 – 2005", badge: "Meer premies", badgeColor: "green" },
                { k: "Na 2005" as const, t: "Na 2005" },
              ] as Array<{ k: Bouwjaar; t: string; badge?: string; badgeColor?: string }>).map((opt) => (
                <button
                  key={opt.k}
                  type="button"
                  onClick={() => setBouwjaar(opt.k)}
                  aria-pressed={bouwjaar === opt.k}
                  className={`text-left rounded-2xl border-2 p-4 transition-all ${
                    bouwjaar === opt.k
                      ? "border-orange-400 bg-orange-50 shadow-md"
                      : "border-gray-150 bg-white hover:border-gray-300"
                  }`}
                >
                  <span className="block font-bold text-sm text-teal-800">{opt.t}</span>
                  {opt.badge && (
                    <span className={`inline-block mt-2 px-2 py-1 rounded-lg text-[11px] font-bold ${
                      opt.badgeColor === "green" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-600"
                    }`}>
                      {opt.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
            {(bouwjaar === "Vóór 1970" || bouwjaar === "1970 – 1990") && (
              <div className="mt-4 rounded-xl bg-amber-50 border border-amber-200 p-3 text-sm text-amber-800">
                Woningen vóór 1990 vereisen wettelijk een asbestinventarisatie vóór dakwerken. Isoprotech regelt dit volledig voor u.
              </div>
            )}
            {/* Live price preview */}
            {result && (
              <div className="mt-5 rounded-xl bg-teal-50 border border-teal-200 p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-teal-600 font-bold uppercase tracking-wide mb-0.5">Uw richtprijs tot nu toe</p>
                  <p className="text-2xl font-black text-teal-800">{formatEur(result.gross)}</p>
                  <p className="text-xs text-gray-500">incl. btw</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Klik &ldquo;Toon mijn prijs&rdquo;<br />voor volledige breakdown →</p>
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <ProgressBar steps={STEPS} current={step} />
      <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 md:p-8 animate-fadeIn">
        {renderStep()}
      </div>
      <StepNav
        step={step}
        maxStep={4}
        canNext={canNext}
        onBack={handleBack}
        onNext={handleNext}
        nextLabel={step === 4 ? "Toon mijn prijs →" : undefined}
      />
    </div>
  );
}
