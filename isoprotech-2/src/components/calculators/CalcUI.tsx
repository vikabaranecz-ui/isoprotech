// src/components/calculators/CalcUI.tsx
"use client";

// Shared primitives for both calculators

import { formatRange, formatEur, type GevelResult } from "@/lib/calculator";

export function RadioCard({
  selected,
  onClick,
  title,
  desc,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  desc?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`w-full text-left rounded-2xl border-2 p-4 transition-all ${
        selected
          ? "border-orange-400 bg-orange-50"
          : "border-gray-150 bg-white hover:border-gray-300"
      }`}
    >
      <span
        className={`block font-bold text-sm ${
          selected ? "text-orange-500" : "text-teal-800"
        }`}
      >
        {title}
      </span>
      {desc && (
        <span className="block text-xs text-gray-500 mt-0.5">{desc}</span>
      )}
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
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  suffix?: string;
  min?: number;
  max?: number;
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm text-gray-600 mb-1.5">{label}</label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          onChange={(e) => onChange(Math.max(min, Number(e.target.value) || 0))}
          className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm text-teal-800 font-medium focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition"
        />
        {suffix && (
          <span className="text-sm text-gray-500 font-medium">{suffix}</span>
        )}
      </div>
    </div>
  );
}

export function CheckInput({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="flex items-center gap-3 py-3 w-full text-left"
      role="switch"
      aria-checked={checked}
    >
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition ${
          checked
            ? "border-orange-400 bg-orange-400"
            : "border-gray-300 bg-white"
        }`}
      >
        {checked && (
          <svg className="h-3 w-3 text-white" viewBox="0 0 14 14" fill="none">
            <path
              d="M3 7l3 3 5-5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className="text-sm font-semibold text-teal-800">{label}</span>
    </button>
  );
}

export function ProgressBar({
  steps,
  current,
}: {
  steps: string[];
  current: number;
}) {
  return (
    <div className="flex gap-1 mb-8" role="progressbar" aria-valuenow={current + 1} aria-valuemin={1} aria-valuemax={steps.length}>
      {steps.map((label, i) => (
        <div key={i} className="flex-1">
          <div
            className={`h-1 rounded-full transition-colors ${
              i <= current ? "bg-orange-400" : "bg-gray-200"
            }`}
          />
          <span
            className={`block text-[10px] mt-1.5 text-center ${
              i <= current ? "text-orange-500 font-semibold" : "text-gray-400"
            }`}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function LiveTotal({
  totalLow,
  totalHigh,
  area,
  suffix,
}: {
  totalLow: number;
  totalHigh: number;
  area: number;
  suffix: string;
}) {
  return (
    <div className="flex justify-between items-center rounded-2xl bg-white border border-gray-100 shadow-sm p-4 mb-6">
      <div>
        <span className="block text-xs text-gray-500">Indicatieve prijsvork</span>
        <span className="block text-lg font-extrabold text-orange-500">
          {formatRange(totalLow, totalHigh)}
        </span>
      </div>
      <div className="text-right">
        <span className="block text-xs text-gray-500">Oppervlakte</span>
        <span className="block text-lg font-bold text-teal-800">
          {area} {suffix}
        </span>
      </div>
    </div>
  );
}

export function ResultView({
  result,
  onRequestQuote,
}: {
  result: GevelResult;
  onRequestQuote: () => void;
}) {
  return (
    <div>
      {/* Big number */}
      <div className="text-center mb-8">
        <span className="block text-3xl md:text-4xl font-black text-orange-500">
          {formatRange(result.totalLow, result.totalHigh)}
        </span>
        <span className="block text-sm text-gray-500 mt-1">
          {result.area} m² · incl. {Math.round(result.btwRate * 100)}% btw
        </span>
      </div>

      {/* Breakdown */}
      <div className="rounded-2xl bg-stone-50 p-5 mb-6">
        {result.lines.map((line, i) => (
          <div
            key={i}
            className="flex justify-between py-2 border-b border-gray-100 last:border-0"
          >
            <span className="text-sm text-gray-600">{line.label}</span>
            <span className="text-sm font-semibold text-teal-800">
              {formatRange(line.low, line.high)}
            </span>
          </div>
        ))}
        <div className="flex justify-between pt-3 mt-2">
          <span className="text-sm font-bold text-teal-800">
            Subtotaal (excl. btw)
          </span>
          <span className="text-sm font-bold text-teal-800">
            {formatRange(result.subtotalLow, result.subtotalHigh)}
          </span>
        </div>
        <div className="flex justify-between py-1">
          <span className="text-sm text-gray-500">
            Btw ({Math.round(result.btwRate * 100)}%)
          </span>
          <span className="text-sm text-gray-500">
            {formatRange(result.btwLow, result.btwHigh)}
          </span>
        </div>
        <div className="flex justify-between pt-3 mt-1 border-t-2 border-orange-400">
          <span className="font-extrabold text-orange-500">
            Totaal (incl. btw)
          </span>
          <span className="font-extrabold text-orange-500">
            {formatRange(result.totalLow, result.totalHigh)}
          </span>
        </div>
      </div>

      {/* Per m² */}
      <div className="flex justify-center gap-8 mb-6">
        <div className="text-center">
          <span className="block text-lg font-extrabold text-teal-800">
            {formatRange(result.perM2Low, result.perM2High)}
          </span>
          <span className="block text-xs text-gray-400">per m² excl. btw</span>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-gray-400 text-center mb-6 leading-relaxed">
        {result.disclaimer}
      </p>

      <button onClick={onRequestQuote} className="btn-primary w-full text-base">
        Gratis offerte aanvragen
      </button>
    </div>
  );
}

export function StepNav({
  step,
  maxStep,
  onBack,
  onNext,
}: {
  step: number;
  maxStep: number;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex gap-3 mt-6">
      {step > 0 && (
        <button onClick={onBack} className="btn-outline flex-1 text-sm">
          Terug
        </button>
      )}
      {step < maxStep && (
        <button onClick={onNext} className="btn-primary flex-1 text-sm">
          Verder
        </button>
      )}
    </div>
  );
}
