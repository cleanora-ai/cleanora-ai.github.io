const articles = [
  {
    title: "Downloads folder organizer",
    href: "/clean-downloads-folder/",
    description: "A focused workflow for sorting a busy Downloads folder with explainable, reviewable destinations.",
  },
  {
    title: "Maintain Downloads automatically",
    href: "/blog/organize-downloads-folder-automatically/",
    description: "A repeatable routine for documents, installers, archives, screenshots, and temporary files.",
  },
  {
    title: "Preview file moves",
    href: "/preview-file-moves-windows/",
    description: "How exact destination previews, conflict checks, and confirmation reduce bulk filing mistakes.",
  },
  {
    title: "Cleanora classification test",
    href: "/blog/downloads-folder-organizer-test/",
    description: "See the tested filename and extension cases behind Cleanora's Downloads organization workflow.",
  },
  {
    title: "Cleanora vs File Juggler",
    href: "/alternatives/file-juggler/",
    description: "Compare Cleanora's deterministic suggestions with detailed Windows file automation rules.",
  },
  {
    title: "Install Cleanora",
    href: "/docs/install/",
    description: "Installation expectations, first-folder guidance, and support links.",
  },
];

const ArticleSection = () => {
  return (
    <section className="border-t border-border py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Helpful file organization guides
          </h2>

          <p className="mt-4 text-muted-foreground md:text-lg">
            Start with the page that matches your folder, file type, or buying question.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <a
              key={article.href}
              href={article.href}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            >
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {article.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;

