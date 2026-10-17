import { useEffect } from 'react';
import { profile } from '../content/site';
import { PageMeta } from '../components/portfolio/Chrome';
import { useRoute } from '../hooks/useRoute';

/**
 * 11 to 6. A blank screen. A bed fades in. A figure walks in from the left and
 * lies down to sleep. Nothing else. Click anywhere or press Escape to leave.
 */
export default function SleepPage() {
  const { navigate } = useRoute();

  /* Lock scroll for the whole scene, and let a click or Escape wake us. */
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('home-locked');
    const wake = () => navigate('/');
    const onKey = (event) => {
      if (event.key === 'Escape') wake();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      root.classList.remove('home-locked');
      window.removeEventListener('keydown', onKey);
    };
  }, [navigate]);

  return (
    <>
      <PageMeta
        title={`11 to 6 | ${profile.name}`}
        description="Off the clock."
      />
      <main id="main" className="sleep" onClick={() => navigate('/')}>
        <svg className="sleep-scene" viewBox="0 0 1000 560" aria-hidden="true" preserveAspectRatio="xMidYMax meet">
          {/* The bed: fades in first. */}
          <g className="sleep-bed">
            <rect className="sleep-bed-frame" x="440" y="376" width="372" height="18" rx="6" />
            <rect className="sleep-bed-leg" x="452" y="394" width="14" height="40" rx="4" />
            <rect className="sleep-bed-leg" x="786" y="394" width="14" height="40" rx="4" />
            <rect className="sleep-headboard" x="440" y="296" width="20" height="98" rx="6" />
            <rect className="sleep-mattress" x="460" y="340" width="352" height="40" rx="14" />
            <rect className="sleep-pillow" x="472" y="322" width="96" height="34" rx="14" />
          </g>

          {/* The sleeper: appears once the walker reaches the bed. */}
          <g className="sleep-figure">
            <g className="sleep-breath">
              {/* blanket mound over the body */}
              <path
                className="sleep-blanket"
                d="M560 340 q140 -34 232 6 l0 34 q-116 10 -232 0 Z"
              />
              {/* head on the pillow */}
              <circle className="sleep-head" cx="520" cy="338" r="22" />
            </g>
          </g>

          {/* The walker: enters from the left, then fades as the sleeper appears. */}
          <g className="sleep-walker">
            <circle className="sleep-walker-head" cx="0" cy="-150" r="20" />
            <rect className="sleep-walker-torso" x="-16" y="-132" width="32" height="70" rx="14" />
            <rect className="sleep-walker-leg sleep-walker-leg--a" x="-14" y="-66" width="12" height="66" rx="6" />
            <rect className="sleep-walker-leg sleep-walker-leg--b" x="2" y="-66" width="12" height="66" rx="6" />
          </g>

          {/* Zzz drifting up once asleep. */}
          <g className="sleep-zzz" aria-hidden="true">
            <text className="sleep-z sleep-z--1" x="600" y="300">z</text>
            <text className="sleep-z sleep-z--2" x="622" y="282">z</text>
            <text className="sleep-z sleep-z--3" x="648" y="262">z</text>
          </g>
        </svg>
        <button type="button" className="sr-only" onClick={() => navigate('/')}>
          Wake up and go back home
        </button>
      </main>
    </>
  );
}
