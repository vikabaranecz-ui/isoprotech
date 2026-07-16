// src/content/projects.ts

import { PHOTOS, VIDEOS } from "@/lib/constants";

export interface Project {
  id: string;
  slug: string;
  title: string;
  photo: typeof PHOTOS[keyof typeof PHOTOS];
  beforePhoto?: typeof PHOTOS[keyof typeof PHOTOS];
  extraBeforeAfterPairs?: Array<{
    before: typeof PHOTOS[keyof typeof PHOTOS];
    after: typeof PHOTOS[keyof typeof PHOTOS];
  }>;
  extraPhotos?: Array<typeof PHOTOS[keyof typeof PHOTOS]>;
  location: string;
  citySlug?: string;
  workType: string[];
  serviceSlug?: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  videoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "plat-dak-voor-na",
    slug: "plat-dak-renovatie-antwerpen",
    title: "Plat dak renovatie met houten gevelbekleding",
    photo: PHOTOS.platDakAfter,
    beforePhoto: PHOTOS.platDakBefore,
    location: "Antwerpen",
    citySlug: "antwerpen",
    workType: ["Dakrenovatie", "Dakisolatie"],
    serviceSlug: "dakrenovatie",
    summary: "Verouderd plat dak volledig vernieuwd met nieuwe bitumen bedekking en PIR-isolatie. Gecombineerd met afwerking van de houten gevelbekleding van de uitbouw.",
    problem: "De eigenaar kampte al jaren met vochtproblemen en kleine lekkages bij het plat dak van de uitbouw. De bestaande dakbedekking — een verouderde, gefiberde bitumenlaag — was volledig aan het einde van haar levensduur. Bij zware regen drongen er waterstrepen door aan het plafond binnen.",
    solution: "ISOPROTECH verwijderde de volledige oude dakopbouw tot op de draagvloer. Vervolgens werd een nieuwe opbouw geplaatst met PIR-isolatieplaten (Rd ≥ 4,5 m²K/W) en een tweelaags verlijmde bitumen dakbedekking. De houten gevelbekleding van de uitbouw werd tegelijk vernieuwd en netjes aangesloten op het nieuwe dak.",
    result: "Geen lekkages meer, een meetbaar warmere leefruimte in de uitbouw en een dak met 10 jaar garantie. De eigenaar merkte meteen het verschil op tijdens de eerste winter na de werken.",
    seo: {
      title: "Plat Dak Renovatie Antwerpen — Case Study ISOPROTECH",
      description: "Plat dak renovatie in Antwerpen: lekkage verholpen, nieuwe PIR-isolatie en bitumen dakbedekking. Bekijk de voor- en nafoto's van dit project.",
      keywords: ["plat dak renovatie antwerpen", "plat dak lekkage antwerpen", "dakrenovatie antwerpen", "bitumen dakbedekking antwerpen"],
    },
  },
  {
    id: "plat-dak-2-voor-na",
    slug: "plat-dak-vernieuwing-antwerpen",
    title: "Plat dak vernieuwing — waterdicht en toekomstbestendig",
    photo: PHOTOS.platDak2After,
    beforePhoto: PHOTOS.platDak2Before,
    location: "Antwerpen",
    citySlug: "antwerpen",
    workType: ["Dakrenovatie", "Dakisolatie"],
    serviceSlug: "dakrenovatie",
    summary: "Volledig vernieuwd plat dak met waterdichte bedekking. Eindresultaat: droog, geïsoleerd en klaar voor de komende decennia.",
    problem: "Een rijwoning in Antwerpen had een sterk verouderd plat dak dat al twee keer noodlap-werk had gekregen. De oude dakbedekking bladderde af, vertoonde blaasvorming en kon het regenwater niet langer correct afvoeren. De eigenaar wilde een definitieve oplossing — geen herstelling meer maar een volledig nieuwe opbouw.",
    solution: "Alle bestaande lagen werden volledig afgevoerd. Op de draagvloer werd een nieuw dampscherm aangebracht, gevolgd door robuuste PIR-isolatie en een tweelaags bitumen dakbedekking met elastomeer. De dakgoten en hemelwaterafvoeren werden tegelijk meegenomen en correct aangesloten.",
    result: "Een volledig waterdicht, goed geïsoleerd plat dak met correcte afvoer. De woning scoort nu aanzienlijk beter op EPC. Garantie 10 jaar op materialen en uitvoering.",
    seo: {
      title: "Plat Dak Vernieuwing Antwerpen — Voor & Na | ISOPROTECH",
      description: "Plat dak volledig vernieuwd in Antwerpen. Van verouderde dakbedekking naar nieuwe PIR-isolatie en bitumen. Bekijk het resultaat.",
      keywords: ["plat dak vernieuwen antwerpen", "nieuw plat dak antwerpen", "dakwerken antwerpen", "dakrenovatie antwerpen"],
    },
  },
  {
    id: "binnentuin-voor-na",
    slug: "binnentuin-renovatie-crepi-antwerpen",
    title: "Binnentuin renovatie met crepi Berchem — van verlaten naar strak",
    photo: PHOTOS.binnentuinAfter,
    beforePhoto: PHOTOS.binnentuinBefore,
    extraBeforeAfterPairs: [
      { before: PHOTOS.binnentuinOnderkantBefore, after: PHOTOS.binnentuinOnderkantAfter },
    ],
    location: "Berchem",
    citySlug: "antwerpen",
    workType: ["Gevelisolatie", "Crepi"],
    serviceSlug: "crepi",
    summary: "Verwaarloosde binnentuin in Berchem omgetoverd tot een strakke buitenruimte. Kale bakstenen muren volledig afgewerkt met witte crepi, nieuwe tegelvloer en sfeervolle wandverlichting.",
    problem: "De binnentuin van een rijwoning in Antwerpen was al jaren verwaarloosd. De bakstenen muren waren donker, vochtig en onaantrekkelijk. Mos en algen hadden vrij spel en de ruimte werd nauwelijks gebruikt. De eigenaar wilde de binnentuin omtoveren tot een bruikbare, esthetische buitenruimte.",
    solution: "ISOPROTECH reinigde en voorbehandelde alle wanden grondig. Vervolgens werden de muren voorzien van een isolerende hechtmortel en afgewerkt met witte minerale crepi. De textuur en lichtreflectie van de crepi maken de smalle ruimte optisch veel groter. Wandverlichting werd discreet geïntegreerd in de afwerking. Ook de technische hoek met leidingen en raamaansluiting werd naadloos meegenomen.",
    result: "Een lichte, strakke binnentuin die de bewoners dagelijks gebruiken. De witte crepi weerkaatst het licht en maakt de ruimte aangenamer. De eigenaar beschouwt dit project als één van de beste investeringen in de woning.",
    seo: {
      title: "Binnentuin Renovatie met Crepi Berchem Antwerpen — ISOPROTECH",
      description: "Binnentuin gerenoveerd met witte minerale crepi in Berchem Antwerpen. Van verlaten muren naar strakke buitenruimte. Bekijk de voor- en nafoto's.",
      keywords: ["binnentuin renovatie antwerpen", "crepi binnentuin antwerpen", "binnentuin renovatie berchem", "gevelafwerking antwerpen", "crepi antwerpen"],
    },
  },
  {
    id: "hellend-dak-edegem-1",
    slug: "hellend-dak-renovatie-edegem",
    title: "Hellend dak renovatie Edegem — nieuw van A tot Z",
    photo: PHOTOS.hellendDakEdegemAfter,
    beforePhoto: PHOTOS.hellendDakEdegemBefore,
    location: "Edegem",
    citySlug: "edegem",
    workType: ["Dakrenovatie", "Dakisolatie"],
    serviceSlug: "dakrenovatie",
    summary: "Volledig vernieuwd hellend dak in Edegem. Nieuwe dakpannen, isolatie en correcte afwerking van alle details zoals goten, nokken en aansluiting aan de gevel.",
    problem: "Een vrijstaande woning in Edegem had een oud hellend dak waarvan de dakpannen barsten vertoonden en meerdere pannen waren verschoven. Na hevige regenval sijpelde er water in langs de nokvorst. De onderdakfolie was ook volledig verouderd en beschermd de constructie niet langer.",
    solution: "ISOPROTECH brak het volledige dakvlak af tot op de dakspanten. Nieuwe onderdakfolie werd aangebracht, gevolgd door isolatie tussen de gordingen en nieuwe latten. Het dak werd afgedekt met nieuwe keramische dakpannen. Alle aansluitingen — goot, nokvorst, schouwvoeten — werden met lood en siliconenkit zorgvuldig afgewerkt.",
    result: "Een volledig droog, geïsoleerd hellend dak in Edegem met een verwachte levensduur van 40+ jaar. De eigenaar bespaart significant op verwarmingskosten en hoeft de komende decennia niet meer aan zijn dak te denken.",
    seo: {
      title: "Hellend Dak Renovatie Edegem — Case Study | ISOPROTECH",
      description: "Hellend dak volledig gerenoveerd in Edegem: nieuwe dakpannen, isolatie en afwerking. Bekijk de voor- en nafoto's van dit dakrenovatieproject.",
      keywords: ["hellend dak renovatie edegem", "dakrenovatie edegem", "nieuwe dakpannen edegem", "dakwerken edegem"],
    },
  },
  {
    id: "hellend-dak-edegem-2",
    slug: "hellend-dak-zonnepanelen-edegem",
    title: "Hellend dak met zonnepanelen in Edegem — waterdichte integratie",
    photo: PHOTOS.hellendDakEdegemAfter1,
    location: "Edegem",
    citySlug: "edegem",
    workType: ["Dakrenovatie", "Dakisolatie"],
    serviceSlug: "dakrenovatie",
    summary: "Volledig vernieuwd hellend dak met nieuwe keramische pannen in Edegem. Zonnepanelen vakkundig geïntegreerd in het nieuwe dakwerk — waterdicht en esthetisch afgewerkt.",
    problem: "De eigenaar in Edegem wou zijn dak laten renoveren én tegelijk zonnepanelen laten plaatsen. Het risico: door het gebruik van twee afzonderlijke aannemers zouden de dakdoorgangen voor de zonnepanelen niet waterdicht zijn gegarandeerd. Er was nood aan één partij die het totaalplaatje beheerde.",
    solution: "ISOPROTECH coördineerde de dakvernieuwing en de integratie van de zonnepanelen in nauw overleg met de zonnepanelenleverancier. De doorvoeringen werden vakkundig afgedicht voor en na plaatsing van de panelen. Het resultaat is een dakbedekkingssysteem dat én de zonnepanelen draagt én volledig waterdicht is.",
    result: "Een duurzaam, waterdicht dak in Edegem met geïntegreerde zonnepanelen. De eigenaar geniet nu van lagere energiefacturen dankzij de combinatie van betere isolatie én zonne-energie. Geen zorgen over lekke dakdoorgangen.",
    seo: {
      title: "Dakrenovatie met Zonnepanelen Edegem — ISOPROTECH",
      description: "Hellend dak gerenoveerd met zonnepanelen in Edegem. Waterdichte integratie van zonnepanelen in nieuwe dakbedekking. Bekijk het eindresultaat.",
      keywords: ["dakrenovatie zonnepanelen edegem", "hellend dak edegem", "dakwerken edegem", "zonnepanelen dak edegem"],
    },
  },
  {
    id: "gevel-before-after-1",
    slug: "gevelisolatie-spuitkurk-antwerpen",
    title: "Spuitkurk gevelafwerking Antwerpen — bakstenen gevel getransformeerd",
    photo: PHOTOS.gevelAfter1,
    beforePhoto: PHOTOS.gevelBefore1,
    location: "Antwerpen",
    citySlug: "antwerpen",
    workType: ["Gevelisolatie", "Spuitkurk"],
    serviceSlug: "gevelisolatie",
    summary: "Oude bakstenen gevel volledig geïsoleerd en afgewerkt met spuitkurk. De woning kreeg een moderne, strakke uitstraling en een aanzienlijk betere EPC-score.",
    problem: "Een rijwoning in Antwerpen had een koude, ongeïsoleerde bakstenen buitengevel. Het energieverbruik was hoog en de woning was moeilijk te verwarmen. De eigenaar wou ook de uitstraling verbeteren: de donkere bakstenen gaven de woning een verouderd uiterlijk.",
    solution: "ISOPROTECH plaatste EPS-isolatieplaten (60 mm) op de volledige buitengevel met een isolatiewaarde van Rd ≥ 1,5 m²K/W. Als afwerking werd spuitkurk aangebracht — een natuurlijke, dampopen afwerking die de thermische massa van de wand behoudt. De spuitkurktextuur geeft een warme, organische uitstraling.",
    result: "De woning verloor aanzienlijk minder warmte, het EPC-label verbeterde met meerdere klassen en de gevel oogt modern en verzorgd. De eigenaar bespaart naar schatting 20 tot 25% op de verwarmingskosten.",
    seo: {
      title: "Spuitkurk Gevelafwerking Antwerpen — Voor & Na | ISOPROTECH",
      description: "Bakstenen gevel geïsoleerd met spuitkurk in Antwerpen. EPS-isolatie + spuitkurk afwerking. Bekijk de voor- en nafoto's en het resultaat.",
      keywords: ["spuitkurk antwerpen", "gevelisolatie spuitkurk antwerpen", "spuitkurk gevel antwerpen", "buitengevelisolatie antwerpen", "gevelrenovatie antwerpen"],
    },
  },
  {
    id: "crepi-before-after-1",
    slug: "crepi-achtergevel-antwerpen",
    title: "Crepi renovatie achtergevel Antwerpen — van verweerd naar smetteloos",
    photo: PHOTOS.crepiAfter1,
    beforePhoto: PHOTOS.crepiBefore1,
    location: "Antwerpen",
    citySlug: "antwerpen",
    workType: ["Gevelisolatie", "Crepi"],
    serviceSlug: "crepi",
    summary: "Verweerde achtergevel volledig vernieuwd met isolatie en strakke witte crepi. De achterkant van de woning is nu even verzorgd als de voorgevel.",
    problem: "De achtergevel van een rijwoning in Antwerpen was nooit mee gerenoveerd. Het beton was gebarsten, vertoonde vochtplekken en was donker van algen. De eigenaar wou de achtergevel laten renoveren maar ook gelijk isoleren, zonder de achterkant van de woning te verwaarlozen in schoonheid.",
    solution: "Na een grondige reiniging werd de gevel behandeld met hechtingprimer. Vervolgens werd EPS-isolatie bevestigd en werd een basislaag aangebracht met glasvezelnet. De afwerking was een witte fijnkorrelige crepi die strak werd uitgevlakt. De geveldelen rond ramen werden waterdicht afgedicht.",
    result: "Een verweerde, koude achtergevel werd omgetoverd tot een strakke, isolerende wand. De woning is nu aan voor- én achterkant verzorgd en de totale isolatiewaarde verbeterde merkbaar.",
    seo: {
      title: "Crepi Achtergevel Antwerpen — Voor & Na | ISOPROTECH",
      description: "Verweerde achtergevel vernieuwd met isolatie en crepi in Antwerpen. Van gebarsten beton naar strakke witte gevel. Bekijk het resultaat.",
      keywords: ["crepi achtergevel antwerpen", "gevelrenovatie antwerpen", "crepi antwerpen", "gevelisolatie antwerpen"],
    },
  },
  {
    id: "gevel-antwerpen-before-after",
    slug: "gevelisolatie-appartementsgebouw-antwerpen",
    title: "Gevelisolatie appartement Antwerpen — van leien bekleding naar crepi",
    photo: PHOTOS.gevelAntwAfter,
    beforePhoto: PHOTOS.gevelAntwBefore,
    location: "Antwerpen",
    citySlug: "antwerpen",
    workType: ["Gevelisolatie", "Crepi"],
    serviceSlug: "gevelisolatie",
    summary: "Appartementsgebouw met verouderde leien bekleding volledig geïsoleerd en afgewerkt met crepi. Moderne uitstraling en betere energieprestaties voor alle bewoners.",
    problem: "Een appartementsgebouw in Antwerpen had een verouderde lei-bekleding die barsten vertoonde, waterinfiltratie veroorzaakte en esthetisch sterk verouderd was. De VME wou de gevel laten renoveren en tegelijk isoleren om de stookkosten voor alle bewoners te doen dalen.",
    solution: "ISOPROTECH coördineerde het project in overleg met de VME. De verouderde leien bekleding werd volledig afgenomen. Daarna werden EPS-isolatieplaten bevestigd over de volledige gevel, voorzien van glasvezelarmering en afgewerkt met witte minerale crepi. Het werk werd uitgevoerd terwijl de bewoners in de appartementen woonden.",
    result: "Een modern appartementsgebouw in Antwerpen dat energetisch aanzienlijk beter presteert. Alle bewoners profiteren van lagere stookkosten. De VME ontving ook een hogere waardering bij de volgende EPC-audit van het gebouw.",
    seo: {
      title: "Gevelisolatie Appartement Antwerpen — Case Study | ISOPROTECH",
      description: "Appartementsgebouw geïsoleerd en afgewerkt met crepi in Antwerpen. Van verouderde leien bekleding naar moderne gevel. Bekijk de transformatie.",
      keywords: ["gevelisolatie appartement antwerpen", "VME gevelrenovatie antwerpen", "crepi appartement antwerpen", "buitengevelisolatie antwerpen"],
    },
  },
  {
    id: "crepi-antwerpen",
    slug: "crepi-voorgevel-renovatie-antwerpen",
    title: "Crepi voorgevel renovatie Antwerpen — strakke gevel met dark accent",
    photo: PHOTOS.crepiAntwAfter,
    location: "Antwerpen",
    citySlug: "antwerpen",
    workType: ["Gevelisolatie", "Crepi"],
    serviceSlug: "crepi",
    summary: "Volledige voorgevel vernieuwd met witte crepi. Strakke, moderne uitstraling met donkere plint en raamafwerking. Klaar voor de komende decennia.",
    problem: "Een Antwerpse stadswoning had een verouderde voorgevel met loskomende bepleistering en een daterende kleur. De eigenaar wou de woning moderniseren en tegelijk de thermische prestaties verbeteren, met oog voor een strakke, eigentijdse esthetiek.",
    solution: "Na voorbereiding van de ondergrond bevestigde ISOPROTECH EPS-isolatieplaten op de volledige voorgevel. De afwerking is een witte fijnkorrelige crepi met een donkere plint en donkere raamaansluiting — een moderne tweekleur techniek die de architectuur van de gevel benadrukt.",
    result: "Een stadswoning in Antwerpen die niet meer te herkennen is als dezelfde gevel. De eigenaar kreeg precies wat hij wou: een moderne, strakke uitstraling die past in de eigentijdse Antwerpse architectuur. De isolatie doet de rest.",
    seo: {
      title: "Crepi Voorgevel Renovatie Antwerpen — Case Study | ISOPROTECH",
      description: "Voorgevel vernieuwd met witte crepi en donker accent in Antwerpen. Moderne gevelafwerking met isolatie. Bekijk de transformatie.",
      keywords: ["crepi voorgevel antwerpen", "gevelrenovatie antwerpen", "crepi antwerpen", "gevelisolatie antwerpen"],
    },
  },
  {
    id: "gevel-meise",
    slug: "buitengevelisolatie-crepi-meise",
    title: "Buitengevelisolatie met crepi in Meise — EPS + minerale afwerking",
    photo: PHOTOS.gevelCrepiMeise,
    location: "Meise",
    citySlug: "meise",
    workType: ["Gevelisolatie", "Crepi"],
    serviceSlug: "gevelisolatie",
    summary: "Volledige buitengevelisolatie met EPS en minerale crepi-afwerking in Meise. Modernere uitstraling en meetbare daling van het energieverbruik.",
    problem: "Een vrijstaande woning in Meise had een ongeïsoleerde buitengevel in gewone baksteen. De woning dateerde uit de jaren 1970 en had nooit spouwmuurisolatie of buitengevelisolatie gekregen. Het energieverbruik was navenant hoog en het EPC-label stond een verhuur in de weg.",
    solution: "ISOPROTECH voerde een volledige ETICS-isolatie uit: EPS-platen van 100 mm werden verlijmd en mechanisch bevestigd op de gevelvlakken. Na het aanbrengen van de basislaag en glasvezelwapening werd een witte minerale crepi aangebracht met een fijne, uniforme textuur.",
    result: "De woning in Meise daalde van een F-score naar een C op het EPC. Het energieverbruik daalde met naar schatting 30%. De eigenaar kon de woning nu ook legaal verhuren met een gunstig EPC-label. Dit project werd gefeatured in onze showreelvideo.",
    seo: {
      title: "Buitengevelisolatie met Crepi Meise — ISOPROTECH",
      description: "Buitengevelisolatie met EPS en minerale crepi op vrijstaande woning in Meise. EPC verbeterd van F naar C. Bekijk het voor- en naresultaat.",
      keywords: ["buitengevelisolatie meise", "crepi meise", "gevelisolatie meise", "EPS isolatie meise"],
    },
    videoUrl: VIDEOS.mainShowreel,
  },
  {
    id: "gevel-meise-2",
    slug: "crepi-afwerking-rondom-meise",
    title: "Crepi rondom in Meise — volledige afwerking inclusief zijgevel",
    photo: PHOTOS.gevelCrepiMeise2,
    location: "Meise",
    citySlug: "meise",
    workType: ["Crepi"],
    serviceSlug: "crepi",
    summary: "Dezelfde woning in Meise — strakke witte crepi rondom het hele gebouw, inclusief zijgevel en achterkant.",
    problem: "Na de renovatie van de hoofdgevel bleek ook de zijgevel en achterkant van de woning in Meise dringend aan vernieuwing toe. De blote baksteen op de zijkant absorbeerde vocht bij hevige regen en de eigenaar wou een uniforme afwerking rond het hele gebouw.",
    solution: "ISOPROTECH verlengde de opdracht naadloos naar de zijgevel en achterkant. Dezelfde isolatielaag en crepi-afwerking werd aangebracht, zodat de woning volledig uniform oogt. Bijzondere aandacht werd besteed aan de hoekverbindingen en de waterdichting bij ramen en deuren.",
    result: "Een volledig rondom geïsoleerde en afgewerkte woning in Meise. Geen enkel gevelgedeelte is nog onbeschermd. De eigenaar noemt het resultaat 'als een nieuwbouw van buiten bekeken'.",
    seo: {
      title: "Crepi Afwerking Rondom Meise — ISOPROTECH Case Study",
      description: "Woning in Meise volledig rondom afgewerkt met witte crepi. Zijgevel en achterkant naadloos geïsoleerd en afgewerkt. Bekijk het eindresultaat.",
      keywords: ["crepi rondom woning meise", "gevelisolatie meise", "crepi meise", "gevelafwerking meise"],
    },
  },
  {
    id: "crepi-schilde",
    slug: "crepi-gevelafwerking-schilde",
    title: "Crepi gevelafwerking Schilde — klassieke woning, moderne prestaties",
    photo: PHOTOS.crepiSchilde,
    location: "Schilde",
    citySlug: "schilde",
    workType: ["Crepi", "Gevelisolatie"],
    serviceSlug: "crepi",
    summary: "Woning in Schilde met witte crepi gevelafwerking en donkere dakpannen. Klassieke uitstraling, moderne energieprestaties.",
    problem: "Een klassieke villa in Schilde had de originele betonnen bepleistering die verouderd, gescheurd en vochtgevoelig was. De eigenaar wou een afwerking die past bij de klassieke architectuur maar ook thermisch presteert — geen strakke moderne look maar een warme, tijdloze gevelafwerking.",
    solution: "ISOPROTECH koos voor een grove minerale crepi-textuur die harmonieus aansluit bij de villa-architectuur in Schilde. De isolatiedikte werd afgestemd op de dakoverhangs en raamlateien. De kleurkeuze — een gebroken wit met lichte grijstonen — versterkt de klassieke uitstraling.",
    result: "Een villa in Schilde die energetisch is bijgewerkt zonder haar karakter te verliezen. De bewoners zijn bijzonder tevreden: stiller, warmer en esthetisch gerijpt. Bijkomend werd ook de video van dit project uitgebracht op ons kanaal.",
    seo: {
      title: "Crepi Gevelafwerking Schilde — Case Study | ISOPROTECH",
      description: "Crepi gevelafwerking op klassieke villa in Schilde. Witte minerale crepi met isolatie. Bekijk het eindresultaat van dit gevelrenovatieproject.",
      keywords: ["crepi schilde", "gevelisolatie schilde", "gevelafwerking schilde", "crepi villa schilde"],
    },
    videoUrl: VIDEOS.projectHighlight,
  },
  {
    id: "plat-dak-antwerpen",
    slug: "plat-dak-renovatie-dronefilm-antwerpen",
    title: "Groot plat dak renovatie Antwerpen — compleet beeld vanuit de lucht",
    photo: PHOTOS.platDak,
    location: "Antwerpen",
    citySlug: "antwerpen",
    workType: ["Dakisolatie", "Dakrenovatie"],
    serviceSlug: "dakrenovatie",
    summary: "Volledige vernieuwing van een groot plat dak in Antwerpen met PIR-isolatie en nieuwe waterdichte bedekking. Dronebeeld toont de omvang van het project.",
    problem: "Een groot plat dak op een rijwoning in Antwerpen had een verouderde, loskomende EPDM-bedekking die op meerdere plaatsen lekte. De PIR-isolatie eronder was doorweekt door jarenlange vochtinfiltratie en moest volledig vervangen worden.",
    solution: "Complete afbraak van de bestaande dakopbouw. Nieuw dampscherm op de draagvloer, nieuwe PIR-isolatieplaten (120 mm) en een tweelaags bitumen dakbedekking die via laswereld is aangebracht. Alle dakrandafsluitingen en lood werden meegenomen. Een drone-inspectie na de werken bevestigde de kwaliteit van het eindresultaat.",
    result: "Een volledig vernieuwd groot plat dak in Antwerpen. De eigenaar heeft geen enkele zorg meer over lekkages. De PIR-isolatie levert een Rd-waarde van meer dan 5 m²K/W — een grote stap vooruit op het EPC.",
    seo: {
      title: "Groot Plat Dak Renovatie Antwerpen — Dronefilm | ISOPROTECH",
      description: "Groot plat dak volledig gerenoveerd in Antwerpen. PIR-isolatie en tweelaags bitumen dakbedekking. Dronebeelden van het eindresultaat.",
      keywords: ["plat dak renovatie antwerpen", "grote dak vernieuwing antwerpen", "dakisolatie antwerpen", "plat dak lekkage antwerpen"],
    },
  },
  {
    id: "crepi-oranje-1",
    slug: "crepi-oranje-gevelafwerking-antwerpen",
    title: "Oranje crepi gevelafwerking Antwerpen — een unieke kleurkeuze",
    photo: PHOTOS.crepiOranje1,
    extraPhotos: [PHOTOS.crepiOranje2, PHOTOS.crepiOranje3],
    location: "Antwerpen",
    citySlug: "antwerpen",
    workType: ["Gevelisolatie", "Crepi"],
    serviceSlug: "crepi",
    summary: "Woning volledig geïsoleerd en afgewerkt met warm oranje crepi in Antwerpen. Een opvallende kleurkeuze die de buurt op zijn kop zet.",
    problem: "De eigenaar van een stadswoning in Antwerpen wou iets doen wat zijn buren niet durfden: kiezen voor een afwijkende kleur. De gevel was reeds verouderd en moest gerenoveerd worden. De vraag was hoe je een eigenzinnige kleurkeuze vakkundig vertaalt in een kwalitatieve crepi-afwerking.",
    solution: "ISOPROTECH werkte nauw samen met de eigenaar bij de kleurkeuze: meerdere staalkaarten werden gemonteerd op de gevel bij verschillende lichtomstandigheden. Na de keuze voor een warme terracottaoranje werd EPS-isolatie aangebracht en afgewerkt met een gepigmenteerde minerale crepi van topkwaliteit. De kleur is doordrenkt tot diep in de pleisterlaag.",
    result: "Een woning in Antwerpen die opvalt in de straat — op een goede manier. Bezoekers vragen geregeld bij de eigenaar welke aannemer het heeft gedaan. De minerale crepi is UV-stabiel en onderhoudsvriendelijk.",
    seo: {
      title: "Oranje Crepi Gevelafwerking Antwerpen — Case Study | ISOPROTECH",
      description: "Woning in Antwerpen afgewerkt met warm oranje minerale crepi en EPS-isolatie. Een unieke kleurkeuze professioneel uitgevoerd. Bekijk het resultaat.",
      keywords: ["oranje crepi antwerpen", "gekleurde crepi antwerpen", "crepi antwerpen", "gevelisolatie antwerpen kleur"],
    },
  },
  {
    id: "crepi-hoboken-1",
    slug: "crepi-gevelisolatie-hoboken",
    title: "Crepi gevelisolatie Hoboken — van verweerd naar smetteloos wit",
    photo: PHOTOS.crepiHobokenAfter,
    beforePhoto: PHOTOS.crepiHobokenBefore,
    extraBeforeAfterPairs: [
      { before: PHOTOS.crepiHoboken1Before, after: PHOTOS.crepiHoboken2After },
    ],
    location: "Hoboken",
    citySlug: "antwerpen",
    workType: ["Gevelisolatie", "Crepi"],
    serviceSlug: "crepi",
    summary: "Verweerde gevel in Hoboken volledig vernieuwd met isolatie en strakke witte minerale crepi. Voor- en nafoto's van voor- en achterzijde tonen de indrukwekkende transformatie.",
    problem: "Een rijwoning in Hoboken had een verouderde bepleistering die op meerdere plaatsen losging, barsten vertoonde en vochtplekken had. Zowel de voor- als de achtergevel waren aan vernieuwing toe. De eigenaar wou een duurzame oplossing die tegelijk de gevel laat ademhalen en isoleert.",
    solution: "ISOPROTECH verwijderde de loskomende lagen, behandelde de ondergrond met hechtingprimer en bracht EPS-isolatieplaten aan op de volledige woning. Als afwerking werd een fijnkorrelige witte minerale crepi aangebracht — dampopen, vorstbestendig en UV-stabiel. De buitenhoeken werden strak getroffeerd met aluminium hoekprofielen.",
    result: "Een strakke, witte woning in Hoboken die aan alle kanten uniform oogt. Geen barsten, geen vochtproblemen. De eigenaar merkt dat de woning in de winter merkbaar minder snel afkoelt.",
    seo: {
      title: "Crepi Gevelisolatie Hoboken — Voor & Na | ISOPROTECH",
      description: "Verweerde gevel in Hoboken volledig vernieuwd met isolatie en witte minerale crepi. Voor- en nafoto's van voor- en achterzijde. Bekijk de transformatie.",
      keywords: ["crepi hoboken", "gevelisolatie hoboken", "gevelrenovatie hoboken", "crepi antwerpen hoboken"],
    },
  },
  {
    id: "crepi-mechelen",
    slug: "crepi-gevelafwerking-mechelen",
    title: "Crepi gevelafwerking Mechelen — bakstenen gevel getransformeerd",
    photo: PHOTOS.crepiMechelenAfter,
    beforePhoto: PHOTOS.crepiMechelenBefore,
    location: "Mechelen",
    citySlug: "mechelen",
    workType: ["Gevelisolatie", "Crepi"],
    serviceSlug: "crepi",
    summary: "Woning in Mechelen volledig gerenoveerd met gevelisolatie en witte minerale crepi. Bakstenen gevel omgetoverd tot strakke, moderne afwerking.",
    problem: "Een rijwoning in Mechelen had een kale bakstenen gevel die nooit was afgewerkt. De eigenaar wou de woning moderniseren, beter isoleren en de waarde verhogen. De uitdaging: een uniforme crepi-afwerking aanbrengen op de onregelmatige bakstenen ondergrond.",
    solution: "Na een grondige reiniging en egalisatie van de ondergrond werden EPS-isolatieplaten aangebracht. Een drielaags opbouw — basislaag, glasvezelnet, topcoat — garandeerde een perfecte vlakheid. De afwerking is een witte fijnkorrelige minerale crepi, identiek van boven tot onder.",
    result: "Een volledig getransformeerde gevel in Mechelen. De eigenaar ziet niet alleen een mooiere woning — de eerste stookfactuur na de werken toonde ook een duidelijke besparing op het gasverbruik. Een project dat ISOPROTECH trots op is.",
    seo: {
      title: "Crepi Gevelafwerking Mechelen — Voor & Na | ISOPROTECH",
      description: "Bakstenen gevel in Mechelen getransformeerd met gevelisolatie en witte minerale crepi. Bekijk de voor- en nafoto's van dit crepiproject.",
      keywords: ["crepi mechelen", "gevelisolatie mechelen", "gevelafwerking mechelen", "gevelrenovatie mechelen"],
    },
  },
  {
    id: "gevel-meise-voor-na",
    slug: "gevelisolatie-crepi-meise-voor-na",
    title: "Gevelisolatie + crepi Meise — voor en na volledig in beeld",
    photo: PHOTOS.gevelCrepiMeiseNa,
    beforePhoto: PHOTOS.gevelCrepiMeiseVoor,
    extraBeforeAfterPairs: [
      { before: PHOTOS.gevelCrepiMeiseVoor1, after: PHOTOS.gevelCrepiMeiseNa1 },
    ],
    location: "Meise",
    citySlug: "meise",
    workType: ["Gevelisolatie", "Crepi"],
    serviceSlug: "gevelisolatie",
    summary: "Volledig voor- en nadocumentatie van gevelisolatie + crepi op woning in Meise. Van ongeïsoleerde bakstenen gevel naar moderne, energiezuinige afwerking.",
    problem: "Een woning in Meise had nooit buitengevelisolatie gekregen. De bakstenen gevel verloor veel warmte en de eigenaar had last van vochtproblemen aan de binnenzijde. Een totaaloverzicht van voor tot na was gevraagd als referentiedocumentatie.",
    solution: "ISOPROTECH voerde een volledige ETICS-isolatie uit op de woning in Meise: EPS-isolatieplaten van 100 mm, glasvezelarmering en witte minerale crepi. Alle aansluitingen, hoeken en geveldoorbrekingen werden correct afgewerkt. De voor- en nafoto's zijn genomen vanuit dezelfde hoek voor een eerlijke vergelijking.",
    result: "Een woning in Meise met een dramatisch verbeterde energieprestatie. De voor- en nafoto's spreken voor zich: van een ruwe bakstenen gevel naar een strakke, moderne afwerking in één project.",
    seo: {
      title: "Gevelisolatie + Crepi Meise — Voor & Na Foto's | ISOPROTECH",
      description: "Voor en na: gevelisolatie met EPS en crepi op woning in Meise. Volledige documentatie van het renovatieproject. Bekijk het resultaat.",
      keywords: ["gevelisolatie meise voor na", "crepi meise voor na", "buitengevelisolatie meise", "gevelrenovatie meise"],
    },
  },
  {
    id: "gevel-berchem-totaal",
    slug: "gevelisolatie-crepi-platdak-berchem",
    title: "Totaalrenovatie Berchem — gevelisolatie, crepi, plat dak en ramen",
    photo: PHOTOS.gevelCrepiPlatdakBerchemNa,
    beforePhoto: PHOTOS.gevelCrepiPlatdakBerchemVoor,
    location: "Berchem",
    citySlug: "antwerpen",
    workType: ["Gevelisolatie", "Crepi", "Dakrenovatie"],
    serviceSlug: "gevelisolatie",
    summary: "Complete renovatie van een woning in Berchem: gevelisolatie, crepi afwerking, vernieuwing van het plat dak en nieuwe ramen — alles in één project.",
    problem: "Een woning in Berchem (Antwerpen) was toe aan een grondige renovatie: de gevel was ongeïsoleerd en verouderd, het plat dak lekte, de ramen waren energetisch slecht. De eigenaar wou één aannemer die het volledige plaatje kon beheren.",
    solution: "ISOPROTECH nam de volledige regie: gevelisolatie met EPS en crepi-afwerking, volledige vernieuwing van het plat dak met PIR-isolatie en bitumen, en begeleiding bij de raamvervanging. Alle disciplines werden op elkaar afgestemd zodat aansluitingen correct en waterdicht zijn.",
    result: "Een volledig vernieuwde woning in Berchem met een dramatisch verbeterd EPC. De eigenaar had één aanspreekpunt, één planning en één verantwoordelijke voor het eindresultaat. Dat is de kracht van de totaalaanpak van ISOPROTECH.",
    seo: {
      title: "Totaalrenovatie Berchem — Gevel, Platdak & Ramen | ISOPROTECH",
      description: "Complete renovatie in Berchem Antwerpen: gevelisolatie, crepi, platdak en ramen. Alles in één project. Bekijk de voor- en nafoto's.",
      keywords: ["totaalrenovatie berchem", "gevelisolatie berchem antwerpen", "platdak renovatie berchem", "crepi berchem antwerpen"],
    },
  },
  {
    id: "gevel-wijnegem",
    slug: "gevelisolatie-crepi-wijnegem",
    title: "Gevelisolatie + crepi Wijnegem — moderne uitstraling voor rijwoning",
    photo: PHOTOS.gevelCrepiWijnegemNa,
    beforePhoto: PHOTOS.gevelCrepiWijnegemVoor,
    location: "Wijnegem",
    citySlug: "antwerpen",
    workType: ["Gevelisolatie", "Crepi"],
    serviceSlug: "gevelisolatie",
    summary: "Rijwoning in Wijnegem volledig geïsoleerd en afgewerkt met strakke minerale crepi. Van onafgewerkte bakstenen gevel naar een moderne, energiezuinige woning.",
    problem: "Een rijwoning in Wijnegem had een onafgewerkte bakstenen gevel die water absorbeerde en slecht isoleerde. De eigenaar wou de woning klaarstomen voor de toekomst: beter EPC, lagere energierekening en een moderne uitstraling die bij de buurt past.",
    solution: "ISOPROTECH bracht EPS-isolatieplaten aan over de volledige gevel van de rijwoning in Wijnegem. Na de basislaag en glasvezelarmering werd een witte minerale crepi aangebracht met een egale, fijnkorrelige textuur. De geveldoorbrekingen — ramen, deur, brievenbus — werden vakkundig ingekaderd.",
    result: "Een rijwoning in Wijnegem die er als nieuwbouw uitziet. De eigenaar ziet een duidelijk verschil op de energierekening. Het EPC-label verbeterde aanzienlijk — een belangrijke troef bij een eventuele toekomstige verkoop.",
    seo: {
      title: "Gevelisolatie + Crepi Wijnegem — Voor & Na | ISOPROTECH",
      description: "Rijwoning in Wijnegem geïsoleerd en afgewerkt met witte minerale crepi. Moderne uitstraling en beter EPC. Bekijk de voor- en nafoto's.",
      keywords: ["gevelisolatie wijnegem", "crepi wijnegem", "gevelrenovatie wijnegem", "buitengevelisolatie wijnegem"],
    },
  },
];

export function getProjectsByCity(city: string): Project[] {
  return projects.filter(p => p.location.toLowerCase() === city.toLowerCase());
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getProjectsByService(serviceSlug: string, limit = 4): Project[] {
  return projects
    .filter(p => p.serviceSlug === serviceSlug && p.beforePhoto)
    .slice(0, limit);
}

export function getRelatedProjects(id: string, count = 3): Project[] {
  const project = projects.find(p => p.id === id);
  if (!project) return [];
  return projects
    .filter(p => p.id !== id && (
      p.workType.some(w => project.workType.includes(w)) ||
      p.location === project.location
    ))
    .slice(0, count);
}
