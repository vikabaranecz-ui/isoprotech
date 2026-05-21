// src/app/calculator/dak/page.tsx
import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CalculatorTabs } from "../CalculatorTabs";

export const metadata: Metadata = {
  title: "Dakcalculator — Bereken uw Dakprijs",
  description:
    "Bereken een indicatieve prijs voor dakrenovatie of dakisolatie in de regio Antwerpen. Plat en hellend dak. Actuele prijzen 2026.",
  alternates: { canonical: `${BRAND.url}/calculator/dak` },
};

export default function DakCalculatorPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-800 to-teal-600 py-28">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <span className="mb-4 inline-block rounded-full bg-orange-400/15 border border-orange-400/20 px-5 py-2 text-sm font-semibold text-orange-300">
            Dakcalculator
          </span>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl mb-6">
            Bereken uw dakprijs
          </h1>
          <p className="text-lg text-white/60">
            Indicatieve prijsvork voor dakrenovatie of dakisolatie — plat en
            hellend dak. Gebaseerd op Antwerpse marktprijzen, 2026.
          </p>
        </div>
      </section>

      <div className="container-wide">
        <Breadcrumb
          items={[
            { label: "Calculator", href: "/calculator" },
            { label: "Dakcalculator", href: "/calculator/dak" },
          ]}
        />
      </div>

      <section className="container-wide py-12">
        <CalculatorTabs defaultTab="dak" />
      </section>
    </>
  );
}
