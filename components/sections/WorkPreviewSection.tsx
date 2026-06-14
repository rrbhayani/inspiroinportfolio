import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealItem } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { featuredProjects } from "@/lib/projects";

export function WorkPreviewSection() {
  return (
    <section className="bg-surface py-24 md:py-32" aria-label="Featured projects">
      <div className="mx-auto max-w-content px-[var(--gutter)]">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Our Projects"
            title="Projects we've done"
            subtitle="Live Shopify stores and custom platforms in production — each with a URL you can share when clients ask for proof of work."
          />
          <Button href="/work" variant="ghost" withArrow>
            View all projects
          </Button>
        </div>

        <Reveal stagger className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <RevealItem key={project.slug}>
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
