import type { CSSProperties } from "react";

export type RevealVariant = "up" | "left" | "right" | "zoom" | "fade";

/**
 * Props that make an element animate in when it scrolls into view (see
 * `components/layout/ScrollReveal.tsx` and the `[data-reveal]` rules in
 * globals.css). Put them on wrappers, not on elements with their own
 * transitions or transforms.
 */
export function reveal(variant: RevealVariant = "up", delayMs = 0) {
  return {
    "data-reveal": variant,
    style: delayMs ? ({ "--reveal-delay": `${delayMs}ms` } as CSSProperties) : undefined,
  };
}

/**
 * Runs before first paint (inlined in <head>). Hides `[data-reveal]` elements
 * via the `reveal-ready` class, and removes it again if <ScrollReveal> has not
 * started within 4s, so content can never stay invisible.
 */
export const revealBootScript = `(function(){var d=document.documentElement;d.classList.add("reveal-ready");setTimeout(function(){if(!d.classList.contains("reveal-active"))d.classList.remove("reveal-ready")},4000)})();`;

/** Stagger delay for the i-th item of a row (resets every `perRow` items). */
export function stagger(index: number, perRow = 4, stepMs = 100) {
  return (index % perRow) * stepMs;
}
