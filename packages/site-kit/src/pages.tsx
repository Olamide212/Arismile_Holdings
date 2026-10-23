import { group } from "@arismile/brand";
import { Container } from "@arismile/ui";
import { ArrowUpRight, Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata, MetadataRoute } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ContactForm } from "./components/ContactForm";
import { FaqList } from "./components/FaqList";
import { ButtonLink, Section } from "./components/primitives";
import { reveal, stagger } from "./reveal";
import type { Crumb, SiteContent, SiteUI } from "./types";
import { contactOptions, servicePath, siteEmail, siteGroups, siteValues } from "./utils";

/*
 * Inner-page templates. Layout-defining sections come from the site's own
 * `ui` slots; the shared blocks here are styled by the site's colour tokens.
 * Each site writes its own home page.
 */

interface PageProps {
  site: SiteContent;
  ui: SiteUI;
}

const home: Crumb = { label: "Home", href: "/" };

function LogoPanel({ site }: { site: SiteContent }) {
  return (
    <div className="flex aspect-[4/3] items-center justify-center rounded-(--radius) bg-surface p-12">
      <Image src={site.logo.src} alt={site.logo.alt} width={site.logo.width} height={site.logo.height} className="max-h-52 w-auto" />
    </div>
  );
}

/* ------------------------------------------------------------------ About */

