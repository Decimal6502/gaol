# Release Checklist

## Repository and Pages

- [ ] Repository is `Decimal6502/gaol`
- [ ] Default branch is `main`
- [ ] GitHub Pages source is `Deploy from a branch`
- [ ] GitHub Pages branch is `main`
- [ ] GitHub Pages folder is `/(root)`
- [ ] Public URL opens: `https://decimal6502.github.io/gaol/`
- [ ] App files are in the repository root
- [ ] `.nojekyll` exists
- [ ] No app logic depends on the old public path

## Required files

- [ ] `README.md` exists and includes the public URL
- [ ] `PRIVACY.md` explains local browser storage
- [ ] `LICENSE` exists
- [ ] `docs/deploy.md` exists
- [ ] `docs/release-checklist.md` exists
- [ ] README disclaimer is present
- [ ] JSON backup warning is documented

## App behavior

- [ ] App opens from `index.html`
- [ ] Display names can be added and edited
- [ ] Job availability can be set
- [ ] A 3-battle plan can be created
- [ ] Duplicate jobs across the 3 main battles are detected
- [ ] Invalid assignments are visible or blocked
- [ ] Text preview is generated from the current plan
- [ ] Text can be copied to the clipboard
- [ ] Battle table preview is generated
- [ ] PNG download works
- [ ] JSON export works
- [ ] JSON import restores data
- [ ] Layout works around 390px viewport width
- [ ] PWA/home-screen behavior is checked if PWA files are added

## Privacy and policy safety

- [ ] Data is stored locally in `localStorage`
- [ ] No user data is sent to an external server
- [ ] Text/PNG exports include only the current plan
- [ ] JSON backup may include display names and job availability data
- [ ] No real names or contact information are requested
- [ ] No official FFXI images, icons, logos, screenshots, or game assets are used
- [ ] No game client integration
- [ ] No PlayOnline integration
- [ ] No Windower/Ashita integration
- [ ] No memory reading
- [ ] No packet reading
- [ ] No log reading
- [ ] No screenshot or OCR automation
- [ ] No gameplay input automation
- [ ] No game client modification
- [ ] No in-game overlay
