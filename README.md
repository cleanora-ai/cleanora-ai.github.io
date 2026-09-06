# Cleanora AI — Private AI File Organizer for Windows

Cleanora AI is a privacy-first **AI file organizer for Windows 10 and Windows 11**. It helps users clean up Downloads, Desktop, Documents, and mixed work folders by creating a local, reviewable file-sorting plan before anything moves.

**Official website:** [cleanoraai.com](https://cleanoraai.com)

This repository contains the React and TypeScript marketing website for Cleanora, including product pages, documentation, use-case guides, and statically generated SEO landing pages.

## What Cleanora Does

Cleanora organizes files from their filenames, extensions, modified dates, and filesystem metadata. It supports automatic file organization while keeping the user in control of every change.

- Sorts PDFs, documents, spreadsheets, presentations, images, archives, and installers
- Organizes Downloads, Desktop, Documents, project folders, reports, receipts, and research files
- Offers Smart, File type, and Modified date classification modes
- Shows exact source and destination paths before files move
- Detects naming conflicts and refuses silent overwrites
- Lets users exclude individual files from an organization plan
- Keeps authenticated local audit history with conflict-safe undo
- Runs file scanning and planning locally without cloud file uploads
- Never deletes files automatically

Cleanora does not read file contents in the current planner. Scan and preview are available without a license; applying or undoing file moves requires activation.

## How the Windows File Organizer Works

1. Select a folder such as Downloads, Desktop, or Documents.
2. Let Cleanora classify supported files locally from their metadata.
3. Review categories, exclusions, conflicts, and exact destination paths.
4. Confirm only the file moves you want to apply.
5. Use the local history if the latest successful operation needs to be undone.

## Supported File Types

| Category | Formats |
| --- | --- |
| Documents | PDF, DOCX, TXT, MD |
| Spreadsheets | XLSX, CSV |
| Presentations | PPT, PPTX |
| Images | PNG, JPG, JPEG, GIF, WEBP |
| Archives | ZIP, 7Z, RAR |
| Installers | EXE, MSI |

## Privacy and File Safety

Cleanora is designed as a local Windows file organizer. Selected file metadata stays on the device during scanning, classification, preview, and history workflows. Internet access is needed to download the app and activate or revalidate a license, but files are not uploaded to a cloud organizer.

Before applying bulk changes, users can inspect the complete move plan. Cleanora checks for stale plans and destination conflicts, preserves an audit trail, and avoids automatic deletion or unreviewed overwrites.

## Website SEO Features

The website is built to make Cleanora's file-organization guides indexable and useful beyond the client-side React app.

- Search-focused pages for AI file organization, Windows folder cleanup, file renaming, and move previews
- Static HTML generation for product, feature, documentation, use-case, comparison, and blog routes
- Unique titles, meta descriptions, canonical URLs, and social metadata
- Schema.org structured data for the website, organization, software application, articles, breadcrumbs, and FAQs
- Automatically generated `sitemap.xml`, `robots.txt`, and `llms.txt`
- A build-time SEO audit that detects missing or inconsistent metadata

## Technology Stack

- React 18 and TypeScript
- Vite
- Tailwind CSS and shadcn/ui
- Radix UI
- React Router
- Framer Motion
- Vitest and Testing Library

## Local Development

### Requirements

- Node.js
- npm

### Install and run

```powershell
git clone https://github.com/cleanora-ai/cleanora-ai.github.io.git
cd cleanora-ai.github.io
npm install
npm run dev
```

Open the local URL printed by Vite.

## Available Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run test` | Run the Vitest test suite |
| `npm run lint` | Check the codebase with ESLint |
| `npm run seo:check` | Generate and audit static SEO pages |
| `npm run build` | Run SEO generation and create the production build |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Build and prepare a repository-hosted `docs/` deployment |

The production site is written to `dist/`.

## Project Structure

```text
src/
├── components/       # Homepage and shared UI components
├── config/           # Product name, domain, platform, and download settings
├── content/          # Feature, documentation, category, FAQ, and SEO content
├── lib/              # SEO, analytics, and shared utilities
└── pages/             # Homepage and reusable content-page layouts
scripts/               # Static-page generation, SEO audit, and deployment scripts
public/                # Generated crawlable pages and public assets
docs/                  # Repository-hosted production output
```

## Production Deployment

Deploy the contents of `dist/` to a static host configured for `https://cleanoraai.com`. The host should serve `index.html` as the fallback for client-side routes.

For a repository-hosted `docs/` deployment:

```powershell
npm run deploy
```

Commit and publish the generated `docs/` directory from the branch configured for static hosting.

## Current Release

Cleanora 0.1.0 is available for Windows 10 and Windows 11 through the official purchase flow on [cleanoraai.com](https://cleanoraai.com). Open **Download for Windows**, complete checkout with a supported payment option, and follow the download instructions supplied with the purchase.

Use only a Cleanora-labeled Windows package obtained through the official product flow. Internet access is required for license activation; file scanning and planning run locally. For setup or purchase-delivery help, contact [support@computoraai.com](mailto:support@computoraai.com).

## License

No open-source license is currently declared in this repository. All rights are reserved unless a license is added.
