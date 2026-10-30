import { seoPagesByRoute } from "../content/seoPages";
import { site } from "../config/product";

const excluded = new Set([
  "", "clean-downloads-folder", "docs/privacy", "docs/troubleshooting", "category/privacy",
  "privacy", "legal", "terms", "terms-of-service", "support",
]);

export function getPricingNavigation(path: string) {
  const route = path.replace(/^\/+|\/+$/g, "");
  if (excluded.has(route)) return null;
  const page = seoPagesByRoute[route];
  if (page && (page.indexable === false || (page.canonicalUrl && !page.canonicalUrl.startsWith(site.url + "/")))) return null;
  if (!page && !/^(docs|category)\//.test(route)) return null;

  const context = route.startsWith("category/")
    ? "For the cleanup topics covered here, Cleanora offers local file sorting with reviewed destinations on Windows 10 and 11."
    : route.startsWith("docs/")
      ? "Cleanora runs on Windows 10 and 11 and lets you preview file destinations before applying moves."
      : "Cleanora supports review-first folder cleanup with local filename and metadata sorting on Windows 10 and 11.";

  return { href: "/#download", context, route };
}
