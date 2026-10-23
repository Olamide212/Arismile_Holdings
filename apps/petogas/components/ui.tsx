import { reveal, servicePath, stagger, type HeadingProps, type PageHeroProps, type SiteUI } from "@arismile/site-kit";
import { cn, Container } from "@arismile/ui";
import { ArrowRight, ChevronRight, Droplet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/*
 * Petogas "Flow": corporate energy. Angled image edges, gold accents, icon
 * tiles that fill navy on hover and a "pipeline" process.
 */

export function Heading({ eyebrow, title, intro, id, onDark }: HeadingProps) {
  return (
    <div {...reveal("up")} className="max-w-3xl">
      <p className={cn("flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.2em]", onDark ? "text-highlight" : "text-accent")}>
        <Droplet aria-hidden className="size-4 fill-current" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
        {title}
      </h2>
      <span aria-hidden className="mt-5 block h-1.5 w-20 rounded-full bg-highlight" />
      {intro ? <p className="mt-6 text-lg leading-relaxed opacity-75">{intro}</p> : null}
    </div>
  );
}

export function PageHero({ site, eyebrow, title, intro, crumbs }: PageHeroProps) {
  const bg = site.images.about ?? site.images.hero;
  return (
    <section className="relative isolate overflow-hidden bg-band text-on-band [clip-path:polygon(0_0,100%_0,100%_86%,0_100%)]">
      <Image src={bg.src} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-band via-band/90 to-band/50" />
      <Container className="load-in pb-32 pt-16 md:pb-40 md:pt-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[13px] opacity-80">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-2">
                {i > 0 ? <ChevronRight aria-hidden className="size-3.5 text-highlight" /> : null}
                {c.href ? (
                  <Link href={c.href} className="hover:text-highlight">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <p className="mt-8 flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.2em] text-highlight">
          <Droplet aria-hidden className="size-4 fill-current" />
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
        {intro ? <p className="mt-6 max-w-2xl text-lg leading-relaxed opacity-85">{intro}</p> : null}
      </Container>
    </section>
  );
}

/** Tiles with a gold icon disc that fill navy on hover. */
const ServicesSection: SiteUI["ServicesSection"] = ({ eyebrow, title, intro, id, services }) => (
  <section aria-labelledby={id} className="bg-surface py-24 text-fg lg:py-28">
    <Container>
      <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} />
      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <li key={s.slug} {...reveal("up", stagger(i))}>
              <article className="group relative flex h-full flex-col rounded-(--radius) bg-bg p-8 shadow-[0_10px_40px_-20px_rgba(13,42,74,0.35)] transition-colors duration-300 hover:bg-band hover:text-on-band">
                <span className="inline-flex size-16 items-center justify-center rounded-full bg-highlight/20 text-accent transition-colors group-hover:bg-highlight group-hover:text-band">
                  <Icon aria-hidden className="size-7" strokeWidth={1.75} />
                </span>
                <h3 className="mt-7 font-display text-xl font-bold leading-snug">
                  <Link href={servicePath(s.slug)} className="after:absolute after:inset-0 after:rounded-(--radius)">
                    {s.title}
                  </Link>
                </h3>
                <p className="mt-3 leading-relaxed opacity-75">{s.description}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-7 font-bold text-accent group-hover:text-highlight">
                  Learn more <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </article>
            </li>
          );
        })}
      </ul>
    </Container>
  </section>
);

/** Navy band over the refinery photo, with gold numerals. */
const FeaturesSection: SiteUI["FeaturesSection"] = ({ site, eyebrow, title, intro, id, items }) => {
  const bg = site.images.about ?? site.images.hero;
  return (
    <section aria-labelledby={id} className="relative isolate overflow-hidden bg-band py-24 text-on-band lg:py-28">
      <Image src={bg.src} alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-band/90" />
      <Container>
        <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} onDark />
        <ul className={cn("mt-14 grid gap-px overflow-hidden rounded-(--radius) bg-on-band/15 sm:grid-cols-2", items.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4")}>
          {items.map(({ icon: Icon, title: t, body }, i) => (
            <li key={t} {...reveal("up", stagger(i, 4))} className="bg-band/80 p-8 backdrop-blur">
              <div className="flex items-center justify-between">
                <Icon aria-hidden className="size-8 text-highlight" strokeWidth={1.5} />
                <span aria-hidden className="font-display text-3xl font-bold text-highlight/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 font-display text-lg font-bold">{t}</h3>
              <p className="mt-3 leading-relaxed opacity-75">{body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

/** Steps joined by a gold "pipeline" with droplet nodes. */
const ProcessSection: SiteUI["ProcessSection"] = ({ eyebrow, title, intro, id, steps }) => (
  <section aria-labelledby={id} className="bg-bg py-24 text-fg lg:py-28">
    <Container>
      <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} />
      <ol className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <span aria-hidden className="absolute left-8 right-8 top-8 hidden h-2 rounded-full bg-gradient-to-r from-highlight via-accent to-highlight lg:block" />
        {steps.map((step, i) => (
          <li key={step.title} {...reveal("up", stagger(i, 4))} className="relative">
            <span className="relative inline-flex size-16 items-center justify-center rounded-full border-4 border-bg bg-band text-highlight shadow-lg">
              <Droplet aria-hidden className="size-6 fill-current" />
            </span>
            <p className="mt-6 text-[13px] font-bold uppercase tracking-[0.2em] text-accent">Step {i + 1}</p>
            <h3 className="mt-2 font-display text-xl font-bold">{step.title}</h3>
            <p className="mt-2 leading-relaxed opacity-75">{step.body}</p>
          </li>
        ))}
      </ol>
    </Container>
  </section>
);

const ValuesSection: SiteUI["ValuesSection"] = ({ eyebrow, title, intro, id, items }) => (
  <section aria-labelledby={id} className="bg-surface py-24 text-fg lg:py-28">
    <Container>
      <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} />
      <ul className={cn("mt-14 grid gap-6 sm:grid-cols-2", items.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4")}>
        {items.map((item, i) => (
          <li key={item.title} {...reveal("up", stagger(i, 4))} className="rounded-(--radius) border-l-4 border-highlight bg-bg p-7 shadow-sm">
            <h3 className="font-display text-lg font-bold">{item.title}</h3>
            <p className="mt-3 leading-relaxed opacity-75">{item.body}</p>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

const CtaSection: SiteUI["CtaSection"] = ({ site }) => (
  <section className="bg-band pt-28 text-on-band [clip-path:polygon(0_14%,100%_0,100%_100%,0_100%)]">
    <Container className="flex flex-col gap-8 pb-20 lg:flex-row lg:items-center lg:justify-between">
      <div {...reveal("up")} className="max-w-2xl">
        <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">{site.cta.title}</h2>
        <p className="mt-4 text-lg opacity-80">{site.cta.text}</p>
      </div>
      <Link href="/contact" className="group inline-flex shrink-0 items-center gap-3 rounded-(--radius) bg-highlight px-8 py-4 font-bold uppercase tracking-wide text-band hover:opacity-90">
        Request supply <ArrowRight aria-hidden className="size-5 transition-transform group-hover:translate-x-1" />
      </Link>
    </Container>
  </section>
);

export const ui: SiteUI = { PageHero, Heading, ServicesSection, FeaturesSection, ProcessSection, ValuesSection, CtaSection };
