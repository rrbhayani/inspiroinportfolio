import { getLenis } from "@/components/SmoothScroll";

/** Scroll to top — uses Lenis when smooth scroll is active. */
export function scrollToTop(options?: { immediate?: boolean }) {
  const immediate = options?.immediate ?? true;
  const lenis = getLenis();

  if (lenis) {
    lenis.scrollTo(0, { immediate });
    return;
  }

  window.scrollTo({ top: 0, behavior: immediate ? "auto" : "smooth" });
}
