"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { Icon } from "@/components/Icon";
import { getLenis } from "@/components/SmoothScroll";
import { useScrollDirection } from "@/lib/useScrollDirection";

const SIZE = 52;
const STROKE = 2.5;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/**
 * Floating scroll-to-top control with a circular progress ring.
 * Appears after the user scrolls; uses Lenis when smooth scroll is active.
 */
export function ScrollProgressButton() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const { direction } = useScrollDirection();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  const strokeOffset = useTransform(smoothProgress, (p) => CIRCUMFERENCE * (1 - p));

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { duration: reduce ? 0 : 1.1 });
      return;
    }
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <motion.button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      initial={false}
      animate={{
        opacity: visible ? (direction === "down" ? 0.75 : 1) : 0,
        scale: visible ? 1 : 0.85,
        y: visible ? 0 : 12,
        x: direction === "down" && visible ? 4 : 0,
      }}
      transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed bottom-6 right-6 z-[55] grid place-items-center rounded-full border border-border bg-surface/95 shadow-card backdrop-blur-md transition-shadow hover:border-accent/40 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 ${
        visible ? "pointer-events-auto" : "pointer-events-none"
      }`}
      style={{ width: SIZE, height: SIZE }}
    >
      <svg
        aria-hidden="true"
        width={SIZE}
        height={SIZE}
        className="absolute inset-0 -rotate-90"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
      >
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth={STROKE}
          className="text-border"
        />
        <motion.circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          className="text-accent"
          strokeDasharray={CIRCUMFERENCE}
          style={{ strokeDashoffset: strokeOffset }}
        />
      </svg>

      <Icon name="arrow" size={18} className="-rotate-90 text-heading" />
    </motion.button>
  );
}
