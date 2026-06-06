"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Icon } from "./Icon";
import type { Service } from "@/lib/services";
import { staggerItem } from "@/lib/motion";

export function ServiceCard({ service }: { service: Service }) {
  const reduce = useReducedMotion();
  return (
    <motion.div variants={staggerItem} className="h-full">
      <Link
        href={`/services/${service.slug}`}
        className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-card border border-border bg-surface p-7 shadow-card transition-all duration-[400ms] ease-signature hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-glow"
      >
        {/* Hover tint glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        />

        <div className="flex items-center justify-between">
          <span className="eyebrow text-text-muted">{service.eyebrow}</span>
          <motion.span
            className={`grid h-12 w-12 place-items-center rounded-xl bg-${service.tint} text-accent`}
            whileHover={reduce ? undefined : { rotate: -6, scale: 1.05 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Icon name={service.icon} size={22} />
          </motion.span>
        </div>

        <h3 className="text-xl font-bold leading-snug text-heading">{service.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-text-muted">{service.value}</p>

        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
          Learn more
          <Icon
            name="arrow"
            size={16}
            className="transition-transform duration-[400ms] ease-signature group-hover:translate-x-1"
          />
        </span>
      </Link>
    </motion.div>
  );
}
