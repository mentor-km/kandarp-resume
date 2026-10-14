import { useEffect, useRef } from 'react';

/* ------------------------------------------------------------------ */
/* Intro settings. Colours are read from the CSS variables in :root.   */
/* ------------------------------------------------------------------ */
const INTRO_MS = 3400;
const SEEN_KEY = 'km-intro-seen';
const INITIALS = ['K', 'M'];
const FULL_NAME = 'Kandarp Mathur';

export function shouldPlayIntro() {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  try {
    return window.sessionStorage.getItem(SEEN_KEY) !== '1';
  } catch {
    return true;
  }
}

function cssVar(name, fallback) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value || fallback;
}

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const span = (t, from, to) => clamp01((t - from) / (to - from));

/** Low bass swell through Web Audio. Fails silently if the browser blocks it. */
function startSwell() {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    const ctx = new Ctx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(42, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(64, ctx.currentTime + 2.2);
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 1.4);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.2);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 3.3);
    let closed = false;
    return () => {
      if (closed) return;
      closed = true;
      try {
        osc.stop();
      } catch {
        /* already stopped */
      }
      if (ctx.state !== 'closed') ctx.close().catch(() => {});
    };
  } catch {
    return null;
  }
}

/**
 * Cinematic opening drawn with requestAnimationFrame.
 * 0.0s to 1.3s  initials form from gradient ribbons with an upward reveal
 * 1.3s to 2.3s  the camera pushes through the initials, light trails and a lens streak cross
 * 2.3s to 3.4s  the full name fades in under a scan-line highlight
 * Click, touch, a key press, or a scroll skips it.
 */
