import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

type Particle = { x: number; y: number; r: number; vx: number; vy: number; alpha: number; phase: number };

export default function LightParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const { isDark } = useTheme();

  useEffect(() => {
    // only run in light mode and respect reduced motion
    if (isDark) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    let w = window.innerWidth;
    let h = window.innerHeight;

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    }

    function initParticles() {
      const area = w * h;
      // slightly denser for visibility
      const count = Math.max(40, Math.min(160, Math.floor(area / 60000)));
      const particles: Particle[] = [];
      for (let i = 0; i < count; i++) {
        const r = 3 + Math.random() * 10; // larger radii
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r,
          vx: (Math.random() - 0.5) * 0.25,
          vy: -0.02 - Math.random() * 0.35,
          // stronger base alpha
          alpha: 0.08 + Math.random() * 0.28,
          phase: Math.random() * Math.PI * 2,
        });
      }
      particlesRef.current = particles;
    }

    let last = performance.now();
    function drawSunray() {
      // stronger, warmer radial sun at top-right
      const gx = ctx.createRadialGradient(w * 0.82, h * 0.12, 20, w * 0.82, h * 0.12, Math.max(w, h) * 0.8);
      gx.addColorStop(0, 'rgba(255,220,170,0.30)');
      gx.addColorStop(0.18, 'rgba(255,220,170,0.16)');
      gx.addColorStop(0.45, 'rgba(255,240,220,0.08)');
      gx.addColorStop(1, 'rgba(255,240,220,0)');
      ctx.fillStyle = gx;
      ctx.fillRect(0, 0, w, h);
    }

    function drawParticle(p: Particle) {
      // soft colored particle (warm tint) so it shows on white
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
      const alpha = Math.max(0, p.alpha * (0.6 + 0.4 * Math.sin(p.phase)));
      g.addColorStop(0, `rgba(255,240,220,${alpha * 0.95})`);
      g.addColorStop(0.5, `rgba(255,210,170,${alpha * 0.6})`);
      g.addColorStop(1, 'rgba(255,210,170,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
      ctx.fill();
    }

    function loop(now: number) {
      const dt = Math.min(40, now - last) / 16.6667;
      last = now;

      ctx.clearRect(0, 0, w, h);

      // sunray base (stronger)
      drawSunray();

      // additive blending for soft glow (OK) but keep visible on white because particle colors now tinted
      ctx.globalCompositeOperation = 'lighter';

      for (const p of particlesRef.current) {
        // subtle horizontal bobbing
        p.phase += 0.015 * dt;
        p.x += p.vx * dt + Math.sin(p.phase) * 0.25;
        p.y += p.vy * dt;

        // wrap around bottom -> top
        if (p.y + p.r * 3 < -20) {
          p.x = Math.random() * w;
          p.y = h + 20 + Math.random() * 100;
        }
        if (p.x < -50) p.x = w + 50;
        if (p.x > w + 50) p.x = -50;

        drawParticle(p);
      }

      ctx.globalCompositeOperation = 'source-over';
      rafRef.current = requestAnimationFrame(loop);
    }

    resize();
    window.addEventListener('resize', resize);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [isDark]);

  return <canvas ref={canvasRef} className="particles-canvas" aria-hidden />;
}