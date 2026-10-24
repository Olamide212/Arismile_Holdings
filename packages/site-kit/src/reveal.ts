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
 * It also removes the first-load preloader as soon as the HTML is parsed and
 * fonts are ready (at most 500ms), without waiting for React to hydrate, and
 * remembers a menu tap made before hydration so the menu opens once ready.
 * If <ScrollReveal> has not started within 4s, the class is removed so
 * content can never stay invisible.
 */
export const revealBootScript = `(function(){var d=document.documentElement;d.classList.add("reveal-ready");setTimeout(function(){if(!d.classList.contains("reveal-active"))d.classList.remove("reveal-ready")},4000);var t0=Date.now();function hide(){var p=document.getElementById("kit-preloader");if(p)setTimeout(function(){p.classList.add("is-done")},Math.max(0,250-(Date.now()-t0)))}function ready(){var f=document.fonts&&document.fonts.ready;if(!f)return hide();Promise.race([f,new Promise(function(r){setTimeout(r,500)})]).then(hide,hide)}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",ready);else ready();document.addEventListener("click",function(e){var t=e.target&&e.target.closest&&e.target.closest('[aria-controls="site-drawer"]');if(t&&!window.__menuReady)window.__menuPending=true},true);})();`;
