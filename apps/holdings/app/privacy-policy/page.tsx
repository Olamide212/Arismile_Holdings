import { group } from "@arismile/brand";
import { Container } from "@arismile/ui";
import type { Metadata } from "next";
import { PageBanner } from "@/components/shared/PageBanner";
import { reveal } from "@/lib/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Arismile Holdings collects, uses and protects personal information.",
  alternates: { canonical: "/privacy-policy" },
};

/** Text from arismile.ng/privacy-policy. */
export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner title="Privacy Policy" eyebrow="Arismile Holdings Ltd." />
      <section className="bg-light py-16 lg:py-20">
        <Container>
          <div {...reveal("up")} className="mx-auto max-w-3xl space-y-8 bg-white p-6 text-[15px] leading-[1.8] text-black sm:p-10 [&_h2]:mb-2 [&_h2]:text-[18px] [&_h2]:font-bold [&_h2]:uppercase [&_h2]:tracking-wide">
            <p>
              <strong>Arismile Holdings</strong> (“we,” “our,” or “us”) respects your privacy and is committed to
              protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard
              your data when you interact with our website and services.
            </p>
            <div>
              <h2>Information We Collect</h2>
              <p>
                When you use our website or contact us, we may collect personal information such as your name, email
                address, and any details you provide through forms or correspondence. We also collect usage data,
                including information about your interactions with our website, such as IP address, browser type,
                pages visited, and time spent on the site. Additionally, we use cookies and tracking technologies to
                improve your experience, analyze traffic, and enhance our services.
              </p>
            </div>
            <div className="space-y-3">
              <h2>How We Use and Share Data</h2>
              <p>
                We use the data we collect to respond to inquiries, provide customer support, improve and optimize our
                website and services, send updates, newsletters, or promotional content with your consent, and comply
                with legal requirements.
              </p>
              <p>
                We do not sell or rent your personal information. However, we may share data with service providers,
                such as third-party vendors who help us operate our website or provide services like hosting and email
                platforms. We may also share information if required by law or to protect our legal rights.
              </p>
            </div>
            <div className="space-y-3">
              <h2>Your Rights and Data Security</h2>
              <p>
                You have the right to access the personal data we hold about you, request corrections to inaccurate or
                incomplete information, opt out of marketing communications, and request the deletion of your data,
                subject to legal obligations. To exercise these rights, please contact us at{" "}
                <a href={`mailto:${group.email}`} className="font-semibold text-brand-green underline">
                  {group.email}
                </a>
                .
              </p>
              <p>
                We take reasonable measures to protect your personal data from unauthorized access or disclosure.
                However, no online system is completely secure, and we cannot guarantee absolute protection. Our
                website may contain links to external websites. We are not responsible for their privacy practices and
                encourage you to review their policies.
              </p>
            </div>
            <div>
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy to reflect changes in our practices or legal requirements. Please
                check this page periodically for updates.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
