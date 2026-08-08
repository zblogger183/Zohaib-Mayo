import fs from "node:fs";
import path from "node:path";

// Server components only — relies on Node's fs module.
export function getImage(category, slug) {
  const filePath = path.join(process.cwd(), "public", "images", category, `${slug}.webp`);
  return fs.existsSync(filePath) ? `/images/${category}/${slug}.webp` : null;
}
