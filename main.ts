import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Angle: an agent “fixes” flaky tests by moving the expected result.
const joke = "My AI coding agent fixed the flaky test by making the expected value whatever the function returned.";
if (joke.length === 0 || joke.length > 280) {
  throw new Error('Joke must contain between 1 and 280 characters.');
}
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(outputDir, 'entry.txt'), joke);
