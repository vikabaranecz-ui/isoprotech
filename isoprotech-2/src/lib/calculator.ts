// src/lib/calculator.ts
// Calculator pricing logic — matching existing Isoprotech calculator exactly
// Antwerpen region, 2026 market rates

// ─── FORMATTING ──────────────────────────────────────────────────

export function formatEur(v: number): string {
  return new Intl.NumberFormat("nl-BE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(v);
}

export function formatRange(low: number, high: number): string {
  return `${formatEur(low)} – ${formatEur(high)}`;
}

// ─── DAK CALCULATOR ──────────────────────────────────────────────
// Matches the live isoprotech.be/calculator logic exactly

export type DakType = "Plat dak" | "Hellend dak";

export interface DakBedekkingOption {
  name: string;
  desc: string;
  surcharge: number; // €/m²
  img?: string;
}

export const PLAT_DAK_OPTIES: DakBedekkingOption[] = [
  { name: "Bitumen-polymeer", desc: "Klassieke en betrouwbare rolbedekking", surcharge: 35 },
  { name: "Synthetische membraan (EPDM / PVC / TPO)", desc: "Duurzaam en naadloos aangebracht", surcharge: 45 },
  { name: "Mastiekdak", desc: "Gietvloeibaar — ideaal voor complexe vormen", surcharge: 55 },
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

export interface DakPremie {
  name: string;
  amount: number;
}

export interface DakResult {
  // Breakdown
  base: number;        // €150/m² * area (materiaal + arbeid)
  dakbedekkingKost: number; // surcharge * area
  extrasKost: number;  // dakramen * 200 + schouwen * 150
  gross: number;       // base + dak + extras
  grossMin: number;    // gross * 0.85
  grossMax: number;    // gross * 1.18
  // Premies
  premies: DakPremie[];
  premieTotal: number;
  // Net
  net: number;         // gross - premies
  // Flags
  asbestRequired: boolean;
  // Input echo
  area: number;
  daktype: DakType;
  dakbedekking: string;
  isolatie: string;
}

export function calculateDak(input: DakInput): DakResult {
  const area = input.area;

  // Base cost: €150/m² for all work (materials + labor)
  const base = 150 * area;

  // Dakbedekking surcharge per m²
  const dakbedekkingKost = input.dakbedekkingSurcharge * area;

  // Extras
  const extrasKost = input.dakramen * 200 + input.schouwen * 150;

  // Gross total
  const gross = base + dakbedekkingKost + extrasKost;
  const grossMin = gross * 0.85;
  const grossMax = gross * 1.18;

  // Premies
  const premies: DakPremie[] = [];

  // Fluvius dakisolatiepremie
  const premieFluvius = area >= 20 ? Math.min(area * 7, 3500) : 0;
  if (premieFluvius > 0) {
    premies.push({ name: "Fluvius dakisolatiepremie", amount: premieFluvius });
  }

  // Mijn VerbouwPremie — for buildings before 2005
  const premieMVP =
    input.bouwjaar === "Vóór 1970" ||
    input.bouwjaar === "1970 – 1990" ||
    input.bouwjaar === "1990 – 2005"
      ? 1200
      : 0;
  if (premieMVP > 0) {
    premies.push({ name: "Mijn VerbouwPremie", amount: premieMVP });
  }

  // Gemeentelijke premie Antwerpen
  const premieAntw = area >= 40 ? 500 : 0;
  if (premieAntw > 0) {
    premies.push({ name: "Gemeentelijke premie Antwerpen", amount: premieAntw });
  }

  const premieTotal = premies.reduce((s, p) => s + p.amount, 0);
  const net = Math.max(0, gross - premieTotal);

  // Asbest check
  const asbestRequired =
    input.bouwjaar === "Vóór 1970" || input.bouwjaar === "1970 – 1990";

  return {
    base,
    dakbedekkingKost,
    extrasKost,
    gross,
    grossMin,
    grossMax,
    premies,
    premieTotal,
    net,
    asbestRequired,
    area,
    daktype: input.daktype,
    dakbedekking: input.dakbedekking,
    isolatie: input.isolatie,
  };
}

// ─── GEVEL CALCULATOR ────────────────────────────────────────────
// Range-based estimates for facade work

export type GevelAfwerking = "crepi" | "spuitkurk" | "steenstrips" | "kaleien";
export type GevelIsolatie = "geen" | "eps" | "mineraalwol";
export type ProjectType = "renovatie" | "nieuwbouw";

export interface GevelInput {
  projectType: ProjectType;
  afwerking: GevelAfwerking;
  isolatie: GevelIsolatie;
  totalOpp: number;
  raamOpp: number;
}

export interface GevelPriceRange {
  low: number;
  high: number;
  label: string;
}

export interface GevelResult {
  lines: GevelPriceRange[];
  subtotalLow: number;
  subtotalHigh: number;
  btwRate: number;
  btwLow: number;
  btwHigh: number;
  totalLow: number;
  totalHigh: number;
  perM2Low: number;
  perM2High: number;
  area: number;
  disclaimer: string;
}

const GEVEL_AFWERKING: Record<GevelAfwerking, [number, number]> = {
  crepi: [45, 60],
  spuitkurk: [50, 65],
  steenstrips: [75, 100],
  kaleien: [35, 50],
};

const GEVEL_ISOLATIE: Record<GevelIsolatie, [number, number]> = {
  geen: [0, 0],
  eps: [30, 42],
  mineraalwol: [35, 48],
};

export function calculateGevel(input: GevelInput): GevelResult {
  const netto = Math.max(0, input.totalOpp - input.raamOpp);
  const btwRate = input.projectType === "nieuwbouw" ? 0.21 : 0.06;

  const afwR = GEVEL_AFWERKING[input.afwerking];
  const isoR = GEVEL_ISOLATIE[input.isolatie];

  const lines: GevelPriceRange[] = [
    { label: `Afwerking (${input.afwerking})`, low: netto * afwR[0], high: netto * afwR[1] },
  ];

  if (input.isolatie !== "geen") {
    lines.push({ label: `Isolatie (${input.isolatie})`, low: netto * isoR[0], high: netto * isoR[1] });
  }

  lines.push({ label: "Stellingen", low: netto * 7, high: netto * 10 });
  lines.push({ label: "Voorbereiding en primer", low: netto * 5, high: netto * 12 });

  const subtotalLow = lines.reduce((s, l) => s + l.low, 0);
  const subtotalHigh = lines.reduce((s, l) => s + l.high, 0);

  return {
    lines,
    subtotalLow,
    subtotalHigh,
    btwRate,
    btwLow: subtotalLow * btwRate,
    btwHigh: subtotalHigh * btwRate,
    totalLow: subtotalLow * (1 + btwRate),
    totalHigh: subtotalHigh * (1 + btwRate),
    perM2Low: netto > 0 ? Math.round(subtotalLow / netto) : 0,
    perM2High: netto > 0 ? Math.round(subtotalHigh / netto) : 0,
    area: netto,
    disclaimer: "Indicatieve prijsvork op basis van gemiddelde marktprijzen in de regio Antwerpen (2026). De werkelijke prijs hangt af van de staat van uw gevel, bereikbaarheid, en specifieke materiaalkeuzes. Vraag een gratis inspectie aan voor een exacte offerte.",
  };
}
