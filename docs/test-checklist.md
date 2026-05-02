# Test Checklist

## Basic

- Open `index.html` locally.
- It works without a build step.
- It works when served from a subdirectory such as `/gaol/`.
- No external assets are required for core operation.
- No code path depends on `/ffxi/`.

## Member settings

- Add a display name.
- Rename a display name.
- Change each job cell through `- → ◎ → ○ → △ → -`.
- Delete a display name.
- Data persists after reload.
- UI does not ask for real names or contact information.

## Planning board

- Select 3 bosses.
- Select 6 display names.
- Assign jobs.
- Duplicate jobs across all 3 battles are detected.
- Unavailable jobs are blocked or warned.
- Empty slots are visible.
- Reset plan works.

## Text export

- Text preview reflects the current plan.
- Anonymous labels A/B/C/D/E/F are the default.
- Copy to clipboard works.
- Japanese text mode is readable.
- English text mode is readable.
- Text export does not include full member job database.

## PNG export

- Battle table preview reflects the current plan.
- PNG download works.
- PNG file opens correctly.
- Anonymous labels A/B/C/D/E/F are the default.
- PNG export does not include full member job database.
- PNG remains readable on a smartphone.

## JSON backup

- Export JSON.
- Import JSON into an empty state.
- Import restores members and plans.
- Invalid JSON shows a readable error.
- Version mismatch shows a readable error.
- Export/import shows a privacy warning.

## Removed features

Confirm these are not required:

- share URL
- `index.html?s=...`
- read-only viewer page
- `viewer.html`-based sharing

## Mobile

Test at:

- 390px width
- 430px width
- desktop width

Check:

- no important content is hidden
- buttons are tappable
- bottom controls do not cover important actions
- text remains readable

## PWA, when implemented

- manifest loads under `/gaol/`
- service worker registers under `/gaol/`
- app can be added to home screen
- offline reload does not break core UI
