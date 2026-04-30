// src/app/calculator/CalculatorTabs.tsx
"use client";

import { useState } from "react";
import { GevelCalculator } from "@/components/calculators/GevelCalculator";
import { DakCalculator } from "@/components/calculators/DakCalculator";

export function CalculatorTabs({
  defaultTab = "gevel",
}: {
  defaultTab?: "gevel" | "dak";
}) {
  const [tab, setTab] = useState<"gevel" | "dak">(defaultTab);

  return (
    <div>
      {/* Tab switcher */}
      <div className="max-w-xl mx-auto flex gap-3 mb-10">
        <button
          onClick={() => setTab("gevel")}
          className={`flex-1 py-3.5 rounded-xl text-sm font-bold transition-all border-2 ${
            tab === "gevel"
              ? "bg-teal-600 border-teal-600 text-white"
              : "bg-white border-gray-200 text-teal-800 hover:border-gray-300"
          }`}
          aria-pressed={tab === "gevel"}
        >
          <svg
            className="inline-block h-4 w-4 mr-2 -mt-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 3v18" />
          </svg>
          Gevelcalculator
        </button>
        <button
          onClick={() => setTab("dak")}
          className={`flex-1 py-3.5 rounded-xl text-sm font-bold transition-all border-2 ${
            tab === "dak"
              ? "bg-teal-600 border-teal-600 text-white"
              : "bg-white border-gray-200 text-teal-800 hover:border-gray-300"
          }`}
          aria-pressed={tab === "dak"}
        >
          <svg
            className="inline-block h-4 w-4 mr-2 -mt-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12l9-9 9 9M5 10v10h14V10" />
          </svg>
          Dakcalculator
        </button>
      </div>

      {/* Active calculator */}
      {tab === "gevel" ? <GevelCalculator /> : <DakCalculator />}
    </div>
  );
}
