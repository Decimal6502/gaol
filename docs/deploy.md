# Deploy to GitHub Pages

Target public URL:

```text
https://decimal6502.github.io/gaol/
```

## 1. Create the repository

Create a new GitHub repository:

```text
Decimal6502/gaol
```

## 2. Push `main`

From the repository root:

```bash
git remote set-url origin https://github.com/Decimal6502/gaol.git
git branch -M main
git push -u origin main
```

If `origin` is not configured yet:

```bash
git remote add origin https://github.com/Decimal6502/gaol.git
git branch -M main
git push -u origin main
```

## 3. Configure GitHub Pages

In GitHub:

```text
Repository: Decimal6502/gaol
Settings
Pages
Build and deployment
Source: Deploy from a branch
Branch: main
Folder: /(root)
Save
```

## 4. Verify the published app

Open:

```text
https://decimal6502.github.io/gaol/
```

Check:

- the app loads from the repository root
- no fixed old public path is required
- the layout works around 390px viewport width
- text preview and clipboard copy work
- battle table preview and PNG download work
- JSON export/import restores data
- `.nojekyll` exists
- if PWA files are added later, manifest and service worker paths work under `/gaol/`

The app is static. Do not add a backend, build step, or remote user-data sync for this release.
