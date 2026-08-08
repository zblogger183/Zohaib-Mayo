import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug } from "@/data/services";
import { site } from "@/data/site";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import { PillButton } from "@/components/Buttons";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";
import DetailHeroImage from "@/components/DetailHeroImage";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.metaDescription,
    provider: {
      "@type": "Person",
      name: site.name,
    },
    areaServed: ["Pakistan", "United Arab Emirates", "Saudi Arabia", "Remote"],
    url: `${site.url}/services/${service.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
      { "@type": "ListItem", position: 3, name: service.name, item: `${site.url}/services/${service.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <PageHero title="Service Details" crumbs={[{ label: "Services", href: "/services" }, { label: service.name }]} />

      <section className="bg-bg">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-20 lg:grid-cols-[300px_1fr]">
          <aside className="flex flex-col gap-6 lg:order-1">
            <div className="card-surface rounded-2xl p-6">
              <h2 className="text-base font-semibold text-white">Services</h2>
              <ul className="mt-4 flex flex-col gap-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className={`block rounded-full border px-4 py-2 text-sm transition-colors ${
                        s.slug === service.slug
                          ? "border-lime bg-lime text-[#06090a] font-semibold"
                          : "border-white/10 text-muted hover:border-lime/50 hover:text-lime"
                      }`}
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-surface rounded-2xl p-6">
              <h2 className="text-base font-semibold text-white">Get Started</h2>
              <p className="mt-2 text-sm text-muted">
                Ready to talk about {service.shortName.toLowerCase()}? Reach out directly.
              </p>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-body">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-lime" />
                  {site.phone}
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-lime" />
                  {site.email}
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} className="text-lime" />
                  {site.address.line1}, {site.address.line2}
                </li>
              </ul>
            </div>

            <div className="card-surface rounded-2xl p-6 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lime/15 text-lime">
                <Icon name="MessageCircle" size={22} />
              </span>
              <h2 className="mt-3 text-base font-semibold text-white">Have a question?</h2>
              <p className="mt-2 text-sm text-muted">Ask me anything about this service before you commit.</p>
              <PillButton href="/contact" className="mt-4 w-full">
                Contact Now
              </PillButton>
            </div>
          </aside>

          <div className="lg:order-2">
            <DetailHeroImage category="services" slug={service.slug} alt={service.name} />
            <h1 className="mt-8 text-3xl sm:text-4xl font-bold text-white">{service.heroHeading}</h1>
            <p className="mt-4 text-base leading-relaxed text-muted">{service.heroIntro}</p>

            <div className="mt-10 flex flex-col gap-8">
              {service.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-xl font-semibold text-white">{section.heading}</h2>
                  <p className="mt-2 text-base leading-relaxed text-muted">{section.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-center">
              <DetailHeroImage category="services" slug={service.slug} alt={service.name} />
              <ul className="flex flex-col gap-3">
                {service.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-body">
                    <Icon name="CheckCircle2" size={18} className="mt-0.5 shrink-0 text-lime" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Ready?"
        heading={`Let's Talk About Your`}
        highlight={service.shortName}
        description="Book a free call and I'll tell you honestly whether this service is the right starting point."
      />
    </>
  );
}
