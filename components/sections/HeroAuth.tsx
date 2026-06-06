"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  type Variants,
} from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";
import { Icon } from "@/components/Icon";
import { clients } from "@/lib/site";
import { EASE } from "@/lib/motion";

/* ── Headline: roman bold + one true italic key phrase ── */
const headlineLines: ReactNode[] = [
  "Background checks,",
  <>
    built for{" "}
    <span className="bg-gradient-to-r from-white to-[#93C5FD] bg-clip-text italic text-transparent">
      faster hiring.
    </span>
  </>,
];

const seq: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const line: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.7, ease: EASE } },
};
const fade: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function HeroAuth() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-label="INSPIROIN — background verification"
      className="relative isolate overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 90% at 85% 30%, #2563EB 0%, #1E40AF 38%, #14245C 68%, #0A1633 100%)",
      }}
    >
      {/* soft radial glow behind the headline */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-24 -z-10 h-[520px] w-[520px] rounded-full bg-[#2563EB]/40 blur-[120px]"
        animate={reduce ? undefined : { x: [0, 30, 0], y: [0, -20, 0], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
      />
      {/* film grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="mx-auto grid min-h-[92vh] max-w-content items-center gap-14 px-[var(--gutter)] pb-20 pt-32 md:pt-36 lg:grid-cols-[1.05fr_0.95fr]">
        {/* ── LEFT ── */}
        <motion.div
          variants={seq}
          initial={reduce ? false : "hidden"}
          animate="visible"
          className="flex flex-col gap-7"
        >
          {/* eyebrow */}
          <motion.span
            variants={fade}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-mono text-xs uppercase tracking-widest text-white/90 backdrop-blur"
          >
            <Icon name="shield" size={15} className="text-[#93C5FD]" />
            INSPIROIN {/* PLACEHOLDER product name */}
          </motion.span>

          {/* headline */}
          <h1
            className="font-display font-extrabold text-white"
            style={{ fontSize: "clamp(2.75rem, 6vw, 5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            {headlineLines.map((l, i) => (
              <span key={i} className="block overflow-hidden pb-[0.06em]">
                <motion.span variants={line} className="block">
                  {l}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* subhead — high contrast */}
          <motion.p variants={fade} className="max-w-[32rem] text-lg leading-relaxed text-white/85">
            {/* PLACEHOLDER copy */}
            INSPIROIN runs automated background verification end to end — add candidates,
            run checks, and clear hires in days, not weeks.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fade} className="flex flex-wrap items-center gap-4">
            <Magnetic disabled={!!reduce}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0A1633] shadow-[0_10px_40px_-8px_rgba(255,255,255,0.4)] transition-all duration-[400ms] ease-signature hover:-translate-y-1 hover:shadow-[0_16px_50px_-8px_rgba(147,197,253,0.6)]"
              >
                Book a Demo
                <Icon name="arrow" size={16} className="-rotate-45 transition-transform duration-[400ms] ease-signature group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Magnetic>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-[400ms] ease-signature hover:-translate-y-1 hover:bg-white/10"
            >
              See How It Works
            </Link>
          </motion.div>

          {/* trust bar */}
          <motion.div variants={fade} className="mt-4 flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-white/60">
              Trusted by teams at
            </span>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {/* PLACEHOLDER grayscale client logos */}
              {clients.slice(0, 5).map((name) => (
                <span
                  key={name}
                  className="font-display text-lg font-bold text-white/50 transition-colors hover:text-white/80"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: product showcase ── */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.75 }}
          className="relative"
          style={{ perspective: 1200 }}
        >
          {/* accent glow behind frame */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-6 -z-10 rounded-[2rem] bg-[#2563EB]/50 blur-[80px]"
          />

          {/* tilt (static) wraps float (animated) so transforms don't conflict */}
          <div style={{ transform: reduce ? undefined : "rotateY(-6deg) rotateX(2deg)" }}>
            <motion.div
              animate={reduce ? undefined : { y: [0, -12, 0] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="origin-center"
            >
              <BrowserFrame />
            </motion.div>
          </div>

          {/* secondary peeking card — deliberate layered accent */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 1.15 }}
            className="absolute -bottom-6 -left-6 hidden w-56 rounded-2xl border border-black/5 bg-white p-4 shadow-2xl sm:block"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                <Icon name="check" size={18} />
              </span>
              <div>
                <p className="text-sm font-bold text-[#0A1633]">Check complete</p>
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-slate-400">
                  98% cleared in &lt; 48h
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* Magnetic wrapper for the primary CTA. */
function Magnetic({ children, disabled }: { children: ReactNode; disabled?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 });

  function onMove(e: MouseEvent) {
    if (disabled || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.3);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={disabled ? undefined : { x: sx, y: sy }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

/* Browser-framed product screenshot — PLACEHOLDER mock, swap for a real screenshot. */
function BrowserFrame() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/15 bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
      {/* top bar */}
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 rounded-md bg-white px-3 py-1 font-mono text-[0.6rem] uppercase tracking-widest text-slate-400">
          app.inspiroin.com
        </span>
      </div>

      {/* body mock */}
      <div className="grid grid-cols-3 gap-4 bg-white p-5">
        <div className="col-span-1 space-y-3">
          <div className="h-8 rounded-lg bg-[#2563EB]/15" />
          <div className="h-3 w-3/4 rounded bg-slate-100" />
          <div className="h-3 w-2/3 rounded bg-slate-100" />
          <div className="h-3 w-3/4 rounded bg-slate-100" />
          <div className="h-3 w-1/2 rounded bg-slate-100" />
        </div>
        <div className="col-span-2 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {[
              { v: "1,204", t: "Candidates", c: "bg-[#2563EB]" },
              { v: "98%", t: "Cleared", c: "bg-emerald-500" },
              { v: "1.6d", t: "Avg. time", c: "bg-amber-500" },
            ].map((s) => (
              <div key={s.t} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                <div className={`mb-2 h-2 w-1/2 rounded ${s.c}/40`} />
                <p className="text-base font-extrabold text-[#0A1633]">{s.v}</p>
                <p className="font-mono text-[0.55rem] uppercase tracking-widest text-slate-400">{s.t}</p>
              </div>
            ))}
          </div>
          <div className="space-y-2 rounded-xl border border-slate-100 p-4">
            {[
              { w: "92%", s: "bg-emerald-500", l: "Verified" },
              { w: "70%", s: "bg-amber-500", l: "In review" },
              { w: "84%", s: "bg-emerald-500", l: "Verified" },
              { w: "55%", s: "bg-[#2563EB]", l: "Pending" },
            ].map((row, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-6 w-6 shrink-0 rounded-full bg-slate-100" />
                <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                  <div className={`h-full rounded-full ${row.s}`} style={{ width: row.w }} />
                </div>
                <span className="w-16 shrink-0 text-right font-mono text-[0.55rem] uppercase tracking-widest text-slate-400">
                  {row.l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
