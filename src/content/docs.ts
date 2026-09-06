import { product, site } from "@/config/product";

export const docs = {
  install: {
    title: "How to Install Cleanora",
    description:
      "Install Cleanora on a supported Windows PC and start with a small folder before organizing larger file collections.",
    sections: [
      {
        title: "Download Cleanora",
        content: "Open the Download for Windows section on the official Cleanora site, complete checkout with your preferred purchase option, and use the download instructions supplied with the purchase.",
      },
      {
        title: "Run the installer",
        content: `The supported systems are ${product.platforms.supported.join(", ")}. Use the installer provided for Windows.`,
      },
      {
        title: "Current release information",
        content: "These instructions apply to Cleanora 0.1.0 and were reviewed on September 6, 2026. Use only a Cleanora-labeled Windows package obtained through the official product flow.",
      },
      {
        title: "Choose a focused folder first",
        content: `Start with Downloads, Desktop, Documents, screenshots, PDFs, invoices, or a work folder small enough to review carefully.`,
      },
      {
        title: "Review before applying",
        content: `Cleanora proposes category folders and exact destination paths for review. Apply changes only after the preview matches how you want to browse files later.`,
      },
      {
        title: "Need help",
        content: `Use the installation and troubleshooting pages on this site or contact ${site.supportEmail} for setup and purchase-delivery help.`,
      },
    ],
  },

  privacy: {
    title: "Cleanora Privacy",
    description:
      "Learn how Cleanora's local organization workflow reduces cloud exposure for messy folders and sensitive files.",
    sections: [
      {
        title: "Organization runs locally",
        content: `Cleanora is positioned around local analysis. Files do not need to be uploaded to a cloud organizer for the organization workflow.`,
      },
      {
        title: "License activation is separate from file organization",
        content: `Internet access is needed to download and activate the app. Scanning and planning run locally, and file names, paths, metadata, and contents are not sent to a remote organizer service.`,
      },
      {
        title: "Preview is still important",
        content: `Privacy does not prevent filing mistakes. Review proposed categories and exact destination paths before moving important documents.`,
      },
    ],
  },

  troubleshooting: {
    title: "Cleanora Troubleshooting",
    description:
      "Fix common Cleanora installation, folder access, preview, and license activation issues.",
    sections: [
      {
        title: "Folder permissions",
        content: `Make sure Cleanora can access the folder you selected. Start with a focused folder instead of a full drive.`,
      },
      {
        title: "Large folders",
        content: `Large folders can take longer to analyze and are harder to review. Test with a smaller representative folder first.`,
      },
      {
        title: "Preview unexpected suggestions",
        content: `If suggestions do not match your workflow, do not apply them. Narrow the folder scope or organize a smaller batch.`,
      },
      {
        title: "Download or installer does not match",
        content: `Do not run a package that is not clearly labeled Cleanora. Return to the official purchase library or contact ${site.supportEmail} with the order email and downloaded filename.`,
      },
      {
        title: "Release and platform details",
        content: "This guide applies to Cleanora 0.1.0 on Windows 10 and Windows 11. It was reviewed on September 6, 2026.",
      },
      {
        title: "Support",
        content: `For unresolved installation, purchase-delivery, or activation issues, contact ${site.supportEmail}.`,
      },
    ],
  },

  "how-it-works": {
    title: "How Cleanora Works",
    description:
      "Understand how Cleanora classifies local file metadata, proposes destination folders, and keeps you in control with a preview step.",
    sections: [
      {
        title: "Select a folder",
        content: `Choose a messy folder such as Downloads, Desktop, Documents, screenshots, PDFs, invoices, work files, or research files.`,
      },
      {
        title: "Analyze locally",
        content: `Cleanora uses filenames, extensions, modified dates, and file metadata locally. The current planner does not read file contents.`,
      },
      {
        title: "Preview the plan",
        content: `Review proposed categories, exact destinations, and conflicts before files move.`,
      },
      {
        title: "Apply approved changes",
        content: `Apply changes only after the result matches your retrieval workflow.`,
      },
    ],
  },

  "supported-file-types": {
    title: "Supported File Types",
    description:
      "See the file categories Cleanora can classify and move into reviewed destination folders.",
    sections: Object.entries(product.supportedFileTypes).map(([title, types]) => ({
      title,
      content: `${types.join(", ")} files are included in the verified repository copy for classification messaging.`,
    })),
  },
};

