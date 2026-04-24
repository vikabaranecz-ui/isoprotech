// src/content/reviews.ts
// Verified reviews — with source, service context, and dates

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  serviceType: string;
  location?: string;
  date: string;
  source: "google" | "internal";
}

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Eveline P.",
    rating: 5,
    text: "Zeer tevreden! Andrii hielp ons met meerdere projecten. De werken zijn allemaal zeer goed en mooi uitgevoerd. Goede opvolging en communicatie. Hij kwam ook vaak langs voor opvolging.",
    serviceType: "Gevelisolatie + Crepi",
    location: "Antwerpen",
    date: "2026-02",
    source: "google",
  },
  {
    id: "r2",
    name: "Senne T.",
    rating: 5,
    text: "Bijzonder tevreden over de klantgerichte aanpak. Professioneel uitgevoerd binnen korte termijn. Echte vakmannen die naar perfectie streven.",
    serviceType: "Dakrenovatie",
    location: "Mechelen",
    date: "2026-01",
    source: "google",
  },
  {
    id: "r3",
    name: "Chitra S.",
    rating: 5,
    text: "Professional team did incredible work. Quality of the materials used is excellent. Have already seen a huge difference in EPC attestation after the insulation works.",
    serviceType: "Gevelisolatie",
    location: "Antwerpen",
    date: "2025-12",
    source: "google",
  },
  {
    id: "r4",
    name: "Sara D.B.",
    rating: 5,
    text: "Het team houdt zich aan afspraken en planning. Zeer nauwkeurig en netjes. De communicatie verloopt vlot en transparant. Zeker een aanrader.",
    serviceType: "Dakisolatie",
    location: "Wilrijk",
    date: "2025-11",
    source: "google",
  },
];
