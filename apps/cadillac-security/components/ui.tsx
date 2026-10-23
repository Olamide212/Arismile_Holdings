import { reveal, servicePath, stagger, type HeadingProps, type PageHeroProps, type SiteUI } from "@arismile/site-kit";
import { cn, Container } from "@arismile/ui";
import { ArrowRight, ChevronsRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

/*
 * Cadillac Security "Sentinel": tactical. Corner brackets, grid lines,
 * monospaced labels, numbered dossier cards and a red phase track.
 */

/** Viewfinder-style corner brackets around a block. */
export function Brackets({ children, className }: { children: ReactNode; className?: string }) {
  const corner = "pointer-events-none absolute size-6 border-primary";
  return (
    <div className={cn("relative", className)}>
      <span aria-hidden className={cn(corner, "-left-3 -top-3 border-l-2 border-t-2")} />
      <span aria-hidden className={cn(corner, "-right-3 -top-3 border-r-2 border-t-2")} />
      <span aria-hidden className={cn(corner, "-bottom-3 -left-3 border-b-2 border-l-2")} />
      <span aria-hidden className={cn(corner, "-bottom-3 -right-3 border-b-2 border-r-2")} />
      {children}
    </div>
  );
}

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("font-mono text-[12px] uppercase tracking-[0.25em] text-accent", className)}>{children}</p>;
}

export function Heading({ eyebrow, title, intro, id }: HeadingProps) {
  return (
    <div {...reveal("up")} className="max-w-3xl">
      <Tag>{"// "}{eyebrow}</Tag>
      <h2 id={id} className="mt-4 font-display text-4xl font-semibold leading-[1.05] md:text-5xl">
        {title}
      </h2>
      <span aria-hidden className="mt-6 block h-1 w-16 bg-primary" />
      {intro ? <p className="mt-6 text-lg leading-relaxed text-fg/70">{intro}</p> : null}
    </div>
  );
}

export function PageHero({ eyebrow, title, intro, crumbs }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-fg/10 bg-band text-fg">
      <div aria-hidden className="sentinel-grid absolute inset-0 -z-10" />
      <Container className="load-in py-20 md:py-28">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-fg/55">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-2">
                {i > 0 ? <span aria-hidden>/</span> : null}
                {c.href ? (
                  <Link href={c.href} className="hover:text-accent">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-fg/80">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <Brackets className="mt-12 max-w-4xl px-8 py-10">
          <Tag>{"// "}{eyebrow}</Tag>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.02] md:text-6xl">{title}</h1>
          {intro ? <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg/70">{intro}</p> : null}
        </Brackets>
      </Container>
    </section>
  );
}

/** Dossier cards: code label, red top bar, key points. */
const ServicesSection: SiteUI["ServicesSection"] = ({ eyebrow, title, intro, id, services }) => (
  <section aria-labelledby={id} className="bg-bg py-24 text-fg lg:py-28">
    <Container>
      <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} />
      <ul className="mt-14 grid gap-6 md:grid-cols-2">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <li key={s.slug} {...reveal("up", stagger(i, 2))}>
              <article className="group relative flex h-full flex-col border border-fg/10 border-t-primary bg-surface p-8 transition-colors [border-top-width:3px] hover:border-fg/25">
                <div className="flex items-center justify-between">
                  <Tag>SVC-{String(i + 1).padStart(2, "0")}</Tag>
                  <Icon aria-hidden className="size-6 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold leading-snug">
                  <Link href={servicePath(s.slug)} className="after:absolute after:inset-0">
                    {s.title}
                  </Link>
                </h3>
                <p className="mt-4 leading-relaxed text-fg/70">{s.description}</p>
                <ul className="mt-6 space-y-2 border-t border-fg/10 pt-6 text-sm text-fg/75">
                  {s.deliverables.slice(0, 3).map((d) => (
                    <li key={d} className="flex gap-2">
                      <ChevronsRight aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{d.split(":")[0]}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 font-mono text-[12px] uppercase tracking-[0.2em] text-accent">
                  Open file <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </article>
            </li>
          );
        })}
      </ul>
    </Container>
  </section>
);

