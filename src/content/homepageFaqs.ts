import { product, site } from "@/config/product";

export const homepageFaqs = [
  {
    q: "Does Cleanora upload my files?",
    a: "No. Cleanora's organization workflow analyzes supported files locally on your computer instead of uploading them to a cloud organizer.",
  },
  {
    q: "Can I preview changes before files move?",
    a: "Yes. Cleanora shows proposed category folders, exact destination paths, and conflicts before applying changes.",
  },
  {
    q: "Can I undo changes?",
    a: "Yes. Cleanora keeps authenticated local audits and supports conflict-safe undo for a successful move after confirmation. Keep a current backup before bulk changes.",
  },
  {
    q: "Does it require a subscription?",
    a: `No. Cleanora is offered as a one-time ${product.price.display} purchase rather than a recurring subscription.`,
  },
  {
    q: "Which operating systems are supported?",
    a: "Cleanora supports Windows 10 and Windows 11.",
  },
  {
    q: "What kinds of files can it organize?",
    a: "Cleanora is positioned for messy folders containing PDFs, documents, spreadsheets, presentations, screenshots, images, archives, installers, invoices, work files, and research files.",
  },
  {
    q: "Does it work without internet?",
    a: "Scanning, classification, preview, and audit history work locally. Internet access is needed to download the app and activate or revalidate a license.",
  },
  {
    q: "How do I install it?",
    a: "Open Download for Windows on this page, complete checkout, and use the Cleanora installer supplied through the official purchase flow. Start with a copied or noncritical folder and review the proposed result before applying changes.",
  },
  {
    q: "What happens if it does not work on my device?",
    a: `Check the installation and troubleshooting pages, then contact ${site.supportEmail} with your Windows version, downloaded filename, and exact error message if the problem continues.`,
  },
];

