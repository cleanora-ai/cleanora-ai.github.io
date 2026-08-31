export const site = {
  name: "Cleanora AI",
  productName: "Cleanora",
  url: "https://cleanoraai.com",
  helpHref: "/#faq",
  supportEmail: "support@computoraai.com",
  analyticsMeasurementId: "",
};

export const product = {
  productName: "Cleanora",
  price: { amount: 10.99, display: "$10.99" },
  checkoutUrl: "https://computora.gumroad.com/l/cleanora",
  downloadHref: "#download",
  platforms: {
    supported: ["Windows 10", "Windows 11"],
    positioning: "Windows-only desktop app",
    requirements: [
      "Windows 10 or Windows 11",
      "Local access to the folders you choose to scan",
      "Enough free disk space for moved files",
      "Internet access for license activation; scanning and planning run locally",
    ],
  },
  claims: [
    "Scans folders locally before any move is allowed",
    "Shows exact destinations, reasons, and conflict status in preview",
    "Lets you exclude items before confirmation",
    "Writes a local audit trail and supports undo",
    "Apply and undo require an activated license",
  ],
  folders: ["Downloads", "Desktop", "Documents", "project folders", "archives", "reports", "receipts", "mixed work files"],
  supportedFileTypes: {
    Documents: ["PDF", "DOCX", "TXT", "MD"],
    Spreadsheets: ["XLSX", "CSV"],
    Presentations: ["PPT", "PPTX"],
    Images: ["PNG", "JPG", "JPEG", "GIF", "WEBP"],
    Archives: ["ZIP", "7Z", "RAR"],
    Executables: ["EXE", "MSI"],
  },
};

export function checkoutUrl(): string {
  return product.downloadHref;
}

export function absoluteUrl(route = ""): string {
  return `${site.url}/${route ? `${route.replace(/^\/|\/$/g, "")}/` : ""}`;
}

