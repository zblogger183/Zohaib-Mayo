import Image from "next/image";
import { getImage } from "@/lib/images";
import MonogramPortrait from "@/components/MonogramPortrait";

export default function PortraitPhoto({ category, slug, alt, className = "" }) {
  const src = getImage(category, slug);
  if (!src) return <MonogramPortrait className={className} />;

  return (
    <div className={`relative aspect-[61/110] w-full overflow-hidden rounded-2xl ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, 460px"
        priority
      />
    </div>
  );
}
