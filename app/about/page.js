import Image from "next/image";
import { site } from "@/data/site";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import StatsRow from "@/components/StatsRow";
import SkillBars from "@/components/SkillBars";
import ToolsStrip from "@/components/ToolsStrip";
import CtaBanner from "@/components/CtaBanner";
import Icon from "@/components/Icon";
import MonogramPortrait from "@/components/MonogramPortrait";
import JsonLd from "@/components/JsonLd";
import { getImage } from "@/lib/images";
import { milestones } from "@/data/content";

export const metadata = {
  title: "About Zohaib Mayo",
  description:
    "Meet Zohaib Mayo, a full-stack digital marketer working across Pakistan and the GCC — the story, the skills, and the way he approaches every project.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const photo1 = getImage("about", "photo-1");
  const photo2 = getImage("about", "photo-2");

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: `${site.url}/about`,
    email: `mailto:${site.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.line1,
      addressCountry: site.address.line2,
    },
    sameAs: Object.values(site.social),
  };

  return (
    <>
      <JsonLd data={personSchema} />
      <PageHero title="About Me" crumbs={[{ label: "About" }]} />

      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative mx-auto w-full max-w-sm">
              {photo1 ? (
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
                  <Image
                    src={photo1}
                    alt={`${site.name} at work`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 384px"
                  />
                </div>
              ) : (
                <MonogramPortrait />
              )}
              {photo2 ? (
                <div className="absolute -bottom-8 -right-6 hidden aspect-[4/5] w-32 overflow-hidden rounded-2xl border-4 border-bg shadow-xl sm:block">
                  <Image
                    src={photo2}
                    alt={`${site.name} portrait detail`}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
              ) : null}
            </div>
            <div>
              <SectionHeader
                align="left"
                eyebrow="Who I Am"
                heading="One Person, the Whole"
                highlight="Marketing Stack."
              />
              <p className="mt-5 text-base leading-relaxed text-muted">
                I&rsquo;m {site.name}, a full-stack digital marketer. That means I don&rsquo;t just plan a
                strategy and pass it along — I build the campaigns, write the content, ship the
                landing pages, and read the analytics myself. It keeps the work coherent: the
                person who wrote the ad copy is the same person watching whether it converts.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                I work primarily with businesses in Pakistan and the GCC, with real estate as a
                specialty, alongside e-commerce, hospitality, healthcare, SaaS, and local service
                clients remotely worldwide.
              </p>
              <div className="mt-8">
                <StatsRow />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="panel-section">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <SectionHeader
            eyebrow="Career Timeline"
            heading="Milestones Along the"
            highlight="Way."
            description="From first SEO client to running dedicated real estate marketing brands — here's the path so far."
          />
          <div className="mt-12 flex flex-col gap-4">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="card-surface flex items-start gap-4 rounded-xl p-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-lime/15 text-sm font-semibold text-lime">
                  {milestone.year}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">{milestone.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{milestone.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader eyebrow="Skills" heading="Skills" highlight="Breakdown." />
          <div className="mt-12">
            <SkillBars />
          </div>
        </div>
      </section>

      <section className="panel-section">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader eyebrow="Tools" heading="Tools I've" highlight="Mastered." />
          <div className="mt-12">
            <ToolsStrip />
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <SectionHeader
              align="left"
              eyebrow="Where I Work"
              heading="Working Across"
              highlight="Pakistan & the GCC."
              description="Based in Lahore, Pakistan, working with clients across Pakistan and the GCC region — plus remote clients worldwide. That regional footprint means I understand local search behavior, payment norms, and how buyers in these markets actually make decisions, not just how to run a generic global campaign."
            />
            <ul className="flex flex-col gap-4">
              {[
                "Native understanding of Pakistan's digital landscape and consumer behavior",
                "Experience with GCC market dynamics across UAE, Saudi Arabia, and neighboring markets",
                "Comfortable working across time zones with remote clients worldwide",
                "Bilingual content and campaign sensitivity where needed",
              ].map((item) => (
                <li key={item} className="card-surface flex items-start gap-3 rounded-xl p-4">
                  <Icon name="Globe" size={18} className="mt-0.5 shrink-0 text-lime" />
                  <span className="text-sm text-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Let's Work Together"
        heading="Have a Project in"
        highlight="Mind?"
        description="Tell me where your marketing stands today and where you want it to go."
      />
    </>
  );
}
