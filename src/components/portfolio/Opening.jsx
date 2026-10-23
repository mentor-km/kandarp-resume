import { useEffect, useRef, useState } from 'react';
import { AppLink } from '../../hooks/useRoute';

/* ------------------------------------------------------------------ */
/* Opening sequence. Edit the lines and timings here.                 */
/* ------------------------------------------------------------------ */
export const SEQUENCE = {
  blankMs: 450,
  letterMs: 85,
  holdMeetMs: 420,
  scrambleMs: 1700,
  holdRoleMs: 780,
  clearMs: 460,
  holdFounderMs: 520,
  wordMs: 130,
  meet: 'Meet Kandarp',
  role: 'AI Product Manager',
  founder: 'Founder and Mentor',
  summary:
    'I build AI products people can actually run. At AltaDX I turned OMAP from one Concierge agent into a suite of 11 agents across 4 pods. I founded Round1, where one client completed 153 interviews, and I mentor career moves at Analystbychance.',
};

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let seenThisVisit = false;

function countLetters(text) {
  return [...text].filter((ch) => ch !== ' ').length;
}

function wordsOf(text) {
  return text.split(/\s+/).filter(Boolean);
}

function marks() {
  const meetN = countLetters(SEQUENCE.meet);
  const founderN = countLetters(SEQUENCE.founder);
  const words = wordsOf(SEQUENCE.summary);
  let cursor = 0;
  const at = (ms) => {
    cursor += ms;
    return cursor;
  };
  return {
    meetN,
    founderN,
    words,
    blankEnd: at(SEQUENCE.blankMs),
    meetEnd: at(meetN * SEQUENCE.letterMs),
    holdMeetEnd: at(SEQUENCE.holdMeetMs),
    scrambleEnd: at(SEQUENCE.scrambleMs),
    holdRoleEnd: at(SEQUENCE.holdRoleMs),
    clearEnd: at(SEQUENCE.clearMs),
    founderEnd: at(founderN * SEQUENCE.letterMs),
    holdFounderEnd: at(SEQUENCE.holdFounderMs),
    summaryEnd: at(words.length * SEQUENCE.wordMs),
  };
}

function typedSlots(text, count, idPrefix) {
  let seen = 0;
  const slots = [];
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (ch === ' ') {
      if (seen > 0 && seen <= count) slots.push({ id: `${idPrefix}-${i}`, ch: ' ', kind: 'gap' });
      continue;
    }
    seen += 1;
    if (seen <= count) slots.push({ id: `${idPrefix}-${i}`, ch, kind: 'type' });
  }
  return slots;
}

function lockedSlots(text, idPrefix, kind) {
  return [...text].map((ch, i) => ({
    id: `${idPrefix}-${i}`,
    ch,
    kind: ch === ' ' ? 'gap' : kind,
    tone: kind === 'lock' ? 'citron' : undefined,
  }));
}

function scrambleSlots(elapsed) {
  const from = SEQUENCE.meet;
  const to = SEQUENCE.role;
  const progress = Math.min(1, Math.max(0, elapsed / SEQUENCE.scrambleMs));
  const step = Math.floor(elapsed / 55);
  const slots = [];
  for (let i = 0; i < to.length; i += 1) {
    const ch = to[i];
    const lockAt = (i + 1) / to.length;
    if (ch === ' ') {
      if (progress > 0.04) slots.push({ id: `role-${i}`, ch: ' ', kind: 'gap' });
      continue;
    }
    const extra = i >= from.length;
    const appearAt = extra ? ((i - from.length + 1) / Math.max(1, to.length - from.length)) * 0.3 : 0;
    if (progress < appearAt) continue;
    if (progress >= lockAt) {
      slots.push({ id: `role-${i}`, ch, kind: 'lock', tone: 'citron' });
    } else {
      const glyph = GLYPHS[(step * 7 + i * 11) % GLYPHS.length];
      slots.push({ id: `role-${i}`, ch: glyph, kind: 'spin' });
    }
  }
  return slots;
}

export function settledFrame() {
  const m = marks();
  return {
    phase: 'done',
    slots: typedSlots(SEQUENCE.founder, m.founderN, 'founder'),
    wordsShown: m.words.length,
    showActions: true,
    caret: false,
    announce: `${SEQUENCE.founder}. ${SEQUENCE.summary}`,
  };
}

