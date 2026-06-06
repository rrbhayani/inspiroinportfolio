"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { EASE } from "@/lib/motion";

/**
 * Animated fade on route change. Keyed by pathname so each navigation replays.
 * OPACITY-ONLY on purpose: a persistent transform on this ancestor would create
 * a containing block and break GSAP ScrollTrigger pinning inside pages.
 * Reduced motion: Framer respects the media query; content lands fully visible.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <motion.main
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: EASE }}
      className="min-h-screen"
    >
      {children}
    </motion.main>
  );
}
