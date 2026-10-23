import type { ContentBlock, ContentGroup } from "@arismile/brand";
import { cn, Container } from "@arismile/ui";
import { ArrowRight, ChevronRight, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { FaqItem, IconItem, ImageAsset, ServiceContent, SiteContent } from "../types";
import { servicePath } from "../utils";
import { ButtonLink, Section, SectionIntro } from "./primitives";

/* ----------------------------------------------------------------- Heroes */

export function HomeHero({ site }: { site: SiteContent }) {
  const { hero } = site;
  const image = site.images.hero;
  const copy = (
    <>
      <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.25em] text-highlight">{hero.eyebrow}</p>
      <h1 className="font-display text-4xl font-semibold leading-[1.08] md:text-6xl lg:text-[68px]">{hero.title}</h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed opacity-85">{hero.text}</p>
      <div className="mt-10 flex flex-wrap gap-4">
        <ButtonLink href="/services" arrow>
          Our services
        </ButtonLink>
        <ButtonLink href="/contact" variant="outline">
          Talk to us
        </ButtonLink>
      </div>
    </>
  );

  if (hero.variant === "fullbleed") {
    return (
      <section className="relative isolate overflow-hidden bg-band text-on-band">
        <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="-z-20 object-cover" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-band via-band/85 to-band/25" />
        <Container className="py-28 md:py-40 lg:py-48">
          <div className="max-w-2xl">{copy}</div>
        </Container>
      </section>
    );
  }

  return (
    <section className="overflow-hidden bg-band text-on-band">
      <Container className="grid items-center gap-14 py-20 md:grid-cols-2 lg:py-28">
        <div>{copy}</div>
        <div className="relative mx-auto w-full max-w-xl">
          <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-(--radius) border-2 border-highlight" />
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="relative aspect-[4/3] w-full rounded-(--radius) object-cover"
          />
        </div>
      </Container>
    </section>
  );
}

interface Crumb {
  label: string;
  href?: string;
}

export function PageHero({
  site,
  eyebrow,
  title,
  intro,
  breadcrumbs = [],
  crumb,
  image,
}: {
  site: SiteContent;
  eyebrow: string;
  title: string;
  intro?: string;
  breadcrumbs?: Crumb[];
  /** Short label for this page in the breadcrumb (defaults to the title). */
  crumb?: string;
  image?: ImageAsset;
}) {
  const bg = image ?? site.images.banner ?? site.images.hero;
  const crumbs: Crumb[] = [{ label: "Home", href: "/" }, ...breadcrumbs, { label: crumb ?? title }];
  return (
    <section className="relative isolate overflow-hidden bg-band text-on-band">
      <Image src={bg.src} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-band/85" />
      <Container className="py-20 md:py-28">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-[13px] uppercase tracking-wide opacity-80">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-1.5">
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
        <p className="mt-8 text-[13px] font-semibold uppercase tracking-[0.25em] text-highlight">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
        {intro ? <p className="mt-6 max-w-2xl text-lg leading-relaxed opacity-85">{intro}</p> : null}
      </Container>
    </section>
  );
}

/* --------------------------------------------------------------- Services */

export function ServiceCard({ service, index }: { service: ServiceContent; index: number }) {
  const Icon = service.icon;
  return (
    <article className="group relative flex h-full flex-col rounded-(--radius) border border-fg/10 bg-bg p-8 transition-colors hover:border-accent">
      <div className="flex items-center justify-between">
        <span className="inline-flex size-12 items-center justify-center rounded-(--radius) bg-primary text-on-primary">
          <Icon aria-hidden className="size-6" strokeWidth={1.75} />
        </span>
        <span aria-hidden className="font-display text-3xl font-semibold text-fg/15">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-6 text-xl font-semibold leading-snug">
        <Link href={servicePath(service.slug)} className="after:absolute after:inset-0 after:rounded-(--radius)">
          {service.title}
        </Link>
      </h3>
      <p className="mt-3 leading-relaxed opacity-80">{service.description}</p>
      <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold uppercase tracking-wide text-accent">
        Learn more
        <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </article>
  );
}

