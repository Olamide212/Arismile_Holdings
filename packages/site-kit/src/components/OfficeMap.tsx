"use client";

import type { Office } from "@arismile/brand";
import { cn } from "@arismile/ui";
import { ExternalLink, MapPin, Navigation } from "lucide-react";
import { useId, useRef, useState, type KeyboardEvent } from "react";

export const mapsSearchUrl = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
export const mapsDirectionsUrl = (query: string) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
const mapsEmbedUrl = (query: string) => `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=16&output=embed`;

/**
 * Office tabs with an embedded map and a "Get directions" link for the
 * selected office. Follows the WAI-ARIA tabs pattern (arrow keys, Home/End).
 */
export function OfficeMap({ offices }: { offices: readonly Office[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const office = offices[active];
  if (!office) return null;

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const last = offices.length - 1;
    const next =
      e.key === "ArrowRight" ? (active === last ? 0 : active + 1)
      : e.key === "ArrowLeft" ? (active === 0 ? last : active - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div>
      <div role="tablist" aria-label="Office locations" onKeyDown={onKeyDown} className="flex flex-wrap gap-2">
        {offices.map((o, i) => (
          <button
            key={o.label}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${baseId}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${baseId}-panel`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={cn(
              "inline-flex items-center gap-2 rounded-(--radius) border px-5 py-3 text-sm font-semibold transition-colors",
              i === active ? "border-primary bg-primary text-on-primary" : "border-fg/15 bg-bg text-fg/75 hover:border-accent hover:text-accent",
            )}
          >
            <MapPin aria-hidden className="size-4" />
            {o.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${active}`}
        className="mt-6 grid overflow-hidden rounded-(--radius) border border-fg/10 bg-bg text-fg lg:grid-cols-[1fr_2fr]"
      >
        <div className="flex flex-col p-7 sm:p-9">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-accent">{office.city}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold">{office.label}</h3>
          <address className="mt-4 not-italic leading-relaxed opacity-80">
            {office.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <div className="mt-8 flex flex-wrap gap-3 lg:mt-auto lg:pt-8">
            <a
              href={mapsDirectionsUrl(office.mapQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-(--radius) bg-primary px-5 py-3 text-sm font-semibold text-on-primary hover:opacity-90"
            >
              <Navigation aria-hidden className="size-4" />
              Get directions<span className="sr-only"> to {office.label} (opens Google Maps in a new tab)</span>
            </a>
            <a
              href={mapsSearchUrl(office.mapQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-(--radius) border border-fg/20 px-5 py-3 text-sm font-semibold hover:border-accent hover:text-accent"
            >
              <ExternalLink aria-hidden className="size-4" />
              Open in Google Maps<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
        <iframe
          key={office.mapQuery}
          title={`Map showing ${office.label}, ${office.lines.join(", ")}`}
          src={mapsEmbedUrl(office.mapQuery)}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="aspect-[4/3] h-full min-h-[320px] w-full border-0 lg:aspect-auto lg:min-h-[420px]"
        />
      </div>
    </div>
  );
}
