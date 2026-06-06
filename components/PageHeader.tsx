import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { GradientMesh } from "./GradientMesh";

/** Shared hero header for inner pages — eyebrow, title, optional lede. */
export function PageHeader({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-48">
      <GradientMesh className="-z-10 opacity-40" intensity={0.4} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-bg" />
      <div className="mx-auto max-w-content px-[var(--gutter)]">
        <Reveal className="flex max-w-3xl flex-col gap-6">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="text-h1 font-semibold">{title}</h1>
          {lede && <p className="max-w-2xl text-lg leading-relaxed text-text-muted">{lede}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
