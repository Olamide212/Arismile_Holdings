import { pageMetadata, reveal, siteValues, stagger } from "@arismile/site-kit";
import { Container } from "@arismile/ui";
import { ArrowRight, ChevronsRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Brackets, Heading, Tag, ui } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = pageMetadata(site, "/", undefined, site.profile.summary);

export default function HomePage() {
  const { ServicesSection, FeaturesSection, ProcessSection, CtaSection } = ui;
  const hero = site.images.hero;
  const about = site.images.about;
  const mission = siteValues(site).find((v) => /mission/i.test(v.title));

  return (
    <>
      {/* Full-bleed hero with viewfinder brackets */}
      <section className="relative isolate overflow-hidden bg-band text-fg">
        <Image src={hero.src} alt={hero.alt} fill priority sizes="100vw" className="-z-20 object-cover object-[70%_center]" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-bg via-bg/85 to-bg/20" />
        <div aria-hidden className="sentinel-scan absolute inset-x-0 top-0 -z-10 h-24" />
        <Container className="grid min-h-[78vh] items-center py-20">
          <Brackets className="load-in max-w-2xl p-8 md:p-10">
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              <Tag>Sector: Sub-Saharan Africa</Tag>
              <Tag className="text-fg/50">Channel: Confidential</Tag>
            </div>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1] md:text-7xl">{site.hero.title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg/75">{site.hero.text}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="group inline-flex items-center gap-3 bg-primary px-8 py-4 font-mono text-[13px] font-semibold uppercase tracking-[0.2em] text-on-primary hover:opacity-90">
                Request assessment <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/services" className="inline-flex items-center border border-fg/30 px-8 py-4 font-mono text-[13px] font-semibold uppercase tracking-[0.2em] hover:border-primary hover:text-accent">
                Capabilities
              </Link>
            </div>
          </Brackets>
        </Container>
      </section>

      {/* Mission briefing */}
      <section aria-labelledby="brief-heading" className="border-b border-fg/10 bg-bg py-24 text-fg lg:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          {about ? (
            <div {...reveal("left")} className="mx-auto w-full max-w-md">
              <Brackets>
                <Image src={about.src} alt={about.alt} width={about.width} height={about.height} sizes="(min-width: 1024px) 28rem, 100vw" className="aspect-[4/5] w-full object-cover grayscale-[35%]" />
              </Brackets>
            </div>
          ) : null}
          <div>
            <Heading id="brief-heading" eyebrow="Briefing" title={site.about.title} />
            <p {...reveal("up", 100)} className="mt-7 text-lg leading-relaxed text-fg/75">
              {site.profile.intro[2] ?? site.profile.intro[0]}
            </p>
            {mission ? (
              <blockquote {...reveal("up", 200)} className="mt-8 border-l-2 border-primary pl-6 text-fg/85">
                <Tag>{"// "}{mission.title}</Tag>
                <p className="mt-2 leading-relaxed">{mission.body}</p>
              </blockquote>
            ) : null}
          </div>
        </Container>
      </section>

      <ServicesSection site={site} id="services-heading" eyebrow="Capabilities" title={site.services.title} intro={site.services.intro} services={site.services.items} />
      <FeaturesSection site={site} id="pillars-heading" eyebrow="Pillars" title={site.highlights.title} intro={site.highlights.intro} items={site.highlights.items} />
      <ProcessSection site={site} id="method-heading" eyebrow="Methodology" title={site.process.title} intro={site.process.intro} steps={site.process.steps} />

      {/* Who we protect */}
      <section aria-labelledby="protect-heading" className="bg-surface py-24 text-fg lg:py-28">
        <Container>
          <Heading id="protect-heading" eyebrow="Coverage" title={site.industries.title} intro={site.industries.intro} />
          <ul className="mt-12 grid border-t border-fg/10 md:grid-cols-2">
            {site.industries.items.map(({ icon: Icon, title, body }, i) => (
              <li key={title} {...reveal("up", stagger(i, 2))} className="flex items-start gap-5 border-b border-fg/10 py-6 md:odd:pr-8 md:even:border-l md:even:pl-8">
                <Icon aria-hidden className="mt-1 size-6 shrink-0 text-primary" strokeWidth={1.5} />
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-1 text-fg/65">{body}</p>
                </div>
                <ChevronsRight aria-hidden className="mt-1 size-5 text-fg/30" />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaSection site={site} />
    </>
  );
}
