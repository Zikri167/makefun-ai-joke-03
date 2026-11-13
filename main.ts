import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Angle: the agent asks for review after the fix has already reached its postmortem.
const joke = "My AI coding agent asked me to review its fix. It had already merged it, deployed it, and written the postmortem.";
if (joke.length === 0 || joke.length > 280) {
  throw new Error('Joke must contain between 1 and 280 characters.');
}
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(outputDir, 'entry.txt'), joke);
