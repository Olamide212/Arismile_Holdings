import { pageMetadata, reveal, stagger } from "@arismile/site-kit";
import { Container } from "@arismile/ui";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow, Glow, Heading, ui } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = pageMetadata("/", undefined, site.profile.summary);

export default function HomePage() {
  const { ServicesSection, FeaturesSection, ProcessSection, CtaSection } = ui;
  const hero = site.images.hero;
  const about = site.images.about;
  const [lead, ...rest] = site.hero.title.split(" the ");

  return (
    <>
      {/* Glow hero with a browser-frame product shot */}
      <section className="relative isolate overflow-hidden bg-bg pb-20 text-fg">
        <Glow />
        <Container className="pt-40 text-center md:pt-48">
          <div className="load-in">
            <div className="flex justify-center">
              <Eyebrow>{site.hero.eyebrow}</Eyebrow>
            </div>
            <h1 className="mx-auto mt-7 max-w-5xl font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              {rest.length ? (
                <>
                  {lead} the{" "}
                  <span className="bg-gradient-to-r from-highlight via-fg to-highlight bg-clip-text text-transparent">{rest.join(" the ")}</span>
                </>
              ) : (
                site.hero.title
              )}
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-fg/65">{site.hero.text}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-fg px-7 py-3.5 font-semibold text-bg hover:opacity-90">
                Start a project <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/services" className="inline-flex items-center rounded-full border border-fg/20 px-7 py-3.5 font-semibold hover:border-highlight hover:text-highlight">
                Explore services
              </Link>
            </div>
          </div>
          <div {...reveal("up", 200)} className="mx-auto mt-16 max-w-5xl rounded-2xl border border-fg/15 bg-surface p-2 shadow-[0_40px_120px_-30px_rgba(179,38,58,0.55)]">
            <div className="flex items-center gap-1.5 px-3 py-2" aria-hidden>
              <span className="size-2.5 rounded-full bg-fg/20" />
              <span className="size-2.5 rounded-full bg-fg/20" />
              <span className="size-2.5 rounded-full bg-fg/20" />
            </div>
            <Image src={hero.src} alt={hero.alt} width={hero.width} height={hero.height} priority sizes="(min-width: 1024px) 64rem, 100vw" className="aspect-[16/9] w-full rounded-xl object-cover" />
          </div>
        </Container>
      </section>

      {/* Capability strip */}
      <section aria-label="Capabilities" className="border-y border-fg/10 bg-band py-6 text-fg">
        <Container>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[15px] text-fg/60">
            {site.services.items.map((s, i) => {
              const Icon = s.icon;
              return (
                <li key={s.slug} {...reveal("up", stagger(i, 5, 60))} className="flex items-center gap-2">
                  <Icon aria-hidden className="size-4 text-highlight" />
                  {s.title.split(" & ")[0]}
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <ServicesSection site={site} id="services-heading" eyebrow="What we do" title={site.services.title} intro={site.services.intro} services={site.services.items} />

      {/* About split */}
      <section aria-labelledby="about-heading" className="bg-bg py-24 text-fg lg:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          {about ? (
            <div {...reveal("left")} className="relative mx-auto w-full max-w-md">
              <div aria-hidden className="absolute -inset-4 -z-10 rounded-[32px] bg-gradient-to-br from-primary/40 to-highlight/20 blur-2xl" />
              <Image src={about.src} alt={about.alt} width={about.width} height={about.height} sizes="(min-width: 1024px) 28rem, 100vw" className="aspect-[4/5] w-full rounded-(--radius) border border-fg/10 object-cover" />
            </div>
          ) : null}
          <div>
            <Heading id="about-heading" eyebrow={`About ${site.name}`} title={site.about.title} />
            <p {...reveal("up", 100)} className="mt-7 text-lg leading-relaxed text-fg/70">
              {site.profile.intro[1]}
            </p>
            <Link {...reveal("up", 200)} href="/about" className="group mt-8 inline-flex items-center gap-2 font-semibold text-highlight">
              Our story <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>

      <FeaturesSection site={site} id="why-heading" eyebrow={`Why ${site.name}`} title={site.highlights.title} intro={site.highlights.intro} items={site.highlights.items} />
      <ProcessSection site={site} id="process-heading" eyebrow="How we work" title={site.process.title} intro={site.process.intro} steps={site.process.steps} />

      {/* Industries chips */}
      <section aria-labelledby="industries-heading" className="bg-bg py-24 text-fg">
        <Container>
          <Heading id="industries-heading" eyebrow="Who we serve" title={site.industries.title} intro={site.industries.intro} />
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {site.industries.items.map(({ icon: Icon, title, body }, i) => (
              <li key={title} {...reveal("up", stagger(i))} className="flex items-start gap-4 rounded-(--radius) border border-fg/10 bg-surface/60 p-5">
                <Icon aria-hidden className="mt-0.5 size-5 shrink-0 text-highlight" />
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-fg/60">{body}</p>
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
