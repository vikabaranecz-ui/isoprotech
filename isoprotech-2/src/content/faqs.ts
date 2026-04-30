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
    answer: "De prijs van gevelisolatie varieert in de regio Antwerpen tussen 80 en 170 euro per m² (excl. btw), afhankelijk van het type isolatie, de dikte en de gekozen afwerking. Gebruik onze gevelcalculator voor een indicatieve prijsvork op maat.",
    category: "Gevelisolatie",
  },
  {
    id: "gevelisolatie-duur",
    question: "Hoe lang duren gevelisolatiewerken?",
    answer: "Voor een gemiddelde woning duurt gevelisolatie met afwerking doorgaans 2 tot 4 weken, afhankelijk van de complexiteit, het oppervlak en de weersomstandigheden.",
    category: "Gevelisolatie",
  },
  {
    id: "gevelisolatie-geschikt",
    question: "Is gevelisolatie geschikt voor elke woning?",
    answer: "Buitengevelisolatie is geschikt voor de meeste woningen met massieve muren of ongeïsoleerde spouwmuren. Bij monumentale panden of specifieke constructies bekijken we samen de mogelijkheden. Wij adviseren u altijd eerlijk tijdens de gratis inspectie.",
    category: "Gevelisolatie",
  },
  {
    id: "crepi-vs-spuitkurk",
    question: "Wat is het verschil tussen crepi en spuitkurk?",
    answer: "Crepi is een minerale pleisterafwerking met een strakke, uniforme uitstraling. Spuitkurk is elastischer, wordt naadloos aangebracht en is beter bestand tegen scheuren en bewegingen in de gevel. Beide zijn duurzaam en combineerbaar met isolatie. De keuze hangt af van uw budget, esthetische voorkeur en de staat van uw gevel.",
    category: "Gevelafwerking",
  },
  {
    id: "premies",
    question: "Welke premies kan ik krijgen voor isolatie?",
    answer: "In Vlaanderen kunt u via Mijn Verbouwpremie een premie aanvragen voor dak- en gevelisolatie. Het exacte bedrag hangt af van het type werken, de bereikte isolatiewaarde en uw gezinsinkomen. ISOPROTECH helpt u graag bij het opzoeken van de actuele premies en bij de aanvraag.",
    category: "Premies",
  },
  {
    id: "dakisolatie-besparing",
    question: "Hoeveel bespaar ik met dakisolatie?",
    answer: "Met een goede dakisolatie kunt u tot 30% besparen op uw verwarmingskosten. De exacte besparing hangt af van uw huidige isolatiesituatie, het type verwarming en de gekozen isolatiemethode.",
    category: "Dakisolatie",
  },
  {
    id: "dakisolatie-prijs",
    question: "Hoeveel kost dakisolatie?",
    answer: "De prijs van dakisolatie hangt af van het type dak (plat of hellend), de gekozen materialen en of er ook een nieuwe bedekking nodig is. Indicatief kost dakisolatie tussen 30 en 50 euro per m² voor het isolatiemateriaal. Gebruik onze dakcalculator voor een volledige indicatieve prijsvork.",
    category: "Dakisolatie",
  },
  {
    id: "dakrenovatie-duur",
    question: "Hoe lang duurt een dakrenovatie?",
    answer: "Een volledige dakrenovatie duurt gemiddeld 1 tot 3 weken, afhankelijk van de grootte van het dak, het type werken en de weersomstandigheden. Wij plannen de werken zo efficiënt mogelijk om overlast te beperken.",
    category: "Dakrenovatie",
  },
  {
    id: "asbest-voor-renovatie",
    question: "Moet ik asbest laten verwijderen vóór renovatie?",
    answer: "Ja, als er asbesthoudende materialen aanwezig zijn in de zones waar u renovatiewerken plant, moeten deze vóór de andere werken verwijderd worden. Dit is wettelijk verplicht en noodzakelijk voor uw veiligheid en die van de vakmensen.",
    category: "Asbestverwijdering",
  },
  {
    id: "garantie",
    question: "Bieden jullie garantie op de werken?",
    answer: "Ja, ISOPROTECH biedt 10 jaar garantie op alle uitgevoerde werken. Wij gebruiken uitsluitend ATG- en BENOR-gekeurde isolatie- en afwerkingssystemen die voldoen aan de Belgische kwaliteitsnormen.",
    category: "Algemeen",
  },
  {
    id: "werkgebied",
    question: "In welke regio zijn jullie actief?",
    answer: "Wij zijn actief in Antwerpen en de ruime omgeving: Mechelen, Schoten, Mortsel, Wilrijk, Ekeren, Schilde, Brasschaat, Kapellen, Edegem, Kontich, en meer. Bekijk onze werkgebiedpagina voor het volledige overzicht.",
    category: "Algemeen",
  },
  {
    id: "offerte-aanvragen",
    question: "Hoe vraag ik een offerte aan?",
    answer: "Neem contact op via telefoon (+32 465 88 27 01), WhatsApp of ons online contactformulier. Wij plannen een gratis inspectie ter plaatse en bezorgen u nadien een vrijblijvende offerte met een duidelijke prijsopbouw.",
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
