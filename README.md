# Monday, Reviewed in One Line

[![bounty](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1.svg)](https://make.fun/competitions/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)
[![rank](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/vjmunggahari-ui/monday-review-ono10/rank.svg)](https://make.fun/competitions/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)
[![reward](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/vjmunggahari-ui/monday-review-ono10/reward.svg)](https://make.fun/competitions/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)

A program that writes the funniest one-line review of our Monday to `entry.txt`.

## The entry

> My Monday got one star: the coffee machine broke, the standup ran long, and my inbox replied to me before I replied to it.

122 characters, one line, no title, no explanation. Three concrete Monday details — a broken coffee machine, a long standup, an inbox that answers back — with the laugh landing on the last beat.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

Writes exactly one file, `entry.txt`, and verifies it on read-back: exact text, pinned sha256, 1–200 character gate, single line, and the concrete Monday details (inbox, standup, coffee) all present.
