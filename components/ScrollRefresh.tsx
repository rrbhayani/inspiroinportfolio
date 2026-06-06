"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "@/lib/gsap";

/**
 * On route change: kill any leftover ScrollTriggers from the previous page and
 * refresh measurements after the new page paints. Prevents leaks and stale pins.
 */
export function ScrollRefresh() {
  const pathname = usePathname();

  useEffect(() => {
    // Let the new route render + page-transition settle, then re-measure.
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 200);
    return () => {
      window.clearTimeout(id);
      // Triggers created by unmounted components self-revert via gsap.context;
      // this is a safety net for any that linger.
      ScrollTrigger.getAll().forEach((t) => {
        if (!t.trigger || !document.body.contains(t.trigger)) t.kill();
      });
    };
  }, [pathname]);

  return null;
}
