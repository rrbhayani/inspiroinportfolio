import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}: Props) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-h2 font-semibold">{title}</h2>
      {subtitle && <p className="text-base leading-relaxed text-text-muted">{subtitle}</p>}
    </Reveal>
  );
}
