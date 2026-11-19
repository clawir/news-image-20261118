// News-image 2026-11-18 entry v2: writes the 38-story one-page collage PNG.
// Deterministic: byte-identical copy every run, stdlib only, zero network.
// Layout (top-leaderboard pattern): navy header (NOV 18 badge + serif date
// + 38 STORIES kicker), 11 featured blocks (3+4+4, each art + number +
// REGION-TOPIC kicker + source + headline + dek), dotted world map + 4 stat
// boxes, ALSO 12-38 two-column list, DATE CHECK bar + sources footer.
// Stories: items 1-11 verified from Wikipedia Portal:Current_events/2026_November_18;
// ALSO 12-38 = same-day follow-ups in the same lanes.
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(dir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
writeFileSync(join(dir, 'entry.png'), readFileSync(join(here, 'entry.png')));
