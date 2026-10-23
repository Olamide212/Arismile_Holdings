import { groupLeadership, subsidiaries, subsidiaryEmail } from "@arismile/brand";
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
  { label: "Team", href: "/team" },
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

/** Links to Arismile Holdings and the other group companies, for footers. */
export function groupLinks(site: SiteContent) {
  return [
    { name: "Arismile Holdings", href: site.holdingsUrl },
    ...subsidiaries
      .filter((s) => s.slug !== site.record.slug)
      .map((s) => ({ name: s.name, href: s.website ?? `${site.holdingsUrl}${s.holdingsPath}` })),
  ];
}

/** The site's team. Defaults to the Arismile leadership, which leads every company in the group. */
export function siteTeam(site: SiteContent) {
  return (
    site.team ?? {
      title: "Leadership",
      intro: `Meet the leadership team of ${site.record.legalName}. The same leaders guide Arismile Holdings and every company in the Arismile group.`,
      members: groupLeadership,
    }
  );
}
