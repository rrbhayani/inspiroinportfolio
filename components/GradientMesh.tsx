"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Signature gradient mesh — soft radial/conic blend of --accent -> --accent-2.
 * Drifts slowly behind the hero; used as a glow accent elsewhere.
 * Decorative only (aria-hidden); honors reduced motion by holding still.
 */
export function GradientMesh({
  className = "",
  intensity = 0.6,
}: {
  className?: string;
  intensity?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <motion.div
        className="mesh-gradient absolute left-1/2 top-1/2 aspect-square w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ opacity: intensity }}
        animate={
          reduce
            ? undefined
            : { scale: [1, 1.08, 1], x: ["-50%", "-48%", "-50%"], y: ["-50%", "-53%", "-50%"] }
        }
        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
}
