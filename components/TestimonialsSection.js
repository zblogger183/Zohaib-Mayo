import Icon from "@/components/Icon";

export default function TestimonialsSection() {
  return (
    <div className="card-surface mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-2xl px-6 py-12 text-center sm:px-12">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lime/15 text-lime">
        <Icon name="MessageCircle" size={22} />
      </span>
      <h3 className="text-xl font-semibold text-white">Client testimonials are coming soon.</h3>
      <p className="text-sm leading-relaxed text-muted">
        This section will feature real feedback as projects go live — check back soon. In the
        meantime, get in touch and be one of the first case studies here.
      </p>
    </div>
  );
}
