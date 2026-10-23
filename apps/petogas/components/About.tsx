import { Container } from "@arismile/ui";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { SectionIntro } from "@/components/SectionIntro";
import { brand, holdingsUrl, profile, subsidiary } from "@/lib/site";

export function About() {
  const media = brand.aboutImage;
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-20 bg-bg py-20 text-fg lg:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[5fr_7fr]">
        <div className="relative">
          {media ? (
            <Image
              src={media.src}
              alt={media.alt}
              width={media.width}
              height={media.height}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/5] w-full rounded-(--radius) object-cover"
            />
          ) : (
            <div className="flex aspect-[4/3] items-center justify-center rounded-(--radius) bg-surface p-12">
              <Image src={brand.logo.src} alt={brand.logo.alt} width={brand.logo.width} height={brand.logo.height} className="max-h-48 w-auto" />
            </div>
          )}
        </div>

        <div>
          <SectionIntro id="about-heading" eyebrow={`About ${brand.name}`} title={subsidiary.legalName} />
          <div className="mt-8 space-y-5 text-[16px] leading-[1.8] opacity-85">
            {profile.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <a
            href={`${holdingsUrl}${subsidiary.holdingsPath}`}
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-accent hover:underline"
          >
            A subsidiary of Arismile Holdings
            <ArrowUpRight aria-hidden className="size-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
