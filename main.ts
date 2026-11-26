// Roast the Smart Fridge — one line, best laugh wins.
// Writes the roast line to <OUTPUT_DIR>/entry.txt (default /output/entry.txt).
// The line is validated (one line, 1-160 Unicode code points, not only
// whitespace) and byte-verified after writing. No dependencies, no network,
// no input from outside this file.

import { mkdirSync, readdirSync, rmSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My smart fridge's ice maker makes one cube an hour and acts like it deserves a performance review.";

const MAX_CHARS = 160;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

function main(): void {
  const line = LINE;

  // Validate: exactly one line.
  if (line.includes("\n") || line.includes("\r")) {
    fail("entry must be a single line");
  }

  // Validate: length counted as Unicode code points, 1..160.
  const length = [...line].length;
  if (length < 1 || length > MAX_CHARS) {
    fail(`entry must be 1-${MAX_CHARS} characters, got ${length}`);
  }

  // Validate: not only whitespace.
  if (line.trim().length === 0) {
    fail("entry must not be only whitespace");
  }

  const outputDir = process.env.OUTPUT_DIR?.trim() ? process.env.OUTPUT_DIR : "/output";

  // Create the output directory if missing. Never remove the directory
  // itself — clear only its contents.
  mkdirSync(outputDir, { recursive: true });
  for (const name of readdirSync(outputDir)) {
    rmSync(join(outputDir, name), { recursive: true, force: true });
  }

  const target = join(outputDir, "entry.txt");

  // Write with no trailing newline, then read the raw bytes back and
  // verify them byte-for-byte against the intended UTF-8 encoding.
  const expected = Buffer.from(line, "utf8");
  writeFileSync(target, expected);
  const written = readFileSync(target);
  if (!written.equals(expected)) {
    fail("byte verification failed: entry.txt does not match the entry");
  }
  const decoded = written.toString("utf8");
  if ([...decoded].length !== length) {
    fail("byte verification failed: character count changed on disk");
  }

  console.log(`wrote ${target} (${length} characters, 1 line)`);
}

main();
