import { useState } from 'react';
import {
  ownCareer,
  ownCerts,
  ownFilters,
  ownHero,
  ownPrinciples,
  ownStats,
  ownVentures,
  round1Origin,
  round1Scenarios,
} from '../content/ownTime';
import { AppLink } from '../hooks/useRoute';
import { ExternalLink } from '../components/portfolio/Chrome';
import ExperimentFrame from '../components/portfolio/ExperimentFrame';

function countFor(filterId) {
  if (filterId === 'all') return ownVentures.length;
  return ownVentures.filter((item) => item.filter === filterId).length;
}

export default function BuiltPage() {
  const [scenarioId, setScenarioId] = useState(round1Scenarios[0].id);
  const [filter, setFilter] = useState('all');
  const [ventureId, setVentureId] = useState(ownVentures[0].id);

  const scenario = round1Scenarios.find((item) => item.id === scenarioId) || round1Scenarios[0];
  const visible = ownVentures.filter((item) => filter === 'all' || item.filter === filter);
  const venture = visible.find((item) => item.id === ventureId) || visible[0];

  function chooseFilter(next) {
    setFilter(next);
    const nextList = ownVentures.filter((item) => next === 'all' || item.filter === next);
    if (!nextList.some((item) => item.id === ventureId)) setVentureId(nextList[0].id);
  }

  function chooseVenture(id) {
    setVentureId(id);
    if (window.matchMedia('(max-width: 899px)').matches) {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      document.getElementById('own-venture')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    }
  }

  return (
    <ExperimentFrame
      tone="built"
      title="Things I built | Kandarp Mathur"
      description="Products Kandarp Mathur built on his own time: Round1, Chirppy, Ask Mandy, Nivesh Pustika, Analyst by Chance, and Tryfunzo."
    >
      <section className="day-hero">
        <p className="exp-kicker">{ownHero.kicker}</p>
        <h1>
          {ownHero.titleLead}
          <span className="own-title-rest">{ownHero.title}</span>
        </h1>
        <p className="exp-lede day-lede">{ownHero.lede}</p>
        <ul className="day-stats">
          {ownStats.map((stat) => (
            <li key={stat.label}>
              <span className="own-stat-top">
                <strong>{stat.value}</strong>
                <span className="day-badge">{stat.badge}</span>
              </span>
              <span>{stat.label}</span>
              <p className="own-sub">{stat.note}</p>
            </li>
          ))}
        </ul>
        <div className="day-cta">
          <AppLink className="button" to="/built#round1">
            Round1
          </AppLink>
          <AppLink className="button button--ghost" to="/built#products">
            All six products
          </AppLink>
        </div>
        <nav className="day-jump" aria-label="On this page">
          <AppLink to="/built#round1">Round1</AppLink>
          <AppLink to="/built#products">Products</AppLink>
          <AppLink to="/built#principles">How I build</AppLink>
          <AppLink to="/built#foundation">Background</AppLink>
        </nav>
      </section>

      <section className="day-section" id="round1">
        <p className="exp-kicker">{round1Origin.kicker}</p>
        <h2>{round1Origin.title}</h2>
        <p className="day-copy">{round1Origin.summary}</p>
        <p className="exp-links">
          <ExternalLink className="button" href={round1Origin.href}>
            round1.in
          </ExternalLink>
        </p>
        <div className="own-flagship">
          <article className="day-card">
            <p className="day-agent-top">
              {round1Origin.pills.map((pill) => (
                <span key={pill} className="day-badge">
                  {pill}
                </span>
              ))}
            </p>
            <h3>{round1Origin.heading}</h3>
            <p>{round1Origin.body}</p>
            <p className="day-decision">{round1Origin.quote}</p>
            <ul className="own-decisions">
              {round1Origin.decisions.map((item) => (
                <li key={item.title}>
                  <p className="day-agent-top">
                    <strong>{item.title}</strong>
                    <span className="day-badge">{item.tag}</span>
                  </p>
                  <p>{item.body}</p>
                </li>
              ))}
            </ul>
          </article>
          <article className="day-study">
            <p className="exp-kicker">How a score is held back</p>
            <h3>Three candidates, same rules</h3>
            <div className="day-filters" role="tablist" aria-label="Round1 scenarios">
              {round1Scenarios.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={item.id === scenario.id ? 'day-filter is-on' : 'day-filter'}
                  aria-pressed={item.id === scenario.id}
                  onClick={() => setScenarioId(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <p className="day-study-sub">
              {scenario.candidate} · {scenario.band}
            </p>
            <p className="day-badge">{scenario.recommendation}</p>
            <ul className="own-scores">
              <li>
                <span>Overall</span>
                <strong>{scenario.overall}</strong>
              </li>
              <li>
                <span>Technical, 80%</span>
                <strong>{scenario.tech}</strong>
              </li>
              <li>
                <span>Communication, 20%</span>
                <strong>{scenario.comm}</strong>
              </li>
            </ul>
            <p className="day-meta">{scenario.integrity}</p>
            <ul className="own-skills">
              {scenario.skills.map((skill) => (
                <li key={skill.name}>
                  <span>
                    <strong>{skill.name}</strong>
                    <small>{skill.note}</small>
                  </span>
                  <span className={skill.rating === 'Not assessed' ? 'day-badge' : 'day-meta'}>{skill.rating}</span>
                </li>
              ))}
            </ul>
            <p className="day-decision">{scenario.note}</p>
          </article>
        </div>
      </section>

      <section className="day-section" id="products">
        <p className="exp-kicker">02 · The six</p>
        <h2>What each product is for</h2>
        <p className="day-copy">
          The problem, the path a person takes, the rule that keeps the model honest, and where it actually is.
        </p>
        <div className="day-filters" role="toolbar" aria-label="Filter products">
          {ownFilters.map((item) => (
            <button
              key={item.id}
              type="button"
              className={item.id === filter ? 'day-filter is-on' : 'day-filter'}
              aria-pressed={item.id === filter}
              onClick={() => chooseFilter(item.id)}
            >
              {item.label} ({countFor(item.id)})
            </button>
          ))}
        </div>
        <div className="day-explore">
          <ul className="day-agents">
            {visible.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={item.id === venture.id ? 'day-agent is-selected' : 'day-agent'}
                  aria-pressed={item.id === venture.id}
                  onClick={() => chooseVenture(item.id)}
                >
                  <span className="day-agent-top">
                    <span className="day-badge">{item.status}</span>
                    <span className="day-meta">{item.domain}</span>
                  </span>
                  <strong>{item.name}</strong>
                  <span>{item.hook}</span>
                </button>
              </li>
            ))}
          </ul>
          <article className="day-study" id="own-venture" aria-live="polite">
            <p className="day-agent-top">
              <span className="day-badge">{venture.status}</span>
              <span className="day-meta">{venture.role}</span>
            </p>
            <h3>
              {venture.name} <span className="day-study-sub">{venture.domain}</span>
            </h3>
            <p>{venture.oneliner}</p>
            {venture.href ? (
              <p className="exp-links">
                <ExternalLink className="text-link" href={venture.href}>
                  {venture.domain}
                </ExternalLink>
              </p>
            ) : (
              <p className="day-meta">Not live yet. Named here, not linked.</p>
            )}
            <h4>Why it exists</h4>
            <p className="day-problem">
              <strong>{venture.frictionTitle}. </strong>
              {venture.friction}
            </p>
            <h4>{venture.wedgeTitle}</h4>
            <ul className="own-points">
              {venture.wedge.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <h4>{venture.guardTitle}</h4>
            <ul className="own-points">
              {venture.guard.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <h4>{venture.tractionTitle}</h4>
            <ul className="own-points">
              {venture.traction.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <ul className="day-kpis">
              {venture.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="day-section" id="principles">
        <p className="exp-kicker">03 · How I build</p>
        <h2>What the night builds changed in the day job</h2>
        <ul className="day-guard">
          {ownPrinciples.map((item) => (
            <li key={item.title} className="day-card">
              <p className="exp-kicker">{item.kicker}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <p className="day-meta">{item.proof}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="day-section" id="foundation">
        <p className="exp-kicker">04 · Background</p>
        <h2>The jobs that started the products</h2>
        <div className="own-flagship">
          <article className="day-card">
            <ul className="own-decisions">
              {ownCareer.map((job) => (
                <li key={job.title}>
                  <p className="day-agent-top">
                    <strong>{job.title}</strong>
                    <span className="day-badge">{job.when}</span>
                  </p>
                  <p>{job.body}</p>
                </li>
              ))}
            </ul>
          </article>
          <article className="day-card">
            <p className="exp-kicker">Credentials</p>
            <h3>Formal product and AI study, plus the degree</h3>
            <ul className="own-certs">
              {ownCerts.map((item) => (
                <li key={item.name}>
                  <strong>{item.name}</strong>
                  <span>{item.org}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </ExperimentFrame>
  );
}
