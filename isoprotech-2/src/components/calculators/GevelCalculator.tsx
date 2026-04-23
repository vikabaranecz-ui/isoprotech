// src/components/calculators/GevelCalculator.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  calculateGevel,
  type GevelInput,
  type GevelAfwerking,
  type GevelIsolatie,
  type ProjectType,
} from "@/lib/calculator";
import { track } from "@/lib/tracking";
import {
  RadioCard,
  NumberInput,
  ProgressBar,
  LiveTotal,
  ResultView,
  StepNav,
} from "./CalcUI";

const STEPS = ["Project", "Afwerking", "Isolatie", "Oppervlakte", "Resultaat"];

export function GevelCalculator() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [input, setInput] = useState<GevelInput>({
    projectType: "renovatie",
    afwerking: "crepi",
    isolatie: "eps",
    totalOpp: 100,
    raamOpp: 15,
  });

  const set = <K extends keyof GevelInput>(key: K, val: GevelInput[K]) =>
    setInput((p) => ({ ...p, [key]: val }));

  const result = calculateGevel(input);

  const handleRequestQuote = () => {
    track.calculatorComplete("gevel", result.totalLow, result.totalHigh);
    router.push("/contact");
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="grid gap-3">
            <RadioCard
              selected={input.projectType === "renovatie"}
              onClick={() => set("projectType", "renovatie" as ProjectType)}
              title="Renovatie"
              desc="Woning ouder dan 10 jaar — 6% btw"
            />
            <RadioCard
              selected={input.projectType === "nieuwbouw"}
              onClick={() => set("projectType", "nieuwbouw" as ProjectType)}
              title="Nieuwbouw"
              desc="Standaard btw-tarief — 21% btw"
            />
          </div>
        );
      case 1:
        return (
          <div className="grid grid-cols-2 gap-3">
            {(
              [
                { k: "crepi", t: "Crepi", d: "Strakke minerale pleister" },
                { k: "spuitkurk", t: "Spuitkurk", d: "Elastisch, naadloos" },
                { k: "steenstrips", t: "Steenstrips", d: "Klinkerlook" },
                { k: "kaleien", t: "Kaleien", d: "Kalkwas-effect" },
              ] as const
            ).map((o) => (
              <RadioCard
                key={o.k}
                selected={input.afwerking === o.k}
                onClick={() => set("afwerking", o.k as GevelAfwerking)}
                title={o.t}
                desc={o.d}
              />
            ))}
          </div>
        );
      case 2:
        return (
          <div className="grid gap-3">
            {(
              [
                { k: "geen", t: "Geen isolatie", d: "Enkel afwerking" },
                { k: "eps", t: "EPS / PUR", d: "Hoge isolatiewaarde" },
                { k: "mineraalwol", t: "Minerale wol", d: "Brandveilig, dampopen" },
              ] as const
            ).map((o) => (
              <RadioCard
                key={o.k}
                selected={input.isolatie === o.k}
                onClick={() => set("isolatie", o.k as GevelIsolatie)}
                title={o.t}
                desc={o.d}
              />
            ))}
          </div>
        );
      case 3:
        return (
          <div>
            <NumberInput
              label="Totale geveloppervlakte"
              value={input.totalOpp}
              onChange={(v) => set("totalOpp", v)}
              suffix="m²"
              max={2000}
            />
            <NumberInput
              label="Oppervlak ramen en deuren"
              value={input.raamOpp}
              onChange={(v) => set("raamOpp", v)}
              suffix="m²"
              max={500}
            />
            <div className="rounded-xl bg-orange-50 border border-orange-200 p-3 text-sm font-bold text-orange-600">
              Netto geveloppervlakte: {Math.max(0, input.totalOpp - input.raamOpp)} m²
            </div>
          </div>
        );
      case 4:
        return <ResultView result={result} onRequestQuote={handleRequestQuote} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <ProgressBar steps={STEPS} current={step} />
      {step === 4 && (
        <LiveTotal
          totalLow={result.totalLow}
          totalHigh={result.totalHigh}
          area={result.area}
          suffix="m²"
        />
      )}
      <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 md:p-8">
        <h3 className="text-lg font-bold text-teal-800 mb-6">{STEPS[step]}</h3>
        {renderStep()}
      </div>
      {step < 4 && (
        <StepNav
          step={step}
          maxStep={4}
          onBack={() => setStep((s) => s - 1)}
          onNext={() => setStep((s) => s + 1)}
        />
      )}
    </div>
  );
}
