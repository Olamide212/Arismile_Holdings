import { group } from "@arismile/brand";
import { groupLinks, navItems, servicePath, siteEmail } from "@arismile/site-kit";
import { BrandIcon, Container } from "@arismile/ui";
import Link from "next/link";
import { site } from "@/lib/site";

/** Navy footer with a centred serif wordmark. */
export function SiteFooter() {
  const email = siteEmail(site);
  return (
    <footer className="bg-band text-on-band">
      <Container className="border-b border-on-band/15 py-16 text-center">
        <p className="font-display text-5xl font-semibold md:text-6xl">{site.name}</p>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed opacity-70">{site.footerLine}</p>
        <nav aria-label="Footer" className="mt-10">
          <ul className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-[12px] font-semibold uppercase tracking-[0.3em]">
            {[...navItems, { label: "Privacy", href: "/privacy-policy" }].map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="opacity-75 hover:text-highlight hover:opacity-100">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <Container className="grid gap-10 py-14 text-[15px] md:grid-cols-3">
        <div>
          <h2 className="font-display text-xl italic text-highlight">Services</h2>
          <ul className="mt-4 space-y-2.5">
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
          <h2 className="font-display text-xl italic text-highlight">Contact</h2>
          <ul className="mt-4 space-y-2.5 opacity-75">
            <li>
              <a href={`mailto:${email}`} className="break-all hover:text-highlight">
                {email}
              </a>
            </li>
            <li>
              <a href={group.phone.href} className="hover:text-highlight">
                {group.phone.display}
              </a>
            </li>
            {group.offices.map((o) => (
              <li key={o.label}>
                <span className="font-semibold">{o.label}:</span> {o.lines.join(", ")}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-xl italic text-highlight">The Arismile Group</h2>
          <ul className="mt-4 space-y-2.5">
            {groupLinks(site).map((l) => (
              <li key={l.name}>
                <a href={l.href} className="opacity-75 hover:text-highlight hover:opacity-100">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex gap-2" aria-label="Social media">
            {group.socials.map((s) => (
              <li key={s.network}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Arismile Holdings on ${s.label} (opens in a new tab)`}
                  className="inline-flex size-9 items-center justify-center border border-on-band/25 hover:border-highlight hover:text-highlight"
                >
                  <BrandIcon network={s.network} size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <p className="border-t border-on-band/15 py-6 text-center text-[12px] uppercase tracking-[0.3em] opacity-55">
        © {new Date().getFullYear()} {site.record.legalName} · A subsidiary of {group.name}
      </p>
    </footer>
  );
}
