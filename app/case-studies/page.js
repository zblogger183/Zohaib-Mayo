import { caseStudies } from "@/data/case-studies";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import CaseStudyCard from "@/components/CaseStudyCard";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Case Studies",
  description:
    "Real client work led end to end by Zohaib Mayo — completed and ongoing digital marketing and web engagements, with real results.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesHubPage() {
  return (
    <>
      <PageHero title="Case Studies" crumbs={[{ label: "Case Studies" }]} />

      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Real Work"
            heading="Real Clients,"
            highlight="Real Results."
            description="Completed and ongoing engagements I've led end to end — actual numbers, not projections."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Your Project"
        heading="Want to Be the Next"
        highlight="Case Study?"
        description="Let's talk about what a real engagement would look like for your business."
      />
    </>
  );
}
