// src/components/calculators/GevelCalculator.tsx
"use client";

import { useState, useMemo } from "react";
import {
  calculateGevel,
  formatEur,
  type GevelInput,
  type GevelFinish,
  type GevelInsulation,
  type GevelPlinthType,
  type ProjectType,
} from "@/lib/calculator";
import { track } from "@/lib/tracking";
import { RadioCard, NumberInput, ProgressBar, StepNav } from "./CalcUI";

// 5 config steps — contact info is OPTIONAL on the result screen
const STEPS = ["Projecttype", "Afwerking", "Isolatie", "Oppervlakte", "Details"];

export function GevelCalculator() {
  const [step, setStep] = useState(0);
  const [input, setInput] = useState<GevelInput>({
    projectType: "reno",
    finish: "spuitkurk",
    insulation: "eps",
    thickness: 10,
    grossArea: 150,
    openings: 30,
    plinthType: "blauwesteen",
    height: 6,
    plinthLm: 40,
    sillsAlu: 25,
    sillsStone: 0,
  });

  // Result screen state
  const [showResult, setShowResult] = useState(false);
  // Optional contact fields on result screen
  const [qNaam, setQNaam] = useState("");
  const [qTelefoon, setQTelefoon] = useState("");
  const [ctaSent, setCtaSent] = useState(false);

  const set = <K extends keyof GevelInput>(key: K, val: GevelInput[K]) =>
    setInput((p) => ({ ...p, [key]: val }));

  const result = useMemo(() => calculateGevel(input), [input]);

  const canNext = useMemo(() => {
    switch (step) {
      case 0: return true;
      case 1: return true;
      case 2: return true;
      case 3: return input.grossArea >= 10;
      case 4: return true;
      default: return false;
    }
  }, [step, input.grossArea]);

  function handleNext() {
    if (!canNext) return;
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Step 4 → show result immediately, no gate
      setShowResult(true);
      track.calculatorComplete("gevel", result.total, result.total);
    }
  }

  function handleBack() {
    if (showResult) setShowResult(false);
    else if (step > 0) setStep(step - 1);
  }

  function handleWhatsApp() {
    const lines = [
      "🏠 *Gevelcalculator aanvraag via isoprotech.be*",
      "",
      qNaam ? `👤 Naam: ${qNaam}` : null,
      qTelefoon ? `📞 Telefoon: ${qTelefoon}` : null,
      "",
      `🎨 Afwerking: ${input.finish}`,
      `🧱 Isolatie: ${input.insulation !== "none" ? `${input.insulation} ${input.thickness}cm` : "geen"}`,
      `📐 Netto-oppervlakte: ${result.netArea} m²`,
      `💰 Richtprijs: ${formatEur(result.total)} (incl. BTW)`,
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
          service: "gevelwerken",
          message: `Gevelcalculator: ${input.finish}, ${input.insulation}, ${result.netArea}m², ${formatEur(result.total)}`,
          privacy: true,
        }),
      }).catch(() => {});
    }
  }

  const ic = "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 transition bg-white placeholder:text-gray-400";

  // ─── RESULT SCREEN ───────────────────────────────────────
  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto animate-fadeInUp">
        <div className="inline-block bg-green-100 text-green-800 border border-green-200 px-3 py-1.5 rounded-full text-xs font-bold mb-4">
          ✓ Uw richtprijs is klaar
        </div>

        <h2 className="text-2xl font-extrabold text-teal-800 mb-1">Gevelprijs — vrijblijvende schatting</h2>
        <p className="text-sm text-gray-500 mb-5">Exacte prijs na gratis plaatsbezoek in Antwerpen.</p>

        {/* Summary pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            input.projectType === "reno" ? "Renovatie (6%)" : "Nieuwbouw (21%)",
            input.finish,
            input.insulation !== "none" ? `${input.insulation} ${input.thickness}cm` : "Geen isolatie",
            `${result.netArea} m² netto`,
          ].map((p) => (
            <span key={p} className="bg-stone-100 border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full text-xs font-bold">{p}</span>
          ))}
        </div>

        {/* Price card */}
        <div className="rounded-2xl border border-gray-200 shadow-lg overflow-hidden bg-white mb-5">
          <div className="flex flex-wrap gap-6 p-5 bg-gradient-to-b from-orange-50 to-white">
            <div className="flex-1 min-w-[180px]">
              <div className="text-xs font-bold text-gray-500 mb-1">Excl. btw</div>
              <div className="text-3xl font-black text-teal-800">{formatEur(result.subtotal)}</div>
            </div>
            <div className="flex-1 min-w-[180px]">
              <div className="text-xs font-bold text-gray-500 mb-1">Incl. {Math.round(result.vatRate * 100)}% btw</div>
              <div className="text-3xl font-black text-orange-400">{formatEur(result.total)}</div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-100 space-y-1.5">
            {result.lines.filter(l => l.amount > 0).map((line, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-gray-700">{line.label}</span>
                <span className="font-bold text-gray-500">{formatEur(line.amount)}</span>
              </div>
            ))}
            <div className="flex justify-between text-sm pt-2 border-t border-gray-100">
              <span className="font-bold text-gray-700">Subtotaal (excl. btw)</span>
              <span className="font-bold text-teal-800">{formatEur(result.subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Btw {Math.round(result.vatRate * 100)}%</span>
              <span className="text-gray-500">{formatEur(result.vat)}</span>
            </div>
            <div className="flex justify-between pt-2 border-t-2 border-orange-400">
              <span className="font-extrabold text-orange-400">Totaal incl. btw</span>
              <span className="font-extrabold text-orange-400">{formatEur(result.total)}</span>
            </div>
          </div>
        </div>

        {result.perM2 > 0 && (
          <div className="text-center text-sm text-gray-500 mb-5">
            {formatEur(result.perM2)}/m² excl. btw · {result.netArea} m² netto
            {result.hFactor > 1 && <span className="ml-2 text-orange-400 font-bold">hoogtefactor ×{result.hFactor.toFixed(2)}</span>}
          </div>
        )}

        {/* ── CTA BLOCK — no required fields, contact is optional ── */}
        <div className="rounded-2xl bg-orange-50 border border-orange-300 p-5 mb-4">
          <h4 className="font-bold text-teal-800 mb-1">Plan gratis plaatsbezoek — vrijblijvend</h4>
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
                {/* WhatsApp icon */}
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
              WhatsApp wordt geopend!<br />
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

        <p className="text-center text-xs text-gray-400 mb-1">Google 5/5 · ATG & BENOR · 10 jaar garantie · Antwerpen</p>
        <p className="text-center text-[11px] text-gray-300">* Richtprijs op basis van uw gegevens. Exacte prijs na gratis plaatsbezoek.</p>

        <div className="mt-6">
          <button onClick={handleBack} className="btn-outline text-sm">← Terug naar calculator</button>
        </div>
      </div>
    );
  }

  // ─── STEPS ───────────────────────────────────────────────
  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div>
            <h2 className="text-xl font-extrabold text-teal-800 mb-1">Projecttype</h2>
            <p className="text-sm text-gray-500 mb-5">Nieuwbouw = 21% btw, renovatie ouder dan 10 jaar = 6% btw.</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <RadioCard selected={input.projectType === "reno"} onClick={() => set("projectType", "reno" as ProjectType)} title="Renovatie" desc="Woning ouder dan 10 jaar" badge="6% btw" badgeColor="green" />
              <RadioCard selected={input.projectType === "new"} onClick={() => set("projectType", "new" as ProjectType)} title="Nieuwbouw" desc="Standaard btw-tarief" badge="21% btw" badgeColor="orange" />
            </div>
          </div>
        );

      case 1:
        return (
          <div>
            <h2 className="text-xl font-extrabold text-teal-800 mb-1">Afwerking</h2>
            <p className="text-sm text-gray-500 mb-5">Kies de gevelafwerking die het beste bij uw woning past.</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {([
                { k: "spuitkurk" as const, t: "Spuitkurk", d: "Elastisch, ademend, naadloos" },
                { k: "crepi" as const, t: "Crepi", d: "Strakke minerale pleister" },
                { k: "steenstrips" as const, t: "Steenstrips", d: "Klinkerlook, dun en duurzaam" },
                { k: "kaleien" as const, t: "Kaleien", d: "Limestone wash, zacht patina" },
              ]).map((o) => (
                <RadioCard key={o.k} selected={input.finish === o.k} onClick={() => set("finish", o.k as GevelFinish)} title={o.t} desc={o.d} />
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h2 className="text-xl font-extrabold text-teal-800 mb-1">Isolatie</h2>
            <p className="text-sm text-gray-500 mb-5">Kies het isolatiemateriaal en de dikte.</p>
            <div className="grid gap-3 sm:grid-cols-3 mb-5">
              {([
                { k: "none" as const, t: "Geen", d: "Afwerking zonder isolatie" },
                { k: "eps" as const, t: "EPS / PUR", d: "Hoge isolatiewaarde" },
                { k: "mineral" as const, t: "Minerale wol", d: "Brandveilig & dampopen" },
              ]).map((o) => (
                <RadioCard key={o.k} selected={input.insulation === o.k} onClick={() => set("insulation", o.k as GevelInsulation)} title={o.t} desc={o.d} />
              ))}
            </div>
            {input.insulation !== "none" && (
              <div>
                <label className="block text-sm font-bold text-teal-800 mb-2">Isolatiedikte: {input.thickness} cm</label>
                <input
                  type="range"
                  min={0}
                  max={20}
                  step={1}
                  value={input.thickness}
                  onChange={(e) => set("thickness", Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-400"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>0 cm</span><span>10 cm</span><span>20 cm</span>
                </div>
              </div>
            )}
          </div>
        );

      case 3:
        return (
          <div>
            <h2 className="text-xl font-extrabold text-teal-800 mb-1">Oppervlaktes</h2>
            <p className="text-sm text-gray-500 mb-5">Schatting is prima — wij meten exact op bij het gratis plaatsbezoek.</p>
            <NumberInput label="Totale muuroppervlakte" value={input.grossArea} onChange={(v) => set("grossArea", v)} suffix="m²" min={10} max={2000} />
            <NumberInput label="Oppervlak ramen en deuren" value={input.openings} onChange={(v) => set("openings", v)} suffix="m²" max={500} />
            <div className="rounded-xl bg-orange-50 border border-orange-200 p-3 text-sm font-bold text-orange-600">
              Netto-oppervlakte: {Math.max(0, input.grossArea - input.openings)} m²
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h2 className="text-xl font-extrabold text-teal-800 mb-1">Details & opties</h2>
            <p className="text-sm text-gray-500 mb-5">Gevelplint, hoogte en vensterbanken.</p>

            <p className="text-sm font-bold text-teal-800 mb-3">Welk type gevelplint?</p>
            <div className="grid gap-3 sm:grid-cols-3 mb-5">
              <RadioCard selected={input.plinthType === "blauwesteen"} onClick={() => set("plinthType", "blauwesteen" as GevelPlinthType)} title="Blauwe steen" desc="Slagvast, premium uitstraling" />
              <RadioCard selected={input.plinthType === "mozaiek"} onClick={() => set("plinthType", "mozaiek" as GevelPlinthType)} title="Mozaïek sokkel" desc="Decoratief, duurzaam" />
              <RadioCard selected={input.plinthType === "spuitkurk"} onClick={() => set("plinthType", "spuitkurk" as GevelPlinthType)} title="Spuitkurk plint" desc="Naadloos, kleuraangepast" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <NumberInput label="Gemiddelde gevelhoogte" value={input.height} onChange={(v) => set("height", v)} suffix="m" min={2} max={15} />
              <NumberInput label="Plintlengte" value={input.plinthLm} onChange={(v) => set("plinthLm", v)} suffix="lm" max={200} />
            </div>

            <div className="border-t border-gray-100 pt-4 mt-2">
              <p className="text-sm font-bold text-teal-800 mb-3">Vensterbanken</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <NumberInput label="Aluminium vensterbanken" value={input.sillsAlu} onChange={(v) => set("sillsAlu", v)} suffix="lm" max={200} />
                <NumberInput label="Natuursteen vensterbanken" value={input.sillsStone} onChange={(v) => set("sillsStone", v)} suffix="lm" max={200} />
              </div>
            </div>

            {input.height > 5 && (
              <div className="mt-4 rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs text-amber-700">
                Gevelhoogte boven 5m: hoogtefactor ×{input.height <= 8 ? "1.06" : "1.12"} wordt toegepast voor extra stelling- en veiligheidskosten.
              </div>
            )}

            {/* Live price preview to entice completion */}
            <div className="mt-5 rounded-xl bg-teal-50 border border-teal-200 p-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-teal-600 font-bold uppercase tracking-wide mb-0.5">Uw richtprijs tot nu toe</p>
                <p className="text-2xl font-black text-teal-800">{formatEur(result.total)}</p>
                <p className="text-xs text-gray-500">incl. {Math.round(result.vatRate * 100)}% btw</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">Klik &ldquo;Toon mijn prijs&rdquo;<br />voor volledige breakdown →</p>
              </div>
            </div>
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
