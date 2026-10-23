import { Container } from "@arismile/ui";
import { SectionIntro } from "@/components/SectionIntro";
import { profile } from "@/lib/site";

/** Values, methodology and commitments. */
export function Groups() {
  if (!profile.groups?.length) return null;
  return (
    <>
      {profile.groups.map((group, index) => {
        const id = `group-${index}`;
        const count = group.items.length;
        const cols = count === 4 ? "lg:grid-cols-4" : count === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";
        return (
          <section
            key={group.heading}
            id={index === 0 ? "values" : undefined}
            aria-labelledby={`${id}-heading`}
            className={`scroll-mt-20 py-20 text-fg lg:py-28 ${index % 2 === 0 ? "bg-bg" : "bg-surface"}`}
          >
            <Container>
              <SectionIntro id={`${id}-heading`} eyebrow="How we work" title={group.heading} intro={group.intro} />
              <ol className={`mt-14 grid gap-6 sm:grid-cols-2 ${cols}`}>
                {group.items.map((item, i) => (
                  <li key={item.title} className="relative rounded-(--radius) border-t-4 border-primary bg-surface p-7">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-accent">
                      {item.label ?? String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold leading-snug">{item.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed opacity-80">{item.body}</p>
                  </li>
                ))}
              </ol>
            </Container>
          </section>
        );
      })}
    </>
  );
}
