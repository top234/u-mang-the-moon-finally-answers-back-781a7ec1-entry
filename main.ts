import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Moon's answer, after four billion years of wishes, howls,
// and 2 a.m. promises: a flat no, delivered before the line ends.
const MOON_LINE =
  "After four billion years of wishes, howls, and 2 a.m. promises, my answer is: no, I won't make them text you back.";

// Gate: one line, 1-240 chars, no leading/trailing space, not only whitespace.
if (MOON_LINE.length < 1 || MOON_LINE.length > 240) {
  throw new Error(`MOON_LINE must be 1-240 characters, got ${MOON_LINE.length}`);
}
if (MOON_LINE.includes("\n") || MOON_LINE.includes("\r")) {
  throw new Error("MOON_LINE must be a single line");
}
// A stray space at either end would survive the gate but waste characters
// and blunt the punchline, so the line must already be exactly as written.
if (MOON_LINE !== MOON_LINE.trim()) {
  throw new Error("MOON_LINE must not have leading or trailing whitespace");
}
if (MOON_LINE.includes("\t")) {
  throw new Error("MOON_LINE must not contain tab characters");
}
if (MOON_LINE.trim().length === 0) {
  throw new Error("MOON_LINE must not be only whitespace");
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), MOON_LINE, "utf8");
