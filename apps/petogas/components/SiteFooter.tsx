import { group } from "@arismile/brand";
import { groupLinks, navItems, servicePath, siteEmail } from "@arismile/site-kit";
import { BrandIcon, Container } from "@arismile/ui";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";

/** Navy corporate footer with a gold top rule. */
export function SiteFooter() {
  const email = siteEmail(site);
  return (
    <footer className="border-t-4 border-highlight bg-band text-on-band">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1.2fr]">
        <div>
          <p className="font-display text-2xl font-bold">{site.record.legalName}</p>
          <p className="mt-1 text-[13px] font-bold uppercase tracking-[0.25em] text-highlight">Fuelling Possibilities</p>
          <p className="mt-4 max-w-xs leading-relaxed opacity-70">{site.footerLine}</p>
          <ul className="mt-6 flex gap-2" aria-label="Social media">
            {group.socials.map((s) => (
              <li key={s.network}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Arismile Holdings on ${s.label} (opens in a new tab)`}
                  className="inline-flex size-10 items-center justify-center rounded-full bg-on-band/10 hover:bg-highlight hover:text-band"
                >
                  <BrandIcon network={s.network} size={15} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Col title="Company" items={[...navItems, { label: "Privacy Policy", href: "/privacy-policy" }].map((n) => ({ label: n.label, href: n.href }))} />
        <Col title="Products & services" items={site.services.items.map((s) => ({ label: s.title, href: servicePath(s.slug) }))} />
        <div>
          <h2 className="text-[13px] font-bold uppercase tracking-[0.2em] text-highlight">Contact</h2>
          <ul className="mt-5 space-y-4 opacity-80">
            <li>
              <a href={group.phone.href} className="flex gap-3 hover:text-highlight">
                <Phone aria-hidden className="mt-1 size-4 shrink-0" /> {group.phone.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${email}`} className="flex gap-3 break-all hover:text-highlight">
                <Mail aria-hidden className="mt-1 size-4 shrink-0" /> {email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin aria-hidden className="mt-1 size-4 shrink-0" />
              <address className="not-italic">{group.offices[0]?.lines.join(", ")}</address>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-on-band/10">
        <Container className="flex flex-col gap-4 py-6 text-[13px] md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 opacity-70">
            {groupLinks(site).map((l) => (
              <li key={l.name}>
                <a href={l.href} className="hover:text-highlight">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
          <p className="opacity-55">
            © {new Date().getFullYear()} {site.record.legalName}. A subsidiary of {group.name}.
          </p>
        </Container>
      </div>
    </footer>
  );
}

function Col({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="text-[13px] font-bold uppercase tracking-[0.2em] text-highlight">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href} className="opacity-75 hover:text-highlight hover:opacity-100">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
