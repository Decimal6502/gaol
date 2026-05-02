# GitHub Pages Migration

## Current URL

```text
https://decimal6502.github.io/ffxi/
```

## Target URL

```text
https://decimal6502.github.io/gaol/
```

## Recommended approach

The cleanest approach is to create or rename the GitHub repository to:

```text
gaol
```

Then enable GitHub Pages for that repository.

Target:

```text
https://decimal6502.github.io/gaol/
```

## Implementation requirements

- Do not hardcode `/ffxi/`.
- Avoid hardcoding `/gaol/` unless needed for PWA scope/start_url.
- Prefer relative paths:
  - `./src/app.js`
  - `./styles/base.css`
  - `./assets/icons/icon-192.png`
- Test local paths and GitHub Pages subpath.

## PWA path notes

For GitHub Pages under `/gaol/`, prefer:

```json
{
  "start_url": "./",
  "scope": "./"
}
```

For service worker registration:

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js");
}
```

For cache entries, prefer relative URLs where possible.

## Old repository handling

If the old `/ffxi/` page remains public, it may show a simple notice:

```text
Gaol Tactician has moved to https://decimal6502.github.io/gaol/
```

This is optional and not part of the core app.
