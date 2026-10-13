import { AppLink } from '../../hooks/useRoute';
import { ExternalLink } from './Chrome';

function Illustrative({ media }) {
  if (!media) return null;

  return (
    <figure className="mock">
      <figcaption>
        <span className="eyebrow">Illustrative</span>
        {media.title}
      </figcaption>
      {media.messages ? (
        <div className="mock-thread">
          {media.messages.map((message) => (
            <p key={message.text} className={message.from === 'Buyer' ? 'mock-bubble mock-bubble--in' : 'mock-bubble'}>
              <span>{message.from}</span>
              {message.text}
            </p>
          ))}
        </div>
      ) : (
        <dl className="mock-rows">
          {media.rows.map((row) => (
            <div key={row.label}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      )}
      <p className="mock-note">{media.caption}</p>
    </figure>
  );
}

function DecisionGrid({ decisions }) {
  return (
    <div className="decision-stack">
      {decisions.map((item) => (
        <article key={item.decision} className="decision-card">
          <h3>{item.problem}</h3>
          <dl>
            <div>
              <dt>Decision</dt>
              <dd>{item.decision}</dd>
            </div>
            <div>
              <dt>Trade-off</dt>
              <dd>{item.tradeoff}</dd>
            </div>
            <div>
              <dt>Evidence</dt>
              <dd>{item.evidence}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}

export default function CaseStudyView({ study }) {
  const toc = [
    ['context', 'Context'],
    ['role', 'Role'],
    ['problem', 'Problem'],
    ['decisions', 'Decisions'],
    ['journey', 'Journey'],
    study.rules ? ['rules', study.rules.title] : null,
    ['delivery', 'Delivery'],
    ['outcomes', 'Outcomes'],
    ['learnings', 'Learnings'],
  ].filter(Boolean);

  return (
    <article className="study">
      <header className="study-hero">
        <p className="card-kicker">
          <span>{study.categoryLabel}</span>
          <span aria-hidden="true">/</span>
          <span>{study.statusLabel}</span>
        </p>
        <h1>{study.title}</h1>
        <p className="lede">{study.outcome}</p>
        <dl className="study-meta">
          <div>
            <dt>Role</dt>
            <dd>{study.role}</dd>
          </div>
          <div>
            <dt>Dates</dt>
            <dd>{study.dates}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{study.statusLabel}</dd>
          </div>
        </dl>
        {study.links.length > 0 ? (
          <p className="study-links">
            {study.links.map((link) => (
              <ExternalLink key={link.href} className="text-link" href={link.href}>
                {link.verified ? link.label : `${link.label} (availability not confirmed)`}
              </ExternalLink>
            ))}
          </p>
        ) : (
          <p className="proof-scope">No public website is listed for this project.</p>
        )}
      </header>

      <div className="study-layout">
        <nav className="study-toc" aria-label="On this page">
          <ul>
            {toc.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
          <AppLink className="text-link" to="/#work">
            All selected work
          </AppLink>
        </nav>

        <div className="study-body">
          <Illustrative media={study.media} />

          <section id="context">
            <h2>Context and target user</h2>
            <p>{study.context}</p>
            <p>{study.audience}</p>
          </section>

          <section id="role">
            <h2>Role and ownership</h2>
            <ul>
              {study.ownership.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{study.boundaries}</p>
          </section>

          <section id="problem">
            <h2>Problem, constraints, and evidence</h2>
            <p>{study.problem}</p>
            <h3>Constraints</h3>
            <ul>
              {study.constraints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>Assumptions</h3>
            <ul>
              {study.assumptions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>Evidence used</h3>
            <ul>
              {study.evidenceInputs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section id="decisions">
            <h2>Decisions and trade-offs</h2>
            <DecisionGrid decisions={study.decisions} />
          </section>

          <section id="journey">
            <h2>User journey</h2>
            <ol className="flow">
              {study.journey.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </li>
              ))}
            </ol>
          </section>

          {study.rules ? (
            <section id="rules">
              <h2>{study.rules.title}</h2>
              <div className="rule-grid">
                {study.rules.items.map((rule) => (
                  <article key={rule.title}>
                    <h3>{rule.title}</h3>
                    <p>{rule.detail}</p>
                    <p className="rule-failure">
                      <span>Failure state</span>
                      {rule.failure}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          <section id="delivery">
            <h2>Collaboration and delivery</h2>
            <p>{study.collaboration}</p>
          </section>

          <section id="outcomes">
            <h2>Outcomes</h2>
            <ul className="outcome-list">
              {study.outcomes.map((item) => (
                <li key={item.text}>
                  <span>{item.kind}</span>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section id="learnings">
            <h2>Learnings and what to test next</h2>
            <ul>
              {study.lessons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>Next validation</h3>
            <ul>
              {study.next.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <p className="study-end">
            <AppLink className="text-link" to="/#work">
              Back to selected work
            </AppLink>
          </p>
        </div>
      </div>
    </article>
  );
}
