import { subsidiaryEmail } from "@arismile/brand";
import { generalEnquiry } from "./contact";
import type { SiteContent } from "./types";

export function servicePath(slug: string) {
  return `/services/${slug}`;
}

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
] as const;

/** Mission/vision statements from the verified profile, else the site's own values. */
export function siteValues(site: SiteContent) {
  return site.profile.statements?.length ? site.profile.statements : (site.about.values ?? []);
}

export function siteGroups(site: SiteContent) {
  return site.about.groups ?? site.profile.groups ?? [];
}

/** Options for the contact form's "enquiry about" field (also validated server-side). */
export function contactOptions(site: SiteContent) {
  return [...site.services.items.map((s) => s.title), generalEnquiry];
}

/** The subsidiary's own email address (group address if it has none). */
export function siteEmail(site: SiteContent) {
  return subsidiaryEmail(site.record);
}
