"use client";

import { motion, useReducedMotion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode, type RefObject } from "react";
import { fadeUp, fadeUpBlur, staggerContainer, staggerItem } from "@/lib/motion";
import { useRevealOnLoad } from "@/lib/useRevealOnLoad";

/** Generous zone so content just below the fold reveals on page load, not only after scroll. */
const VIEWPORT = { once: true, amount: 0, margin: "0px 0px 300px 0px" } as const;

type Props = {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  blur?: boolean;
  delay?: number;
  as?: "div" | "section" | "ul" | "li" | "header";
};

/**
 * Scroll-in wrapper. Fades + slides up once when entering view.
 * Also reveals on first paint if the block is already on screen (fixes inner-page gaps).
 */
export function Reveal({ children, className, stagger, blur, delay = 0, as = "div" }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref as RefObject<Element>, VIEWPORT);
  const nearOnLoad = useRevealOnLoad(ref, reduce);

  const show = reduce || inView || nearOnLoad;
  const variants: Variants = stagger ? staggerContainer : blur ? fadeUpBlur : fadeUp;

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      variants={variants}
      initial="hidden"
      animate={show ? "visible" : "hidden"}
      transition={stagger ? undefined : { delay }}
    >
      {children}
    </MotionTag>
  );
}

/** Child item for staggered Reveal containers. */
export function RevealItem({
  children,
  className,
  blur,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  blur?: boolean;
  as?: "div" | "li";
}) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag className={className} variants={blur ? fadeUpBlur : staggerItem}>
      {children}
    </MotionTag>
  );
}
