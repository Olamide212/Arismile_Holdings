import { group } from "@arismile/brand";
import type { Metadata, MetadataRoute } from "next";
import type { Crumb, ServiceContent, SiteContent } from "./types";
import { servicePath, siteEmail, siteTeam } from "./utils";

/* ---------------------------------------------------------------- Metadata */

const abs = (site: SiteContent, path: string) => new URL(path, site.siteUrl).toString();

function keywords(site: SiteContent) {
  return [
    site.record.legalName,
    site.name,
    site.record.industry,
    ...site.services.items.map((s) => s.title),
    ...site.industries.items.map((i) => i.title),
    "Nigeria",
    "Abuja",
    "Lagos",
    "Arismile Holdings",
  ];
}

function shareImage(site: SiteContent) {
  const img = site.images.hero;
  return { url: img.src, width: img.width, height: img.height, alt: img.alt };
}

/** Site-wide metadata for the root layout. */
export function rootMetadata(site: SiteContent): Metadata {
  const title = `${site.record.legalName} | ${site.record.tagline}`;
  return {
    metadataBase: new URL(site.siteUrl),
    title: { default: title, template: `%s | ${site.record.legalName}` },
    description: site.profile.summary,
    applicationName: site.record.legalName,
    keywords: keywords(site),
    authors: [{ name: site.record.legalName, url: site.siteUrl }],
    creator: site.record.legalName,
    publisher: group.name,
    category: site.record.industry,
    alternates: { canonical: "/" },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    },
    openGraph: {
      type: "website",
      locale: "en_NG",
      siteName: site.record.legalName,
      title,
      description: site.profile.summary,
      url: "/",
      images: [shareImage(site)],
    },
    twitter: { card: "summary_large_image", title, description: site.profile.summary, images: [site.images.hero.src] },
  };
}

/**
 * Per-page metadata. Repeats the Open Graph basics because Next.js replaces
 * (rather than merges) the parent's openGraph object.
 */
export function pageMetadata(site: SiteContent, path: string, title: string | undefined, description: string): Metadata {
  const fullTitle = title ? `${title} | ${site.record.legalName}` : `${site.record.legalName} | ${site.record.tagline}`;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_NG",
      siteName: site.record.legalName,
      url: path,
      title: fullTitle,
      description,
      images: [shareImage(site)],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [site.images.hero.src] },
  };
}

export function serviceMetadata(site: SiteContent, slug: string): Metadata {
  const service = site.services.items.find((s) => s.slug === slug);
  if (!service) return {};
  return pageMetadata(site, servicePath(slug), service.title, service.description);
}

export function buildSitemap(site: SiteContent): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const main = ["", "/about", "/services", "/industries", "/team", "/contact"];
  return [
    ...main.map((p) => ({ url: abs(site, p || "/"), lastModified, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...site.services.items.map((s) => ({ url: abs(site, servicePath(s.slug)), lastModified, changeFrequency: "monthly" as const, priority: 0.9 })),
    { url: abs(site, "/privacy-policy"), lastModified, changeFrequency: "yearly" as const, priority: 0.3 },
  ];
}

export function buildRobots(site: SiteContent): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: abs(site, "/sitemap.xml"),
    host: site.siteUrl,
  };
}

export function buildManifest(site: SiteContent, colors: { background: string; theme: string }): MetadataRoute.Manifest {
  return {
    name: site.record.legalName,
    short_name: site.name,
    description: site.profile.summary,
    start_url: "/",
    display: "standalone",
    background_color: colors.background,
    theme_color: colors.theme,
    icons: [{ src: "/icon.png", sizes: "256x256", type: "image/png" }],
  };
}

/* ------------------------------------------------------- Structured data */

type JsonLdObject = Record<string, unknown>;

/** Renders schema.org JSON-LD. `<` is escaped so content can't close the script tag. */
export function JsonLd({ data }: { data: JsonLdObject | JsonLdObject[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

const orgId = (site: SiteContent) => `${site.siteUrl}/#organization`;

export function organizationJsonLd(site: SiteContent): JsonLdObject {
  const head = group.offices[0];
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId(site),
    name: site.record.legalName,
    alternateName: site.name,
    url: site.siteUrl,
    logo: abs(site, site.logo.src),
    image: abs(site, site.images.hero.src),
    description: site.profile.summary,
    slogan: site.record.tagline,
    email: siteEmail(site),
    telephone: group.phone.href.replace("tel:", ""),
    address: head
      ? { "@type": "PostalAddress", streetAddress: head.lines[0], addressLocality: head.city, addressCountry: "NG" }
      : undefined,
    areaServed: { "@type": "Country", name: "Nigeria" },
    knowsAbout: site.services.items.map((s) => s.title),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: siteEmail(site),
      telephone: group.phone.href.replace("tel:", ""),
      areaServed: "NG",
      availableLanguage: ["en"],
    },
    parentOrganization: { "@type": "Organization", name: group.name, url: site.holdingsUrl },
  };
}

export function websiteJsonLd(site: SiteContent): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.siteUrl}/#website`,
    name: site.record.legalName,
    url: site.siteUrl,
    inLanguage: "en-NG",
    publisher: { "@id": orgId(site) },
  };
}

export function breadcrumbJsonLd(site: SiteContent, crumbs: Crumb[], currentPath: string): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: abs(site, c.href ?? currentPath),
    })),
  };
}

export function serviceJsonLd(site: SiteContent, service: ServiceContent): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
    url: abs(site, servicePath(service.slug)),
    provider: { "@id": orgId(site) },
    areaServed: { "@type": "Country", name: "Nigeria" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title}: what's included`,
      itemListElement: service.deliverables.map((d) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: d } })),
    },
  };
}

export function faqJsonLd(site: SiteContent): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function teamJsonLd(site: SiteContent): JsonLdObject {
  const team = siteTeam(site);
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: team.title,
    itemListElement: team.members.map((m, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Person",
        name: m.name,
        jobTitle: m.role,
        description: m.bio,
        image: abs(site, m.photo.src),
        // The leadership is shared across the group.
        worksFor: [{ "@id": orgId(site) }, { "@type": "Organization", name: group.name, url: site.holdingsUrl }],
      },
    })),
  };
}
