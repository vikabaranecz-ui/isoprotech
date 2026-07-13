// src/lib/calculator.ts
// EXACT pricing formulas from live isoprotech.be calculators

export function formatEur(v: number): string {
  return new Intl.NumberFormat("nl-BE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(v);
}

// ═══════════════════════════════════════════════════════════════════
// GEVEL CALCULATOR — exact match to live gevelcalculator
// ═══════════════════════════════════════════════════════════════════
//
// Formula:
//   base = (material + labor) × netArea
//   insul = insulPerCm × (thickness/10) × netArea
//   plinth = 115 × plinthLm
//   sillsAlu = 38 × lm
//   sillsStone = 55 × lm
//   scaffold = 35 × netArea
//   subtotal = (base + insul + plinth + sillsAlu + sillsStone + scaffold) × heightFactor
//   total = subtotal × (1 + vatRate)

export type GevelFinish = "spuitkurk" | "crepi" | "steenstrips" | "kaleien";
export type GevelInsulation = "none" | "eps";
export type GevelPlinthType = "blauwesteen" | "mozaiek";
export type ProjectType = "new" | "reno";

const FINISH_RATES: Record<GevelFinish, { material: number; labor: number }> = {
  spuitkurk:   { material: 20, labor: 130 },  // = €150/m²
  crepi:       { material: 12, labor: 130 },  // = €142/m²
  steenstrips: { material: 90, labor: 130 },  // = €220/m²
  kaleien:     { material: 25, labor: 130 },  // = €155/m²
};

const INSUL_PER_CM: Record<GevelInsulation, number> = {
  none: 0,
  eps: 2,      // €2 per cm per m²
};

const PLINTH_RATE: Record<GevelPlinthType, number> = {
  blauwesteen: 115,  // €/lm
  mozaiek: 105,      // €/lm
};
const SILLS_ALU_RATE = 38;    // €/lm
const SILLS_STONE_RATE = 55;  // €/lm
const SCAFFOLD_RATE = 35;     // €/m²

function heightFactor(h: number): number {
  if (h <= 5) return 1;
  if (h <= 8) return 1.06;
  return 1.12;
}

export interface GevelInput {
  projectType: ProjectType;
  finish: GevelFinish;
  insulation: GevelInsulation;
  thickness: number;      // cm (0–20)
  grossArea: number;      // m²
  openings: number;       // m² windows/doors
  plinthType: GevelPlinthType;
  height: number;         // m
  plinthLm: number;       // lm
  sillsAlu: number;       // lm
  sillsStone: number;     // lm
}

export interface GevelLine {
  label: string;
  amount: number;
}

export interface GevelResult {
  netArea: number;
  lines: GevelLine[];
  hFactor: number;
  subtotal: number;
  vatRate: number;
  vat: number;
  total: number;
  perM2: number;
  finishLabel: string;
  plinthLabel: string;
}

export function calculateGevel(input: GevelInput): GevelResult {
  const netArea = Math.max(0, input.grossArea - input.openings);
  const vatRate = input.projectType === "reno" ? 0.06 : 0.21;
  const fin = FINISH_RATES[input.finish];
  const hF = heightFactor(input.height);

  const base = (fin.material + fin.labor) * netArea;
  const insul = INSUL_PER_CM[input.insulation] * (input.thickness / 10) * netArea;
  const plinth = PLINTH_RATE[input.plinthType] * input.plinthLm;
  const sillsA = SILLS_ALU_RATE * input.sillsAlu;
  const sillsS = SILLS_STONE_RATE * input.sillsStone;
  const scaffold = SCAFFOLD_RATE * netArea;

  const rawSubtotal = base + insul + plinth + sillsA + sillsS + scaffold;
  const subtotal = rawSubtotal * hF;
  const vat = subtotal * vatRate;
  const total = subtotal + vat;

  const lines: GevelLine[] = [
    { label: `Afwerking (${input.finish}) materiaal + arbeid`, amount: base },
  ];
  if (insul > 0) lines.push({ label: `Isolatie ${input.thickness} cm (${input.insulation})`, amount: insul });
  const plinthLabels: Record<GevelPlinthType, string> = {
    blauwesteen: "Gevelplint in blauwe steen",
    mozaiek: "Gevelplint in mozaïek sokkel",
  };
  lines.push({ label: plinthLabels[input.plinthType], amount: plinth });
  if (sillsA > 0) lines.push({ label: "Vensterbanken aluminium", amount: sillsA });
  if (sillsS > 0) lines.push({ label: "Vensterbanken natuursteen", amount: sillsS });
  if (scaffold > 0) lines.push({ label: "Richtprijs stelling", amount: scaffold });
  if (hF > 1) lines.push({ label: `Hoogtefactor ×${hF.toFixed(2)}`, amount: subtotal * (1 - 1 / hF) });

  return {
    netArea,
    lines,
    hFactor: hF,
    subtotal,
    vatRate,
    vat,
    total,
    perM2: netArea > 0 ? Math.round(subtotal / netArea) : 0,
    finishLabel: input.finish,
    plinthLabel: plinthLabels[input.plinthType],
  };
}

// ═══════════════════════════════════════════════════════════════════
// DAK CALCULATOR — exact match to provided code
// ═══════════════════════════════════════════════════════════════════

export type DakType = "Plat dak" | "Hellend dak";
export interface DakBedekkingOption { name: string; desc: string; surcharge: number; }

export const PLAT_DAK_OPTIES: DakBedekkingOption[] = [
  { name: "Bitumen polymeer", desc: "Klassieke en betrouwbare rolbedekking", surcharge: 35 },
];

export const HELLEND_DAK_OPTIES: DakBedekkingOption[] = [
  { name: "Natuurleien (ardoise)", desc: "Klassiek, duurzaam, premiumuitstraling", surcharge: 85 },
  { name: "Keramische dakpannen", desc: "Traditioneel, lang leven, kleurvast", surcharge: 60 },
  { name: "Betonnen dakpannen", desc: "Betaalbaar en sterk, breed aanbod", surcharge: 45 },
  { name: "Bitumen dakshingles", desc: "Lichtgewicht, geschikt voor lage hellingen", surcharge: 40 },
  { name: "Vezelcement shingles", desc: "Modern en onderhoudsvriendelijk", surcharge: 50 },
  { name: "Metalen / gevouwen dakbedekking", desc: "Zink, staal of aluminium — modern en duurzaam", surcharge: 70 },
];

export type DakIsolatieType = "PIR-platen" | "Minerale wol" | "Houtvezel" | "Advies gewenst";
export type Bouwjaar = "Vóór 1970" | "1970 – 1990" | "1990 – 2005" | "Na 2005";

export interface DakInput {
  daktype: DakType;
  area: number;
  dakramen: number;
  schouwen: number;
  dakbedekking: string;
  dakbedekkingSurcharge: number;
  isolatie: DakIsolatieType;
  bouwjaar: Bouwjaar;
}

export interface DakPremie { name: string; amount: number; }

export interface DakResult {
  base: number;
  dakbedekkingKost: number;
  extrasKost: number;
  gross: number;
  grossMin: number;
  grossMax: number;
  premies: DakPremie[];
  premieTotal: number;
  net: number;
  asbestRequired: boolean;
  area: number;
  daktype: DakType;
  dakbedekking: string;
  isolatie: string;
}

export function calculateDak(input: DakInput): DakResult {
  const area = input.area;
  const base = 195 * area;  // €195/m² base (materiaal + arbeid + isolatie + onderdak)
  const dakbedekkingKost = input.dakbedekkingSurcharge * area;
  const extrasKost = input.dakramen * 450 + input.schouwen * 350;
  const gross = base + dakbedekkingKost + extrasKost;

  // Premies — Mijn VerbouwPremie only (since 2022, Fluvius no longer gives separate premie for professional dakisolatie)
  // Amounts depend on income category — we show an indicative range
  // Since March 2026: only income categories 3 and 4 can apply
  const premies: DakPremie[] = [];

  // Mijn VerbouwPremie — indicative, depends on income category
  // Cat 4: 50% of invoice, max ~€5,750
  // Cat 3: 35% of invoice, max ~€4,025
  // We use a conservative estimate for indication purposes
  const mvpEstimate = Math.min(Math.round(gross * 0.25), 2000); // conservative 25%, max €2,000
  if (mvpEstimate > 0) {
    premies.push({ name: "Mijn VerbouwPremie (indicatief)", amount: mvpEstimate });
  }

  // Asbestverwijderingsbonus: €8/m² extra when combined with asbest removal
  if (["Vóór 1970", "1970 – 1990"].includes(input.bouwjaar)) {
    const asbestBonus = Math.min(area * 8, Math.round(gross * 0.5));
    if (asbestBonus > 0) {
      premies.push({ name: "Asbestverwijderingsbonus (indien van toepassing)", amount: asbestBonus });
    }
  }
  const premieTotal = premies.reduce((s, p) => s + p.amount, 0);

  return {
    base, dakbedekkingKost, extrasKost, gross,
    grossMin: gross * 0.85, grossMax: gross * 1.18,
    premies, premieTotal,
    net: Math.max(0, gross - premieTotal),
    asbestRequired: ["Vóór 1970", "1970 – 1990"].includes(input.bouwjaar),
    area, daktype: input.daktype, dakbedekking: input.dakbedekking, isolatie: input.isolatie,
  };
}
