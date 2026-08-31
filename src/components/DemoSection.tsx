import { CheckCircle2, Eye, FolderSearch } from "lucide-react";
import firstTabImage from "../assets/cleanora-first-tab.png";
import resultsImage from "../assets/cleanora-results.png";

const workflow = [
  {
    icon: FolderSearch,
    title: "Classify locally",
    description: "Use filenames, extensions, dates, and file metadata without reading file contents.",
  },
  {
    icon: Eye,
    title: "Review exact moves",
    description: "Inspect categories, destinations, conflicts, and excluded items before confirmation.",
  },
  {
    icon: CheckCircle2,
    title: "Apply with control",
    description: "Confirm the reviewed plan, keep an authenticated audit, and use conflict-safe undo.",
  },
];

const DemoSection = () => {
  return (
    <section id="demo" className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">
            See the review workflow before you buy
          </h2>

          <p className="mt-4 text-muted-foreground md:text-lg">
            See the Cleanora app first, then the organized output folder it creates after a review.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">
          <figure className="overflow-hidden rounded-xl border border-primary/20 bg-card shadow-2xl">
            <img src={firstTabImage} alt="Cleanora AI opening screen with a folder selected" width="1280" height="900" loading="lazy" className="h-auto w-full bg-background" />
            <figcaption className="px-5 py-4 text-sm text-muted-foreground">Cleanora AI — first tab</figcaption>
          </figure>
          <figure className="overflow-hidden rounded-xl border border-primary/20 bg-card shadow-2xl">
            <img src={resultsImage} alt="Cleanora AI organized output folder showing categorized folders" width="1280" height="900" loading="lazy" className="h-auto w-full bg-background" />
            <figcaption className="px-5 py-4 text-sm text-muted-foreground">Cleanora AI — organized results</figcaption>
          </figure>
        </div>

        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-muted-foreground/90">
          Real Cleanora app screenshots: the opening screen and the organized output folder.
        </p>
      </div>
    </section>
  );
};

export default DemoSection;
