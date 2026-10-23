import { reveal, servicePath, stagger, type HeadingProps, type PageHeroProps, type SiteUI } from "@arismile/site-kit";
import { cn, Container } from "@arismile/ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/*
 * Arismile Advisory "Ledger": private-bank editorial. Centred serif headings
 * framed by fine rules, Roman numerals, cream panels and generous whitespace.
 */

const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
export const toRoman = (i: number) => roman[i] ?? String(i + 1);

function Rule({ className }: { className?: string }) {
  return <span aria-hidden className={cn("h-px w-12 bg-current opacity-50", className)} />;
}

export function Heading({ eyebrow, title, intro, id, onDark }: HeadingProps) {
  return (
    <div {...reveal("up")} className="mx-auto max-w-3xl text-center">
      <p className={cn("flex items-center justify-center gap-4 text-[12px] font-semibold uppercase tracking-[0.35em]", onDark ? "text-highlight" : "text-accent")}>
        <Rule />
        {eyebrow}
        <Rule />
      </p>
      <h2 id={id} className="mt-6 font-display text-4xl font-semibold leading-[1.1] md:text-[56px]">
        {title}
      </h2>
      {intro ? <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed opacity-75">{intro}</p> : null}
    </div>
  );
}

export function PageHero({ eyebrow, title, intro, crumbs }: PageHeroProps) {
  return (
    <section className="border-b border-fg/15 bg-surface text-fg">
      <Container className="load-in py-20 text-center md:py-28">
        <nav aria-label="Breadcrumb" className="flex justify-center">
          <ol className="flex flex-wrap items-center justify-center gap-3 text-[12px] uppercase tracking-[0.3em] opacity-60">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-3">
                {i > 0 ? <span aria-hidden>·</span> : null}
                {c.href ? (
                  <Link href={c.href} className="hover:text-accent">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <p className="mt-10 flex items-center justify-center gap-4 text-[12px] font-semibold uppercase tracking-[0.35em] text-accent">
          <Rule />
          {eyebrow}
          <Rule />
        </p>
        <h1 className="mx-auto mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] md:text-7xl">{title}</h1>
        {intro ? <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed opacity-75">{intro}</p> : null}
      </Container>
    </section>
  );
}

/** Two-column ledger with Roman numerals and fine rules. */
const ServicesSection: SiteUI["ServicesSection"] = ({ eyebrow, title, intro, id, services }) => (
  <section aria-labelledby={id} className="bg-bg py-24 text-fg lg:py-32">
    <Container>
      <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} />
      <ol className="mt-16 grid gap-x-16 border-t border-fg/20 md:grid-cols-2">
        {services.map((s, i) => (
          <li key={s.slug} {...reveal("up", stagger(i, 2))} className="group relative border-b border-fg/20 py-10">
            <p className="font-display text-xl italic text-accent">{toRoman(i)}.</p>
            <h3 className="mt-3 font-display text-3xl font-semibold leading-snug">
              <Link href={servicePath(s.slug)} className="after:absolute after:inset-0">
                {s.title}
              </Link>
            </h3>
            <p className="mt-4 leading-relaxed opacity-75">{s.description}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.3em] text-accent">
              Read more <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </li>
        ))}
      </ol>
    </Container>
  </section>
);

/** Centred columns separated by vertical rules. */
const FeaturesSection: SiteUI["FeaturesSection"] = ({ eyebrow, title, intro, id, items }) => (
  <section aria-labelledby={id} className="bg-surface py-24 text-fg lg:py-32">
    <Container>
      <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} />
      <ul className={cn("mt-16 grid gap-y-12 text-center sm:grid-cols-2 lg:divide-x lg:divide-fg/15", items.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4")}>
        {items.map(({ icon: Icon, title: t, body }, i) => (
          <li key={t} {...reveal("up", stagger(i, 4))} className="px-8">
            <Icon aria-hidden className="mx-auto size-7 text-highlight" strokeWidth={1.25} />
            <h3 className="mt-5 font-display text-2xl font-semibold">{t}</h3>
            <p className="mt-3 leading-relaxed opacity-75">{body}</p>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

/** Roman-numeral steps between fine rules on navy. */
const ProcessSection: SiteUI["ProcessSection"] = ({ eyebrow, title, intro, id, steps }) => (
  <section aria-labelledby={id} className="bg-band py-24 text-on-band lg:py-32">
    <Container>
      <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} onDark />
      <ol className="mt-16 grid border-y border-on-band/20 md:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-on-band/20">
        {steps.map((step, i) => (
          <li key={step.title} {...reveal("up", stagger(i, 4))} className="px-8 py-10 text-center">
            <p className="font-display text-5xl italic text-highlight">{toRoman(i)}</p>
            <h3 className="mt-5 font-display text-2xl font-semibold">{step.title}</h3>
            <p className="mt-3 leading-relaxed opacity-75">{step.body}</p>
          </li>
        ))}
      </ol>
    </Container>
  </section>
);

const ValuesSection: SiteUI["ValuesSection"] = ({ eyebrow, title, intro, id, items }) => (
  <section aria-labelledby={id} className="bg-bg py-24 text-fg lg:py-32">
    <Container>
      <Heading id={id} eyebrow={eyebrow} title={title} intro={intro} />
      <ul className={cn("mt-16 grid gap-y-12 md:grid-cols-2 md:divide-fg/15 lg:divide-x", items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3")}>
        {items.map((item, i) => (
          <li key={item.title} {...reveal("up", stagger(i))} className="px-8 text-center">
            <p className="font-display text-lg italic text-accent">{item.label ?? toRoman(i)}</p>
            <h3 className="mt-3 font-display text-3xl font-semibold">{item.title}</h3>
            <p className="mt-4 leading-relaxed opacity-75">{item.body}</p>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

const CtaSection: SiteUI["CtaSection"] = ({ site }) => (
  <section className="border-y border-fg/15 bg-surface py-24 text-fg lg:py-28">
    <Container>
      <div {...reveal("up")} className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">{site.cta.title}</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg opacity-75">{site.cta.text}</p>
        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-3 border border-fg px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.3em] transition-colors hover:bg-fg hover:text-bg"
        >
          Book a consultation
        </Link>
      </div>
    </Container>
  </section>
);

export const ui: SiteUI = { PageHero, Heading, ServicesSection, FeaturesSection, ProcessSection, ValuesSection, CtaSection };
