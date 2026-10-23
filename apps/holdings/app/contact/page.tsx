import { group } from "@arismile/brand";
import { BrandIcon, Container } from "@arismile/ui";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import type { ReactNode } from "react";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageBanner } from "@/components/shared/PageBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reveal } from "@/lib/reveal";

export const metadata: Metadata = pageMeta(
  "/contact",
  "Contact Us",
  `Contact Arismile Holdings in Abuja and Lagos. Call ${group.phone.display} or email ${group.email}.`,
);

function mapsLink(lines: readonly string[]) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lines.join(", "))}`;
}

function InfoRow({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="flex gap-4 bg-white p-5">
      <span aria-hidden className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
        {icon}
      </span>
      <div className="min-w-0 text-[15px] leading-relaxed text-black">
        <h3 className="mb-1 text-[14px] font-bold uppercase tracking-wide text-ink">{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" eyebrow="Get In Touch" />

      <section aria-labelledby="contact-heading" className="bg-light py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[5fr_7fr]">
          <div>
            <SectionHeading id="contact-heading">Reach Us</SectionHeading>
            <div {...reveal("left", 100)} className="mt-2 space-y-2.5">
              <InfoRow icon={<Phone className="size-5" />} title="Phone">
                <a href={group.phone.href} className="block hover:text-brand-green">
                  {group.phone.display}
                </a>
                <a href={group.secondaryPhone.href} className="block hover:text-brand-green">
                  {group.secondaryPhone.display}
                </a>
              </InfoRow>
              <InfoRow icon={<Mail className="size-5" />} title="Email">
                <a href={`mailto:${group.email}`} className="break-all hover:text-brand-green">
                  {group.email}
                </a>
              </InfoRow>
              <InfoRow icon={<Clock className="size-5" />} title="Working Days">
                <p>{group.workingHours}</p>
              </InfoRow>
              {group.offices.map((office) => (
                <InfoRow key={office.label} icon={<MapPin className="size-5" />} title={office.label}>
                  <address className="not-italic">
                    {office.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <a
                    href={mapsLink(office.lines)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-[13px] font-semibold uppercase text-brand-green hover:underline"
                  >
                    View on Google Maps<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </InfoRow>
              ))}
            </div>

            <h3 {...reveal("up")} className="mt-8 text-[14px] font-bold uppercase tracking-wide text-ink">Follow Us</h3>
            <ul {...reveal("up", 100)} className="mt-3 flex gap-2.5" aria-label="Social media">
              {group.socials.map((social) => (
                <li key={social.network}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label} (opens in a new tab)`}
                    className="inline-flex size-10 items-center justify-center rounded-full bg-brand-yellow text-charcoal transition-colors hover:bg-ink hover:text-white"
                  >
                    <BrandIcon network={social.network} size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div {...reveal("right", 150)} className="self-start bg-white p-6 sm:p-10">
            <h2 className="text-[26px] font-bold uppercase text-black md:text-[32px]">Send Us A Message</h2>
            <p className="mb-8 mt-2 text-[15px] text-body">
              Enquiries about partnerships, our subsidiaries’ services or careers are welcome.
            </p>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
