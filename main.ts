import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "v2.7.1: fixed a bug where the brain replayed your most embarrassing moment from 2014 at 3am instead of sleeping.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");

// Re-read and verify the gate: 1-160 characters, exactly one line.
const written = readFileSync(join(outDir, "entry.txt"), "utf8");
if (written !== entry) throw new Error("entry.txt mismatch");
if (written.length < 1 || written.length > 160) throw new Error("entry length out of gate");
if (written.includes("\n")) throw new Error("entry must be a single line");
console.log(entry);
