"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "@/lib/gsap";
import { scrollToTop } from "@/lib/scrollToTop";

/**
 * On route change: scroll to top, kill stale ScrollTriggers, refresh measurements.
 */
export function ScrollRefresh() {
  const pathname = usePathname();

  useEffect(() => {
    scrollToTop({ immediate: true });

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
