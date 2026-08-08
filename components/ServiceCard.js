import Link from "next/link";
import Icon from "@/components/Icon";
import { CircleArrowButton } from "@/components/Buttons";
import CardImage from "@/components/CardImage";

export default function ServiceCard({ service }) {
  return (
    <div className="card-surface relative flex flex-col gap-5 overflow-hidden rounded-2xl p-6 sm:p-8">
      <CardImage category="services" slug={service.slug} alt={service.name} />
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime/15 text-lime">
          <Icon name={service.icon} size={22} />
        </span>
        <span className="font-heading text-3xl font-bold text-white/10">{service.number}</span>
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-semibold text-white">
          <Link href={`/services/${service.slug}`} className="hover:text-lime transition-colors">
            {service.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>
      </div>

      <div className="flex items-center justify-between pt-2">
        <Link
          href={`/services/${service.slug}`}
          className="text-sm font-semibold text-lime hover:text-lime-hover transition-colors"
        >
          Learn more
        </Link>
        <CircleArrowButton href={`/services/${service.slug}`} label={`View ${service.name}`} />
      </div>
    </div>
  );
}
