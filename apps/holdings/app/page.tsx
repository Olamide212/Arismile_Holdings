import { group } from "@arismile/brand";
import type { Metadata } from "next";
import { AboutSection } from "@/components/home/AboutSection";
import { CompetenceSection } from "@/components/home/CompetenceSection";
import { HeroSlider, type HeroSlide } from "@/components/home/HeroSlider";
import { PartnersSection } from "@/components/home/PartnersSection";
import { DiscoverMore } from "@/components/shared/DiscoverMore";
import { SubsidiariesSection } from "@/components/subsidiaries/SubsidiariesSection";
import { subsidiaryContent } from "@/lib/content/subsidiaries";
import { siteDescription, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const heroSlides: HeroSlide[] = subsidiaryContent.map((s) => ({
  id: s.slug,
  eyebrow: s.industry,
  title: s.cardName,
  text: s.tagline,
  // "Explore Services" is the hero CTA configured for every subsidiary on arismile.ng.
  cta: { label: "Explore Services", href: s.holdingsPath },
  image: s.heroImage,
}));

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: group.name,
  url: siteUrl,
  logo: `${siteUrl}/images/logo/arismile-logo.png`,
  description: siteDescription,
  email: group.email,
  telephone: group.phone.href.replace("tel:", ""),
  sameAs: group.socials.map((s) => s.href),
  subOrganization: subsidiaryContent.map((s) => ({
    "@type": "Organization",
    name: s.legalName,
    url: `${siteUrl}${s.holdingsPath}`,
  })),
};

export default function HomePage() {
  return (
    <>
      <h1 className="sr-only">Arismile Holdings — Power, Oil &amp; Gas, Mining and Infrastructure</h1>
      <HeroSlider slides={heroSlides} />
      <AboutSection />
      <SubsidiariesSection items={subsidiaryContent} layout="carousel" />
      <CompetenceSection />
      <PartnersSection />
      <DiscoverMore />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
    </>
  );
}
