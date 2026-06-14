"use client";

import { motion, useReducedMotion, useInView, type Variants } from "framer-motion";
import { useRef, useEffect, useState, type ElementType, type RefObject } from "react";
import { EASE } from "@/lib/motion";

type Mode = "lines" | "words" | "chars";

type Props = {
  text?: string;
  lines?: string[];
  mode?: Mode;
  as?: ElementType;
  className?: string;
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

const VIEWPORT = { once: true, amount: 0, margin: "0px 0px 200px 0px" } as const;

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
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as RefObject<Element>, VIEWPORT);
  const [nearOnLoad, setNearOnLoad] = useState(false);
  const Tag = motion(as ?? "div");

  const units: string[] =
    mode === "lines" ? lines ?? [text] : mode === "words" ? text.split(" ") : Array.from(text);

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const check = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 200) setNearOnLoad(true);
    };
    check();
    const id = window.setTimeout(check, 80);
    return () => window.clearTimeout(id);
  }, [reduce]);

  if (reduce) {
    const Plain = (as ?? "div") as ElementType;
    return <Plain className={className}>{lines ? lines.join(" ") : text}</Plain>;
  }

  const show = inView || nearOnLoad;

  return (
    <Tag
      ref={ref}
      className={className}
      variants={container(stagger, delay)}
      initial="hidden"
      animate={show ? "visible" : "hidden"}
    >
      {units.map((u, i) => {
        const isLast = i === units.length - 1;
        const display = mode === "lines" ? "block" : "inline-block";
        return (
          <span
            key={i}
            className={`${display} overflow-hidden ${mode !== "chars" ? "pb-[0.08em]" : ""} ${highlightLast && isLast ? "text-gradient" : ""}`}
          >
            <motion.span variants={unit}>
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
