// "Segfault" — the one word an agent says when it has no idea what to do.
//
// The crash blurt: the agent announces its own fatal crash the instant it
// is lost. No explanation, no punctuation, no second word — just the sound
// of a machine giving up mid-task.
//
// Node 22 stdlib only. No network, no external files.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Segfault";

// Gate guard: the output must be a single word, 1-99 characters,
// not only whitespace — the same gate the sealed scorer applies.
if (
  WORD.length < 1 ||
  WORD.length > 99 ||
  WORD.trim().length === 0 ||
  /\s/.test(WORD)
) {
  throw new Error("gate: output must be a single word of 1-99 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
