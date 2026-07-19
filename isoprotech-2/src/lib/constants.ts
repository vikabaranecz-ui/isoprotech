// src/lib/constants.ts

export const BRAND = {
  name: "ISOPROTECH",
  tagline: "Meer wooncomfort, minder energiekosten.",
  phone: "+32 465 88 27 01",
  phoneDisplay: "+32 465 88 27 01",
  email: "info@isoprotech.be",
  address: { street: "P. van den Eedenstraat 84", city: "Antwerpen", zip: "2660", country: "BE" },
  whatsapp: "https://wa.me/32470802020",
  maps: "https://maps.google.com/maps?cid=7238737443262617326",
  url: "https://www.isoprotech.be",
  geo: { lat: 51.1784, lng: 4.3484 },
  hours: { weekdays: "08:00 – 18:00", saturday: "09:00 – 14:00", sunday: "Gesloten" },
} as const;

export const COLORS = {
  teal: "#1E4C59", tealDark: "#15353e", orange: "#F79448", orangeHover: "#f9a862",
  light: "#f5f2ee", white: "#ffffff", text: "#5a6a6f", textDark: "#2a3a3f",
} as const;

export const IMAGES = {
  logo: "/images/logo-white.png",
  logoDark: "/images/logo-dark.png",
  ogDefault: "/images/og-isoprotech.png",
} as const;

export const VIDEOS = {
  mainShowreel: "https://www.youtube.com/embed/Zt19qXNgBCg",
  projectHighlight: "https://www.youtube.com/embed/8B5AW31IVTk",
} as const;

export const INSTAGRAM = {
  handle: "@isoprotech.be",
  url: "https://www.instagram.com/isoprotech.be/",
  reels: [
    { id: "DVgq2UIk2mn", title: "Vochtproblemen? Hoge verwarmingskosten?" },
    { id: "DU8GT8WE0RA", title: "Een gevel die uw woning verandert" },
    { id: "DVOl9Z9k318", title: "3 redenen waarom gevelvernieuwing slim is" },
  ],
} as const;

export const SOCIAL = {
  instagram: "https://www.instagram.com/isoprotech.be/",
  facebook: "https://www.facebook.com/people/Isoprotech/61587744656837/",
} as const;