export default function Intro({ onDone }) {
  const canvasRef = useRef(null);
  const doneRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    const root = document.documentElement;
    root.classList.add('intro-pending');
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const colors = {
      bg: cssVar('--bg', '#000000'),
      sage: cssVar('--accent', '#87A96B'),
      walnut: cssVar('--walnut', '#5A3E2B'),
      amber: cssVar('--warm', '#D5851F'),
      text: cssVar('--text', '#ffffff'),
    };
    const headingFont = cssVar('--font-heading', "'Outfit', sans-serif");
    const monoFont = cssVar('--font-mono', "'JetBrains Mono', monospace");

    let width = 0;
    let height = 0;
    let dpr = 1;
    const resize = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const trails = Array.from({ length: 26 }, (_, i) => ({
      x: (i + 0.5) / 26 + (Math.random() - 0.5) * 0.03,
      speed: 0.6 + Math.random() * 0.9,
      length: 0.18 + Math.random() * 0.3,
      offset: Math.random(),
      width: 1 + Math.random() * 1.5,
    }));

    const ribbons = Array.from({ length: 7 }, (_, i) => ({
      phase: (i / 7) * Math.PI * 2,
      amp: 0.08 + (i % 3) * 0.04,
      y: 0.35 + i * 0.05,
    }));

    const stopSwell = startSwell();
    const start = performance.now();
    let frame = 0;

    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      removeSkips();
      stopSwell?.();
      canvas.classList.add('is-leaving');
      root.classList.remove('intro-pending');
      root.classList.add('intro-done');
      document.body.style.overflow = previousOverflow;
      try {
        window.sessionStorage.setItem(SEEN_KEY, '1');
      } catch {
        /* storage unavailable */
      }
      window.setTimeout(() => onDone?.(), 420);
    };

    const skipEvents = ['pointerdown', 'touchstart', 'keydown', 'wheel', 'scroll'];
    const skip = () => finish();
    skipEvents.forEach((name) => window.addEventListener(name, skip, { passive: true }));
    function removeSkips() {
      skipEvents.forEach((name) => window.removeEventListener(name, skip));
    }

    const ribbonGradient = (alpha) => {
      const g = ctx.createLinearGradient(0, 0, width, 0);
      g.addColorStop(0, `${colors.walnut}`);
      g.addColorStop(0.5, `${colors.sage}`);
      g.addColorStop(1, `${colors.amber}`);
      ctx.globalAlpha = alpha;
      return g;
    };

    const draw = (now) => {
      const elapsed = now - start;
      const t = clamp01(elapsed / INTRO_MS);
      const cx = width / 2;
      const cy = height / 2;

      ctx.globalAlpha = 1;
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      /* Phase 1: ribbons sweep in and the initials rise out of them. */
      const form = span(t, 0, 0.38);
      const push = span(t, 0.38, 0.68);
      const name = span(t, 0.66, 1);

      if (form < 1 || push < 0.6) {
        const ribbonAlpha = (1 - push) * 0.75;
        ctx.lineCap = 'round';
        ribbons.forEach((ribbon, i) => {
          ctx.beginPath();
          const progress = easeOut(span(form, i * 0.05, 1));
          const points = 60;
          for (let p = 0; p <= points; p += 1) {
            const u = p / points;
            const x = u * width;
            const wave = Math.sin(u * Math.PI * 2 + ribbon.phase + elapsed * 0.0016) * ribbon.amp;
            const lift = (1 - progress) * height * 0.35;
            const y = height * ribbon.y + wave * height + lift - progress * height * 0.1;
            if (p === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.strokeStyle = ribbonGradient(ribbonAlpha * (0.35 + 0.65 * progress));
          ctx.lineWidth = 1.2 + i * 0.4;
          ctx.stroke();
        });
      }

      /* Initials with an upward reveal, then a zoom through. */
      const scale = 1 + easeInOut(push) * 7;
      const initialsAlpha = form > 0 ? Math.min(1, form * 1.4) * (1 - span(push, 0.55, 1)) : 0;
      if (initialsAlpha > 0) {
        const size = Math.min(width * 0.26, 220) * scale;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.font = `800 ${size}px ${headingFont}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const textWidth = ctx.measureText(INITIALS.join('')).width;
        const gradient = ctx.createLinearGradient(-textWidth / 2, 0, textWidth / 2, 0);
        gradient.addColorStop(0, colors.sage);
        gradient.addColorStop(0.55, colors.text);
        gradient.addColorStop(1, colors.amber);
        const revealHeight = size * 1.2;
        const revealed = easeOut(form);
        ctx.beginPath();
        ctx.rect(-width, revealHeight / 2 - revealHeight * revealed, width * 2, revealHeight);
        ctx.clip();
        ctx.globalAlpha = initialsAlpha;
        ctx.shadowColor = colors.sage;
        ctx.shadowBlur = 40 * (1 - push);
        ctx.fillStyle = gradient;
        const slide = (1 - easeOut(form)) * width * 0.25;
        ctx.fillText(INITIALS[0], -textWidth / 4 - slide, (1 - revealed) * size * 0.3);
        ctx.fillText(INITIALS[1], textWidth / 4 + slide, (1 - revealed) * size * 0.3);
        ctx.restore();
      }

      /* Phase 2: vertical light trails and a lens streak. */
      if (push > 0 && push < 1) {
        const trailAlpha = Math.sin(push * Math.PI);
        trails.forEach((trail) => {
          const travel = (trail.offset + push * trail.speed) % 1;
          const x = trail.x * width;
          const yEnd = height - travel * height * 1.4;
          const yStart = yEnd + trail.length * height;
          const g = ctx.createLinearGradient(0, yStart, 0, yEnd);
          g.addColorStop(0, 'rgba(255,255,255,0)');
          g.addColorStop(1, `rgba(255,255,255,${0.55 * trailAlpha})`);
          ctx.globalAlpha = 1;
          ctx.strokeStyle = g;
          ctx.lineWidth = trail.width;
          ctx.beginPath();
          ctx.moveTo(x, yStart);
          ctx.lineTo(x, yEnd);
          ctx.stroke();
        });

        const flareX = (push * 1.6 - 0.3) * width;
        const flare = ctx.createLinearGradient(flareX - width * 0.3, 0, flareX + width * 0.3, 0);
        flare.addColorStop(0, 'rgba(213,133,31,0)');
        flare.addColorStop(0.5, `rgba(213,133,31,${0.75 * trailAlpha})`);
        flare.addColorStop(1, 'rgba(213,133,31,0)');
        ctx.fillStyle = flare;
        ctx.fillRect(0, cy - 1.5, width, 3);
        const glow = ctx.createRadialGradient(flareX, cy, 0, flareX, cy, width * 0.12);
        glow.addColorStop(0, `rgba(255,255,255,${0.5 * trailAlpha})`);
        glow.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);
      }

      /* Phase 3: the full name with a scan-line highlight. */
      if (name > 0) {
        const alpha = easeOut(span(name, 0, 0.6));
        const size = Math.min(width * 0.085, 72);
        ctx.save();
        ctx.font = `800 ${size}px ${headingFont}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.globalAlpha = alpha;
        ctx.fillStyle = colors.text;
        ctx.shadowColor = 'rgba(0,0,0,0.6)';
        ctx.shadowBlur = 24;
        ctx.fillText(FULL_NAME, cx, cy);

        const lineY = cy - size + name * size * 2.2;
        const scan = ctx.createLinearGradient(0, lineY - size * 0.25, 0, lineY + size * 0.25);
        scan.addColorStop(0, 'rgba(135,169,107,0)');
        scan.addColorStop(0.5, `rgba(135,169,107,${0.9 * alpha})`);
        scan.addColorStop(1, 'rgba(135,169,107,0)');
        ctx.globalCompositeOperation = 'source-atop';
        ctx.fillStyle = scan;
        ctx.fillRect(0, lineY - size, width, size * 2);
        ctx.globalCompositeOperation = 'source-over';

        ctx.globalAlpha = alpha * 0.8;
        ctx.font = `500 ${Math.max(11, size * 0.18)}px ${monoFont}`;
        ctx.fillStyle = colors.sage;
        ctx.shadowBlur = 0;
        ctx.fillText('AI PRODUCT MANAGER  /  AGENTIC AI', cx, cy + size * 0.95);
        ctx.restore();
      }

      if (t >= 1) {
        finish();
        return;
      }
      frame = requestAnimationFrame(draw);
    };

    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      removeSkips();
      stopSwell?.();
      document.body.style.overflow = previousOverflow;
      root.classList.remove('intro-pending');
      root.classList.add('intro-done');
    };
  }, [onDone]);

  return <canvas ref={canvasRef} className="intro-canvas" aria-hidden="true" />;
}
