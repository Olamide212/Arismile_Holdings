import { group } from "@arismile/brand";
import { Container } from "@arismile/ui";
import { Mail, MapPin, Phone } from "lucide-react";
import { brand, subsidiary } from "@/lib/site";

export function ContactSection() {
  const subject = encodeURIComponent(`${subsidiary.legalName} enquiry`);
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 bg-bg py-20 text-fg lg:py-28">
      <Container>
        <div className="overflow-hidden rounded-(--radius) bg-band text-on-band">
          <div className="grid gap-12 p-8 sm:p-12 lg:grid-cols-[3fr_2fr] lg:p-16">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.25em] text-highlight">Get in touch</p>
              <h2 id="contact-heading" className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">
                {brand.contactTitle}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed opacity-80">
                Enquiries for {subsidiary.legalName} are handled by the Arismile Holdings corporate team.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href={`mailto:${group.email}?subject=${subject}`}
                  className="inline-flex items-center gap-2.5 rounded-(--radius) bg-primary px-7 py-3.5 font-semibold text-on-primary transition-opacity hover:opacity-90"
                >
                  <Mail aria-hidden className="size-4" />
                  {group.email}
                </a>
                <a
                  href={group.phone.href}
                  className="inline-flex items-center gap-2.5 rounded-(--radius) border border-on-band/30 px-7 py-3.5 font-semibold transition-colors hover:border-highlight hover:text-highlight"
                >
                  <Phone aria-hidden className="size-4" />
                  {group.phone.display}
                </a>
              </div>
            </div>
            <ul className="space-y-6">
              {group.offices.map((office) => (
                <li key={office.label} className="flex gap-3">
                  <MapPin aria-hidden className="mt-1 size-5 shrink-0 text-highlight" />
                  <address className="not-italic leading-relaxed">
                    <span className="block font-semibold">{office.label}</span>
                    {office.lines.map((line) => (
                      <span key={line} className="block opacity-75">
                        {line}
                      </span>
                    ))}
                  </address>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
