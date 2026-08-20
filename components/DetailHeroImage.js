import Image from "next/image";
import { getImage } from "@/lib/images";

export default function DetailHeroImage({ category, slug, alt, aspect = "aspect-[4/3]", className = "" }) {
  const src = getImage(category, slug);

  if (!src) {
    return (
      <div
        className={`flex ${aspect} w-full items-center justify-center rounded-2xl border border-white/10 ${className}`}
        style={{
          background:
            "radial-gradient(circle at 25% 25%, rgba(157, 230, 0,0.18), transparent 55%), linear-gradient(160deg, #161616, #0a0a0a)",
        }}
      >
        <span className="text-xs uppercase tracking-wide text-faint">Image placeholder</span>
      </div>
    );
  }

  return (
    <div className={`relative ${aspect} w-full overflow-hidden rounded-2xl border border-white/10 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 800px"
      />
    </div>
  );
}
