"use client";

import { useRef, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "@/lib/gsap";
import { useIsoLayoutEffect } from "@/lib/useIsoLayoutEffect";

type Props = {
  children: ReactNode;
  /** yPercent of self to travel across the scroll range. + moves down slower, - faster. */
  speed?: number;
  /** Optional scrub scale, e.g. [0.92, 1]. */
  scale?: [number, number];
  className?: string;
};

/**
 * Scroll-scrubbed parallax / scale. Animates transform + opacity only.
 * No-ops under reduced motion (children render in place). Cleans up via gsap.context.
 */
export function Parallax({ children, speed = 0, scale, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useIsoLayoutEffect(() => {
    if (reduce || !ref.current) return;
    const el = ref.current;
    const ctx = gsap.context(() => {
      const tween: gsap.TweenVars = {
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      };
      if (speed) tween.yPercent = speed * 100;
      if (scale) {
        gsap.set(el, { scale: scale[0] });
        tween.scale = scale[1];
      }
      gsap.to(el, tween);
    }, ref);
    return () => ctx.revert();
  }, [reduce, speed, scale]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
