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
            Cleanora does not hide file moves. Review the classify, preview, and apply flow before using it on an important folder.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="overflow-hidden rounded-xl border border-primary/20 bg-card shadow-2xl">
            <img src={demoGif} alt="Real Cleanora AI app workflow showing a selected folder, reviewed file destinations, and the confirmation step" width="1280" height="900" loading="lazy" className="h-auto w-full bg-background" />
          </div>
        </div>

        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-muted-foreground/90">
          Real Cleanora app recording: select a folder, inspect the proposed destinations, and confirm only after review.
        </p>
      </div>
    </section>
  );
};

export default DemoSection;
