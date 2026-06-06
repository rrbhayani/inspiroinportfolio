"use client";

import { useReducedMotion } from "framer-motion";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useIsoLayoutEffect } from "@/lib/useIsoLayoutEffect";

/**
 * Smoothly shifts the fixed #bg-layer color as each registered section enters
 * the viewport. Keep colors subtle. Reduced motion: no-op (page bg stays).
 *
 * Pass ordered [selector, color] pairs. Selectors should match elements present
 * on the current route only (controller mounts per-page).
 */
export function BgShift({ steps }: { steps: { selector: string; color: string }[] }) {
  const reduce = useReducedMotion();

  useIsoLayoutEffect(() => {
    if (reduce) return;
    const layer = document.getElementById("bg-layer");
    if (!layer) return;

    const ctx = gsap.context(() => {
      steps.forEach(({ selector, color }) => {
        const el = document.querySelector(selector);
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          start: "top 60%",
          end: "bottom 40%",
          onToggle: (self) => {
            if (self.isActive) {
              gsap.to(layer, { backgroundColor: color, duration: 0.8, ease: "power2.out", overwrite: "auto" });
            }
          },
        });
      });
    });
    return () => {
      ctx.revert();
      gsap.to(layer, { backgroundColor: "transparent", duration: 0.4 });
    };
  }, [reduce, steps]);

  return null;
}
