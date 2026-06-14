"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "ghost";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  /** Adds a magnetic pull on hover — best on primary CTAs. */
  magnetic?: boolean;
  withArrow?: boolean;
  /** Open href in a new tab (for external live site links). */
  external?: boolean;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-[400ms] ease-signature focus-visible:outline-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-soft hover:-translate-y-1 hover:shadow-glow",
  secondary:
    "border border-border-strong bg-surface text-heading hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/5",
  ghost:
    "border border-border-strong bg-surface text-heading hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/5",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  magnetic = false,
  withArrow = false,
  external = false,
  className = "",
  type = "button",
  disabled = false,
  ariaLabel,
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 });

  function onMove(e: MouseEvent) {
    if (!magnetic || reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    x.set(mx * 0.3);
    y.set(my * 0.3);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const inner = (
    <>
      <span>{children}</span>
      {withArrow && (
        <Icon
          name="arrow"
          size={16}
          className="transition-transform duration-[400ms] ease-signature group-hover:translate-x-1"
        />
      )}
    </>
  );

  const classes = `${base} ${variants[variant]} ${disabled ? "pointer-events-none opacity-60" : ""} ${className}`;

  const content =
    href && external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
      >
        {inner}
      </a>
    ) : href ? (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {inner}
      </Link>
    ) : (
      <button type={type} onClick={onClick} disabled={disabled} className={classes} aria-label={ariaLabel}>
        {inner}
      </button>
    );

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={magnetic && !reduce ? { x: sx, y: sy } : undefined}
      className="inline-block"
    >
      {content}
    </motion.div>
  );
}