export function AboutPage({ site, ui }: PageProps) {
  const { PageHero, Heading, ValuesSection, ProcessSection, FeaturesSection, CtaSection } = ui;
  const story = site.about.story ?? site.profile.intro;
  const values = siteValues(site);
  const groups = siteGroups(site);
  const about = site.images.about;
  return (
    <>
      <PageHero
        site={site}
        eyebrow={`About ${site.name}`}
        title={site.about.title}
        intro={site.profile.summary}
        crumbs={[home, { label: "About" }]}
      />

      <Section labelledBy="story-heading">
        <Container className="grid gap-14 lg:grid-cols-[5fr_7fr]">
          <div {...reveal("left")} className="lg:sticky lg:top-32 lg:self-start">
            {about ? (
              <Image
                src={about.src}
                alt={about.alt}
                width={about.width}
                height={about.height}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="aspect-[4/5] w-full rounded-(--radius) object-cover"
              />
            ) : (
              <LogoPanel site={site} />
            )}
          </div>
          <div>
            <Heading id="story-heading" eyebrow="Our story" title={site.record.legalName} />
            <div {...reveal("up", 100)} className="mt-8 space-y-5 text-[17px] leading-[1.8] opacity-85">
              {story.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
            <a
              href={`${site.holdingsUrl}${site.record.holdingsPath}`}
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-accent hover:underline"
            >
              A subsidiary of Arismile Holdings
              <ArrowUpRight aria-hidden className="size-4" />
            </a>
          </div>
        </Container>
      </Section>

      {values.length ? (
        <ValuesSection site={site} id="values" eyebrow="What drives us" title="Mission, vision and values" items={values} />
      ) : null}
      <ProcessSection
        site={site}
        id="process"
        eyebrow="How we work"
        title={site.process.title}
        intro={site.process.intro}
        steps={site.process.steps}
      />
      {groups.map((g, i) => (
        <ValuesSection key={g.heading} site={site} id={`group-${i}`} eyebrow="How we work" title={g.heading} intro={g.intro} items={g.items} />
      ))}
      <FeaturesSection
        site={site}
        id="why"
        eyebrow={`Why ${site.name}`}
        title={site.highlights.title}
        intro={site.highlights.intro}
        items={site.highlights.items}
      />
      <CtaSection site={site} />
    </>
  );
}

/* --------------------------------------------------------------- Services */

export function ServicesPage({ site, ui }: PageProps) {
  const { PageHero, ServicesSection, ProcessSection, CtaSection } = ui;
  return (
    <>
      <PageHero site={site} eyebrow="What we do" title="Our Services" intro={site.services.intro} crumbs={[home, { label: "Services" }]} />
      <ServicesSection site={site} id="services" eyebrow="Services" title={site.services.title} services={site.services.items} />
      <ProcessSection
        site={site}
        id="process"
        eyebrow="How we work"
        title={site.process.title}
        intro={site.process.intro}
        steps={site.process.steps}
      />
      <CtaSection site={site} />
    </>
  );
}

export function serviceStaticParams(site: SiteContent) {
  return site.services.items.map((s) => ({ slug: s.slug }));
}

export function ServiceDetailPage({ site, ui, slug }: PageProps & { slug: string }) {
  const { PageHero, Heading, ProcessSection, CtaSection } = ui;
  const index = site.services.items.findIndex((s) => s.slug === slug);
  const service = site.services.items[index];
  if (!service) notFound();
  const Icon = service.icon;
  const others = site.services.items.filter((s) => s.slug !== slug);

  return (
    <>
      <PageHero
        site={site}
        eyebrow={`Service ${String(index + 1).padStart(2, "0")}`}
        title={service.title}
        intro={service.description}
        crumbs={[home, { label: "Services", href: "/services" }, { label: service.title }]}
      />

      <Section labelledBy="overview-heading">
        <Container className="grid gap-14 lg:grid-cols-[7fr_5fr]">
          <div>
            <Heading id="overview-heading" eyebrow="Overview" title={`How ${site.name} delivers`} />
            <div {...reveal("up", 100)} className="mt-8 space-y-5 text-[17px] leading-[1.8] opacity-85">
              {service.overview.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </div>
          <aside {...reveal("right", 150)} className="self-start rounded-(--radius) bg-surface p-8 lg:sticky lg:top-32">
            <span className="inline-flex size-12 items-center justify-center rounded-(--radius) bg-primary text-on-primary">
              <Icon aria-hidden className="size-6" strokeWidth={1.75} />
            </span>
            <h2 className="mt-6 text-xl font-semibold">What’s included</h2>
            <ul className="mt-5 space-y-3">
              {service.deliverables.map((d) => (
                <li key={d} className="flex gap-3 leading-relaxed">
                  <Check aria-hidden className="mt-1 size-4 shrink-0 text-accent" />
                  <span className="opacity-85">{d}</span>
                </li>
              ))}
            </ul>
            <ButtonLink href="/contact" arrow className="mt-8 w-full">
              Discuss this service
            </ButtonLink>
          </aside>
        </Container>
      </Section>

      <ProcessSection site={site} id="process" eyebrow="Our process" title={site.process.title} steps={site.process.steps} />

      {others.length ? (
        <Section tone="surface" labelledBy="related-heading">
          <Container>
            <Heading id="related-heading" eyebrow="Explore more" title="Related services" />
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((s, i) => {
                const OtherIcon = s.icon;
                return (
                  <li key={s.slug} {...reveal("up", stagger(i))}>
                    <Link
                      href={servicePath(s.slug)}
                      className="group flex h-full items-center gap-4 rounded-(--radius) border border-fg/10 bg-bg p-5 transition-colors hover:border-accent"
                    >
                      <OtherIcon aria-hidden className="size-6 shrink-0 text-accent" strokeWidth={1.75} />
                      <span className="font-semibold leading-snug group-hover:text-accent">{s.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Container>
        </Section>
      ) : null}

      <CtaSection site={site} />
    </>
  );
}

/* ------------------------------------------------------------- Industries */

export function IndustriesPage({ site, ui }: PageProps) {
  const { PageHero, FeaturesSection, ServicesSection, CtaSection } = ui;
  return (
    <>
      <PageHero
        site={site}
        eyebrow="Who we serve"
        title={site.industries.title}
        intro={site.industries.intro}
        crumbs={[home, { label: "Industries" }]}
      />
      <FeaturesSection site={site} id="industries" eyebrow="Sectors" title={site.industries.title} items={site.industries.items} />
      <ServicesSection
        site={site}
        id="services"
        eyebrow="What we do"
        title={site.services.title}
        intro={site.services.intro}
        services={site.services.items}
      />
      <CtaSection site={site} />
    </>
  );
}

/* ---------------------------------------------------------------- Contact */

export function ContactPage({ site, ui }: PageProps) {
  const { PageHero, Heading } = ui;
  const email = siteEmail(site);
  return (
    <>
      <PageHero site={site} eyebrow="Get in touch" title={site.contact.title} intro={site.contact.intro} crumbs={[home, { label: "Contact" }]} />
      <Section tone="surface" labelledBy="form-heading">
        <Container className="grid gap-10 lg:grid-cols-[5fr_7fr]">
          <div {...reveal("left")} className="space-y-4">
            <InfoRow icon={<Phone className="size-5" />} title="Phone">
              <a href={group.phone.href} className="hover:text-accent">
                {group.phone.display}
              </a>
            </InfoRow>
            <InfoRow icon={<Mail className="size-5" />} title="Email">
              <a href={`mailto:${email}`} className="break-all hover:text-accent">
                {email}
              </a>
            </InfoRow>
            <InfoRow icon={<Clock className="size-5" />} title="Working days">
              {group.workingHours}
            </InfoRow>
            {group.offices.map((office) => (
              <InfoRow key={office.label} icon={<MapPin className="size-5" />} title={office.label}>
                <address className="not-italic">
                  {office.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </InfoRow>
            ))}
          </div>
          <div {...reveal("right", 150)} className="self-start rounded-(--radius) bg-bg p-6 text-fg sm:p-10">
            <h2 id="form-heading" className="font-display text-3xl font-semibold">
              Send us a message
            </h2>
            <p className="mb-8 mt-3 opacity-75">Tell us about your requirements and the right {site.name} team will respond.</p>
            <ContactForm
              companyName={site.record.legalName}
              services={contactOptions(site)}
              email={email}
              phone={{ display: group.phone.display, href: group.phone.href }}
            />
          </div>
        </Container>
      </Section>
      <Section labelledBy="faq-heading">
        <Container className="grid gap-12 lg:grid-cols-[4fr_8fr]">
          <Heading id="faq-heading" eyebrow="FAQ" title="Frequently asked questions" />
          <FaqList items={site.faqs} />
        </Container>
      </Section>
    </>
  );
}

function InfoRow({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="flex gap-4 rounded-(--radius) bg-bg p-5 text-fg">
      <span aria-hidden className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary">
        {icon}
      </span>
      <div className="min-w-0 leading-relaxed">
        <h3 className="mb-1 text-[13px] font-semibold uppercase tracking-[0.15em] opacity-70">{title}</h3>
        {children}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- Privacy */

export function PrivacyPage({ site, ui }: PageProps) {
  const { PageHero } = ui;
  const company = site.record.legalName;
  const email = siteEmail(site);
  return (
    <>
      <PageHero site={site} eyebrow="Legal" title="Privacy Policy" crumbs={[home, { label: "Privacy Policy" }]} />
      <Section labelledBy="privacy-heading">
        <Container>
          <div
            {...reveal("up")}
            className="mx-auto max-w-3xl space-y-8 text-[16px] leading-[1.8] [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold"
          >
            <h2 id="privacy-heading" className="sr-only">
              Privacy policy
            </h2>
            <p>
              <strong>{company}</strong> (“we,” “our,” or “us”), a subsidiary of {group.name}, respects your privacy and
              is committed to protecting your personal information. This Privacy Policy explains how we collect, use,
              and safeguard your data when you interact with our website and services.
            </p>
            <div>
              <h2>Information we collect</h2>
              <p>
                When you use our website or contact us, we may collect personal information such as your name, email
                address, and any details you provide through forms or correspondence. We also collect usage data,
                including information about your interactions with our website, such as IP address, browser type,
                pages visited, and time spent on the site.
              </p>
            </div>
            <div className="space-y-3">
              <h2>How we use and share data</h2>
              <p>
                We use the data we collect to respond to inquiries, provide customer support, improve our website and
                services, send updates with your consent, and comply with legal requirements.
              </p>
              <p>
                We do not sell or rent your personal information. We may share data with service providers who help us
                operate our website or provide services such as hosting and email, with other companies in the
                Arismile group where needed to answer your enquiry, or where required by law.
              </p>
            </div>
            <div className="space-y-3">
              <h2>Your rights and data security</h2>
              <p>
                You have the right to access the personal data we hold about you, request corrections, opt out of
                marketing communications, and request deletion of your data, subject to legal obligations. To exercise
                these rights, contact us at{" "}
                <a href={`mailto:${email}`} className="font-semibold text-accent underline">
                  {email}
                </a>
                .
              </p>
              <p>
                We take reasonable measures to protect your personal data. However, no online system is completely
                secure. Our website may link to external websites whose privacy practices we are not responsible for.
              </p>
            </div>
            <div>
              <h2>Changes to this policy</h2>
              <p>We may update this Privacy Policy from time to time. Please check this page periodically for updates.</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

/* -------------------------------------------------------------- Not found */

export function NotFoundPage({ site, ui }: PageProps) {
  const { PageHero } = ui;
  return (
    <>
      <PageHero
        site={site}
        eyebrow="Error 404"
        title="Page not found"
        intro="The page you are looking for does not exist or has moved."
        crumbs={[home, { label: "Not found" }]}
      />
      <Section>
        <Container className="flex flex-wrap justify-center gap-4">
          <ButtonLink href="/" arrow>
            Back to home
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Contact us
          </ButtonLink>
        </Container>
      </Section>
    </>
  );
}

/* --------------------------------------------------------------- Metadata */

export function rootMetadata(site: SiteContent, themeTitle?: string): Metadata {
  return {
    metadataBase: new URL(site.siteUrl),
    title: {
      default: themeTitle ?? `${site.record.legalName} | ${site.record.tagline}`,
      template: `%s | ${site.record.legalName}`,
    },
    description: site.profile.summary,
    applicationName: site.record.legalName,
    openGraph: {
      type: "website",
      siteName: site.record.legalName,
      images: [{ url: site.images.hero.src, alt: site.images.hero.alt }],
    },
    twitter: { card: "summary_large_image" },
  };
}

export function pageMetadata(path: string, title: string | undefined, description: string): Metadata {
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: { url: path, description, ...(title ? { title } : {}) },
  };
}

export function serviceMetadata(site: SiteContent, slug: string): Metadata {
  const service = site.services.items.find((s) => s.slug === slug);
  if (!service) return {};
  return pageMetadata(servicePath(slug), service.title, service.description);
}

export function buildSitemap(site: SiteContent): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/services", "/industries", "/contact", "/privacy-policy", ...site.services.items.map((s) => servicePath(s.slug))];
  return paths.map((p) => ({ url: `${site.siteUrl}${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}

export function buildRobots(site: SiteContent): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }], sitemap: `${site.siteUrl}/sitemap.xml` };
}
