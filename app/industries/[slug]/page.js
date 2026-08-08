import { notFound } from "next/navigation";
import { industries, getIndustryBySlug } from "@/data/industries";
import { site } from "@/data/site";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";
import DetailHeroImage from "@/components/DetailHeroImage";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: { canonical: `/industries/${industry.slug}` },
  };
}

export default async function IndustryDetailPage({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Industries", item: `${site.url}/industries` },
      {
        "@type": "ListItem",
        position: 3,
        name: industry.name,
        item: `${site.url}/industries/${industry.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PageHero
        title={industry.name}
        crumbs={[{ label: "Industries", href: "/industries" }, { label: industry.name }]}
      />

      <section className="bg-bg">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <DetailHeroImage
            category="industries"
            slug={industry.slug}
            alt={industry.name}
            className="mb-8"
          />
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber/15 text-amber">
            <Icon name={industry.icon} size={26} />
          </span>
          <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-white">
            Digital Marketing for {industry.name}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted">{industry.heroIntro}</p>

          <div className="mt-10 flex flex-col gap-4">
            {industry.points.map((point) => (
              <div key={point} className="card-surface flex items-start gap-3 rounded-xl p-5">
                <Icon name="CheckCircle2" size={20} className="mt-0.5 shrink-0 text-lime" />
                <p className="text-sm leading-relaxed text-body">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Let's Talk"
        heading={`Ready to Grow Your`}
        highlight={`${industry.name} Business?`}
        description="Book a free call and let's talk specifics about your market and goals."
      />
    </>
  );
}
