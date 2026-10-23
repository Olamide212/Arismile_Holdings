import { Check } from "lucide-react";
import type { ReactNode } from "react";
import { IconCircle } from "@/components/ui/IconCircle";

interface InfoCardProps {
  badge: ReactNode;
  title: string;
  label?: string;
  children?: ReactNode;
  points?: string[];
}

/** White content card with a yellow badge — the shared card pattern for inner pages. */
export function InfoCard({ badge, title, label, children, points }: InfoCardProps) {
  return (
    <article className="flex h-full flex-col bg-white p-[25px] text-center">
      <IconCircle className="mx-auto mb-4">{badge}</IconCircle>
      {label ? (
        <p className="mb-1 text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-green">{label}</p>
      ) : null}
      <h3 className="mb-3 text-[17px] font-bold uppercase leading-snug text-black">{title}</h3>
      {children ? <div className="text-[14px] leading-relaxed text-black">{children}</div> : null}
      {points?.length ? (
        <ul className="mt-4 space-y-2 border-t border-black/10 pt-4 text-left text-[13px] leading-relaxed text-body">
          {points.map((point) => (
            <li key={point} className="flex gap-2">
              <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-green" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
