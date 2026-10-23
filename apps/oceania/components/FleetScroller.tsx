"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";

/**
 * Horizontal scroller with a branded progress track (draggable thumb) and
 * arrow buttons in place of the browser's scrollbar. Native swipe, trackpad
 * and keyboard scrolling still work.
 */
export function FleetScroller({ children, label }: { children: ReactNode; label: string }) {
  const listRef = useRef<HTMLUListElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ startX: number; startScroll: number } | null>(null);
  const [state, setState] = useState({ ratio: 1, progress: 0, canPrev: false, canNext: false });

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setState({
        ratio: el.scrollWidth > 0 ? Math.min(1, el.clientWidth / el.scrollWidth) : 1,
        progress: max > 0 ? el.scrollLeft / max : 0,
        canPrev: el.scrollLeft > 2,
        canNext: el.scrollLeft < max - 2,
      });
    };
    const observer = new ResizeObserver(update); // also fires once on observe
    observer.observe(el);
    el.addEventListener("scroll", update, { passive: true });
    return () => {
      observer.disconnect();
      el.removeEventListener("scroll", update);
    };
  }, []);

  const behavior = (): ScrollBehavior =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

  function step(direction: 1 | -1) {
    const el = listRef.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    el.scrollBy({ left: direction * (card.offsetWidth + 24), behavior: behavior() });
  }

  function jumpTo(clientX: number) {
    const el = listRef.current;
    const track = trackRef.current;
    if (!el || !track) return;
    const rect = track.getBoundingClientRect();
    const fraction = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    el.scrollTo({ left: fraction * (el.scrollWidth - el.clientWidth), behavior: behavior() });
  }

  function onThumbDown(e: ReactPointerEvent<HTMLDivElement>) {
    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { startX: e.clientX, startScroll: listRef.current?.scrollLeft ?? 0 };
  }

  function onThumbMove(e: ReactPointerEvent<HTMLDivElement>) {
    const el = listRef.current;
    const track = trackRef.current;
    if (!drag.current || !el || !track) return;
    const max = el.scrollWidth - el.clientWidth;
    const travel = track.clientWidth * (1 - state.ratio);
    if (travel <= 0) return;
    el.scrollLeft = drag.current.startScroll + ((e.clientX - drag.current.startX) / travel) * max;
  }

  const arrow =
    "inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-fg/15 bg-bg text-accent transition-colors hover:border-primary hover:bg-primary hover:text-on-primary disabled:pointer-events-none disabled:opacity-35";

  return (
    <div>
      <ul
        ref={listRef}
        aria-label={label}
        className="flex snap-x snap-mandatory scroll-px-4 gap-6 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:scroll-px-6 sm:px-6 lg:scroll-px-10 lg:px-10 [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>

      <div className="mt-6 flex items-center gap-5 px-4 sm:px-6 lg:px-10">
        <div
          ref={trackRef}
          aria-hidden
          onClick={(e) => jumpTo(e.clientX)}
          className="relative h-2 flex-1 cursor-pointer rounded-full bg-fg/10"
        >
          <div
            onPointerDown={onThumbDown}
            onPointerMove={onThumbMove}
            onPointerUp={() => (drag.current = null)}
            onPointerCancel={() => (drag.current = null)}
            className="absolute inset-y-0 cursor-grab touch-none rounded-full bg-gradient-to-r from-primary to-highlight active:cursor-grabbing"
            style={{ width: `${state.ratio * 100}%`, left: `${state.progress * (1 - state.ratio) * 100}%` }}
          />
        </div>
        <button type="button" onClick={() => step(-1)} disabled={!state.canPrev} aria-label="Previous services" className={arrow}>
          <ArrowLeft aria-hidden className="size-5" />
        </button>
        <button type="button" onClick={() => step(1)} disabled={!state.canNext} aria-label="Next services" className={arrow}>
          <ArrowRight aria-hidden className="size-5" />
        </button>
      </div>
    </div>
  );
}
