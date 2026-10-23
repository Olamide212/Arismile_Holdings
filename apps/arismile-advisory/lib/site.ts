import { getSubsidiary, holdingsSiteUrl, subsidiaryProfiles, type SubsidiaryRecord } from "@arismile/brand";

const record = getSubsidiary("arismile-advisory");
if (!record) throw new Error("Unknown subsidiary: arismile-advisory");

export const subsidiary: SubsidiaryRecord = record;

/** Verified copy shared with the Holdings site (packages/brand/src/profiles.ts). */
export const profile = subsidiaryProfiles["arismile-advisory"];

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3005";
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
  name: "Arismile Advisory",
  heroVariant: "split",
  heroEyebrow: "Financial & Strategic Advisory",
  heroTitle: "Navigating Complexity. Engineering Wealth.",
  heroImage: { src: "/images/hero.jpg", alt: "Arismile Advisory consultants in a strategy meeting", width: 1024, height: 683 },
  aboutImage: { src: "/images/about.jpg", alt: "Advisor shaking hands with a client", width: 735, height: 490 },
  logo: { src: "/images/logo.png", alt: "Arismile Advisory", width: 725, height: 344 },
  servicesTitle: "Advisory services built around your capital",
  servicesIntro: "Bespoke guidance for individuals and enterprises across financial architecture, investments, tax, retirement, estates and corporate capital.",
  statementsTitle: "Mission, vision and the people behind them",
  contactTitle: "Let\u2019s plan your next move.",
  footerLine: "Strategic, financial and business advisory for individuals and enterprises.",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
];
