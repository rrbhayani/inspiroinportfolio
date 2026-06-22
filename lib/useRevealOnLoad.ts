"use client";

import { useLayoutEffect, useState, type RefObject } from "react";

function isNearViewport(el: Element, margin = 300) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight + margin && rect.bottom > -80;
}

/** Reveal above-the-fold blocks on first paint — mobile-safe (address bar, Lenis, late layout). */
export function useRevealOnLoad(ref: RefObject<Element | null>, disabled: boolean | null = false) {
  const [nearOnLoad, setNearOnLoad] = useState(false);

  useLayoutEffect(() => {
    if (disabled) return;
    const el = ref.current;
    if (!el) return;

    const check = () => {
      if (isNearViewport(el)) setNearOnLoad(true);
    };

    check();
    const raf = requestAnimationFrame(check);
    const t1 = window.setTimeout(check, 100);
    const t2 = window.setTimeout(check, 450);
    window.addEventListener("resize", check, { passive: true });
    window.addEventListener("scroll", check, { once: true, passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("resize", check);
    };
  }, [disabled]);

  return nearOnLoad;
}
