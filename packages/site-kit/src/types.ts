import type { ContentBlock, ContentGroup, SubsidiaryProfile, SubsidiaryRecord } from "@arismile/brand";
import type { LucideIcon } from "lucide-react";

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface IconItem {
  icon: LucideIcon;
  title: string;
  body: string;
}

export interface ServiceContent {
  slug: string;
  icon: LucideIcon;
  title: string;
  /** One-paragraph summary (verified copy from arismile.ng). */
  description: string;
  /** Longer explanation for the service page. */
  overview: string[];
  /** "What's included" checklist. */
  deliverables: string[];
}

export interface FaqItem {
  q: string;
  a: string;
}

/**
 * Everything a subsidiary site needs. Verified copy comes from
 * `@arismile/brand`; the rest is written per site in `lib/site.ts`.
 */
export interface SiteContent {
  record: SubsidiaryRecord;
  profile: SubsidiaryProfile;
  /** Short brand name for headings, e.g. "Petogas". */
  name: string;
  siteUrl: string;
  holdingsUrl: string;
  logo: ImageAsset;
  /** Logo height in the header, as a Tailwind class (default h-12). */
  logoClassName?: string;
  images: {
    hero: ImageAsset;
    about?: ImageAsset;
    /** Background for inner-page headers (falls back to `hero`). */
    banner?: ImageAsset;
  };
  hero: {
    variant: "split" | "fullbleed";
    eyebrow: string;
    title: string;
    text: string;
  };
  /** "Why choose us" cards on the home page. */
  highlights: { title: string; intro: string; items: IconItem[] };
  about: {
    title: string;
    /** Story paragraphs (defaults to the verified profile intro). */
    story?: string[];
    /** Values shown when the profile has no mission/vision statements. */
    values?: ContentBlock[];
    groups?: ContentGroup[];
  };
  process: { title: string; intro: string; steps: { title: string; body: string }[] };
  industries: { title: string; intro: string; items: IconItem[] };
  services: { title: string; intro: string; items: ServiceContent[] };
  faqs: FaqItem[];
  contact: { title: string; intro: string };
  cta: { title: string; text: string };
  footerLine: string;
}
