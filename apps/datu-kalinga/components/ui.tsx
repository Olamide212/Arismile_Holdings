import { reveal, servicePath, stagger, type HeadingProps, type PageHeroProps, type SiteUI } from "@arismile/site-kit";
import { cn, Container } from "@arismile/ui";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/*
 * Datu Kalinga "Strata": geological and brutalist. Square corners, thick
 * rules, bordered cells, a diagonal split hero and process shown as rock
 * layers.
 */

/** Three thin bands that echo rock strata. */
export function Strata({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("grid", className)}>
      <span className="h-2 bg-highlight" />
      <span className="h-2 bg-primary" />
      <span className="h-2 bg-band" />
    </div>
  );
}

export function Heading({ eyebrow, title, intro, id, onDark }: HeadingProps) {
  return (
    <div {...reveal("up")} className="max-w-3xl">
      <p className={cn("inline-block border-2 px-3 py-1 text-[12px] font-bold uppercase tracking-[0.25em]", onDark ? "border-highlight text-highlight" : "border-fg")}>
        {eyebrow}
      </p>
      <h2 id={id} className="mt-6 font-display text-4xl font-bold uppercase leading-[1.05] md:text-5xl">
        {title}
      </h2>
      {intro ? <p className="mt-6 text-lg leading-relaxed opacity-75">{intro}</p> : null}
    </div>
  );
}

export function PageHero({ site, eyebrow, title, intro, crumbs }: PageHeroProps) {
  const bg = site.images.banner ?? site.images.hero;
  return (
    <section className="border-b-2 border-fg bg-band text-on-band">
      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        <div className="load-in px-4 py-16 sm:px-6 md:py-24 lg:px-10 lg:pl-[max(2.5rem,calc((100vw-var(--container-max))/2+2.5rem))]">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] opacity-70">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {i > 0 ? <span aria-hidden>/</span> : null}
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
          <p className="mt-10 inline-block border-2 border-highlight px-3 py-1 text-[12px] font-bold uppercase tracking-[0.25em] text-highlight">{eyebrow}</p>
          <h1 className="mt-6 font-display text-4xl font-bold uppercase leading-[1.02] md:text-6xl">{title}</h1>
          {intro ? <p className="mt-6 max-w-xl text-lg leading-relaxed opacity-80">{intro}</p> : null}
        </div>
        <div className="relative hidden min-h-[360px] lg:block">
          <Image src={bg.src} alt="" fill priority sizes="50vw" className="object-cover [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]" />
        </div>
      </div>
      <Strata />
    </section>
  );
}

/** Ledger table: number, service, description, arrow. */
const ServicesSection: SiteUI["ServicesSection"] = ({ eyebrow, title, intro, id, services }) => (
  <section aria-labelledby={id} className="bg-bg py-24 text-fg lg:py-28">
    <Container>
      <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} />
      <ol className="mt-14 border-2 border-fg">
        {services.map((s, i) => (
          <li key={s.slug} {...reveal("up", stagger(i, 1))} className="group relative border-b-2 border-fg last:border-b-0">
            <div className="grid gap-3 p-6 transition-colors group-hover:bg-highlight/30 md:grid-cols-[90px_1fr_1.4fr_48px] md:items-center md:gap-8 md:p-8">
              <span aria-hidden className="font-display text-4xl font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-bold uppercase leading-snug">
                <Link href={servicePath(s.slug)} className="after:absolute after:inset-0">
                  {s.title}
                </Link>
              </h3>
              <p className="leading-relaxed opacity-75">{s.description}</p>
              <ArrowUpRight aria-hidden className="hidden size-8 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:block" />
            </div>
          </li>
        ))}
      </ol>
    </Container>
  </section>
);

