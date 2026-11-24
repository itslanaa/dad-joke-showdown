// Dad Joke Showdown entry: writes the one-line joke (1-200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
const line = "My vacuum cleaner quit, so I told it to suck it up. Now it's working again and I'm the one who feels drained.";
const limit = 200;
if (line.length < 1 || line.length > limit) throw new Error("entry must be 1-200 characters");
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, line, "utf8");
