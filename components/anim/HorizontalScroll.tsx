"use client";

import { useRef, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "@/lib/gsap";
import { useIsoLayoutEffect } from "@/lib/useIsoLayoutEffect";

/**
 * Pinned horizontal-scroll panel: the section pins and its inner row translates
 * left as the user scrolls vertically.
 * Desktop only (>=768px) via gsap.matchMedia. Mobile + reduced motion fall back
 * to a native horizontally-scrollable row — no pin, smooth touch scrolling.
 */
export function HorizontalScroll({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useIsoLayoutEffect(() => {
    if (reduce || !sectionRef.current || !trackRef.current) return;
    const section = sectionRef.current;
    const track = trackRef.current;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const distance = () => track.scrollWidth - section.clientWidth;
      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + distance(),
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    });
    return () => mm.revert();
  }, [reduce]);

  // Overflow: native scroll on mobile/reduced; hidden on desktop (GSAP drives x).
  const overflow = reduce ? "overflow-x-auto" : "overflow-x-auto md:overflow-hidden";

  return (
    <div
      ref={sectionRef}
      className={`relative flex md:h-screen md:items-center ${overflow} ${className}`}
    >
      <div ref={trackRef} className="flex w-max gap-5 px-[var(--gutter)] will-change-transform">
        {children}
      </div>
    </div>
  );
}
