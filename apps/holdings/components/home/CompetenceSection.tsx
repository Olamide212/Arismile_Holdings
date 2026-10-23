import { Container } from "@arismile/ui";
import { IconCircle } from "@/components/ui/IconCircle";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { competencies } from "@/lib/content/competencies";
import { reveal, stagger } from "@/lib/reveal";

/** "Area of Core Competence": muted heading, full-width rule, four white cards that turn yellow on hover. */
export function CompetenceSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="scroll-mt-4 bg-light py-16 lg:pb-24 lg:pt-20">
      <Container>
        <SectionHeading id="services-heading">Area of Core Competence</SectionHeading>

        <ul className="mt-2 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {competencies.map(({ title, description, icon: Icon }, i) => (
            <li key={title} {...reveal("up", stagger(i))}>
              <div className="group h-full bg-white p-[25px] text-center transition-colors duration-300 hover:bg-brand-yellow">
                <IconCircle className="mx-auto mb-5 group-hover:bg-ink">
                  <Icon className="size-[30px]" strokeWidth={1.75} />
                </IconCircle>
                <h3 className="text-[15px] font-bold uppercase leading-snug text-black lg:text-[16px]">{title}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-black">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
