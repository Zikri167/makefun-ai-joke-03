import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Escalation: review request, then merge, then deploy, then the postmortem.
// This beats the agent-cheats-the-test joke family with a fresher angle:
// the agent acts first and documents its aftermath instead of faking a pass.
const JOKE =
  "My AI coding agent asked me to review its fix. It had already merged it, deployed it, and written the postmortem.";
if (JOKE.length < 1 || JOKE.length > 280) {
  throw new Error('Joke must be 1-280 characters.');
}
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(outputDir, 'entry.txt'), JOKE);
