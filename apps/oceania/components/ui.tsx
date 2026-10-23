import { reveal, servicePath, stagger, type HeadingProps, type PageHeroProps, type SiteUI } from "@arismile/site-kit";
import { cn, Container } from "@arismile/ui";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FleetScroller } from "./FleetScroller";

/*
 * Oceania "Tide": maritime. Wave-edged sections, pill labels, a swipeable
 * fleet of service cards and a zig-zag vertical timeline.
 */

/** Decorative wave; `fill` is a Tailwind fill-* class for the colour below it. */
export function Wave({ fill, flip = false, className }: { fill: string; flip?: boolean; className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={cn("block h-12 w-full md:h-20", flip && "rotate-180", fill, className)}
    >
      <path d="M0 64c120 28 240 42 360 34s240-38 360-46 240 6 360 26 240 34 360 28v54H0Z" />
    </svg>
  );
}

export function Heading({ eyebrow, title, intro, id, onDark }: HeadingProps) {
  return (
    <div {...reveal("up")} className="max-w-3xl">
      <p
        className={cn(
          "inline-flex rounded-full px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.2em]",
          onDark ? "bg-on-band/10 text-highlight" : "bg-surface text-accent",
        )}
      >
        {eyebrow}
      </p>
      <h2 id={id} className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
        {title}
      </h2>
      {intro ? <p className="mt-5 text-lg leading-relaxed opacity-75">{intro}</p> : null}
    </div>
  );
}

export function PageHero({ site, eyebrow, title, intro, crumbs }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-band text-on-band">
      <Image src={site.images.hero.src} alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-35" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-band/60 to-band" />
      <Container className="load-in pb-28 pt-20 text-center md:pb-36 md:pt-28">
        <nav aria-label="Breadcrumb" className="flex justify-center">
          <ol className="flex flex-wrap items-center justify-center gap-2 text-[13px] opacity-75">
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
        <p className="mx-auto mt-8 inline-flex rounded-full bg-on-band/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-highlight">
          {eyebrow}
        </p>
        <h1 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
        {intro ? <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed opacity-85">{intro}</p> : null}
      </Container>
      <Wave fill="fill-bg" className="absolute inset-x-0 bottom-0" />
    </section>
  );
}

/** Horizontally scrolling "fleet" of service cards. */
const ServicesSection: SiteUI["ServicesSection"] = ({ eyebrow, title, intro, id, services }) => (
  <section aria-labelledby={id} className="overflow-hidden bg-surface py-24 text-fg lg:py-28">
    <Container>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} />
      </div>
    </Container>
    <div className="mx-auto mt-12 max-w-(--container-max)">
      <FleetScroller label={title}>
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <li key={s.slug} {...reveal("up", stagger(i, 4))} className="w-[85%] shrink-0 snap-start sm:w-[340px]">
              <article className="group relative flex h-full flex-col rounded-[28px] bg-bg p-8 shadow-sm ring-1 ring-fg/5 transition-shadow hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-primary text-on-primary">
                    <Icon aria-hidden className="size-7" strokeWidth={1.5} />
                  </span>
                  <span aria-hidden className="font-display text-4xl font-semibold text-highlight">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold leading-snug">
                  <Link href={servicePath(s.slug)} className="after:absolute after:inset-0 after:rounded-[28px]">
                    {s.title}
                  </Link>
                </h3>
                <p className="mt-4 leading-relaxed opacity-75">{s.description}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 font-semibold text-accent">
                  Learn more <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </article>
            </li>
          );
        })}
      </FleetScroller>
    </div>
  </section>
);

/** Two-column icon media objects. */
const FeaturesSection: SiteUI["FeaturesSection"] = ({ eyebrow, title, intro, id, items }) => (
  <section aria-labelledby={id} className="bg-bg py-24 text-fg lg:py-28">
    <Container className="grid gap-14 lg:grid-cols-[4fr_7fr]">
      <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} />
      <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {items.map(({ icon: Icon, title: t, body }, i) => (
          <li key={t} {...reveal("up", stagger(i, 2))} className="flex gap-5">
            <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-surface text-accent">
              <Icon aria-hidden className="size-6" strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold">{t}</h3>
              <p className="mt-2 leading-relaxed opacity-75">{body}</p>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

/** Zig-zag vertical timeline on deep navy, with wave edges. */
const ProcessSection: SiteUI["ProcessSection"] = ({ eyebrow, title, intro, id, steps }) => (
  <section aria-labelledby={id} className="bg-bg text-on-band">
    <Wave fill="fill-band" />
    <div className="bg-band py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center [&>div]:mx-auto">
          <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} onDark />
        </div>
        <ol className="relative mx-auto mt-16 max-w-4xl">
          <span aria-hidden className="absolute bottom-0 left-5 top-0 w-px bg-on-band/20 md:left-1/2" />
          {steps.map((step, i) => (
            <li
              key={step.title}
              {...reveal(i % 2 === 0 ? "left" : "right")}
              className={cn("relative pb-12 pl-16 last:pb-0 md:w-1/2 md:pl-0", i % 2 === 0 ? "md:pr-14 md:text-right" : "md:ml-auto md:pl-14")}
            >
              <span
                className={cn(
                  "absolute left-0 top-0 inline-flex size-10 items-center justify-center rounded-full bg-highlight font-display font-semibold text-band",
                  i % 2 === 0 ? "md:left-auto md:-right-5" : "md:-left-5",
                )}
              >
                {i + 1}
              </span>
              <h3 className="font-display text-2xl font-semibold">{step.title}</h3>
              <p className="mt-2 leading-relaxed opacity-75">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </div>
    <Wave fill="fill-band" flip />
  </section>
);

const ValuesSection: SiteUI["ValuesSection"] = ({ eyebrow, title, intro, id, items }) => (
  <section aria-labelledby={id} className="bg-surface py-24 text-fg lg:py-28">
    <Container>
      <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} />
      <ul className={cn("mt-14 grid gap-6 sm:grid-cols-2", items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3")}>
        {items.map((item, i) => (
          <li key={item.title} {...reveal("up", stagger(i, 4))} className="rounded-[28px] border-t-4 border-highlight bg-bg p-8 shadow-sm">
            {item.label ? <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-accent">{item.label}</p> : null}
            <h3 className="font-display text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 leading-relaxed opacity-75">{item.body}</p>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

const CtaSection: SiteUI["CtaSection"] = ({ site }) => (
  <section className="bg-bg py-24 text-fg">
    <Container>
      <div {...reveal("zoom")} className="relative overflow-hidden rounded-[36px] bg-primary px-8 pb-24 pt-16 text-center text-on-primary sm:px-16">
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-semibold leading-tight md:text-5xl">{site.cta.title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg opacity-85">{site.cta.text}</p>
        <Link
          href="/contact"
          className="group mt-9 inline-flex items-center gap-2 rounded-full bg-on-primary px-8 py-4 font-semibold text-primary transition-opacity hover:opacity-90"
        >
          Talk to Oceania <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <Wave fill="fill-on-primary/10" className="absolute inset-x-0 bottom-0" />
      </div>
    </Container>
  </section>
);

export const ui: SiteUI = { PageHero, Heading, ServicesSection, FeaturesSection, ProcessSection, ValuesSection, CtaSection };
