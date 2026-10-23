import { reveal, servicePath, stagger, type HeadingProps, type PageHeroProps, type SiteUI } from "@arismile/site-kit";
import { cn, Container } from "@arismile/ui";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/*
 * 9-Town "Atelier": architectural editorial. Full-bleed photography, large
 * serif headlines, hairline rules, numbered rows and a horizontal timeline.
 */

export function Heading({ eyebrow, title, intro, id, onDark }: HeadingProps) {
  return (
    <div {...reveal("up")} className="max-w-3xl">
      <p className={cn("flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.35em]", onDark ? "text-highlight" : "text-accent")}>
        <span aria-hidden className="h-px w-10 bg-current" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-5 font-display text-4xl leading-[1.08] md:text-[54px]">
        {title}
      </h2>
      {intro ? <p className="mt-6 max-w-2xl text-lg leading-relaxed opacity-75">{intro}</p> : null}
    </div>
  );
}

export function PageHero({ site, eyebrow, title, intro, crumbs }: PageHeroProps) {
  const bg = site.images.banner ?? site.images.hero;
  return (
    <section className="relative isolate flex min-h-[72vh] items-end overflow-hidden bg-band text-on-band">
      <Image src={bg.src} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-band via-band/70 to-band/40" />
      <Container className="load-in pb-16 pt-40 md:pb-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[12px] uppercase tracking-[0.25em] opacity-75">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-2">
                {i > 0 ? <ChevronRight aria-hidden className="size-3 text-highlight" /> : null}
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
        <p className="mt-10 flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.35em] text-highlight">
          <span aria-hidden className="h-px w-10 bg-current" />
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-5xl font-display text-5xl leading-[1.02] md:text-7xl">{title}</h1>
        {intro ? <p className="mt-8 max-w-2xl text-lg leading-relaxed opacity-85">{intro}</p> : null}
      </Container>
    </section>
  );
}

/** Numbered editorial rows with hairline rules. */
const ServicesSection: SiteUI["ServicesSection"] = ({ eyebrow, title, intro, id, services }) => (
  <section aria-labelledby={id} className="bg-bg py-24 text-fg lg:py-32">
    <Container>
      <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} />
      <ol className="mt-16 border-b border-fg/15">
        {services.map((s, i) => (
          <li key={s.slug} {...reveal("up", stagger(i, 1))} className="group relative border-t border-fg/15">
            <div className="grid items-baseline gap-4 py-10 md:grid-cols-[110px_1fr_1.1fr_auto] md:gap-10">
              <span aria-hidden className="font-display text-5xl text-fg/15 transition-colors group-hover:text-primary md:text-6xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl leading-snug md:text-3xl">
                <Link href={servicePath(s.slug)} className="after:absolute after:inset-0">
                  {s.title}
                </Link>
              </h3>
              <p className="leading-relaxed opacity-75">{s.description}</p>
              <span
                aria-hidden
                className="hidden size-12 items-center justify-center rounded-full border border-fg/20 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-on-primary md:inline-flex"
              >
                <ArrowUpRight className="size-5" />
              </span>
            </div>
          </li>
        ))}
      </ol>
    </Container>
  </section>
);

/** Columns topped by an orange rule. */
const FeaturesSection: SiteUI["FeaturesSection"] = ({ eyebrow, title, intro, id, items }) => (
  <section aria-labelledby={id} className="bg-surface py-24 text-fg lg:py-32">
    <Container>
      <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} />
      <ul className={cn("mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2", items.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4")}>
        {items.map(({ icon: Icon, title: t, body }, i) => (
          <li key={t} {...reveal("up", stagger(i, 4))} className="border-t-2 border-highlight pt-7">
            <Icon aria-hidden className="size-7 text-accent" strokeWidth={1.5} />
            <h3 className="mt-5 font-display text-2xl">{t}</h3>
            <p className="mt-3 leading-relaxed opacity-75">{body}</p>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

/** Horizontal timeline on the dark band. */
const ProcessSection: SiteUI["ProcessSection"] = ({ eyebrow, title, intro, id, steps }) => (
  <section aria-labelledby={id} className="bg-band py-24 text-on-band lg:py-32">
    <Container>
      <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} onDark />
      <ol className="relative mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <span aria-hidden className="absolute inset-x-0 top-[22px] hidden h-px bg-on-band/20 lg:block" />
        {steps.map((step, i) => (
          <li key={step.title} {...reveal("up", stagger(i, 4))} className="relative">
            <span className="relative inline-flex size-11 items-center justify-center rounded-full border-2 border-highlight bg-band font-display text-lg text-highlight">
              {i + 1}
            </span>
            <h3 className="mt-6 font-display text-2xl">{step.title}</h3>
            <p className="mt-3 leading-relaxed opacity-75">{step.body}</p>
          </li>
        ))}
      </ol>
    </Container>
  </section>
);

/** Sticky heading with a numbered serif list. */
const ValuesSection: SiteUI["ValuesSection"] = ({ eyebrow, title, intro, id, items }) => (
  <section aria-labelledby={id} className="bg-bg py-24 text-fg lg:py-32">
    <Container className="grid gap-14 lg:grid-cols-[5fr_7fr]">
      <div className="lg:sticky lg:top-32 lg:self-start">
        <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} />
      </div>
      <ol className="divide-y divide-fg/15 border-y border-fg/15">
        {items.map((item, i) => (
          <li key={item.title} {...reveal("up", stagger(i, 1))} className="grid gap-4 py-8 sm:grid-cols-[80px_1fr]">
            <span aria-hidden className="font-display text-3xl text-accent">
              {item.label ?? String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="mt-3 leading-relaxed opacity-75">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Container>
  </section>
);

const CtaSection: SiteUI["CtaSection"] = ({ site }) => (
  <section className="relative isolate overflow-hidden bg-band py-28 text-on-band lg:py-36">
    <Image src={site.images.hero.src} alt="" fill sizes="100vw" className="-z-20 object-cover" />
    <div aria-hidden className="absolute inset-0 -z-10 bg-band/85" />
    <Container>
      <div {...reveal("up")} className="max-w-4xl">
        <h2 className="font-display text-4xl leading-[1.08] md:text-6xl">{site.cta.title}</h2>
        <p className="mt-6 max-w-2xl text-lg opacity-80">{site.cta.text}</p>
        <Link
          href="/contact"
          className="group mt-10 inline-flex items-center gap-3 bg-primary px-8 py-4 font-semibold text-on-primary transition-opacity hover:opacity-90"
        >
          Start a project
          <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </Container>
  </section>
);

export const ui: SiteUI = {
  PageHero,
  Heading,
  ServicesSection,
  FeaturesSection,
  ProcessSection,
  ValuesSection,
  CtaSection,
};
