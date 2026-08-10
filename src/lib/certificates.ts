import fullstack from "@/assets/cert-fullstack.pdf.asset.json";
import genai from "@/assets/cert-genai.pdf.asset.json";
import python from "@/assets/cert-python.pdf.asset.json";
import yoga from "@/assets/cert-yoga.jpeg.asset.json";
import agri from "@/assets/cert-agri.jpeg.asset.json";

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  url: string;
  kind: "pdf" | "image";
};

export const CERTIFICATES: Certificate[] = [
  {
    id: "python-basics",
    title: "Python Basics",
    issuer: "HackerRank",
    url: python.url,
    kind: "pdf",
  },
  {
    id: "full-stack-workshop",
    title: "Full Stack Development Workshop",
    issuer: "Phoenix Tech Software Solutions",
    url: fullstack.url,
    kind: "pdf",
  },
  {
    id: "generative-ai",
    title: "Generative AI Mastermind",
    issuer: "Outskill",
    url: genai.url,
    kind: "pdf",
  },
  {
    id: "yoga-diploma",
    title: "Diploma in Yoga for Human Excellence",
    issuer: "Vethathiri Maharishi Institute (WCSC)",
    url: yoga.url,
    kind: "image",
  },
  {
    id: "agri-ideathon",
    title: "Agri Ideathon 2K24 — Participation",
    issuer: "Gobi Arts & Science College",
    url: agri.url,
    kind: "image",
  },
];

export const getCertificate = (id: string) => CERTIFICATES.find((c) => c.id === id);