/** A single row of pillars separated by rules. */
const FeaturesSection: SiteUI["FeaturesSection"] = ({ eyebrow, title, intro, id, items }) => (
  <section aria-labelledby={id} className="relative isolate border-y border-fg/10 bg-band py-24 text-fg lg:py-28">
    <div aria-hidden className="sentinel-grid absolute inset-0 -z-10 opacity-60" />
    <Container>
      <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} />
      <ul className={cn("mt-14 grid border border-fg/10 sm:grid-cols-2", items.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4")}>
        {items.map(({ icon: Icon, title: t, body }, i) => (
          <li key={t} {...reveal("up", stagger(i, 4))} className="border-fg/10 bg-bg/70 p-8 max-lg:border-b sm:even:border-l lg:border-l lg:first:border-l-0">
            <div className="flex items-center gap-3">
              <Icon aria-hidden className="size-7 text-primary" strokeWidth={1.5} />
              <Tag className="text-fg/45">{String(i + 1).padStart(2, "0")}</Tag>
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold">{t}</h3>
            <p className="mt-3 leading-relaxed text-fg/65">{body}</p>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

/** Vertical phase track with a red rail. */
const ProcessSection: SiteUI["ProcessSection"] = ({ eyebrow, title, intro, id, steps }) => (
  <section aria-labelledby={id} className="bg-bg py-24 text-fg lg:py-28">
    <Container className="grid gap-14 lg:grid-cols-[5fr_7fr]">
      <div className="lg:sticky lg:top-36 lg:self-start">
        <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} />
      </div>
      <ol className="relative border-l-2 border-primary/60 pl-10">
        {steps.map((step, i) => (
          <li key={step.title} {...reveal("right", stagger(i, 1))} className="relative pb-12 last:pb-0">
            <span aria-hidden className="absolute -left-[49px] top-1 size-4 rotate-45 border-2 border-primary bg-bg" />
            <Tag>Phase {String(i + 1).padStart(2, "0")}</Tag>
            <h3 className="mt-3 font-display text-2xl font-semibold">{step.title}</h3>
            <p className="mt-3 leading-relaxed text-fg/70">{step.body}</p>
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
      <ul className={cn("mt-14 grid gap-6 md:grid-cols-2", items.length >= 5 || items.length === 3 ? "lg:grid-cols-3" : "")}>
        {items.map((item, i) => (
          <li key={item.title} {...reveal("up", stagger(i))} className="border-l-2 border-primary bg-bg p-8">
            <Tag>{item.label ?? `REF-${String(i + 1).padStart(2, "0")}`}</Tag>
            <h3 className="mt-4 font-display text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-fg/70">{item.body}</p>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

const CtaSection: SiteUI["CtaSection"] = ({ site }) => (
  <section className="relative isolate overflow-hidden bg-primary py-20 text-on-primary">
    <div aria-hidden className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(-45deg,transparent_0_22px,rgba(0,0,0,0.12)_22px_24px)]" />
    <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
      <div {...reveal("up")}>
        <p className="font-mono text-[12px] uppercase tracking-[0.25em] opacity-80">{"// "}Confidential enquiries</p>
        <h2 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">{site.cta.title}</h2>
        <p className="mt-4 max-w-xl text-lg opacity-85">{site.cta.text}</p>
      </div>
      <Link href="/contact" className="group inline-flex shrink-0 items-center gap-3 bg-bg px-8 py-4 font-mono text-[13px] font-semibold uppercase tracking-[0.2em] text-fg hover:bg-band">
        Request assessment <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </Container>
  </section>
);

export const ui: SiteUI = { PageHero, Heading, ServicesSection, FeaturesSection, ProcessSection, ValuesSection, CtaSection };
