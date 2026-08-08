import Link from "next/link";
import Icon from "@/components/Icon";
import { CircleArrowButton } from "@/components/Buttons";
import CardImage from "@/components/CardImage";

export default function ProjectCard({ project }) {
  return (
    <div className="card-surface flex flex-col gap-5 overflow-hidden rounded-2xl p-6 sm:p-8">
      <CardImage category="projects" slug={project.slug} alt={project.title} aspect="aspect-[3/2]" />
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime/15 text-lime">
          <Icon name={project.icon} size={22} />
        </span>
        <span className="rounded-full border border-amber/40 bg-amber/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber">
          Sample project
        </span>
      </div>
      <div className="flex-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-faint">{project.category}</p>
        <h3 className="mt-1 text-lg font-semibold text-white">
          <Link href={`/projects/${project.slug}`} className="hover:text-lime transition-colors">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
      </div>
      <div className="flex items-center justify-between pt-2">
        <Link
          href={`/projects/${project.slug}`}
          className="text-sm font-semibold text-lime hover:text-lime-hover transition-colors"
        >
          View approach
        </Link>
        <CircleArrowButton href={`/projects/${project.slug}`} label={`View ${project.title}`} />
      </div>
    </div>
  );
}
