import { group } from "@arismile/brand";
import { Container } from "@arismile/ui";
import { holdingsUrl, subsidiary, summary } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="bg-surface">
        <Container className="py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">{subsidiary.industry}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-6xl">{subsidiary.tagline}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">{summary}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${group.email}?subject=${encodeURIComponent(`${subsidiary.legalName} enquiry`)}`}
              className="inline-flex items-center rounded-full bg-primary px-7 py-3 font-semibold text-white transition-opacity hover:opacity-90"
            >
              Contact us
            </a>
            <a
              href={`${holdingsUrl}${subsidiary.holdingsPath}`}
              className="inline-flex items-center rounded-full border border-ink/20 px-7 py-3 font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              View services on Arismile Holdings
            </a>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          <div className="rounded-2xl border border-dashed border-ink/20 p-8 text-ink/70">
            <h2 className="font-display text-2xl text-ink">Full website coming soon</h2>
            <p className="mt-3 max-w-2xl">
              This is the starting scaffold for the {subsidiary.legalName} website. Its own pages and design system
              will be built here, independently of the Arismile Holdings site.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
