import { pageMetadata, reveal, stagger } from "@arismile/site-kit";
import { Container } from "@arismile/ui";
import { ArrowRight, Waves } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Heading, ui, Wave } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = pageMetadata("/", undefined, site.profile.summary);

export default function HomePage() {
  const { ServicesSection, FeaturesSection, ProcessSection, CtaSection } = ui;
  const hero = site.images.hero;
  const about = site.images.about;

  return (
    <>
      {/* Centred hero over the sea, ending in a wave */}
      <section className="relative isolate overflow-hidden bg-band text-on-band">
        <Image src={hero.src} alt={hero.alt} fill priority sizes="100vw" className="-z-20 object-cover" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-band/50 via-band/60 to-band/90" />
        <Container className="load-in pb-40 pt-28 text-center md:pb-52 md:pt-40">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full bg-on-band/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-highlight backdrop-blur">
            <Waves aria-hidden className="size-4" /> {site.hero.eyebrow}
          </p>
          <h1 className="mx-auto mt-7 max-w-5xl font-display text-5xl font-semibold leading-[1.05] md:text-7xl">{site.hero.title}</h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed opacity-90">{site.hero.text}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/services" className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-on-primary hover:opacity-90">
              Our services <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/contact" className="inline-flex items-center rounded-full border border-on-band/40 px-8 py-4 font-semibold backdrop-blur hover:border-highlight hover:text-highlight">
              Talk to us
            </Link>
          </div>
        </Container>
        <Wave fill="fill-bg" className="absolute inset-x-0 bottom-0" />
      </section>

      {/* Intro with overlapping card */}
      <section aria-labelledby="intro-heading" className="bg-bg py-24 text-fg lg:py-28">
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <div {...reveal("left")} className="relative">
            {about ? (
              <Image src={about.src} alt={about.alt} width={about.width} height={about.height} sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[4/5] w-full rounded-[36px] object-cover lg:w-[85%]" />
            ) : null}
            <div className="absolute -bottom-8 right-0 max-w-[280px] rounded-[28px] bg-primary p-7 text-on-primary shadow-2xl">
              <p className="font-display text-xl font-semibold leading-snug">Marine, oil & gas and logistics, under one roof.</p>
            </div>
          </div>
          <div>
            <Heading id="intro-heading" eyebrow={`About ${site.name}`} title={site.about.title} />
            <p {...reveal("up", 100)} className="mt-8 text-lg leading-relaxed opacity-80">
              {site.profile.intro[1]}
            </p>
            <Link {...reveal("up", 200)} href="/about" className="group mt-8 inline-flex items-center gap-2 font-semibold text-accent">
              More about Oceania <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>

      <ServicesSection site={site} id="services-heading" eyebrow="What we do" title={site.services.title} intro={site.services.intro} services={site.services.items} />
      <FeaturesSection site={site} id="why-heading" eyebrow={`Why ${site.name}`} title={site.highlights.title} intro={site.highlights.intro} items={site.highlights.items} />
      <ProcessSection site={site} id="process-heading" eyebrow="How we work" title={site.process.title} intro={site.process.intro} steps={site.process.steps} />

      {/* Industries as chips */}
      <section aria-labelledby="industries-heading" className="bg-bg py-24 text-fg lg:py-28">
        <Container className="text-center">
          <div className="mx-auto max-w-3xl [&>div]:mx-auto">
            <Heading id="industries-heading" eyebrow="Who we serve" title={site.industries.title} intro={site.industries.intro} />
          </div>
          <ul className="mt-12 flex flex-wrap justify-center gap-4">
            {site.industries.items.map(({ icon: Icon, title }, i) => (
              <li key={title} {...reveal("zoom", stagger(i, 6, 60))}>
                <Link href="/industries" className="inline-flex items-center gap-3 rounded-full border border-fg/10 bg-surface px-6 py-3.5 font-semibold transition-colors hover:border-accent hover:text-accent">
                  <Icon aria-hidden className="size-5 text-accent" strokeWidth={1.75} />
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaSection site={site} />
    </>
  );
}
