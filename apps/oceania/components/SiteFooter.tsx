import { group } from "@arismile/brand";
import { groupLinks, navItems, servicePath, siteEmail } from "@arismile/site-kit";
import { BrandIcon, Container } from "@arismile/ui";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Wave } from "@/components/ui";
import { site } from "@/lib/site";

/** Navy footer that rises out of the page on a wave. */
export function SiteFooter() {
  const email = siteEmail(site);
  return (
    <footer className="bg-bg text-on-band">
      <Wave fill="fill-band" />
      <div className="bg-band">
        <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1.2fr]">
          <div>
            <p className="font-display text-2xl font-semibold">{site.record.legalName}</p>
            <p className="mt-3 max-w-xs leading-relaxed opacity-70">{site.footerLine}</p>
            <ul className="mt-6 flex gap-2.5" aria-label="Social media">
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
          <FooterList title="Navigate" items={[...navItems, { label: "Privacy Policy", href: "/privacy-policy" }].map((n) => ({ label: n.label, href: n.href }))} />
          <FooterList title="Services" items={site.services.items.map((s) => ({ label: s.title, href: servicePath(s.slug) }))} />
          <div>
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-highlight">Contact</h2>
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
        <Container className="border-t border-on-band/10 py-6">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[14px] opacity-70">
            {groupLinks(site).map((l) => (
              <li key={l.name}>
                <a href={l.href} className="hover:text-highlight">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[13px] opacity-50">
            © {new Date().getFullYear()} {site.record.legalName}. A subsidiary of {group.name}.
          </p>
        </Container>
      </div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-highlight">{title}</h2>
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
