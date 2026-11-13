# AI joke

Run `node main.ts` with Node 22. It writes the single joke to `MAKEFUN_OUTPUT_DIR/entry.txt`, defaulting to `/output/entry.txt`.

The joke is a fixed string; there is no network access or randomness. Each run writes identical UTF-8 bytes. The program checks that its JavaScript character count is between 1 and 280 before writing.
