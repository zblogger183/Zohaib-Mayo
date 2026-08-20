import { notFound } from "next/navigation";
import Image from "next/image";
import { caseStudies, getCaseStudyBySlug } from "@/data/case-studies";
import { site } from "@/data/site";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";
import { getImage } from "@/lib/images";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  return {
    title: `${study.client} Case Study`,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
  };
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const logo = getImage("case-studies", study.logo);
  const resultsImage = getImage("case-studies", study.resultsImage);
  const siteScreenshot = study.screenshot ? getImage("case-studies", study.screenshot) : null;
  const gallery = (study.gallery || [])
    .map((item) => ({ ...item, src: getImage("case-studies", item.image) }))
    .filter((item) => item.src);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: `${site.url}/case-studies` },
      { "@type": "ListItem", position: 3, name: study.client, item: `${site.url}/case-studies/${study.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PageHero
        title={study.client}
        crumbs={[{ label: "Case Studies", href: "/case-studies" }, { label: study.client }]}
      />

      <section className="bg-bg">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime/15 text-lime">
              <Icon name={study.icon} size={22} />
            </span>
            <span className="rounded-full border border-lime/40 bg-lime/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-lime">
              Real client work
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-faint">{study.industry}</span>
          </div>

          {logo ? (
            <div className="relative mt-6 h-14 w-44 overflow-hidden rounded-lg bg-white p-3">
              <Image src={logo} alt={`${study.client} logo`} fill className="object-contain" sizes="176px" />
            </div>
          ) : null}

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <span className="flex items-center gap-2">
              <Icon name="Calendar" size={16} className="text-lime" />
              {study.timeframe}
            </span>
            <span className="flex items-center gap-2">
              <Icon name="User" size={16} className="text-lime" />
              {study.role}
            </span>
            {study.url ? (
              <a
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lime hover:text-lime-hover"
              >
                <Icon name="ExternalLink" size={16} />
                Visit site
              </a>
            ) : null}
          </div>

          <p className="mt-6 text-base leading-relaxed text-muted">{study.summary}</p>

          {siteScreenshot ? (
            <div className="relative mt-8 aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={siteScreenshot}
                alt={`${study.client} website`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
          ) : null}

          <h2 className="mt-10 text-xl font-semibold text-white">The Situation</h2>
          <p className="mt-3 text-base leading-relaxed text-muted">{study.situation}</p>

          <h2 className="mt-10 text-xl font-semibold text-white">What I Did</h2>
          <p className="mt-3 text-base leading-relaxed text-muted">{study.approach}</p>

          <h2 className="mt-10 text-xl font-semibold text-white">Results</h2>
          <p className="mt-3 text-base leading-relaxed text-muted">{study.results}</p>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {study.metrics.map((metric) => (
              <div key={metric.label} className="card-surface rounded-xl p-5 text-center">
                <div className="font-heading text-2xl font-bold text-lime">{metric.value}</div>
                <div className="mt-1 text-xs text-muted">{metric.label}</div>
              </div>
            ))}
          </div>

          {resultsImage ? (
            <div className="relative mt-8 aspect-[16/7] w-full overflow-hidden rounded-2xl border border-white/10 bg-white p-3">
              <Image
                src={resultsImage}
                alt={`${study.client} Search Console performance`}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
          ) : null}

          {gallery.length > 0 ? (
            <>
              <h2 className="mt-10 text-xl font-semibold text-white">Platform Screenshots</h2>
              <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {gallery.map((item) => (
                  <figure key={item.image}>
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-white p-3">
                      <Image
                        src={item.src}
                        alt={item.caption}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 400px"
                      />
                    </div>
                    <figcaption className="mt-2 text-xs leading-relaxed text-faint">{item.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </>
          ) : null}

          <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-muted">
            {study.testimonial ? (
              <>
                <Icon name="Quote" size={18} className="text-lime" />
                <p className="mt-2 italic text-body">&ldquo;{study.testimonial.quote}&rdquo;</p>
                <p className="mt-3 text-xs font-semibold text-faint">
                  — {study.testimonial.name}, {study.testimonial.title}
                </p>
              </>
            ) : (
              <p>Client quote pending — will be added here once received from {study.client}.</p>
            )}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Real Results"
        heading="Want Results Like This For"
        highlight="Your Business?"
        description="Let's talk about your goals and what a real engagement would look like."
      />
    </>
  );
}
