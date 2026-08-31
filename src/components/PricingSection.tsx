import { Check, Download, ShieldCheck } from "lucide-react";

import { product, site } from "@/config/product";
import { trackEvent } from "@/lib/analytics";

const included = [
  "Windows-only desktop app",
  "Local planning, preview, and conflict checks",
  "Undo and local history after approved changes",
  "License-required apply and undo actions",
  "Scan and preview access without a license",
];

const comparisons = [
  {
    title: "Cleanora vs manual sorting",
    bestFor: "Messy folders with repeated cleanup work",
    difference:
      "Cleanora proposes category folders and exact destinations in a batch, then you review the plan before applying changes.",
  },
  {
    title: "Cleanora vs rules-based tools",
    bestFor: "Files with inconsistent names or mixed document types",
    difference:
      "Rules are useful for custom workflows. Cleanora is useful when you want local, deterministic classification without authoring rules first.",
  },
  {
    title: "Cleanora vs cloud AI organizers",
    bestFor: "Private documents, invoices, work files, and local folders",
    difference:
      "Cleanora is built around local analysis, so files do not need to be uploaded to a cloud organizer.",
  },
];

const PricingSection = () => {
  return (
    <section id="download" className="section-padding border-t border-border">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">
            Get Cleanora for <span className="text-gradient">{product.price.display}</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Launch pricing is available now. Secure card checkout is handled by Gumroad.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-xl border border-yellow-300/70 bg-yellow-300 p-8 text-yellow-950">
            <div className="text-sm font-semibold uppercase tracking-wide text-primary">
              Launch price · Windows app
            </div>
            <p className="mt-4 text-sm text-yellow-950/80">
              Install the Windows desktop app, scan a folder locally, and review the exact move plan before you confirm anything.
            </p>

            <a
              href={product.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("platform_download_cta_clicked", { platform: "windows", location: "download" })}
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-yellow-950 px-6 py-3 text-base font-semibold text-yellow-100 transition-opacity hover:opacity-90"
            >
              <Download className="h-5 w-5" />
              Buy with card · {product.price.display}
            </a>

            <div className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <p className="text-yellow-950/80">
                Cleanora classifies filenames and metadata locally after installation without reading file contents.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-xl font-semibold text-foreground">What the app gives you</h3>
              <ul className="mt-4 space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground">Supported systems</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>Windows 10</li>
                  <li>Windows 11</li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground">After download</h3>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>Install Cleanora on your Windows PC.</li>
                  <li>Select a folder such as Downloads or Desktop.</li>
                  <li>Review the plan, then apply or undo only after activation.</li>
                </ol>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-xl font-semibold text-foreground">How Cleanora compares</h3>
              <div className="mt-4 grid gap-3">
                {comparisons.map((comparison) => (
                  <div key={comparison.title} className="rounded-lg border border-border/80 bg-secondary/40 p-4">
                    <h4 className="font-semibold text-foreground">{comparison.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      <span className="font-medium text-secondary-foreground">Best for:</span> {comparison.bestFor}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{comparison.difference}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">Need help?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Use the FAQ if you need installation guidance, licensing details, or want to understand the local workflow before downloading.
              </p>
              <a
                href={site.helpHref}
                onClick={() => trackEvent("contact_support_clicked", { location: "download" })}
                className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/50"
              >
                See FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