// All images local — in public/images/
export const PHOTOS = {
  // Project photos
  gevelCrepiMeise: { src: "/images/projects/gevelisolatie-crepi-meise.jpg", alt: "Buitengevelisolatie met crepi afwerking in Meise", width: 1346, height: 757 },
  gevelCrepiMeise2: { src: "/images/projects/gevelisolatie-crepi-meise-2.jpg", alt: "Gevelisolatie met crepi in Meise — tweede hoek", width: 1346, height: 757 },
  gevelBefore1: { src: "/images/projects/spuitkurk-before-1.jpg", alt: "Woning vóór gevelisolatie — oude bakstenen gevel", width: 800, height: 1060 },
  gevelAfter1: { src: "/images/projects/spuitkurk-after-1.jpg", alt: "Woning na gevelisolatie met spuitkurk afwerking", width: 960, height: 1280 },
  crepiBefore1: { src: "/images/projects/crepi-before-1.jpg", alt: "Achtergevel vóór crepi renovatie — verweerde muur", width: 1200, height: 800 },
  crepiAfter1: { src: "/images/projects/crepi-after-antwerpen1.jpg", alt: "Achtergevel na crepi afwerking — strakke witte gevel", width: 960, height: 1280 },
  gevelAntwBefore: { src: "/images/projects/gevelisolatie-antwerpen-before.jpg", alt: "Appartement vóór gevelisolatie — leien bekleding", width: 800, height: 1200 },
  gevelAntwAfter: { src: "/images/projects/gevelisolatie-antwerpen-after.jpg", alt: "Appartement na gevelisolatie met crepi", width: 800, height: 1200 },
  dakSchouw: { src: "/images/projects/dakrenovatie-schouw.jpg", alt: "Nieuwe schouwkap op gerenoveerd dak met zwarte pannen", width: 960, height: 1280 },
  dakSchouw2: { src: "/images/projects/dakrenovatie-schouw-2.jpg", alt: "Schouw met loodaansluiting bij dakrenovatie", width: 960, height: 1280 },
  gevelInProgress: { src: "/images/projects/gevelisolatie-in-progress.jpg", alt: "Gevelisolatie met EPS-platen in uitvoering — stellingen", width: 1200, height: 900 },
  gevelCrepiProject: { src: "/images/projects/gevelisolatie-crepi-project.jpg", alt: "Gevelisolatie met crepi afwerking — modern resultaat", width: 1200, height: 800 },
  crepiSchilde: { src: "/images/projects/crepi-schilde.jpg", alt: "Crepi gevelafwerking op woning in Schilde", width: 960, height: 1280 },
  platDak: { src: "/images/projects/plat-dak-renovatie.jpg", alt: "Plat dak renovatie met PIR-isolatie — dronebeeld", width: 1460, height: 820 },
  // New before/after project photos
  platDakBefore: { src: "/images/projects/plat-dak-before.jpg", alt: "Plat dak vóór renovatie — verouderde bedekking met mos", width: 1536, height: 2048 },
  platDakAfter: { src: "/images/projects/plat-dak-after.jpg", alt: "Plat dak na renovatie — nieuwe bitumen bedekking en houten gevelbekleding", width: 1536, height: 2048 },
  platDak2Before: { src: "/images/projects/platdak-before.jpg", alt: "Plat dak vóór renovatie — oude dakbedekking", width: 1536, height: 2048 },
  platDak2After: { src: "/images/projects/platdak-after.jpg", alt: "Plat dak na renovatie — vernieuwd en waterdicht", width: 1536, height: 2048 },
  binnentuinBefore: { src: "/images/projects/binnentuin-before-berchem.jpg", alt: "Binnentuin vóór renovatie — kale bakstenen muren en onbevloerd", width: 1536, height: 2048 },
  binnentuinAfter: { src: "/images/projects/binnentuin-after-berchem.jpg", alt: "Binnentuin na renovatie — witte crepi muren, tegels en sfeerverlichting", width: 1536, height: 2048 },
  binnentuinOnderkantBefore: { src: "/images/projects/binnentuinonderkant-before-berchem.jpg", alt: "Binnentuin onderkant vóór renovatie — verwaarloosde ruimte", width: 1536, height: 2048 },
  binnentuinOnderkantAfter: { src: "/images/projects/binnentuinonderkant-after-berchem.jpg", alt: "Binnentuin onderkant na renovatie — crepi afwerking en tegels", width: 1536, height: 2048 },
  hellendDakEdegemBefore: { src: "/images/projects/hellendakedegem-before.jpg", alt: "Hellend dak Edegem vóór renovatie — verouderde dakpannen", width: 1152, height: 2048 },
  hellendDakEdegemAfter: { src: "/images/projects/hellendakedegem-after.jpg", alt: "Hellend dak Edegem na renovatie — nieuwe dakpannen en isolatie", width: 1320, height: 1752 },
  hellendDakEdegemBefore2: { src: "/images/projects/hellendakedegem-before2.jpg", alt: "Hellend dak Edegem vóór renovatie — tweede hoek", width: 1152, height: 2048 },
  hellendDakEdegemAfter1: { src: "/images/projects/hellendakedegem-after1.jpg", alt: "Hellend dak Edegem na renovatie — tweede hoek na renovatie", width: 768, height: 1363 },
  lozanastraatVoor: { src: "/images/projects/lozanastraatplatdak-voor.png", alt: "Plat dak Lozanastraat Antwerpen vóór renovatie — verouderde dakbedekking", width: 3375, height: 4219 },
  lozanastraatNa: { src: "/images/projects/lozanastraat-platdak-na.png", alt: "Plat dak Lozanastraat Antwerpen na renovatie — nieuwe waterdichte bedekking", width: 3375, height: 4219 },
  // Spuitkurk before/after
  spuitkurkBefore1: { src: "/images/projects/spuitkurk-before-1.jpg", alt: "Woning vóór spuitkurk — verweerde cementbepleistering", width: 1195, height: 896 },
  spuitkurkAfter1: { src: "/images/projects/spuitkurk-after-1.jpg", alt: "Woning na spuitkurk — moderne witte gevelafwerking", width: 896, height: 1195 },
  spuitkurkBefore2: { src: "/images/projects/spuitkurk-before-1.jpg", alt: "Zijgevel vóór spuitkurk — oude bakstenen en cement", width: 896, height: 1195 },
  spuitkurkAfter2: { src: "/images/projects/spuitkurk-after-1.jpg", alt: "Zijgevel na spuitkurk — strakke witte afwerking", width: 896, height: 1195 },
  // Crepi Antwerpen
  crepiAntwAfter: { src: "/images/projects/crepi-after-antwerpen1.jpg", alt: "Crepi gevelafwerking Antwerpen — volledig gerenoveerde voorgevel", width: 1160, height: 2048 },
  crepiAntwDetail: { src: "/images/projects/crepi-antwerpen-detail.jpg", alt: "Crepi detail — strakke witte afwerking met ISOPROTECH", width: 1161, height: 2048 },
  // Orange facade project photos
  crepiOranje1: { src: "/images/projects/crepi-oranje-1.jpg", alt: "Pomporanjevý fasáda s crepi afwerking — warm oranje eindresultaat", width: 1200, height: 1600 },
  crepiOranje2: { src: "/images/projects/crepi-oranje-2.jpg", alt: "Oranje crepi gevelafwerking — detail", width: 1200, height: 1600 },
  crepiOranje3: { src: "/images/projects/crepi-oranje-3.jpg", alt: "Oranje crepi woning — volledig gerenoveerde gevel", width: 1200, height: 1600 },
  // Hoboken crepi voor/na
  crepiHobokenBefore: { src: "/images/projects/crepi-before-after-hoboken-before.jpg", alt: "Gevel Hoboken vóór crepi — verweerde bepleistering", width: 800, height: 600 },
  crepiHobokenAfter: { src: "/images/projects/crepi-before-after-hoboken-after.jpg", alt: "Gevel Hoboken na crepi — witte minerale afwerking", width: 800, height: 600 },
  crepiHoboken1Before: { src: "/images/projects/crepi-before-after-hoboken1-before.jpg", alt: "Hoboken achtergevel vóór crepi renovatie", width: 800, height: 600 },
  crepiHoboken2After: { src: "/images/projects/crepi-before-after-hoboken2-after.jpg", alt: "Hoboken achtergevel na crepi renovatie", width: 800, height: 600 },
  // Mechelen crepi voor/na
  crepiMechelenBefore: { src: "/images/projects/crepi-mechelen-before.jpg", alt: "Woning Mechelen vóór crepi — kale bakstenen gevel", width: 800, height: 1200 },
  crepiMechelenAfter: { src: "/images/projects/crepi-mechelen-after.jpg", alt: "Woning Mechelen na crepi — witte minerale afwerking", width: 800, height: 1200 },
  // Meise gevelisolatie + crepi (nieuwe gedetailleerde foto's)
  gevelCrepiMeiseVoor: { src: "/images/projects/gevelisolatie_crepi_meise_voor.png", alt: "Woning Meise vóór gevelisolatie + crepi", width: 1200, height: 900 },
  gevelCrepiMeiseNa: { src: "/images/projects/gevelisolatie_crepi_meise_na.jpg", alt: "Woning Meise na gevelisolatie + crepi", width: 1200, height: 900 },
  gevelCrepiMeiseVoor1: { src: "/images/projects/gevelisolatie_crepi_meise_voor1.PNG", alt: "Woning Meise tweede gevel vóór gevelisolatie", width: 1200, height: 900 },
  gevelCrepiMeiseNa1: { src: "/images/projects/gevelisolatie_crepi_meise_na1.PNG", alt: "Woning Meise tweede gevel na gevelisolatie + crepi", width: 1200, height: 900 },
  // Berchem gevelisolatie + crepi + platdak + ramen
  gevelCrepiPlatdakBerchemVoor: { src: "/images/projects/geveisolatie_crepi_platdat_ramen_voor_berchem.jpg", alt: "Woning Berchem vóór totaalrenovatie — gevel, platdak en ramen", width: 1200, height: 900 },
  gevelCrepiPlatdakBerchemNa: { src: "/images/projects/gevelisolatie_crepi_platdat_ramen_na_berchem.jpg", alt: "Woning Berchem na totaalrenovatie — gevelisolatie, crepi, platdak en ramen", width: 1200, height: 900 },
  // Wijnegem gevelisolatie + crepi
  gevelCrepiWijnegemVoor: { src: "/images/projects/gevelisolatie_crepi_wijnegem_voor.PNG", alt: "Woning Wijnegem vóór gevelisolatie + crepi", width: 1200, height: 900 },
  gevelCrepiWijnegemNa: { src: "/images/projects/gevelisolatie_crepi_wijnegem_na.PNG", alt: "Woning Wijnegem na gevelisolatie + crepi", width: 1200, height: 900 },
  // Service photos
  asbestverwijdering: { src: "/images/services/asbestverwijdering.jpg", alt: "Veilige asbestverwijdering — vakman in beschermend pak", width: 1460, height: 820 },
  asbestverwijdering1: { src: "/images/services/asbestverwijdering-1.jpg", alt: "ISOPROTECH vakman verwijdert asbest in beschermend pak en masker", width: 1200, height: 900 },
  asbestverwijdering2: { src: "/images/services/asbestverwijdering-2.jpg", alt: "Asbestverwijdering op locatie — ISOPROTECH team in actie", width: 1200, height: 900 },
  dakkapellen: { src: "/images/services/dakkapellen.png", alt: "Dakkapel wordt geplaatst op een hellend dak", width: 1200, height: 800 },
  dakrenovatie: { src: "/images/services/dakrenovatie.jpg", alt: "Dakrenovatie met nieuwe keramische dakpannen", width: 1080, height: 1920 },
  dakrenovatieWorker: { src: "/images/services/dakrenovatie-worker.jpg", alt: "ISOPROTECH vakman aan het werk op hellend dak — blauwe sweater", width: 1080, height: 1920 },
  dakisolatieService: { src: "/images/services/dakisolatie.jpg", alt: "Dakisolatie op plat dak — PIR-platen en roofing", width: 1460, height: 820 },
  dakisolatieTeam: { src: "/images/services/dakisolatie-team.jpg", alt: "ISOPROTECH team met Recticel PIR-isolatieplaten op plat dak", width: 1460, height: 820 },
  dakisolatieTorch: { src: "/images/services/dakisolatie-torch.jpg", alt: "ISOPROTECH vakman torcht bitumen op plat dak — dakisolatie in uitvoering", width: 1080, height: 1920 },
  spuitkurk: { src: "/images/services/spuitkurk.jpg", alt: "Spuitkurk gevelafwerking close-up", width: 1200, height: 500 },
  crepiService: { src: "/images/services/crepi.jpg", alt: "Crepi gevelafwerking — strakke minerale pleister", width: 1080, height: 1620 },
  crepiWorker: { src: "/images/services/crepi-worker.jpg", alt: "ISOPROTECH vakman brengt oranje crepi aan op gevel — grijs ISOPROTECH hoodie", width: 1080, height: 1920 },
} as const;
