// One-sentence entry for make.fun "One Sentence for a Traveler from 1800".
// Writes exactly one original sentence (189 characters) explaining the
// modern internet to someone arriving from the year 1800, to
// /output/entry.txt. Fully offline and deterministic: no network, no clock,
// no randomness, no environment reads. The sentence is a fixed string
// literal below, built only from words a person from 1800 would know:
// a road, a post office, a library — the three anchors the judge brief
// itself names — and nothing coined after their time: no "internet", no
// "computer", no "electric", no "screen", no list of features. One road
// carries all three things the internet does: letters that arrive before
// their ink dries (messages), any book opening at your word (all knowledge
// on call), and a friend across the sea speaking as if beside you (calls).
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "Picture a road joining every post office and library on earth, where a letter arrives before its ink dries, any book opens at your word, and a friend across the sea speaks as if beside you.";

// Enforce the sealed gate's own rule at runtime: one sentence, 1-200
// characters, never only whitespace. Fail loudly instead of writing an
// invalid entry.
if (
  SENTENCE.length < 1 ||
  SENTENCE.length > 200 ||
  SENTENCE.trim().length === 0 ||
  SENTENCE.includes("\n")
) {
  throw new Error("sentence must be a single line of 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
