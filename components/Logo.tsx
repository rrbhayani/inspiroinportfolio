"use client";

import Link from "next/link";
import { scrollToTop } from "@/lib/scrollToTop";

/**
 * INSPIROIN logo — spark mark (gradient rounded-square tile with a white "i"
 * whose dot is a four-point spark) + wordmark.
 * - `light`: white wordmark for dark backgrounds.
 * - `mono`: monochrome lockup (single `currentColor` tile, knockout mark) for
 *   one-color contexts. Set text color via the wrapper's text-* class.
 */
export function Logo({
  className = "",
  light = false,
  mono = false,
}: {
  className?: string;
  light?: boolean;
  mono?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="INSPIROIN home"
      onClick={() => scrollToTop({ immediate: true })}
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <LogoMark className="h-8 w-8 shrink-0" mono={mono} />
      <span
        className={`font-display text-lg font-bold tracking-tight ${
          light ? "text-white" : mono ? "" : "text-heading"
        }`}
      >
        INSPIROIN
      </span>
    </Link>
  );
}

/** Icon mark only — used in the wordmark lockup and as the favicon source. */
export function LogoMark({ className = "", mono = false }: { className?: string; mono?: boolean }) {
  return (
    <svg viewBox="0 0 96 96" className={className} role="img" aria-label="INSPIROIN">
      <defs>
        <linearGradient id="inspiroinGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3B6EF6" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      <rect width="96" height="96" rx="24" fill={mono ? "currentColor" : "url(#inspiroinGrad)"} />
      <g fill={mono ? "var(--bg)" : "#fff"} transform="translate(48,52)">
        <rect x="-7" y="-7" width="14" height="36" rx="7" />
        <g transform="translate(0,-25) scale(0.8)">
          <path d="M0 -16C2 -4 4 -2 16 0C4 2 2 4 0 16C-2 4 -4 2 -16 0C-4 -2 -2 -4 0 -16Z" />
        </g>
      </g>
    </svg>
  );
}
