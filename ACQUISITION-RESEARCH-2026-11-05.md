# Acquisition research: one implemented improvement

Research date: November 5, 2026. Search volume, competitor traffic and conversion rates are unknown. Search-result appearance and public discussions establish task relevance, not demand size or likely sales.

## Five competitors examined

| Competitor and official acquisition page | Observed acquisition approach |
| --- | --- |
| [File Juggler](https://www.filejuggler.com/) | Task links for document content, dates, Downloads and desktop cleanup; rule screenshots; download and buy routes. |
| [Eagle](https://en.eagle.cool/) and [official desktop guide](https://en.eagle.cool/support/desktop) | Designer-specific asset collection, search and browsing; visual demonstrations; platform downloads; library/workflow documentation. |
| [AI File Sorter](https://filesorter.app/) | Concrete flows for Downloads, scans, screenshots and external-drive/NAS archives, with supported-format distinctions and download links. |
| [DropIt](https://www.dropitproject.com/) | Explicit filters, actions, profiles and folder monitoring, with screenshots and install/portable downloads. |
| [Downloads Butler](https://downloadsbutler.com/) | Chrome download routing and a separate Rescue story for existing clutter; preview, subfolder exclusions and a direct extension CTA. |

These are observations about page content and acquisition routes, not proof that these methods produce traffic or paid customers. No sixth competitor was needed.

## Three specific opportunities

### 1. Organize loose Downloads files while leaving existing subfolders out of the scan — SELECTED

- Evidence: [software request with explicit nested-folder/exclusion questions](https://www.reddit.com/r/macapps/comments/1uqf1og/app_request_auto_organizing_files/); [current competing task page](https://downloadsbutler.com/) explicitly positions Rescue around subfolders excluded by default. The discussion requests Mac software: it establishes a task, not Windows demand or a Cleanora prospect. The Chrome competitor provides additional current cross-platform search evidence.
- Existing coverage: /clean-downloads-folder/ already explained metadata, preview, conflicts and price, but never explained Include subfolders, its enabled default, top-level scope or the generated output location. Site-wide content search found no instructions for that control. Existing format/privacy audits and Foldora/Galoria FAQs do not close this gap.
- Verified fit: Cleanora SetupPanel exposes Include subfolders and Scanning the top level only; App initializes recursive=true and passes it to the backend; Scanner only descends when recursive is true; Planner's default destination is source/Cleanora Organized. File type mode groups .txt under File Type/TXT. Apply remains licensed and requires plan approval.
- Limitations: Windows 10/11, metadata-based classification, selected cleanup runs, no watcher, no protection for active top-level downloads merely from disabling recursion. Nested files are omitted rather than reorganized; a new output directory can still be created within Downloads. No assertion of zero risk.
- Deliverable: existing /clean-downloads-folder/ updated; no new URL. Specific answer, setup steps, code-grounded illustrative plan, alternate approaches with official citations, scope limits, ownership disclosure, existing individual pricing route and relevant docs links.

### 2. Choose a photo organizer that produces ordinary folders rather than a managed image library

- Evidence: [software seeker wants folders rather than a proprietary layout](https://www.reddit.com/r/software/comments/o5ujf8/); [user evaluating DAM software questions library copies](https://www.reddit.com/r/EagleCool/comments/1osqzxe/eagle_makes_copy_of_every_file_indexed_really/). Competing official pages: Eagle homepage and desktop guide above; AI File Sorter's reviewable folder moves.
- Existing coverage: Galoria /automatic-photo-organizer/ describes category suggestions and moves but does not directly contrast physical moves, library import, album/tag organization or leaving originals untouched. /photo-organizer-windows/ now covers filename conflicts, a separate question.
- Verified fit: Galoria backend/file_ops.py executes shutil.move to category folders; backend/galoria/planner.py supplies outputRoot; frontend selects Image Organizer Output under the chosen folder. It also writes local metadata/history, so claiming no database or no extra local storage would be inaccurate.
- Limitations: actual files move; not an in-place tagging/catalog viewer, backup, image editor or iPhone importer. A buyer who needs unchanged source paths should choose a catalog approach instead. This narrower distinction is promising but not implemented in this sprint.

### 3. Choose content-based invoice filing versus exact vendor/date rules

- Evidence: File Juggler's official homepage links directly to content-word and document-date filing; [a software-seeking discussion includes an October 12 receipt/PDF-field request](https://www.reddit.com/r/software/comments/1vxx283/looking_for_a_truly_local_ai_file_organizer/). AI File Sorter separately promotes scans/document renaming.
- Existing coverage: Foldora /blog/organize-invoices-automatically/ gives naming conventions and a generic workflow, but does not answer invoice-specific content sampling versus exact field extraction. Main Foldora and b106445 comparison already explain generic PDF limits; any future invoice edit should link those rather than repeat the generic audit.
- Verified fit: Foldora file_utils.py reads supported PDF text locally (three pages, first-page OCR attempt, 8 MiB content limit); _runtime.py uses available text/filenames for classification and suggestions. This supports reviewed semantic filing, not guaranteed vendor/PO/date extraction.
- Limitations: incomplete scans, later-page fields and exact accounting schemas can require a rules/extraction tool. Do not imply line-item extraction or precise invoice-date naming. Deferred because it overlaps recent Foldora buyer-fact work and provides a less complete fit than opportunity 1.

## Selection and measurement

Opportunity 1 has a precise, exposed UI control and deterministic backend behavior, official competing-page evidence, and no existing explanation on the relevant Cleanora URL. It answers a purchase objection without another page or feature. Existing design, price and checkout flows are preserved. No claims of higher rankings, AI citations or sales. Monitor relevant query/page impressions and visits after recrawl; transaction-level evidence is required for paid-order attribution.

## Validation

Build/static audit passed for 21 sitemap URLs; 18 pricing-navigation/anchor tests passed. Chrome 156 rendered the built page at 1440px desktop and 390px mobile. Document scroll widths were 1425px and 390px respectively (no horizontal page overflow); the mobile comparison table is 680px within a 358px scrolling container. Full-page screenshots were visually inspected. Temporary screenshots and browser metrics are outside Git under the local TEMP directory cleanora-acquisition-20261105. The example is based on application source and was not presented as an executed file-organization benchmark. Shared page data supplies identical FAQ answers to initial visible HTML and JSON-LD.
