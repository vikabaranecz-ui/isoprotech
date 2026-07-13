// src/components/calculators/CalcUI.tsx
"use client";

// Shared primitives for both calculators — no result views here

export function RadioCard({
  selected,
  onClick,
  title,
  desc,
  badge,
  badgeColor,
  image,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  desc?: string;
  badge?: string;
  badgeColor?: "orange" | "green";
  image?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`w-full text-left rounded-2xl border-2 overflow-hidden transition-all ${
        selected
          ? "border-orange-400 bg-orange-50 shadow-md"
          : "border-gray-150 bg-white hover:border-gray-300"
      }`}
    >
      {image && (
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-28 object-cover bg-gray-100"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      )}
      <span className="block p-4">
        <span className={`block font-bold text-sm ${selected ? "text-orange-400" : "text-teal-800"}`}>
          {title}
        </span>
        {desc && <span className="block text-xs text-gray-500 mt-0.5">{desc}</span>}
        {badge && (
          <span className={`inline-block mt-2 px-2 py-1 rounded-lg text-[11px] font-bold ${
            badgeColor === "green" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-600"
          }`}>{badge}</span>
        )}
      </span>
    </button>
  );
}

export function NumberInput({
  label,
  value,
  onChange,
  suffix,
  min = 0,
  max = 9999,
  step,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
}) {
  const s = step ?? (max > 100 ? 5 : 1);
  return (
    <div className="mb-4">
      <label className="block text-sm text-gray-600 mb-1.5">{label}</label>
      <div className="flex items-center gap-2">
        <button type="button" onClick={() => onChange(Math.max(min, value - s))}
          className="w-11 h-11 rounded-xl border border-gray-200 bg-white text-lg font-bold hover:border-orange-400 hover:text-orange-400 transition shrink-0">
          −
        </button>
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          onChange={(e) => onChange(Math.max(min, Number(e.target.value) || 0))}
          className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm text-center text-teal-800 font-medium focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
        />
        <button type="button" onClick={() => onChange(Math.min(max, value + s))}
          className="w-11 h-11 rounded-xl border border-gray-200 bg-white text-lg font-bold hover:border-orange-400 hover:text-orange-400 transition shrink-0">
          +
        </button>
        {suffix && <span className="text-sm text-gray-500 font-medium shrink-0">{suffix}</span>}
      </div>
    </div>
  );
}

export function ProgressBar({
  steps,
  current,
}: {
  steps: string[];
  current: number;
}) {
  const pct = Math.round(((current + 1) / steps.length) * 100);
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-sm font-bold text-teal-800">Stap {current + 1} van {steps.length}</span>
        <span className="text-xs text-gray-400">{pct}%</span>
      </div>
      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full rounded-full bg-gradient-to-r from-orange-400 to-orange-300 transition-all duration-300" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export function StepNav({
  step,
  maxStep,
  canNext,
  onBack,
  onNext,
  nextLabel,
}: {
  step: number;
  maxStep: number;
  canNext: boolean;
  onBack: () => void;
  onNext: () => void;
  nextLabel?: string;
}) {
  return (
    <div className="flex gap-3 mt-5">
      {step > 0 && (
        <button onClick={onBack} className="btn-outline flex-1 text-sm">Terug</button>
      )}
      <button onClick={onNext} disabled={!canNext} className="btn-primary flex-1 text-sm">
        {nextLabel || (step === maxStep ? "Bereken mijn prijs" : "Verder")}
      </button>
    </div>
  );
}
