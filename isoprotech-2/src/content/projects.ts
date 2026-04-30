// src/content/projects.ts

import { PHOTOS, VIDEOS } from "@/lib/constants";

export interface Project {
  id: string;
  title: string;
  photo: typeof PHOTOS[keyof typeof PHOTOS];
  beforePhoto?: typeof PHOTOS[keyof typeof PHOTOS];
  location: string;
  workType: string[];
  summary: string;
  videoUrl?: string;
}

export const projects: Project[] = [
  // Before/after pairs
  {
    id: "gevel-before-after-1",
    title: "Gevelisolatie met spuitkurk",
    photo: PHOTOS.gevelAfter1,
    beforePhoto: PHOTOS.gevelBefore1,
    location: "Antwerpen",
    workType: ["Gevelisolatie", "Spuitkurk"],
    summary: "Oude bakstenen gevel volledig geïsoleerd en afgewerkt met spuitkurk. De woning kreeg een moderne, strakke uitstraling en een aanzienlijk betere EPC-score.",
  },
  {
    id: "crepi-before-after-1",
    title: "Crepi renovatie achtergevel",
    photo: PHOTOS.crepiAfter1,
    beforePhoto: PHOTOS.crepiBefore1,
    location: "Antwerpen",
    workType: ["Gevelisolatie", "Crepi"],
    summary: "Verweerde achtergevel volledig vernieuwd met isolatie en strakke witte crepi. De achterkant van de woning is nu even verzorgd als de voorgevel.",
  },
  {
    id: "gevel-antwerpen-before-after",
    title: "Gevelisolatie appartement",
    photo: PHOTOS.gevelAntwAfter,
    beforePhoto: PHOTOS.gevelAntwBefore,
    location: "Antwerpen",
    workType: ["Gevelisolatie", "Crepi"],
    summary: "Appartementsgebouw met verouderde leien bekleding volledig geïsoleerd en afgewerkt met crepi. Moderne uitstraling en betere energieprestaties voor alle bewoners.",
  },
  // Regular projects
  {
    id: "gevel-meise",
    title: "Buitengevelisolatie met crepi",
    photo: PHOTOS.gevelCrepiMeise,
    location: "Meise",
    workType: ["Gevelisolatie", "Crepi"],
    summary: "Volledige buitengevelisolatie met EPS en minerale crepi-afwerking. Modernere uitstraling en meetbare daling van het energieverbruik.",
    videoUrl: VIDEOS.mainShowreel,
  },
  {
    id: "gevel-meise-2",
    title: "Crepi afwerking — andere hoek",
    photo: PHOTOS.gevelCrepiMeise2,
    location: "Meise",
    workType: ["Crepi"],
    summary: "Dezelfde woning in Meise — strakke witte crepi rondom het hele gebouw, inclusief zijgevel en achterkant.",
  },
  {
    id: "dak-schouw",
    title: "Dakrenovatie met schouwkap",
    photo: PHOTOS.dakSchouw,
    location: "Antwerpen",
    workType: ["Dakrenovatie"],
    summary: "Volledig nieuw dak met zwarte keramische pannen en een moderne schouwkap in antraciet. Waterdicht en esthetisch afgewerkt.",
  },
  {
    id: "dak-schouw-2",
    title: "Schouw met loodaansluiting",
    photo: PHOTOS.dakSchouw2,
    location: "Antwerpen",
    workType: ["Dakrenovatie"],
    summary: "Detail van schoorsteen met correcte loodaansluiting op nieuwe dakpannen. Vakkundige afwerking voorkomt lekkages.",
  },
  {
    id: "gevel-in-progress",
    title: "Gevelisolatie in uitvoering",
    photo: PHOTOS.gevelInProgress,
    location: "Antwerpen",
    workType: ["Gevelisolatie"],
    summary: "EPS-isolatieplaten worden aangebracht op de buitengevel met stellingen. Na de isolatie volgt de afwerking met crepi of spuitkurk.",
  },
  {
    id: "gevel-crepi-project",
    title: "Gevelisolatie met crepi",
    photo: PHOTOS.gevelCrepiProject,
    location: "Antwerpen",
    workType: ["Gevelisolatie", "Crepi"],
    summary: "Woning met garage voorzien van buitengevelisolatie en een strakke crepi-afwerking. De stellingen worden binnenkort verwijderd.",
  },
  {
    id: "crepi-schilde",
    title: "Crepi gevelafwerking",
    photo: PHOTOS.crepiSchilde,
    location: "Schilde",
    workType: ["Crepi", "Gevelisolatie"],
    summary: "Woning in Schilde met witte crepi gevelafwerking en donkere dakpannen. Klassieke uitstraling, moderne prestaties.",
    videoUrl: VIDEOS.projectHighlight,
  },
  {
    id: "plat-dak-antwerpen",
    title: "Plat dak renovatie",
    photo: PHOTOS.platDak,
    location: "Antwerpen",
    workType: ["Dakisolatie", "Dakrenovatie"],
    summary: "Volledige vernieuwing van een plat dak met PIR-isolatie en nieuwe waterdichte bedekking. Dronebeeld toont de omvang van het project.",
  },
];

export function getProjectsByCity(city: string): Project[] {
  return projects.filter(p => p.location.toLowerCase() === city.toLowerCase());
}
