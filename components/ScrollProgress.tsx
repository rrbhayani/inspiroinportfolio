"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useScrollDirection } from "@/lib/useScrollDirection";

/**
 * Thin scroll-progress bar fixed at the top, filling as the page scrolls.
 * Brightens slightly when scrolling up for a richer interactive feel.
 */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const { direction } = useScrollDirection();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      animate={{
        height: direction === "up" ? 3 : 2,
        opacity: direction === "up" ? 1 : 0.85,
      }}
      transition={{ duration: 0.25 }}
      className="fixed inset-x-0 top-0 z-[60] origin-left bg-gradient-to-r from-accent to-accent-2"
    />
  );
}
