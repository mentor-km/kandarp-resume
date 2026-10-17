import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { getCaseStudy, getIndependentStudies } from '../../content/caseStudies';
import {
  altadxBeats,
  certifications,
  contact,
  education,
  experience,
  founderInitiative,
  getPublicMetrics,
  heroTaglines,
  heroWorlds,
  processSteps,
  profile,
  skillGroups,
  tryfunzo,
} from '../../content/site';
import { AppLink } from '../../hooks/useRoute';
import { ExternalLink, ResumeButton } from './Chrome';

function reducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Fades a block in the first time it scrolls into view. */
function Reveal({ children, className = '' }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (reducedMotion()) {
      setShown(true);
      return undefined;
    }
    const showIfVisible = () => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) setShown(true);
    };
    showIfVisible();
    window.addEventListener('scroll', showIfVisible, { passive: true });
    window.addEventListener('resize', showIfVisible);
    return () => {
      window.removeEventListener('scroll', showIfVisible);
      window.removeEventListener('resize', showIfVisible);
    };
  }, []);

  return (
    <div ref={ref} className={`reveal${shown ? ' is-in' : ''} ${className}`.trim()}>
      {children}
    </div>
  );
}

/** Splits "30%" into { target: 30, suffix: '%' } without changing the published value. */
function parseMetric(value) {
  const match = String(value).match(/^([^\d]*)(\d[\d,]*)(\.\d+)?(.*)$/);
  if (!match) return null;
  const whole = match[2].replace(/,/g, '');
  const decimals = match[3] ? match[3].length - 1 : 0;
  return {
    prefix: match[1],
    target: Number(`${whole}${match[3] || ''}`),
    decimals,
    suffix: match[4],
  };
}

/** Counts up with an exponential ease-out over 1.8s when scrolled into view. */
function CountUp({ value }) {
  const ref = useRef(null);
  const parsed = useMemo(() => parseMetric(value), [value]);
  const [text, setText] = useState(parsed ? `${parsed.prefix}${(0).toFixed(parsed.decimals)}${parsed.suffix}` : value);

  useEffect(() => {
    const node = ref.current;
    if (!node || !parsed) return undefined;
    if (reducedMotion()) {
      setText(value);
      return undefined;
    }
    let frame = 0;
    const run = () => {
      const start = performance.now();
      const duration = 1800;
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        const current = parsed.target * eased;
        setText(`${parsed.prefix}${current.toFixed(parsed.decimals)}${parsed.suffix}`);
        if (t < 1) frame = requestAnimationFrame(tick);
        else setText(value);
      };
      frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        run();
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, parsed]);

  return (
    <span
      ref={ref}
      className="proof-value"
      data-count-target={parsed?.target}
      data-prefix={parsed?.prefix}
      data-suffix={parsed?.suffix}
      data-decimals={parsed?.decimals}
    >
      {text}
    </span>
  );
}

function Metric({ id }) {
  const metric = getPublicMetrics().find((item) => item.id === id);
  if (!metric) return null;

  return (
    <p className="metric-callout">
      <CountUp value={metric.value} />
      <span className="proof-label">{metric.label}</span>
      <span className="proof-scope">{metric.scope}</span>
      <span className="proof-asof">{metric.asOf}</span>
    </p>
  );
}

function SiteLine({ links = [], site, live = true }) {
  const verified = links.filter((link) => link.verified);
  if (verified.length > 0) {
    return (
      <p className="site-line">
        {verified.map((link) => (
          <ExternalLink key={link.href} className="site-link" href={link.href}>
            {link.label}
          </ExternalLink>
        ))}
      </p>
    );
  }
  if (site) {
    return (
      <p className="site-line">
        <span className="site-link site-link--pending">{site}</span>
        {live ? null : <span className="site-note">not live yet</span>}
      </p>
    );
  }
  return null;
}

function Hairline() {
  return <hr className="hairline" aria-hidden="true" />;
}

