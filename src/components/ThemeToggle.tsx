import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-all hover:border-primary hover:text-primary hover:shadow-[var(--glow-primary)]"
    >
      <Sun
        className={`absolute h-[18px] w-[18px] transition-all duration-300 ${dark ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`}
      />
      <Moon
        className={`absolute h-[18px] w-[18px] transition-all duration-300 ${dark ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"}`}
      />
    </button>
  );
}
