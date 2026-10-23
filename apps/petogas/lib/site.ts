import { getSubsidiary, holdingsSiteUrl, subsidiaryProfiles, type SubsidiaryRecord } from "@arismile/brand";

const record = getSubsidiary("petogas-limited");
if (!record) throw new Error("Unknown subsidiary: petogas-limited");

export const subsidiary: SubsidiaryRecord = record;

/** Verified copy shared with the Holdings site (packages/brand/src/profiles.ts). */
export const profile = subsidiaryProfiles["petogas-limited"];

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3008";
export const holdingsUrl = process.env.NEXT_PUBLIC_HOLDINGS_URL ?? holdingsSiteUrl;

interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** Site-specific presentation; the design tokens live in app/globals.css. */
export const brand: {
  name: string;
  heroVariant: "split" | "fullbleed";
  heroEyebrow: string;
  heroTitle: string;
  heroImage: ImageAsset;
  aboutImage?: ImageAsset;
  logo: ImageAsset;
  servicesTitle: string;
  servicesIntro: string;
  statementsTitle: string;
  contactTitle: string;
  footerLine: string;
} = {
  name: "Petogas",
  heroVariant: "fullbleed",
  heroEyebrow: "Fuelling Possibilities",
  heroTitle: "Fueling Progress. Powering the Future of the Indigenous Energy Frontier.",
  heroImage: { src: "/images/hero.jpg", alt: "Energy and logistics terminal at sunrise", width: 1200, height: 900 },
  aboutImage: undefined,
  logo: { src: "/images/logo.jpg", alt: "Petogas \u2014 Fuelling Possibilities", width: 512, height: 205 },
  servicesTitle: "Downstream energy, end to end",
  servicesIntro: "Bulk distribution, retail stations, industrial supply, lubricants and fuel-management advisory across Nigeria\u2019s economic corridors.",
  statementsTitle: "",
  contactTitle: "Power your operations with Petogas.",
  footerLine: "Distribution and marketing of refined petroleum products across Nigeria.",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Commitments", href: "#values" },
];
