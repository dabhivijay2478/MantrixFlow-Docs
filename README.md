# Arcyria documentation (Mintlify)

Product documentation for [Arcyria](https://arcyria.com). Edit MDX and `docs.json` here.

## Git remote

The GitHub remote currently retains its legacy `MantrixFlow-Docs` slug until the external repository is renamed.

```bash
git remote -v   # verify the configured origin before pushing
git push -u origin main
```

## Local preview

```bash
npm install
npm run dev
```

## Branding

- **Logo:** the theme-aware Arcyria marks in `images/brand-logo/light-logo.png` and `images/brand-logo/dark-logo.png`.
- **Favicon:** `images/brand-logo/dark-logo.png` (browser tab / bookmarks).
- **Colors & fonts** in `docs.json` follow the Arcyria ocean palette (`#14b8a6`, `#67e8f9`, and `#020d13`) with **Geist**.

Mintlify selects the matching light or dark logo from `docs.json`.

## Images in MDX

Screenshots use **`<img src="/images/...">`** (root-relative URLs) so paths match Mintlify’s static file hosting. Keep PNGs committed under `images/user-guide/` and `images/workspace/`.

## Images

- `images/user-guide/` — screenshots referenced from **User guide** MDX.
- `images/workspace/` — login, list views, etc.

Refresh `images/workspace/` with `apps/app/scripts/capture-product-screenshots.mjs` in the app repo (writes into `arcyria-docs/images/workspace` when run from a monorepo layout).

## Deploy

Connect this repository to [Mintlify](https://mintlify.com) for your docs domain.
