import { createFileRoute, Link } from "@tanstack/react-router";

import { getCertificate } from "@/lib/certificates";

export const Route = createFileRoute("/certificate/$id")({
  component: CertificatePage,
  head: ({ params }) => {
    const cert = getCertificate(params.id);
    const title = cert ? `${cert.title} — Certificate of Gokul K` : "Certificate — Gokul K";
    const description = cert
      ? `${cert.title} issued by ${cert.issuer} to Gokul K, MSc Computer Science student.`
      : "Certificate viewer for Gokul K's portfolio.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
});

function CertificatePage() {
  const { id } = Route.useParams();
  const cert = getCertificate(id);

  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center justify-between gap-4 border-b border-border/60 bg-background/60 px-6 py-4 backdrop-blur-xl">
        <h1 className="truncate font-mono text-sm font-bold tracking-widest text-primary">
          {cert ? cert.title.toUpperCase() : "CERTIFICATE NOT FOUND"}
        </h1>
        <Link
          to="/"
          hash="education"
          className="shrink-0 rounded-md border border-primary/60 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
        >
          Back to portfolio
        </Link>
      </header>

      {cert ? (
        cert.kind === "pdf" ? (
          <iframe
            src={`${cert.url}#toolbar=0&navpanes=0`}
            title={cert.title}
            className="w-full flex-1 border-0"
          />
        ) : (
          <div className="flex-1 overflow-auto p-4">
            <img
              src={cert.url}
              alt={`${cert.title} awarded to Gokul K by ${cert.issuer}`}
              className="mx-auto max-h-full w-auto max-w-full rounded-lg"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        )
      ) : (
        <div className="flex flex-1 items-center justify-center text-muted-foreground">
          This certificate does not exist.
        </div>
      )}
    </div>
  );
}
