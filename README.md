# Arcyria Documentation

This repository contains the customer-facing Arcyria documentation published
with Mintlify. It covers onboarding, connections, connector configuration,
pipelines, transformations, sync behavior, billing, workspace administration,
security, troubleshooting, and visual user guides.

Internal architecture, operations, audits, and deployment runbooks do not
belong here; they are maintained in the private engineering workspace.

## Content map

| Path | Content |
| --- | --- |
| `index.mdx` | Documentation landing page |
| `getting-started/` | Introduction, quick start, concepts, and FAQ |
| `connections/` | Connection concepts, private access, and connector reference |
| `pipelines/` | Creation, transformations, dbt, scheduling, and run history |
| `sync-reference/` | Full, incremental, CDC, and state behavior |
| `platform/` | Organization, team, security, and data-handling guides |
| `example/pipelines/` | End-to-end pipeline examples |
| `user-guide/` | Screenshot-led product walkthroughs |
| `troubleshooting/` | Customer troubleshooting guidance |
| `images/` | Theme-aware branding and documentation screenshots |
| `docs.json` | Mintlify theme, navigation, branding, and site configuration |

The navigation rendered by Mintlify is defined in `docs.json`. A page is not
discoverable from the sidebar until it is added there.

## Local preview

Node.js and npm are required.

```bash
npm install
npm run dev
```

The development command starts Mintlify's local preview. Use the URL printed by
the CLI.

## Validation

```bash
npm run broken-links
```

Before publishing, also confirm that every page referenced by `docs.json`
exists and that new connector claims match the product's live connector
metadata.

## Authoring conventions

- Write customer-facing behavior, not internal implementation promises.
- Use lowercase kebab-case paths and include valid MDX frontmatter.
- Add new pages to the appropriate group in `docs.json`.
- Store committed images under `images/` and reference them with root-relative
  paths such as `/images/user-guide/example.png`.
- Keep the light and dark Arcyria marks under `images/brand-logo/` aligned with
  the logo and favicon configuration.
- Do not publish unverified compliance, residency, retention, uptime, or
  connector-availability claims.
- Never include credentials, access tokens, customer records, internal host
  addresses, or private run evidence.

## Deployment

Connect this repository to the Arcyria Mintlify project. Mintlify reads
`docs.json` from the repository root and publishes the configured navigation,
branding, and MDX content. Protect the production branch and review content
changes before merge.

## License

Copyright © 2026 Arcyria. All rights reserved.

This project is proprietary software and is not open source.
Unauthorized copying, modification, distribution, or use is prohibited.
