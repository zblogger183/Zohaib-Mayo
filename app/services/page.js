import { services } from "@/data/services";
import { faqs } from "@/data/content";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Services",
  description:
    "Full-stack digital marketing services from Zohaib Mayo — SEO, paid advertising, social media, content, email, web development, CRO, and analytics.",
  alternates: { canonical: "/services" },
};

export default function ServicesHubPage() {
  return (
    <>
      <PageHero title="Services" crumbs={[{ label: "Services" }]} />

      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="What I Do"
            heading="Eight Channels, One"
            highlight="Accountable Operator."
            description="Every service below is run end to end by me — strategy, execution, and reporting under one roof."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="panel-section">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <SectionHeader
            eyebrow="FAQs"
            heading="Your Questions, My Clear and"
            highlight="Honest Answers."
          />
          <div className="mt-12">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Get Started"
        heading="Not Sure Which Service"
        highlight="You Need?"
        description="Tell me what you're trying to achieve and I'll recommend where to start."
      />
    </>
  );
}
