// src/content/projects.ts
// Portfolio/realisaties data — with work type, city, and result context

import { PHOTOS } from "@/lib/constants";

export interface Project {
  id: string;
  title: string;
  photo: typeof PHOTOS[keyof typeof PHOTOS];
  location: string;
  workType: string[];
  summary: string;
}

export const projects: Project[] = [
  {
    id: "gevel-meise",
    title: "Buitengevelisolatie met crepi",
    photo: PHOTOS.gevelCrepiMeise,
    location: "Meise",
    workType: ["Gevelisolatie", "Crepi"],
    summary: "Volledige buitengevelisolatie met EPS en minerale crepi-afwerking. Resultaat: modernere uitstraling en meetbare daling van het energieverbruik.",
  },
  {
    id: "gevel-antwerpen-1",
    title: "Gevelisolatie met crepi-afwerking",
    photo: PHOTOS.gevelCrepiAntwerpen,
    location: "Antwerpen",
    workType: ["Gevelisolatie", "Crepi"],
    summary: "Rijwoning in Antwerpen volledig geïsoleerd via de buitenzijde met een nieuwe crepi-afwerking in een lichte kleur. De woning won aanzienlijk aan uitstraling.",
  },
  {
    id: "dak-gevel-mechelen",
    title: "Dakvernieuwing en gevelisolatie",
    photo: PHOTOS.dakGevelMechelen,
    location: "Mechelen",
    workType: ["Dakrenovatie", "Gevelisolatie"],
    summary: "Combinatieproject: volledig nieuw dak met PIR-isolatie en buitengevelisolatie met crepi. Technisch efficiënt uitgevoerd in één fase.",
  },
  {
    id: "gevel-antwerpen-2",
    title: "Gevelisolatie met crepi",
    photo: PHOTOS.gevelCrepiAntw2,
    location: "Antwerpen",
    workType: ["Gevelisolatie", "Crepi"],
    summary: "Halfopen woning in Antwerpen voorzien van 10 cm EPS-isolatie en een strakke crepi-afwerking. Het EPC-label verbeterde met meerdere klassen.",
  },
  {
    id: "gevel-ekeren",
    title: "Gevelisolatie met duurzame crepi",
    photo: PHOTOS.gevelEkeren,
    location: "Ekeren",
    workType: ["Gevelisolatie", "Crepi"],
    summary: "Vrijstaande gezinswoning met groot geveloppervlak. Na isolatie en crepi is het energieverbruik structureel gedaald.",
  },
  {
    id: "spuitkurk-mortsel",
    title: "Spuitkurk gevelafwerking",
    photo: PHOTOS.spuitkurkMortsel,
    location: "Mortsel",
    workType: ["Spuitkurk", "Gevelisolatie"],
    summary: "Rijwoning afgewerkt met naadloze spuitkurk over gevelisolatie. De elastische laag volgt de gevel perfect en voorkomt scheuren.",
  },
  {
    id: "plat-dak-antwerpen",
    title: "Plat dak renovatie",
    photo: PHOTOS.platDak,
    location: "Antwerpen",
    workType: ["Dakrenovatie", "Dakisolatie"],
    summary: "Volledige vernieuwing van een plat dak met EPDM-bedekking en PIR-isolatie. Waterdicht, goed geïsoleerd en klaar voor de komende decennia.",
  },
  {
    id: "dak-gevel-wilrijk",
    title: "Dak- en gevelisolatie",
    photo: PHOTOS.wilrijk,
    location: "Wilrijk",
    workType: ["Dakisolatie", "Gevelisolatie"],
    summary: "Halfopen jaren-60 woning volledig geïsoleerd: dak én gevels in één fase. Maximale energetische verbetering met minimale overlast.",
  },
  {
    id: "dak-gevel-schilde",
    title: "Dak- en gevelisolatie",
    photo: PHOTOS.schilde,
    location: "Schilde",
    workType: ["Dakisolatie", "Gevelisolatie"],
    summary: "Ruime villa in Schilde voorzien van volledige dak- en gevelisolatie. Geïntegreerde aanpak voor maximaal energetisch resultaat.",
  },
  {
    id: "crepi-schoten",
    title: "Crepi na isolatiewerken",
    photo: PHOTOS.crepiSchoten,
    location: "Schoten",
    workType: ["Crepi", "Gevelisolatie"],
    summary: "Woning in Schoten afgewerkt met minerale crepi over nieuwe gevelisolatie. Strakke afwerking, duurzame bescherming.",
  },
];

export function getProjectsByCity(city: string): Project[] {
  return projects.filter(
    (p) => p.location.toLowerCase() === city.toLowerCase()
  );
}
