import { PillButton } from "@/components/Buttons";
import { site } from "@/data/site";

export default function CtaBanner({
  eyebrow = "Get Started",
  heading = "Ready to Grow Your",
  highlight = "Marketing Results?",
  description = "Tell me about your business and goals — I'll reply with honest next steps, not a canned pitch.",
  ctaLabel = "Contact Now",
  ctaHref = "/contact",
}) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 15% 30%, rgba(163,230,53,0.16), transparent 45%), radial-gradient(circle at 85% 70%, rgba(242,169,59,0.14), transparent 45%), #0b120c",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="card-surface flex flex-col items-center gap-6 rounded-3xl px-6 py-12 text-center sm:px-16">
          <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber">
            <span className="h-px w-8 bg-amber/50" />
            {eyebrow}
            <span className="h-px w-8 bg-amber/50" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {heading} <span className="text-amber">{highlight}</span>
          </h2>
          <p className="max-w-xl text-sm sm:text-base text-muted">{description}</p>
          <PillButton href={ctaHref} icon="Phone">
            {ctaLabel}
          </PillButton>
          <p className="text-xs text-faint">
            or email directly at{" "}
            <a href={`mailto:${site.email}`} className="text-lime hover:text-lime-hover">
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
