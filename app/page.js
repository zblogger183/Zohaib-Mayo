import Link from "next/link";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { caseStudies } from "@/data/case-studies";
import { processSteps, pricingPlans, faqs } from "@/data/content";
import { PillButton, CircleArrowButton } from "@/components/Buttons";
import PortraitPhoto from "@/components/PortraitPhoto";
import SocialIcon from "@/components/SocialIcons";
import Icon from "@/components/Icon";
import SectionHeader from "@/components/SectionHeader";
import Marquee from "@/components/Marquee";
import StatsRow from "@/components/StatsRow";
import ToolsStrip from "@/components/ToolsStrip";
import ServiceCard from "@/components/ServiceCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import ProjectCard from "@/components/ProjectCard";
import SkillBars from "@/components/SkillBars";
import ProcessSteps from "@/components/ProcessSteps";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.description,
  alternates: { canonical: "/" },
};

const socialLinks = [
  { key: "facebook", href: site.social.facebook, label: "Facebook" },
  { key: "linkedin", href: site.social.linkedin, label: "LinkedIn" },
  { key: "instagram", href: site.social.instagram, label: "Instagram" },
  { key: "threads", href: site.social.threads, label: "Threads" },
  { key: "youtube", href: site.social.youtube, label: "YouTube" },
  { key: "x", href: site.social.x, label: "X (Twitter)" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 12% 15%, rgba(157, 230, 0,0.14), transparent 40%), radial-gradient(circle at 90% 5%, rgba(255, 194, 12,0.12), transparent 40%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.25fr_1.05fr_0.9fr]">
            {/* Left: name, role, CTAs */}
            <div className="text-center sm:text-left">
              <p className="text-sm font-medium text-muted">I&rsquo;m</p>
              <h1 className="mt-2 text-4xl sm:text-5xl font-bold leading-tight text-white">
                {site.name}, <span className="text-amber">{site.role}.</span>
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted mx-auto sm:mx-0">{site.tagline}</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
                <PillButton href="/contact" icon="Phone">
                  Hire Me Now
                </PillButton>
                <CircleArrowButton href="/projects" label="View my work" />
              </div>
              <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted sm:justify-start">
                <Icon name="Globe" size={16} className="text-lime" />
                {site.domain}
              </div>
            </div>

            {/* Center: portrait with decorative rings tucked behind it */}
            <div className="relative mx-auto w-full max-w-sm">
              <span
                className="absolute -top-4 left-10 z-0 hidden h-11 w-11 rounded-full border-2 border-lime sm:block"
                aria-hidden="true"
              />
              <span
                className="absolute -top-2 left-[4.5rem] z-0 hidden h-6 w-6 rounded-full border-2 border-amber sm:block"
                aria-hidden="true"
              />
              <span
                className="absolute top-6 -right-3 z-0 hidden h-4 w-4 rounded-full bg-amber sm:block"
                aria-hidden="true"
              />
              <PortraitPhoto
                category="hero"
                slug="portrait"
                alt={`${site.name} portrait`}
                className="relative z-10"
              />
            </div>

            {/* Right: specialized-in blurb */}
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold text-lime">
                <Icon name="Bookmark" size={16} />
                Specialized In
              </p>
              <p className="mt-3 text-lg font-bold leading-snug text-white">
                Building digital marketing systems that turn traffic into revenue.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                I plan, launch, and optimize SEO, paid media, content, and web builds — one
                accountable owner, end to end.
              </p>
              <Link
                href="/services"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-lime transition-colors"
              >
                View Services
                <Icon name="ArrowRight" size={16} />
              </Link>
              <div className="mt-8 flex items-center gap-4">
                <span className="text-sm font-semibold text-white">Follow Me:</span>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.key}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-lime text-[#0a0a0a] transition-colors hover:bg-lime-hover"
                    >
                      <SocialIcon name={social.key} className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* About teaser */}
      <section className="panel-section">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <SectionHeader
              align="left"
              eyebrow="About Me"
              heading="Marketing, Built Like"
              highlight="Software — End to End."
              description="I don't hand off strategy to one person and execution to another. I plan the campaign, write the copy, build the landing page, and read the analytics — one person accountable for the whole system."
            />
            <StatsRow />
          </div>
          <div className="mt-12">
            <ToolsStrip />
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeader
              align="left"
              eyebrow="Services"
              heading="Delivering Results Through"
              highlight="Experience."
              description="Full-stack digital marketing — every channel it takes to turn traffic into revenue."
            />
            <PillButton href="/services" icon="ArrowRight">
              View All
            </PillButton>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Let's Talk"
        heading="Let's Build Something That"
        highlight="Actually Grows Revenue."
        description="I'm currently taking on new projects across Pakistan, the GCC, and remote clients worldwide."
      />

      {/* Case studies */}
      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeader
              align="left"
              eyebrow="Real Work"
              heading="Real Clients,"
              highlight="Real Results."
              description="Completed and ongoing engagements I've led end to end — actual numbers, not projections."
            />
            <PillButton href="/case-studies" icon="ArrowRight">
              View All
            </PillButton>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="panel-section">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeader
              align="left"
              eyebrow="Projects"
              heading="Where Strategy Meets"
              highlight="Execution."
              description="Sample project outlines showing how I'd approach each engagement — illustrative, not completed client work."
            />
            <PillButton href="/projects" icon="ArrowRight">
              View All
            </PillButton>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Skills"
            heading="Core Skills Behind"
            highlight="My Work."
            description="Self-rated proficiency across the channels I run day to day."
          />
          <div className="mt-12">
            <SkillBars />
          </div>
        </div>
      </section>

      {/* Work process */}
      <section className="panel-section">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Work Process"
            heading="Step-by-Step Process Behind"
            highlight="Every Project."
            description="The same six-stage process, applied to every engagement regardless of channel."
          />
          <div className="mt-12">
            <ProcessSteps steps={processSteps} />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Pricing"
            heading="Straightforward Plans for"
            highlight="Every Stage."
            description="Starting prices — every engagement is scoped to your goals on a call first."
          />
          <div className="mt-12">
            <PricingSection plans={pricingPlans} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="panel-section">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Client Review"
            heading="Trusted by Clients,"
            highlight="Honestly."
            description="No invented reviews here — real feedback will show up as projects go live."
          />
          <div className="mt-12">
            <TestimonialsSection />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg">
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

      {/* Contact */}
      <section className="panel-section">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-20 lg:grid-cols-2">
          <div className="card-surface rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white">
              Connect With <span className="text-amber">Us.</span>
            </h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <div>
            <SectionHeader
              align="left"
              eyebrow="Contact Us"
              heading="Get In Touch"
              highlight="With Me."
              description="Have a project or question? Reach out anytime — I read every message myself."
            />
            <ul className="mt-6 flex flex-col gap-3">
              {[
                "Smart planning for measurable results",
                "Deep evaluation of your current channels",
                "Direct answers, no agency runaround",
                "Ongoing support after launch",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-body">
                  <Icon name="Check" size={16} className="text-lime" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="card-surface rounded-xl p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-faint">Our Address</p>
                <p className="mt-2 text-sm text-body">
                  {site.address.line1}, {site.address.line2}
                </p>
              </div>
              <div className="card-surface rounded-xl p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-faint">Connect With Me</p>
                <p className="mt-2 text-sm text-body">{site.email}</p>
                <p className="text-sm text-body">{site.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
