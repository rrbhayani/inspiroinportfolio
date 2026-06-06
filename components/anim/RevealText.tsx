"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ElementType } from "react";
import { EASE } from "@/lib/motion";

type Mode = "lines" | "words" | "chars";

type Props = {
  /** Plain text for words/chars. For "lines", pass `lines` instead. */
  text?: string;
  lines?: string[];
  mode?: Mode;
  as?: ElementType;
  className?: string;
  /** Render the last unit (line/word) with the accent text-gradient. */
  highlightLast?: boolean;
  stagger?: number;
  delay?: number;
};

const container = (stagger: number, delay: number): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

const unit: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.8, ease: EASE } },
};

/**
 * Mask line/word/char reveal: each unit slides up from behind an invisible clip
 * mask, staggered. Reduced motion renders the text immediately, no transforms.
 */
export function RevealText({
  text = "",
  lines,
  mode = "lines",
  as,
  className = "",
  highlightLast = false,
  stagger = 0.1,
  delay = 0,
}: Props) {
  const reduce = useReducedMotion();
  const Tag = motion(as ?? "div");

  const units: string[] =
    mode === "lines" ? lines ?? [text] : mode === "words" ? text.split(" ") : Array.from(text);

  if (reduce) {
    const Plain = (as ?? "div") as ElementType;
    return <Plain className={className}>{lines ? lines.join(" ") : text}</Plain>;
  }

  return (
    <Tag
      className={className}
      variants={container(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {units.map((u, i) => {
        const isLast = i === units.length - 1;
        const display = mode === "lines" ? "block" : "inline-block";
        return (
          <span key={i} className={`${display} overflow-hidden ${mode !== "chars" ? "pb-[0.08em]" : ""}`}>
            <motion.span
              variants={unit}
              className={`inline-block ${highlightLast && isLast ? "text-gradient" : ""}`}
            >
              {u}
              {mode === "words" && i < units.length - 1 ? " " : ""}
              {mode === "chars" && u === " " ? " " : ""}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}
