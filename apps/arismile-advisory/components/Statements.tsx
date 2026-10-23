import { Container } from "@arismile/ui";
import { SectionIntro } from "@/components/SectionIntro";
import { brand, profile } from "@/lib/site";

/** Mission / vision style statements on the brand's dark band. */
export function Statements() {
  if (!profile.statements?.length) return null;
  const cols = profile.statements.length === 2 || profile.statements.length === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  return (
    <section id="approach" aria-labelledby="approach-heading" className="scroll-mt-20 bg-band py-20 text-on-band lg:py-28">
      <Container>
        <SectionIntro
          id="approach-heading"
          eyebrow="Our approach"
          eyebrowClassName="text-highlight"
          title={brand.statementsTitle}
        />
        <ul className={`mt-14 grid gap-px overflow-hidden rounded-(--radius) bg-on-band/15 ${cols}`}>
          {profile.statements.map((item) => (
            <li key={item.title} className="bg-band p-8 lg:p-10">
              <h3 className="font-display text-2xl font-semibold text-highlight">{item.title}</h3>
              <p className="mt-4 leading-relaxed opacity-85">{item.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
