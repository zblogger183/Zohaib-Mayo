import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import { CircleArrowButton } from "@/components/Buttons";
import { getImage } from "@/lib/images";

export default function CaseStudyCard({ study }) {
  const logo = getImage("case-studies", study.logo);

  return (
    <div className="card-surface flex flex-col gap-5 overflow-hidden rounded-2xl p-6 sm:p-8">
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime/15 text-lime">
          <Icon name={study.icon} size={22} />
        </span>
        <span className="rounded-full border border-lime/40 bg-lime/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-lime">
          Real client work
        </span>
      </div>

      {logo ? (
        <div className="relative h-10 w-32 self-start overflow-hidden rounded-md bg-white p-2">
          <Image src={logo} alt={`${study.client} logo`} fill className="object-contain" sizes="128px" />
        </div>
      ) : null}

      <div className="flex-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-faint">{study.industry}</p>
        <h3 className="mt-1 text-lg font-semibold text-white">
          <Link href={`/case-studies/${study.slug}`} className="hover:text-lime transition-colors">
            {study.client}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{study.summary}</p>
      </div>

      <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
        {study.metrics.map((metric) => (
          <div key={metric.label}>
            <div className="font-heading text-lg font-bold text-lime">{metric.value}</div>
            <div className="text-[11px] text-faint">{metric.label}</div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-2">
        <Link
          href={`/case-studies/${study.slug}`}
          className="text-sm font-semibold text-lime hover:text-lime-hover transition-colors"
        >
          View case study
        </Link>
        <CircleArrowButton href={`/case-studies/${study.slug}`} label={`View ${study.client} case study`} />
      </div>
    </div>
  );
}
