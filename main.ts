// The Printer Apology — writes one funny apology line to /output/entry.txt
// The line must stay a single line of 1-120 characters, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry I jammed. You fed me paper thinner than your patience, swore at me, and somehow I'm the one apologizing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
