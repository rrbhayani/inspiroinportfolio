"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Soft parallax glow orbs that drift on scroll — adds depth without touching page layout.
 */
export function ScrollAmbience() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  const orb1Y = useTransform(scrollY, [0, 4000], [0, -180]);
  const orb2Y = useTransform(scrollY, [0, 4000], [0, 140]);
  const orb3Y = useTransform(scrollY, [0, 4000], [0, -90]);
  const bgShift = useTransform(scrollY, [0, 2000], ["0%", "8%"]);

  if (reduce) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-40 overflow-hidden">
      <motion.div
        style={{ y: orb1Y }}
        className="absolute -left-[10%] top-[12%] h-[min(520px,55vw)] w-[min(520px,55vw)] rounded-full bg-accent/[0.07] blur-[100px]"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute -right-[8%] top-[38%] h-[min(440px,48vw)] w-[min(440px,48vw)] rounded-full bg-accent-2/[0.09] blur-[90px]"
      />
      <motion.div
        style={{ y: orb3Y }}
        className="absolute left-[35%] top-[72%] h-[min(360px,40vw)] w-[min(360px,40vw)] rounded-full bg-[#93C5FD]/[0.06] blur-[110px]"
      />
      <motion.div
        style={{ y: bgShift }}
        className="absolute inset-x-0 top-0 h-[120vh] bg-gradient-to-b from-accent/[0.03] via-transparent to-transparent"
      />
    </div>
  );
}
