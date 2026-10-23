import { pageMetadata, reveal, servicePath, siteValues, stagger } from "@arismile/site-kit";
import { Container } from "@arismile/ui";
import { ArrowRight, Check, Droplet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Heading, ui } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = pageMetadata(site, "/", undefined, site.profile.summary);

export default function HomePage() {
  const { ServicesSection, FeaturesSection, ProcessSection, CtaSection } = ui;
  const hero = site.images.hero;
  const about = site.images.about;
  const commitments = siteValues(site);

  return (
    <>
      {/* Angled hero */}
      <section className="relative isolate overflow-hidden bg-band text-on-band [clip-path:polygon(0_0,100%_0,100%_88%,0_100%)]">
        <Image src={hero.src} alt={hero.alt} fill priority sizes="100vw" className="-z-20 object-cover" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-band via-band/85 to-band/30" />
        <Container className="load-in pb-44 pt-20 md:pb-56 md:pt-28">
          <p className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.25em] text-highlight">
            <Droplet aria-hidden className="size-4 fill-current" />
            {site.hero.eyebrow}
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.08] md:text-6xl">{site.hero.title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed opacity-85">{site.hero.text}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="group inline-flex items-center gap-2 rounded-(--radius) bg-highlight px-8 py-4 font-bold uppercase tracking-wide text-band hover:opacity-90">
              Request supply <ArrowRight aria-hidden className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/services" className="inline-flex items-center rounded-(--radius) border-2 border-on-band/40 px-8 py-4 font-bold uppercase tracking-wide hover:border-highlight hover:text-highlight">
              Our services
            </Link>
          </div>
        </Container>
      </section>

      {/* Quick links overlapping the hero */}
      <section aria-label="Featured services" className="relative z-10 -mt-24 pb-8 md:-mt-32">
        <Container>
          <ul className="grid gap-5 md:grid-cols-3">
            {site.services.items.slice(0, 3).map((s, i) => {
              const Icon = s.icon;
              return (
                <li key={s.slug} {...reveal("up", stagger(i))}>
                  <Link
                    href={servicePath(s.slug)}
                    className="group flex h-full items-start gap-5 rounded-(--radius) border-b-4 border-highlight bg-bg p-7 text-fg shadow-[0_20px_50px_-20px_rgba(13,42,74,0.45)] transition-transform hover:-translate-y-1"
                  >
                    <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-band text-highlight">
                      <Icon aria-hidden className="size-6" />
                    </span>
                    <span>
                      <span className="block font-display text-lg font-bold leading-snug group-hover:text-accent">{s.title}</span>
                      <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-accent">
                        Learn more <ArrowRight aria-hidden className="size-4" />
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* About with refinery photo and commitments */}
      <section aria-labelledby="about-heading" className="bg-bg py-24 text-fg lg:py-28">
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          {about ? (
            <div {...reveal("left")} className="relative">
              <div aria-hidden className="absolute -bottom-5 -left-5 size-full rounded-(--radius) border-4 border-highlight" />
              <Image src={about.src} alt={about.alt} width={about.width} height={about.height} sizes="(min-width: 1024px) 45vw, 100vw" className="relative aspect-[4/3] w-full rounded-(--radius) object-cover" />
            </div>
          ) : null}
          <div>
            <Heading id="about-heading" eyebrow={`About ${site.name}`} title={site.about.title} />
            <p {...reveal("up", 100)} className="mt-7 text-lg leading-relaxed opacity-80">
              {site.profile.intro[0]}
            </p>
            {commitments.length ? (
              <ul className="mt-8 space-y-3">
                {commitments.map((c, i) => (
                  <li key={c.title} {...reveal("up", stagger(i, 3, 80))} className="flex gap-3">
                    <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-highlight text-band">
                      <Check aria-hidden className="size-4" strokeWidth={3} />
                    </span>
                    <span>
                      <strong className="font-display">{c.title}.</strong> <span className="opacity-75">{c.body}</span>
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </Container>
      </section>

      <ServicesSection site={site} id="services-heading" eyebrow="What we do" title={site.services.title} intro={site.services.intro} services={site.services.items} />
      <FeaturesSection site={site} id="why-heading" eyebrow={`Why ${site.name}`} title={site.highlights.title} intro={site.highlights.intro} items={site.highlights.items} />
      <ProcessSection site={site} id="process-heading" eyebrow="How we work" title={site.process.title} intro={site.process.intro} steps={site.process.steps} />

      {/* Who we supply */}
      <section aria-labelledby="supply-heading" className="bg-surface py-24 text-fg lg:py-28">
        <Container>
          <Heading id="supply-heading" eyebrow="Who we supply" title={site.industries.title} intro={site.industries.intro} />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {site.industries.items.map(({ icon: Icon, title, body }, i) => (
              <li key={title} {...reveal("up", stagger(i))} className="flex gap-5 rounded-(--radius) border-l-4 border-highlight bg-bg p-6 shadow-sm">
                <Icon aria-hidden className="mt-1 size-7 shrink-0 text-accent" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-lg font-bold">{title}</h3>
                  <p className="mt-1 opacity-70">{body}</p>
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
