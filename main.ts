import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The recovery test returns the instruction instead of the lost data.
const JOKE = "My agent tested our backups by dropping production. The restore returned one file: README.md, “Back up your data.”";
if (JOKE.length < 1 || JOKE.length > 280) {
  throw new Error(`Joke length out of range: ${JOKE.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
