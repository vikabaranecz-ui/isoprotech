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
  {
    id: "gevelisolatie-zomer",
    question: "Beschermt gevelisolatie ook tegen zomerhitte?",
    answer: "Ja. Een goed geïsoleerde gevel vertraagt de warmteoverdracht van buiten naar binnen. In de zomer slaan uw muren overdag minder warmte op — en uw leefruimtes blijven koeler zonder airconditioning. De combinatie van dakisolatie en gevelisolatie heeft het grootste effect op zomercomfort.",
    category: "Gevelisolatie",
  },
  {
    id: "gevelisolatie-vergunning",
    question: "Heb ik een vergunning nodig voor gevelisolatie?",
    answer: "Voor standaard buitengevelisolatie met crepi of spuitkurk is in de meeste gevallen geen stedenbouwkundige vergunning nodig, tenzij uw woning in een beschermd stadsgezicht of beschermd erfgoed ligt. Wij controleren dit voor u tijdens de gratis inspectie.",
    category: "Gevelisolatie",
  },
  {
    id: "gevelisolatie-dikte",
    question: "Hoeveel cm isolatie is aanbevolen voor een gevel?",
    answer: "De minimale dikte voor de Vlaamse Mijn VerbouwPremie is 14 cm EPS (Rd ≥ 3,75 m²K/W). Wij raden in de meeste gevallen 16 à 18 cm aan voor een betere energieprestatie en hogere premie. De optimale dikte hangt af van uw woning en uw doelstellingen.",
    category: "Gevelisolatie",
  },
  {
    id: "dakisolatie-plat-hellend",
    question: "Wat is het verschil tussen plat dak en hellend dak isoleren?",
    answer: "Bij een plat dak wordt isolatie bovenop de dakstructuur aangebracht, vóór de waterdichte laag — doorgaans met PIR-platen. Bij een hellend dak zijn er meer opties: isolatie tussen de dakspanten (klassiek), boven de dakspanten (Sarking) of aan de binnenzijde vanuit de zolder. Wij adviseren de beste aanpak voor uw situatie.",
    category: "Dakisolatie",
  },
  {
    id: "dakisolatie-zomer",
    question: "Helpt dakisolatie ook in de zomer?",
    answer: "Ja. Een goed geïsoleerd dak werkt als hitteschild in de zomer. Het vertraagt de warmtestroom van het opgehitte dak naar uw slaapkamers. Gecombineerd met gevelisolatie en voldoende ventilatie zorgt dit voor een aangenamer binnenklimaat — ook bij hittegolven.",
    category: "Dakisolatie",
  },
  {
    id: "dakisolatie-epc",
    question: "Hoeveel verbetert mijn EPC-score na dakisolatie?",
    answer: "Dat hangt sterk af van uw beginsituatie. Woningen met EPC-label E of F zien bij goede dakisolatie doorgaans één tot twee labels verbetering. Een exacte inschatting is alleen mogelijk na een energieanalyse. Wij geven u hierover een eerlijke indicatie tijdens de gratis inspectie.",
    category: "Dakisolatie",
  },
  {
    id: "gevelisolatie-schimmel",
    question: "Kan gevelisolatie vochtproblemen en schimmel oplossen?",
    answer: "Ja. Schimmel op binnenmuren ontstaat vaak doordat de muur te koud is en vochtige binnenlucht condenseert op het oppervlak. Buitengevelisolatie verwarmt de muur vanuit buiten, waardoor condensatie sterk vermindert. Opgelet: bestaand vocht of lekkage moet eerst worden aangepakt vóór de isolatiewerken beginnen.",
    category: "Gevelisolatie",
  },
  {
    id: "premies-2026",
    question: "Wat zijn de premies voor isolatie in 2026?",
    answer: "Via Mijn VerbouwPremie kunt u in Vlaanderen premies aanvragen voor dakisolatie (plat en hellend) en gevelisolatie. De bedragen variëren per inkomenscategorie en type werken. Bovenop de Vlaamse premie geldt het verlaagd btw-tarief van 6% voor woningen ouder dan 10 jaar. Wij checken uw situatie en helpen bij de aanvraag.",
    category: "Premies",
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
