import Link from "next/link";
import Icon from "@/components/Icon";
import { CircleArrowButton } from "@/components/Buttons";
import CardImage from "@/components/CardImage";

export default function InsightCard({ insight }) {
  return (
    <div className="card-surface flex flex-col gap-5 overflow-hidden rounded-2xl p-6 sm:p-8">
      <CardImage category="insights" slug={insight.slug} alt={insight.title} />
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime/15 text-lime">
          <Icon name={insight.icon} size={22} />
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-faint">
          {insight.category}
        </span>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-white">
          <Link href={`/insights/${insight.slug}`} className="hover:text-lime transition-colors">
            {insight.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{insight.summary}</p>
      </div>
      <div className="flex items-center justify-between pt-2">
        <Link
          href={`/insights/${insight.slug}`}
          className="text-sm font-semibold text-lime hover:text-lime-hover transition-colors"
        >
          Read more<span className="sr-only"> — {insight.title}</span>
        </Link>
        <CircleArrowButton href={`/insights/${insight.slug}`} label={`Read ${insight.title}`} />
      </div>
    </div>
  );
}
