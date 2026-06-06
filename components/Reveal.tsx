"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, fadeUpBlur, staggerContainer, staggerItem } from "@/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger direct children (each child must be wrapped in <RevealItem> or motion). */
  stagger?: boolean;
  /** Soft focus-in blur on reveal. */
  blur?: boolean;
  delay?: number;
  as?: "div" | "section" | "ul" | "li" | "header";
};

/**
 * Scroll-in wrapper. Fades + slides up (y:40->0) once on enter.
 * Reduced motion is handled globally in CSS + Framer reads the same media query,
 * so transformed content still ends visible.
 */
export function Reveal({ children, className, stagger, blur, delay = 0, as = "div" }: Props) {
  const MotionTag = motion[as] as typeof motion.div;
  const variants: Variants = stagger ? staggerContainer : blur ? fadeUpBlur : fadeUp;

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
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
