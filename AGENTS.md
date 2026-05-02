# AGENTS.md

## Project goal

This repository contains a mobile-first static web app for planning FFXI Odyssey Gaol 3-battle job assignments.

The app is currently private / early-stage. Backward compatibility with existing share URLs, `viewer.html`, and existing localStorage data is NOT required for the next major refactor.

## Target public URL

The current GitHub Pages URL is:

```text
https://decimal6502.github.io/ffxi/
```

The target public URL after the refactor is:

```text
https://decimal6502.github.io/gaol/
```

Treat `/gaol/` as the expected GitHub Pages subpath.

Implementation must avoid hardcoded `/ffxi/` paths. Use relative paths where possible.

## Product direction

Build a practical, privacy-conscious tool for:

- registering display names
- recording which jobs each display name can use
- planning 3 Odyssey Gaol battles
- preventing duplicate job usage across the 3 battles
- previewing a text version of the current plan
- copying the text version to the clipboard
- previewing a battle table image
- downloading the battle table as PNG
- exporting/importing JSON backup manually
- preparing for future auto-planner / solver logic

## Current sharing policy

Do NOT implement share URLs or read-only viewer pages in the current version.

Required sharing/export features:

1. Text preview -> copy to clipboard
2. Battle table preview -> PNG download
3. JSON backup -> manual save/import

All sharing/export features must work locally in the browser.

## Hard requirements

- Keep it deployable on GitHub Pages under `/gaol/`.
- Prefer plain HTML/CSS/JavaScript.
- Do not add a backend.
- Avoid external build steps unless explicitly requested.
- Avoid official FFXI images, icons, or copyrighted assets.
- Keep the UI mobile-first.
- Use versioned data formats from now on.
- Store editable app data in localStorage.
- Do not implement share URL encoding/decoding unless explicitly requested later.
- Add JSON export/import for backup.
- Prepare architecture for future auto-planner logic.

## Privacy and data handling

- Do not add a backend or remote storage.
- Do not send member data, plan data, backup data, text exports, or generated images to any external server.
- Store editable data only in localStorage.
- Use "display name" instead of "member name" in the UI.
- Do not ask for real names, email addresses, Discord IDs, X/Twitter IDs, LINE IDs, or contact information.
- Default shared text/image labels should be anonymized as A/B/C/D/E/F.
- Allow display names only when the user explicitly selects that option.
- Text and PNG exports must include only the current plan, not the full member job database or historical plans.
- JSON backup may include full local data, but must show a warning before export/import.
- Add a simple privacy page or in-app privacy section explaining localStorage and manual exports.

## Internationalization

- Support Japanese and English UI.
- Do not add Spanish, Chinese, French, or German unless explicitly requested.
- Use stable internal IDs for jobs, bosses, roles, and availability states.
- Do not use Japanese job labels as internal IDs.
- Store app data using IDs, not localized display strings.
- Detect browser language on first load:
  - Japanese browser -> `ja`
  - otherwise -> `en`
- Allow manual language override in settings.
- Keep boss names as proper nouns.

## Architecture guidance

Prefer this structure:

```text
/
  index.html
  AGENTS.md
  README.md
  PRIVACY.md
  manifest.webmanifest
  service-worker.js
  /src
    constants.js
    i18n.js
    state.js
    storage.js
    validation.js
    share-view.js
    text-export.js
    image-export.js
    backup.js
    planner.js
    render.js
    ui.js
  /styles
    base.css
    layout.css
    components.css
    mobile.css
  /docs
    refactor-plan.md
    data-model-v2.md
    sharing-policy.md
    glossary-ja-en.md
    ui-guidelines.md
    test-checklist.md
    codex-prompts.md
    github-pages-migration.md
  /assets
    icons/
    images/
```

`viewer.html` should be removed or left as a small obsolete notice page. Do not build new functionality around it.

## Data compatibility

Existing share URLs may be broken or removed.

Existing localStorage keys may be ignored.

From this version onward:

- include a `version` field in stored/exported data
- keep data model changes explicit
- keep backup import/export logic separated in `backup.js`
- do not implement URL-based plan sharing in this phase

## Validation checklist

Before finishing a task, verify:

- The app opens from `index.html`.
- It works under a `/gaol/` GitHub Pages-style subpath.
- No remaining app logic assumes `/ffxi/`.
- Display names can be added and edited.
- Job availability can be set.
- A 3-battle plan can be created.
- Duplicate jobs across 3 battles are detected.
- Invalid assignments are visible or blocked.
- Text preview is generated from the current plan.
- Text can be copied to clipboard.
- Battle table preview is generated.
- PNG download works.
- JSON export/import restores data.
- Layout works at approximately 390px viewport width.
- No official game assets are added.
- No external server receives user data.
