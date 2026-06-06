"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame,
  wrap,
} from "framer-motion";

/**
 * Infinite horizontal marquee whose speed + direction respond to scroll velocity.
 * Renders children twice for a seamless loop. Transform-only (60fps).
 * Reduced motion: a static, horizontally-scrollable strip (no auto-motion).
 */
export function Marquee({
  children,
  baseSpeed = 22,
  className = "",
}: {
  children: ReactNode;
  /** px/sec base drift. */
  baseSpeed?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  // Children are duplicated, so 0..-50% is one full cycle.
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const directionRef = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let moveBy = directionRef.current * baseSpeed * (delta / 1000);
    const vf = velocityFactor.get();
    if (vf < 0) directionRef.current = -1;
    else if (vf > 0) directionRef.current = 1;
    moveBy += directionRef.current * moveBy * Math.abs(vf);
    // baseX is in % of one copy width.
    baseX.set(baseX.get() + (moveBy / 12));
  });

  if (reduce) {
    return (
      <div className={`flex gap-16 overflow-x-auto ${className}`}>
        <div className="flex shrink-0 items-center gap-16">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={`relative flex overflow-hidden ${className}`}
      style={{
        maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
      }}
    >
      <motion.div className="flex shrink-0 items-center gap-16 pr-16" style={{ x }}>
        {children}
        <span aria-hidden="true" className="flex shrink-0 items-center gap-16 pr-16">
          {children}
        </span>
      </motion.div>
    </div>
  );
}
