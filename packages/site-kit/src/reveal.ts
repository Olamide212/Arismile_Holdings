import type { CSSProperties } from "react";

export type RevealVariant = "up" | "left" | "right" | "zoom";

/**
 * Props that make an element animate in once when it scrolls into view
 * (see ScrollReveal.tsx and reveal.css). Put them on wrappers, not on
 * elements that have their own transitions or transforms.
 */
export function reveal(variant: RevealVariant = "up", delayMs = 0) {
  return {
    "data-reveal": variant,
    style: delayMs ? ({ "--reveal-delay": `${delayMs}ms` } as CSSProperties) : undefined,
  };
}

/** Stagger delay for the i-th item of a row (resets every `perRow` items). */
export function stagger(index: number, perRow = 3, stepMs = 100) {
  return (index % perRow) * stepMs;
}

/**
 * Inlined in <head> so hidden-until-revealed styles apply before first paint.
 * If <ScrollReveal> has not started within 4s, the class is removed so
 * content can never stay invisible.
 */
export const revealBootScript = `(function(){var d=document.documentElement;d.classList.add("reveal-ready");setTimeout(function(){if(!d.classList.contains("reveal-active"))d.classList.remove("reveal-ready")},4000)})();`;
