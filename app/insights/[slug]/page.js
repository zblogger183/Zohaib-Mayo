import { notFound } from "next/navigation";
import Link from "next/link";
import { insights, getInsightBySlug } from "@/data/insights";
import { getServiceBySlug } from "@/data/services";
import { getIndustryBySlug } from "@/data/industries";
import { getCaseStudyBySlug } from "@/data/case-studies";
import { site } from "@/data/site";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";
import DetailHeroImage from "@/components/DetailHeroImage";

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return {};

  return {
    title: insight.metaTitle,
    description: insight.metaDescription,
    alternates: { canonical: `/insights/${insight.slug}` },
  };
}

export default async function InsightDetailPage({ params }) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) notFound();

  const relatedServices = (insight.relatedServices || []).map(getServiceBySlug).filter(Boolean);
  const relatedIndustries = (insight.relatedIndustries || []).map(getIndustryBySlug).filter(Boolean);
  const relatedCaseStudies = (insight.relatedCaseStudies || []).map(getCaseStudyBySlug).filter(Boolean);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.metaDescription,
    datePublished: insight.publishedDate,
    dateModified: insight.publishedDate,
    author: { "@type": "Person", name: site.name, url: `${site.url}/about` },
    publisher: { "@type": "Person", name: site.name },
    mainEntityOfPage: `${site.url}/insights/${insight.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Insights", item: `${site.url}/insights` },
      { "@type": "ListItem", position: 3, name: insight.title, item: `${site.url}/insights/${insight.slug}` },
    ],
  };

  const publishedLabel = new Date(insight.publishedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <PageHero title={insight.title} crumbs={[{ label: "Insights", href: "/insights" }, { label: insight.category }]} />

      <section className="bg-bg">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <DetailHeroImage category="insights" slug={insight.slug} alt={insight.title} className="mb-8" />

          <div className="flex flex-wrap items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime/15 text-lime">
              <Icon name={insight.icon} size={22} />
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-faint">
              {insight.category}
            </span>
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-faint">
              <Icon name="Calendar" size={14} className="text-lime" />
              {publishedLabel}
            </span>
          </div>

          <p className="mt-6 text-base leading-relaxed text-muted">{insight.heroIntro}</p>

          <div className="mt-10 flex flex-col gap-8">
            {insight.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-semibold text-white">{section.heading}</h2>
                <p className="mt-2 text-base leading-relaxed text-muted">{section.body}</p>
              </div>
            ))}
          </div>

          {insight.keyTakeaways && insight.keyTakeaways.length > 0 ? (
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {insight.keyTakeaways.map((item) => (
                  <li key={item} className="card-surface flex items-start gap-3 rounded-xl p-4">
                    <Icon name="CheckCircle2" size={18} className="mt-0.5 shrink-0 text-lime" />
                    <span className="text-sm text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {relatedServices.length > 0 || relatedIndustries.length > 0 || relatedCaseStudies.length > 0 ? (
            <div className="mt-12 border-t border-white/10 pt-10">
              <h2 className="text-xl font-semibold text-white">Related</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {relatedServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-muted transition-colors hover:border-lime/50 hover:text-lime"
                  >
                    Service — {service.name}
                  </Link>
                ))}
                {relatedIndustries.map((industry) => (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-muted transition-colors hover:border-lime/50 hover:text-lime"
                  >
                    Industry — {industry.name}
                  </Link>
                ))}
                {relatedCaseStudies.map((study) => (
                  <Link
                    key={study.slug}
                    href={`/case-studies/${study.slug}`}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-muted transition-colors hover:border-lime/50 hover:text-lime"
                  >
                    Case Study — {study.client}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <CtaBanner
        eyebrow="Let's Talk"
        heading="Want Help Applying"
        highlight="This to Your Business?"
        description="Book a free call and I'll tell you honestly whether this applies to your situation."
      />
    </>
  );
}
