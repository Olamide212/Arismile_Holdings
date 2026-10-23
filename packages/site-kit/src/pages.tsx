import { group } from "@arismile/brand";
import { Container } from "@arismile/ui";
import { ArrowUpRight, Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata, MetadataRoute } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "./components/ContactForm";
import { ButtonLink, Section, SectionIntro } from "./components/primitives";
import {
  CtaBand,
  FaqList,
  FeatureGrid,
  GroupSection,
  HomeHero,
  PageHero,
  ProcessSteps,
  ServicesGrid,
  ValuesGrid,
} from "./components/sections";
import type { SiteContent } from "./types";
import { reveal, stagger } from "./reveal";
import { contactOptions, servicePath, siteEmail, siteGroups, siteValues } from "./utils";

/* ------------------------------------------------------------------- Home */

export function HomePage({ site }: { site: SiteContent }) {
  const about = site.images.about;
  return (
    <>
      <HomeHero site={site} />

      <Section labelledBy="intro-heading">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionIntro id="intro-heading" eyebrow={`About ${site.name}`} title={site.about.title} />
            <p {...reveal("up", 100)} className="mt-8 text-[17px] leading-[1.8] opacity-85">
              {site.profile.intro[0]}
            </p>
            <ButtonLink href="/about" variant="outline" arrow className="mt-9">
              More about us
            </ButtonLink>
          </div>
          <div {...reveal("right", 150)}>
            {about ? (
              <Image
                src={about.src}
                alt={about.alt}
                width={about.width}
                height={about.height}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="aspect-[4/3] w-full rounded-(--radius) object-cover"
              />
            ) : (
              <LogoPanel site={site} />
            )}
          </div>
        </Container>
      </Section>

      <Section tone="surface" labelledBy="services-heading">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionIntro id="services-heading" eyebrow="What we do" title={site.services.title} intro={site.services.intro} />
            <ButtonLink href="/services" variant="outline" arrow>
              All services
            </ButtonLink>
          </div>
          <div className="mt-14">
            <ServicesGrid services={site.services.items} limit={6} />
          </div>
        </Container>
      </Section>

      <Section labelledBy="why-heading">
        <Container>
          <SectionIntro id="why-heading" eyebrow={`Why ${site.name}`} title={site.highlights.title} intro={site.highlights.intro} />
          <div className="mt-14">
            <FeatureGrid items={site.highlights.items} />
          </div>
        </Container>
      </Section>

      <Section tone="band" labelledBy="process-heading">
        <Container>
          <SectionIntro
            id="process-heading"
            eyebrow="How we work"
            eyebrowClassName="text-highlight"
            title={site.process.title}
            intro={site.process.intro}
          />
          <div className="mt-14">
            <ProcessSteps steps={site.process.steps} />
          </div>
        </Container>
      </Section>

      <Section labelledBy="industries-heading">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionIntro id="industries-heading" eyebrow="Who we serve" title={site.industries.title} />
            <ButtonLink href="/industries" variant="outline" arrow>
              Industries
            </ButtonLink>
          </div>
          <div className="mt-14">
            <FeatureGrid items={site.industries.items.slice(0, 4)} />
          </div>
        </Container>
      </Section>

      <CtaBand site={site} />
    </>
  );
}

function LogoPanel({ site }: { site: SiteContent }) {
  return (
    <div className="flex aspect-[4/3] items-center justify-center rounded-(--radius) bg-surface p-12">
      <Image src={site.logo.src} alt={site.logo.alt} width={site.logo.width} height={site.logo.height} className="max-h-52 w-auto" />
    </div>
  );
}

/* ------------------------------------------------------------------ About */

export function AboutPage({ site }: { site: SiteContent }) {
  const story = site.about.story ?? site.profile.intro;
  const values = siteValues(site);
  const groups = siteGroups(site);
  const about = site.images.about;
  return (
    <>
      <PageHero site={site} eyebrow={`About ${site.name}`} title={site.about.title} intro={site.profile.summary} crumb="About" />

      <Section labelledBy="story-heading">
        <Container className="grid gap-14 lg:grid-cols-[5fr_7fr]">
          <div {...reveal("left")} className="lg:sticky lg:top-28 lg:self-start">
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
            <SectionIntro id="story-heading" eyebrow="Our story" title={site.record.legalName} />
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
        <Section tone="surface" labelledBy="values-heading">
          <Container>
            <SectionIntro id="values-heading" eyebrow="What drives us" title="Mission, vision and values" />
            <div className="mt-14">
              <ValuesGrid items={values} />
            </div>
          </Container>
        </Section>
      ) : null}

      <Section tone="band" labelledBy="process-heading">
        <Container>
          <SectionIntro id="process-heading" eyebrow="How we work" eyebrowClassName="text-highlight" title={site.process.title} intro={site.process.intro} />
          <div className="mt-14">
            <ProcessSteps steps={site.process.steps} />
          </div>
        </Container>
      </Section>

      {groups.map((g, i) => (
        <GroupSection key={g.heading} group={g} index={i} />
      ))}

      <Section tone={groups.length % 2 === 0 ? "bg" : "surface"} labelledBy="why-heading">
        <Container>
          <SectionIntro id="why-heading" eyebrow={`Why ${site.name}`} title={site.highlights.title} intro={site.highlights.intro} />
          <div className="mt-14">
            <FeatureGrid items={site.highlights.items} />
          </div>
        </Container>
      </Section>

      <CtaBand site={site} />
    </>
  );
}

