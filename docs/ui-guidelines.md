# UI Guidelines

## Core principle

Prioritize speed, clarity, and mistake prevention over decorative UI.

## Mobile-first rules

- Target 390px wide viewport first.
- Avoid horizontal scrolling.
- Tap targets should be at least 44px high where practical.
- Use sticky top controls only if they do not reduce board readability.
- Use a bottom action area for job selection or candidate selection.
- Do not rely only on color; use labels/icons too.

## Main tabs

Recommended tabs:

```text
編成 | メンバー | 共有 | 設定
Plan | Members | Share | Settings
```

## Board UI

The board should show:

- 3 boss columns
- 6 display name rows
- current job assignment
- job grade:
  - ◎ main
  - ○ ok
  - △ fill
- warning state for duplicated or invalid assignments

## Member UI

Use matrix-style job availability.

Cell cycle:

```text
- → ◎ → ○ → △ → -
```

Meanings:

| Mark | Meaning |
|---|---|
| ◎ | main / reliable |
| ○ | usable |
| △ | rule-filler / weak |
| - | unavailable |

## Share UI

Provide:

- share name mode:
  - A/B/C/D/E/F
  - display names
  - custom labels
- text preview
- copy text button
- PNG preview
- download PNG button
- JSON export/import

Do not provide:
- share URL
- read-only viewer page

## Warning panel

Show practical warnings:

- duplicate job
- empty slot
- selected job unavailable for display name
- selected display name missing
- unsupported backup version

## Visual style

Recommended:

- practical tactical board
- light background
- gray/navy/gold accents
- minimal fantasy decoration
- no official FFXI assets

Optional decorative assets:
- original app icon
- subtle header background
- role icons as SVG
