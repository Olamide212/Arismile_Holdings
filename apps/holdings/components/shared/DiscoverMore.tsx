import { Container } from "@arismile/ui";
import { CtaButton } from "@/components/ui/CtaButton";
import { FixedBackground } from "@/components/ui/FixedBackground";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { discoverMore } from "@/lib/content/company";
import { reveal } from "@/lib/reveal";

/** Full-width industrial photo with dark overlay, left-aligned copy and a yellow CTA. */
export function DiscoverMore() {
  return (
    <section
      aria-labelledby="discover-heading"
      className="relative isolate overflow-hidden bg-charcoal [clip-path:inset(0)]"
    >
      <FixedBackground src={discoverMore.image.src} overlayClassName="bg-black/[0.64]" />

      <Container className="py-20 lg:py-28">
        <div className="md:w-1/2">
          <SectionHeading id="discover-heading" tone="light">
            {discoverMore.heading}
          </SectionHeading>
          <p {...reveal("up", 100)} className="mt-3 text-[15px] leading-relaxed text-white md:text-base">
            {discoverMore.text}
          </p>
          <div {...reveal("up", 200)} className="mt-8">
            <CtaButton href={discoverMore.cta.href}>{discoverMore.cta.label}</CtaButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
