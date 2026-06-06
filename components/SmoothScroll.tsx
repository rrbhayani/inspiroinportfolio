"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

// Shared Lenis instance so other components (e.g. velocity marquee) can read scroll.
let lenisInstance: Lenis | null = null;
export function getLenis() {
  return lenisInstance;
}

/**
 * Lenis smooth momentum scroll, synced to GSAP ScrollTrigger so scrubbed
 * animations track the smoothed scroll position.
 * Respects prefers-reduced-motion — bails out so native scroll stays and
 * ScrollTrigger still works off the native scrollbar.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      // No smoothing; make sure any scrubbed triggers still measure correctly.
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisInstance = lenis;

    // Drive ScrollTrigger off Lenis' smoothed position.
    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return null;
}
