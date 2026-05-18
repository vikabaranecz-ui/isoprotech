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
    id: "plat-dak-voor-na",
    title: "Plat dak renovatie met houten gevelbekleding",
    photo: PHOTOS.platDakAfter,
    beforePhoto: PHOTOS.platDakBefore,
    location: "Antwerpen",
    workType: ["Dakrenovatie", "Dakisolatie"],
    summary: "Verouderd plat dak volledig vernieuwd met nieuwe bitumen bedekking en PIR-isolatie. Gecombineerd met afwerking van de houten gevelbekleding van de uitbouw.",
  },
  {
    id: "plat-dak-2-voor-na",
    title: "Plat dak vernieuwing",
    photo: PHOTOS.platDak2After,
    beforePhoto: PHOTOS.platDak2Before,
    location: "Antwerpen",
    workType: ["Dakrenovatie", "Dakisolatie"],
    summary: "Volledig vernieuwd plat dak met waterdichte bedekking. Eindresultaat: droog, geïsoleerd en klaar voor de komende decennia.",
  },
  {
    id: "binnentuin-voor-na",
    title: "Binnentuin renovatie met crepi",
    photo: PHOTOS.binnentuinAfter,
    beforePhoto: PHOTOS.binnentuinBefore,
    location: "Antwerpen",
    workType: ["Gevelisolatie", "Crepi"],
    summary: "Verwaarloosde binnentuin omgetoverd tot een strakke buitenruimte. Kale bakstenen muren volledig afgewerkt met witte crepi, nieuwe tegelvloer en sfeervolle wandverlichting.",
  },
  {
    id: "binnentuin-onderkant-voor-na",
    title: "Binnentuin — tweede hoek",
    photo: PHOTOS.binnentuinOnderkantAfter,
    beforePhoto: PHOTOS.binnentuinOnderkantBefore,
    location: "Antwerpen",
    workType: ["Gevelisolatie", "Crepi"],
    summary: "Tweede hoek van dezelfde binnentuin. Crepi afwerking rondom, inclusief technische details en afwerking aan de raamlijsten.",
  },
  {
    id: "hellend-dak-edegem-1",
    title: "Hellend dak renovatie",
    photo: PHOTOS.hellendDakEdegemAfter,
    beforePhoto: PHOTOS.hellendDakEdegemBefore,
    location: "Edegem",
    workType: ["Dakrenovatie", "Dakisolatie"],
    summary: "Volledig vernieuwd hellend dak in Edegem. Nieuwe dakpannen, isolatie en correcte afwerking van alle details zoals goten, nokken en aansluiting aan de gevel.",
  },
  {
    id: "hellend-dak-edegem-2",
    title: "Hellend dak renovatie met zonnepanelen",
    photo: PHOTOS.hellendDakEdegemAfter1,
    location: "Edegem",
    workType: ["Dakrenovatie", "Dakisolatie"],
    summary: "Volledig vernieuwd hellend dak met nieuwe keramische pannen. Zonnepanelen vakkundig geïntegreerd in het nieuwe dakwerk — waterdicht en esthetisch afgewerkt.",
  },
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
    id: "gevel-crepi-project",
    title: "Gevelisolatie met crepi afwerking",
    photo: PHOTOS.gevelCrepiProject,
    beforePhoto: PHOTOS.gevelInProgress,
    location: "Antwerpen",
    workType: ["Gevelisolatie", "Crepi"],
    summary: "Woning met garage volledig geïsoleerd en afgewerkt met strakke witte crepi. Links de situatie tijdens de uitvoering, rechts het eindresultaat.",
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
