"use client";

import { useRef, Children, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "@/lib/gsap";
import { useIsoLayoutEffect } from "@/lib/useIsoLayoutEffect";

/**
 * Sticky-stacking cards: each card pins (sticky) and the previous one scales +
 * fades slightly as the next scrolls over it — an overlapping deck.
 * Desktop only via gsap.matchMedia; mobile + reduced motion render a plain stack.
 */
export function StickyStack({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const items = Children.toArray(children);

  useIsoLayoutEffect(() => {
    if (reduce || !ref.current) return;
    const root = ref.current;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".sticky-card", root);
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        gsap.to(card, {
          scale: 0.92,
          opacity: 0.55,
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    });
    return () => mm.revert();
  }, [reduce]);

  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => (
        <div
          key={i}
          className="sticky-card md:sticky"
          style={{
            // Stagger the sticky top so cards stack with a visible lip.
            top: `calc(6rem + ${i * 1.25}rem)`,
            zIndex: i + 1,
            willChange: "transform",
            marginBottom: "1.25rem",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
