import { subsidiaries } from "@arismile/brand";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arismile.ng";

export const siteDescription =
  "Arismile Holdings is a Nigerian multi-sectoral investment and EPC group delivering power, oil and gas, mining, construction, procurement, security, advisory and technology services through its subsidiaries.";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavItem extends NavLink {
  children?: NavLink[];
}

/** Original WordPress menu order (Home, Subsidiaries, Our Team, Contact) plus the arismile.ng additions. */
export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Subsidiaries",
    href: "/subsidiaries",
    children: subsidiaries.map((s) => ({ label: s.cardName, href: s.holdingsPath })),
  },
  { label: "Services", href: "/#services" },
  { label: "Our Team", href: "/our-team" },
  { label: "Contact", href: "/contact" },
];

/** Footer "Quick Links" column (original labels first). */
export const footerQuickLinks: NavLink[] = [
  { label: "9 Town Nig. Ltd.", href: "/subsidiaries/nine-town" },
  { label: "Oceania Limited", href: "/subsidiaries/oceania" },
  { label: "Datu Kalinga", href: "/subsidiaries/datu-kalinga" },
  { label: "Mind Age", href: "/subsidiaries/mind-age" },
  { label: "Arismile Advisory", href: "/subsidiaries/arismile-advisory" },
  { label: "Cadillac Security", href: "/subsidiaries/cadillac-security" },
  { label: "Petogas Limited", href: "/subsidiaries/petogas-limited" },
  // The original "Career" link pointed at the contact page; no careers page exists.
  { label: "Career", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];
