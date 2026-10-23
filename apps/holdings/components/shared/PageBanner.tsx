import { Container } from "@arismile/ui";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { sectionImages } from "@/lib/content/company";

interface Crumb {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  image?: { src: string; alt?: string };
  breadcrumbs?: Crumb[];
  /** Buttons shown under the subtitle. */
  actions?: ReactNode;
}

/** Inner-page header band: dark image overlay under the transparent header, as the hero does. */
export function PageBanner({ title, eyebrow, subtitle, image, breadcrumbs = [], actions }: PageBannerProps) {
  const crumbs: Crumb[] = [{ label: "Home", href: "/" }, ...breadcrumbs, { label: title }];
  return (
    <section className="relative isolate overflow-hidden bg-charcoal text-white">
      <Image
        src={image?.src ?? sectionImages.pageBanner}
        alt={image?.alt ?? ""}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[rgb(3_4_16/0.62)]" />

      <Container className="banner-in pb-14 pt-36 md:pb-20 md:pt-44 lg:pt-52">
        {eyebrow ? (
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.25em] text-brand-yellow">{eyebrow}</p>
        ) : null}
        <h1 className="text-[32px] font-bold uppercase leading-tight md:text-5xl">{title}</h1>
        {subtitle ? <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">{subtitle}</p> : null}
        {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
        <nav aria-label="Breadcrumb" className="mt-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-[13px] uppercase tracking-wide text-white/80">
            {crumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-1.5">
                {i > 0 ? <ChevronRight aria-hidden className="size-3.5 text-brand-yellow" /> : null}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-brand-yellow">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-white">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </Container>
    </section>
  );
}
