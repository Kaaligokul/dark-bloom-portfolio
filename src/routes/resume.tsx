import { createFileRoute, Link } from "@tanstack/react-router";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/resume")({
  component: ResumePage,
  head: () => ({
    meta: [
      { title: "Resume — Gokul K, Computer Science Developer" },
      {
        name: "description",
        content:
          "View the full resume of Gokul K, MSc Computer Science student and developer skilled in Java, Python, React and MongoDB.",
      },
      { property: "og:title", content: "Resume — Gokul K" },
      {
        property: "og:description",
        content: "Full-screen resume of Gokul K, MSc Computer Science student and developer.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ResumePage() {
  return (
    <div className="flex h-screen flex-col bg-background">
      <header className="flex items-center justify-between border-b border-border/60 px-6 py-4">
        <h1 className="font-mono text-sm font-bold tracking-widest text-primary">
          &lt;GOKUL.K / RESUME&gt;
        </h1>
        <Link
          to="/"
          className="rounded-md border border-primary/60 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
        >
          Back to portfolio
        </Link>
      </header>
      <iframe
        src={`${resumeAsset.url}#toolbar=0&navpanes=0`}
        title="Resume of Gokul K"
        className="w-full flex-1 border-0"
      />
    </div>
  );
}
