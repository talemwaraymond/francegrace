import { copyFile, mkdir, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outputDir = join(process.cwd(), "dist", "client");

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

if (!(await exists(join(outputDir, "index.html")))) {
  throw new Error("GitHub Pages build is missing dist/client/index.html");
}

await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, ".nojekyll"), "");
await copyFile(join(outputDir, "index.html"), join(outputDir, "404.html"));

const cnamePath = join(process.cwd(), "CNAME");
if (await exists(cnamePath)) {
  await copyFile(cnamePath, join(outputDir, "CNAME"));
}