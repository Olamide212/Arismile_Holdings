"use client";

import { cn } from "@arismile/ui";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SubsidiaryCard } from "@/components/subsidiaries/SubsidiaryCard";
import { reveal, stagger } from "@/lib/reveal";

export interface SubsidiaryCarouselItem {
  slug: string;
  name: string;
  summary: string;
  href: string;
  website?: string;
}

interface SubsidiaryCarouselProps {
  items: SubsidiaryCarouselItem[];
  label: string;
}

const GAP = 10;

/**
 * Scroll-snap carousel of subsidiary cards: 4 per view on desktop, 2 on
 * tablet, 1 (with a peek of the next card) on mobile. Native scrolling keeps
 * swipe and trackpad gestures; arrows and dots move one view at a time.
 */
export function SubsidiaryCarousel({ items, label }: SubsidiaryCarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [state, setState] = useState({ page: 0, pageCount: 1, canPrev: false, canNext: false });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function update() {
      if (!track) return;
      const card = track.firstElementChild as HTMLElement | null;
      const pageWidth = track.clientWidth + GAP;
      const perView = card ? Math.max(1, Math.round(pageWidth / (card.offsetWidth + GAP))) : 1;
      const pageCount = Math.max(1, Math.ceil(items.length / perView));
      const maxScroll = track.scrollWidth - track.clientWidth;
      const canNext = track.scrollLeft < maxScroll - 2;
      const page = canNext ? Math.round(track.scrollLeft / pageWidth) : pageCount - 1;
      setState({ page, pageCount, canPrev: track.scrollLeft > 2, canNext });
    }

    // ResizeObserver also fires once on observe, which sets the initial state.
    const observer = new ResizeObserver(update);
    observer.observe(track);
    track.addEventListener("scroll", update, { passive: true });
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", update);
    };
  }, [items.length]);

  function scrollBehavior(): ScrollBehavior {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  }

  function scrollByPage(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * (track.clientWidth + GAP), behavior: scrollBehavior() });
  }

  function goToPage(page: number) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: page * (track.clientWidth + GAP), behavior: scrollBehavior() });
  }

  const arrowClass =
    "inline-flex size-11 items-center justify-center border border-white/60 text-white transition-colors hover:border-brand-yellow hover:bg-brand-yellow hover:text-ink disabled:pointer-events-none disabled:opacity-30";

  return (
    <div aria-roledescription="carousel" aria-label={label} className="mt-[30px]">
      <ul
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-2.5 overflow-x-auto scroll-smooth [scrollbar-width:none] motion-reduce:scroll-auto [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, i) => (
          <li
            key={item.slug}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${items.length}`}
            {...reveal("up", stagger(i))}
            className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-5px)] lg:w-[calc(25%-7.5px)]"
          >
            <SubsidiaryCard number={i + 1} name={item.name} summary={item.summary} href={item.href} website={item.website} />
          </li>
        ))}
      </ul>

      {state.pageCount > 1 || state.canNext ? (
        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => scrollByPage(-1)}
            disabled={!state.canPrev}
            aria-label="Previous subsidiaries"
            className={arrowClass}
          >
            <ChevronLeft aria-hidden className="size-5" />
          </button>
          <ul className="flex items-center gap-1" aria-label="Choose page">
            {Array.from({ length: state.pageCount }, (_, page) => (
              <li key={page}>
                <button
                  type="button"
                  onClick={() => goToPage(page)}
                  aria-label={`Show page ${page + 1} of ${state.pageCount}`}
                  aria-current={page === state.page ? "true" : undefined}
                  className="group inline-flex h-6 items-center px-1"
                >
                  <span
                    className={cn(
                      "block h-[3px] rounded-full transition-all",
                      page === state.page ? "w-9 bg-brand-yellow" : "w-5 bg-white/50 group-hover:bg-white",
                    )}
                  />
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => scrollByPage(1)}
            disabled={!state.canNext}
            aria-label="Next subsidiaries"
            className={arrowClass}
          >
            <ChevronRight aria-hidden className="size-5" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
