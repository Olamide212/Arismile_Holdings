import {
  subsidiaries,
  subsidiaryProfiles,
  type SubsidiaryProfile,
  type SubsidiaryRecord,
  type SubsidiarySlug,
} from "@arismile/brand";
import type { ImageAsset } from "./types";

export type { ContentBlock, ContentGroup, SubsidiaryService } from "@arismile/brand";

/** Holdings-site imagery for each subsidiary (copy lives in @arismile/brand). */
interface SubsidiaryMedia {
  heroImage: ImageAsset;
  featureImage?: ImageAsset;
  logo?: ImageAsset;
}

export type SubsidiaryContent = SubsidiaryRecord & SubsidiaryProfile & SubsidiaryMedia;

const media: Record<SubsidiarySlug, SubsidiaryMedia> = {
  "nine-town": {
    heroImage: {
      src: "/images/hero/nine-town.jpg",
      alt: "Construction workers in hard hats on a 9-Town building site",
      width: 2400,
      height: 1600,
    },
    featureImage: {
      src: "/images/subsidiaries/nine-town-crane.jpg",
      alt: "Tower crane above a building under construction",
      width: 1120,
      height: 1400,
    },
    logo: { src: "/images/subsidiaries/nine-town-logo.png", alt: "9-Town logo", width: 600, height: 381 },
  },
  oceania: {
    heroImage: {
      src: "/images/hero/oceania.jpg",
      alt: "Container vessel leaving a port",
      width: 1704,
      height: 1065,
    },
    featureImage: {
      src: "/images/subsidiaries/oceania-drillship.jpg",
      alt: "Offshore drilling vessel at sea",
      width: 768,
      height: 1024,
    },
    logo: { src: "/images/subsidiaries/oceania-logo.png", alt: "Oceania logo", width: 600, height: 366 },
  },
  "datu-kalinga": {
    heroImage: {
      src: "/images/hero/datu-kalinga.jpg",
      alt: "Mining haul truck and excavator at an open-pit mine",
      width: 2400,
      height: 1800,
    },
    featureImage: {
      src: "/images/subsidiaries/construction-bulldozer.jpg",
      alt: "Bulldozer working on a mine site",
      width: 1280,
      height: 960,
    },
    logo: { src: "/images/subsidiaries/datu-kalinga-logo.png", alt: "Datu Kalinga logo", width: 425, height: 600 },
  },
  "mind-age": {
    heroImage: {
      src: "/images/hero/mind-age.jpg",
      alt: "Laptop, mouse and phone on a desk",
      width: 1920,
      height: 1280,
    },
    featureImage: {
      src: "/images/subsidiaries/mind-age-feature.jpg",
      alt: "Laptop displaying an analytics dashboard",
      width: 1024,
      height: 729,
    },
    logo: { src: "/images/subsidiaries/mind-age-logo.png", alt: "Mind Age logo", width: 303, height: 210 },
  },
  "arismile-advisory": {
    heroImage: {
      src: "/images/hero/arismile-advisory.jpg",
      alt: "Advisory team reviewing a document on a tablet",
      width: 896,
      height: 1075,
    },
    logo: {
      src: "/images/subsidiaries/arismile-advisory-logo.png",
      alt: "Arismile Advisory logo",
      width: 725,
      height: 344,
    },
  },
  "cadillac-security": {
    heroImage: {
      src: "/images/hero/cadillac-security.jpg",
      alt: "Security officer speaking into a radio",
      width: 864,
      height: 1134,
    },
    logo: {
      src: "/images/subsidiaries/cadillac-security-logo.png",
      alt: "Cadillac Security logo",
      width: 447,
      height: 424,
    },
  },
  "petogas-limited": {
    heroImage: {
      src: "/images/hero/petogas-limited.jpg",
      alt: "Port cranes at an energy and logistics terminal at sunrise",
      width: 1200,
      height: 900,
    },
    // Unsplash License, photo by Red Shuheart (unsplash.com/photos/Wb4vcBqyGT8)
    featureImage: {
      src: "/images/subsidiaries/petogas-refinery.jpg",
      alt: "Oil refinery with storage tanks at golden hour",
      width: 1400,
      height: 933,
    },
    logo: {
      src: "/images/subsidiaries/petogas-limited-logo.jpg",
      alt: "Petogas logo",
      width: 512,
      height: 205,
    },
  },
};

export const subsidiaryContent: SubsidiaryContent[] = subsidiaries.map((record) => ({
  ...record,
  ...subsidiaryProfiles[record.slug],
  ...media[record.slug],
}));

export function getSubsidiaryContent(slug: string): SubsidiaryContent | undefined {
  return subsidiaryContent.find((s) => s.slug === slug);
}
