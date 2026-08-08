import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import { site } from "@/data/site";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";
import DetailHeroImage from "@/components/DetailHeroImage";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} (Sample Project)`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${site.url}/projects` },
      { "@type": "ListItem", position: 3, name: project.title, item: `${site.url}/projects/${project.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PageHero title={project.title} crumbs={[{ label: "Projects", href: "/projects" }, { label: project.title }]} />

      <section className="bg-bg">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <DetailHeroImage
            category="projects"
            slug={project.slug}
            alt={project.title}
            aspect="aspect-[3/2]"
            className="mb-8"
          />
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime/15 text-lime">
              <Icon name={project.icon} size={22} />
            </span>
            <span className="rounded-full border border-amber/40 bg-amber/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber">
              Sample project
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-faint">
              {project.category}
            </span>
          </div>

          <p className="mt-6 text-base leading-relaxed text-muted">{project.summary}</p>

          <h2 className="mt-10 text-xl font-semibold text-white">Approach</h2>
          <p className="mt-3 text-base leading-relaxed text-muted">{project.approach}</p>

          <h2 className="mt-10 text-xl font-semibold text-white">Scope</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {project.scope.map((item) => (
              <li key={item} className="card-surface flex items-start gap-3 rounded-xl p-4">
                <Icon name="CheckCircle2" size={18} className="mt-0.5 shrink-0 text-lime" />
                <span className="text-sm text-body">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-xl border border-amber/30 bg-amber/5 p-5 text-sm text-muted">
            This is a sample outline illustrating my approach, not a completed client engagement with
            real results. Every real project starts with a discovery call specific to your business.
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Let's Talk"
        heading="Want This Kind of Project for"
        highlight="Your Business?"
        description="Let's discuss a real engagement built around your actual goals and numbers."
      />
    </>
  );
}
