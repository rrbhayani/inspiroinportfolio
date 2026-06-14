import Link from "next/link";
import { Icon } from "./Icon";
import type { Project } from "@/lib/projects";

const categoryColors: Record<Project["category"], string> = {
  Shopify: "border-accent/30 bg-accent/10 text-accent",
  "Custom Web": "border-emerald-500/30 bg-emerald-500/10 text-emerald-700",
  Both: "border-violet-500/30 bg-violet-500/10 text-violet-700",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={`group flex h-full flex-col gap-5 overflow-hidden rounded-card border border-border bg-${project.tint} p-7 shadow-card transition-all duration-[400ms] ease-signature hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-glow`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className={`rounded-full border px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest ${categoryColors[project.category]}`}>
          {project.category}
        </span>
        <span className="font-mono text-xs text-text-muted">
          {project.industry} · {project.region}
        </span>
      </div>

      <div>
        <p className="eyebrow text-text-muted">{project.client}</p>
        <h3 className="mt-2 text-xl font-bold leading-snug text-heading">{project.title}</h3>
      </div>

      <p className="flex-1 text-sm leading-relaxed text-text-muted">{project.summary}</p>

      <div className="flex flex-wrap gap-2">
        {project.services.slice(0, 3).map((s) => (
          <span
            key={s}
            className="rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-text-muted"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
        >
          Visit live site
          <Icon name="arrow" size={16} className="-rotate-45" />
        </a>
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted transition-colors hover:text-heading"
        >
          Project details
          <Icon
            name="arrow"
            size={16}
            className="transition-transform duration-[400ms] ease-signature group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}
