import demoGif from "../assets/cleanora-demo.gif";

const DemoSection = () => {
  return (
    <section id="demo" className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">
            See the review workflow before you buy
          </h2>

          <p className="mt-4 text-muted-foreground md:text-lg">
            Cleanora does not hide file moves. Review the classify, preview, and apply flow before using it on an important folder.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="overflow-hidden rounded-xl border border-primary/20 bg-card shadow-2xl">
            <img src={demoGif} alt="Cleanora AI review workflow showing files classified, proposed folders, and a reviewed cleanup plan" width="944" height="480" loading="lazy" className="h-auto w-full bg-background" />
          </div>
        </div>

        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-muted-foreground/90">
          Watch Cleanora classify a cluttered workspace, show the exact proposed folders, and wait for your review before applying changes.
        </p>
      </div>
    </section>
  );
};

export default DemoSection;

