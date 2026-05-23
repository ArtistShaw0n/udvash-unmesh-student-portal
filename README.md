# Udvash–Unmesh Design System

Production design system for the Udvash-Unmesh coaching/education app.
Built from the Figma V2 source file. 99 design tokens, 77 React components,
17 Storybook story files, Tokens Studio JSON sync, Figma Code Connect.

| | |
|---|---|
| Live demo | https://udvash-unmesh-student-portal.vercel.app |
| Storybook | https://udvash-unmesh-student-portal-storybook.vercel.app |
| Repo | https://github.com/ArtistShaw0n/udvash-unmesh-student-portal |
| Figma source | https://www.figma.com/design/EM0QU7aqBCCK95WvV8Qwt5 |

## Stack

- **Framework** — Next.js 16 (App Router) + React 19 + TypeScript
- **Styling** — Tailwind v4 (CSS-first config via `@theme`)
- **Tokens** — 3-tier (primitives → semantic → component) as CSS variables
- **Themes** — Light / Dark via `html.dark` class + `prefers-color-scheme`
- **Fonts** — Inter (Latin) + Hind Siliguri (Bangla) via `next/font/google`
- **Stories** — Storybook 10.4 with `@storybook/nextjs-vite`
- **Hosting** — Vercel auto-deploy on push to `main`

## Quick start

```bash
npm install
npm run dev         # Next.js dev server   http://localhost:3000
npm run storybook   # Storybook            http://localhost:6006
```

## Importing components

```tsx
import { Button, Input, Card, Icon, LiveClassCard } from "@/components";

<Button variant="primary" iconLeft={<Icon name="play" size={16} />}>
  Start Class
</Button>
```

A barrel export lives at [src/components/index.ts](src/components/index.ts).

## Repo layout

```
src/
  app/                      # Next.js routes (page, layout, /login, /home)
  components/               # 77 React components + 11 Code Connect mappings
    *.tsx                   # Component source
    *.figma.tsx             # Figma Code Connect mapping
    index.ts                # Barrel export
  stories/                  # 17 Storybook story files
  lib/cn.ts                 # className combiner
tokens/
  tokens.json               # Tokens Studio for Figma JSON (5 sets, 2 themes)
  README.md                 # Figma ↔ GitHub sync workflow
audit/
  specs/                    # 142 component specs from Figma audit
  *.md                      # Inventory, gaps, decisions
```

## Design tokens

- **Source of truth** — `tokens/tokens.json` (Tokens Studio for Figma format)
- **Applied to code** — `src/app/globals.css` (CSS variables + Tailwind `@theme`)
- **Round-trip** — Figma plugin pushes PRs; merging to `main` auto-deploys

See [tokens/README.md](tokens/README.md) for the sync workflow.

## Components

| Category | Examples |
|---|---|
| Foundation | Button, Input, Card, Badge, Avatar, Icon, Logo, Typography |
| Layout | Stack, Container, Grid, Divider |
| Inputs | PasswordInput, PhoneInput, OTPInput, SearchBar, Checkbox, Switch, Slider, RadioGroup, ImageUpload, AddRollCard |
| Indicators | ProgressBar, Spinner, ScoreLetter, StarRating, MeritRankings, ScoreGauge, MCQRow, TotalRow, PositionLabel |
| Feedback | Alert, Toast, Modal, Sheet, ConfirmDialog, PhotoPicker |
| Navigation | Header, FooterMenu, Tabs, Breadcrumb, Pagination, SegmentedControl, BackLink |
| Overlay | Tooltip, Drawer, Popover |
| Disclosure | Accordion, EmptyState, Dropdown |
| Pills / Chips | Chip, Tag, FilterChip, FilterPanel, Stat |
| Cards — domain | LiveClassCard, LiveExamCard, MasterClassCard, PracticeExamCard, PastClassCard, CourseContentCard, PerformanceCard, ProfileCard, ProgramListCard, SolveSheetCard, SubjectWiseSummary, ServiceBlockedCard, HomeGridCard |
| Cards — content | AnalysisBlock, AnalysisSolutionCard, QnACard, AddCourseCard |
| Lists | CommunityRow, DownloadItem |
| Media | VideoControls |
| Step | Stepper |
| Loading | Skeleton |

Full mapping of components → audit specs in [COVERAGE.md](COVERAGE.md).

## Figma Code Connect

11 components are mapped via `src/components/*.figma.tsx`. See [CODE_CONNECT.md](CODE_CONNECT.md) for setup, token configuration, and the publish workflow.

```bash
export FIGMA_ACCESS_TOKEN=figd_xxx
npx figma connect publish --dry-run
npx figma connect publish
```

## Deployment

Every push to `main` auto-deploys via the GitHub ↔ Vercel integration:

```bash
git push           # triggers production deploy
```

The Storybook is deployed as a separate Vercel project (configured manually).

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm run start` | Run the built app |
| `npm run lint` | ESLint |
| `npm run storybook` | Storybook dev server |
| `npm run build-storybook` | Build Storybook static site |
