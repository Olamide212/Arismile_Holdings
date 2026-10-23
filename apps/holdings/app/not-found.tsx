import { Container } from "@arismile/ui";
import { PageBanner } from "@/components/shared/PageBanner";
import { CtaButton } from "@/components/ui/CtaButton";
import { reveal } from "@/lib/reveal";

export default function NotFound() {
  return (
    <>
      <PageBanner title="Page Not Found" eyebrow="Error 404" />
      <section className="bg-light py-16 lg:py-20">
        <Container className="text-center">
          <p {...reveal("up")} className="mx-auto max-w-xl text-[15px] leading-relaxed text-body">
            The page you are looking for may have moved when our website was rebuilt. Use the menu above, or return to
            the homepage.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CtaButton href="/">Back to Home</CtaButton>
            <CtaButton href="/contact">Contact Us</CtaButton>
          </div>
        </Container>
      </section>
    </>
  );
}
