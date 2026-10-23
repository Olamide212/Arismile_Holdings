import { group } from "@arismile/brand";
import { groupLinks, navItems, reveal, servicePath, siteEmail } from "@arismile/site-kit";
import { BrandIcon, Container } from "@arismile/ui";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";

/** Editorial footer with a statement line and an oversized wordmark. */
export function SiteFooter() {
  const email = siteEmail(site);
  return (
    <footer className="overflow-hidden bg-band text-on-band">
      <Container className="grid gap-10 border-b border-on-band/15 py-20 lg:grid-cols-[1.4fr_1fr]">
        <p {...reveal("up")} className="font-display text-4xl leading-[1.1] md:text-5xl">
          Let’s build what comes next.
        </p>
        <div {...reveal("up", 100)} className="lg:text-right">
          <a href={`mailto:${email}`} className="group inline-flex items-center gap-2 font-display text-2xl text-highlight md:text-3xl">
            {email}
            <ArrowUpRight aria-hidden className="size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
          <p className="mt-3 opacity-70">
            <a href={group.phone.href} className="hover:text-highlight">
              {group.phone.display}
            </a>
          </p>
        </div>
      </Container>

      <Container className="grid gap-10 py-16 text-[15px] sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-[12px] font-semibold uppercase tracking-[0.3em] text-highlight">Explore</h2>
          <ul className="mt-5 space-y-3">
            {[...navItems, { label: "Privacy Policy", href: "/privacy-policy" }].map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="opacity-75 hover:text-highlight hover:opacity-100">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[12px] font-semibold uppercase tracking-[0.3em] text-highlight">Services</h2>
          <ul className="mt-5 space-y-3">
            {site.services.items.map((s) => (
              <li key={s.slug}>
                <Link href={servicePath(s.slug)} className="opacity-75 hover:text-highlight hover:opacity-100">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[12px] font-semibold uppercase tracking-[0.3em] text-highlight">Offices</h2>
          <ul className="mt-5 space-y-5 opacity-75">
            {group.offices.map((o) => (
              <li key={o.label}>
                <p className="font-semibold">{o.label}</p>
                <address className="not-italic">{o.lines.join(", ")}</address>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[12px] font-semibold uppercase tracking-[0.3em] text-highlight">The Arismile Group</h2>
          <ul className="mt-5 space-y-3">
            {groupLinks(site).map((l) => (
              <li key={l.name}>
                <a href={l.href} className="opacity-75 hover:text-highlight hover:opacity-100">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="mt-8 flex gap-3" aria-label="Social media">
            {group.socials.map((s) => (
              <li key={s.network}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Arismile Holdings on ${s.label} (opens in a new tab)`}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-on-band/25 hover:border-highlight hover:text-highlight"
                >
                  <BrandIcon network={s.network} size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div aria-hidden className="select-none whitespace-nowrap text-center font-display text-[22vw] leading-[0.8] text-on-band/[0.07]">
        9-TOWN
      </div>
      <Container className="flex flex-col gap-2 border-t border-on-band/15 py-6 text-[13px] opacity-60 md:flex-row md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.record.legalName}. All rights reserved.
        </p>
        <p>A subsidiary of {group.name}.</p>
      </Container>
    </footer>
  );
}
