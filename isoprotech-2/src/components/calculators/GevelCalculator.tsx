// src/components/calculators/GevelCalculator.tsx
"use client";

import { useState, useMemo } from "react";
import { useSubmit } from "@formspree/react";
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

const STEPS = ["Contact", "Projecttype", "Afwerking", "Isolatie", "Oppervlakte", "Details"];

// Drop the corresponding photos into these paths (public/images/calculator/gevel/…)
const FINISH_IMAGES: Record<GevelFinish, string> = {
  spuitkurk: "/images/calculator/gevel/afwerking/spuitkurk.jpg",
  crepi: "/images/calculator/gevel/afwerking/crepi.jpg",
  steenstrips: "/images/calculator/gevel/afwerking/steenstrips.jpg",
  kaleien: "/images/calculator/gevel/afwerking/kaleien.jpg",
};

const PLINTH_IMAGES: Record<GevelPlinthType, string> = {
  blauwesteen: "/images/calculator/gevel/plint/blauwesteen.jpg",
  mozaiek: "/images/calculator/gevel/plint/mozaiek.jpg",
};

type SillMaterial = "aluminium" | "natuursteen";

const SILL_IMAGES: Record<SillMaterial, string> = {
  aluminium: "/images/calculator/gevel/vensterbank/aluminium.jpg",
  natuursteen: "/images/calculator/gevel/vensterbank/natuursteen.jpg",
};

// Gemiddelde vensterhoogte, gebruikt om de vensterbanklengte te schatten uit het raam-/deuroppervlak
const AVG_WINDOW_HEIGHT_M = 1.2;

// Base project input — the vensterbank lm's are derived, not entered directly
type BaseInput = Omit<GevelInput, "sillsAlu" | "sillsStone">;

const CURRENT_YEAR = new Date().getFullYear();
const RENO_CUTOFF_YEAR = CURRENT_YEAR - 10;

