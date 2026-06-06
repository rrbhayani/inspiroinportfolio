"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion, animate } from "framer-motion";

/**
 * Counts up from 0 to `value` when scrolled into view.
 * Reduced motion: shows the final value immediately.
 */
export function StatCounter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <span className="font-display text-5xl font-semibold tabular-nums tracking-tight md:text-6xl">
        {display}
        <span className="text-accent">{suffix}</span>
      </span>
      <span className="eyebrow">{label}</span>
    </div>
  );
}
