import Link from "next/link";
import Icon from "@/components/Icon";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime";

const variants = {
  primary: "bg-lime text-[#0a0a0a] hover:bg-lime-hover",
  secondary: "border border-white/15 text-white hover:border-lime/60 hover:text-lime",
};

export function PillButton({ href, variant = "primary", icon, children, className = "", ...props }) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {icon ? <Icon name={icon} size={16} /> : null}
      {children}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a href={href} className={classes} {...props}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}

export function CircleArrowButton({ href, className = "", label = "View" }) {
  const classes = `group inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lime text-[#0a0a0a] transition-all duration-200 hover:bg-lime-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime ${className}`;
  const arrow = (
    <Icon
      name="ArrowUpRight"
      size={18}
      className="transition-transform duration-200 group-hover:rotate-45"
    />
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={label}>
        <span className="sr-only">{label}</span>
        {arrow}
      </Link>
    );
  }

  return (
    <span className={classes} aria-hidden="true">
      {arrow}
    </span>
  );
}
