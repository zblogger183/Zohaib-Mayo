import Link from "next/link";
import Icon from "@/components/Icon";

export default function PageHero({ title, crumbs = [] }) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-bg">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(157, 230, 0,0.12), transparent 45%), radial-gradient(circle at 80% 0%, rgba(255, 194, 12,0.10), transparent 40%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-10 sm:py-14 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">{title}</h1>
        <nav aria-label="Breadcrumb" className="mt-4 flex items-center justify-center gap-2 text-sm text-muted">
          <Link href="/" className="hover:text-lime transition-colors">
            Home
          </Link>
          {crumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-2">
              <Icon name="ChevronRight" size={14} className="text-faint" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-lime transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-amber">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
