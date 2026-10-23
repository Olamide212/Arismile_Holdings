import { group, type Office } from "@arismile/brand";
import { BrandIcon, Container } from "@arismile/ui";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { sectionImages } from "@/lib/content/company";
import { reveal } from "@/lib/reveal";
import { footerQuickLinks } from "@/lib/site";

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4">
      <h2 className="mb-3 text-[20px] font-semibold uppercase text-white">{children}</h2>
      <div className="divider-slashes" aria-hidden />
    </div>
  );
}

function OfficeList({ offices }: { offices: readonly Office[] }) {
  return (
    <ul className="space-y-5">
      {offices.map((office) => (
        <li key={office.label} className="flex gap-2.5">
          <MapPin aria-hidden className="mt-1 size-4 shrink-0 text-brand-green" />
          <address className="not-italic">
            <span className="block font-semibold text-white">{office.label}</span>
            {office.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </li>
      ))}
    </ul>
  );
}

/** Dark charcoal footer with the diagonal texture (multiply blend), as on the original. */
export function SiteFooter() {
  const abuja = group.offices.filter((o) => o.city === "Abuja");
  const lagos = group.offices.filter((o) => o.city === "Lagos");

  return (
    <footer className="relative isolate overflow-hidden bg-charcoal text-[15px] leading-relaxed text-offwhite">
      <Image
        src={sectionImages.footerTexture}
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover mix-blend-multiply"
      />
      <Container className="grid gap-12 pb-16 pt-20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:pb-[100px] lg:pt-[150px]">
        <div {...reveal("up")}>
          <Link href="/" aria-label="Arismile Holdings home" className="mb-5 inline-block">
            <Image
              src="/images/logo/arismile-logo-footer.png"
              alt="Arismile Holdings"
              width={200}
              height={79}
              className="h-auto w-[200px]"
            />
          </Link>
          <ul className="space-y-2">
            <li>
              <a href={group.phone.href} className="inline-flex items-center gap-2.5 hover:text-white">
                <Phone aria-hidden className="size-4 text-brand-green" />
                {group.phone.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${group.email}`} className="inline-flex items-center gap-2.5 break-all hover:text-white">
                <Mail aria-hidden className="size-4 shrink-0 text-brand-green" />
                {group.email}
              </a>
            </li>
          </ul>
          <ul className="mt-6 flex gap-2.5" aria-label="Social media">
            {group.socials.map((social) => (
              <li key={social.network}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label} (opens in a new tab)`}
                  className="inline-flex size-9 items-center justify-center rounded-full bg-brand-yellow text-charcoal transition-colors hover:bg-white"
                >
                  <BrandIcon network={social.network} size={15} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div {...reveal("up", 100)}>
          <FooterHeading>Abuja Address</FooterHeading>
          <OfficeList offices={abuja} />
        </div>

        <div {...reveal("up", 200)}>
          <FooterHeading>Lagos Address</FooterHeading>
          <OfficeList offices={lagos} />
        </div>

        <div {...reveal("up", 300)}>
          <FooterHeading>Quick Links</FooterHeading>
          <ul className="divide-y divide-white/15">
            {footerQuickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="flex items-center gap-2.5 py-[7px] transition-colors hover:text-white">
                  <ChevronRight aria-hidden className="size-4 text-brand-green" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-center text-[13px] text-offwhite/75 sm:flex-row">
          <p>Copyright © {new Date().getFullYear()} {group.name}. All rights reserved.</p>
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
        </Container>
      </div>
    </footer>
  );
}
