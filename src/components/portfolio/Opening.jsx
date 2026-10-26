import { useEffect, useRef, useState } from 'react';
import { AppLink } from '../../hooks/useRoute';

const STEPS = [
  { text: 'Hello', speed: 65, hold: 700 },
  { text: 'I am Kandarp', speed: 65, hold: 700 },
  { text: 'AI Product Manager - Builder & Founder', speed: 40, hold: 900 },
];

function isHomePath(pathname) {
  const path = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  return path === '/' || path === '';
}

const openedOnHome = isHomePath(window.location.pathname);
let introClaimed = false;

function Drift() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    let width = 0;
    let height = 0;
    const stars = Array.from({ length: 110 }, () => ({
      x: Math.random(),
      y: Math.random(),
      depth: Math.random(),
      phase: Math.random() * Math.PI * 2,
    }));
    const planets = [
      { x: 0.08, y: 0.16, radius: 18, color: '186, 206, 228', vx: 0.01, vy: 0.004 },
      { x: 0.9, y: 0.82, radius: 34, color: '214, 186, 140', ring: true, vx: -0.008, vy: -0.003 },
      { x: 0.93, y: 0.22, radius: 12, color: '150, 186, 168', vx: -0.006, vy: 0.005 },
    ];
    const rocks = Array.from({ length: 8 }, (_, index) => ({
      x: Math.random(),
      edge: index < 4 ? 'top' : 'bottom',
      y: index < 4 ? 0.04 + Math.random() * 0.08 : 0.88 + Math.random() * 0.08,
      size: 2 + Math.random() * 2.4,
      speed: 0.012 + Math.random() * 0.012,
      spin: (Math.random() - 0.5) * 0.0004,
      rotation: Math.random() * Math.PI,
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.max(1, width * dpr);
      canvas.height = Math.max(1, height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const sphere = (x, y, radius, color) => {
      const shade = ctx.createRadialGradient(x - radius * 0.38, y - radius * 0.42, radius * 0.08, x + radius * 0.2, y + radius * 0.16, radius);
      shade.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      shade.addColorStop(0.22, `rgba(${color}, 1)`);
      shade.addColorStop(0.72, `rgba(${color}, 0.78)`);
      shade.addColorStop(1, 'rgba(12, 14, 18, 0.15)');
      ctx.fillStyle = shade;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const streak = (x, y, length, rise) => {
      const trail = ctx.createLinearGradient(x, y, x - length, y - rise);
      trail.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      trail.addColorStop(0.25, 'rgba(210, 226, 255, 0.45)');
      trail.addColorStop(1, 'rgba(210, 226, 255, 0)');
      ctx.strokeStyle = trail;
      ctx.lineWidth = 1.6;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - length, y - rise);
      ctx.stroke();
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(x, y, 1.8, 0, Math.PI * 2);
      ctx.fill();
    };

    const draw = (time) => {
      if (!width || !height) resize();
      const t = reduce ? 8000 : time;
      ctx.clearRect(0, 0, width, height);
      const clearLeft = width * 0.18;
      const clearRight = width * 0.82;
      const clearTop = height * 0.18;
      const clearBottom = height * 0.84;

      stars.forEach((star) => {
        const radius = 0.35 + star.depth * 1.45;
        const flicker = 0.35 + Math.sin(t * 0.0012 * (0.4 + star.depth) + star.phase) * 0.22;
        const drift = reduce ? 0 : t * (0.002 + star.depth * 0.004);
        const x = ((star.x * width + drift) % width + width) % width;
        const y = star.y * height;
        const overCopy = x > clearLeft && x < clearRight && y > clearTop && y < clearBottom;
        const alpha = (0.35 + flicker * star.depth) * (overCopy ? 0.28 : 1);
        if (!overCopy && star.depth > 0.72) {
          const glow = ctx.createRadialGradient(x, y, 0, x, y, radius * 6);
          glow.addColorStop(0, `rgba(244, 247, 255, ${flicker * 0.65})`);
          glow.addColorStop(1, 'rgba(244, 247, 255, 0)');
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(x, y, radius * 6, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = alpha;
        ctx.fillStyle = '#f7f8fc';
        ctx.beginPath();
        ctx.arc(x, y, overCopy ? radius * 0.7 : radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      if (!reduce) {
        const shot = t % 5600;
        if (shot < 720) {
          const progress = shot / 720;
          const fromTop = Math.floor(t / 5600) % 2 === 0;
          const y = fromTop ? height * 0.07 + progress * height * 0.05 : height * 0.93 - progress * height * 0.03;
          streak(-30 + progress * (width + 90), y, 110, fromTop ? 16 : -10);
        }
        const comet = (t % 12000) / 12000;
        const cometX = -70 + comet * (width + 180);
        const cometY = height * (Math.floor(t / 12000) % 2 === 0 ? 0.05 : 0.95);
        streak(cometX, cometY, 150, 8);
        sphere(cometX, cometY, 3.2, '226, 236, 248');
      }

      planets.forEach((planet) => {
        const x = ((planet.x * width + t * planet.vx) % (width + 120) + (width + 120)) % (width + 120) - 60;
        let y = planet.y * height + Math.sin(t * 0.00015 + planet.x * 6) * 16;
        if (y > clearTop && y < clearBottom) y = planet.y < 0.5 ? clearTop - planet.radius - 8 : clearBottom + planet.radius + 8;
        if (planet.ring) {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(-0.5);
          ctx.strokeStyle = 'rgba(236, 240, 246, 0.75)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.ellipse(0, 0, planet.radius * 1.8, planet.radius * 0.46, 0, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }
        sphere(x, y, planet.radius, planet.color);
      });

      rocks.forEach((rock) => {
        const x = ((rock.x * width + t * rock.speed) % (width + 20) + (width + 20)) % (width + 20) - 10;
        const y = rock.y * height;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rock.rotation + t * rock.spin);
        ctx.fillStyle = 'rgba(206, 214, 224, 0.7)';
        ctx.beginPath();
        ctx.moveTo(rock.size, 0);
        ctx.lineTo(-rock.size * 0.4, rock.size * 0.7);
        ctx.lineTo(-rock.size * 0.8, -rock.size * 0.3);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      });

      if (!reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    draw(0);
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="imagined-drift" aria-hidden="true">
      <canvas ref={canvasRef} className="imagined-particles" />
    </div>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function Opening() {
  const [text, setText] = useState('');
  const [fading, setFading] = useState(false);
  const [shown, setShown] = useState(() => introClaimed || !openedOnHome);
  const stopRef = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || introClaimed || !openedOnHome) {
      introClaimed = true;
      setShown(true);
      setText('');
      return undefined;
    }

    stopRef.current = false;
    const started = performance.now();
    const timers = [];
    const sleep = (ms) =>
      new Promise((resolve) => {
        const id = setTimeout(resolve, ms);
        timers.push(id);
      });

    async function play() {
      setShown(false);
      setFading(false);
      setText('');
      for (const step of STEPS) {
        if (stopRef.current) return;
        setFading(false);
        for (let i = 1; i <= step.text.length; i += 1) {
          if (stopRef.current) return;
          setText(step.text.slice(0, i));
          await sleep(step.speed);
        }
        if (stopRef.current) return;
        await sleep(step.hold);
        if (stopRef.current) return;
        setFading(true);
        await sleep(450);
      }
      if (!stopRef.current) {
        introClaimed = true;
        setShown(true);
      }
    }

    play();
    return () => {
      stopRef.current = true;
      timers.forEach((id) => clearTimeout(id));
      if (performance.now() - started > 100) introClaimed = true;
    };
  }, []);

  return (
    <div className="imagined">
      <Drift />
      <div className="imagined-glow" aria-hidden="true" />
      <div className="imagined-grid" aria-hidden="true" />
      <div className="imagined-veil" aria-hidden="true" />

      <div className={shown ? 'imagined-intro is-hidden' : 'imagined-intro'}>
        <div className={fading ? 'imagined-type is-out' : 'imagined-type'}>
          <span className="imagined-type-text">{text}</span>
          <span className="imagined-cursor" aria-hidden="true" />
        </div>
        <p className="sr-only" aria-live="polite">
          {text}
        </p>
      </div>

      <div className={shown ? 'imagined-hero is-visible' : 'imagined-hero'}>
        <header className="imagined-bar">
          <div className="imagined-brand">Kandarp Mathur</div>
          <div className="imagined-tag">Available for high-impact roles</div>
        </header>
        <section className="imagined-center">
          <p className="imagined-kicker">AI Product Manager, founder, and mentor</p>
          <h1>Here is all I do</h1>
          <p className="imagined-lede">
            At AltaDX I own OMAP, a suite of AI agents. I founded Round1, and I help folks get into IT with my platform
            Analystbychance.
          </p>
          <ul className="imagined-stack">
            <li>
              <strong>11+</strong>
              <span>Agents</span>
            </li>
            <li>
              <strong>4</strong>
              <span>delivery pods</span>
            </li>
            <li>
              <strong>200+</strong>
              <span>interviews on Round1</span>
            </li>
            <li>
              <strong>Mentor</strong>
              <span>Analystbychance</span>
            </li>
          </ul>
          <div className="imagined-actions">
            <AppLink className="imagined-cta imagined-cta--primary" to="/do">
              <span>MY DAY JOB</span>
              <Arrow />
            </AppLink>
            <AppLink className="imagined-cta imagined-cta--secondary" to="/built">
              <span>Things I built on my own time</span>
              <Arrow />
            </AppLink>
          </div>
        </section>

        <footer className="imagined-foot">
          <span>Product owner at AltaDX · Founder of Round1 and Analystbychance</span>
        </footer>
      </div>
    </div>
  );
}
