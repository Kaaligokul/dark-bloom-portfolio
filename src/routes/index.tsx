import { createFileRoute, Link } from "@tanstack/react-router";
import { ParticleField } from "@/components/ParticleField";
import { ThemeToggle } from "@/components/ThemeToggle";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Gokul K — Computer Science Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Gokul K, MSc Computer Science student and developer skilled in Java, Python, C++, React, MongoDB and MySQL.",
      },
      { property: "og:title", content: "Gokul K — Computer Science Developer Portfolio" },
      {
        property: "og:description",
        content:
          "MSc Computer Science student building web and data-driven projects with Java, Python, React and MongoDB.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const NAV = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

const SKILLS = [
  { group: "Programming", items: ["Java", "Python", "C++", "C"] },
  { group: "Web", items: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"] },
  { group: "Databases", items: ["MongoDB", "MySQL"] },
  {
    group: "Tools",
    items: [
      "Git & GitHub (version control)",
      "VS Code (coding)",
      "GT Studio (annotation)",
      "Canva (editing)",
      "PicsArt (editing)",
    ],
  },
  {
    group: "Strengths",
    items: ["Logical thinking", "Time management", "Team collaboration", "Adaptability"],
  },
];

const EXPERIENCE = [
  {
    role: "Network Feasibility Survey",
    points: [
      "Validated customer site addresses through direct communication for accurate network deployment data.",
      "Cross-checked existing Link IDs and Old IDs across internal databases to reuse infrastructure.",
      "Calculated distance and signal viability between customer locations and base stations.",
      "Determined Ground Based vs Roof Based tower types and submitted detailed technical survey reports.",
    ],
  },
  {
    role: "3D Data Annotation",
    points: [
      "Applied 3D cuboid annotation on LiDAR point cloud data to train autonomous-vehicle perception models.",
      "Labeled vehicles, pedestrians and obstacles with precise spatial accuracy and heading orientation.",
      "Annotated vehicle states such as headlamps, brake lights and indicators for behavioral prediction.",
    ],
  },
  {
    role: "2D Data Annotation",
    points: [
      "Classified road entities across diverse weather and lighting conditions.",
      "Used pixel-accurate polygon labeling for irregular shapes and drivable areas.",
      "Categorized traffic participants, infrastructure, sidewalks and vegetation classes.",
    ],
  },
];

const EDUCATION = [
  {
    school: "Kaamadhenu Arts and Science College",
    detail: "M.Sc. Computer Science",
    meta: "2026 · 74%",
  },
  {
    school: "Gobi Arts and Science College",
    detail: "B.Sc. Information Technology",
    meta: "2024 · 72%",
  },
  { school: "Athani Govt Hr Sec School", detail: "Computer Science (Maths)", meta: "2021 · 79%" },
  { school: "Little Flower Matriculation School", detail: "SSLC", meta: "2019 · 72%" },
];

function SectionTitle({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-sm text-primary">{index}</span>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-mono text-sm font-bold tracking-widest text-primary">
            &lt;GOKUL.K /&gt;
          </a>
          <ul className="hidden gap-7 text-sm text-muted-foreground md:flex">
            {NAV.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-primary">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <Link
              to="/resume"
              className="rounded-md border border-primary/60 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Resume
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>


      <main id="top">
        <section className="relative overflow-hidden">



          <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-6 py-24">
            <p className="animate-rise font-mono text-sm text-primary">Hello, I am</p>
            <h1 className="animate-rise mt-4 text-5xl font-bold tracking-tight sm:text-7xl">
              Gokul <span className="text-gradient">K</span>
            </h1>
            <p className="animate-rise mt-4 max-w-2xl text-xl text-muted-foreground sm:text-2xl">
              M.Sc. Computer Science · Web developer · Data & AI annotation specialist
            </p>
            <p className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Seeking a challenging role where I can apply my technical skills to solve complex
              problems and contribute to organizational growth.
            </p>
            <div className="animate-rise mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--glow-primary)] transition-transform hover:scale-105"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="rounded-md border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-24">
          <SectionTitle index="01." title="About me" />
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                &nbsp; &nbsp;I am a Computer Science postgraduate student from Anthiyur, Tamil Nadu, with a
                background in Information Technology and hands-on experience across web development,
                databases and AI training data.
              </p>
              <p>
                I have producing high-precision 2D and 3D ground-truth data for autonomous driving
                perception models. I enjoy problems that reward patience, structure and logical
                thinking.
              </p>
            </div>
            <ul className="surface-card space-y-3 p-6 font-mono text-sm">
              {[
                ["Location", "Anthiyur, Tamil Nadu"],
                ["Degree", "M.Sc. Computer Science"],
                ["Languages", "Tamil, English"],
                ["Interests", "Chess, Carrom, Music, Home workout"],
              ].map(([k, v]) => (
                <li key={k} className="flex justify-between gap-4 border-b border-border/60 pb-3 last:border-0 last:pb-0">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="text-right text-foreground">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
          <SectionTitle index="02." title="Skills" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((s) => (
              <div key={s.group} className="surface-card surface-card-hover p-6">
                <h3 className="font-mono text-sm uppercase tracking-widest text-primary">
                  {s.group}
                </h3>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
          <SectionTitle index="03." title="Projects" />
          <article className="surface-card surface-card-hover p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              Academic project
            </p>
            <h3 className="mt-3 text-2xl font-bold">Hospital Appointment Booking System</h3>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              A web-based platform that replaces manual, error-prone hospital scheduling with an
              efficient digital workflow for patients and administrators.
            </p>
            <ul className="mt-6 grid gap-3 text-muted-foreground md:grid-cols-2">
              {[
                "PHP front-end delivering a seamless experience for patients and admins.",
                "Centralized SQL Server database for patient records and doctor schedules.",
                "Dynamic form handling for secure registration, login and booking.",
                "Unit, integration and validation testing for reliability under load.",
              ].map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-2">
              {["PHP 8.2", "SQL Server 2010", "HTML/CSS", "Bootstrap"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
          <SectionTitle index="04." title="Experience" />
          <div className="space-y-6 border-l border-border pl-6">
            {EXPERIENCE.map((e) => (
              <div key={e.role} className="relative surface-card surface-card-hover p-6">
                <span className="absolute -left-[31px] top-8 h-3 w-3 rounded-full bg-primary shadow-[var(--glow-primary)] animate-glow-pulse" />
                <h3 className="text-xl font-semibold">{e.role}</h3>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="mx-auto max-w-6xl px-6 py-24">
          <SectionTitle index="05." title="Education" />
          <div className="grid gap-6 sm:grid-cols-2">
            {EDUCATION.map((e) => (
              <div key={e.school} className="surface-card surface-card-hover p-6">
                <h3 className="text-lg font-semibold">{e.school}</h3>
                <p className="mt-2 text-muted-foreground">{e.detail}</p>
                <p className="mt-3 font-mono text-xs uppercase tracking-widest text-primary">
                  {e.meta}
                </p>
              </div>
            ))}
          </div>
          <div className="surface-card mt-6 p-6">
            <h3 className="font-mono text-sm uppercase tracking-widest text-primary">Certificate</h3>
            <p className="mt-3 text-muted-foreground">Python Basics — HackerRank</p>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-3xl px-6 py-28 text-center">
          <SectionTitle index="06." title="Contact" />
          <p className="text-lg text-muted-foreground">
            I am open to internships and entry-level developer roles. The quickest way to reach me is
            email or phone.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["Email", "gokulkaali55@gmail.com", "mailto:gokulkaali55@gmail.com"],
              ["Phone", "+91 93847 25516", "tel:+919384725516"],
              ["LinkedIn", "gokul-kailash", "https://www.linkedin.com/in/gokul-kailash"],
            ].map(([label, value, href]) => (
              <a
                key={label}
                href={href}
                target={href!.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="surface-card surface-card-hover block p-6"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-primary">{label}</p>
                <p className="mt-2 break-words text-sm text-foreground">{value}</p>
              </a>
            ))}
          </div>
          <a
            href={resumeAsset.url}
            download={resumeAsset.original_filename}
            className="mt-10 inline-block rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--glow-primary)] transition-transform hover:scale-105"
          >
            Download resume
          </a>
        </section>
      </main>

      <footer className="border-t border-border/60 py-8 text-center font-mono text-xs text-muted-foreground">
        Designed & built by Gokul K · {new Date().getFullYear()}
      </footer>
    </div>
  );
}
