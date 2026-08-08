import Image from "next/image";
import { getImage } from "@/lib/images";

export default function CardImage({ category, slug, alt, aspect = "aspect-[4/3]" }) {
  const src = getImage(category, slug);
  if (!src) return null;

  return (
    <div className={`relative -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 ${aspect} overflow-hidden rounded-t-2xl`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, 420px"
      />
    </div>
  );
}
