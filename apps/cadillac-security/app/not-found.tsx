import { Container } from "@arismile/ui";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-surface py-28 text-fg">
      <Container className="text-center">
        <p className="text-[13px] font-semibold uppercase tracking-[0.25em] text-accent">Error 404</p>
        <h1 className="mt-3 font-display text-4xl font-semibold">Page not found</h1>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-(--radius) bg-primary px-7 py-3.5 font-semibold text-on-primary hover:opacity-90"
        >
          Back to home
        </Link>
      </Container>
    </section>
  );
}
