import { getCaseStudy } from '../content/caseStudies';
import { experience, omapAgents } from '../content/site';
import { AppLink } from '../hooks/useRoute';
import { ExternalLink } from '../components/portfolio/Chrome';
import ExperimentFrame from '../components/portfolio/ExperimentFrame';

export default function DoPage() {
  const altadx = experience.find((job) => job.id === 'altadx');
  const earlier = experience.filter((job) => job.id !== 'altadx');
  const omap = getCaseStudy('omap-agentic-ai');

  return (
    <ExperimentFrame
      tone="do"
      title="What I do | Kandarp Mathur"
      description="Kandarp Mathur's employment, from the OMAP product role at AltaDX back through business analysis, reporting, and training."
    >
      <p className="exp-kicker">Employment</p>
      <h1>See what I do</h1>
      <p className="exp-lede">The roles I was hired for, newest first. This is the day job, not the products I founded.</p>

      {altadx ? (
        <article className="exp-block">
          <p className="exp-kicker">
            {altadx.org} · {altadx.dates}
          </p>
          <h2>{altadx.title}</h2>
          <p>{altadx.summary}</p>
          <ul className="exp-points">
            {altadx.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p>
            The team is about 25 people across 4 pods: business analysts, QA, leads, developers, AI engineers, data,
            and RPA. I keep the backlog about three sprints ahead.
          </p>
          <ul className="exp-agents" aria-label="OMAP agents">
            {omapAgents.map((agent) => (
              <li key={agent.id}>
                {agent.name} <small>{agent.status}</small>
              </li>
            ))}
          </ul>
          <p>
            A reporting correction separated QA Hold and QA-found defects from new scope, so one sprint read 7.5%
            scope growth instead of 64.5%. That fixed the measurement. It did not shrink the work.
          </p>
          <p className="exp-links">
            {omap ? (
              <AppLink className="text-link" to={omap.path}>
                Read the OMAP case study
              </AppLink>
            ) : null}
            {omap?.links?.[0]?.href ? (
              <ExternalLink className="text-link" href={omap.links[0].href}>
                {omap.site}
              </ExternalLink>
            ) : null}
          </p>
        </article>
      ) : null}

      {earlier.map((job) => (
        <article key={job.id} className="exp-block">
          <p className="exp-kicker">
            {job.org} · {job.dates}
          </p>
          <h2>{job.title}</h2>
          <p>{job.summary}</p>
          <ul className="exp-points">
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </ExperimentFrame>
  );
}
