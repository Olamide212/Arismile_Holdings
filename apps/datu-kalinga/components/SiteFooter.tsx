import { group } from "@arismile/brand";
import { groupLinks, navItems, servicePath, siteEmail } from "@arismile/site-kit";
import { BrandIcon } from "@arismile/ui";
import Link from "next/link";
import { Strata } from "@/components/ui";
import { site } from "@/lib/site";

/** Bordered-cell footer. */
export function SiteFooter() {
  const email = siteEmail(site);
  const cell = "border-b-2 border-r-2 border-on-band/25 p-8";
  return (
    <footer className="bg-band text-on-band">
      <Strata />
      <div className="mx-auto grid max-w-(--container-max) border-l-2 border-on-band/25 sm:grid-cols-2 lg:grid-cols-4">
        <div className={`${cell} sm:col-span-2`}>
          <p className="font-display text-3xl font-bold uppercase leading-tight">{site.record.legalName}</p>
          <p className="mt-4 max-w-md leading-relaxed opacity-70">{site.footerLine}</p>
        </div>
        <div className={`${cell} sm:col-span-2`}>
          <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-highlight">Contact</p>
          <a href={`mailto:${email}`} className="mt-4 block break-all font-display text-2xl font-bold hover:text-highlight">
            {email}
          </a>
          <a href={group.phone.href} className="mt-2 block opacity-80 hover:text-highlight">
            {group.phone.display}
          </a>
        </div>
        <div className={cell}>
          <h2 className="text-[12px] font-bold uppercase tracking-[0.25em] text-highlight">Company</h2>
          <ul className="mt-5 space-y-3 text-[15px]">
            {[...navItems, { label: "Privacy Policy", href: "/privacy-policy" }].map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="uppercase tracking-wide opacity-75 hover:text-highlight hover:opacity-100">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={cell}>
          <h2 className="text-[12px] font-bold uppercase tracking-[0.25em] text-highlight">Services</h2>
          <ul className="mt-5 space-y-3 text-[15px]">
            {site.services.items.map((s) => (
              <li key={s.slug}>
                <Link href={servicePath(s.slug)} className="opacity-75 hover:text-highlight hover:opacity-100">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={cell}>
          <h2 className="text-[12px] font-bold uppercase tracking-[0.25em] text-highlight">Offices</h2>
          <ul className="mt-5 space-y-4 text-[15px] opacity-75">
            {group.offices.map((o) => (
              <li key={o.label}>
                <p className="font-bold">{o.label}</p>
                <address className="not-italic">{o.lines.join(", ")}</address>
              </li>
            ))}
          </ul>
        </div>
        <div className={cell}>
          <h2 className="text-[12px] font-bold uppercase tracking-[0.25em] text-highlight">Arismile Group</h2>
          <ul className="mt-5 space-y-3 text-[15px]">
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
                  className="inline-flex size-9 items-center justify-center border-2 border-on-band/30 hover:border-highlight hover:text-highlight"
                >
                  <BrandIcon network={s.network} size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mx-auto max-w-(--container-max) px-8 py-6 text-[13px] uppercase tracking-wider opacity-55">
        © {new Date().getFullYear()} {site.record.legalName} · A subsidiary of {group.name}
      </p>
    </footer>
  );
}
