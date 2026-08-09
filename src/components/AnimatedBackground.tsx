import { ParticleField } from "@/components/ParticleField";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <span className="aura-orb animate-float left-[6%] top-[8%] h-72 w-72 bg-primary/30" />
      <span
        className="aura-orb animate-float right-[8%] top-[22%] h-80 w-80 bg-accent/30"
        style={{ animationDelay: "1.5s" }}
      />
      <span
        className="aura-orb animate-float left-[38%] top-[48%] h-96 w-96 bg-primary/20"
        style={{ animationDelay: "3s" }}
      />
      <span
        className="aura-orb animate-glow-pulse bottom-[6%] right-[24%] h-72 w-72 bg-accent/25"
      />
      <div className="absolute inset-0">
        <ParticleField />
      </div>
    </div>
  );
}
