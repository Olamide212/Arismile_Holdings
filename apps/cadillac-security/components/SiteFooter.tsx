import { group } from "@arismile/brand";
import { groupLinks, navItems, servicePath, siteEmail } from "@arismile/site-kit";
import { BrandIcon, Container } from "@arismile/ui";
import Link from "next/link";
import { Tag } from "@/components/ui";
import { site } from "@/lib/site";

/** Grid-lined footer with monospaced labels. */
export function SiteFooter() {
  const email = siteEmail(site);
  return (
    <footer className="relative isolate border-t border-fg/10 bg-band text-fg">
      <div aria-hidden className="sentinel-grid absolute inset-0 -z-10 opacity-50" />
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.3fr_1.1fr]">
        <div>
          <p className="font-display text-3xl font-semibold uppercase">{site.name}</p>
          <p className="mt-4 max-w-xs leading-relaxed text-fg/60">{site.footerLine}</p>
          <ul className="mt-6 flex gap-2" aria-label="Social media">
            {group.socials.map((s) => (
              <li key={s.network}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Arismile Holdings on ${s.label} (opens in a new tab)`}
                  className="inline-flex size-9 items-center justify-center border border-fg/20 text-fg/70 hover:border-primary hover:text-accent"
                >
                  <BrandIcon network={s.network} size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Tag>{"// "}Navigate</Tag>
          <ul className="mt-5 space-y-3 font-mono text-[13px] uppercase tracking-[0.15em]">
            {[...navItems, { label: "Privacy", href: "/privacy-policy" }].map((n, i) => (
              <li key={n.href}>
                <Link href={n.href} className="text-fg/65 hover:text-accent">
                  [{String(i + 1).padStart(2, "0")}] {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Tag>{"// "}Capabilities</Tag>
          <ul className="mt-5 space-y-3 text-[15px]">
            {site.services.items.map((s) => (
              <li key={s.slug}>
                <Link href={servicePath(s.slug)} className="text-fg/65 hover:text-accent">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Tag>{"// "}Contact</Tag>
          <ul className="mt-5 space-y-3 text-[15px] text-fg/65">
            <li>
              <a href={`mailto:${email}`} className="break-all hover:text-accent">
                {email}
              </a>
            </li>
            <li>
              <a href={group.phone.href} className="hover:text-accent">
                {group.phone.display}
              </a>
            </li>
            <li>{group.offices[0]?.lines.join(", ")}</li>
          </ul>
        </div>
      </Container>
      <Container className="border-t border-fg/10 py-6">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[12px] uppercase tracking-[0.15em] text-fg/50">
          {groupLinks(site).map((l) => (
            <li key={l.name}>
              <a href={l.href} className="hover:text-accent">
                {l.name}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.15em] text-fg/40">
          © {new Date().getFullYear()} {site.record.legalName} · A subsidiary of {group.name}
        </p>
      </Container>
    </footer>
  );
}
