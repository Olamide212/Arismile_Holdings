import { Container } from "@arismile/ui";
import type { Metadata } from "next";
import { AboutSection } from "@/components/home/AboutSection";
import { CompetenceSection } from "@/components/home/CompetenceSection";
import { DiscoverMore } from "@/components/shared/DiscoverMore";
import { PageBanner } from "@/components/shared/PageBanner";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutPage } from "@/lib/content/company";
import { reveal } from "@/lib/reveal";

export const metadata: Metadata = {
  title: "About Us",
  description: aboutPage.profile[0],
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" eyebrow="Who We Are" image={{ src: aboutPage.banner.src }} />

      <AboutSection showReadMore={false}>
        <p>{aboutPage.expansion}</p>
      </AboutSection>

      <section aria-labelledby="profile-heading" className="bg-light py-16 lg:py-20">
        <Container>
          <SectionHeading id="profile-heading">Corporate Profile</SectionHeading>
          <div className="mt-2 grid gap-10 lg:grid-cols-2">
            <div {...reveal("left")} className="space-y-4 md:text-justify text-[15px] leading-[1.8] text-black">
              {aboutPage.profile.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <div {...reveal("right", 150)} className="space-y-4 bg-white p-[25px] text-[15px] leading-[1.8] text-black">
              <h3 className="text-[17px] font-bold uppercase">Our Commitment</h3>
              <p>{aboutPage.mission}</p>
              <h3 className="pt-2 text-[17px] font-bold uppercase">Our Strategy</h3>
              <p>{aboutPage.strategy}</p>
            </div>
          </div>
          <div {...reveal("up")} className="mt-10 flex flex-wrap gap-4">
            <CtaButton href="/subsidiaries">Our Subsidiaries</CtaButton>
            <CtaButton href="/our-team">Meet Our Team</CtaButton>
          </div>
        </Container>
      </section>

      <CompetenceSection />
      <DiscoverMore />
    </>
  );
}
