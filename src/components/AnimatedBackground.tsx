import { ParticleField } from "@/components/ParticleField";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <span className="aura-orb animate-float left-[6%] top-[8%] h-72 w-72 bg-primary/30" />
      <span className="aura-orb animate-drift right-[8%] top-[42%] h-72 w-72 bg-accent/25" />

      {/* soft blur veil so the animation sits behind content */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      <div className="absolute inset-0 opacity-90">
        <ParticleField />
      </div>

      {/* slow drifting glow motes — second particle style */}
      <div className="absolute inset-0">
        {MOTES.map((m, i) => (
          <span
            key={i}
            className="animate-drift absolute rounded-full bg-primary/40 blur-[1.5px]"
            style={{
              left: `${m.x}%`,
              top: `${m.y}%`,
              height: m.s,
              width: m.s,
              animationDelay: `${m.d}s`,
              animationDuration: `${m.t}s`,
              boxShadow: "0 0 12px 2px currentColor",
            }}
          />
        ))}
      </div>
    </div>
  );
}

const MOTES = Array.from({ length: 10 }, (_, i) => ({
  x: (i * 37) % 100,
  y: (i * 61) % 100,
  s: 3 + ((i * 7) % 5),
  d: (i % 9) * 0.8,
  t: 14 + ((i * 3) % 12),
}));
