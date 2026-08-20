import Image from "next/image";
import Link from "next/link";
import { getImage } from "@/lib/images";
import { site } from "@/data/site";

export default function Logo({ onClick }) {
  const logo = getImage("brand", "logo");

  return (
    <Link href="/" className="flex items-center gap-2" onClick={onClick}>
      {logo ? (
        <span className="relative h-9 w-9 shrink-0">
          <Image src={logo} alt={`${site.brand} logo`} fill className="object-contain" sizes="36px" />
        </span>
      ) : (
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime font-heading text-base font-extrabold text-[#0a0a0a]">
          Z
        </span>
      )}
      <span className="font-heading text-sm font-bold tracking-wide text-white">{site.brand}</span>
    </Link>
  );
}
