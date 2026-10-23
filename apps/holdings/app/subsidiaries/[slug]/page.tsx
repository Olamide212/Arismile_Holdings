import { displayDomain } from "@arismile/brand";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DiscoverMore } from "@/components/shared/DiscoverMore";
import { PageBanner } from "@/components/shared/PageBanner";
import {
  SubsidiaryGroup,
  SubsidiaryIntro,
  SubsidiaryList,
  SubsidiaryServices,
  SubsidiaryStatements,
} from "@/components/subsidiaries/SubsidiaryDetail";
import { SubsidiariesSection } from "@/components/subsidiaries/SubsidiariesSection";
import { ExternalLinkButton } from "@/components/ui/ExternalLinkButton";
import { getSubsidiaryContent, subsidiaryContent } from "@/lib/content/subsidiaries";

export const dynamicParams = false;

export function generateStaticParams() {
  return subsidiaryContent.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/subsidiaries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const subsidiary = getSubsidiaryContent(slug);
  if (!subsidiary) return {};
  return {
    title: subsidiary.legalName,
    description: subsidiary.summary,
    alternates: { canonical: subsidiary.holdingsPath },
    openGraph: {
      title: `${subsidiary.legalName} | Arismile Holdings`,
      description: subsidiary.summary,
      url: subsidiary.holdingsPath,
      images: [{ url: subsidiary.heroImage.src, alt: subsidiary.heroImage.alt }],
    },
  };
}

export default async function SubsidiaryPage({ params }: PageProps<"/subsidiaries/[slug]">) {
  const { slug } = await params;
  const subsidiary = getSubsidiaryContent(slug);
  if (!subsidiary) notFound();

  const others = subsidiaryContent.filter((s) => s.slug !== subsidiary.slug);

  return (
    <>
      <PageBanner
        title={subsidiary.cardName}
        eyebrow={subsidiary.industry}
        subtitle={subsidiary.tagline}
        image={{ src: subsidiary.heroImage.src, alt: subsidiary.heroImage.alt }}
        breadcrumbs={[{ label: "Subsidiaries", href: "/subsidiaries" }]}
        actions={
          subsidiary.website ? (
            <ExternalLinkButton href={subsidiary.website}>
              {/* Temporary hosting URLs (e.g. *.vercel.app) read better as "Visit Website". */}
              {displayDomain(subsidiary.website).endsWith(".vercel.app")
                ? "Visit Website"
                : `Visit ${displayDomain(subsidiary.website)}`}
            </ExternalLinkButton>
          ) : null
        }
      />
      <SubsidiaryIntro subsidiary={subsidiary} />
      <SubsidiaryServices subsidiary={subsidiary} />
      {subsidiary.statements?.length ? <SubsidiaryStatements items={subsidiary.statements} /> : null}
      {subsidiary.groups?.map((group, i) => (
        <SubsidiaryGroup key={group.heading} group={group} index={i} />
      ))}
      {subsidiary.lists?.map((list) => (
        <SubsidiaryList key={list.heading} heading={list.heading} items={list.items} />
      ))}
      <SubsidiariesSection
        id="other-subsidiaries"
        items={others}
        heading="Other Subsidiaries"
        intro="Explore the rest of the Arismile Holdings group."
      />
      <DiscoverMore />
    </>
  );
}
