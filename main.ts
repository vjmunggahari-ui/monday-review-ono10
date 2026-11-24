// Monday, Reviewed in One Line — entry program.
// Writes exactly one line (the funniest one-line review of our Monday)
// to $MAKEFUN_OUTPUT_DIR/entry.txt and nothing else.
import { writeFileSync, readFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";

const ENTRY =
  "My Monday got one star: the coffee machine broke, the standup ran long, and my inbox replied to me before I replied to it.";
const EXPECTED_SHA256 =
  "dfa2994cf882a5381936ffe85f9aea09f07fe983fdf39d1ad3d4a784fc310663";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read-back self-check: the file must be exactly the entry, nothing else.
const written = readFileSync(outPath, "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt does not match the expected entry text");
}
const hash = createHash("sha256").update(written, "utf8").digest("hex");
if (hash !== EXPECTED_SHA256) {
  throw new Error(`entry.txt sha256 mismatch: got ${hash}`);
}
if (written.length < 1 || written.length > 200) {
  throw new Error(`entry length ${written.length} outside the 1-200 gate`);
}
if (written.includes("\n")) {
  throw new Error("entry must be a single line");
}
// Content checks: it must read as a review of our own Monday, with
// concrete Monday details (inbox + standup), not generic tiredness.
if (!written.startsWith("My Monday")) {
  throw new Error("entry must open as a review of our Monday");
}
for (const detail of ["inbox", "standup", "coffee"]) {
  if (!written.includes(detail)) {
    throw new Error(`entry is missing its concrete Monday detail: ${detail}`);
  }
}
if (written.trim() !== written) {
  throw new Error("entry has leading or trailing whitespace");
}
console.log(`wrote ${outPath} (${written.length} chars, sha256 ${hash})`);
