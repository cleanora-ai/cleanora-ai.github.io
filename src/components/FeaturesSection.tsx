import { motion } from "framer-motion";
import { Brain, Eye, FileText, FolderTree, ShieldCheck, WifiOff } from "lucide-react";

const features = [
  { icon: Brain, title: "Metadata-based suggestions", desc: "Classify from filenames, extensions, dates, and metadata without reading file contents." },
  { icon: FolderTree, title: "Folder organization", desc: "Group mixed files into deterministic category folders." },
  { icon: FileText, title: "Conflict-safe moves", desc: "Reserve exact destination paths and refuse unreviewed overwrite changes." },
  { icon: Eye, title: "Preview before changes", desc: "Review proposed folders, exact paths, and conflicts before applying them." },
  { icon: WifiOff, title: "Offline organization workflow", desc: "Files do not need to be uploaded to a cloud organizer." },
  { icon: ShieldCheck, title: "Privacy-focused by design", desc: "Use Cleanora on local folders such as Downloads, Desktop, Documents, invoices, and PDFs." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">
            File organization features that keep you in control
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-lg">
            Cleanora focuses on practical cleanup work: classification, safe moves, privacy, and review.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-gradient-card p-7 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

