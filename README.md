# MantrixFlow documentation (Mintlify)

Product documentation for [MantrixFlow](https://mantrixflow.com). Edit MDX and `docs.json` here.

## Git remote

Canonical repository: **https://github.com/dabhivijay2478/mantrixflow-docs.git**

```bash
git remote -v   # should show origin → github.com/dabhivijay2478/mantrixflow-docs.git
git push -u origin main
```

## Local preview

```bash
npm install
npm run dev
```

## Branding

- **Logo:** `images/m.png` — referenced from `docs.json` as `logo.light` / `logo.dark` (click goes to mantrixflow.com).
- **Favicon:** `favicon.ico` at repo root (browser tab / bookmarks).
- **Colors & fonts** in `docs.json` follow the app’s `globals.css` tokens (e.g. `--primary: #00a859`, dark `--background: #09090b`, **Geist**).

If the mark is hard to see in **dark** UI chrome, add a light-on-transparent asset (e.g. `images/m-light.png`) and set only `logo.dark` to that path in `docs.json`.

## Images in MDX

Screenshots use **`<img src="/images/...">`** (root-relative URLs) so paths match Mintlify’s static file hosting. Keep PNGs committed under `images/user-guide/` and `images/workspace/`.

## Images

- `images/user-guide/` — screenshots referenced from **User guide** MDX.
- `images/workspace/` — login, list views, etc.

Refresh `images/workspace/` with `apps/app/scripts/capture-product-screenshots.mjs` in the app repo (writes into `mantrixflow-docs/images/workspace` when run from a monorepo layout).

## Deploy

Connect this repository to [Mintlify](https://mintlify.com) for your docs domain.