/** Shared-border cell grid. */
const FeaturesSection: SiteUI["FeaturesSection"] = ({ eyebrow, title, intro, id, items }) => (
  <section aria-labelledby={id} className="bg-surface py-24 text-fg lg:py-28">
    <Container>
      <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} />
      <ul className={cn("mt-14 grid border-l-2 border-t-2 border-fg sm:grid-cols-2", items.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4")}>
        {items.map(({ icon: Icon, title: t, body }, i) => (
          <li key={t} {...reveal("up", stagger(i, 4))} className="border-b-2 border-r-2 border-fg bg-bg p-8">
            <Icon aria-hidden className="size-9 text-accent" strokeWidth={1.5} />
            <h3 className="mt-6 font-display text-lg font-bold uppercase">{t}</h3>
            <p className="mt-3 leading-relaxed opacity-75">{body}</p>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

const strataTones = ["bg-band text-on-band", "bg-primary text-on-primary", "bg-highlight text-fg", "bg-surface text-fg"];

/** Each step is a full-width layer of rock. */
const ProcessSection: SiteUI["ProcessSection"] = ({ eyebrow, title, intro, id, steps }) => (
  <section aria-labelledby={id} className="bg-bg text-fg">
    <Container className="py-24 lg:pt-28">
      <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} />
    </Container>
    <ol className="border-t-2 border-fg">
      {steps.map((step, i) => (
        <li key={step.title} {...reveal("up")} className={cn("border-b-2 border-fg", strataTones[i % strataTones.length])}>
          <Container className="grid gap-4 py-10 md:grid-cols-[140px_1fr_1.4fr] md:items-center md:gap-10">
            <span aria-hidden className="font-display text-6xl font-bold opacity-60">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-2xl font-bold uppercase">{step.title}</h3>
            <p className="text-lg leading-relaxed opacity-85">{step.body}</p>
          </Container>
        </li>
      ))}
    </ol>
  </section>
);

const ValuesSection: SiteUI["ValuesSection"] = ({ eyebrow, title, intro, id, items }) => (
  <section aria-labelledby={id} className="bg-surface py-24 text-fg lg:py-28">
    <Container>
      <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} />
      <ul className={cn("mt-14 grid border-l-2 border-t-2 border-fg md:grid-cols-2", items.length === 3 || items.length === 5 ? "lg:grid-cols-3" : "")}>
        {items.map((item, i) => (
          <li key={item.title} {...reveal("up", stagger(i, 2))} className="border-b-2 border-r-2 border-fg bg-bg p-8 md:p-10">
            <p className="font-display text-sm font-bold uppercase tracking-[0.25em] text-accent">{item.label ?? String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-4 font-display text-2xl font-bold uppercase">{item.title}</h3>
            <p className="mt-4 leading-relaxed opacity-80">{item.body}</p>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

const CtaSection: SiteUI["CtaSection"] = ({ site }) => (
  <section className="border-y-2 border-fg bg-primary text-on-primary">
    <div className="grid lg:grid-cols-[1.4fr_1fr]">
      <div {...reveal("up")} className="px-4 py-16 sm:px-6 md:py-20 lg:px-10 lg:pl-[max(2.5rem,calc((100vw-var(--container-max))/2+2.5rem))]">
        <h2 className="font-display text-3xl font-bold uppercase leading-tight md:text-5xl">{site.cta.title}</h2>
        <p className="mt-5 max-w-xl text-lg opacity-85">{site.cta.text}</p>
        <Link href="/contact" className="group mt-9 inline-flex items-center gap-3 border-2 border-on-primary px-8 py-4 font-bold uppercase tracking-[0.15em] hover:bg-on-primary hover:text-primary">
          Partner with us <ArrowRight aria-hidden className="size-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div
        aria-hidden
        className="hidden border-l-2 border-fg bg-[repeating-linear-gradient(135deg,var(--color-band)_0_18px,var(--color-highlight)_18px_22px)] lg:block"
      />
    </div>
  </section>
);

export const ui: SiteUI = { PageHero, Heading, ServicesSection, FeaturesSection, ProcessSection, ValuesSection, CtaSection };
