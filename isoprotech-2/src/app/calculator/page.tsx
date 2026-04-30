// src/app/calculator/page.tsx
import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CalculatorTabs } from "./CalculatorTabs";

export const metadata: Metadata = {
  title: "Prijscalculator — Gevel & Dak",
  description:
    "Bereken een indicatieve prijs voor gevelisolatie of dakwerken in de regio Antwerpen. Actuele marktprijzen 2026. ISOPROTECH.",
  alternates: { canonical: `${BRAND.url}/calculator` },
};

export default function CalculatorPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-800 to-teal-950 py-28">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <span className="mb-4 inline-block rounded-full bg-orange-500/15 border border-orange-500/20 px-5 py-2 text-sm font-semibold text-orange-300">
            Calculator
          </span>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl mb-6">
            Bereken uw prijs
          </h1>
          <p className="text-lg text-white/60">
            Krijg in 2 minuten een indicatieve prijsvork voor uw dak- of
            gevelproject. Gebaseerd op actuele marktprijzen in Antwerpen, 2026.
          </p>
        </div>
      </section>

      <div className="container-wide">
        <Breadcrumb items={[{ label: "Calculator", href: "/calculator" }]} />
      </div>

      <section className="container-wide py-12">
        <CalculatorTabs defaultTab="gevel" />
      </section>
    </>
  );
}
