# ⛔ ABSOLUTE RULE — ZERO EXTRA (read first, every time)

Build **exactly** what the user asks and **exactly** what is in the Figma file —
**not one pixel more.** This overrides every default instinct.

- **Do NOT add anything the user did not ask for.** No "completing" the component,
  no "making it production-ready."
- **Reproduce the Figma frame as it visually appears.** If Figma does not show it,
  do NOT create it — this includes:
  - interaction states (hover / focus / disabled / active)
  - behavior (open/close, esc-to-close, outside-click, toggles)
  - extra variants, configurable colour/size props beyond what Figma shows
  - placeholder fills, invented icons/glyphs/images, made-up logos
  - shared abstractions / helpers not present in Figma
- **Raw values only** — keep literal Figma hex/px (`#55347b`, `rounded-[5px]`),
  never semantic tokens (`bg-brand`).
- **If something is NOT directly extractable from Figma → SKIP it** and note it for
  a later phase. Never invent, never substitute, never approximate.
- **If something IS in Figma → it must be included** (e.g. the logo). Verify it is
  actually absent before claiming "not in Figma."
- When unsure whether something is "extra": **leave it out.** Less is correct.

Why this rule exists: the assistant repeatedly added states/behavior/props/
abstractions that were never in Figma, forcing the user to re-explain every turn.
That must not happen again. The user should never have to repeat this.

# ⛔ WORKING PROTOCOL — every Figma task, every step (the user never restates this)

The mechanism that guarantees **100% Figma values + 0% extra**. Not optional.

1. **SCOPE-LOCK → 0% extra.** Before touching any file, restate the exact list of
   what THIS prompt literally asks for, and do only that list. If something seems
   needed but is not written in the prompt: do NOT do it — note it and ask. No
   "while I'm here" fixes, no adjacent screens/files, no "completing", no starting
   work that wasn't requested, no commits the user didn't ask for.

2. **VALUE-SOURCING → 100% Figma.** Every value you write — size, position, colour,
   font, weight, radius, shadow, spacing — must first be pulled from
   `get_design_context` / `get_metadata` of that exact node and copied 1:1. NEVER
   write a value from memory, a "reasonable default", or by looking at a screenshot.
   No value yet? Pull the node. Cite the node-id next to the block. (Every past
   miss was estimation: player bg `#b5b5b5` vs real `#2d2d2d`, play 68 vs 40, pin
   14 vs 18, menu 4×16 vs 11×13, progress 40 vs 77, thumbnail 99 vs 90.)

3. **VALUE-DIFF VERIFY → never eyeball.** After editing, re-read the node and diff
   each element value-vs-value against the code; report the table. NEVER confirm
   fidelity from a screenshot.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
