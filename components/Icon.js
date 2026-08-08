import * as icons from "lucide-react";

export default function Icon({ name, className, size = 20, strokeWidth = 2 }) {
  const LucideIcon = icons[name];
  if (!LucideIcon) return null;
  return <LucideIcon className={className} size={size} strokeWidth={strokeWidth} aria-hidden="true" />;
}
