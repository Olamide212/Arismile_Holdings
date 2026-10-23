import { cn, Container } from "@arismile/ui";
import Image from "next/image";
import type { ReactNode } from "react";
import { ReadMoreLink } from "@/components/ui/ReadMoreLink";
import { aboutIntro, sectionImages } from "@/lib/content/company";
import { reveal } from "@/lib/reveal";

interface AboutSectionProps {
  /** Extra paragraphs (About page); the homepage shows the intro only. */
  children?: ReactNode;
  showReadMore?: boolean;
  headingLevel?: "h1" | "h2";
  className?: string;
}

/**
 * Light section with the faint geometric pattern: safety-equipment image left,
 * "WHO WE ARE / ABOUT US" copy right.
 */
export function AboutSection({ children, showReadMore = true, headingLevel = "h2", className }: AboutSectionProps) {
  const Heading = headingLevel;
  return (
    <section aria-labelledby="about-heading" className={cn("relative isolate overflow-hidden", className)}>
      <Image src={sectionImages.aboutPattern} alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-white/[0.97]" />

      <Container className="grid items-center gap-6 py-12 md:grid-cols-2 lg:py-[60px]">
        <div {...reveal("left")} className="p-2 md:p-5 lg:p-10">
          <Image
            src={aboutIntro.image.src}
            alt={aboutIntro.image.alt}
            width={aboutIntro.image.width}
            height={aboutIntro.image.height}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="mx-auto h-auto w-full max-w-[560px]"
          />
        </div>

        <div {...reveal("right", 150)} className="px-2 pb-6 md:p-5 lg:p-10">
          <div className="relative">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-8 left-0 select-none whitespace-nowrap text-[44px] font-extrabold uppercase leading-none text-transparent [-webkit-text-stroke:1px_rgb(0_0_0/0.08)] md:-top-10 md:text-[64px]"
            >
              {aboutIntro.backdropWord}
            </span>
            <p className="relative text-[15px] font-medium uppercase tracking-[0.15em] text-black">
              {aboutIntro.eyebrow}
            </p>
            <Heading
              id="about-heading"
              className="relative mt-1 text-[38px] font-bold uppercase leading-tight text-black md:text-[50px]"
            >
              {aboutIntro.heading}
            </Heading>
          </div>

          <div className="mt-5 space-y-4 md:text-justify text-[15px] leading-[1.8] text-black">
            <p>
              <strong className="font-bold">Arismile Holdings</strong> {aboutIntro.lead}
            </p>
            <p>{aboutIntro.summary}</p>
            {children}
          </div>

          {showReadMore ? <ReadMoreLink href="/about" context="about Arismile Holdings" className="mt-6" /> : null}
        </div>
      </Container>
    </section>
  );
}
