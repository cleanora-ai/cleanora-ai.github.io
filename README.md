# Cleanora AI Website

Windows-only marketing and SEO site for Cleanora AI. The implementation is copied from the Foldora AI website template and keeps its layout, styles, components, animations, responsive breakpoints, and static SEO generator.

## Verified Product Scope

- Windows 10 and Windows 11 desktop application
- Local classification from filenames, extensions, modified dates, and filesystem metadata
- Smart, File type, and Modified date classification modes
- Exact destination preview, exclusions, conflict checks, and explicit confirmation
- Authenticated local audits, execution history, and conflict-safe undo
- Scan and preview without a license; apply and undo require activation
- No file-content reads and no cloud file upload in the current planner
- No automatic deletion or silent overwrite

The repository contains an unsigned local test installer, but no signed public release URL. Keep the download CTA pointed at the on-page release section until a signed production installer is published.

## Development

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite.

## Verification

```powershell
npm run lint
npm run test
npm run seo:check
npm run build
npm run preview
```

The production site is generated in `dist/`. The build also generates and audits static SEO pages, `sitemap.xml`, `robots.txt`, and `llms.txt`.

## Deployment

Deploy the contents of `dist/` to any static host configured for `https://cleanoraai.com` and SPA fallback to `index.html`.

For a repository-hosted `docs/` deployment:

```powershell
npm run deploy
```

Then commit and publish the generated `docs/` directory from the repository branch configured for static hosting. Before public deployment:

1. Publish a signed production installer.
2. Replace the placeholder download-section links with the verified release URL.
3. Confirm the production domain in `src/config/product.ts`, `scripts/audit-static-pages.ts`, and DNS/hosting configuration.
4. Add a real analytics measurement ID only if analytics is required.

