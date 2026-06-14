"use client";

import Image from "next/image";
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
import { clients, hero } from "@/lib/site";
import { EASE } from "@/lib/motion";

const seq: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const fade: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

function HeadlineLine({ line: headlineLine }: { line: string | { text: string; highlight?: boolean } }) {
  if (typeof headlineLine === "string") {
    return <>{headlineLine}</>;
  }
  if (headlineLine.highlight) {
    return (
      <span className="bg-gradient-to-r from-white to-[#93C5FD] bg-clip-text italic text-transparent">
        {headlineLine.text}
      </span>
    );
  }
  return <>{headlineLine.text}</>;
}

export function HeroAuth() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-label="INSPIROIN — Shopify and custom website development"
      className="relative isolate flex min-h-[100dvh] flex-col"
      style={{
        background:
          "radial-gradient(120% 90% at 85% 30%, #2563EB 0%, #1E40AF 38%, #14245C 68%, #0A1633 100%)",
      }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-24 -z-10 h-[520px] w-[520px] rounded-full bg-[#2563EB]/40 blur-[120px]"
        animate={reduce ? undefined : { x: [0, 30, 0], y: [0, -20, 0], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* items-start keeps copy from vertically centering under the nav (which clipped the headline) */}
      <div className="mx-auto flex w-full max-w-content flex-1 items-start px-[var(--gutter)] pb-10 pt-[calc(6.25rem+env(safe-area-inset-top))] md:items-center md:pb-14 md:pt-[calc(7rem+env(safe-area-inset-top))]">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
          <motion.div
            variants={seq}
            initial={reduce ? false : "hidden"}
            animate="visible"
            className="flex flex-col gap-4 md:gap-5"
          >
            <motion.span
              variants={fade}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-widest text-white/90 backdrop-blur sm:text-xs"
            >
              <Icon name="layers" size={15} className="text-[#93C5FD]" />
              {hero.eyebrow}
            </motion.span>

            <motion.h1
              variants={fade}
              className="text-balance font-display text-[clamp(1.875rem,4vw,3.25rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white"
            >
              {hero.headline.map((headlineLine, i) => (
                <span key={i} className="block">
                  <HeadlineLine line={headlineLine} />
                </span>
              ))}
            </motion.h1>

            <motion.p
              variants={fade}
              className="max-w-[34rem] text-pretty text-base leading-relaxed text-white/85 md:text-lg"
            >
              {hero.description}
            </motion.p>

            <motion.div variants={fade} className="flex flex-wrap items-center gap-3 pt-1 md:gap-4">
              <Magnetic disabled={!!reduce}>
                <Link
                  href={hero.primaryCta.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0A1633] shadow-[0_10px_40px_-8px_rgba(255,255,255,0.4)] transition-all duration-[400ms] ease-signature hover:-translate-y-1 hover:shadow-[0_16px_50px_-8px_rgba(147,197,253,0.6)] md:px-7 md:py-3.5"
                >
                  {hero.primaryCta.label}
                  <Icon
                    name="arrow"
                    size={16}
                    className="-rotate-45 transition-transform duration-[400ms] ease-signature group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </Magnetic>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all duration-[400ms] ease-signature hover:-translate-y-1 hover:bg-white/10 md:px-7 md:py-3.5"
              >
                {hero.secondaryCta.label}
              </Link>
            </motion.div>

            <motion.div variants={fade} className="flex flex-col gap-2 pt-2 md:gap-3 md:pt-3">
              <span className="font-mono text-xs uppercase tracking-widest text-white/60">
                {hero.clientLabel}
              </span>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 md:gap-x-8">
                {clients.slice(0, 4).map((name) => (
                  <span
                    key={name}
                    className="font-display text-sm font-bold text-white/50 transition-colors hover:text-white/80 md:text-base"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.75 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-4 -z-10 rounded-[2rem] bg-[#2563EB]/50 blur-[80px]"
            />

            <motion.div
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/15 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
            >
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                fill
                priority
                quality={90}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 520px"
              />
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 1.15 }}
              className="absolute -bottom-3 right-2 hidden rounded-2xl border border-black/5 bg-white p-3 shadow-2xl sm:block lg:-bottom-4 lg:right-4"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-accent/10 text-accent">
                  <Icon name="spark" size={18} />
                </span>
                <div>
                  <p className="text-sm font-bold text-[#0A1633]">{hero.floatingCard.title}</p>
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest text-slate-400">
                    {hero.floatingCard.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
