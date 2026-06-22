"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRef, useEffect, type ReactNode } from "react";
import { EASE } from "@/lib/motion";

/**
 * Animated fade on route change. Keyed by pathname so each navigation replays.
 * First paint stays fully visible — avoids a white flash on mobile before scroll.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isFirstMount = useRef(true);

  useEffect(() => {
    isFirstMount.current = false;
  }, []);

  const fadeIn = !isFirstMount.current;

  return (
    <motion.main
      key={pathname}
      initial={fadeIn ? { opacity: 0 } : false}
      animate={{ opacity: 1 }}
      transition={{ duration: fadeIn ? 0.45 : 0, ease: EASE }}
      className="min-h-screen"
    >
      {children}
    </motion.main>
  );
}
