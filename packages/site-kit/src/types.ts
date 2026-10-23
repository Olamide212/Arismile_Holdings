import type { ContentBlock, ContentGroup, LeaderProfile, SubsidiaryProfile, SubsidiaryRecord } from "@arismile/brand";
import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";

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
  /**
   * The company's team. When omitted, the Team page shows the Arismile
   * leadership, which leads Arismile Holdings and every subsidiary.
   */
  team?: { title: string; intro: string; members: LeaderProfile[] };
  contact: { title: string; intro: string };
  cta: { title: string; text: string };
  footerLine: string;
}

export interface Crumb {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  site: SiteContent;
  eyebrow: string;
  title: string;
  intro?: string;
  /** Breadcrumb trail, starting with Home and ending with this page. */
  crumbs: Crumb[];
}

export interface HeadingProps {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
  /** Rendered on the site's dark band colour. */
  onDark?: boolean;
}

export interface SectionSlotProps {
  site: SiteContent;
  eyebrow: string;
  title: string;
  intro?: string;
  id: string;
}

/**
 * Per-site presentation. Each site implements these with its own layout;
 * every slot renders a complete section (background, spacing and content),
 * so inner pages built by site-kit take on the site's design.
 */
export interface SiteUI {
  PageHero: ComponentType<PageHeroProps>;
  Heading: ComponentType<HeadingProps>;
  ServicesSection: ComponentType<SectionSlotProps & { services: ServiceContent[] }>;
  FeaturesSection: ComponentType<SectionSlotProps & { items: IconItem[] }>;
  ProcessSection: ComponentType<SectionSlotProps & { steps: { title: string; body: string }[] }>;
  ValuesSection: ComponentType<SectionSlotProps & { items: ContentBlock[] }>;
  CtaSection: ComponentType<{ site: SiteContent }>;
}
