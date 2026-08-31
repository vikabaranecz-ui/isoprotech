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
    id: "crepi-met-isolatie",
    question: "Kan crepi gecombineerd worden met gevelisolatie?",
    answer: "Ja. Crepi wordt bij ISOPROTECH vaak toegepast als afwerklaag bovenop buitengevelisolatie (EPS/ETICS) — crepi met isolatie in één werf. U kunt crepi ook als losstaande gevelafwerking laten plaatsen, zonder isolatie. Tijdens de gratis inspectie adviseren wij wat het beste past bij uw gevel.",
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
];

export function getFaqsByIds(ids: string[]): FaqItem[] {
  return ids
    .map((id) => faqs.find((f) => f.id === id))
    .filter(Boolean) as FaqItem[];
}

export function getFaqsByCategory(category: string): FaqItem[] {
  return faqs.filter((f) => f.category === category);
}
