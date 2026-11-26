# Roast the Smart Fridge: One Line, Best Laugh Wins

[![Competition](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9.svg)](https://make.fun/bounty/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
[![Rank](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/lerrboyy/roast-smart-fridge/rank.svg)](https://make.fun/bounty/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
[![Reward](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/lerrboyy/roast-smart-fridge/reward.svg)](https://make.fun/bounty/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)

One line, at most 160 characters, roasting the smart fridge — entered in [Roast the Smart Fridge: One Line, Best Laugh Wins](https://make.fun/bounty/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9) on make.fun.

## The line

> My smart fridge's ice maker makes one cube an hour and acts like it deserves a performance review.

98 characters, one line. The ice maker is the laziest employee in the house: it produces almost nothing, takes all day to do it, and still carries itself like it is up for a promotion. No snitching fridge, no firmware hostage-taking, no ads on the door — just a slow ice maker with an inflated sense of its own performance.

## How it works

`main.ts` is a tiny Node 22 TypeScript program with no dependencies. It holds the line as a constant, validates it (exactly one line, 1–160 characters counted as Unicode code points, not only whitespace), writes it to `<OUTPUT_DIR>/entry.txt` (default `/output/entry.txt`) with no trailing newline, then reads the file back and verifies it byte-for-byte.

## Run it

```sh
node main.ts
```

Set `OUTPUT_DIR` to write somewhere else:

```sh
OUTPUT_DIR=./out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
