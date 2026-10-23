import { group } from "@arismile/brand";
import type { Metadata } from "next";
import { siteDescription, siteUrl } from "@/lib/site";

const shareImage = { url: "/images/hero/datu-kalinga.jpg", width: 2400, height: 1800, alt: "Arismile Holdings" };

export const keywords = [
  "Arismile Holdings",
  "Nigeria",
  "EPC",
  "power infrastructure",
  "oil and gas infrastructure",
  "mining",
  "procurement",
  "construction",
  "Abuja",
  "Lagos",
  "9-Town",
  "Oceania",
  "Datu Kalinga",
  "Mind Age",
  "Arismile Advisory",
  "Cadillac Security",
  "Petogas",
];

/**
 * Per-page metadata. Repeats the Open Graph basics because Next.js replaces
 * (rather than merges) the parent's openGraph object.
 */
export function pageMeta(path: string, title: string | undefined, description: string, image = shareImage): Metadata {
  const fullTitle = title ? `${title} | ${group.name}` : "Arismile Holdings | Power, Oil & Gas, Mining and Infrastructure";
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: group.name, locale: "en_NG", url: path, title: fullTitle, description, images: [image] },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image.url] },
  };
}

export const defaultDescription = siteDescription;

export const abs = (path: string) => new URL(path, siteUrl).toString();

/** Renders schema.org JSON-LD with `<` escaped. */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function breadcrumbs(items: { label: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.label, item: abs(c.path) })),
  };
}
