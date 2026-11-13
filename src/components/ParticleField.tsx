import { useEffect, useRef } from "react";

type P = { x: number; y: number; vx: number; vy: number };

export function ParticleField() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const mouse = { x: -9999, y: -9999 };
    let particles: P[] = [];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lastFrame = 0;

    const accent = () =>
      getComputedStyle(document.documentElement).getPropertyValue("--particle-rgb").trim() ||
      "56, 232, 225";

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const maxParticles = w < 768 ? 38 : 72;
      const count = Math.min(maxParticles, Math.round((w * h) / 22000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    };

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    let t = 0;
    const draw = (time: number) => {
      if (document.hidden) return;
      if (!reducedMotion.matches && time - lastFrame < 32) {
        raf = requestAnimationFrame(draw);
        return;
      }
      lastFrame = time;
      const rgb = accent();
      t += 0.01;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      for (const p of particles) {
        if (!reducedMotion.matches) {
          p.x += p.vx;
          p.y += p.vy;
        }
        const dmx = mouse.x - p.x;
        const dmy = mouse.y - p.y;
        const ddSquared = dmx * dmx + dmy * dmy;
        if (!reducedMotion.matches && ddSquared < 40000 && ddSquared > 1) {
          const dd = Math.sqrt(ddSquared);
          p.vx += (dmx / dd) * 0.006;
          p.vy += (dmy / dd) * 0.006;
        }
        p.vx = Math.max(-0.9, Math.min(0.9, p.vx * 0.995));
        p.vy = Math.max(-0.9, Math.min(0.9, p.vy * 0.995));
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        if (!a) continue;
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          if (!b) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distanceSquared = dx * dx + dy * dy;
          if (distanceSquared < 16900) {
            const distance = Math.sqrt(distanceSquared);
            ctx.strokeStyle = `rgba(${rgb}, ${(1 - distance / 130) * 0.22})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        const dxMouse = a.x - mouse.x;
        const dyMouse = a.y - mouse.y;
        if (dxMouse * dxMouse + dyMouse * dyMouse < 36100) {
          ctx.strokeStyle = `rgba(${rgb}, 0.35)`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

      }

      ctx.shadowBlur = 8;
      ctx.shadowColor = `rgba(${rgb}, 0.8)`;
      ctx.fillStyle = `rgba(${rgb}, 0.8)`;
      ctx.beginPath();
      for (const p of particles) {
        const pulse = reducedMotion.matches ? 1.5 : 1.4 + Math.sin(t * 2 + p.x * 0.01) * 0.35;
        ctx.arc(p.x, p.y, pulse, 0, Math.PI * 2);
      }
      ctx.fill();
      ctx.shadowBlur = 0;

      if (mouse.x > -9000) {
        const halo = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 130);
        halo.addColorStop(0, `rgba(${rgb}, 0.22)`);
        halo.addColorStop(1, `rgba(${rgb}, 0)`);
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 130, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
      if (!reducedMotion.matches) raf = requestAnimationFrame(draw);
    };


    resize();
    draw(0);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    const onVisibilityChange = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) draw(performance.now());
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}
