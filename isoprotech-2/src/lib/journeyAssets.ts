// src/lib/journeyAssets.ts

// DOM anchors the scroll journey measures against — real section positions,
// not assumed percentages of page height.
export const JOURNEY_IDS = {
  hero: "journey-hero",
  oldHouse: "journey-old-house",
  contact: "journey-contact",
} as const;

// Drop the five supplied images at these exact paths (public/images/journey/)
// and the journey picks them up automatically — nothing else to wire up.
export const journeyAssets = {
  warehouse: "/images/journey/warehouse.webp",
  carDriving: "/images/journey/car-driving.webp",
  carFront: "/images/journey/car-front.webp",
  oldHouse: "/images/journey/old-house.webp",
  newHouse: "/images/journey/new-house.webp",
};
