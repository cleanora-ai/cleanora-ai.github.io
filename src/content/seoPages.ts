export type SeoPageKind =
  | "landing"
  | "guide"
  | "comparison"
  | "use-case"
  | "feature"
  | "docs";

export type Topic =
  | "downloads"
  | "pdfs"
  | "windows"
  | "privacy"
  | "renaming"
  | "workflows";

export interface SeoExample {
  title: string;
  before: string;
  after: string;
}

export interface SeoFaq {
  question: string;
  answer: string;
}

export interface SeoComparison {
  title: string;
  summary: string;
  rows: Array<{
    option: string;
    bestFor: string;
    tradeoff: string;
  }>;
}

export interface SeoPage {
  route: string;
  kind: SeoPageKind;
  topic: Topic;
  title: string;
  h1: string;
  description: string;
  eyebrow: string;
  updatedAt: string;
  directAnswer: string;
  problemTitle: string;
  problem: string[];
  steps: string[];
  examples: SeoExample[];
  comparison: SeoComparison;
  faqs: SeoFaq[];
  related: string[];
  indexable?: boolean;
}

const updatedAt = "2026-06-14";

export const seoPages: SeoPage[] = [
  {
    route: "ai-file-organizer",
    kind: "landing",
    topic: "workflows",
    title: "Cleanora AI File Organizer for Windows | Local and Safe",
    h1: "Local File Organizer for Windows",
    description:
      "Organize Windows folders with local metadata-based classification, exact destination previews, explicit confirmation, audit history, and conflict-safe undo.",
    eyebrow: "Local metadata-based organization",
    updatedAt,
    directAnswer:
      "Cleanora AI is a Windows file organizer that classifies files from filenames, extensions, modified dates, and filesystem metadata. The current planner does not read file contents or send them to a cloud model. You select a folder, review every proposed destination and conflict, exclude items if needed, and explicitly confirm the exact move plan before anything changes.",
    problemTitle: "Why safe folder automation needs more than a move button",
    problem: [
      "Downloads, Desktop, and project folders mix documents, images, archives, installers, audio, video, and source files. Manual sorting repeats the same extension and date decisions, but a bulk tool can create a bigger problem if it silently overwrites a destination or executes a plan that changed after review.",
      "Cleanora uses deterministic signals instead of reading document contents. That makes the decision path explainable: each preview shows the source, category, reason, exact destination, selection state, and conflict status. Execution rejects an expired, unknown, changed, or newly conflicting plan.",
    ],
    steps: [
      "Choose a Windows folder such as Downloads, Desktop, or a project archive.",
      "Choose Smart, File type, or Modified date classification and let Cleanora inspect local metadata.",
      "Review categories, reasons, exact destination paths, conflicts, and any files you want to exclude.",
      "Confirm the reviewed plan, then use the authenticated local audit and undo eligibility when needed.",
    ],
    examples: [
      {
        title: "Mixed Downloads folder",
        before: "invoice_1042.pdf, IMG_4829.png, setup.exe, paper-final.pdf",
        after:
          "Documents/PDF, Images, Installers, and Documents/PDF with original filenames preserved",
      },
      {
        title: "Date-based archive",
        before: "Reports, exports, and notes from several modified dates",
        after:
          "A preview grouped by modified date, with exact paths checked before the move",
      },
    ],
    comparison: {
      title: "Cleanora, custom rules, or manual sorting?",
      summary:
        "The right method depends on whether metadata is sufficient and how much custom setup the folder needs.",
      rows: [
        {
          option: "Cleanora",
          bestFor: "Explainable metadata-based organization with preview and undo",
          tradeoff: "Does not inspect document contents in the current build",
        },
        {
          option: "Rule-based tools",
          bestFor: "Repeatable conditions such as extension, date, or filename",
          tradeoff: "Rules must be created and maintained",
        },
        {
          option: "Manual folders",
          bestFor: "Small collections with occasional changes",
          tradeoff: "Time cost grows with every new file",
        },
      ],
    },
    faqs: [
      {
        question: "Does Cleanora upload or read my file contents?",
        answer:
          "No. The current planner uses filenames, extensions, modified dates, and filesystem metadata locally. File contents are not read or sent to a remote organizer service.",
      },
      {
        question: "Can I review changes before files move?",
        answer:
          "Yes. Cleanora shows each proposed category, reason, exact destination, selection state, and conflict before an explicit confirmation.",
      },
      {
        question: "Which Windows folders can I organize?",
        answer:
          "Common starting points are Downloads, Desktop, Documents, and project folders. Use a focused folder first so the proposed structure is easy to review.",
      },
    ],
    related: [
      "best-file-organizer-windows",
      "clean-downloads-folder",
      "preview-file-moves-windows",
      "features/offline-processing",
    ],
  },
  {
    route: "best-file-organizer-windows",
    kind: "landing",
    topic: "windows",
    title: "Best File Organizer for Windows: What to Compare",
    h1: "Best File Organizer for Windows",
    description:
      "Compare AI, rule-based, and manual file organization for Windows. See which approach fits Downloads cleanup, renaming, privacy, and large folders.",
    eyebrow: "Windows software comparison",
    updatedAt,
    directAnswer:
      "The best Windows file organizer depends on the workflow. Cleanora is a strong fit when deterministic filename and metadata classification is enough. File Juggler is better when you want detailed Windows automation rules. Power Automate is better for broader business processes that connect files with other Microsoft services.",
    problemTitle: "The important criteria are workflow, control, and privacy",
    problem: [
      "A useful comparison should go beyond a generic feature list. Check whether the tool understands document context or only matches rules, whether it can rename as well as move files, and whether it shows a preview before making changes.",
      "For confidential PDFs, invoices, or client documents, also verify where analysis happens. A local workflow reduces the need to send file content to an external service.",
    ],
    steps: [
      "List the folders and file types that create the most repeated work.",
      "Decide whether you prefer automatic suggestions or explicit if-then rules.",
      "Check local-processing, preview, backup, and platform requirements.",
      "Test one representative folder before applying a tool to a large archive.",
    ],
    examples: [
      {
        title: "Low-setup cleanup",
        before: "A Downloads folder with unrelated PDFs, images, and installers",
        after: "Use Cleanora to propose a metadata-based structure and review it",
      },
      {
        title: "Deterministic workflow",
        before: "Every PDF containing a known supplier code follows one process",
        after: "Use a rule-based tool for an exact repeatable action",
      },
    ],
    comparison: {
      title: "Windows file organizer shortlist",
      summary:
        "These products solve different problems, so there is no universal winner.",
      rows: [
        {
          option: "Cleanora",
          bestFor: "Metadata-based local organization with low setup",
          tradeoff: "Narrower automation scope than a general workflow platform",
        },
        {
          option: "File Juggler",
          bestFor: "Detailed file rules on Windows",
          tradeoff: "Requires users to define and maintain rules",
        },
        {
          option: "Power Automate",
          bestFor: "Cross-application and business process automation",
          tradeoff: "More setup than a focused folder organizer",
        },
      ],
    },
    faqs: [
      {
        question: "What should a Windows file organizer do?",
        answer:
          "At minimum, it should move or categorize files reliably. Depending on your needs, look for content-aware organization, bulk renaming, previews, and local processing.",
      },
      {
        question: "Is AI always better than rules?",
        answer:
          "No. AI is useful for inconsistent files and low-setup categorization. Rules are better when the condition and required action are exact.",
      },
      {
        question: "How should I test a file organizer?",
        answer:
          "Use a copy or a small representative folder, inspect every proposed action, and confirm the resulting destination paths fit how you retrieve files.",
      },
    ],
    related: [
      "ai-file-organizer",
      "alternatives/file-juggler",
      "alternatives/power-automate",
      "organize-files-windows",
    ],
  },
  {
    route: "clean-downloads-folder",
    kind: "landing",
    topic: "downloads",
    title: "Clean Your Downloads Folder Automatically on Windows",
    h1: "How to Clean Your Downloads Folder Automatically",
    description:
      "Clean and organize a crowded Windows Downloads folder with a repeatable workflow for documents, installers, archives, images, and temporary files.",
    eyebrow: "Downloads cleanup workflow",
    updatedAt,
    directAnswer:
      "To clean a Downloads folder automatically, separate disposable files from documents you need to keep and organize the remaining files by durable categories. Cleanora can classify filenames and metadata locally, propose exact destinations, and let you review the plan before files move.",
    problemTitle: "Downloads is an inbox, not a permanent filing system",
    problem: [
      "Browsers, email clients, and collaboration tools all save files into Downloads. That creates a mixture of installers, duplicate archives, receipts, reference PDFs, screenshots, and active work with no shared structure.",
      "Sorting only by extension creates broad folders such as PDFs or Images, but it does not distinguish a tax receipt from a research paper. A useful cleanup groups files according to why you will need them again.",
    ],
    steps: [
      "Remove obvious temporary downloads and duplicate installers.",
      "Separate active files from material that should be archived.",
      "Group kept files by purpose, such as Finance, Research, Clients, and Software.",
      "Rename unclear files, then review and apply the proposed cleanup.",
    ],
    examples: [
      {
        title: "Monthly cleanup",
        before: "receipts, ZIP archives, screenshots, and installers in one folder",
        after: "Finance/Receipts, Archives, Images, and Software/Installers",
      },
      {
        title: "Freelance work",
        before: "contract-final.pdf, brief2.docx, invoice-7.pdf",
        after: "Clients/Name/Contracts, Briefs, and Invoices",
      },
    ],
    comparison: {
      title: "Ways to maintain Downloads",
      summary:
        "Choose a method based on how varied the folder is and how often it changes.",
      rows: [
        {
          option: "Cleanora",
          bestFor: "Mixed files that fit deterministic metadata categories",
          tradeoff: "Requires reviewing proposed destinations",
        },
        {
          option: "Browser destination prompts",
          bestFor: "Choosing a folder at download time",
          tradeoff: "Adds friction to every download",
        },
        {
          option: "Scheduled manual cleanup",
          bestFor: "Small folders",
          tradeoff: "Easy to postpone and inconsistent at scale",
        },
      ],
    },
    faqs: [
      {
        question: "Should I delete everything in Downloads?",
        answer:
          "No. Treat Downloads as an inbox. Delete replaceable installers and duplicates, but move records, work files, and reference material into durable folders.",
      },
      {
        question: "How often should Downloads be cleaned?",
        answer:
          "Weekly works for heavy downloaders; monthly is enough for lighter use. The best schedule prevents the folder from becoming difficult to review.",
      },
      {
        question: "Can Cleanora clean Downloads without internet access?",
        answer:
          "Yes. Cleanora's file analysis and organization workflow runs locally.",
      },
    ],
    related: [
      "blog/organize-downloads-folder-automatically",
      "features/downloads-cleanup",
      "preview-file-moves-windows",
      "blog/organize-pdfs-automatically",
    ],
  },
  {
    route: "organize-files-windows",
    kind: "landing",
    topic: "windows",
    title: "How to Organize Files on Windows Automatically",
    h1: "How to Organize Files Automatically on Windows",
    description:
      "Build a practical Windows file system for Downloads, Desktop, Documents, and project folders, then automate repeated sorting and renaming.",
    eyebrow: "Windows file management",
    updatedAt,
    directAnswer:
      "Organize Windows files around retrieval rather than adding folders without a plan. Start with durable top-level categories, process inbox folders such as Downloads and Desktop, and automate repeated metadata-based routing. Cleanora can propose exact local destinations and show a preview before applying them.",
    problemTitle: "Deep folder trees and vague names both reduce findability",
    problem: [
      "A single folder becomes noisy, but an excessively deep hierarchy is also hard to use. The goal is a small number of predictable locations with filenames that remain understandable in search results.",
      "Windows users often have several inboxes: Downloads, Desktop, email attachments, and synchronized work folders. Unless each inbox feeds the same structure, duplicate and misplaced files accumulate.",
    ],
    steps: [
      "Create stable top-level folders for Work, Personal, Finance, Reference, and Archive.",
      "Treat Downloads and Desktop as temporary inboxes.",
      "Use project, client, course, or year subfolders only where they aid retrieval.",
      "Automate repeatable categorization and rename unclear files before archiving.",
    ],
    examples: [
      {
        title: "Consultant structure",
        before: "Documents organized only as PDF, DOCX, and XLSX",
        after: "Clients/Client Name/Contracts, Deliverables, Meetings, and Finance",
      },
      {
        title: "Personal records",
        before: "Scans and receipts spread across Desktop and Downloads",
        after: "Personal/Finance/Year and Personal/Records",
      },
    ],
    comparison: {
      title: "Folder structure approaches",
      summary:
        "The simplest structure that supports retrieval is usually the most maintainable.",
      rows: [
        {
          option: "Purpose and project",
          bestFor: "Most work and personal document collections",
          tradeoff: "Some files could logically fit more than one project",
        },
        {
          option: "File type",
          bestFor: "Media or format-specific production workflows",
          tradeoff: "Loses business and project context",
        },
        {
          option: "Date only",
          bestFor: "Time-based archives",
          tradeoff: "Hard to browse when dates are unknown",
        },
      ],
    },
    faqs: [
      {
        question: "What are the best top-level folders for Windows?",
        answer:
          "A practical starting set is Work, Personal, Finance, Reference, and Archive. Adjust it to the categories you actually search for.",
      },
      {
        question: "Should folders be organized by type or project?",
        answer:
          "Project or purpose is usually more useful for documents. Type-based organization is useful when the format itself determines the workflow.",
      },
      {
        question: "Can Windows file organization be automated?",
        answer:
          "Yes. You can use custom rules for predictable cases or Cleanora for deterministic filename, extension, date, and metadata classification.",
      },
    ],
    related: [
      "ai-file-organizer",
      "best-file-organizer-windows",
      "clean-downloads-folder",
      "blog/desktop-file-management",
    ],
  },
  {
    route: "windows-file-organizer",
    kind: "landing",
    topic: "windows",
    title: "File Organizer for Windows | Local Planning and Preview",
    h1: "File Organizer for Windows",
    description:
      "Organize Downloads, Desktop, Documents, and project folders on Windows with local planning, preview-first review, and reversible changes.",
    eyebrow: "Windows file organization",
    updatedAt,
    directAnswer:
      "A file organizer for Windows should help you turn mixed inbox folders into a structure you can review before anything moves. Cleanora classifies the folder locally, proposes exact destinations, and leaves the final decision with you before changes are applied.",
    problemTitle: "Windows folders are easier to use when inboxes stay separate",
    problem: [
      "Browsers, email attachments, screenshots, installers, exports, and work files all tend to land in the same places. Downloads and Desktop become temporary inboxes unless you give them a repeatable cleanup workflow.",
      "Sorting only by extension creates broad folders that are easy to browse but still hard to use when the important context is the project, client, year, or purpose of the file.",
    ],
    steps: [
      "Choose one Windows inbox folder such as Downloads or Desktop.",
      "Let Cleanora inspect filenames, extensions, modified dates, and metadata locally.",
      "Review the proposed structure and file names before applying them.",
      "Save the approved layout so later cleanup follows the same pattern.",
    ],
    examples: [
      {
        title: "Downloads inbox",
        before: "invoice_1042.pdf, IMG_4829.png, setup.exe, draft-final.docx",
        after: "Finance/Invoices, Images/Screenshots, Software/Installers, Work/Docs",
      },
      {
        title: "Project workspace",
        before: "notes.txt, exported slides, reference PDFs, screenshots",
        after: "Project/Notes, Project/Presentations, Project/References, Project/Images",
      },
    ],
    comparison: {
      title: "Cleanora, rules, or manual filing?",
      summary:
        "The best method depends on how repetitive your folder is and how much review you want.",
      rows: [
        {
          option: "Cleanora",
          bestFor: "Metadata-based Windows organization with a preview step",
          tradeoff: "Suggestions should be reviewed before applying",
        },
        {
          option: "Rule-based tools",
          bestFor: "Exact patterns that always follow the same action",
          tradeoff: "Rules must be created and maintained",
        },
        {
          option: "Manual sorting",
          bestFor: "Small folders with occasional changes",
          tradeoff: "The cleanup work repeats every time",
        },
      ],
    },
    faqs: [
      {
        question: "What makes a Windows file organizer useful?",
        answer:
          "It should reduce repeated sorting work, keep folders easy to review, and make exact destinations clear before files move.",
      },
      {
        question: "Is preview important?",
        answer:
          "Yes. Preview keeps the user in control and makes it easier to spot an incorrect category or destination before applying changes.",
      },
      {
        question: "Can Cleanora organize Windows folders locally?",
        answer:
          "Yes. Cleanora is positioned as a local Windows workflow that can analyze and plan folder changes on the device.",
      },
    ],
    related: [
      "ai-file-organizer",
      "best-file-organizer-windows",
      "organize-files-windows",
      "clean-downloads-folder",
    ],
  },
  {
    route: "organize-files-automatically",
    kind: "landing",
    topic: "workflows",
    title: "How to Organize Thousands of Files Automatically",
    h1: "Organize Files Automatically Without Losing Control",
    description:
      "A safe workflow for categorizing, renaming, and archiving thousands of files with previews, small batches, and a structure built for retrieval.",
    eyebrow: "Large file collection workflow",
    updatedAt,
    directAnswer:
      "To organize thousands of files safely, process them in batches, define a small destination structure, preview every bulk action, and exclude uncertain files instead of forcing a category. Cleanora can propose destinations from local metadata, but the review step remains important for large or sensitive collections.",
    problemTitle: "Scale turns small naming mistakes into retrieval problems",
    problem: [
      "Large collections usually contain duplicates, incomplete filenames, old versions, and files whose purpose is no longer obvious. Moving everything in one operation makes errors difficult to inspect.",
      "A reliable workflow separates obvious cases from uncertain ones. High-confidence documents can be categorized first, while ambiguous files remain in a review folder.",
    ],
    steps: [
      "Back up the collection and start with one representative batch.",
      "Choose a shallow destination structure and a consistent naming pattern.",
      "Review proposed categories and destinations, separating ambiguous files for later.",
      "Apply the batch, test retrieval, then repeat with the next folder.",
    ],
    examples: [
      {
        title: "Ten years of documents",
        before: "Mixed tax files, contracts, manuals, and personal scans",
        after: "Finance by year, Legal by subject, Reference, and Review Needed",
      },
      {
        title: "Creative archive",
        before: "Exports, source files, references, and screenshots mixed together",
        after: "Projects by client with Source, Exports, References, and Archive",
      },
    ],
    comparison: {
      title: "Bulk organization methods",
      summary:
        "Automation should reduce repetitive work without hiding destructive actions.",
      rows: [
        {
          option: "Previewed batches",
          bestFor: "Large mixed collections",
          tradeoff: "Takes more time than a single unreviewed operation",
        },
        {
          option: "One-shot automation",
          bestFor: "Highly predictable disposable files",
          tradeoff: "High correction cost when assumptions are wrong",
        },
        {
          option: "Manual sorting",
          bestFor: "Small high-value archives",
          tradeoff: "Does not scale well",
        },
      ],
    },
    faqs: [
      {
        question: "How many files should I process at once?",
        answer:
          "Start with a representative folder small enough to inspect. Increase batch size only after the resulting structure and naming pattern are reliable.",
      },
      {
        question: "What should happen to ambiguous files?",
        answer:
          "Move them to a clearly named review folder. It is safer than assigning a misleading category.",
      },
      {
        question: "Do I need a backup before bulk organization?",
        answer:
          "Yes. Keep a current backup before any large move or rename operation, regardless of the tool used.",
      },
    ],
    related: [
      "organize-files-windows",
      "preview-file-moves-windows",
      "blog/digital-file-minimalism",
      "docs/how-it-works",
    ],
  },
  {
    route: "preview-file-moves-windows",
    kind: "landing",
    topic: "workflows",
    title: "Preview File Moves on Windows | Conflict-Safe Organization",
    h1: "Preview File Moves Before Organizing Windows Folders",
    description:
      "Preview exact file destinations, conflicts, categories, and reasons on Windows before confirming a bulk organization plan with Cleanora.",
    eyebrow: "Review-first file organization",
    updatedAt,
    directAnswer:
      "To preview file moves safely, build the organization plan without changing the filesystem, inspect every original path and exact destination, exclude uncertain items, and confirm only the plan identifier you reviewed. Cleanora follows that sequence and aborts if a source or destination changes before execution.",
    problemTitle: "A preview is useful only when execution matches it",
    problem: [
      "A decorative before-and-after screen is not enough for high-confidence bulk organization. Users need the exact source, destination, category, classification reason, selection state, and conflict status before any move begins.",
      "The folder can also change after preview. A new destination file, a changed source, an expired plan, or a reparse point can make the reviewed operation unsafe. Cleanora preflights the complete plan and refuses to silently choose a different destination.",
    ],
    steps: [
      "Select a focused Windows folder and choose a local classification mode.",
      "Generate a plan and inspect every proposed destination and classification reason.",
      "Exclude uncertain files and resolve any conflict shown in the preview.",
      "Confirm the reviewed plan, then inspect the authenticated local audit after execution.",
    ],
    examples: [
      {
        title: "Destination collision",
        before: "report.pdf is planned for a folder that already contains report.pdf",
        after: "The preview reserves a collision-safe destination before confirmation",
      },
      {
        title: "Folder changes after review",
        before: "A destination becomes occupied after the plan was generated",
        after: "Execution aborts instead of moving to an unreviewed path",
      },
    ],
    comparison: {
      title: "Bulk move safety approaches",
      summary:
        "The key difference is whether the final operation is tied to the exact reviewed plan.",
      rows: [
        {
          option: "Cleanora",
          bestFor: "Exact destination preview, preflight validation, audit, and undo",
          tradeoff: "Requires explicit review and confirmation",
        },
        {
          option: "Simple move script",
          bestFor: "Small disposable batches with fixed rules",
          tradeoff: "May not preserve a reviewed plan or audit trail",
        },
        {
          option: "Manual organization",
          bestFor: "A few high-value or ambiguous files",
          tradeoff: "Slow for repeated folder cleanup",
        },
      ],
    },
    faqs: [
      {
        question: "Does Cleanora overwrite an occupied destination?",
        answer:
          "No. It reserves collision-safe destinations during planning and aborts if an exact reviewed destination becomes occupied before execution.",
      },
      {
        question: "Can I exclude files from the plan?",
        answer:
          "Yes. The preview supports selection and exclusion before confirmation, so uncertain items can remain in the source folder.",
      },
      {
        question: "Can I undo an approved move?",
        answer:
          "Yes. A successful, not-yet-undone execution can be undone after confirmation when every original path passes conflict checks.",
      },
    ],
    related: [
      "features/conflict-safe-moves",
      "docs/how-it-works",
      "docs/troubleshooting",
      "organize-files-automatically",
    ],
  },
  {
    route: "blog/organize-pdfs-automatically",
    kind: "guide",
    topic: "pdfs",
    title: "How to Organize PDFs Automatically",
    h1: "How to Organize PDFs Automatically",
    description:
      "Organize PDFs by purpose, project, person, and date instead of keeping every document in one PDF folder. Includes examples for study, finance, and work.",
    eyebrow: "PDF organization guide",
    updatedAt,
    directAnswer:
      "Organize PDFs by combining extension-based routing with useful filename keywords and a review queue for uncertain documents. Cleanora can identify PDF files, use local filename and metadata signals, and preview exact destination paths without reading PDF contents.",
    problemTitle: "PDF is a format, not a useful category",
    problem: [
      "A PDF folder can contain bank statements, research papers, product manuals, contracts, and scanned receipts. Grouping them together reduces clutter elsewhere but does not improve retrieval.",
      "Scanned PDFs add another challenge because their filenames often contain only a scanner ID or date. They need descriptive names before search and browsing become dependable.",
    ],
    steps: [
      "Identify the major purposes in the collection: records, research, work, or reference.",
      "Create a shallow folder structure around those purposes.",
      "Rename PDFs with dates, subjects, authors, clients, or document types.",
      "Review duplicate and uncertain documents before archiving them.",
    ],
    examples: [
      {
        title: "Student library",
        before: "All readings stored in one semester PDF folder",
        after: "Course/Topic with author and paper title in each filename",
      },
      {
        title: "Household records",
        before: "Statements, receipts, policies, and manuals mixed together",
        after: "Finance by year, Insurance, and Home/Manuals",
      },
    ],
    comparison: {
      title: "PDF organization options",
      summary:
        "Citation managers excel at papers; file organizers cover broader document collections.",
      rows: [
        {
          option: "Cleanora",
          bestFor: "Mixed PDF collections and local folder organization",
          tradeoff: "Not a citation manager",
        },
        {
          option: "Reference manager",
          bestFor: "Academic citations, metadata, and bibliographies",
          tradeoff: "Less suitable for invoices, forms, and general records",
        },
        {
          option: "Manual folders",
          bestFor: "Small stable collections",
          tradeoff: "Scanned and downloaded files require repeated cleanup",
        },
      ],
    },
    faqs: [
      {
        question: "Should all PDFs go in one folder?",
        answer:
          "Usually not. Organize by the document's purpose or project so unrelated records and reading material do not compete in the same list.",
      },
      {
        question: "How should research PDFs be named?",
        answer:
          "A useful pattern is year, first author, and a shortened title. Add a course or topic only when it improves retrieval.",
      },
      {
        question: "Can scanned PDFs be organized automatically?",
        answer:
          "They can when the organizer can derive enough context from the supported document. Always review low-confidence names and categories.",
      },
    ],
    related: [
      "use-cases/students",
      "use-cases/researchers",
      "preview-file-moves-windows",
      "blog/organize-research-documents",
    ],
  },
  {
    route: "blog/organize-screenshots-automatically",
    kind: "guide",
    topic: "workflows",
    title: "How to Organize Screenshots Automatically",
    h1: "How to Organize Screenshots Automatically",
    description:
      "Turn screenshot folders into a useful reference system with project categories, descriptive names, review dates, and automatic cleanup.",
    eyebrow: "Screenshot organization guide",
    updatedAt,
    directAnswer:
      "Organize screenshots automatically by separating temporary captures from durable references, grouping retained images by project or subject, and replacing timestamp-only names with short descriptions. Review old temporary screenshots on a schedule so the folder does not become a permanent archive.",
    problemTitle: "A timestamp records when, not why",
    problem: [
      "Default screenshot names are unique but rarely meaningful. After a few weeks, users must open each image to remember whether it contains a receipt, design reference, error message, or conversation.",
      "Many screenshots are temporary. Keeping them indefinitely adds visual noise and increases the chance that sensitive information remains in an forgotten folder.",
    ],
    steps: [
      "Separate recent temporary screenshots from images worth keeping.",
      "Group retained images by project, client, course, or reference topic.",
      "Rename them with a short subject and optional date.",
      "Review and remove temporary captures after their task is complete.",
    ],
    examples: [
      {
        title: "Designer references",
        before: "Screenshot 2026-06-01 104522.png",
        after: "Client-Acme_Checkout-Mobile-Reference.png",
      },
      {
        title: "Technical support",
        before: "A folder of timestamped error captures",
        after: "Project/Error-Name/step-and-result.png",
      },
    ],
    comparison: {
      title: "Screenshot cleanup methods",
      summary:
        "The main decision is whether screenshots are disposable evidence or long-term references.",
      rows: [
        {
          option: "Project organization",
          bestFor: "Design, research, and support references",
          tradeoff: "Requires meaningful labels",
        },
        {
          option: "Automatic age deletion",
          bestFor: "Temporary captures",
          tradeoff: "Can remove useful evidence if retention is too short",
        },
        {
          option: "Single chronological folder",
          bestFor: "Very small volumes",
          tradeoff: "Hard to search by subject",
        },
      ],
    },
    faqs: [
      {
        question: "What is the best folder structure for screenshots?",
        answer:
          "Use project or subject folders for retained images and a separate temporary folder for captures that can be deleted after review.",
      },
      {
        question: "Should screenshot filenames include dates?",
        answer:
          "Include a date when chronology matters. A descriptive subject is usually more valuable than a timestamp alone.",
      },
      {
        question: "How long should screenshots be kept?",
        answer:
          "Keep evidence and reusable references as long as required. Review temporary captures weekly or monthly and delete those whose task is complete.",
      },
    ],
    related: [
      "blog/clean-desktop-clutter",
      "use-cases/students",
      "use-cases/freelancers",
      "preview-file-moves-windows",
    ],
  },
  {
    route: "blog/organize-research-documents",
    kind: "guide",
    topic: "pdfs",
    title: "How Researchers Can Organize Papers and Documents",
    h1: "How to Organize Research Documents",
    description:
      "A practical system for papers, datasets, notes, protocols, drafts, and administrative research files, with clear boundaries for citation managers.",
    eyebrow: "Research document workflow",
    updatedAt,
    directAnswer:
      "Researchers should organize documents by project and stage, use a citation manager for scholarly metadata, and keep datasets, protocols, ethics files, notes, and drafts in a predictable project folder. A file organizer can clean the surrounding document system, while the citation manager remains the source of truth for references.",
    problemTitle: "Research files have different retention and retrieval needs",
    problem: [
      "A paper library, raw data, analysis output, grant documents, and manuscript drafts should not share one undifferentiated folder. They have different owners, versioning requirements, and reasons for retrieval.",
      "Duplicating every paper across project folders also creates version drift. Store citation-managed papers once, then organize project-specific exports, notes, and supporting documents around the project.",
    ],
    steps: [
      "Create one folder per active research project with stable subfolders.",
      "Use a citation manager for papers and bibliographic metadata.",
      "Separate raw data, processed data, analysis, outputs, and manuscripts.",
      "Archive completed projects with a readme describing the structure.",
    ],
    examples: [
      {
        title: "Literature review",
        before: "Downloaded papers and notes mixed with manuscript drafts",
        after: "Citation library plus Project/Notes, Screening, Exports, and Manuscript",
      },
      {
        title: "Empirical study",
        before: "Raw spreadsheets edited in place beside charts",
        after: "Data/Raw read-only, Data/Processed, Analysis, Figures, and Manuscript",
      },
    ],
    comparison: {
      title: "Research organization tools",
      summary:
        "Use specialized tools for citations and broad file tools for the rest of the project.",
      rows: [
        {
          option: "Cleanora",
          bestFor: "Local cleanup of mixed research project files",
          tradeoff: "Does not replace citation or data-versioning tools",
        },
        {
          option: "Citation manager",
          bestFor: "Papers, metadata, annotations, and bibliographies",
          tradeoff: "Does not organize every project artifact",
        },
        {
          option: "Version control",
          bestFor: "Code, text, and reproducible analysis",
          tradeoff: "Not ideal for every large binary document",
        },
      ],
    },
    faqs: [
      {
        question: "Should researchers organize papers in folders?",
        answer:
          "Use a citation manager as the primary paper library. Folder organization remains useful for project-specific notes, exports, drafts, and supporting records.",
      },
      {
        question: "How should research data folders be structured?",
        answer:
          "Keep raw data unchanged, create separate processed and analysis outputs, and document the structure in a project readme.",
      },
      {
        question: "Can AI organize confidential research files?",
        answer:
          "Check the data policy of any tool. A local workflow such as Cleanora reduces the need to upload files, but institutional rules still apply.",
      },
    ],
    related: [
      "use-cases/researchers",
      "blog/organize-pdfs-automatically",
      "features/offline-processing",
      "preview-file-moves-windows",
    ],
  },
  {
    route: "blog/organize-invoices-automatically",
    kind: "guide",
    topic: "workflows",
    title: "How to Organize Invoices Automatically",
    h1: "How to Organize Invoices Automatically",
    description:
      "Organize incoming and outgoing invoices by year, status, vendor or client, and invoice number with consistent names and privacy-aware processing.",
    eyebrow: "Invoice organization guide",
    updatedAt,
    directAnswer:
      "Organize invoices with a consistent manual naming convention, separate incoming expenses from outgoing sales, group them by accounting year, and reconcile them with your accounting system. Cleanora can route files using filename and metadata signals, but it does not read invoice contents or replace bookkeeping controls.",
    problemTitle: "Invoices are records, not just PDFs",
    problem: [
      "Invoice files arrive through email, portals, scanners, and messaging tools. Their original names often omit the vendor, invoice date, or number needed for reconciliation.",
      "Mixing paid, unpaid, incoming, and outgoing invoices creates avoidable accounting work. The folder structure should support the same questions used during bookkeeping and tax preparation.",
    ],
    steps: [
      "Separate supplier invoices from invoices issued to clients.",
      "Use accounting year and status folders only when they match your process.",
      "Rename each file with date, party, invoice number, and document type.",
      "Reconcile the organized files with the accounting system and retention policy.",
    ],
    examples: [
      {
        title: "Supplier invoice",
        before: "document_9382.pdf",
        after: "2026-05-18_Acme_INV-9382_Supplier-Invoice.pdf",
      },
      {
        title: "Freelancer billing",
        before: "invoice-final-final.pdf",
        after: "2026-06-01_Client-Atlas_INV-2026-014_Issued.pdf",
      },
    ],
    comparison: {
      title: "Invoice file management options",
      summary:
        "Folder organization supports bookkeeping but should not become the accounting ledger.",
      rows: [
        {
          option: "Cleanora",
          bestFor: "Local metadata-based routing of incoming invoice files",
          tradeoff: "Does not perform reconciliation or tax accounting",
        },
        {
          option: "Accounting software",
          bestFor: "Transactions, reconciliation, tax records, and reports",
          tradeoff: "May not clean the original local file archive",
        },
        {
          option: "Manual folders",
          bestFor: "Very low invoice volume",
          tradeoff: "Naming and status handling become inconsistent",
        },
      ],
    },
    faqs: [
      {
        question: "What is a good invoice filename?",
        answer:
          "Use ISO date, vendor or client, invoice number, and a short type label. Example: 2026-05-18_Acme_INV-9382.pdf.",
      },
      {
        question: "Should paid and unpaid invoices be separate?",
        answer:
          "Only if folders are part of your active workflow. Your accounting system should remain the authoritative status record.",
      },
      {
        question: "Are invoice files sensitive?",
        answer:
          "Often yes. They can contain names, addresses, account details, and pricing, so confirm where any automated analysis occurs.",
      },
    ],
    related: [
      "use-cases/freelancers",
      "use-cases/accountants",
      "preview-file-moves-windows",
      "features/offline-processing",
    ],
  },
  {
    route: "blog/organize-downloads-folder-automatically",
    kind: "guide",
    topic: "downloads",
    title: "Downloads Folder Organization: A Repeatable Workflow",
    h1: "Organize Your Downloads Folder Automatically",
    description:
      "A repeatable Downloads workflow: triage disposable files, route documents by purpose, rename ambiguous files, and schedule lightweight maintenance.",
    eyebrow: "Downloads maintenance guide",
    updatedAt,
    directAnswer:
      "Use Downloads as a temporary inbox. Automate obvious routing, review context-dependent documents, rename files you will keep, and clear replaceable items on a schedule. The objective is not an empty folder at all times; it is a folder that never becomes too expensive to review.",
    problemTitle: "Cleanup fails when it is treated as a one-time project",
    problem: [
      "A large cleanup can restore order, but the same browser and email habits immediately start filling Downloads again. Maintenance needs a small repeatable workflow.",
      "Some downloads are safe to route by extension, while others need context. For example, two PDFs may be an invoice and a research paper, so an extension-only rule cannot finish the job.",
    ],
    steps: [
      "Automatically isolate installers, archives, and obvious temporary files.",
      "Route documents according to purpose rather than extension alone.",
      "Rename retained files whose original names will not be searchable later.",
      "Run a short weekly review and a deeper monthly archive check.",
    ],
    examples: [
      {
        title: "Weekly triage",
        before: "Seven days of downloads from browsers, email, and chat",
        after: "Keep, Delete, Installers, and context-specific destination folders",
      },
      {
        title: "Course material",
        before: "Slides, assignments, readings, and screenshots mixed together",
        after: "Course/Readings, Assignments, Slides, and References",
      },
    ],
    comparison: {
      title: "Automation depth",
      summary:
        "Combine deterministic rules with contextual review instead of forcing one method.",
      rows: [
        {
          option: "Local metadata suggestions",
          bestFor: "Mixed files with useful filename and metadata signals",
          tradeoff: "Requires preview and review",
        },
        {
          option: "Extension rules",
          bestFor: "Installers, archives, and known media types",
          tradeoff: "Cannot distinguish document purpose",
        },
        {
          option: "Manual weekly review",
          bestFor: "Ambiguous and high-value files",
          tradeoff: "Depends on a consistent habit",
        },
      ],
    },
    faqs: [
      {
        question: "Is this different from a one-time Downloads cleanup?",
        answer:
          "Yes. A cleanup handles the backlog; this workflow prevents the backlog from returning through regular triage and routing.",
      },
      {
        question: "Which Downloads files can be routed by simple rules?",
        answer:
          "Installers, archives, and some media files are often predictable. General PDFs and office documents usually need more context.",
      },
      {
        question: "Should the Downloads folder always be empty?",
        answer:
          "No. It can hold recent items awaiting review. The useful goal is a manageable inbox with no forgotten records.",
      },
    ],
    related: [
      "clean-downloads-folder",
      "features/downloads-cleanup",
      "blog/organize-pdfs-automatically",
      "organize-files-windows",
    ],
  },
  {
    route: "blog/clean-desktop-clutter",
    kind: "guide",
    topic: "windows",
    title: "How to Clean Desktop Clutter Without Hiding Files",
    h1: "How to Clean Desktop Clutter",
    description:
      "Clear a crowded Windows desktop by separating shortcuts, active work, temporary captures, and files that belong in permanent project folders.",
    eyebrow: "Desktop cleanup guide",
    updatedAt,
    directAnswer:
      "Clean desktop clutter by keeping only shortcuts and a small number of active items on the desktop. Move durable documents into project or purpose-based folders, send temporary captures to a review folder, and archive completed work. Avoid solving clutter by placing everything in one miscellaneous folder.",
    problemTitle: "The desktop mixes navigation with storage",
    problem: [
      "A desktop is useful for launching tools and holding a few active files. It becomes difficult to scan when screenshots, downloads, shortcuts, and completed work all share the same visual space.",
      "A folder named Desktop Cleanup only moves the problem. Files need destinations that reflect where you will look for them later.",
    ],
    steps: [
      "Remove broken shortcuts and obvious temporary files.",
      "Move active work into a single clearly named working folder.",
      "File durable documents into their project or purpose-based destination.",
      "Review the working folder weekly and archive completed material.",
    ],
    examples: [
      {
        title: "Remote worker desktop",
        before: "Meeting exports, screenshots, client files, and shortcuts",
        after: "Shortcuts plus Active Work; documents moved to client projects",
      },
      {
        title: "Student desktop",
        before: "Assignments and readings from several classes",
        after: "Current Week shortcut with files stored inside course folders",
      },
    ],
    comparison: {
      title: "Desktop cleanup strategies",
      summary:
        "Visual tidiness is useful only when files remain easy to retrieve.",
      rows: [
        {
          option: "Purpose-based filing",
          bestFor: "Durable documents and project work",
          tradeoff: "Requires choosing a destination",
        },
        {
          option: "Single cleanup folder",
          bestFor: "Emergency visual cleanup",
          tradeoff: "Postpones organization",
        },
        {
          option: "Automatic age cleanup",
          bestFor: "Disposable captures",
          tradeoff: "Needs careful retention settings",
        },
      ],
    },
    faqs: [
      {
        question: "What should stay on a Windows desktop?",
        answer:
          "Keep frequently used shortcuts and only a few active items. Durable files should live in project or purpose-based folders.",
      },
      {
        question: "Is a miscellaneous desktop folder a good solution?",
        answer:
          "Only as a temporary staging area. Review it promptly or it becomes another unsearchable backlog.",
      },
      {
        question: "How often should I clean the desktop?",
        answer:
          "A short weekly review is usually enough when active files already have predictable destinations.",
      },
    ],
    related: [
      "blog/organize-screenshots-automatically",
      "blog/desktop-file-management",
      "organize-files-windows",
      "organize-files-automatically",
    ],
  },
  {
    route: "blog/desktop-file-management",
    kind: "guide",
    topic: "workflows",
    title: "Desktop File Management: Inbox, Projects, and Archive",
    h1: "A Practical Desktop File Management System",
    description:
      "Manage desktop files with a three-stage system for incoming items, active projects, and completed archives instead of repeated emergency cleanups.",
    eyebrow: "File management system",
    updatedAt,
    directAnswer:
      "A maintainable desktop file system has three stages: inboxes for new files, project folders for active work, and archives for completed material. Each file should move forward through that lifecycle. Automation is most useful at the inbox stage, where categorization and renaming are repetitive.",
    problemTitle: "Folders need a lifecycle, not just labels",
    problem: [
      "Most organization systems describe where files go but not when they move. Without a lifecycle, finished projects remain beside active work and inbox folders become permanent storage.",
      "The archive should preserve context while reducing daily noise. It should not require reorganizing every completed project from scratch.",
    ],
    steps: [
      "Define inbox folders such as Downloads, Desktop, and Scans.",
      "Create one folder for each active project with a consistent internal pattern.",
      "Process inboxes on a schedule and rename files before they enter projects.",
      "Move completed projects into a dated archive without changing their internal structure.",
    ],
    examples: [
      {
        title: "Small business",
        before: "Current and completed client work mixed in Documents",
        after: "Inbox, Active Clients, Operations, and Archive by year",
      },
      {
        title: "Personal administration",
        before: "Bills, forms, manuals, and scans in several locations",
        after: "Inbox, Finance, Records, Home, and Archive",
      },
    ],
    comparison: {
      title: "Lifecycle versus static filing",
      summary:
        "Lifecycle systems make the status of work visible without adding many folders.",
      rows: [
        {
          option: "Inbox-project-archive",
          bestFor: "Changing work with clear completion states",
          tradeoff: "Requires regular inbox processing",
        },
        {
          option: "Static subject folders",
          bestFor: "Reference collections",
          tradeoff: "Does not show active versus completed work",
        },
        {
          option: "Search only",
          bestFor: "Well-named small collections",
          tradeoff: "Weak when names and metadata are inconsistent",
        },
      ],
    },
    faqs: [
      {
        question: "How many inbox folders should I have?",
        answer:
          "Keep the natural capture points you already use, such as Downloads and Desktop, but process all of them into one consistent project and archive system.",
      },
      {
        question: "Should completed projects be reorganized?",
        answer:
          "Usually no. Move the complete project folder into the archive so its internal context and relative paths remain stable.",
      },
      {
        question: "Can search replace folder organization?",
        answer:
          "Search works well when filenames and content are reliable. A basic lifecycle still helps with status, sharing, backup, and retention.",
      },
    ],
    related: [
      "blog/clean-desktop-clutter",
      "blog/digital-file-minimalism",
      "organize-files-automatically",
      "use-cases/freelancers",
    ],
  },
  {
    route: "blog/offline-ai-file-organizer",
    kind: "guide",
    topic: "privacy",
    title: "Offline AI File Organizers: Privacy and Tradeoffs",
    h1: "What Is an Offline AI File Organizer?",
    description:
      "Learn how offline AI file organization differs from cloud processing, what local processing protects, and what to verify before using it.",
    eyebrow: "Privacy and local AI",
    updatedAt,
    directAnswer:
      "An offline AI file organizer performs analysis on the user's device instead of sending file content to a remote model for each organization task. This reduces cloud exposure and allows organization without an internet connection. Users should still verify software updates, telemetry, permissions, and backup practices.",
    problemTitle: "Local processing reduces one risk, not every risk",
    problem: [
      "Cloud organization can be convenient, but sensitive invoices, contracts, research, and client files may be subject to privacy or organizational policies. Local processing limits the need to transmit those files for analysis.",
      "Offline does not automatically mean secure. The application still needs appropriate folder permissions, the device needs protection, and users need backups before bulk changes.",
    ],
    steps: [
      "Confirm whether file content or metadata leaves the device.",
      "Review the folders and permissions the application can access.",
      "Test organization on a small backed-up folder.",
      "Monitor updates, privacy documentation, and any optional telemetry settings.",
    ],
    examples: [
      {
        title: "Client contracts",
        before: "Uploading confidential agreements to a general cloud organizer",
        after: "Analyze and categorize the local copies on the Windows device",
      },
      {
        title: "Travel or restricted network",
        before: "Organization stops when a cloud service is unavailable",
        after: "Continue the local workflow without an internet connection",
      },
    ],
    comparison: {
      title: "Local versus cloud file analysis",
      summary:
        "The best choice depends on privacy requirements, device capacity, and collaboration needs.",
      rows: [
        {
          option: "Local AI",
          bestFor: "Private files, offline use, and device-controlled processing",
          tradeoff: "Uses local CPU, memory, and storage",
        },
        {
          option: "Cloud AI",
          bestFor: "Centralized services and cross-device workflows",
          tradeoff: "Requires data-transfer and provider-policy review",
        },
        {
          option: "No content analysis",
          bestFor: "Strict deterministic rules",
          tradeoff: "Less context-aware categorization",
        },
      ],
    },
    faqs: [
      {
        question: "Does offline AI mean no network activity at all?",
        answer:
          "Not always. A product may still check for updates or process payments separately. Verify the specific privacy and network behavior.",
      },
      {
        question: "Is local AI slower than cloud AI?",
        answer:
          "Performance depends on the model, device, and workload. Local processing avoids upload time but uses the computer's own resources.",
      },
      {
        question: "Why is preview important for local organization?",
        answer:
          "Privacy does not prevent filing errors. A preview lets users verify proposed destinations before changing the filesystem.",
      },
    ],
    related: [
      "features/offline-processing",
      "docs/privacy",
      "ai-file-organizer",
      "blog/organize-research-documents",
    ],
  },
  {
    route: "blog/digital-file-minimalism",
    kind: "guide",
    topic: "workflows",
    title: "Digital File Minimalism: Keep Less, Find More",
    h1: "A Practical Guide to Digital File Minimalism",
    description:
      "Reduce file clutter without deleting important records. Use retention rules, trusted archives, clear names, and fewer duplicate copies.",
    eyebrow: "Sustainable file organization",
    updatedAt,
    directAnswer:
      "Digital file minimalism means keeping the smallest useful collection, not deleting files indiscriminately. Remove replaceable duplicates, define retention rules, keep one trusted copy of durable records, and make retained files easy to identify. Organization and deletion should be separate review decisions.",
    problemTitle: "More storage postpones decisions but does not improve retrieval",
    problem: [
      "Cheap storage encourages users to keep every download, export, and duplicate. Search results then contain several versions with unclear names, making it harder to know which file is authoritative.",
      "Minimalism needs retention exceptions. Tax records, legal files, source material, and contractual deliverables may need to remain even when they are rarely opened.",
    ],
    steps: [
      "Identify authoritative records and files with required retention periods.",
      "Remove replaceable installers, duplicate downloads, and obsolete exports.",
      "Rename and organize the trusted copies you keep.",
      "Review inboxes regularly and archives less frequently.",
    ],
    examples: [
      {
        title: "Design exports",
        before: "Dozens of near-identical PNG and PDF exports",
        after: "Source file, approved deliverable, and one archive of milestones",
      },
      {
        title: "Personal downloads",
        before: "Old installers and duplicate statements beside current records",
        after: "Current records organized by purpose; replaceable files removed",
      },
    ],
    comparison: {
      title: "Minimalism versus aggressive cleanup",
      summary:
        "A good system reduces noise while preserving legal, operational, and personal value.",
      rows: [
        {
          option: "Retention-led minimalism",
          bestFor: "Long-term maintainable archives",
          tradeoff: "Requires defining what is authoritative",
        },
        {
          option: "Delete by age",
          bestFor: "Known temporary folders",
          tradeoff: "Unsafe for records without clear exceptions",
        },
        {
          option: "Keep everything",
          bestFor: "Short-lived collection phases",
          tradeoff: "Duplicates and obsolete versions reduce trust",
        },
      ],
    },
    faqs: [
      {
        question: "Is digital minimalism the same as deleting old files?",
        answer:
          "No. It is a deliberate retention system. Some old records are important, while some recent downloads are disposable.",
      },
      {
        question: "How do I choose the authoritative copy?",
        answer:
          "Use approval status, source, completeness, and business or legal requirements. Rename the trusted copy so its role is clear.",
      },
      {
        question: "Can organization tools safely delete duplicates?",
        answer:
          "Duplicate review should be conservative. Similar names do not prove identical content, so keep deletion separate from categorization and renaming.",
      },
    ],
    related: [
      "organize-files-automatically",
      "blog/desktop-file-management",
      "clean-downloads-folder",
      "preview-file-moves-windows",
    ],
  },
  {
    route: "use-cases/students",
    kind: "use-case",
    topic: "pdfs",
    title: "File Organization for Students: Courses, PDFs, and Assignments",
    h1: "File Organization for Students",
    description:
      "Organize course readings, lecture slides, assignments, notes, and screenshots with a semester system that remains easy to archive.",
    eyebrow: "Student workflow",
    updatedAt,
    directAnswer:
      "Students should organize files first by academic period, then by course, with consistent folders for readings, lectures, assignments, and notes. Rename downloaded PDFs and slides with the course and topic, and archive the complete semester after grades and submissions are finalized.",
    problemTitle: "Course portals create fragmented download habits",
    problem: [
      "Readings, slides, assignment briefs, and feedback often arrive from several systems with generic filenames. Without a course structure, students repeatedly download the same document or submit the wrong version.",
      "The system should also make semester archiving easy. Course folders need enough context to remain understandable after the course portal is no longer available.",
    ],
    steps: [
      "Create a semester folder with one subfolder per course.",
      "Use consistent Reading, Lectures, Assignments, Notes, and Admin folders.",
      "Rename files with course code, topic, and assignment or document type.",
      "Archive the full semester after confirming final submissions and grades.",
    ],
    examples: [
      {
        title: "Research methods course",
        before: "article.pdf, Week5.pptx, final-v2.docx",
        after: "RES201/Readings, Lectures, and Assignments with descriptive names",
      },
      {
        title: "Group project",
        before: "Drafts and feedback exchanged through several apps",
        after: "Course/Project/Brief, Research, Drafts, Feedback, and Submission",
      },
    ],
    comparison: {
      title: "Student organization tools",
      summary:
        "Folder organization complements, rather than replaces, notes and citation tools.",
      rows: [
        {
          option: "Cleanora",
          bestFor: "Cleaning downloaded course files locally",
          tradeoff: "Does not replace a learning management system",
        },
        {
          option: "Citation manager",
          bestFor: "Academic papers and bibliographies",
          tradeoff: "Not designed for every assignment and slide deck",
        },
        {
          option: "Cloud course folder",
          bestFor: "Cross-device access and collaboration",
          tradeoff: "Requires deliberate naming and sync management",
        },
      ],
    },
    faqs: [
      {
        question: "Should students organize by course or file type?",
        answer:
          "Organize by semester and course first. File-type or workflow folders can sit inside each course.",
      },
      {
        question: "How should assignment files be named?",
        answer:
          "Include course code, assignment name, and a meaningful version or submission status. Avoid relying on final-final naming.",
      },
      {
        question: "What should happen at the end of a semester?",
        answer:
          "Confirm submissions, remove replaceable duplicates, add any final feedback, and move the complete semester folder into an archive.",
      },
    ],
    related: [
      "blog/organize-pdfs-automatically",
      "blog/organize-research-documents",
      "preview-file-moves-windows",
      "features/offline-processing",
    ],
  },
  {
    route: "use-cases/freelancers",
    kind: "use-case",
    topic: "workflows",
    title: "File Organization for Freelancers and Client Work",
    h1: "File Organization for Freelancers",
    description:
      "Organize briefs, contracts, invoices, source files, deliverables, and feedback with a repeatable client folder lifecycle.",
    eyebrow: "Freelancer workflow",
    updatedAt,
    directAnswer:
      "Freelancers should create one durable folder per client or engagement, separate contracts and finance from production files, and archive the complete project after delivery. Consistent names for briefs, versions, feedback, and invoices reduce mistakes when several clients are active.",
    problemTitle: "Client work combines legal, financial, and production records",
    problem: [
      "A single engagement may include a proposal, contract, source files, feedback, exports, and invoices. Organizing only by file type separates documents that need to be understood together.",
      "Version confusion also affects revenue. Sending the wrong export or losing the approved scope creates rework and weakens the client record.",
    ],
    steps: [
      "Create a client folder with one subfolder per engagement.",
      "Separate Admin, Finance, Source, Feedback, and Deliverables.",
      "Use dates or explicit statuses for files that move through approvals.",
      "Archive the complete engagement after payment and final delivery.",
    ],
    examples: [
      {
        title: "Brand design project",
        before: "Briefs, logos, exports, and invoices in Downloads",
        after: "Client/Project/Admin, Source, Feedback, Deliverables, and Finance",
      },
      {
        title: "Consulting engagement",
        before: "Meeting notes and reports stored by file type",
        after: "Client/Engagement/Scope, Meetings, Research, Reports, and Billing",
      },
    ],
    comparison: {
      title: "Freelancer file systems",
      summary:
        "The project folder should remain usable even when a separate business app is unavailable.",
      rows: [
        {
          option: "Client-project folders",
          bestFor: "Complete engagement records",
          tradeoff: "Shared reference assets need a separate library",
        },
        {
          option: "File-type folders",
          bestFor: "Format-specific production queues",
          tradeoff: "Splits the client record",
        },
        {
          option: "Project management attachments",
          bestFor: "Task-level collaboration",
          tradeoff: "May not be a durable local archive",
        },
      ],
    },
    faqs: [
      {
        question: "Should invoices be inside each client folder?",
        answer:
          "A copy can live with the engagement, but bookkeeping software or a central finance archive should remain the authoritative financial record.",
      },
      {
        question: "How should deliverables be versioned?",
        answer:
          "Use explicit stages such as draft, review, approved, and delivered, plus a date or version when multiple iterations matter.",
      },
      {
        question: "When should a freelance project be archived?",
        answer:
          "After final delivery, acceptance, payment, and any required handoff. Keep retention obligations in mind.",
      },
    ],
    related: [
      "blog/organize-invoices-automatically",
      "blog/desktop-file-management",
      "preview-file-moves-windows",
      "features/offline-processing",
    ],
  },
  {
    route: "use-cases/researchers",
    kind: "use-case",
    topic: "pdfs",
    title: "File Organization for Researchers",
    h1: "File Organization for Researchers",
    description:
      "Organize literature, protocols, data, analysis, figures, manuscripts, and administrative records without replacing specialist research tools.",
    eyebrow: "Researcher workflow",
    updatedAt,
    directAnswer:
      "Researchers need a project structure that separates literature management, immutable raw data, processing, analysis, outputs, manuscripts, and administration. Use specialist tools for citations and version control, and use local file organization to keep the broader project archive consistent.",
    problemTitle: "A research project spans more than papers",
    problem: [
      "Citation libraries solve only one part of the problem. Ethics approvals, consent forms, protocols, meeting notes, code, datasets, figures, and manuscripts each need appropriate access and retention.",
      "Automated organization must respect institutional policy. Confidential or regulated files may require approved storage, encryption, access controls, and local-only processing.",
    ],
    steps: [
      "Create a documented project template before data collection starts.",
      "Keep raw data immutable and separate from transformed data.",
      "Store papers in a citation manager and project-specific notes in the project.",
      "Archive the project with a readme, environment details, and retention notes.",
    ],
    examples: [
      {
        title: "Qualitative project",
        before: "Transcripts, consent files, notes, and drafts mixed together",
        after: "Restricted Admin, Data/Raw, Data/Processed, Analysis, and Manuscript",
      },
      {
        title: "Computational project",
        before: "Code, generated figures, and downloaded datasets in one folder",
        after: "Code, Data, Results, Figures, Docs, and reproducibility metadata",
      },
    ],
    comparison: {
      title: "Research workflow roles",
      summary:
        "No single organizer should replace citation, data, and versioning controls.",
      rows: [
        {
          option: "Cleanora",
          bestFor: "Local cleanup and categorization of mixed project documents",
          tradeoff: "Not a repository, citation manager, or electronic lab notebook",
        },
        {
          option: "Research repository",
          bestFor: "Preservation, sharing, identifiers, and governance",
          tradeoff: "Not a daily desktop cleanup tool",
        },
        {
          option: "Version control",
          bestFor: "Code and text history",
          tradeoff: "Large binary data needs additional tooling",
        },
      ],
    },
    faqs: [
      {
        question: "Can AI organize human-subject research files?",
        answer:
          "Only when the workflow complies with institutional approvals and data policy. Local processing helps but does not replace governance.",
      },
      {
        question: "Where should raw data be stored?",
        answer:
          "Use approved storage, keep raw data unchanged, restrict access where required, and document every transformation into processed datasets.",
      },
      {
        question: "Should papers be copied into every project?",
        answer:
          "Usually no. Keep one citation-managed library and store project-specific notes, exports, or links with each project.",
      },
    ],
    related: [
      "blog/organize-research-documents",
      "blog/organize-pdfs-automatically",
      "features/offline-processing",
      "preview-file-moves-windows",
    ],
  },
  {
    route: "use-cases/accountants",
    kind: "use-case",
    topic: "privacy",
    title: "File Organization for Accountants and Bookkeepers",
    h1: "File Organization for Accountants",
    description:
      "Organize client records, invoices, statements, tax documents, workpapers, and exports with year, entity, status, and retention controls.",
    eyebrow: "Accounting document workflow",
    updatedAt,
    directAnswer:
      "Accountants should organize files by client or entity and accounting period, separate source documents from workpapers and final deliverables, and use a consistent naming convention for statements, invoices, returns, and reports. Local automation can reduce filing work, but accounting systems and retention policies remain authoritative.",
    problemTitle: "Financial files require both findability and control",
    problem: [
      "The same client may generate bank statements, invoices, payroll exports, tax records, correspondence, and completed reports. Generic year folders are not enough when several entities and filing periods are involved.",
      "These documents often contain personal and financial information. Any automated organizer should be evaluated for storage location, access, auditability, and data handling.",
    ],
    steps: [
      "Create a client or entity folder with accounting-period subfolders.",
      "Separate Source, Workpapers, Correspondence, and Final Deliverables.",
      "Rename source files with period, institution or vendor, and document type.",
      "Apply retention and archive rules after the engagement closes.",
    ],
    examples: [
      {
        title: "Monthly bookkeeping",
        before: "Statements and receipts downloaded with portal-generated names",
        after: "Client/2026/05/Source/Bank, Cards, Sales, and Expenses",
      },
      {
        title: "Tax engagement",
        before: "Prior returns, source forms, notes, and final filings mixed together",
        after: "Client/Tax-Year/Source, Workpapers, Correspondence, and Final",
      },
    ],
    comparison: {
      title: "Accounting document tools",
      summary:
        "Local folders support the engagement but should align with the system of record.",
      rows: [
        {
          option: "Cleanora",
          bestFor: "Local categorization of incoming files from metadata",
          tradeoff: "Does not replace document management or accounting controls",
        },
        {
          option: "Practice management system",
          bestFor: "Client workflow, permissions, and engagement status",
          tradeoff: "May not organize every local download",
        },
        {
          option: "Manual filing",
          bestFor: "Low-volume exceptions",
          tradeoff: "Inconsistent names increase review time",
        },
      ],
    },
    faqs: [
      {
        question: "What should an accounting filename contain?",
        answer:
          "Use client or entity, accounting period, institution or vendor, and document type. Add status only when it is operationally useful.",
      },
      {
        question: "Can financial documents be processed with AI?",
        answer:
          "Only under the firm's privacy, security, and professional obligations. Verify exactly where and how document content is processed.",
      },
      {
        question: "Should source documents and workpapers be separate?",
        answer:
          "Yes. Separating original evidence from analysis and final outputs improves review and preserves the source record.",
      },
    ],
    related: [
      "blog/organize-invoices-automatically",
      "features/offline-processing",
      "docs/privacy",
      "preview-file-moves-windows",
    ],
  },
  {
    route: "alternatives/cloud-organizers",
    kind: "comparison",
    topic: "privacy",
    title: "Cleanora vs Cloud AI File Organizers",
    h1: "Cleanora vs Cloud AI File Organizers",
    description:
      "Compare local Windows file organization with cloud-based AI organizers by privacy, preview control, setup, and offline use.",
    eyebrow: "Privacy comparison",
    updatedAt,
    directAnswer:
      "Choose Cleanora when you want a Windows file organizer that plans locally and keeps the review step on your device. Choose cloud AI organizers when you are comfortable sending files to an external service for analysis. The main difference is where the organization work happens and how much control you keep before anything changes.",
    problemTitle: "Local and cloud workflows differ in where analysis happens",
    problem: [
      "A local organizer keeps filenames and folder decisions on the device during planning. That is useful for private downloads, receipts, work files, and other local collections that you may not want to upload.",
      "A cloud workflow can be attractive when you already depend on a remote service, but you should confirm exactly what gets uploaded, how long it is retained, and whether you can review the result before changes are applied.",
    ],
    steps: [
      "Decide whether you want file analysis on-device or in a cloud service.",
      "Check whether the tool shows a preview before applying changes.",
      "Verify the supported Windows workflow and the folders you want to organize.",
      "Test one representative folder before adopting the tool for larger cleanup jobs.",
    ],
    examples: [
      {
        title: "Private local folder",
        before: "Invoices, receipts, and project PDFs mixed in Downloads",
        after: "Use Cleanora to plan locally and review before moving files",
      },
      {
        title: "Shared remote workflow",
        before: "A cloud-based process already handles uploaded documents",
        after: "Cloud AI may fit, but review upload and privacy terms first",
      },
    ],
    comparison: {
      title: "Local and cloud file organizers at a glance",
      summary:
        "The right choice depends on privacy expectations, setup effort, and how much review you need.",
      rows: [
        {
          option: "Cleanora",
          bestFor: "Windows users who want local planning and preview-first control",
          tradeoff: "Focused on folder cleanup rather than broad cloud workflows",
        },
        {
          option: "Cloud AI organizers",
          bestFor: "Users who already rely on a hosted service for document workflows",
          tradeoff: "Files may need to be uploaded for analysis",
        },
        {
          option: "Manual organization",
          bestFor: "Small one-off folders",
          tradeoff: "More repeated work and less consistency",
        },
      ],
    },
    faqs: [
      {
        question: "Does a cloud organizer always require uploads?",
        answer:
          "Usually yes, because the analysis happens on the service's side. Always verify the provider's privacy and retention policy before uploading files.",
      },
      {
        question: "Why choose a local organizer instead?",
        answer:
          "A local organizer keeps planning on your own device, which is easier to justify for private documents, receipts, and work files.",
      },
      {
        question: "Can Cleanora be used offline?",
        answer:
          "The repository describes scanning and planning as local and offline-first, with internet access needed for download and license activation or revalidation.",
      },
    ],
    related: [
      "ai-file-organizer",
      "docs/privacy",
      "best-file-organizer-windows",
      "alternatives/manual-organization",
    ],
  },
  {
    route: "alternatives/file-juggler",
    kind: "comparison",
    topic: "windows",
    title: "Cleanora vs File Juggler for Windows File Organization",
    h1: "Cleanora vs File Juggler",
    description:
      "Compare Cleanora's metadata-based suggestions with File Juggler's Windows rules for moving, renaming, deleting, and document-based workflows.",
    eyebrow: "Windows file organizer comparison",
    updatedAt,
    directAnswer:
      "Choose Cleanora when you want low-setup Windows classification from filenames, extensions, dates, and metadata with preview and undo. Choose File Juggler when you want detailed rules that move, rename, delete, and process files based on known conditions, including document content.",
    problemTitle: "Both are Windows tools, but their setup models differ",
    problem: [
      "File Juggler is built around automatic workflows and rules. That makes it suitable when users can state the exact condition and action for each incoming file.",
      "Cleanora is designed for mixed collections that can be classified from filenames and metadata. It proposes exact category destinations, then asks the user to review the move plan.",
    ],
    steps: [
      "Identify whether your files follow stable, testable patterns.",
      "List actions beyond organization, such as deletion or extraction.",
      "Decide how much rule maintenance you are willing to perform.",
      "Compare previews and test behavior on edge cases.",
    ],
    examples: [
      {
        title: "Known supplier documents",
        before: "Every invoice contains a stable supplier phrase and date",
        after: "File Juggler rule extracts fields and routes the invoice",
      },
      {
        title: "Unstructured archive",
        before: "Years of documents with inconsistent names",
        after: "Cleanora proposes category destinations and reasons for review",
      },
    ],
    comparison: {
      title: "Cleanora and File Juggler at a glance",
      summary:
        "Choose by predictability of input and desired automation control.",
      rows: [
        {
          option: "Cleanora",
          bestFor: "Low-setup filename and metadata categorization",
          tradeoff: "Review is required before file moves",
        },
        {
          option: "File Juggler",
          bestFor: "Precise recurring Windows file workflows",
          tradeoff: "Rules need configuration and maintenance",
        },
        {
          option: "Both approaches",
          bestFor: "Reviewed backlog cleanup followed by ongoing rules",
          tradeoff: "More tools and workflow complexity",
        },
      ],
    },
    faqs: [
      {
        question: "Can File Juggler read document content?",
        answer:
          "Its official site describes workflows that organize and rename documents based on words, dates, and PDF properties.",
      },
      {
        question: "Which product is better for exact rules?",
        answer:
          "File Juggler is the stronger fit when conditions and actions can be defined precisely.",
      },
      {
        question: "Which product is better for an unstructured backlog?",
        answer:
          "Cleanora is designed for deterministic metadata-based organization when you do not want to author a custom rule set first.",
      },
    ],
    related: [
      "best-file-organizer-windows",
      "alternatives/cloud-organizers",
      "alternatives/power-automate",
      "organize-files-windows",
    ],
  },
  {
    route: "alternatives/power-automate",
    kind: "comparison",
    topic: "windows",
    title: "Cleanora vs Power Automate for File Workflows",
    h1: "Cleanora vs Microsoft Power Automate",
    description:
      "Compare a focused local file organizer with Microsoft's broader workflow automation platform for desktop, cloud, and business processes.",
    eyebrow: "Automation platform comparison",
    updatedAt,
    directAnswer:
      "Choose Cleanora for a focused, local Windows workflow that classifies and moves files with minimal setup and an exact preview. Choose Power Automate for broader business automation across Microsoft services, desktop applications, approvals, and repeatable processes.",
    problemTitle: "A file organizer and an automation platform solve different layers",
    problem: [
      "Power Automate connects applications, services, desktop actions, and organizational workflows. File operations can be part of a larger process such as approvals, notifications, data entry, or document routing.",
      "Cleanora focuses on files in one selected folder. It is intended for people who need a clear local structure without building a multi-step business flow.",
    ],
    steps: [
      "Define whether the desired outcome ends with organized local files.",
      "List any applications, approvals, or cloud services the workflow must connect.",
      "Compare setup, maintenance, licensing, and privacy requirements.",
      "Prototype the smallest representative process before scaling it.",
    ],
    examples: [
      {
        title: "Personal Downloads cleanup",
        before: "Mixed local files need categories and readable names",
        after: "Use Cleanora for a focused reviewed organization workflow",
      },
      {
        title: "Invoice approval process",
        before: "A received document must trigger review, data entry, and notification",
        after: "Use Power Automate as part of a broader business process",
      },
    ],
    comparison: {
      title: "Cleanora and Power Automate at a glance",
      summary:
        "Scope and integration needs are more important than raw feature count.",
      rows: [
        {
          option: "Cleanora",
          bestFor: "Local folder categorization with exact destination preview",
          tradeoff: "Does not orchestrate broad business processes",
        },
        {
          option: "Power Automate",
          bestFor: "Cross-application desktop and cloud workflows",
          tradeoff: "More setup and governance than simple folder cleanup",
        },
        {
          option: "Manual organization",
          bestFor: "Rare one-off tasks",
          tradeoff: "No repeatable workflow",
        },
      ],
    },
    faqs: [
      {
        question: "Can Power Automate organize files?",
        answer:
          "Yes. It can perform file operations as part of desktop and cloud workflows, especially when conditions and connected services are defined.",
      },
      {
        question: "Is Cleanora a replacement for Power Automate?",
        answer:
          "No. Cleanora is a focused file organizer. Power Automate is a general automation platform with a much wider integration scope.",
      },
      {
        question: "Which is simpler for a personal Downloads folder?",
        answer:
          "Cleanora is designed for that focused use case and requires less workflow construction.",
      },
    ],
    related: [
      "alternatives/file-juggler",
      "alternatives/manual-organization",
      "best-file-organizer-windows",
      "clean-downloads-folder",
    ],
  },
  {
    route: "alternatives/manual-organization",
    kind: "comparison",
    topic: "workflows",
    title: "Cleanora vs Manual File Organization",
    h1: "Automatic vs Manual File Organization",
    description:
      "Compare automatic and manual file organization by setup time, review, control, scale, consistency, and the types of files each method handles best.",
    eyebrow: "Workflow comparison",
    updatedAt,
    directAnswer:
      "Manual organization is appropriate for a small number of high-value or ambiguous files. Automatic organization is more useful for repeated, high-volume categorization and renaming. The strongest workflow combines automation for obvious work with human review for uncertain or sensitive documents.",
    problemTitle: "The real tradeoff is repeated effort versus review effort",
    problem: [
      "Manual filing gives direct control but repeats the same decisions for every file. Over time, people postpone cleanup or apply inconsistent names and destinations.",
      "Automation reduces repeated actions but introduces assumptions. A preview and an exception queue preserve control without requiring every file to be handled from scratch.",
    ],
    steps: [
      "Identify repeated decisions that can be automated safely.",
      "Keep high-value and uncertain files in a human review queue.",
      "Use consistent folder and filename conventions for both methods.",
      "Measure whether the system improves retrieval, not only cleanup speed.",
    ],
    examples: [
      {
        title: "Monthly receipts",
        before: "Renaming and filing the same document types one by one",
        after: "Automate proposed names and folders, then review the batch",
      },
      {
        title: "Legal archive",
        before: "Assuming every similarly named document belongs together",
        after: "Use manual review for authoritative and ambiguous records",
      },
    ],
    comparison: {
      title: "Automatic and manual organization at a glance",
      summary:
        "Use automation where patterns are stable and review where consequences are high.",
      rows: [
        {
          option: "Cleanora",
          bestFor: "Repeated local metadata-based categorization",
          tradeoff: "Destinations need review",
        },
        {
          option: "Manual organization",
          bestFor: "Small, ambiguous, or high-consequence collections",
          tradeoff: "Slow and difficult to maintain at scale",
        },
        {
          option: "Hybrid workflow",
          bestFor: "Most real-world mixed folders",
          tradeoff: "Requires clear review rules",
        },
      ],
    },
    faqs: [
      {
        question: "Is automatic file organization safe?",
        answer:
          "It is safer when actions are previewed, backups exist, name collisions are detected, and uncertain files are excluded from automatic changes.",
      },
      {
        question: "When should files always be reviewed manually?",
        answer:
          "Review authoritative legal, financial, regulated, and ambiguous records manually when a wrong move or name would have meaningful consequences.",
      },
      {
        question: "How do I know whether automation is saving time?",
        answer:
          "Measure time spent filing and time spent finding files, plus correction work caused by wrong names or locations.",
      },
    ],
    related: [
      "organize-files-automatically",
      "ai-file-organizer",
      "alternatives/file-juggler",
      "blog/digital-file-minimalism",
    ],
  },
];

export const seoPagesByRoute = Object.fromEntries(
  seoPages.map((page) => [page.route, page]),
) as Record<string, SeoPage>;

