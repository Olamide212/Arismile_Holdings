import { cn, Container } from "@arismile/ui";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { partners, type Partner } from "@/lib/content/partners";
import { reveal } from "@/lib/reveal";

function LogoRow({ items, duplicate = false }: { items: Partner[]; duplicate?: boolean }) {
  return (
    <ul
      aria-label={duplicate ? undefined : "Partner organisations"}
      aria-hidden={duplicate || undefined}
      className={cn("flex shrink-0 gap-2.5 pr-2.5", duplicate && "motion-reduce:hidden")}
    >
      {items.map((partner) => (
        <li
          key={partner.name}
          className="flex h-[120px] w-[170px] shrink-0 items-center justify-center bg-white p-5 sm:w-[190px]"
        >
          <Image
            src={partner.logo.src}
            alt={duplicate ? "" : partner.logo.alt}
            width={partner.logo.width}
            height={partner.logo.height}
            sizes="190px"
            className="max-h-full w-auto max-w-full object-contain"
          />
        </li>
      ))}
    </ul>
  );
}

/**
 * "Our Partners": muted heading, short rule and a continuously scrolling row of
 * white logo panels (the original used a logo carousel). Pauses on hover/focus;
 * with reduced motion it becomes a static, horizontally scrollable row.
 */
export function PartnersSection() {
  return (
    <section aria-labelledby="partners-heading" className="bg-light pb-20 pt-4 lg:pb-24">
      <Container>
        <SectionHeading id="partners-heading" divider="short">
          Our Partners
        </SectionHeading>
      </Container>
      <Container className="mt-4">
        <div {...reveal("up", 100)} className="overflow-hidden motion-reduce:overflow-x-auto">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] motion-reduce:animate-none">
            <LogoRow items={partners} />
            <LogoRow items={partners} duplicate />
          </div>
        </div>
      </Container>
    </section>
  );
}
