import { useEffect, useRef } from 'react';

/* ------------------------------------------------------------------ */
/* Scroll-scrubbed background.                                          */
/* Put JPG frames in public/frames/ named frame-0001.jpg, frame-0002.jpg */
/* and set FRAME_COUNT to how many there are. With zero frames the       */
/* canvas draws a slow procedural wash in the site colours instead.      */
/* ------------------------------------------------------------------ */
const FRAME_COUNT = 0;
const FRAME_PATH = (index) => `/frames/frame-${String(index).padStart(4, '0')}.jpg`;
const LERP = 0.085;

function cssVar(name, fallback) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value || fallback;
}

function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  const value = parseInt(clean.length === 3 ? clean.replace(/(.)/g, '$1$1') : clean, 16);
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
}

export default function Backdrop() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const sage = hexToRgb(cssVar('--accent', '#87A96B'));
    const walnut = hexToRgb(cssVar('--walnut', '#5A3E2B'));
    const amber = hexToRgb(cssVar('--warm', '#D5851F'));

    let width = 0;
    let height = 0;
    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
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

    /* Preload frames. Missing files are simply skipped. */
    const frames = new Array(FRAME_COUNT).fill(null);
    let loaded = 0;
    for (let i = 1; i <= FRAME_COUNT; i += 1) {
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => {
        frames[i - 1] = img;
        loaded += 1;
      };
      img.src = FRAME_PATH(i);
    }

    const nearestFrame = (index) => {
      if (loaded === 0) return null;
      for (let d = 0; d < FRAME_COUNT; d += 1) {
        if (frames[index - d]) return frames[index - d];
        if (frames[index + d]) return frames[index + d];
      }
      return null;
    };

    const drawCover = (img) => {
      const ratio = Math.max(width / img.naturalWidth, height / img.naturalHeight);
      const w = img.naturalWidth * ratio;
      const h = img.naturalHeight * ratio;
      ctx.drawImage(img, (width - w) / 2, (height - h) / 2, w, h);
    };

    const drawWash = (progress, time) => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);
      const blobs = [
        { c: walnut, x: 0.2 + progress * 0.25, y: 0.25 + Math.sin(time * 0.0002) * 0.05, r: 0.55, a: 0.55 },
        { c: sage, x: 0.85 - progress * 0.35, y: 0.7 - progress * 0.3, r: 0.45, a: 0.32 },
        { c: amber, x: 0.6 + Math.cos(time * 0.00015) * 0.08, y: 0.15 + progress * 0.6, r: 0.3, a: 0.2 },
      ];
      blobs.forEach((blob) => {
        const x = blob.x * width;
        const y = blob.y * height;
        const r = blob.r * Math.max(width, height);
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, `rgba(${blob.c.join(',')},${blob.a})`);
        g.addColorStop(1, `rgba(${blob.c.join(',')},0)`);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, width, height);
      });
    };

    const scrollProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      return max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    };

    let current = scrollProgress();
    let target = current;
    let frame = 0;
    let lastDrawn = -1;

    const render = (time) => {
      target = scrollProgress();
      current += (target - current) * LERP;
      if (FRAME_COUNT > 0) {
        const index = Math.round(current * (FRAME_COUNT - 1));
        const img = nearestFrame(index);
        if (img && index !== lastDrawn) {
          drawCover(img);
          lastDrawn = index;
        } else if (!img) {
          drawWash(current, time);
        }
      } else {
        drawWash(current, time);
      }
      if (!reduce) frame = requestAnimationFrame(render);
    };

    if (reduce) {
      render(0);
      const onScroll = () => {
        current = scrollProgress();
        render(0);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', resize);
      };
    }

    frame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="backdrop" aria-hidden="true" />
      <div className="backdrop-shade" aria-hidden="true" />
    </>
  );
}
