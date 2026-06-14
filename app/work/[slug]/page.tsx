import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealItem } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { projects, getProject } from "@/lib/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return { title: project.title, description: project.summary };
}

export default async function ProjectDetailPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <PageHeader eyebrow={`${project.client} · ${project.category}`} title={project.title} lede={project.summary}>
        <div className="mt-2 flex flex-wrap gap-4">
          <Button href={project.url} magnetic withArrow external>
            Visit live site
          </Button>
          <Button href="/contact" variant="secondary">
            Start a similar project
          </Button>
          <Button href="/work" variant="ghost">
            All projects
          </Button>
        </div>
      </PageHeader>

      <section className="pb-12">
        <div className="mx-auto max-w-content px-[var(--gutter)]">
          <Reveal className="flex flex-wrap gap-3">
            <span className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-text-muted">
              {project.industry}
            </span>
            <span className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-text-muted">
              {project.region}
            </span>
            <span className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-text-muted">
              {project.engagement}
            </span>
            {project.services.map((s) => (
              <span
                key={s}
                className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent"
              >
                {s}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto grid max-w-content gap-10 px-[var(--gutter)] lg:grid-cols-3">
          {project.results.map((r) => (
            <Reveal key={r.label}>
              <div className={`rounded-card border border-border bg-${project.tint} p-8 text-center shadow-card`}>
                <p className="font-display text-3xl font-extrabold text-heading">{r.value}</p>
                <p className="mt-2 text-sm text-text-muted">{r.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto grid max-w-content gap-14 px-[var(--gutter)] lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">The challenge</span>
            <p className="mt-4 text-lg leading-relaxed text-text">{project.challenge}</p>
          </Reveal>
          <Reveal>
            <span className="eyebrow">Our solution</span>
            <p className="mt-4 text-lg leading-relaxed text-text">{project.solution}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-content px-[var(--gutter)]">
          <Reveal className="mb-8">
            <span className="eyebrow">Deliverables</span>
            <h2 className="mt-3 text-2xl font-extrabold text-heading">What we shipped</h2>
          </Reveal>
          <Reveal stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.deliverables.map((d) => (
              <RevealItem
                key={d}
                className="flex items-center gap-3 rounded-card border border-border bg-surface p-5"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-accent/10 text-accent">
                  <Icon name="check" size={16} />
                </span>
                <span className="text-sm font-medium text-heading">{d}</span>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="pb-8">
        <div className="mx-auto max-w-content px-[var(--gutter)]">
          <Link
            href={`/work/${next.slug}`}
            className="group flex items-center justify-between gap-4 rounded-card border border-border bg-surface p-6 shadow-card transition-all duration-[400ms] ease-signature hover:border-accent/30 hover:shadow-glow"
          >
            <span>
              <span className="eyebrow text-text-muted">Next project</span>
              <p className="mt-2 font-display text-lg font-bold text-heading">{next.title}</p>
            </span>
            <Icon
              name="arrow"
              size={22}
              className="text-accent transition-transform duration-[400ms] ease-signature group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

    </>
  );
}
