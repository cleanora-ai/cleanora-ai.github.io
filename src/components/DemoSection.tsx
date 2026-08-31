import { CheckCircle2, Eye, FolderSearch } from "lucide-react";
import demoGif from "../assets/cleanora-real-demo.gif";

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

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="overflow-hidden rounded-xl border border-primary/20 bg-card shadow-2xl">
            <img src={demoGif} alt="Real Cleanora AI app opening screen followed by an organized output folder" width="1280" height="900" loading="lazy" className="h-auto w-full bg-background" />
          </div>
        </div>

        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-muted-foreground/90">
          Real Cleanora app views: the opening screen followed by an organized output folder.
        </p>
      </div>
    </section>
  );
};

export default DemoSection;
