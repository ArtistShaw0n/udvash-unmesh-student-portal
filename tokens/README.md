# Tokens — Figma ↔ Code Sync Workflow

This folder is the single source of truth for design tokens. It uses the **Tokens Studio for Figma** format (also compatible with Style Dictionary).

## File structure

- `tokens.json` — all token sets in Tokens Studio JSON schema
- `README.md` — this file

## Token sets

| Set | Purpose | Used by |
|---|---|---|
| `primitives` | Raw color/spacing values (e.g., `purple.600 = #55347B`) | semantic sets reference these via `{primitives.color.purple.600}` |
| `semantic-light` | Light-mode semantic aliases (`bg.surface`, `text.ink`, etc.) | Light theme |
| `semantic-dark` | Dark-mode semantic aliases | Dark theme |
| `spacing-radius` | Spacing scale, radius, border-width | Shared across themes |
| `typography` | Font family/weight/size | Shared across themes |

## Themes

Two themes defined:
- **Light** — `primitives` (source) + `semantic-light` + shared
- **Dark** — `primitives` (source) + `semantic-dark` + shared

## Figma side — Tokens Studio plugin

1. **Install the plugin** in Figma: search for "Tokens Studio for Figma" in the Plugins panel
2. **Connect to this repo**:
   - Tokens Studio → Settings → Sync providers → Add new
   - Choose **GitHub**
   - Repo: `ArtistShaw0n/udvash-unmesh-student-portal`
   - Branch: `main`
   - File path: `tokens/tokens.json`
   - Token: create a fine-grained PAT with `Contents: Read and write` on this repo
3. **Pull tokens** in Tokens Studio → load all sets
4. **Apply to Figma variables**: Tokens Studio → Export → "Create variables"
5. **Make edits in Figma** → click "Push to GitHub" → opens a PR with the updated `tokens.json`

## Code side — consume tokens

### Option A: Direct CSS variable consumption (current)

`src/app/globals.css` already declares all tokens as CSS variables. If you edit `tokens.json`, manually mirror the change in `globals.css` (or use the script below).

### Option B: Generate `globals.css` from `tokens.json` (recommended for sync)

Use [Style Dictionary](https://amzn.github.io/style-dictionary/) (Style Dictionary supports Tokens Studio JSON natively in v4+):

```bash
npm i -D style-dictionary token-transformer
```

Then create `style-dictionary.config.mjs`:

```js
export default {
  source: ["tokens/tokens.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "src/app/",
      files: [{ destination: "tokens.css", format: "css/variables" }],
    },
  },
};
```

Run: `npx style-dictionary build` → regenerates `tokens.css` from JSON.

Wire `tokens.css` into `globals.css` via `@import "./tokens.css"`.

## Sync workflow (recommended)

```
Designer (Figma) ──► Tokens Studio plugin ──► Push to GitHub ──► PR opened
                                                                      │
Developer reviews PR ──► merges to main ──► Vercel auto-deploys ──► Live
                          │
                          └─► (optional) regenerate globals.css via Style Dictionary
```

## Notes

- Color references use Tokens Studio syntax: `{primitives.color.purple.600}` (not CSS `var()`)
- Reference resolution happens client-side in plugin / build-time via Style Dictionary
- Numeric token values are **unitless** in Tokens Studio (px is the default unit, applied at export time)
- For multi-theme switching in the plugin, use the `$themes` array — already configured
