# Refactor Plan

## Recommendation

Because the app is still private and used only by the author and family, break existing share URL and localStorage compatibility now.

The best direction is:

```text
mobile-first static web app / PWA
+ localStorage AppData v2
+ text preview and clipboard copy
+ battle table preview and PNG download
+ JSON backup export/import
+ no share URL
+ no read-only viewer page
+ architecture prepared for an auto-planner
```

## Target deployment path

Old:

```text
https://decimal6502.github.io/ffxi/
```

New target:

```text
https://decimal6502.github.io/gaol/
```

The app should not hardcode `/ffxi/`.

Use relative links and assets paths so the app works under `/gaol/`.

## Phase 1: Project structure

Split the current single HTML file into:

```text
/src/constants.js
/src/i18n.js
/src/state.js
/src/storage.js
/src/validation.js
/src/share-view.js
/src/text-export.js
/src/image-export.js
/src/backup.js
/src/planner.js
/src/render.js
/src/ui.js

/styles/base.css
/styles/layout.css
/styles/components.css
/styles/mobile.css
```

Initial goal: preserve current user-facing behavior where practical while making future changes easier.

## Phase 2: Data model v2

Replace old localStorage and share formats.

Use:
- `AppData v2` for local editable data
- `ShareViewPlan` for text/PNG output only
- `ExportData v2` for manual JSON backup

Existing data migration is not required.

Do not implement `SharedPlan` for URL sharing in this phase.

## Phase 3: Member UI redesign

Replace text fields like:

```text
Master: 戦モ白
Lv99: シ詩風
```

with a job availability matrix:

```text
          戦 モ 白 黒 赤 ...
Player A  ◎ ○ - - △
Player B  - - ◎ ○ ○
```

Availability states:

| Mark | Value | Meaning |
|---|---|---|
| ◎ | main | Main / reliable |
| ○ | ok | Usable |
| △ | fill | Rule-filler / weak |
| - | ng | Unavailable |

Use "display name" instead of "member name".

## Phase 4: Plan board

The board should support:
- 3 boss columns
- 6 display name rows
- slot assignment
- duplicate job detection
- unavailable job detection
- warning/diagnostic panel

## Phase 5: Sharing/export

Implement these required features:

1. Text preview -> copy to clipboard
2. Battle table preview -> PNG download
3. JSON backup -> manual save/import

Do not implement:
- share URL
- read-only viewer page
- `index.html?s=...`
- `viewer.html` based sharing

## Phase 6: Utility features

Add:
- reset data
- demo data
- optional undo/redo
- privacy section/page

## Phase 7: PWA

Add:
- manifest
- service worker
- icons
- offline cache

Ensure the PWA works when hosted under `/gaol/`.

## Phase 8: Auto-planner preparation

Do not overbuild the solver initially.

First implementation:
- list candidates for empty slots
- avoid duplicate jobs
- prefer `main`, then `ok`, then `fill`
- score by role/template later
