import { getSubsidiary, holdingsSiteUrl, subsidiaryProfiles, type SubsidiaryRecord } from "@arismile/brand";

const record = getSubsidiary("cadillac-security");
if (!record) throw new Error("Unknown subsidiary: cadillac-security");

export const subsidiary: SubsidiaryRecord = record;

/** Verified copy shared with the Holdings site (packages/brand/src/profiles.ts). */
export const profile = subsidiaryProfiles["cadillac-security"];

/** Defaults to the company domain from @arismile/brand; override per environment. */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? record.website ?? "http://localhost:3006";
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
  name: "Cadillac Security",
  heroVariant: "fullbleed",
  heroEyebrow: "Private Security \u00b7 Sub-Saharan Africa",
  heroTitle: "Securing Assets. Protecting Life. Benchmarking Global Excellence.",
  heroImage: { src: "/images/hero.jpg", alt: "Cadillac Security officer in tactical uniform at a corporate lobby", width: 1402, height: 1122 },
  aboutImage: { src: "/images/about.jpg", alt: "Security officer communicating by radio", width: 864, height: 1134 },
  logo: { src: "/images/logo.png", alt: "Cadillac Security Services Limited", width: 447, height: 424 },
  servicesTitle: "Operational capabilities",
  servicesIntro: "From VIP close protection to maritime and critical-infrastructure defence, supported by electronic security and technical intelligence.",
  statementsTitle: "Mission and operating footprint",
  contactTitle: "Request a security assessment.",
  footerLine: "Premium private security for corporations, governments, diplomatic missions and high-value individuals.",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Values", href: "#values" },
];
