// @vitest-environment jsdom
import fs from "node:fs";
import { cleanup, render, screen, within } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import SeoContentPage from "@/pages/SeoContentPage";
import { seoPagesByRoute } from "@/content/seoPages";

vi.mock("@/components/Footer", () => ({ default: () => null }));
vi.mock("@/components/Navbar", () => ({ default: () => null }));
vi.mock("@/components/SeoHead", () => ({ default: () => null }));
afterEach(cleanup);

const page = seoPagesByRoute["alternatives/file-juggler"];
const initialPage = () => new DOMParser().parseFromString(fs.readFileSync("public/alternatives/file-juggler/index.html", "utf8"), "text/html");

describe("Cleanora vs File Juggler buyer comparison", () => {
  it("renders the publisher disclosure, balanced table, official sources and one individual-pricing route", () => {
    render(<HelmetProvider><MemoryRouter initialEntries={["/alternatives/file-juggler/"]}><SeoContentPage /></MemoryRouter></HelmetProvider>);
    expect(screen.getByText("Comparison published by Cleanora")).toBeTruthy();
    expect(screen.getByText(page.problem[0])).toBeTruthy();
    expect(screen.getAllByRole("columnheader").map(item => item.textContent)).toEqual(["Buyer question", "Cleanora", "File Juggler"]);
    expect(screen.getAllByRole("row")).toHaveLength(9);
    const sources = screen.getByRole("region", { name: "Sources" });
    for (const source of page.sources!) {
      expect(within(sources).getByRole("link", { name: source.label }).getAttribute("href")).toBe(source.url);
    }
    const links = screen.getAllByRole("link", { name: "See pricing" });
    expect(links).toHaveLength(1);
    expect(links[0].getAttribute("href")).toBe("/#download");
    expect(screen.getByRole("heading", { name: "When is File Juggler the better choice?" })).toBeTruthy();
  });

  it("keeps substantive facts and source links in initial HTML with matching FAQ schema", () => {
    const document = initialPage();
    expect(document.querySelector("h1")?.textContent).toBe(page.h1);
    for (const paragraph of page.problem) expect(document.body.textContent).toContain(paragraph);
    const rows = [...document.querySelectorAll("tbody tr")];
    expect(rows).toHaveLength(8);
    for (const [index, row] of rows.entries()) {
      expect(row.textContent).toContain(page.comparison.rows[index].bestFor);
      expect(row.textContent).toContain(page.comparison.rows[index].tradeoff);
    }
    const sources = document.querySelector('[aria-labelledby="comparison-sources"]')!;
    expect(sources.textContent).toContain("Verified 2026-10-30");
    for (const source of page.sources!) expect(sources.querySelector(`a[href="${source.url}"]`)).toBeTruthy();
    const schemas = [...document.querySelectorAll('script[type="application/ld+json"]')].flatMap(script => JSON.parse(script.textContent!)["@graph"] ?? []);
    const faqs = schemas.find(item => item["@type"] === "FAQPage").mainEntity;
    expect(faqs.map((item: { acceptedAnswer: { text: string } }) => item.acceptedAnswer.text)).toEqual(page.faqs.map(item => item.answer));
    expect(document.querySelectorAll("[data-pricing-route] a")).toHaveLength(1);
    expect(document.querySelector("main")!.textContent).not.toMatch(/bundle|fastest|best-in-class/i);
  });

  it("reuses the existing canonical comparison and inbound links without adding sitemap URLs", () => {
    const document = initialPage();
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute("href")).toBe("https://cleanoraai.com/alternatives/file-juggler/");
    const sitemap = new DOMParser().parseFromString(fs.readFileSync("public/sitemap.xml", "utf8"), "text/xml");
    const urls = [...sitemap.querySelectorAll("loc")].map(item => item.textContent);
    expect(urls).toHaveLength(21);
    expect(new Set(urls).size).toBe(21);
    expect(urls.filter(url => url === "https://cleanoraai.com/alternatives/file-juggler/")).toHaveLength(1);
    const hub = new DOMParser().parseFromString(fs.readFileSync("public/alternatives/index.html", "utf8"), "text/html");
    expect(hub.querySelector('a[href="/alternatives/file-juggler/"]')).toBeTruthy();
    expect(page.comparison.rows.find(row => row.option === "Information used")?.bestFor).toContain("Does not read document contents");
    expect(page.comparison.rows.find(row => row.option === "Review and collisions")?.tradeoff).toContain("matching files");
  });
});
