import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const port = 3001;
const baseUrl = `http://localhost:${port}`;

const routes = [
  { path: "/", name: "home" },
  { path: "/services", name: "services" },
  { path: "/services/seo", name: "services-seo" },
  { path: "/projects", name: "projects" },
  { path: "/contact", name: "contact" },
];

async function isServerUp() {
  try {
    const res = await fetch(baseUrl, { signal: AbortSignal.timeout(1500) });
    return res.status < 500;
  } catch {
    return false;
  }
}

async function waitForServer(timeoutMs = 60000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (await isServerUp()) return true;
    await sleep(1000);
  }
  return false;
}

async function main() {
  let devProcess = null;
  const alreadyRunning = await isServerUp();

  if (!alreadyRunning) {
    console.log(`No server on ${baseUrl}, starting next dev -p ${port} ...`);
    devProcess = spawn("npx", ["next", "dev", "-p", String(port)], {
      cwd: root,
      shell: true,
      stdio: "inherit",
    });
    const up = await waitForServer();
    if (!up) {
      throw new Error("Dev server did not become ready in time");
    }
  } else {
    console.log(`Reusing existing server on ${baseUrl}`);
  }

  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const outDir = path.join(root, "screenshots");

  for (const route of routes) {
    const url = `${baseUrl}${route.path}`;
    console.log(`Screenshotting ${url}`);
    await page.goto(url, { waitUntil: "networkidle" });
    await page.waitForTimeout(400);

    const outPath = path.join(outDir, `${route.name}.png`);
    await page.screenshot({ path: outPath, fullPage: true });
    console.log(`  -> ${outPath}`);

    // Also crop each top-level block inside <main> so tall pages are
    // reviewable in section-sized chunks instead of one giant image.
    const blocks = page.locator("main > *");
    const count = await blocks.count();
    for (let i = 0; i < count; i++) {
      const block = blocks.nth(i);
      const sectionPath = path.join(outDir, `${route.name}-section-${String(i + 1).padStart(2, "0")}.png`);
      try {
        await block.scrollIntoViewIfNeeded({ timeout: 5000 });
        await page.waitForTimeout(1200);
        await block.screenshot({ path: sectionPath, timeout: 5000 });
      } catch (err) {
        console.log(`  (skip section ${i + 1}: ${err.message.split("\n")[0]})`);
      }
    }
  }

  await browser.close();

  if (devProcess) {
    devProcess.kill();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
