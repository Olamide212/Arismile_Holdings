import { group } from "@arismile/brand";
import { groupLinks, navItems, servicePath, siteEmail } from "@arismile/site-kit";
import { BrandIcon, Container } from "@arismile/ui";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  const email = siteEmail(site);
  return (
    <footer className="relative isolate overflow-hidden border-t border-fg/10 bg-bg text-fg">
      <div aria-hidden className="circuit-grid absolute inset-0 -z-10 opacity-40" />
      <Container className="flex flex-col gap-8 border-b border-fg/10 py-16 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          Have a project in mind? <span className="text-highlight">Let’s talk.</span>
        </h2>
        <a href={`mailto:${email}`} className="group inline-flex items-center gap-2 rounded-full border border-fg/20 px-6 py-3 font-semibold hover:border-highlight hover:text-highlight">
          {email}
          <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </Container>
      <Container className="grid gap-10 py-14 text-[15px] sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.3fr_1fr]">
        <div>
          <p className="font-display text-xl font-semibold">{site.record.legalName}</p>
          <p className="mt-3 max-w-xs leading-relaxed text-fg/55">{site.footerLine}</p>
          <ul className="mt-6 flex gap-2" aria-label="Social media">
            {group.socials.map((s) => (
              <li key={s.network}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Arismile Holdings on ${s.label} (opens in a new tab)`}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-fg/15 text-fg/70 hover:border-highlight hover:text-highlight"
                >
                  <BrandIcon network={s.network} size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Col title="Company" items={[...navItems, { label: "Privacy Policy", href: "/privacy-policy" }].map((n) => ({ label: n.label, href: n.href }))} />
        <Col title="Services" items={site.services.items.map((s) => ({ label: s.title, href: servicePath(s.slug) }))} />
        <div>
          <h2 className="text-[13px] font-medium text-fg/45">Arismile Group</h2>
          <ul className="mt-4 space-y-2.5">
            {groupLinks(site).map((l) => (
              <li key={l.name}>
                <a href={l.href} className="text-fg/70 hover:text-highlight">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-fg/10 py-6 text-[13px] text-fg/45 md:flex-row md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.record.legalName}
        </p>
        <p>
          {group.phone.display} · A subsidiary of {group.name}
        </p>
      </Container>
    </footer>
  );
}

function Col({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="text-[13px] font-medium text-fg/45">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href} className="text-fg/70 hover:text-highlight">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
