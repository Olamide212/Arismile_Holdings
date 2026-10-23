/**
 * Group-level facts shared by every Arismile website.
 *
 * Sources: https://arismile.ng (current, authoritative) and
 * https://arismile.com.ng (original WordPress site). Anything that appears on
 * only one source, or differs between them, is marked `needsVerification`.
 * Keep design tokens out of this package: each site owns its own identity.
 */

export interface Office {
  label: string;
  /** Address lines, rendered one per line. */
  lines: string[];
  city: "Abuja" | "Lagos";
  needsVerification?: string;
}

export interface SocialProfile {
  network: "linkedin" | "facebook" | "instagram" | "x";
  label: string;
  href: string;
  needsVerification?: string;
}

export const group = {
  name: "Arismile Holdings",
  shortName: "Arismile",
  phone: {
    display: "+234 (0) 8175539075",
    href: "tel:+2348175539075",
  },
  /** Shown only on the contact page of arismile.ng ("Call Us"). */
  secondaryPhone: {
    display: "+234 (0) 8039550505",
    href: "tel:+2348039550505",
    needsVerification:
      "Appears on the arismile.ng contact page only; the footer of both sites uses +234 (0) 8175539075.",
  },
  email: "info@arismile.com.ng",
  workingHours: "Monday - Friday",
  offices: [
    {
      label: "Abuja Corporate Office",
      lines: ["20, Queen Elizabeth Street", "Asokoro, Abuja"],
      city: "Abuja",
    },
    {
      label: "Head Office Annex",
      lines: [
        "Suites 4 & 5, Ministry of Justice Building",
        "Olusegun Obasanjo Wing",
        "Maitama, Abuja",
      ],
      city: "Abuja",
    },
    {
      label: "Lagos Corporate Office",
      lines: ["The Admiralty Towers, Apartment B16", "8, Gerrard Road", "Ikoyi, Lagos"],
      city: "Lagos",
      needsVerification:
        'arismile.ng shows "Apartment B16, 8, Gerrard Road" on /contact but "Apartment B168, Gerrard Road" in the footer.',
    },
  ] satisfies Office[],
  socials: [
    {
      network: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/arismile-holdings/",
    },
    {
      network: "facebook",
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61589891500048",
    },
    {
      network: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/arismileholdings/",
      needsVerification: "Linked from arismile.com.ng only.",
    },
    {
      network: "x",
      label: "X (Twitter)",
      href: "https://twitter.com/ArismileHolding",
      needsVerification:
        "Linked from arismile.com.ng only; arismile.ng links to an X search instead of a profile.",
    },
  ] satisfies SocialProfile[],
} as const;

export type SubsidiarySlug =
  | "nine-town"
  | "oceania"
  | "datu-kalinga"
  | "mind-age"
  | "arismile-advisory"
  | "cadillac-security"
  | "petogas-limited";

export interface SubsidiaryRecord {
  slug: SubsidiarySlug;
  /** Name as used in navigation and cards. */
  name: string;
  /** Upper-case name used on the original homepage cards. */
  cardName: string;
  legalName: string;
  industry: string;
  tagline: string;
  /** Path of the subsidiary page on the Holdings site. */
  holdingsPath: `/subsidiaries/${SubsidiarySlug}`;
  /** The company's own website, where one has been assigned. */
  website?: `https://${string}`;
  /** The company's own email address (falls back to the group email). */
  email?: string;
}

/** Order follows the arismile.ng homepage (original four first). */
export const subsidiaries: readonly SubsidiaryRecord[] = [
  {
    slug: "nine-town",
    name: "9-Town",
    cardName: "9Town Limited",
    legalName: "9TOWN Nigeria Limited",
    industry: "Real Estate & Development",
    tagline: "Architecting Sustainable Urban Futures",
    holdingsPath: "/subsidiaries/nine-town",
    website: "https://www.9townnigltd.com",
    email: "info@9townnigltd.com",
  },
  {
    slug: "oceania",
    name: "Oceania",
    cardName: "Oceania Limited",
    legalName: "Oceania Limited",
    industry: "Maritime & Logistics",
    tagline: "Redefining the Frontier of Marine and Energy Engineering",
    holdingsPath: "/subsidiaries/oceania",
    website: "https://www.oceanialtd.com",
    email: "info@oceanialtd.com",
  },
  {
    slug: "datu-kalinga",
    name: "Datu Kalinga",
    cardName: "Datu (Kalinga)",
    legalName: "Datu Kalinga Nigeria Limited",
    industry: "Energy & Resources",
    tagline: "Pioneering the Future of Global Mineral Resources",
    holdingsPath: "/subsidiaries/datu-kalinga",
    website: "https://www.datukalinga.com",
    email: "info@datukalinga.com",
  },
  {
    slug: "mind-age",
    name: "Mind Age",
    cardName: "Mind Age",
    legalName: "Mindage Limited",
    industry: "Technology & Innovation",
    tagline: "Engineering the Future of the Global Digital Economy",
    holdingsPath: "/subsidiaries/mind-age",
    // Temporary Vercel URL until a custom domain is assigned.
    website: "https://mind-age.vercel.app",
  },
  {
    slug: "arismile-advisory",
    name: "Arismile Advisory",
    cardName: "Arismile Advisory",
    legalName: "Arismile Advisory Limited",
    industry: "Consulting & Strategy",
    tagline: "Navigating Complexity. Engineering Wealth.",
    holdingsPath: "/subsidiaries/arismile-advisory",
    // Temporary Vercel URL until a custom domain is assigned.
    website: "https://arismile-advisory-gamma.vercel.app",
  },
  {
    slug: "cadillac-security",
    name: "Cadillac Security",
    cardName: "Cadillac Security",
    legalName: "Cadillac Security Limited",
    industry: "Security & Logistics",
    tagline: "Securing Assets. Protecting Life. Benchmarking Global Excellence.",
    holdingsPath: "/subsidiaries/cadillac-security",
    website: "https://www.cadillacsecurity.com.ng",
    email: "info@cadillacsecurity.com.ng",
  },
  {
    slug: "petogas-limited",
    name: "Petogas Limited",
    cardName: "Petogas Limited",
    legalName: "Petogas Nigeria Limited",
    industry: "Oil & Gas Services",
    tagline: "Fueling Progress. Powering the Future of the Indigenous Energy Frontier.",
    holdingsPath: "/subsidiaries/petogas-limited",
    website: "https://www.petogas.com",
    email: "info@petogas.com",
  },
];

/** "https://www.example.com/" -> "www.example.com", for link labels. */
export function displayDomain(url: string): string {
  return new URL(url).hostname;
}

/** Email address for a subsidiary's enquiries. */
export function subsidiaryEmail(record: Pick<SubsidiaryRecord, "email">): string {
  return record.email ?? group.email;
}

export function getSubsidiary(slug: string): SubsidiaryRecord | undefined {
  return subsidiaries.find((s) => s.slug === slug);
}

/** Absolute link back to the Holdings site, for use by subsidiary apps. */
export const holdingsSiteUrl = "https://arismile.ng";

export {
  subsidiaryProfiles,
  type ContentBlock,
  type ContentGroup,
  type SubsidiaryProfile,
  type SubsidiaryService,
} from "./profiles";
export { groupLeadership, type LeaderProfile } from "./leadership";
