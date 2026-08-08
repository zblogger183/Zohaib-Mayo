import { projects } from "@/data/projects";
import { pricingPlans } from "@/data/content";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import PricingSection from "@/components/PricingSection";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Projects",
  description:
    "Sample project outlines from Zohaib Mayo showing how each marketing engagement would be approached — SEO, PPC, CRO, real estate lead generation, and social.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsHubPage() {
  return (
    <>
      <PageHero title="Projects" crumbs={[{ label: "Projects" }]} />

      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Sample Work"
            heading="Where Strategy Meets"
            highlight="Execution."
            description="These are illustrative sample projects — outlines of how I'd approach each engagement, not completed client work with invented results."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="panel-section">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Pricing"
            heading="Straightforward Plans for"
            highlight="Every Stage."
            description="Starting prices — every engagement is scoped to your goals on a call first."
          />
          <div className="mt-12">
            <PricingSection plans={pricingPlans} />
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Your Project"
        heading="Have a Real Project to"
        highlight="Discuss?"
        description="These samples show my approach. Let's talk about what your actual project needs."
      />
    </>
  );
}
