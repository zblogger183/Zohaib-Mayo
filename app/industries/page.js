import { industries } from "@/data/industries";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import IndustryCard from "@/components/IndustryCard";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Industries",
  description:
    "Industries Zohaib Mayo works with — real estate, e-commerce, hospitality, healthcare, SaaS, and local home services — across Pakistan, the GCC, and remote worldwide.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesHubPage() {
  return (
    <>
      <PageHero title="Industries" crumbs={[{ label: "Industries" }]} />

      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Who I Work With"
            heading="Marketing Built for Your"
            highlight="Specific Industry."
            description="Real estate is my core market. Beyond that, I work across e-commerce, hospitality, healthcare, SaaS, and local service businesses."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <IndustryCard key={industry.slug} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Don't See Your Industry?"
        heading="Let's Talk About Your"
        highlight="Business Anyway."
        description="These are the industries I work with most, not the only ones. Reach out and let's see if it's a fit."
      />
    </>
  );
}
