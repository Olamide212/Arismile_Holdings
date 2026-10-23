"use client";

import { cn, Container } from "@arismile/ui";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { CtaButton } from "@/components/ui/CtaButton";
import { ExternalLinkButton } from "@/components/ui/ExternalLinkButton";
import type { ImageAsset } from "@/lib/content/types";

export interface HeroSlide {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  cta: { label: string; href: string };
  /** External site, shown as a secondary button. */
  website?: string;
  image: ImageAsset;
}

interface HeroSliderProps {
  slides: HeroSlide[];
  intervalMs?: number;
  label?: string;
}

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(reducedMotionQuery);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(reducedMotionQuery).matches,
    () => false,
  );
}

/**
 * Full-width subsidiary carousel in the position of the original hero
 * (846px desktop / 488px mobile, rgba(3,4,16,.4) image overlay, white chevrons).
 */
export function HeroSlider({ slides, intervalMs = 6000, label = "Arismile Holdings subsidiaries" }: HeroSliderProps) {
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const touchStartX = useRef<number | null>(null);

  const autoplay = count > 1 && !userPaused && !hovered && !focusWithin && !reducedMotion;

  const goTo = useCallback((next: number) => setIndex(((next % count) + count) % count), [count]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (!autoplay) return;
    const timer = window.setTimeout(() => setIndex((i) => (i + 1) % count), intervalMs);
    return () => window.clearTimeout(timer);
  }, [autoplay, index, count, intervalMs]);

  if (count === 0) return null;

  return (
    <section
      aria-roledescription="carousel"
      aria-label={label}
      className="relative h-[488px] overflow-hidden bg-charcoal text-white md:h-[640px] lg:h-[846px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocusWithin(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocusWithin(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          next();
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          prev();
        }
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        const start = touchStartX.current;
        const end = event.changedTouches[0]?.clientX;
        touchStartX.current = null;
        if (start == null || end == null) return;
        const delta = end - start;
        if (Math.abs(delta) > 50) (delta < 0 ? next : prev)();
      }}
    >
      <div aria-live={autoplay ? "off" : "polite"} className="absolute inset-0">
        {slides.map((slide, i) => {
          const active = i === index;
          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}: ${slide.title}`}
              aria-hidden={!active}
              inert={!active}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                active ? "z-10 opacity-100" : "z-0 opacity-0",
              )}
            >
              <Image
                src={slide.image.src}
                alt={slide.image.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className={cn(
                  "object-cover transition-transform duration-[7000ms] ease-out",
                  active ? "scale-105" : "scale-100",
                )}
              />
              <div aria-hidden className="absolute inset-0 bg-hero-overlay" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30" />

              <div className="relative flex h-full items-center pt-16 lg:pt-20">
                <Container className="text-center">
                  <div
                    className={cn(
                      "mx-auto max-w-3xl transition-all delay-300 duration-700",
                      active ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
                    )}
                  >
                    <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.25em] text-brand-yellow md:text-sm">
                      {slide.eyebrow}
                    </p>
                    <h2 className="text-[30px] font-bold uppercase leading-tight md:text-5xl lg:text-[60px]">
                      {slide.title}
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 md:mt-5 md:text-xl">{slide.text}</p>
                    <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:mt-9 md:gap-4">
                      <CtaButton href={slide.cta.href}>
                        {slide.cta.label}
                        <span className="sr-only"> — {slide.title}</span>
                      </CtaButton>
                      {slide.website ? (
                        <ExternalLinkButton href={slide.website}>
                          Visit Website
                          <span className="sr-only"> of {slide.title}</span>
                        </ExternalLinkButton>
                      ) : null}
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          );
        })}
      </div>

      {count > 1 ? (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-1 top-1/2 z-20 inline-flex size-12 -translate-y-1/2 items-center justify-center text-white/80 transition-colors hover:text-brand-yellow md:left-4 lg:left-8"
          >
            <ChevronLeft aria-hidden className="size-9" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="absolute right-1 top-1/2 z-20 inline-flex size-12 -translate-y-1/2 items-center justify-center text-white/80 transition-colors hover:text-brand-yellow md:right-4 lg:right-8"
          >
            <ChevronRight aria-hidden className="size-9" strokeWidth={1.5} />
          </button>

          <div className="absolute inset-x-0 bottom-5 z-20 flex items-center justify-center gap-3 md:bottom-8">
            <ul className="flex items-center gap-1" aria-label="Choose slide">
              {slides.map((slide, i) => (
                <li key={slide.id}>
                  <button
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}: ${slide.title}`}
                    aria-current={i === index ? "true" : undefined}
                    className="group inline-flex h-6 items-center px-1"
                  >
                    <span
                      className={cn(
                        "block h-[3px] rounded-full transition-all",
                        i === index ? "w-9 bg-brand-yellow" : "w-5 bg-white/60 group-hover:bg-white",
                      )}
                    />
                  </button>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setUserPaused((p) => !p)}
              aria-label={userPaused ? "Start automatic slide show" : "Pause automatic slide show"}
              className="inline-flex size-8 items-center justify-center rounded-full border border-white/50 text-white transition-colors hover:border-brand-yellow hover:text-brand-yellow"
            >
              {userPaused ? <Play aria-hidden className="size-3.5" /> : <Pause aria-hidden className="size-3.5" />}
            </button>
          </div>
        </>
      ) : null}
    </section>
  );
}
