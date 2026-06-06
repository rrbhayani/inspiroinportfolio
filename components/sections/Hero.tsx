"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { GradientMesh } from "@/components/GradientMesh";
import { Marquee } from "@/components/Marquee";
import { RevealText } from "@/components/anim/RevealText";
import { Parallax } from "@/components/anim/Parallax";
import { ClipImage } from "@/components/anim/ClipImage";
import { clients } from "@/lib/site";
import { EASE } from "@/lib/motion";

const headline = ["Powering the Global Workforce", "Through Skills, Talent,", "and Technology"];

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: 0.55 + i * 0.12 },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 md:pt-48">
      {/* Scrubbed, parallaxed gradient mesh behind the hero. */}
      <Parallax speed={0.18} scale={[1, 1.15]} className="absolute inset-0 -z-10">
        <GradientMesh className="opacity-70" intensity={0.55} />
      </Parallax>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-bg" />

      <div className="mx-auto max-w-content px-[var(--gutter)]">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-7 text-center">
          <motion.span
            custom={-2}
            variants={fade}
            initial="hidden"
            animate="visible"
            className="eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Skills · Talent · Technology
          </motion.span>

          {/* Line-by-line mask reveal headline. */}
          <RevealText
            as="h1"
            mode="lines"
            lines={headline}
            highlightLast
            className="text-display font-extrabold"
          />

          <motion.p
            custom={0}
            variants={fade}
            initial="hidden"
            animate="visible"
            className="max-w-2xl text-lg leading-relaxed text-text-muted"
          >
            We help organizations grow by strengthening their people through targeted
            learning programs, reliable staffing solutions, and products designed to
            improve how teams work every day.
          </motion.p>

          <motion.div
            custom={1}
            variants={fade}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="/contact" magnetic withArrow>
              Get In Touch
            </Button>
            <Button href="/solutions" variant="ghost">
              Explore Solutions
            </Button>
          </motion.div>
        </div>

        {/* Dashboard preview — clip-reveal + slight parallax lift as it scrolls in. */}
        <Parallax speed={-0.08} className="mx-auto mt-16 max-w-4xl">
          <ClipImage>
            <DashboardPreview />
          </ClipImage>
        </Parallax>

        {/* Trusted by — velocity-aware marquee */}
        <div className="mt-20">
          <p className="eyebrow mb-8 text-center text-text-muted">
            INSPIROIN is trusted by the best companies worldwide
          </p>
          <Marquee>
            {clients.map((name) => (
              <span
                key={name}
                className="select-none whitespace-nowrap font-display text-2xl font-bold text-text-muted/60 transition-colors hover:text-heading"
              >
                {name}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <div className="relative rounded-card border border-border bg-surface p-2 shadow-soft">
      <div className="overflow-hidden rounded-2xl border border-border bg-bg">
        <div className="flex items-center gap-1.5 border-b border-border bg-surface px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-tint-pink" />
          <span className="h-2.5 w-2.5 rounded-full bg-tint-sky" />
          <span className="h-2.5 w-2.5 rounded-full bg-tint-mint" />
          <span className="ml-3 rounded-full bg-surface-2 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-widest text-text-muted">
            app.inspiroin.com
          </span>
        </div>
        <div className="grid grid-cols-3 gap-4 p-5">
          <div className="col-span-1 space-y-3">
            <div className="h-8 rounded-lg bg-accent/15" />
            <div className="h-3 w-3/4 rounded bg-surface-2" />
            <div className="h-3 w-2/3 rounded bg-surface-2" />
            <div className="h-3 w-3/4 rounded bg-surface-2" />
            <div className="h-3 w-1/2 rounded bg-surface-2" />
          </div>
          <div className="col-span-2 space-y-4">
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-tint-sky p-3">
                <div className="mb-2 h-2 w-1/2 rounded bg-accent/30" />
                <div className="h-5 w-2/3 rounded bg-accent/50" />
              </div>
              <div className="rounded-xl bg-tint-lavender p-3">
                <div className="mb-2 h-2 w-1/2 rounded bg-accent/30" />
                <div className="h-5 w-2/3 rounded bg-accent/50" />
              </div>
              <div className="rounded-xl bg-tint-mint p-3">
                <div className="mb-2 h-2 w-1/2 rounded bg-accent/30" />
                <div className="h-5 w-2/3 rounded bg-accent/50" />
              </div>
            </div>
            <div className="space-y-2 rounded-xl border border-border p-4">
              {[90, 70, 80, 55].map((w, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-surface-2" />
                  <div className="h-3 rounded bg-surface-2" style={{ width: `${w}%` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
