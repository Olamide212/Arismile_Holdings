import { pageMetadata, reveal, siteValues, stagger } from "@arismile/site-kit";
import { Container } from "@arismile/ui";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Heading, ui } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = pageMetadata(site, "/", undefined, site.profile.summary);

export default function HomePage() {
  const { ServicesSection, FeaturesSection, ProcessSection, ValuesSection, CtaSection } = ui;
  const hero = site.images.hero;
  const values = siteValues(site);
  const mission = values.find((v) => /mission/i.test(v.title));
  const others = values.filter((v) => v !== mission);

  return (
    <>
      {/* Editorial split hero */}
      <section className="bg-bg text-fg">
        <Container className="grid items-center gap-16 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
          <div className="load-in">
            <p className="flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.35em] text-accent">
              <span aria-hidden className="h-px w-12 bg-current opacity-50" />
              {site.hero.eyebrow}
            </p>
            <h1 className="mt-8 font-display text-6xl font-semibold leading-[0.98] md:text-8xl">{site.hero.title}</h1>
            <span aria-hidden className="mt-10 block h-px w-full bg-fg/20" />
            <p className="mt-8 max-w-lg text-lg leading-relaxed opacity-75">{site.hero.text}</p>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <Link href="/contact" className="border border-primary bg-primary px-9 py-4 text-[13px] font-semibold uppercase tracking-[0.3em] text-on-primary transition-colors hover:bg-transparent hover:text-primary">
                Book a consultation
              </Link>
              <Link href="/services" className="group inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.3em] text-accent">
                Our services <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="load-in relative">
            <div aria-hidden className="absolute -inset-4 border-2 border-highlight" />
            <div aria-hidden className="absolute -bottom-8 -left-8 size-24 bg-secondary/15" />
            <Image src={hero.src} alt={hero.alt} width={hero.width} height={hero.height} priority sizes="(min-width: 1024px) 45vw, 100vw" className="relative aspect-[4/5] w-full object-cover" />
          </div>
        </Container>
        <div className="border-y border-fg/15 bg-surface">
          <Container>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-5 text-[12px] font-semibold uppercase tracking-[0.3em] opacity-75">
              {site.services.items.map((s, i) => (
                <li key={s.slug} className="flex items-center gap-6">
                  {i > 0 ? (
                    <span aria-hidden className="text-highlight">
                      ◆
                    </span>
                  ) : null}
                  {s.title.replace(/^(Bespoke|Active|Strategic) /, "")}
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </section>

      {/* Mission as a pull quote */}
      {mission ? (
        <section aria-labelledby="mission-heading" className="bg-bg py-24 text-fg lg:py-32">
          <Container>
            <figure {...reveal("up")} className="mx-auto max-w-4xl text-center">
              <h2 id="mission-heading" className="text-[12px] font-semibold uppercase tracking-[0.35em] text-accent">
                Our mission
              </h2>
              <blockquote className="mt-8 font-display text-3xl italic leading-snug md:text-[44px]">“{mission.body}”</blockquote>
              <figcaption className="mt-8 text-[12px] uppercase tracking-[0.3em] opacity-60">{site.record.legalName}</figcaption>
            </figure>
          </Container>
        </section>
      ) : null}

      <ServicesSection site={site} id="services-heading" eyebrow="What we do" title={site.services.title} intro={site.services.intro} services={site.services.items} />
      <FeaturesSection site={site} id="why-heading" eyebrow={`Why ${site.name}`} title={site.highlights.title} intro={site.highlights.intro} items={site.highlights.items} />
      <ProcessSection site={site} id="process-heading" eyebrow="Our approach" title={site.process.title} intro={site.process.intro} steps={site.process.steps} />
      {others.length ? <ValuesSection site={site} id="values-heading" eyebrow="What we stand for" title="Vision and assets" items={others} /> : null}

      {/* Who we advise: a quiet two-column index */}
      <section aria-labelledby="clients-heading" className="bg-surface py-24 text-fg lg:py-32">
        <Container>
          <Heading id="clients-heading" eyebrow="Who we advise" title={site.industries.title} intro={site.industries.intro} />
          <ul className="mx-auto mt-14 grid max-w-5xl gap-x-16 border-t border-fg/20 md:grid-cols-2">
            {site.industries.items.map(({ title, body }, i) => (
              <li key={title} {...reveal("up", stagger(i, 2))} className="flex items-baseline justify-between gap-6 border-b border-fg/20 py-6">
                <h3 className="font-display text-2xl font-semibold">{title}</h3>
                <p className="max-w-[55%] text-right text-sm opacity-70">{body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaSection site={site} />
    </>
  );
}