export function frameAt(elapsed) {
  const m = marks();
  if (elapsed < m.blankEnd) {
    return { phase: 'blank', slots: [], wordsShown: 0, showActions: false, caret: false, announce: '' };
  }
  if (elapsed < m.meetEnd) {
    const n = Math.min(m.meetN, Math.floor((elapsed - m.blankEnd) / SEQUENCE.letterMs) + 1);
    return {
      phase: 'meet',
      slots: typedSlots(SEQUENCE.meet, n, 'meet'),
      wordsShown: 0,
      showActions: false,
      caret: true,
      announce: SEQUENCE.meet,
    };
  }
  if (elapsed < m.holdMeetEnd) {
    return {
      phase: 'meet',
      slots: typedSlots(SEQUENCE.meet, m.meetN, 'meet'),
      wordsShown: 0,
      showActions: false,
      caret: false,
      announce: SEQUENCE.meet,
    };
  }
  if (elapsed < m.scrambleEnd) {
    return {
      phase: 'scramble',
      slots: scrambleSlots(elapsed - m.holdMeetEnd),
      wordsShown: 0,
      showActions: false,
      caret: false,
      announce: SEQUENCE.role,
    };
  }
  if (elapsed < m.holdRoleEnd) {
    return {
      phase: 'role',
      slots: lockedSlots(SEQUENCE.role, 'role', 'lock'),
      wordsShown: 0,
      showActions: false,
      caret: false,
      announce: SEQUENCE.role,
    };
  }
  if (elapsed < m.clearEnd) {
    return {
      phase: 'clear',
      slots: lockedSlots(SEQUENCE.role, 'role', 'out'),
      wordsShown: 0,
      showActions: false,
      caret: false,
      announce: SEQUENCE.role,
    };
  }
  if (elapsed < m.founderEnd) {
    const n = Math.min(m.founderN, Math.floor((elapsed - m.clearEnd) / SEQUENCE.letterMs) + 1);
    return {
      phase: 'founder',
      slots: typedSlots(SEQUENCE.founder, n, 'founder'),
      wordsShown: 0,
      showActions: false,
      caret: true,
      announce: SEQUENCE.founder,
    };
  }
  if (elapsed < m.holdFounderEnd) {
    return {
      phase: 'founder',
      slots: typedSlots(SEQUENCE.founder, m.founderN, 'founder'),
      wordsShown: 0,
      showActions: false,
      caret: false,
      announce: SEQUENCE.founder,
    };
  }
  const shown = Math.min(m.words.length, Math.floor((elapsed - m.holdFounderEnd) / SEQUENCE.wordMs) + 1);
  if (shown >= m.words.length) return settledFrame();
  return {
    phase: 'summary',
    slots: typedSlots(SEQUENCE.founder, m.founderN, 'founder'),
    wordsShown: shown,
    showActions: false,
    caret: false,
    announce: `${SEQUENCE.founder}. ${SEQUENCE.summary}`,
  };
}

function shouldPlayOpening() {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  return !seenThisVisit;
}

export default function Opening() {
  const playOnMount = useRef(shouldPlayOpening());
  const [playing, setPlaying] = useState(playOnMount.current);
  const [frame, setFrame] = useState(() => (playOnMount.current ? frameAt(0) : settledFrame()));
  const playingRef = useRef(playing);
  playingRef.current = playing;

  useEffect(() => {
    if (!playing) {
      seenThisVisit = true;
      return undefined;
    }
    let raf = 0;
    let stopped = false;
    const start = performance.now();
    let lastPaint = 0;
    let lastPhase = '';

    const loop = (now) => {
      if (stopped) return;
      const elapsed = now - start;
      const next = frameAt(elapsed);
      if (next.phase === 'done' || next.phase !== lastPhase || elapsed - lastPaint > 50) {
        lastPaint = elapsed;
        lastPhase = next.phase;
        setFrame(next);
      }
      if (next.phase === 'done') {
        seenThisVisit = true;
        setPlaying(false);
        return;
      }
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
    };
  }, [playing]);

  useEffect(() => {
    if (!playing) return undefined;
    const skip = () => {
      if (!playingRef.current) return;
      seenThisVisit = true;
      setFrame(settledFrame());
      setPlaying(false);
    };
    const onKey = (event) => {
      if (event.key === 'Escape') skip();
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('wheel', skip, { passive: true });
    window.addEventListener('touchmove', skip, { passive: true });
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('wheel', skip);
      window.removeEventListener('touchmove', skip);
    };
  }, [playing]);

  const words = wordsOf(SEQUENCE.summary).slice(0, frame.wordsShown);
  const skip = () => {
    if (!playingRef.current) return;
    seenThisVisit = true;
    setFrame(settledFrame());
    setPlaying(false);
  };

  return (
    <div className={playing ? 'opening is-playing' : 'opening'} onClick={playing ? skip : undefined}>
      <p className="sr-only" aria-live="polite">
        {frame.announce}
      </p>
      {playing ? (
        <button type="button" className="opening-skip" onClick={skip}>
          Skip
        </button>
      ) : null}
      <div className="opening-stage">
        <h1 className="opening-line" aria-hidden={frame.showActions ? undefined : true}>
          {frame.slots.map((slot, index) => (
            <span
              key={slot.id}
              className={`exp-slot is-${slot.kind}${slot.tone === 'citron' ? ' is-citron' : ''}`}
              style={slot.kind === 'out' ? { animationDelay: `${index * 14}ms` } : undefined}
            >
              {slot.ch === ' ' ? '\u00a0' : slot.ch}
            </span>
          ))}
          {frame.caret ? <span className="opening-caret" /> : null}
        </h1>
        {frame.wordsShown > 0 ? (
          <p className={playOnMount.current ? 'opening-summary' : 'opening-summary is-settled'}>
            {words.map((word, index) => (
              <span key={`${word}-${index}`}>
                <span className="opening-word">{word}</span>
                {index < words.length - 1 ? ' ' : ''}
              </span>
            ))}
          </p>
        ) : null}
        {frame.showActions ? (
          <div className="opening-actions" onClick={(event) => event.stopPropagation()}>
            <AppLink className="exp-cta exp-cta--do" to="/do">
              See what I do?
            </AppLink>
            <AppLink className="exp-cta exp-cta--built" to="/built">
              Explore what I built?
            </AppLink>
          </div>
        ) : null}
      </div>
    </div>
  );
}
