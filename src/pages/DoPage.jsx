import { useState } from 'react';
import {
  dayJobAgents,
  dayJobArchitecture,
  dayJobByoa,
  dayJobGuardrails,
  dayJobHero,
  dayJobLeadership,
  dayJobPillars,
  dayJobStats,
  dayJobWizard,
} from '../content/dayJob';
import { AppLink } from '../hooks/useRoute';
import ExperimentFrame from '../components/portfolio/ExperimentFrame';

const pillars = ['All', 'Growth', 'Retention', 'Efficiency', 'Experience'];

function statusKey(status) {
  if (status === 'Custom live') return 'custom';
  if (status === 'In development') return 'dev';
  if (status === 'Suite roadmap') return 'roadmap';
  return 'live';
}

function pillarCount(name) {
  if (name === 'All') return dayJobAgents.length;
  return dayJobAgents.filter((agent) => agent.pillar === name).length;
}

export default function DoPage() {
  const [pillar, setPillar] = useState('All');
  const [agentId, setAgentId] = useState(dayJobAgents[0].id);
  const [mode, setMode] = useState('wizard');
  const [byoaId, setByoaId] = useState(dayJobByoa[0].id);
  const [stackOpen, setStackOpen] = useState(true);

  const visible = dayJobAgents.filter((agent) => pillar === 'All' || agent.pillar === pillar);
  const selected = visible.find((agent) => agent.id === agentId) || visible[0] || dayJobAgents[0];
  const scenario = dayJobByoa.find((item) => item.id === byoaId) || dayJobByoa[0];

  function choosePillar(next) {
    setPillar(next);
    const nextList = dayJobAgents.filter((agent) => next === 'All' || agent.pillar === next);
    if (!nextList.some((agent) => agent.id === agentId)) setAgentId(nextList[0].id);
  }

  function chooseAgent(id) {
    setAgentId(id);
    if (window.matchMedia('(max-width: 899px)').matches) {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      document.getElementById('day-study')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    }
  }

  return (
    <ExperimentFrame
      tone="do"
      title="My day job | Kandarp Mathur"
      description="Kandarp Mathur owns OMAP at AltaDX, a fleet of 11 agents for health clubs, plus the self-serve launch and the guardrails around billing and phone."
    >
      <section className="day-hero">
        <p className="exp-kicker">{dayJobHero.kicker}</p>
        <h1>{dayJobHero.title}</h1>
        <p className="exp-lede day-lede">
          At <strong>AltaDX</strong> I own <strong>OMAP®</strong>, the Outcomes Micro Agent Platform. It replaces
          generic AI chatbots with 11 specialized digital hires tied to revenue, retention, and how a health club
          actually staffs the floor.
        </p>
        <ul className="day-stats">
          {dayJobStats.map((stat) => (
            <li key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
        <div className="day-cta">
          <AppLink className="button" to="/do#fleet">
            Explore the 11 agents
          </AppLink>
          <AppLink className="button button--ghost" to="/do#selfserve">
            How operators launch agents
          </AppLink>
        </div>
        <nav className="day-jump" aria-label="On this page">
          <AppLink to="/do#thesis">Thesis</AppLink>
          <AppLink to="/do#fleet">Agents</AppLink>
          <AppLink to="/do#selfserve">Self-serve</AppLink>
          <AppLink to="/do#guardrails">Trust</AppLink>
          <AppLink to="/do#leadership">Pods and stack</AppLink>
        </nav>
      </section>

      <section className="day-section" id="thesis">
        <p className="exp-kicker">01 · Product thesis</p>
        <h2>Digital hires, not another chatbot</h2>
        <p className="day-copy">
          Operators are not asking for another dashboard. The desk is short-staffed, leads go uncalled, dues fall
          behind, and members leave for reasons the club could have answered. OMAP is organized around four outcomes.
        </p>
        <ul className="day-pillars">
          {dayJobPillars.map((item) => (
            <li key={item.id} className="day-card">
              <p className="day-badge">{item.name}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <p className="day-meta">{item.agents}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="day-section" id="fleet">
        <p className="exp-kicker">02 · The fleet</p>
        <h2>Inside the 11 agents</h2>
        <p className="day-copy">
          Pick an agent for the operator problem, the path a member or staff member takes, the product decision, and
          the outcomes I am aiming at. These are targets, not a results claim.
        </p>
        <div className="day-filters" role="toolbar" aria-label="Filter agents">
          {pillars.map((name) => (
            <button
              key={name}
              type="button"
              className={name === pillar ? 'day-filter is-on' : 'day-filter'}
              aria-pressed={name === pillar}
              onClick={() => choosePillar(name)}
            >
              {name === 'All' ? 'All 11' : name} ({pillarCount(name)})
            </button>
          ))}
          <p className="day-count">
            Showing {visible.length} of {dayJobAgents.length}
          </p>
        </div>
        <div className="day-explore">
          <ul className="day-agents">
            {visible.map((agent) => (
              <li key={agent.id}>
                <button
                  type="button"
                  className={agent.id === selected.id ? 'day-agent is-selected' : 'day-agent'}
                  aria-pressed={agent.id === selected.id}
                  onClick={() => chooseAgent(agent.id)}
                >
                  <span className="day-agent-top">
                    <span className="day-badge">{agent.pillar}</span>
                    <span className={`day-status day-status--${statusKey(agent.status)}`}>
                      {agent.status}
                    </span>
                  </span>
                  <strong>{agent.name}</strong>
                  <span>{agent.hook}</span>
                </button>
              </li>
            ))}
          </ul>
          <article className="day-study" id="day-study" aria-live="polite">
            <p className="day-agent-top">
              <span className="day-badge">{selected.pillar}</span>
              <span className={`day-status day-status--${statusKey(selected.status)}`}>
                {selected.status}
              </span>
            </p>
            <h3>{selected.name}</h3>
            <p className="day-study-sub">{selected.subtitle}</p>
            <h4>Before OMAP</h4>
            <p className="day-problem">{selected.problem}</p>
            <h4>How it runs</h4>
            <ol className="day-steps">
              {selected.journey.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <h4>The decision</h4>
            <p className="day-decision">{selected.decision}</p>
            <h4>Outcomes I am aiming at</h4>
            <ul className="day-kpis">
              {selected.kpis.map((kpi) => (
                <li key={kpi}>{kpi}</li>
              ))}
            </ul>
            <p className="day-stack">{selected.stack}</p>
          </article>
        </div>
      </section>

      <section className="day-section" id="selfserve">
        <p className="exp-kicker">03 · Time to value</p>
        <h2>How a non-technical operator launches an agent</h2>
        <p className="day-copy">
          Multi-club rollouts cannot wait on an engineering pod for every setup. There are two paths: a four-step
          launch for the core agents, and a studio for a workflow we do not ship as a standard hire.
        </p>
        <div className="day-filters" role="tablist" aria-label="Launch path">
          <button
            type="button"
            className={mode === 'wizard' ? 'day-filter is-on' : 'day-filter'}
            aria-pressed={mode === 'wizard'}
            onClick={() => setMode('wizard')}
          >
            4-step launch
          </button>
          <button
            type="button"
            className={mode === 'byoa' ? 'day-filter is-on' : 'day-filter'}
            aria-pressed={mode === 'byoa'}
            onClick={() => setMode('byoa')}
          >
            Build your own agent
          </button>
        </div>
        {mode === 'wizard' ? (
          <ol className="day-wizard">
            {dayJobWizard.map((step) => (
              <li key={step.step} className="day-card">
                <p className="day-meta">
                  Step {step.step} · {step.label}
                </p>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <p className="day-outcome">{step.outcome}</p>
              </li>
            ))}
          </ol>
        ) : (
          <div className="day-byoa">
            <div>
              <h3>Plain language in, a blueprint out</h3>
              <p className="day-copy">
                The operator picks a starting point or describes the job. Five parts of the agent fill in as they go.
              </p>
              <div className="day-filters" role="toolbar" aria-label="Starter templates">
                {dayJobByoa.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={item.id === scenario.id ? 'day-filter is-on' : 'day-filter'}
                    aria-pressed={item.id === scenario.id}
                    onClick={() => setByoaId(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <blockquote className="day-prompt">
                <p className="day-meta">What the operator types</p>
                <p>{scenario.prompt}</p>
              </blockquote>
              <p className="day-outcome">{scenario.note}</p>
            </div>
            <div className="day-canvas">
              <p className="day-meta">Assembled spec</p>
              <h3>{scenario.title}</h3>
              <dl>
                <div>
                  <dt>Brain</dt>
                  <dd>{scenario.brain}</dd>
                </div>
                <div>
                  <dt>Knowledge</dt>
                  <dd>{scenario.knowledge}</dd>
                </div>
                <div>
                  <dt>Tools</dt>
                  <dd>{scenario.tools}</dd>
                </div>
                <div>
                  <dt>Trigger</dt>
                  <dd>{scenario.trigger}</dd>
                </div>
                <div>
                  <dt>Channels</dt>
                  <dd>{scenario.channels}</dd>
                </div>
              </dl>
            </div>
          </div>
        )}
      </section>

      <section className="day-section" id="guardrails">
        <p className="exp-kicker">04 · Trust</p>
        <h2>What the model is not allowed to improvise</h2>
        <p className="day-copy">
          The hard product decisions are the ones that keep an agent away from billing, identity, and a live phone
          call unless the rule is already decided.
        </p>
        <ul className="day-guard">
          {dayJobGuardrails.map((item) => (
            <li key={item.title} className="day-card">
              <p className="day-badge">{item.pillar}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <p className="day-meta">{item.tradeoff}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="day-section" id="leadership">
        <p className="exp-kicker">05 · Execution</p>
        <h2>Four pods, and the stack under them</h2>
        <p className="day-copy">
          I keep discovery, the sprint cadence, and the architecture in the same conversation with the people building
          it.
        </p>
        <ul className="day-lead">
          {dayJobLeadership.map((item) => (
            <li key={item.title} className="day-card">
              <p className="exp-kicker">{item.kicker}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
        <div className="day-drawer">
          <button
            type="button"
            className="day-drawer-toggle"
            aria-expanded={stackOpen}
            onClick={() => setStackOpen((open) => !open)}
          >
            <span>
              <strong>Under the hood</strong>
              <span>Enough of the architecture to work the latency, routing, and state questions with engineering.</span>
            </span>
            <span className="day-badge">{stackOpen ? 'Hide' : 'Show'}</span>
          </button>
          {stackOpen ? (
            <ul className="day-arch">
              {dayJobArchitecture.map((item) => (
                <li key={item.tag}>
                  <p className="day-meta">{item.tag}</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>
    </ExperimentFrame>
  );
}
