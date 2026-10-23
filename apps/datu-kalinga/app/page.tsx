import { pageMetadata, reveal, siteValues, stagger } from "@arismile/site-kit";
import { Container } from "@arismile/ui";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Heading, Strata, ui } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = pageMetadata(site, "/", undefined, site.profile.summary);

export default function HomePage() {
  const { ServicesSection, FeaturesSection, ProcessSection, CtaSection } = ui;
  const hero = site.images.hero;
  const about = site.images.about;
  const statements = siteValues(site).slice(0, 3);

  return (
    <>
      {/* Diagonal split hero */}
      <section className="border-b-2 border-fg bg-band text-on-band">
        <div className="grid lg:min-h-[78vh] lg:grid-cols-[1fr_1.1fr]">
          <div className="load-in flex flex-col justify-center px-4 py-20 sm:px-6 lg:px-10 lg:pl-[max(2.5rem,calc((100vw-var(--container-max))/2+2.5rem))]">
            <p className="inline-block self-start border-2 border-highlight px-3 py-1 text-[12px] font-bold uppercase tracking-[0.25em] text-highlight">{site.hero.eyebrow}</p>
            <h1 className="mt-8 font-display text-5xl font-bold uppercase leading-[0.98] md:text-7xl">{site.hero.title}</h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed opacity-80">{site.hero.text}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/services" className="group inline-flex items-center gap-3 bg-highlight px-8 py-4 font-bold uppercase tracking-[0.15em] text-fg hover:opacity-90">
                Our services <ArrowRight aria-hidden className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/contact" className="inline-flex items-center border-2 border-on-band/50 px-8 py-4 font-bold uppercase tracking-[0.15em] hover:border-highlight hover:text-highlight">
                Partner with us
              </Link>
            </div>
          </div>
          <div className="relative min-h-[320px]">
            <Image src={hero.src} alt={hero.alt} fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover lg:[clip-path:polygon(16%_0,100%_0,100%_100%,0_100%)]" />
          </div>
        </div>
        <Strata />
      </section>

      {/* Indexed introduction */}
      <section aria-labelledby="intro-heading" className="bg-bg py-24 text-fg lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-2">
          <div>
            <Heading id="intro-heading" eyebrow={`01 / About ${site.name}`} title={site.about.title} />
            <p {...reveal("up", 100)} className="mt-8 text-lg leading-relaxed opacity-80">
              {site.profile.intro[0]}
            </p>
            <Link {...reveal("up", 200)} href="/about" className="group mt-8 inline-flex items-center gap-3 border-b-2 border-fg pb-1 font-bold uppercase tracking-[0.15em] hover:text-accent">
              Read more <ArrowRight aria-hidden className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          {about ? (
            <div {...reveal("right", 150)} className="relative border-2 border-fg p-3">
              <Image src={about.src} alt={about.alt} width={about.width} height={about.height} sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[4/3] w-full object-cover" />
            </div>
          ) : null}
        </Container>
      </section>

      <ServicesSection site={site} id="services-heading" eyebrow="02 / What we do" title={site.services.title} intro={site.services.intro} services={site.services.items} />
      <ProcessSection site={site} id="process-heading" eyebrow="03 / Lifecycle" title={site.process.title} intro={site.process.intro} steps={site.process.steps} />
      <FeaturesSection site={site} id="why-heading" eyebrow="04 / Why us" title={site.highlights.title} intro={site.highlights.intro} items={site.highlights.items} />

      {/* Mission / vision strip */}
      {statements.length ? (
        <section aria-labelledby="mission-heading" className="border-y-2 border-fg bg-surface text-fg">
          <h2 id="mission-heading" className="sr-only">
            Mission and vision
          </h2>
          <ul className="mx-auto grid max-w-(--container-max) border-l-2 border-fg md:grid-cols-3">
            {statements.map((s, i) => (
              <li key={s.title} {...reveal("up", stagger(i))} className="border-r-2 border-fg p-8 md:p-10 max-md:border-b-2">
                <p className="font-display text-sm font-bold uppercase tracking-[0.25em] text-accent">{s.title}</p>
                <p className="mt-4 text-lg leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <FeaturesSection site={site} id="sectors-heading" eyebrow="05 / Sectors" title={site.industries.title} intro={site.industries.intro} items={site.industries.items} />
      <CtaSection site={site} />
    </>
  );
}
