// src/content/projects.ts

import { PHOTOS, VIDEOS } from "@/lib/constants";

export interface Project {
  id: string;
  slug: string;
  title: string;
  photo: typeof PHOTOS[keyof typeof PHOTOS];
  beforePhoto?: typeof PHOTOS[keyof typeof PHOTOS];
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
    title: "Binnentuin renovatie met crepi — van verlaten naar strak",
    photo: PHOTOS.binnentuinAfter,
    beforePhoto: PHOTOS.binnentuinBefore,
    location: "Antwerpen",
    citySlug: "antwerpen",
    workType: ["Gevelisolatie", "Crepi"],
    serviceSlug: "crepi",
    summary: "Verwaarloosde binnentuin omgetoverd tot een strakke buitenruimte. Kale bakstenen muren volledig afgewerkt met witte crepi, nieuwe tegelvloer en sfeervolle wandverlichting.",
    problem: "De binnentuin van een rijwoning in Antwerpen was al jaren verwaarloosd. De bakstenen muren waren donker, vochtig en onaantrekkelijk. Mos en algen hadden vrij spel en de ruimte werd nauwelijks gebruikt. De eigenaar wilde de binnentuin omtoveren tot een bruikbare, esthetische buitenruimte.",
    solution: "ISOPROTECH reinigde en voorbehandelde alle wanden grondig. Vervolgens werden de muren voorzien van een isolerende hechtmortel en afgewerkt met witte minerale crepi. De textuur en lichtreflectie van de crepi maken de smalle ruimte optisch veel groter. Wandverlichting werd discreet geïntegreerd in de afwerking.",
    result: "Een lichte, strakke binnentuin die de bewoners dagelijks gebruiken. De witte crepi weerkaatst het licht en maakt de ruimte aangenamer. De eigenaar beschouwt dit project als één van de beste investeringen in de woning.",
    seo: {
      title: "Binnentuin Renovatie met Crepi Antwerpen — ISOPROTECH",
      description: "Binnentuin gerenoveerd met witte minerale crepi in Antwerpen. Van verlaten muren naar strakke buitenruimte. Bekijk de voor- en nafoto's.",
      keywords: ["binnentuin renovatie antwerpen", "crepi binnentuin antwerpen", "gevelafwerking antwerpen", "crepi antwerpen"],
    },
  },
  {
    id: "binnentuin-onderkant-voor-na",
    slug: "binnentuin-crepi-hoekafwerking-antwerpen",
    title: "Binnentuin crepi — technische hoekafwerking",
    photo: PHOTOS.binnentuinOnderkantAfter,
    beforePhoto: PHOTOS.binnentuinOnderkantBefore,
    location: "Antwerpen",
    citySlug: "antwerpen",
    workType: ["Gevelisolatie", "Crepi"],
    serviceSlug: "crepi",
    summary: "Tweede hoek van dezelfde binnentuin. Crepi afwerking rondom, inclusief technische details en afwerking aan de raamlijsten.",
    problem: "De technische hoek van de binnentuin — met leidingen, raamlijsten en een moeilijk bereikbare muurovergang — werd door andere aannemers gemeden. De onafgewerkte hoek gaf de hele renovatie een onvoltooid gevoel.",
    solution: "ISOPROTECH voltooide de crepi afwerking in de volledige hoek, inclusief het aansluiten op de raamdorpels, het inwerken van de leidingen en het naadloos aansluiten op de al afgewerkte wanden. Alle hoeken werden strak getroffeerd en afgedicht.",
    result: "Een naadloos, rondom afgewerkte binnentuin zonder zichtbare aansluitingen of naden. De bewoners genoten van een afgewerkt geheel dat perfect aansluit op de rest van de renovatie.",
    seo: {
      title: "Crepi Hoekafwerking Binnentuin Antwerpen — ISOPROTECH",
      description: "Technische hoekafwerking met crepi in een binnentuin in Antwerpen. Naadloze crepi rondom inclusief raamaansluiting. Bekijk het resultaat.",
      keywords: ["crepi hoekafwerking antwerpen", "binnentuin crepi antwerpen", "gevelafwerking antwerpen"],
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
    title: "Gevelisolatie met spuitkurk Antwerpen — bakstenen gevel getransformeerd",
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
      title: "Gevelisolatie met Spuitkurk Antwerpen — Voor & Na | ISOPROTECH",
      description: "Bakstenen gevel geïsoleerd met spuitkurk in Antwerpen. EPS-isolatie + spuitkurk afwerking. Bekijk de voor- en nafoto's en het resultaat.",
      keywords: ["gevelisolatie spuitkurk antwerpen", "spuitkurk gevel antwerpen", "buitengevelisolatie antwerpen", "gevelrenovatie antwerpen"],
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
    id: "spuitkurk-voor-na-1",
    slug: "gevelisolatie-crepi-voorgevel-antwerpen",
    title: "Gevelisolatie met crepi Antwerpen — voorgevel volledig vernieuwd",
    photo: PHOTOS.spuitkurkAfter1,
    beforePhoto: PHOTOS.spuitkurkBefore1,
    location: "Antwerpen",
    citySlug: "antwerpen",
    workType: ["Gevelisolatie", "Crepi"],
    serviceSlug: "gevelisolatie",
    summary: "Verweerde gevel volledig geïsoleerd en afgewerkt met strakke witte crepi. Van verouderd bakstenen en cement naar een moderne, energiezuinige woning.",
    problem: "Een Antwerpse rijtjeswoning had een gevel die deels nog cementbepleistering had en deels blote baksteen. Er waren scheuren zichtbaar, vochtproblemen in de muren en de eigenaar had een hoog energieverbruik. Vorige aannemers hadden louter een pleisterlaag aangebracht zonder te isoleren.",
    solution: "ISOPROTECH verwijderde de loskomende cementlagen, reinigde de ondergrond grondig en bevestigde EPS-isolatieplaten. Daarna werden alle lagen aangebracht: basislaag, glasvezelnet, topcoat en als afwerking een fijn witte crepi. De raamaansluiting werd waterdicht afgewerkt met PVC-profielen.",
    result: "Een moderne, energiezuinige woning in Antwerpen die prima scoort op EPC. De eigenaar merkt een duidelijk verschil in warmtebehoud: de woning warmt sneller op en blijft ook langer warm na het uitschakelen van de verwarming.",
    seo: {
      title: "Gevelisolatie Voorgevel Crepi Antwerpen — ISOPROTECH",
      description: "Verweerde voorgevel geïsoleerd en afgewerkt met witte crepi in Antwerpen. Van cementbepleistering naar moderne gevel. Bekijk voor en na.",
      keywords: ["gevelisolatie crepi antwerpen", "voorgevel isoleren antwerpen", "crepi gevel antwerpen", "gevelrenovatie antwerpen"],
    },
  },
  {
    id: "spuitkurk-voor-na-2",
    slug: "gevelisolatie-crepi-zijgevel-antwerpen",
    title: "Crepi rondom Antwerpen — zijgevel en achterkant naadloos afgewerkt",
    photo: PHOTOS.spuitkurkAfter2,
    beforePhoto: PHOTOS.spuitkurkBefore2,
    location: "Antwerpen",
    citySlug: "antwerpen",
    workType: ["Gevelisolatie", "Crepi"],
    serviceSlug: "crepi",
    summary: "Zijgevel en achterkant van dezelfde woning — strakke witte crepi rondom het volledige gebouw. Naadloze hoekafwerking en perfecte aansluiting op de voorgevel.",
    problem: "Na de renovatie van de voorgevel vroeg de eigenaar of ISOPROTECH ook de zijgevel en achterkant kon meenemen. De zijgevel was nog volledig in ruwe baksteen en de achterkant had een verouderde cementlaag. Een naadloze aansluiting op het reeds afgewerkte front was technisch uitdagend.",
    solution: "ISOPROTECH werkte de zijgevel en achterkant op dezelfde manier af als de voorgevel: EPS-isolatie, glasvezelarmering en witte crepi. De buitenhoeken werden strak getroffeerd met hoekprofielen in aluminium. De overgang van voor- naar zijgevel is perfect vlak en naadloos.",
    result: "Een woning in Antwerpen die volledig rondom is geïsoleerd en afgewerkt. De eigenaar zag het energieverbruik dalen en de woning oogt uniform en verzorgd van alle kanten. Dit project toont het belang van een totaalaanpak.",
    seo: {
      title: "Crepi Zijgevel en Achtergevel Antwerpen — ISOPROTECH",
      description: "Zijgevel en achterkant geïsoleerd en afgewerkt met crepi in Antwerpen. Naadloze hoekafwerking rondom de woning. Bekijk het resultaat.",
      keywords: ["crepi zijgevel antwerpen", "gevelisolatie achterkant antwerpen", "crepi rondom woning antwerpen", "gevelrenovatie antwerpen"],
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
    id: "gevel-crepi-project",
    slug: "gevelisolatie-woning-garage-antwerpen",
    title: "Gevelisolatie woning met garage Antwerpen — totaalaanpak",
    photo: PHOTOS.gevelCrepiProject,
    beforePhoto: PHOTOS.gevelInProgress,
    location: "Antwerpen",
    citySlug: "antwerpen",
    workType: ["Gevelisolatie", "Crepi"],
    serviceSlug: "gevelisolatie",
    summary: "Woning met garage volledig geïsoleerd en afgewerkt met strakke witte crepi in Antwerpen. De foto toont de uitvoering en het eindresultaat.",
    problem: "Een gezinswoning met aangebouwde garage in Antwerpen had een oud betonnen gevelvlak met weinig isolerende waarde. De garagedeur-omlijsting was ook verouderd. De eigenaar wou de volledige gevel — inclusief garage — in één aanpak laten renoveren.",
    solution: "ISOPROTECH plaatste steigers over de volledige breedte van de woning en garage. EPS-isolatieplaten werden aangebracht, gevolgd door basislaag, glasvezelnet en witte crepi. De garagedeur-omlijsting werd netjes ingekaderd met gevelprofielen. De foto tijdens de werken toont de zorgvuldige aanpak.",
    result: "Een uniforme, moderne gevel van woning tot en met garage in Antwerpen. De eigenaar zag zijn stookkosten dalen en de woning straalt nu als nieuwbouw. Geen gedeeltelijke renovatie — maar een echt totaalplaatje.",
    seo: {
      title: "Gevelisolatie Woning met Garage Antwerpen — ISOPROTECH",
      description: "Woning met garage volledig geïsoleerd en afgewerkt met crepi in Antwerpen. Totaalaanpak van raam tot garagedeur. Bekijk het resultaat.",
      keywords: ["gevelisolatie woning garage antwerpen", "crepi woning antwerpen", "gevelrenovatie antwerpen", "buitengevelisolatie antwerpen"],
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
    id: "crepi-oranje-2",
    slug: "crepi-oranje-textuur-detail-antwerpen",
    title: "Oranje crepi — close-up kwaliteit en textuur",
    photo: PHOTOS.crepiOranje2,
    location: "Antwerpen",
    citySlug: "antwerpen",
    workType: ["Crepi"],
    serviceSlug: "crepi",
    summary: "Detailopname van de oranje crepi afwerking in Antwerpen — strakke textuur en egale kleur over het volledige gevelvlak.",
    problem: "Veel eigenaars twijfelen over de kwaliteit van crepi: wordt de kleur niet ongelijk? Krijg je geen vlekken of aftekening van de afzonderlijke isolatieplaten doorheen de afwerking? Dit project toont aan dat die zorgen bij een vakkundige uitvoering onterecht zijn.",
    solution: "ISOPROTECH gebruikt uitsluitend minerale crepi van gecertificeerde kwaliteit. De opbouw — basislaag, glasvezelnet, topcoat en crepi — zorgt voor een egaal, vlak gevelvlak zonder zichtbare naadsporen of kleurverschillen. De close-up toont de fijne, uniforme textuur van de afwerking in Antwerpen.",
    result: "Een perfectly egaal, oranje gevelvlak zonder vlekken, naadtekening of kleuronregelmatigheden. De crepi voelt solide aan en is bestand tegen UV, vorst en slagweer.",
    seo: {
      title: "Crepi Textuur Kwaliteit Antwerpen — Detail Close-up | ISOPROTECH",
      description: "Close-up van minerale crepi afwerking in Antwerpen. Egale kleur, fijne textuur, geen naadtekening. Bekijk de kwaliteit van ISOPROTECH's crepi-werk.",
      keywords: ["crepi kwaliteit antwerpen", "minerale crepi antwerpen", "crepi textuur antwerpen", "gevelafwerking antwerpen"],
    },
  },
  {
    id: "crepi-oranje-3",
    slug: "crepi-oranje-eindresultaat-antwerpen",
    title: "Oranje crepi renovatie Antwerpen — volledig eindresultaat",
    photo: PHOTOS.crepiOranje3,
    location: "Antwerpen",
    citySlug: "antwerpen",
    workType: ["Gevelisolatie", "Crepi"],
    serviceSlug: "crepi",
    summary: "Volledig gerenoveerde gevel met isolatie en oranje minerale crepi in Antwerpen. Modern, duurzaam en energiezuinig.",
    problem: "Het eindresultaat-overzicht van de woning in Antwerpen — de volledige gevel, van aarde tot dakrand, afgewerkt met oranje minerale crepi. Hoe zorg je voor een uniforme afwerking over de volledige gevelhoogte, inclusief sokkel en dakrandafsluiting?",
    solution: "De volledige gevel — inclusief sokkel, gevelvlak, raamafboording en dakrandafsluiting — werd als één geheel behandeld. De donkere tegelbandplint geeft de gevel een gedragen basis en accentueert de oranje bovenzone. Elk detail werd vakkundig afgewerkt.",
    result: "Een volledig gerenoveerde stadswoning in Antwerpen die door de kleurkeuze en vakkundige uitvoering het straatbeeld verbetert. De eigenaar rapporteert een lagere stookfactuur en veel positieve reacties van buren en voorbijgangers.",
    seo: {
      title: "Oranje Crepi Eindresultaat Antwerpen — Volledig Overzicht | ISOPROTECH",
      description: "Volledig eindresultaat van oranje crepi gevelrenovatie in Antwerpen. Isolatie + minerale crepi van sokkel tot dakrand. Bekijk de complete transformatie.",
      keywords: ["crepi gevelrenovatie antwerpen", "oranje gevel antwerpen", "gevelisolatie crepi antwerpen", "moderne gevel antwerpen"],
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
