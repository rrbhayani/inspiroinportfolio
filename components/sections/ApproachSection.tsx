"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealItem } from "@/components/Reveal";
import { gsap } from "@/lib/gsap";
import { useIsoLayoutEffect } from "@/lib/useIsoLayoutEffect";
import { EASE } from "@/lib/motion";

const steps = [
  { n: "01", title: "Discover", body: "We map your goals — Shopify store, custom website, admin needs, or both — before proposing anything.", tint: "tint-sky" },
  { n: "02", title: "Design", body: "Store UX, theme direction, admin panel flows, and integrations planned early and visibly.", tint: "tint-lavender" },
  { n: "03", title: "Build", body: "Shopify customization or full custom web development in focused sprints with visible progress.", tint: "tint-mint" },
  { n: "04", title: "Launch & Support", body: "Go live, hand over admin access, and stay supported with management and improvements.", tint: "tint-pink" },
];

export function ApproachSection() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useIsoLayoutEffect(() => {
    if (reduce || !sectionRef.current || !pinRef.current) return;
    const section = sectionRef.current;
    const pin = pinRef.current;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const st = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=300%",
          pin: pin,
          scrub: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const idx = Math.min(steps.length - 1, Math.floor(self.progress * steps.length));
            setActive(idx);
          },
        },
      });
      return () => st.kill();
    });
    return () => mm.revert();
  }, [reduce]);

  return (
    <section className="bg-surface" aria-label="Our approach">
      {/* DESKTOP: pinned swap */}
      <div ref={sectionRef} className="relative hidden md:block">
        <div ref={pinRef} className="flex h-screen items-center">
          <div className="mx-auto grid w-full max-w-content grid-cols-[0.8fr_1.2fr] gap-16 px-[var(--gutter)]">
            {/* Step rail */}
            <div className="flex flex-col gap-3">
              <span className="eyebrow mb-2">Our Approach</span>
              {steps.map((s, i) => (
                <button
                  key={s.n}
                  className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-500 ${
                    i === active
                      ? "border-accent/30 bg-bg shadow-card"
                      : "border-transparent opacity-50"
                  }`}
                >
                  <span
                    className={`font-mono text-sm ${i === active ? "text-accent" : "text-text-muted"}`}
                  >
                    {s.n}
                  </span>
                  <span className="text-lg font-bold text-heading">{s.title}</span>
                </button>
              ))}
              {/* progress */}
              <div className="mt-4 h-1 overflow-hidden rounded-full bg-border">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent to-accent-2"
                  animate={{ width: `${((active + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.5, ease: EASE }}
                />
              </div>
            </div>

            {/* Active panel */}
            <div className={`relative overflow-hidden rounded-card border border-border bg-${steps[active].tint} p-12`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  <span className="font-display text-[7rem] font-extrabold leading-none text-surface">
                    {steps[active].n}
                  </span>
                  <h3 className="mt-4 text-4xl font-extrabold text-heading">{steps[active].title}</h3>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-text">
                    {steps[active].body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE: simple vertical reveal list */}
      <div className="px-[var(--gutter)] py-24 md:hidden">
        <SectionHeading eyebrow="Our Approach" title="From idea to launch" className="mb-10" />
        <Reveal stagger className="flex flex-col gap-4">
          {steps.map((s) => (
            <RevealItem key={s.n} className={`rounded-card border border-border bg-${s.tint} p-6`}>
              <span className="font-mono text-sm text-accent">{s.n}</span>
              <h3 className="mt-1 text-xl font-bold text-heading">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text">{s.body}</p>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
