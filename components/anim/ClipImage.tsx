"use client";

import { useRef, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "@/lib/gsap";
import { useIsoLayoutEffect } from "@/lib/useIsoLayoutEffect";

/**
 * Large-image reveal: clip-path wipe (bottom-up) + scale 0.92 -> 1, scrubbed as
 * the element scrolls into frame. Reduced motion shows it instantly.
 */
export function ClipImage({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useIsoLayoutEffect(() => {
    if (reduce || !ref.current) return;
    const el = ref.current;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { clipPath: "inset(0% 0% 100% 0%)", scale: 0.92 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            end: "top 38%",
            scrub: true,
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform, clip-path" }}>
      {children}
    </div>
  );
}
