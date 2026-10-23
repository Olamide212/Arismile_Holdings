import { pageMetadata, reveal, servicePath, stagger } from "@arismile/site-kit";
import { Container } from "@arismile/ui";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Heading, ui } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = pageMetadata("/", undefined, site.profile.summary);

export default function HomePage() {
  const { ServicesSection, FeaturesSection, ProcessSection, CtaSection } = ui;
  const hero = site.images.hero;
  const about = site.images.about;

  return (
    <>
      {/* Full-viewport editorial hero */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-band text-on-band">
        <Image src={hero.src} alt={hero.alt} fill priority sizes="100vw" className="-z-20 object-cover" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-band via-band/60 to-band/30" />
        <Container className="grid gap-12 pb-16 pt-40 lg:grid-cols-[1fr_340px] lg:items-end lg:pb-20">
          <div className="load-in">
            <p className="flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.35em] text-highlight">
              <span aria-hidden className="h-px w-10 bg-current" />
              {site.hero.eyebrow}
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[0.98] md:text-7xl lg:text-[104px]">{site.hero.title}</h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed opacity-85">{site.hero.text}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 bg-primary px-8 py-4 font-semibold text-on-primary transition-opacity hover:opacity-90"
              >
                Our services
                <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/about" className="inline-flex items-center border border-on-band/40 px-8 py-4 font-semibold hover:border-highlight hover:text-highlight">
                Our story
              </Link>
            </div>
          </div>
          <nav aria-label="Featured services" className="load-in hidden border-l border-on-band/25 pl-8 lg:block">
            <p className="text-[12px] font-semibold uppercase tracking-[0.3em] opacity-70">What we build</p>
            <ul className="mt-5 space-y-4">
              {site.services.items.slice(0, 4).map((s, i) => (
                <li key={s.slug}>
                  <Link href={servicePath(s.slug)} className="group flex items-baseline gap-3 hover:text-highlight">
                    <span className="font-display text-sm text-highlight">0{i + 1}</span>
                    <span className="leading-snug">{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
        <a href="#statement" aria-label="Scroll to introduction" className="absolute bottom-6 right-6 hidden size-12 items-center justify-center rounded-full border border-on-band/30 hover:border-highlight md:inline-flex">
          <ArrowDown aria-hidden className="size-5 motion-safe:animate-bounce" />
        </a>
      </section>

      {/* Statement + image pair */}
      <section id="statement" aria-labelledby="statement-heading" className="scroll-mt-24 bg-bg py-24 text-fg lg:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
            <p {...reveal("up")} className="flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.35em] text-accent">
              <span aria-hidden className="h-px w-10 bg-current" />
              About {site.name}
            </p>
            <div>
              <h2 id="statement-heading" {...reveal("up")} className="font-display text-3xl leading-snug md:text-[44px]">
                {site.about.title}
              </h2>
              <p {...reveal("up", 100)} className="mt-8 max-w-2xl text-lg leading-relaxed opacity-75">
                {site.profile.intro[0]}
              </p>
              <Link {...reveal("up", 200)} href="/about" className="group mt-8 inline-flex items-center gap-2 font-semibold text-accent">
                Read our story
                <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
          <div className="mt-20 grid items-end gap-6 md:grid-cols-[1.2fr_1fr]">
            <div {...reveal("up")} className="relative aspect-[16/10] overflow-hidden">
              <Image src={hero.src} alt={hero.alt} fill sizes="(min-width: 768px) 55vw, 100vw" className="object-cover" />
            </div>
            {about ? (
              <div {...reveal("up", 150)} className="relative aspect-[4/5] overflow-hidden md:-mb-16">
                <Image src={about.src} alt={about.alt} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      <ServicesSection site={site} id="services-heading" eyebrow="What we do" title={site.services.title} intro={site.services.intro} services={site.services.items} />
      <FeaturesSection site={site} id="why-heading" eyebrow={`Why ${site.name}`} title={site.highlights.title} intro={site.highlights.intro} items={site.highlights.items} />
      <ProcessSection site={site} id="process-heading" eyebrow="How we work" title={site.process.title} intro={site.process.intro} steps={site.process.steps} />

      {/* Sectors as an editorial index */}
      <section aria-labelledby="sectors-heading" className="bg-bg py-24 text-fg lg:py-32">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Heading id="sectors-heading" eyebrow="Who we build for" title={site.industries.title} />
            <Link href="/industries" className="group inline-flex items-center gap-2 font-semibold text-accent">
              All sectors
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <ul className="mt-14 grid border-t border-fg/15 md:grid-cols-2">
            {site.industries.items.map(({ icon: Icon, title, body }, i) => (
              <li key={title} {...reveal("up", stagger(i, 2))} className="flex gap-6 border-b border-fg/15 py-8 md:odd:pr-10 md:even:border-l md:even:pl-10">
                <Icon aria-hidden className="mt-1 size-7 shrink-0 text-accent" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-2xl">{title}</h3>
                  <p className="mt-2 opacity-70">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaSection site={site} />
    </>
  );
}