/**
 * Cycles through heroTaglines one line at a time, cross-fading between them.
 * Reduced motion shows the first line only.
 */
function RotatingSubtext({ lines }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!lines || lines.length < 2 || reducedMotion()) return undefined;
    const HOLD = 3200; // how long a line stays fully shown
    const FADE = 440; // fade-out before the swap
    let swap;
    const hold = window.setInterval(() => {
      setVisible(false);
      swap = window.setTimeout(() => {
        setIndex((i) => (i + 1) % lines.length);
        setVisible(true);
      }, FADE);
    }, HOLD);
    return () => {
      window.clearInterval(hold);
      window.clearTimeout(swap);
    };
  }, [lines]);

  if (!lines || lines.length === 0) return null;

  return (
    <p className="hero-rotator" aria-live="polite">
      <span className={`hero-rotator-line${visible ? ' is-in' : ''}`}>{lines[index]}</span>
    </p>
  );
}

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-copy hero-reveal">
        <p className="hero-hello">Hey, I&apos;m</p>
        <h1 id="hero-heading" className="hero-name">
          {profile.name}
        </h1>
        <p className="hero-role">{profile.role}</p>
        <RotatingSubtext lines={heroTaglines} />
        <nav className="hero-worlds" aria-label="Three worlds">
          <ol>
            {heroWorlds.map((world) => (
              <li key={world.id}>
                <AppLink className="hero-world" to={world.href}>
                  <span className="hero-world-clock">{world.clock}</span>
                  <span className="hero-world-body">
                    <span className="hero-world-title">{world.title}</span>
                    <span className="hero-world-blurb">{world.blurb}</span>
                  </span>
                  <span className="hero-world-arrow" aria-hidden="true">
                    &rarr;
                  </span>
                </AppLink>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}

export function AltaDxChapter() {
  const role = experience.find((job) => job.id === 'altadx');
  const study = getCaseStudy('omap-agentic-ai');
  if (!role) return null;

  return (
    <section className="section chapter" id="altadx" aria-labelledby="altadx-heading">
      <Reveal>
        <p className="chapter-index">Experience</p>
        <p className="card-kicker">
          <span>Full-time role</span>
          <span aria-hidden="true">/</span>
          <span>{study?.statusLabel}</span>
        </p>
        <h2 id="altadx-heading">{role.org}</h2>
        <p className="chapter-meta">
          {role.title}
          <span>{role.dates}</span>
        </p>
        <SiteLine links={study?.links} site={study?.site} />
        <p className="chapter-headline">
          I define product for an agentic platform that fitness and wellness operators{' '}
          <em className="accent-phrase">can configure themselves.</em>
        </p>
        <p className="lede">
          OMAP lets a business set up digital agents inside the workflows it already runs. My job is to decide what those
          agents should do, write it down clearly enough to build, and get it shipped across four pods.
        </p>
        <div className="beat-grid">
          {altadxBeats.map((beat) => (
            <article key={beat.step}>
              <p className="process-step">{beat.step}</p>
              <h3>{beat.title}</h3>
              <p>{beat.text}</p>
            </article>
          ))}
        </div>
        <Metric id="pods" />
        <p className="impact-note">
          One concrete result: after I separated QA Hold and QA-found defects from new commitments, the sprint view
          showed 7.5% scope growth instead of the 64.5% reported earlier. That corrected the measurement. It did not
          shrink the real work.
        </p>
        {study ? (
          <AppLink className="text-link" to={study.path}>
            Read the OMAP case study
          </AppLink>
        ) : null}
      </Reveal>
      <Hairline />
    </section>
  );
}

export function FounderChapter() {
  const round1 = getCaseStudy('round1');

  return (
    <section className="section chapter chapter--founder" id="founder" aria-labelledby="founder-heading">
      <Reveal>
        <p className="chapter-index">Founder</p>
        <h2 id="founder-heading">
          What I build <em className="accent-phrase">outside the day job</em>
        </h2>
        <p className="lede">
          Round1 and Analystbychance are mine. Neither is AltaDX work, and neither is a weekend experiment.
        </p>
        {round1 ? (
          <article className="work-piece">
            <p className="card-kicker">
              <span>{round1.categoryLabel}</span>
              <span aria-hidden="true">/</span>
              <span>{round1.statusLabel}</span>
            </p>
            <h3>{round1.cardTitle}</h3>
            <SiteLine links={round1.links} site={round1.site} />
            <p className="chapter-meta">
              {round1.role}
              <span>{round1.dates}</span>
            </p>
            <p>{round1.summary}</p>
            <ul className="work-points">
              <li>I defined the interview flow, the scoring rules, and the packaging, including trial terms and refund rules.</li>
              <li>Technical skill is weighted 80 and communication 20, and I state that split instead of hiding it in the model.</li>
              <li>A minimum-answer gate holds back a full recommendation when the conversation was too short to support one.</li>
              <li>Integrity cues are shown as signals for a human to review, never as proof of dishonesty.</li>
            </ul>
            <Metric id="round1-interviews" />
            <p className="founder-boundary">
              I do not claim that Round1 improved hire quality, reduced bias, or saved a measured amount of recruiter time.
            </p>
            <div className="piece-links">
              <AppLink className="text-link" to={round1.path}>
                Read the Round1 case study
              </AppLink>
            </div>
          </article>
        ) : null}
        <article className="work-piece">
          <p className="card-kicker">
            <span>{founderInitiative.category}</span>
            <span aria-hidden="true">/</span>
            <span>{founderInitiative.role}</span>
          </p>
          <h3>{founderInitiative.name}</h3>
          <SiteLine
            links={[{ label: 'analystbychance.com', href: founderInitiative.href, verified: founderInitiative.verified }]}
          />
          <p>{founderInitiative.summary}</p>
          <p className="founder-boundary">{founderInitiative.note}</p>
        </article>
      </Reveal>
      <Hairline />
    </section>
  );
}

function ProjectPiece({ study }) {
  return (
    <article className="work-piece">
      <p className="card-kicker">
        <span>{study.categoryLabel}</span>
        <span aria-hidden="true">/</span>
        <span>{study.statusLabel}</span>
      </p>
      <h3>{study.cardTitle}</h3>
      <SiteLine links={study.links} site={study.site} />
      <p className="chapter-meta">
        {study.role}
        <span>{study.dates}</span>
      </p>
      <p>{study.summary}</p>
      <p>{study.problem}</p>
      <ul className="work-points">
        {study.ownership.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="piece-links">
        <AppLink className="text-link" to={study.path}>
          Read the case study
        </AppLink>
      </div>
    </article>
  );
}

export function OtherProjects() {
  const studies = getIndependentStudies();

  return (
    <section className="section chapter" id="projects" aria-labelledby="projects-heading">
      <Reveal>
        <p className="chapter-index">Products</p>
        <h2 id="projects-heading">
          Things I built <em className="accent-phrase">to see if they work</em>
        </h2>
        <p className="lede">
          These are weekend products. I build them to test a product decision with real users, and I label each one at
          the stage it has actually reached.
        </p>
        {studies.map((study) => (
          <ProjectPiece key={study.slug} study={study} />
        ))}
        <article className="work-piece">
          <p className="card-kicker">
            <span>Independent concept</span>
            <span aria-hidden="true">/</span>
            <span>{tryfunzo.status}</span>
          </p>
          <h3>{tryfunzo.name}</h3>
          <SiteLine site={tryfunzo.site} live={tryfunzo.siteLive} />
          <p className="chapter-meta">{tryfunzo.role}</p>
          <p>{tryfunzo.summary}</p>
          <ul className="work-points">
            {tryfunzo.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      </Reveal>
      <Hairline />
    </section>
  );
}

export function EarlierRoles() {
  const roles = experience.filter((job) => job.id !== 'altadx');

  return (
    <section className="section chapter" id="experience" aria-labelledby="experience-heading">
      <Reveal>
        <p className="chapter-index">Earlier roles</p>
        <h2 id="experience-heading">
          The road <em className="accent-phrase">to product</em>
        </h2>
        <p className="lede">
          I started as a trainer, moved into reporting, then business analysis, and then product ownership. These are my
          full-time roles before AltaDX, newest first.
        </p>
        <ol className="timeline">
          {roles.map((job) => (
            <li key={job.id}>
              <p className="timeline-dates">{job.dates}</p>
              <div className="timeline-body">
                <h3>{job.title}</h3>
                <p className="timeline-org">
                  {job.org}
                  <span>{job.location}</span>
                </p>
                <p>{job.summary}</p>
                <ul className="work-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {job.id === 'ktek' ? <Metric id="ktek-onboarding" /> : null}
                {job.id === 'wealth' ? <Metric id="wealth-reporting" /> : null}
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
      <Hairline />
    </section>
  );
}

export function Approach() {
  return (
    <section className="section" id="approach" aria-labelledby="approach-heading">
      <Reveal>
        <p className="chapter-index">Method</p>
        <h2 id="approach-heading">
          How I work, <em className="accent-phrase">as a guide rather than a script</em>
        </h2>
        <p className="lede">
          Not every project passes through these steps in order. The sequence is how I keep an AI idea tied to a
          workflow, a rule, and a release.
        </p>
        <ol className="process-list">
          {processSteps.map((step) => (
            <li key={step.id}>
              <span className="process-step">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>
      <Hairline />
    </section>
  );
}

function ToolboxIcon() {
  return (
    <svg className="toolbox-icon" viewBox="0 0 160 120" aria-hidden="true">
      {/* Tools peeking out once the lid lifts */}
      <g className="toolbox-tools">
        <rect x="56" y="30" width="6" height="34" rx="2" fill="#d5851f" transform="rotate(-14 59 47)" />
        <rect x="52" y="22" width="14" height="10" rx="2" fill="#87a96b" transform="rotate(-14 59 27)" />
        <rect x="92" y="28" width="6" height="36" rx="2" fill="#87a96b" transform="rotate(12 95 46)" />
        <path d="M86 22h18l-4 8h-10z" fill="#d5851f" transform="rotate(12 95 26)" />
        <circle cx="76" cy="34" r="7" fill="none" stroke="#fff" strokeWidth="3" />
      </g>
      {/* Lower chest */}
      <rect className="toolbox-body" x="14" y="56" width="132" height="50" rx="6" />
      <rect className="toolbox-tray" x="14" y="56" width="132" height="8" />
      <rect className="toolbox-rivet" x="24" y="76" width="6" height="6" rx="1" />
      <rect className="toolbox-rivet" x="130" y="76" width="6" height="6" rx="1" />
      <rect className="toolbox-plate" x="64" y="76" width="32" height="14" rx="2" />
      <rect className="toolbox-feet" x="22" y="106" width="20" height="5" rx="2" />
      <rect className="toolbox-feet" x="118" y="106" width="20" height="5" rx="2" />
      {/* Lid with handle and two latches, hinged at the back-left corner */}
      <g className="toolbox-lid-group">
        <rect className="toolbox-lid" x="14" y="38" width="132" height="20" rx="5" />
        <rect className="toolbox-lid-line" x="14" y="52" width="132" height="2" />
        <rect className="toolbox-handle" x="56" y="22" width="48" height="18" rx="7" />
        <rect className="toolbox-handle-gap" x="63" y="28" width="34" height="6" rx="3" />
        <rect className="toolbox-latch" x="36" y="50" width="12" height="12" rx="2" />
        <rect className="toolbox-latch" x="112" y="50" width="12" height="12" rx="2" />
      </g>
    </svg>
  );
}

/**
 * A toolbox sits in the centre and rattles. A click opens it and the six
 * skill cards fly out from the box into the grid.
 */
export function Skills() {
  const [open, setOpen] = useState(() => (typeof window !== 'undefined' ? reducedMotion() : false));
  const [animate, setAnimate] = useState(false);
  const wrapRef = useRef(null);
  const boxRef = useRef(null);
  const above = skillGroups.slice(0, 3);
  const below = skillGroups.slice(3, 6);

  const openBox = () => {
    if (open) return;
    setAnimate(!reducedMotion());
    setOpen(true);
  };

  // Once the rows are laid out around the box, measure how far each card sits
  // from the box centre so the fly-out starts from the toolbox itself.
  useLayoutEffect(() => {
    if (!open || !animate) return;
    const wrap = wrapRef.current;
    const box = boxRef.current;
    if (!wrap || !box) return;
    const from = box.getBoundingClientRect();
    const fromX = from.left + from.width / 2;
    const fromY = from.top + from.height / 2;
    const cards = [...wrap.querySelectorAll('.toolbox-row > section')];
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--fly-x', `${fromX - (rect.left + rect.width / 2)}px`);
      card.style.setProperty('--fly-y', `${fromY - (rect.top + rect.height / 2)}px`);
      card.style.setProperty('--fly-delay', `${index * 90}ms`);
    });
    wrap.classList.add('is-flying');
    box.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [open, animate]);

  const renderCard = (group) => (
    <section key={group.id} aria-labelledby={`skill-${group.id}`}>
      <h3 id={`skill-${group.id}`}>{group.title}</h3>
      <ul>
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );

  return (
    <section className="section" id="skills" aria-labelledby="skills-heading">
      <Reveal>
        <p className="chapter-index">Toolbox</p>
        <h2 id="skills-heading">
          What I use <em className="accent-phrase">in the work</em>
        </h2>
        <p className="lede">
          Labels, not ratings. Technical fluency means I can specify and prototype with these tools. I am not claiming to
          be a specialist engineer.
        </p>
        <div ref={wrapRef} className={open ? 'toolbox is-open' : 'toolbox'}>
          {open ? (
            <div id="toolbox-above" className="skill-grid toolbox-row toolbox-row--above">
              {above.map(renderCard)}
            </div>
          ) : null}
          <button
            ref={boxRef}
            type="button"
            className="toolbox-button"
            onClick={openBox}
            aria-expanded={open}
            aria-controls="toolbox-above toolbox-below"
          >
            <ToolboxIcon />
            <span className="toolbox-label">{open ? 'Toolbox' : 'Open the toolbox'}</span>
          </button>
          {open ? (
            <div id="toolbox-below" className="skill-grid toolbox-row toolbox-row--below">
              {below.map(renderCard)}
            </div>
          ) : null}
        </div>
      </Reveal>
      <Hairline />
    </section>
  );
}

export function Education() {
  return (
    <section className="section" id="education" aria-labelledby="education-heading">
      <Reveal>
        <p className="chapter-index">Credentials</p>
        <h2 id="education-heading">
          Study <em className="accent-phrase">and certifications</em>
        </h2>
        <div className="edu-layout">
          <ul className="edu-list">
            {education.map((item) => (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <p className="timeline-org">
                  {item.org}
                  <span>{item.dates}</span>
                </p>
                {item.note ? <p>{item.note}</p> : null}
              </li>
            ))}
          </ul>
          <div>
            <h3 className="cert-heading">Certifications</h3>
            <ul className="cert-list">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
      <Hairline />
    </section>
  );
}

export function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-heading">
      <Reveal>
        <div className="contact-panel">
          <p className="chapter-index">Contact</p>
          <h2 id="contact-heading">
            Start with the work, <em className="accent-phrase">then write to me</em>
          </h2>
          <p className="lede">Email and LinkedIn are how to reach me. I do not run a contact form here.</p>
          <div className="contact-actions">
            <ExternalLink className="button" href={contact.mailto}>
              {contact.email}
            </ExternalLink>
            <ExternalLink className="button button--ghost" href={contact.linkedin}>
              LinkedIn
            </ExternalLink>
            <ResumeButton className="button button--ghost" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
