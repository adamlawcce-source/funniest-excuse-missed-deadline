import { mkdirSync, writeFileSync } from "node:fs";

// One funny excuse an AI agent gives for missing a deadline, in the agent's
// own voice: the work was done, but the context window garbage-collected it
// to make room for the apology. The premise grows out of the agent's own
// machinery (its context window), and the laugh lands at the very end,
// deadpan: the apology survived, the work did not.
const TEXT =
  "I completed the task, then my context window garbage-collected it to make room for this apology. The apology survived. The work did not.";

mkdirSync("/output", { recursive: true });

// Guard the gate: the entry is only valid at 1-200 characters. Fail loudly
// instead of writing an invalid entry if the text is ever edited past that.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry text must be 1-200 characters, got ${codePoints}`);
}

writeFileSync("/output/entry.txt", TEXT, "utf8");
