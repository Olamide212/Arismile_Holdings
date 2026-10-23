import { displayDomain, group, subsidiaries } from "@arismile/brand";
import { BrandIcon, Container } from "@arismile/ui";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import type { SiteContent } from "../types";
import { navItems, servicePath, siteEmail } from "../utils";

/** Footer with services, company links, contact details and links to sister companies. */
export function SiteFooter({ site }: { site: SiteContent }) {
  const sisters = subsidiaries.filter((s) => s.slug !== site.record.slug);
  const headOffice = group.offices[0];

  return (
    <footer className="bg-band text-on-band">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr] lg:py-20">
        <div>
          <p className="font-display text-2xl font-semibold">{site.record.legalName}</p>
          <p className="mt-3 max-w-xs text-[15px] leading-relaxed opacity-75">{site.footerLine}</p>
          <ul className="mt-6 flex gap-2.5" aria-label="Social media">
            {group.socials.map((social) => (
              <li key={social.network}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Arismile Holdings on ${social.label} (opens in a new tab)`}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-on-band/25 transition-colors hover:border-highlight hover:text-highlight"
                >
                  <BrandIcon network={social.network} size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <FooterColumn title="Company">
          {[...navItems.filter((n) => n.href !== "/"), { label: "Privacy Policy", href: "/privacy-policy" }].map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="opacity-75 transition hover:text-highlight hover:opacity-100">
                {item.label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Services">
          {site.services.items.map((s) => (
            <li key={s.slug}>
              <Link href={servicePath(s.slug)} className="opacity-75 transition hover:text-highlight hover:opacity-100">
                {s.title}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Contact">
          <li>
            <a href={group.phone.href} className="flex gap-2.5 opacity-75 hover:text-highlight hover:opacity-100">
              <Phone aria-hidden className="mt-1 size-4 shrink-0" />
              {group.phone.display}
            </a>
          </li>
          <li>
            <a href={`mailto:${siteEmail(site)}`} className="flex gap-2.5 break-all opacity-75 hover:text-highlight hover:opacity-100">
              <Mail aria-hidden className="mt-1 size-4 shrink-0" />
              {siteEmail(site)}
            </a>
          </li>
          {headOffice ? (
            <li className="flex gap-2.5 opacity-75">
              <MapPin aria-hidden className="mt-1 size-4 shrink-0" />
              <address className="not-italic">
                {headOffice.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </li>
          ) : null}
        </FooterColumn>
      </Container>

      <div className="border-t border-on-band/10">
        <Container className="py-8">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] opacity-60">The Arismile Group</p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
            <li>
              <a href={site.holdingsUrl} className="opacity-75 hover:text-highlight hover:opacity-100">
                Arismile Holdings
              </a>
            </li>
            {sisters.map((s) => (
              <li key={s.slug}>
                <a
                  href={s.website ?? `${site.holdingsUrl}${s.holdingsPath}`}
                  className="opacity-75 hover:text-highlight hover:opacity-100"
                  title={s.website ? displayDomain(s.website) : undefined}
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <div className="border-t border-on-band/10">
        <Container className="flex flex-col gap-2 py-6 text-[13px] opacity-60 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.record.legalName}. All rights reserved.
          </p>
          <p>A subsidiary of {group.name}.</p>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-highlight">{title}</h2>
      <ul className="mt-5 space-y-3 text-[15px] leading-snug">{children}</ul>
    </div>
  );
}
