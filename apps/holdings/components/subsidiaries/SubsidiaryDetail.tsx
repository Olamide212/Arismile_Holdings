import { Container } from "@arismile/ui";
import { Check, Eye, Gem, ShieldCheck, Target } from "lucide-react";
import Image from "next/image";
import { InfoCard } from "@/components/shared/InfoCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionImages } from "@/lib/content/company";
import type { ContentBlock, ContentGroup, SubsidiaryContent } from "@/lib/content/subsidiaries";
import { reveal, stagger } from "@/lib/reveal";

export function SubsidiaryIntro({ subsidiary }: { subsidiary: SubsidiaryContent }) {
  const { featureImage, logo } = subsidiary;
  const hasMedia = Boolean(featureImage || logo);
  return (
    <section aria-labelledby="intro-heading" className="relative isolate overflow-hidden">
      <Image src={sectionImages.aboutPattern} alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-white/[0.97]" />
      <Container className={hasMedia ? "grid items-center gap-10 py-16 md:grid-cols-2 lg:py-20" : "py-16 lg:py-20"}>
        {hasMedia ? (
          <div {...reveal("right", 150)} className="md:order-1">
            {featureImage ? (
              <div className="relative">
                <Image
                  src={featureImage.src}
                  alt={featureImage.alt}
                  width={featureImage.width}
                  height={featureImage.height}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="max-h-[520px] w-full object-cover"
                />
                {logo ? (
                  <div className="absolute -bottom-6 right-4 flex h-24 w-36 items-center justify-center bg-white p-3 shadow-lg">
                    <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="max-h-full w-auto object-contain" />
                  </div>
                ) : null}
              </div>
            ) : logo ? (
              <div className="flex aspect-[4/3] items-center justify-center bg-white p-10 shadow-sm">
                <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="max-h-64 w-auto object-contain" />
              </div>
            ) : null}
          </div>
        ) : null}

        <div {...reveal("left")} className={hasMedia ? "" : "max-w-4xl"}>
          <p className="text-[15px] font-medium uppercase tracking-[0.15em] text-black">An Arismile Holdings Company</p>
          <h2 id="intro-heading" className="mt-1 text-[30px] font-bold uppercase leading-tight text-black md:text-[40px]">
            {subsidiary.legalName}
          </h2>
          <div className="mt-5 space-y-4 md:text-justify text-[15px] leading-[1.8] text-black">
            {subsidiary.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Desktop column count that avoids a lone card on the last row. */
function desktopColumns(count: number, allowFour = false) {
  if (count === 2 || (count === 4 && !allowFour)) return "lg:grid-cols-2";
  if (count === 4 || count === 8) return "lg:grid-cols-4";
  return "lg:grid-cols-3";
}

export function SubsidiaryServices({ subsidiary }: { subsidiary: SubsidiaryContent }) {
  return (
    <section aria-labelledby="services-heading" className="bg-light py-16 lg:py-20">
      <Container>
        <SectionHeading id="services-heading">Our Services</SectionHeading>
        <ul className={`mt-2 grid gap-2.5 sm:grid-cols-2 ${desktopColumns(subsidiary.services.length)}`}>
          {subsidiary.services.map((service, i) => (
            <li key={service.title} {...reveal("up", stagger(i, 3))}>
              <InfoCard badge={i + 1} title={service.title} points={service.points}>
                <p>{service.description}</p>
              </InfoCard>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

const statementIcons = [Target, Eye, Gem, ShieldCheck];

function iconFor(block: ContentBlock, i: number) {
  const title = block.title.toLowerCase();
  const Icon = title.includes("mission")
    ? Target
    : title.includes("vision")
      ? Eye
      : title.includes("asset")
        ? Gem
        : (statementIcons[i % statementIcons.length] ?? ShieldCheck);
  return <Icon className="size-[28px]" strokeWidth={1.75} />;
}

/** Mission / vision style statements on the dark gear background. */
export function SubsidiaryStatements({ items }: { items: ContentBlock[] }) {
  return (
    <section aria-labelledby="statements-heading" className="relative isolate overflow-hidden bg-charcoal">
      <Image src={sectionImages.subsidiariesGears} alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/[0.82]" />
      <Container className="py-16 lg:py-20">
        <SectionHeading id="statements-heading" tone="light">
          What Drives Us
        </SectionHeading>
        <ul className={`mt-[30px] grid gap-2.5 sm:grid-cols-2 ${desktopColumns(items.length, true)}`}>
          {items.map((item, i) => (
            <li key={item.title} {...reveal("up", stagger(i))}>
              <InfoCard badge={iconFor(item, i)} title={item.title}>
                <p>{item.body}</p>
              </InfoCard>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function SubsidiaryGroup({ group, index }: { group: ContentGroup; index: number }) {
  const id = `group-${index}-heading`;
  const cols = desktopColumns(group.items.length, true);
  return (
    <section aria-labelledby={id} className={index % 2 === 0 ? "bg-white py-16 lg:py-20" : "bg-light py-16 lg:py-20"}>
      <Container>
        <SectionHeading id={id}>{group.heading}</SectionHeading>
        {group.intro ? <p className="max-w-3xl text-[15px] leading-relaxed text-body">{group.intro}</p> : null}
        <ul className={`mt-8 grid gap-2.5 sm:grid-cols-2 ${cols}`}>
          {group.items.map((item, i) => (
            <li
              key={item.title}
              {...reveal("up", stagger(i))}
              className={index % 2 === 0 ? "border border-black/10" : undefined}
            >
              <InfoCard badge={i + 1} title={item.title} label={item.label}>
                <p>{item.body}</p>
              </InfoCard>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function SubsidiaryList({ heading, items }: { heading: string; items: string[] }) {
  return (
    <section aria-labelledby="list-heading" className="bg-white py-16 lg:py-20">
      <Container>
        <SectionHeading id="list-heading">{heading}</SectionHeading>
        <ul {...reveal("up", 100)} className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-3 border-b border-black/10 pb-3 text-[15px] text-black">
              <Check aria-hidden className="size-4 shrink-0 text-brand-green" />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
