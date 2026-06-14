import type { Variants, Transition } from "framer-motion";

// Signature easing from the brief.
export const EASE = [0.22, 1, 0.36, 1] as const;

export const baseTransition: Transition = {
  duration: 0.7,
  ease: EASE,
};

// Fade + slide up with subtle scale. Used by Reveal and section headers.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: baseTransition },
};

// Same with a soft focus-in blur.
export const fadeUpBlur: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.98, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: baseTransition },
};

// Container that staggers its children by ~0.1s.
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = fadeUp;
