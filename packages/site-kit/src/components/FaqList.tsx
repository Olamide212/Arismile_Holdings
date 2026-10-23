import { Plus } from "lucide-react";
import { reveal } from "../reveal";
import type { FaqItem } from "../types";

/** Accessible FAQ accordion built on native <details>. */
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div {...reveal("up", 100)} className="divide-y divide-fg/10 border-y border-fg/10">
      {items.map((item) => (
        <details key={item.q} className="group py-5 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left text-lg font-semibold">
            {item.q}
            <Plus aria-hidden className="mt-1 size-5 shrink-0 text-accent transition-transform group-open:rotate-45" />
          </summary>
          <p className="mt-4 max-w-3xl leading-relaxed opacity-80">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