export function GevelCalculator() {
  const fsSubmit = useSubmit("mqeoygea");
  const [step, setStep] = useState(0);
  const [input, setInput] = useState<BaseInput>({
    projectType: "reno",
    finish: "spuitkurk",
    insulation: "eps",
    thickness: 10,
    grossArea: 150,
    openings: 30,
    plinthType: "blauwesteen",
    height: 6,
    plinthLm: 40,
  });
  const [sillMaterial, setSillMaterial] = useState<SillMaterial>("aluminium");
  const [naam, setNaam] = useState("");
  const [telefoon, setTelefoon] = useState("");
  const [email, setEmail] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [ctaSent, setCtaSent] = useState(false);

  const set = <K extends keyof BaseInput>(key: K, val: BaseInput[K]) =>
    setInput((p) => ({ ...p, [key]: val }));

  // Vensterbanklengte wordt altijd berekend uit het oppervlak ramen en deuren, geen handmatige invoer
  const sillLm = useMemo(() => Math.max(0, Math.round(input.openings / AVG_WINDOW_HEIGHT_M)), [input.openings]);

  const calcInput: GevelInput = useMemo(() => ({
    ...input,
    sillsAlu: sillMaterial === "aluminium" ? sillLm : 0,
    sillsStone: sillMaterial === "natuursteen" ? sillLm : 0,
  }), [input, sillMaterial, sillLm]);

  const result = useMemo(() => calculateGevel(calcInput), [calcInput]);

  const canNext = useMemo(() => {
    switch (step) {
      case 0: return naam.trim().length > 1 && telefoon.trim().length > 6;
      case 1: return true;
      case 2: return true;
      case 3: return true;
      case 4: return input.grossArea >= 10;
      case 5: return true;
      default: return false;
    }
  }, [step, input.grossArea, naam, telefoon]);

  function handleNext() {
    if (!canNext) return;
    if (step < 5) {
      setStep(step + 1);
    } else {
      fsSubmit({
        name: naam,
        email: email || "",
        phone: telefoon,
        service: "Gevelwerken",
        message: `Gevelcalculator: ${input.finish}, isolatie ${input.insulation !== "none" ? `${input.insulation} ${input.thickness}cm` : "geen"}, ${result.netArea}m², richtprijs ${formatEur(result.total)}`,
        _subject: `Gevelcalculator aanvraag – ${naam}`,
      } as Parameters<typeof fsSubmit>[0]).catch(() => {});

      track.calculatorComplete("gevel", result.total, result.total);
      setShowResult(true);
    }
  }

  function handleBack() {
    if (showResult) setShowResult(false);
    else if (step > 0) setStep(step - 1);
  }

  const ic = "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 transition";

  // ─── RESULT ──────────────────────────────────────────────
  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto animate-fadeInUp">
        <div className="inline-block bg-green-100 text-green-800 border border-green-200 px-3 py-1.5 rounded-full text-xs font-bold mb-4">
          Uw richtprijs is klaar
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

        {/* CTA card */}
        <div className="rounded-2xl bg-orange-50 border border-orange-300 p-5 mb-4">
          <h4 className="font-bold text-teal-800 mb-1">Bevestig uw exacte prijs — gratis</h4>
          <p className="text-sm text-gray-600 mb-4">Onze vakman komt langs in Antwerpen. Vrijblijvend, gratis, binnen 48u.</p>
          {!ctaSent ? (
            <>
              <button
                onClick={() => {
                  const msg = [
                    "🏠 *Gratis plaatsbezoek aanvraag*",
                    "",
                    `👤 Naam: ${naam}`,
                    `📞 Telefoon: ${telefoon}`,
                    `💰 Richtprijs: ${formatEur(result.total)}`,
                  ].join("\n");
                  window.open(`https://wa.me/32470802020?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
                  setCtaSent(true);
                }}
                className="btn-primary w-full mt-3 text-sm"
              >
                Plan gratis plaatsbezoek via WhatsApp
              </button>
            </>
          ) : (
            <div className="text-green-700 font-bold text-sm">
              WhatsApp wordt geopend!<br />
              <span className="font-normal">Klik op &ldquo;Verstuur&rdquo; in WhatsApp om uw aanvraag te bevestigen.</span>
            </div>
          )}
          <p className="text-xs text-gray-400 mt-3 text-center">Gratis · Vrijblijvend · Binnen 48u contact</p>
        </div>

        <p className="text-center text-xs text-gray-400 mb-1">Google 5/5 · ATG & BENOR · 10 jaar garantie · Antwerpen</p>
        <p className="text-center text-[11px] text-gray-300">* Richtprijs op basis van uw gegevens. Exacte prijs na gratis plaatsbezoek.</p>

        <div className="mt-6">
          <button onClick={handleBack} className="btn-outline text-sm">Terug naar calculator</button>
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
            <h2 className="text-xl font-extrabold text-teal-800 mb-1">Naar waar sturen we uw richtprijs?</h2>
            <p className="text-sm text-gray-500 mb-5">Vul uw gegevens in, dan doorlopen we samen de vragen en toont Isoprotech direct uw richtprijs.</p>
            <div className="grid gap-3 sm:grid-cols-2 mb-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Naam *</label>
                <input className={ic} value={naam} onChange={(e) => setNaam(e.target.value)} placeholder="Naam" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Telefoon *</label>
                <input className={ic} value={telefoon} onChange={(e) => setTelefoon(e.target.value)} placeholder="Telefoon" type="tel" />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">E-mailadres (optioneel)</label>
              <input className={ic} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mailadres" type="email" />
            </div>
            <div className="mt-4 rounded-xl bg-orange-50 border border-orange-200 p-3 text-xs text-orange-700">
              Enkel voor uw offerte. Geen spam. Nooit doorverkocht.
            </div>
          </div>
        );

      case 1:
        return (
          <div>
            <h2 className="text-xl font-extrabold text-teal-800 mb-1">Projecttype</h2>
            <p className="text-sm text-gray-500 mb-5">Het btw-tarief hangt af van het bouwjaar van de woning.</p>
            <div className="grid gap-3 sm:grid-cols-2 mb-5">
              <RadioCard selected={input.projectType === "reno"} onClick={() => set("projectType", "reno" as ProjectType)} title="Renovatie" desc={`Woning gebouwd vóór ${RENO_CUTOFF_YEAR}`} badge="6% btw" badgeColor="green" />
              <RadioCard selected={input.projectType === "new"} onClick={() => set("projectType", "new" as ProjectType)} title="Nieuwbouw" desc={`Woning gebouwd vanaf ${RENO_CUTOFF_YEAR}`} badge="21% btw" badgeColor="orange" />
            </div>
          </div>
        );

      case 2:
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
                <RadioCard key={o.k} selected={input.finish === o.k} onClick={() => set("finish", o.k)} title={o.t} desc={o.d} image={FINISH_IMAGES[o.k]} />
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h2 className="text-xl font-extrabold text-teal-800 mb-1">Isolatie</h2>
            <p className="text-sm text-gray-500 mb-5">Kies het isolatiemateriaal en de dikte.</p>
            <div className="grid gap-3 sm:grid-cols-2 mb-5">
              {([
                { k: "none" as const, t: "Geen", d: "Afwerking zonder isolatie" },
                { k: "eps" as const, t: "EPS / PUR", d: "Hoge isolatiewaarde" },
              ]).map((o) => (
                <RadioCard key={o.k} selected={input.insulation === o.k} onClick={() => set("insulation", o.k)} title={o.t} desc={o.d} />
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

      case 4:
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

      case 5:
        return (
          <div>
            <h2 className="text-xl font-extrabold text-teal-800 mb-1">Details & opties</h2>
            <p className="text-sm text-gray-500 mb-5">Gevelplint, hoogte en vensterbanken.</p>

            <p className="text-sm font-bold text-teal-800 mb-3">Welk type gevelplint?</p>
            <div className="grid gap-3 sm:grid-cols-2 mb-5">
              <RadioCard selected={input.plinthType === "blauwesteen"} onClick={() => set("plinthType", "blauwesteen" as GevelPlinthType)} title="Blauwe steen" desc="Slagvast, premium uitstraling" image={PLINTH_IMAGES.blauwesteen} />
              <RadioCard selected={input.plinthType === "mozaiek"} onClick={() => set("plinthType", "mozaiek" as GevelPlinthType)} title="Mozaïek sokkel" desc="Decoratief, duurzaam" image={PLINTH_IMAGES.mozaiek} />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <NumberInput label="Gemiddelde gevelhoogte" value={input.height} onChange={(v) => set("height", v)} suffix="m" min={2} max={15} />
              <NumberInput label="Plintlengte" value={input.plinthLm} onChange={(v) => set("plinthLm", v)} suffix="lm" max={200} />
            </div>

            <div className="border-t border-gray-100 pt-4 mt-2">
              <p className="text-sm font-bold text-teal-800 mb-1">Vensterbanken</p>
              <p className="text-xs text-gray-500 mb-3">De lengte wordt automatisch berekend op basis van het oppervlak ramen en deuren ({input.openings} m²).</p>
              <div className="grid gap-3 sm:grid-cols-2 mb-3">
                <RadioCard selected={sillMaterial === "aluminium"} onClick={() => setSillMaterial("aluminium")} title="Aluminium vensterbank" desc="Strak, onderhoudsvriendelijk" image={SILL_IMAGES.aluminium} />
                <RadioCard selected={sillMaterial === "natuursteen"} onClick={() => setSillMaterial("natuursteen")} title="Natuursteen vensterbank" desc="Premium, tijdloos" image={SILL_IMAGES.natuursteen} />
              </div>
              <div className="rounded-xl bg-orange-50 border border-orange-200 p-3 text-sm font-bold text-orange-600">
                Geschatte vensterbanklengte: {sillLm} lm
              </div>
            </div>

            {input.height > 5 && (
              <div className="mt-4 rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs text-amber-700">
                Gevelhoogte boven 5m: hoogtefactor ×{input.height <= 8 ? "1.06" : "1.12"} wordt toegepast voor extra stelling- en veiligheidskosten.
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
      <StepNav step={step} maxStep={5} canNext={canNext} onBack={handleBack} onNext={handleNext} />
    </div>
  );
}