export function ServicesGrid({ services, limit }: { services: ServiceContent[]; limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((service, i) => (
        <li key={service.slug}>
          <ServiceCard service={service} index={i} />
        </li>
      ))}
    </ul>
  );
}

/* ----------------------------------------------------------- Icon features */

export function FeatureGrid({ items, columns = 4 }: { items: IconItem[]; columns?: 3 | 4 }) {
  return (
    <ul className={cn("grid gap-6 sm:grid-cols-2", columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3")}>
      {items.map(({ icon: Icon, title, body }) => (
        <li key={title} className="rounded-(--radius) bg-surface p-7 text-fg">
          <Icon aria-hidden className="size-8 text-accent" strokeWidth={1.5} />
          <h3 className="mt-5 text-lg font-semibold leading-snug">{title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed opacity-80">{body}</p>
        </li>
      ))}
    </ul>
  );
}

/* ---------------------------------------------------------------- Process */

export function ProcessSteps({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <li key={step.title} className="relative border-t-2 border-on-band/20 pt-6">
          <span aria-hidden className="absolute -top-px left-0 h-0.5 w-12 bg-highlight" />
          <p className="font-display text-4xl font-semibold text-highlight">{String(i + 1).padStart(2, "0")}</p>
          <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed opacity-80">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

/* --------------------------------------------------------- Values / groups */

export function ValuesGrid({ items }: { items: ContentBlock[] }) {
  const cols = items.length === 2 || items.length === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  return (
    <ul className={cn("grid gap-6 sm:grid-cols-2", cols)}>
      {items.map((item) => (
        <li key={item.title} className="rounded-(--radius) border-l-4 border-primary bg-surface p-8 text-fg">
          <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
          <p className="mt-4 leading-relaxed opacity-85">{item.body}</p>
        </li>
      ))}
    </ul>
  );
}

export function GroupSection({ group, index }: { group: ContentGroup; index: number }) {
  const id = `group-${index}-heading`;
  const count = group.items.length;
  const cols = count === 4 ? "lg:grid-cols-4" : count === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  return (
    <Section tone={index % 2 === 0 ? "bg" : "surface"} labelledBy={id}>
      <Container>
        <SectionIntro id={id} eyebrow="How we work" title={group.heading} intro={group.intro} />
        <ol className={cn("mt-14 grid gap-6 sm:grid-cols-2", cols)}>
          {group.items.map((item, i) => (
            <li
              key={item.title}
              className={cn("rounded-(--radius) border-t-4 border-primary p-7", index % 2 === 0 ? "bg-surface" : "bg-bg")}
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-accent">
                {item.label ?? String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg font-semibold leading-snug">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed opacity-80">{item.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------- CTA */

export function CtaBand({ site }: { site: SiteContent }) {
  return (
    <section className="bg-bg py-20 text-fg lg:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-(--radius) bg-primary px-8 py-14 text-on-primary sm:px-14 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div aria-hidden className="absolute -right-24 -top-24 size-72 rounded-full border-[40px] border-on-primary/10" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">{site.cta.title}</h2>
            <p className="mt-4 text-lg leading-relaxed opacity-85">{site.cta.text}</p>
          </div>
          <Link
            href="/contact"
            className="group relative mt-8 inline-flex items-center gap-2 rounded-(--radius) bg-on-primary px-7 py-3.5 font-semibold text-primary transition-opacity hover:opacity-90 lg:mt-0 lg:shrink-0"
          >
            Contact us
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------- FAQ */

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-fg/10 border-y border-fg/10">
      {items.map((item) => (
        <details key={item.q} className="group py-5 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left text-lg font-semibold">
            {item.q}
            <Plus aria-hidden className="mt-1 size-5 shrink-0 text-accent transition-transform group-open:rotate-45" />
          </summary>
          <p className="mt-4 max-w-3xl leading-relaxed opacity-80">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
