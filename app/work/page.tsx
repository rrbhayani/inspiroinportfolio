import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealItem } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects We've Done",
  description:
    "INSPIROIN projects — live Shopify stores, custom websites, marketplaces, and admin platforms you can visit today.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Projects"
        title="Projects we've done"
        lede="Live Shopify stores and custom platforms we've built — each with a URL you can explore today."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-content px-[var(--gutter)]">
          <Reveal stagger className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <RevealItem key={project.slug}>
                <ProjectCard project={project} />
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

    </>
  );
}
