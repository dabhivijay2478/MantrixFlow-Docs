# MANTrixFlow documentation (Mintlify)

Product documentation for [MantrixFlow](https://mantrixflow.com). Edit MDX and `docs.json` here.

## Git remote

Canonical repository: **https://github.com/dabhivijay2478/mantrixflow-docs.git**

```bash
git remote -v   # should show origin → github.com/dabhivijay2478/mantrixflow-docs.git
git push -u origin main
```

If you keep a copy inside the `ai-bi` monorepo, treat this folder as that clone (do not duplicate content in two unrelated histories).

## Local preview

```bash
npm install
npm run dev
```

## Images

- `images/user-guide/` — screenshots referenced from **User guide** MDX.
- `images/workspace/` — login, list views, etc.

Refresh `images/workspace/` with `apps/app/scripts/capture-product-screenshots.mjs` in the app repo (writes into `mantrixflow-docs/images/workspace` when run from a monorepo layout).

## Regenerating from legacy Fumadocs (optional)

From the `ai-bi` monorepo, if `apps/docs/content/docs` exists:

```bash
python3 scripts/port_docs_to_mintlify.py ./mantrixflow-docs
```

## Deploy

Connect this repository to [Mintlify](https://mintlify.com) for your docs domain.
