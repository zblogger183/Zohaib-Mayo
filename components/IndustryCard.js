import Link from "next/link";
import Icon from "@/components/Icon";
import { CircleArrowButton } from "@/components/Buttons";
import CardImage from "@/components/CardImage";

export default function IndustryCard({ industry }) {
  return (
    <div className="card-surface flex flex-col gap-5 overflow-hidden rounded-2xl p-6 sm:p-8">
      <CardImage category="industries" slug={industry.slug} alt={industry.name} />
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber/15 text-amber">
        <Icon name={industry.icon} size={22} />
      </span>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-white">
          <Link href={`/industries/${industry.slug}`} className="hover:text-lime transition-colors">
            {industry.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{industry.summary}</p>
      </div>
      <div className="flex items-center justify-between pt-2">
        <Link
          href={`/industries/${industry.slug}`}
          className="text-sm font-semibold text-lime hover:text-lime-hover transition-colors"
        >
          Learn more
        </Link>
        <CircleArrowButton href={`/industries/${industry.slug}`} label={`View ${industry.name}`} />
      </div>
    </div>
  );
}
