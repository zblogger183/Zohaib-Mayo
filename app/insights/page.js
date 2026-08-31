import { insights } from "@/data/insights";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import InsightCard from "@/components/InsightCard";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Insights",
  description:
    "Practical digital marketing insights from Zohaib Mayo — real estate lead generation, SEO, paid ads, and CRM automation for Pakistan and the GCC.",
  alternates: { canonical: "/insights" },
};

export default function InsightsHubPage() {
  return (
    <>
      <PageHero title="Insights" crumbs={[{ label: "Insights" }]} />

      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Written From The Work"
            heading="Notes From Real"
            highlight="Engagements."
            description="No generic marketing advice — everything here comes from what's actually working (or not) on real accounts, starting with real estate."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {insights.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Have A Question?"
        heading="Want This Applied To"
        highlight="Your Business?"
        description="These are the patterns I use — let's talk about how they'd apply to your market and goals."
      />
    </>
  );
}
