// src/content/faqs.ts
// FAQ data — keyed by ID for cross-referencing from services and city pages

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FaqItem[] = [
  {
    id: "gevelisolatie-prijs",
    question: "Hoeveel kost gevelisolatie per m²?",
    answer: "De prijs voor gevelisolatie met afwerking ligt in Antwerpen gemiddeld tussen €80 en €170 per m² (excl. btw), afhankelijk van het isolatietype, de dikte en de afwerking. Voor een exacte prijs op maat van uw woning: gebruik onze gevelcalculator of vraag een gratis inspectie aan.",
    category: "Gevelisolatie",
  },
  {
    id: "gevelisolatie-crepi-prijs",
    question: "Wat kost crepi met isolatie (ETICS)?",
    answer: "Crepi met isolatie (ETICS-systeem) kost indicatief €85–125/m² (incl. EPS-isolatieplaten, wapeningslaag, basispleister en crepi-afwerking, excl. btw). Meer details op onze <a href='/gevelisolatie/prijs' class='underline text-teal-700'>gevelisolatie prijspagina</a>. BTW 6% is van toepassing bij woningen ouder dan 10 jaar.",
    category: "Gevelisolatie",
  },
  {
    id: "gevelisolatie-steenstrips-prijs",
    question: "Wat kost gevelisolatie met steenstrips?",
    answer: "Steenstrips met isolatie kosten indicatief €130–180/m² (excl. btw) — meer dan crepi, maar u krijgt een authentieke bakstenen look zonder koudebruggen. Ideaal voor woningen in beschermde zones of met een voorkeur voor een klassiek geveluitzicht. Meer info: <a href='/gevelisolatie/steenstrips-met-isolatie' class='underline text-teal-700'>steenstrips met isolatie pagina</a>.",
    category: "Gevelisolatie",
  },
  {
    id: "gevelisolatie-dikte",
    question: "Hoe dik moet gevelisolatie zijn?",
    answer: "De Vlaamse EPB-regelgeving vereist bij renovatie Rd ≥ 1,5 m²K/W (VEKA, juni 2026). Met EPS grijs (lambda 0,031 W/mK) bereikt u dat met ca. 5 cm — maar 14 of 18 cm is aanzienlijk beter. Voor het IER-traject is Rd 3,5 vereist (ca. 11 cm EPS). Wij raden minimaal 14 cm aan voor optimale energieprestatie én premies. Lees meer op onze <a href='/gevelisolatie/dikte' class='underline text-teal-700'>isolatiedikte pagina</a>.",
    category: "Gevelisolatie",
  },
  {
    id: "etics-systeem",
    question: "Wat is een ETICS-systeem voor gevelisolatie?",
    answer: "ETICS (External Thermal Insulation Composite System) is het systeem voor buitengevelisolatie: isolatieplaten (EPS of minerale wol) worden verlijmd en gemechanisch bevestigd op de bestaande gevel, daarna volgen een wapeningslaag, basispleister en afwerklaag (crepi of steenstrips). Het is de meest effectieve methode om een massieve muur of ongeïsoleerde gevel thermisch te verbeteren zonder aan de binnenkant te werken. Meer info: <a href='/gevelisolatie/crepi-met-isolatie' class='underline text-teal-700'>ETICS crepi pagina</a>.",
    category: "Gevelisolatie",
  },
  {
    id: "gevelisolatie-duur",
    question: "Hoe lang duren gevelisolatiewerken?",
    answer: "Voor een gemiddelde woning rekent u op 2 tot 4 weken, afhankelijk van de oppervlakte, de staat van de gevel en de weersomstandigheden. Wij plannen alles duidelijk in — u weet op voorhand wat u kunt verwachten.",
    category: "Gevelisolatie",
  },
  {
    id: "gevelisolatie-geschikt",
    question: "Is gevelisolatie geschikt voor elke woning?",
    answer: "Buitengevelisolatie is geschikt voor de meeste woningen. Bij massieve muren of ongeïsoleerde spouwmuren is het de meest effectieve oplossing. Wij bekijken uw woning eerlijk tijdens de gratis inspectie en adviseren alleen wat technisch en financieel zinvol is.",
    category: "Gevelisolatie",
  },
  {
    id: "crepi-vs-spuitkurk",
    question: "Wat is het verschil tussen crepi en spuitkurk?",
    answer: "Crepi is een minerale pleisterafwerking — strak, uniform, budgetvriendelijk. Spuitkurk is elastischer, naadloos aangebracht en beter bestand tegen scheuren en bewegingen in de gevel. Beide zijn duurzaam en combineerbaar met isolatie. Wij adviseren u welke het beste past bij uw gevel en voorkeur.",
    category: "Gevelafwerking",
  },
  {
    id: "premies",
    question: "Welke premies kan ik krijgen voor isolatie?",
    answer: "Via Mijn VerbouwPremie kunt u in Vlaanderen premies aanvragen voor dak- en gevelisolatie. Het bedrag hangt af van het type werken, de bereikte isolatiewaarde en uw gezinsinkomen. Wij checken uw situatie en helpen u bij de aanvraag — zodat u het maximale uit uw investering haalt.",
    category: "Premies",
  },
  {
    id: "mijn-verbouwpremie-dakisolatie",
    question: "Hoeveel premie krijg ik voor dakisolatie via Mijn VerbouwPremie?",
    answer: "Via Mijn VerbouwPremie (vlaanderen.be, 2026) ontvangt u een subsidie van minimaal €2/m² tot €12/m² voor dakisolatie, afhankelijk van uw inkomenscategorie en de bereikte isolatiewaarde. De premie is enkel geldig als u werkt met een erkende aannemer. Wij helpen u de aanvraag correct in te dienen. Meer info op <a href='https://www.vlaanderen.be/mijn-verbouwpremie' target='_blank' rel='noopener noreferrer' class='underline text-teal-700'>vlaanderen.be/mijn-verbouwpremie</a>.",
    category: "Premies",
  },
  {
    id: "mijn-verbouwpremie-gevelisolatie",
    question: "Bestaat er een premie voor gevelisolatie in Vlaanderen?",
    answer: "Ja. Via Mijn VerbouwPremie (vlaanderen.be, 2026) kunt u ook een premie aanvragen voor buitengevelisolatie. De hoogte hangt af van uw inkomenscategorie en het bereikte Rd-niveau. Gecombineerde renovaties (dak + gevel + beglazing) kunnen in aanmerking komen voor hogere totale premies via het IER-traject. Wij begeleiden u bij de aanvraag.",
    category: "Premies",
  },
  {
    id: "btw-6-procent",
    question: "Wanneer betaal ik BTW 6% in plaats van 21% voor isolatiewerken?",
    answer: "BTW 6% is van toepassing als uw woning ouder is dan 10 jaar én u werkt met een btw-plichtige aannemer die factureert op naam van de particuliere bewoner. Deze btw-verlaging geldt voor renovatie-, herstel- en onderhoudswerken aan privéwoningen (FOD Financiën, 2026). ISOPROTECH factureert altijd correct en vermeldt de btw-categorie duidelijk op de offerte.",
    category: "Premies",
  },
  {
    id: "dakisolatie-besparing",
    question: "Hoeveel bespaar ik met dakisolatie?",
    answer: "Met een goed geïsoleerd dak bespaart u gemiddeld 25 tot 30% op uw verwarmingskosten. De exacte besparing hangt af van uw huidige isolatiesituatie en het type verwarming. De meeste klanten zien het verschil al op de eerste verwarmingsrekening.",
    category: "Dakisolatie",
  },
  {
    id: "dakisolatie-prijs",
    question: "Hoeveel kost dakisolatie?",
    answer: "De prijs hangt af van het type dak (plat of hellend), de gekozen materialen en of er ook een nieuwe bedekking nodig is. Voor een plat dak rekent u gemiddeld op €30 tot €50/m² voor isolatie alleen. Gebruik onze dakcalculator voor een volledige indicatieve prijs, of vraag een gratis inspectie aan.",
    category: "Dakisolatie",
  },
  {
    id: "dakisolatie-prijs-m2",
    question: "Wat is de prijs van dakisolatie per m²?",
    answer: "De indicatieve prijzen voor dakisolatie in Antwerpen (incl. materialen en plaatsing, excl. btw): warm dak plat €80–170/m², sarking hellend dak €75–140/m², binnenisolatie hellend dak €45–90/m². Lees meer op onze <a href='/dakisolatie/prijs' class='underline text-teal-700'>prijspagina dakisolatie</a>, of vraag een vrijblijvende offerte aan.",
    category: "Dakisolatie",
  },
  {
    id: "plat-dak-warm-dak",
    question: "Wat is een warm dak bij een plat dak?",
    answer: "Bij een warm dak ligt de isolatie bovenop de dakstructuur, tussen de waterdichting en het draagdek. Zo blijft de dakconstructie op kamertemperatuur — geen condensatie in de structuur, betere luchtdichtheid en langere levensduur van de bedekking. Het warm dak-systeem is de Belgische standaard voor nieuwe platte daken en renovaties (EPB, VEKA). Meer info: <a href='/dakisolatie/plat-dak' class='underline text-teal-700'>plat dak isolatie pagina</a>.",
    category: "Dakisolatie",
  },
  {
    id: "sarking-vs-binnenisolatie",
    question: "Wat is het verschil tussen sarking en binnenisolatie voor een hellend dak?",
    answer: "Sarking = buitenisolatie: PIR-platen worden boven de gordingen aangebracht, daarna nieuwe dakbedekking. Voordelen: geen koudebrug, geen verlies van leefruimte binnenin. Binnenisolatie (tussen of onder de gordingen) is goedkoper maar geeft koudebruggen bij gordingen en verkleint de zolderruimte. Sarking is de technisch superieure oplossing bij totaalrenovatie. Zie ook: <a href='/dakisolatie/sarkingdak' class='underline text-teal-700'>sarkingdak pagina</a>.",
    category: "Dakisolatie",
  },
  {
    id: "dakisolatie-dikte-pir",
    question: "Hoeveel cm PIR isolatie heb ik nodig voor mijn dak?",
    answer: "Voor een renovatie verplicht de Vlaamse EPB-regelgeving Rd ≥ 4,5 m²K/W (VEKA, juni 2026). Met PIR (lambda 0,022 W/mK) bereikt u dat met ca. 10 cm. Voor het Individueel Energetisch Renovatietraject (IER) is Rd 6,0 vereist — dan heeft u ca. 14 cm PIR nodig. Wij berekenen de exacte dikte voor uw specifieke situatie tijdens de gratis inspectie.",
    category: "Dakisolatie",
  },
  {
    id: "dakrenovatie-duur",
    question: "Hoe lang duurt een dakrenovatie?",
    answer: "Een volledige dakrenovatie duurt gemiddeld 1 tot 3 weken, afhankelijk van de grootte en het type werken. Wij plannen efficiënt en houden u op de hoogte — zodat de overlast minimaal is.",
    category: "Dakrenovatie",
  },
  {
    id: "asbest-voor-renovatie",
    question: "Moet ik asbest laten verwijderen vóór renovatie?",
    answer: "Ja. Als er asbesthoudende materialen aanwezig zijn in de te renoveren zones, is verwijdering wettelijk verplicht vóór de andere werken beginnen. Dit geldt voor woningen gebouwd vóór 1990. ISOPROTECH begeleidt u van inventarisatie tot volledige sanering.",
    category: "Asbestverwijdering",
  },
  {
    id: "garantie",
    question: "Bieden jullie garantie op de werken?",
    answer: "Ja — 10 jaar schriftelijke garantie op alle uitgevoerde werken. Wij werken uitsluitend met ATG- en BENOR-gekeurde systemen die voldoen aan de Belgische kwaliteitsnormen. Geen mooie woorden — een document dat u kunt opbergen.",
    category: "Algemeen",
  },
  {
    id: "werkgebied",
    question: "In welke regio zijn jullie actief?",
    answer: "Wij zijn actief in Antwerpen en de ruime omgeving: Mechelen, Schoten, Mortsel, Wilrijk, Ekeren, Schilde, Brasschaat, Kapellen, Edegem, Kontich en meer. Twijfelt u of uw gemeente in ons werkgebied valt? Stuur ons een bericht — wij laten het u weten.",
    category: "Algemeen",
  },
  {
    id: "offerte-aanvragen",
    question: "Hoe vraag ik een offerte aan?",
    answer: "Via telefoon (+32 470 80 20 20), WhatsApp of het contactformulier op onze website. Wij plannen een gratis inspectie ter plaatse en bezorgen u een duidelijke offerte met vaste prijs. Geen vrijblijvend rondje raden — een concrete prijs voor uw specifieke situatie.",
    category: "Algemeen",
  },
];

export function getFaqsByIds(ids: string[]): FaqItem[] {
  return ids
    .map((id) => faqs.find((f) => f.id === id))
    .filter(Boolean) as FaqItem[];
}

export function getFaqsByCategory(category: string): FaqItem[] {
  return faqs.filter((f) => f.category === category);
}
