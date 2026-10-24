import { reveal, servicePath, stagger, type HeadingProps, type PageHeroProps, type SiteUI } from "@arismile/site-kit";
import { cn, Container } from "@arismile/ui";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";

/*
 * Mind Age "Circuit": dark tech. Floating pill navigation, glow-and-grid
 * backgrounds, bento-grid services, gradient-bordered tiles and a stepper.
 */

/**
 * Grid lines + radial glow, absolutely positioned behind content. The glow is
 * drawn with radial gradients rather than large blur filters, which are very
 * expensive to paint on phones.
 */
export function Glow({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <div className="circuit-grid absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,rgb(179_38_58/0.38),transparent_70%),radial-gradient(ellipse_35%_30%_at_90%_30%,rgb(196_191_240/0.14),transparent_70%)]" />
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-fg/15 bg-fg/5 px-3.5 py-1.5 text-[12px] font-medium text-fg/80">
      <span aria-hidden className="size-1.5 rounded-full bg-highlight shadow-[0_0_10px_var(--color-highlight)]" />
      {children}
    </p>
  );
}

export function Heading({ eyebrow, title, intro, id }: HeadingProps) {
  return (
    <div {...reveal("up")} className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id} className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
        {title}
      </h2>
      {intro ? <p className="mt-5 text-lg leading-relaxed text-fg/65">{intro}</p> : null}
    </div>
  );
}

export function PageHero({ eyebrow, title, intro, crumbs }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-bg text-fg">
      <Glow />
      <Container className="load-in pb-20 pt-40 text-center md:pb-28 md:pt-48">
        <nav aria-label="Breadcrumb" className="flex justify-center">
          <ol className="flex flex-wrap items-center justify-center gap-1.5 text-[13px] text-fg/55">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-1.5">
                {i > 0 ? <ChevronRight aria-hidden className="size-3.5" /> : null}
                {c.href ? (
                  <Link href={c.href} className="hover:text-fg">
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
        <div className="mt-8 flex justify-center">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">{title}</h1>
        {intro ? <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-fg/65">{intro}</p> : null}
      </Container>
    </section>
  );
}

/** Bento grid: the first service gets a large tile. */
const ServicesSection: SiteUI["ServicesSection"] = ({ eyebrow, title, intro, id, services }) => (
  <section aria-labelledby={id} className="bg-bg py-24 text-fg lg:py-28">
    <Container>
      <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} />
      <ul className="mt-14 grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = s.icon;
          const big = i === 0;
          return (
            <li key={s.slug} {...reveal("up", stagger(i))} className={cn(big && "md:col-span-2 lg:row-span-2")}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-(--radius) border border-fg/10 bg-surface p-7 transition-colors hover:border-highlight/50">
                <div aria-hidden className="absolute -right-16 -top-16 size-56 rounded-full bg-[radial-gradient(circle,rgb(179_38_58/0.35),transparent_65%)] opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/40 text-on-primary ring-1 ring-fg/10">
                  <Icon aria-hidden className="size-6" strokeWidth={1.75} />
                </span>
                <h3 className={cn("mt-6 font-display font-semibold leading-snug tracking-tight", big ? "text-3xl md:text-4xl" : "text-xl")}>
                  <Link href={servicePath(s.slug)} className="after:absolute after:inset-0">
                    {s.title}
                  </Link>
                </h3>
                <p className={cn("mt-3 leading-relaxed text-fg/65", big && "max-w-lg text-lg")}>{s.description}</p>
                {big ? (
                  <ul className="mt-6 grid gap-2 text-sm text-fg/75 sm:grid-cols-2">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2">
                        <span aria-hidden className="size-1.5 rounded-full bg-highlight" />
                        {d}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-highlight">
                  Explore <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </article>
            </li>
          );
        })}
      </ul>
    </Container>
  </section>
);

/** Tiles with a gradient hairline border. */
const FeaturesSection: SiteUI["FeaturesSection"] = ({ eyebrow, title, intro, id, items }) => (
  <section aria-labelledby={id} className="relative isolate overflow-hidden bg-bg py-24 text-fg lg:py-28">
    <Container>
      <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} />
      <ul className={cn("mt-14 grid gap-4 sm:grid-cols-2", items.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4")}>
        {items.map(({ icon: Icon, title: t, body }, i) => (
          <li key={t} {...reveal("up", stagger(i, 4))} className="rounded-(--radius) bg-gradient-to-b from-fg/20 to-fg/5 p-px">
            <div className="h-full rounded-[calc(var(--radius)-1px)] bg-surface p-7">
              <Icon aria-hidden className="size-7 text-highlight" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-lg font-semibold">{t}</h3>
              <p className="mt-2 leading-relaxed text-fg/65">{body}</p>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

/** Horizontal stepper with a gradient connector. */
const ProcessSection: SiteUI["ProcessSection"] = ({ eyebrow, title, intro, id, steps }) => (
  <section aria-labelledby={id} className="relative isolate overflow-hidden border-y border-fg/10 bg-band py-24 text-fg lg:py-28">
    <Glow className="opacity-50" />
    <Container>
      <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} />
      <ol className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <span aria-hidden className="absolute left-6 right-6 top-6 hidden h-px bg-gradient-to-r from-primary via-highlight to-primary lg:block" />
        {steps.map((step, i) => (
          <li key={step.title} {...reveal("up", stagger(i, 4))} className="relative">
            <span className="relative inline-flex size-12 items-center justify-center rounded-full border border-highlight/60 bg-bg font-display font-semibold text-highlight shadow-[0_0_24px_rgba(196,191,240,0.35)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-6 font-display text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 leading-relaxed text-fg/65">{step.body}</p>
          </li>
        ))}
      </ol>
    </Container>
  </section>
);

const ValuesSection: SiteUI["ValuesSection"] = ({ eyebrow, title, intro, id, items }) => (
  <section aria-labelledby={id} className="bg-bg py-24 text-fg lg:py-28">
    <Container>
      <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} />
      <ul className="mt-14 grid gap-4 md:grid-cols-2">
        {items.map((item, i) => (
          <li key={item.title} {...reveal("up", stagger(i, 2))} className="relative overflow-hidden rounded-(--radius) border border-fg/10 bg-surface p-8">
            <span aria-hidden className="absolute -right-2 -top-6 font-display text-[110px] font-semibold leading-none text-fg/[0.04]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="relative font-display text-2xl font-semibold">{item.title}</h3>
            <p className="relative mt-3 leading-relaxed text-fg/65">{item.body}</p>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

const CtaSection: SiteUI["CtaSection"] = ({ site }) => (
  <section className="bg-bg py-24 text-fg">
    <Container>
      <div {...reveal("zoom")} className="relative isolate overflow-hidden rounded-[28px] border border-fg/10 bg-surface px-8 py-20 text-center">
        <Glow />
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">{site.cta.title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-fg/65">{site.cta.text}</p>
        <Link href="/contact" className="group mt-9 inline-flex items-center gap-2 rounded-full bg-fg px-8 py-4 font-semibold text-bg transition-opacity hover:opacity-90">
          Start a project <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </Container>
  </section>
);

export const ui: SiteUI = { PageHero, Heading, ServicesSection, FeaturesSection, ProcessSection, ValuesSection, CtaSection };