/* --------------------------------------------------------------- Services */

export function ServicesPage({ site }: { site: SiteContent }) {
  return (
    <>
      <PageHero site={site} eyebrow="What we do" title="Our Services" intro={site.services.intro} />
      <Section tone="surface" labelledBy="all-services">
        <Container>
          <h2 id="all-services" className="sr-only">
            All services
          </h2>
          <ServicesGrid services={site.services.items} />
        </Container>
      </Section>
      <Section tone="band" labelledBy="process-heading">
        <Container>
          <SectionIntro id="process-heading" eyebrow="How we work" eyebrowClassName="text-highlight" title={site.process.title} intro={site.process.intro} />
          <div className="mt-14">
            <ProcessSteps steps={site.process.steps} />
          </div>
        </Container>
      </Section>
      <CtaBand site={site} />
    </>
  );
}

export function serviceStaticParams(site: SiteContent) {
  return site.services.items.map((s) => ({ slug: s.slug }));
}

export function ServiceDetailPage({ site, slug }: { site: SiteContent; slug: string }) {
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
        breadcrumbs={[{ label: "Services", href: "/services" }]}
      />

      <Section labelledBy="overview-heading">
        <Container className="grid gap-14 lg:grid-cols-[7fr_5fr]">
          <div>
            <SectionIntro id="overview-heading" eyebrow="Overview" title={`How ${site.name} delivers`} />
            <div {...reveal("up", 100)} className="mt-8 space-y-5 text-[17px] leading-[1.8] opacity-85">
              {service.overview.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </div>
          <aside {...reveal("right", 150)} className="self-start rounded-(--radius) bg-surface p-8 lg:sticky lg:top-28">
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

      <Section tone="band" labelledBy="process-heading">
        <Container>
          <SectionIntro id="process-heading" eyebrow="Our process" eyebrowClassName="text-highlight" title={site.process.title} />
          <div className="mt-14">
            <ProcessSteps steps={site.process.steps} />
          </div>
        </Container>
      </Section>

      {others.length ? (
        <Section tone="surface" labelledBy="related-heading">
          <Container>
            <SectionIntro id="related-heading" eyebrow="Explore more" title="Related services" />
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((s) => {
                const OtherIcon = s.icon;
                return (
                  <li key={s.slug} {...reveal("up", stagger(others.indexOf(s)))}>
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

      <CtaBand site={site} />
    </>
  );
}

/* ------------------------------------------------------------- Industries */

export function IndustriesPage({ site }: { site: SiteContent }) {
  return (
    <>
      <PageHero site={site} eyebrow="Who we serve" title={site.industries.title} intro={site.industries.intro} crumb="Industries" />
      <Section labelledBy="industries-list">
        <Container>
          <h2 id="industries-list" className="sr-only">
            Industries
          </h2>
          <FeatureGrid items={site.industries.items} columns={3} />
        </Container>
      </Section>
      <Section tone="surface" labelledBy="services-heading">
        <Container>
          <SectionIntro id="services-heading" eyebrow="What we do" title={site.services.title} />
          <div className="mt-14">
            <ServicesGrid services={site.services.items} />
          </div>
        </Container>
      </Section>
      <CtaBand site={site} />
    </>
  );
}

/* ---------------------------------------------------------------- Contact */

export function ContactPage({ site }: { site: SiteContent }) {
  return (
    <>
      <PageHero site={site} eyebrow="Get in touch" title={site.contact.title} intro={site.contact.intro} crumb="Contact" />
      <Section tone="surface" labelledBy="form-heading">
        <Container className="grid gap-10 lg:grid-cols-[5fr_7fr]">
          <div {...reveal("left")} className="space-y-4">
            <InfoRow icon={<Phone className="size-5" />} title="Phone">
              <a href={group.phone.href} className="hover:text-accent">
                {group.phone.display}
              </a>
            </InfoRow>
            <InfoRow icon={<Mail className="size-5" />} title="Email">
              <a href={`mailto:${siteEmail(site)}`} className="break-all hover:text-accent">
                {siteEmail(site)}
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
            <p className="mb-8 mt-3 opacity-75">
              Tell us about your requirements and the right {site.name} team will respond.
            </p>
            <ContactForm
              companyName={site.record.legalName}
              services={contactOptions(site)}
              email={siteEmail(site)}
              phone={{ display: group.phone.display, href: group.phone.href }}
            />
          </div>
        </Container>
      </Section>
      <Section labelledBy="faq-heading">
        <Container className="grid gap-12 lg:grid-cols-[4fr_8fr]">
          <SectionIntro id="faq-heading" eyebrow="FAQ" title="Frequently asked questions" />
          <FaqList items={site.faqs} />
        </Container>
      </Section>
    </>
  );
}

function InfoRow({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
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

export function PrivacyPage({ site }: { site: SiteContent }) {
  const company = site.record.legalName;
  return (
    <>
      <PageHero site={site} eyebrow="Legal" title="Privacy Policy" />
      <Section labelledBy="privacy-heading">
        <Container>
          <div {...reveal("up")} className="mx-auto max-w-3xl space-y-8 text-[16px] leading-[1.8] [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold">
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
                <a href={`mailto:${siteEmail(site)}`} className="font-semibold text-accent underline">
                  {siteEmail(site)}
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

export function NotFoundPage({ site }: { site: SiteContent }) {
  return (
    <>
      <PageHero site={site} eyebrow="Error 404" title="Page not found" intro="The page you are looking for does not exist or has moved." />
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
