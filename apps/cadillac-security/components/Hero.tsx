import { Container } from "@arismile/ui";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { brand, profile } from "@/lib/site";

function HeroCopy() {
  return (
    <>
      <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.25em] text-accent">{brand.heroEyebrow}</p>
      <h1 className="font-display text-4xl font-semibold leading-[1.1] md:text-5xl lg:text-6xl">{brand.heroTitle}</h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed opacity-80">{profile.summary}</p>
      <div className="mt-9 flex flex-wrap gap-4">
        <a
          href="#services"
          className="group inline-flex items-center gap-2 rounded-(--radius) bg-primary px-7 py-3.5 font-semibold text-on-primary transition-opacity hover:opacity-90"
        >
          Explore our services
          <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center rounded-(--radius) border border-current/30 px-7 py-3.5 font-semibold transition-colors hover:border-accent hover:text-accent"
        >
          Contact us
        </a>
      </div>
    </>
  );
}

/** "split": copy beside a framed image. "fullbleed": copy over a darkened photo. */
export function Hero() {
  const { heroImage } = brand;

  if (brand.heroVariant === "fullbleed") {
    return (
      <section className="relative isolate overflow-hidden bg-band text-on-band">
        <Image src={heroImage.src} alt={heroImage.alt} fill priority sizes="100vw" className="-z-20 object-cover object-center" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-band via-band/85 to-band/30" />
        <Container className="py-28 md:py-40 lg:py-48">
          <div className="max-w-2xl">
            <HeroCopy />
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="overflow-hidden bg-surface text-fg">
      <Container className="grid items-center gap-14 py-16 md:grid-cols-2 lg:py-24">
        <div>
          <HeroCopy />
        </div>
        <div className="relative mx-auto w-full max-w-xl">
          <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-(--radius) border-2 border-highlight" />
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            width={heroImage.width}
            height={heroImage.height}
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="relative aspect-[4/3] w-full rounded-(--radius) object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
