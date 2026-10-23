import { Container } from "@arismile/ui";
import { Check } from "lucide-react";
import { SectionIntro } from "@/components/SectionIntro";
import { brand, profile } from "@/lib/site";

export function Services() {
  const count = profile.services.length;
  const cols = count % 3 === 0 || count === 5 ? "lg:grid-cols-3" : "lg:grid-cols-2";
  return (
    <section id="services" aria-labelledby="services-heading" className="scroll-mt-20 bg-surface py-20 text-fg lg:py-28">
      <Container>
        <SectionIntro id="services-heading" eyebrow="What we do" title={brand.servicesTitle} intro={brand.servicesIntro} />
        <ul className={`mt-14 grid gap-6 sm:grid-cols-2 ${cols}`}>
          {profile.services.map((service, i) => (
            <li key={service.title}>
              <article className="flex h-full flex-col rounded-(--radius) border border-fg/10 bg-bg p-8 transition-colors hover:border-accent">
                <span aria-hidden className="font-display text-4xl font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-xl font-semibold leading-snug">{service.title}</h3>
                <p className="mt-3 leading-relaxed opacity-80">{service.description}</p>
                {service.points?.length ? (
                  <ul className="mt-5 space-y-2.5 border-t border-fg/10 pt-5 text-sm leading-relaxed opacity-90">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
