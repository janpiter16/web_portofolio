"use client";

import { useEffect, useRef } from "react";

interface StarParticle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  alpha: number;
  dAlpha: number;
  hue: number;
}

interface MeteorParticle {
  x: number;
  y: number;
  len: number;
  speed: number;
  alpha: number;
  active: boolean;
  wait: number;
}

export function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const starCount = 85;
    const hues = [200, 215, 235, 190];
    const stars: StarParticle[] = Array.from({ length: starCount }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: (i % 4) * 0.45 + 0.8,
      vx: (Math.random() - 0.5) * 0.35,
      vy: -0.15 - Math.random() * 0.35,
      alpha: 0.25 + Math.random() * 0.7,
      dAlpha: (Math.random() * 0.012 + 0.004) * (i % 2 === 0 ? 1 : -1),
      hue: hues[i % hues.length],
    }));

    const meteors: MeteorParticle[] = Array.from({ length: 3 }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * (height * 0.5),
      len: 90 + i * 25,
      speed: 7 + i * 2,
      alpha: 0,
      active: false,
      wait: 40 + i * 110,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;
        s.alpha += s.dAlpha;

        if (s.alpha >= 0.98 || s.alpha <= 0.2) {
          s.dAlpha = -s.dAlpha;
        }
        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${s.hue}, 95%, 82%, ${s.alpha.toFixed(2)})`;
        ctx.fill();
      }

      for (const m of meteors) {
        if (!m.active) {
          m.wait -= 1;
          if (m.wait <= 0) {
            m.active = true;
            m.x = width * (0.35 + Math.random() * 0.6);
            m.y = Math.random() * (height * 0.45);
            m.alpha = 1;
          }
          continue;
        }

        m.x -= m.speed;
        m.y += m.speed * 0.55;
        m.alpha -= 0.014;

        const tailX = m.x + m.len;
        const tailY = m.y - m.len * 0.55;
        const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        grad.addColorStop(0, `hsla(195, 100%, 88%, ${Math.max(0, m.alpha).toFixed(2)})`);
        grad.addColorStop(1, "hsla(215, 100%, 60%, 0)");

        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(m.x, m.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(190, 100%, 92%, ${Math.max(0, m.alpha).toFixed(2)})`;
        ctx.fill();

        if (m.alpha <= 0 || m.x < -100 || m.y > height + 100) {
          m.active = false;
          m.wait = 90 + Math.floor(Math.random() * 140);
        }
      }

      animId = window.requestAnimationFrame(render);
    };

    animId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Real-Time Moving Starfield & Shooting Meteors Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Space Object 1: Orbiting & Rotating Ringed Planet (Top Right) */}
      <div className="cosmic-planet-float absolute top-20 right-6 opacity-45 sm:right-14">
        <svg
          viewBox="0 0 200 200"
          className="h-32 w-32 sm:h-44 sm:w-44"
          fill="none"
        >
          {/* Rotating Outer Satellite Track */}
          <g className="cosmic-orbit-spin">
            <circle
              cx="100"
              cy="100"
              r="84"
              className="stroke-sky/25"
              strokeWidth="1.2"
              strokeDasharray="5 7"
            />
            <circle cx="184" cy="100" r="4.5" className="fill-sky" />
            <circle cx="16" cy="100" r="3" className="fill-indigo-accent" />
          </g>

          {/* Tilted Saturn Ring */}
          <ellipse
            cx="100"
            cy="100"
            rx="72"
            ry="20"
            transform="rotate(-22 100 100)"
            className="stroke-sky/50"
            strokeWidth="2.5"
            strokeDasharray="8 4"
          />

          {/* Planet Core */}
          <circle
            cx="100"
            cy="100"
            r="36"
            className="fill-primary/35 stroke-sky/60"
            strokeWidth="1.6"
          />
          <circle cx="90" cy="90" r="24" className="fill-sky/20" />

          {/* Front Ring Highlight */}
          <ellipse
            cx="100"
            cy="100"
            rx="60"
            ry="15"
            transform="rotate(-22 100 100)"
            className="stroke-indigo-accent/70"
            strokeWidth="1.8"
          />
        </svg>
      </div>

      {/* Space Object 2: Drifting Exoplanet with Rotating Moon (Bottom Left) */}
      <div className="cosmic-planet-reverse absolute bottom-16 left-6 opacity-40 sm:left-14">
        <svg
          viewBox="0 0 180 180"
          className="h-28 w-28 sm:h-36 sm:w-36"
          fill="none"
        >
          <g className="cosmic-orbit-spin-reverse">
            <circle
              cx="90"
              cy="90"
              r="66"
              className="stroke-primary/40"
              strokeWidth="1.3"
              strokeDasharray="4 6"
            />
            <circle cx="156" cy="90" r="4" className="fill-sky" />
          </g>
          <circle
            cx="90"
            cy="90"
            r="32"
            className="fill-indigo-accent/25 stroke-indigo-accent/60"
            strokeWidth="1.5"
          />
          <circle cx="80" cy="82" r="7" className="fill-sky/30" />
          <circle cx="102" cy="100" r="4.5" className="fill-sky/25" />
        </svg>
      </div>
    </div>
  );
}
