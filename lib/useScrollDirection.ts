"use client";

import { useEffect, useRef, useState } from "react";

export type ScrollDirection = "up" | "down" | "idle";

/**
 * Tracks scroll direction and position. Works with Lenis smooth scroll
 * (window scroll events still fire).
 */
export function useScrollDirection(threshold = 8) {
  const [direction, setDirection] = useState<ScrollDirection>("idle");
  const [scrollY, setScrollY] = useState(0);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    setScrollY(window.scrollY);

    const onScroll = () => {
      const y = window.scrollY;
      setScrollY(y);

      const delta = y - lastY.current;
      if (Math.abs(delta) < threshold) return;

      setDirection(delta > 0 ? "down" : "up");
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return {
    direction,
    scrollY,
    atTop: scrollY < 48,
  };
}
