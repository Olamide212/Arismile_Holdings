import { Container } from "@arismile/ui";
import { SubsidiaryCard } from "@/components/subsidiaries/SubsidiaryCard";
import { SubsidiaryCarousel } from "@/components/subsidiaries/SubsidiaryCarousel";
import { FixedBackground } from "@/components/ui/FixedBackground";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionImages, subsidiariesIntro } from "@/lib/content/company";
import type { SubsidiaryContent } from "@/lib/content/subsidiaries";
import { reveal, stagger } from "@/lib/reveal";

interface SubsidiariesSectionProps {
  items: SubsidiaryContent[];
  heading?: string;
  intro?: string;
  id?: string;
  /** `carousel` shows 4 cards per view with arrows; `grid` shows every card. */
  layout?: "grid" | "carousel";
}

/** Dark gear-machinery section with white numbered subsidiary cards (4 per row/view on desktop). */
export function SubsidiariesSection({
  items,
  heading = "Our Subsidiaries",
  intro = subsidiariesIntro,
  id = "subsidiaries",
  layout = "grid",
}: SubsidiariesSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="relative isolate overflow-hidden bg-[#368F23] [clip-path:inset(0)]"
    >
      <FixedBackground src={sectionImages.subsidiariesGears} overlayClassName="bg-black/[0.82]" />

      <Container className="py-16 lg:py-20">
        <SectionHeading id={`${id}-heading`} tone="light">
          {heading}
        </SectionHeading>
        {intro ? (
          <p {...reveal("up", 100)} className="mt-2 text-[15px] leading-relaxed text-white lg:w-[63%]">
            {intro}
          </p>
        ) : null}

        {layout === "carousel" ? (
          <SubsidiaryCarousel
            label={heading}
            items={items.map((s) => ({
              slug: s.slug,
              name: s.cardName,
              summary: s.summary,
              href: s.holdingsPath,
              website: s.website,
            }))}
          />
        ) : (
          <ul className="mt-[30px] flex flex-wrap justify-center gap-2.5">
            {items.map((s, i) => (
              <li key={s.slug} {...reveal("up", stagger(i))} className="w-full sm:w-[calc(50%-5px)] lg:w-[calc(25%-7.5px)]">
                <SubsidiaryCard
                  number={i + 1}
                  name={s.cardName}
                  summary={s.summary}
                  href={s.holdingsPath}
                  website={s.website}
                />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
