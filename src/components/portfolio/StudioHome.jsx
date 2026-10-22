import { useState } from 'react';
import { getCaseStudy } from '../../content/caseStudies';
import {
  certifications,
  contact,
  education,
  experience,
  founderInitiative,
  omapAgents,
  portraitAsset,
  profile,
  tryfunzo,
} from '../../content/site';
import { AppLink } from '../../hooks/useRoute';
import { DocumentLinks, ExternalLink } from './Chrome';

const products = [
  {
    study: 'chirppy',
    summary:
      'A demo-ready chatbot for Indian real estate developers. Brochure-grounded answers, Hinglish, lead qualification, EMI, and visit booking. Retrieval rules stop it inventing price or RERA claims.',
  },
  {
    study: 'ask-mandy',
    summary:
      'A voice mock interview with no account. Role-based booking and a ₹99 UPI checkout. Scoring stays inside the questions the person actually answered.',
  },
  {
    study: 'nivesh-pustika',
    summary:
      'A free trading-journal app for Indian markets. Rupee P&L, F&O lot sizes, and a daily sync of about 98,000 Zerodha Kite instruments.',
  },
];

const sharedAgentNote =
  'I define behaviour, journeys, setup, and business rules for this agent, then get it into the sprint with the pods. I am not publishing per-agent commercial results.';

export default function StudioHome() {
  const [agentId, setAgentId] = useState(omapAgents[0].id);
  const agent = omapAgents.find((item) => item.id === agentId) || omapAgents[0];
  const round1 = getCaseStudy('round1');
  const omap = getCaseStudy('omap-agentic-ai');
  const earlier = experience.filter((job) => job.id !== 'altadx');

  return (
    <>
      <section className="studio-hero" id="hero" aria-labelledby="hero-heading">
        <div className="studio-copy">
          <p className="studio-kicker">
            <span className="studio-dot" aria-hidden="true" />
            Enterprise agentic AI and 0-to-1 founder
          </p>
          <p className="hero-hello">Hey, I&apos;m</p>
          <h1 id="hero-heading" className="hero-name">
            {profile.name}
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="studio-lede">
            At AltaDX I own product definition and delivery for OMAP, from a single Concierge agent to a suite of 11
            agents across 4 pods. I also founded Round1 and Analystbychance, and I still build the smaller products
            myself.
          </p>
          <DocumentLinks />
          <p className="studio-mail">
            <a href={contact.mailto}>{contact.email}</a>
          </p>
        </div>
        <aside className="studio-card" aria-label="Profile">
          <div className="studio-photo">
            <img src={portraitAsset.publicPath} alt={portraitAsset.alt} width="1200" height="1200" />
          </div>
          <div className="studio-card-body">
            <p className="studio-card-name">
              {profile.name}
              <span>11+ years in technology</span>
            </p>
            <p className="studio-card-place">{profile.location}</p>
            <p>Product owner for OMAP at AltaDX. Founder of Round1 and Analystbychance.</p>
            <p className="studio-cert">AWS Certified AI Business Strategist</p>
          </div>
        </aside>
      </section>

      <ul className="studio-stats" aria-label="Figures from my resume">
        <li>
          <strong>11+</strong>
          <span>OMAP agents in the suite</span>
        </li>
        <li>
          <strong>153</strong>
          <span>Round1 interviews one client completed</span>
        </li>
        <li>
          <strong>4</strong>
          <span>Delivery pods I coordinate</span>
        </li>
        <li>
          <strong>25+</strong>
          <span>People across those pods</span>
        </li>
      </ul>

      <section className="section studio-block" id="agents" aria-labelledby="agents-heading">
        <p className="chapter-index">AltaDX</p>
        <h2 id="agents-heading">
          OMAP, the agent suite <em className="accent-phrase">I am shipping</em>
        </h2>
        <p className="lede">
          OMAP lets a fitness or wellness business configure digital agents inside the work it already runs. I take it
          from client discovery to PRDs, prototypes, and sprint delivery. Pick an agent to see where it sits.
        </p>
        <div className="agent-layout">
          <div className="agent-grid" role="list">
            {omapAgents.map((item) => (
              <button
                key={item.id}
                type="button"
                role="listitem"
                className={item.id === agent.id ? 'agent-chip is-on' : 'agent-chip'}
                aria-pressed={item.id === agent.id}
                onClick={() => setAgentId(item.id)}
              >
                <span>{item.name}</span>
                <small>{item.status}</small>
              </button>
            ))}
          </div>
          <article className="agent-detail" aria-live="polite">
            <p className="card-kicker">{agent.status}</p>
            <h3>{agent.name}</h3>
            <p>{agent.note || sharedAgentNote}</p>
            <p>
              The team is about 25 people across 4 pods: business analysts, QA, leads, developers, AI engineers, data,
              and RPA. I keep the backlog about three sprints ahead. A reporting correction separated QA Hold and
              QA-found defects from new scope, so one sprint read 7.5% scope growth instead of 64.5%. That fixed the
              measurement. It did not shrink the work.
            </p>
            {omap ? (
              <AppLink className="text-link" to={omap.path}>
                Read the OMAP case study
              </AppLink>
            ) : null}
          </article>
        </div>
      </section>

      <section className="section studio-block" id="founder" aria-labelledby="founder-heading">
        <p className="chapter-index">Founder</p>
        <h2 id="founder-heading">
          Round1 and <em className="accent-phrase">the mentoring practice</em>
        </h2>
        <div className="studio-split">
          <article className="studio-panel">
            <p className="card-kicker">Live · round1.in</p>
            <h3>Round1</h3>
            <p>
              I built a voice interview for the first round. The interview follows the job description, then the
              recruiter gets a debrief: recommendation, skill ratings, transcript, integrity signals, and a PDF. One
              staffing client completed 153 interviews on it over three months. I did not conduct those interviews.
              Plans are credit-based, from $49 to $399 a month.
            </p>
            <p>
              Scoring is weighted 80/20 technical to communication, with a minimum-answer gate. Integrity signals can
              hold a recommendation back. They do not invent a penalty. Speech moved off the browser API onto Deepgram
              so phones and Safari stay in the room.
            </p>
            {round1 ? (
              <AppLink className="text-link" to={round1.path}>
                Read the Round1 case study
              </AppLink>
            ) : null}
            <ExternalLink className="text-link" href="https://round1.in">
              round1.in
            </ExternalLink>
          </article>
          <article className="studio-panel">
            <p className="card-kicker">Live · analystbychance.com</p>
            <h3>Analystbychance</h3>
            <p>{founderInitiative.summary}</p>
            <p>About 50 people have gone through it into business analysis, Scrum, or product roles.</p>
            <ExternalLink className="text-link" href={founderInitiative.href}>
              analystbychance.com
            </ExternalLink>
          </article>
        </div>
      </section>

      <section className="section studio-block" id="builds" aria-labelledby="builds-heading">
        <p className="chapter-index">Products</p>
        <h2 id="builds-heading">
          Other things <em className="accent-phrase">I have built</em>
        </h2>
        <div className="studio-cards">
          {products.map((item) => {
            const study = getCaseStudy(item.study);
            if (!study) return null;
            return (
              <article key={item.study} className="studio-panel">
                <p className="card-kicker">
                  {study.statusLabel} · {study.site}
                </p>
                <h3>{study.cardTitle || study.title}</h3>
                <p>{item.summary}</p>
                <AppLink className="text-link" to={study.path}>
                  Case study
                </AppLink>
                {study.links?.[0]?.href ? (
                  <ExternalLink className="text-link" href={study.links[0].href}>
                    {study.site}
                  </ExternalLink>
                ) : null}
              </article>
            );
          })}
          <article className="studio-panel">
            <p className="card-kicker">
              {tryfunzo.status} · {tryfunzo.site}
            </p>
            <h3>{tryfunzo.name}</h3>
            <p>{tryfunzo.summary}</p>
            <p>{tryfunzo.points[1]}</p>
          </article>
        </div>
        <div className="studio-earlier">
          <h3>Before AltaDX</h3>
          <ul>
            {earlier.map((job) => (
              <li key={job.id}>
                <strong>{job.org}</strong>
                <span>
                  {job.title} · {job.dates}
                </span>
                <p>{job.points[0]}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section studio-block" id="credentials" aria-labelledby="credentials-heading">
        <p className="chapter-index">Credentials</p>
        <h2 id="credentials-heading">
          Study and <em className="accent-phrase">certification</em>
        </h2>
        <ul className="studio-certs">
          {certifications.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="studio-edu">
          {education.map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong>
              <span>
                {item.org} · {item.dates}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section studio-block studio-contact" id="contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading">
          If you want the paper, <em className="accent-phrase">take both</em>
        </h2>
        <p className="lede">The resume and the cover letter are the files I am sending with applications.</p>
        <DocumentLinks />
        <ul className="studio-contact-links">
          <li>
            <a href={contact.mailto}>{contact.email}</a>
          </li>
          <li>
            <ExternalLink href={contact.linkedin}>LinkedIn</ExternalLink>
          </li>
          <li>
            <ExternalLink href={contact.github}>GitHub</ExternalLink>
          </li>
        </ul>
      </section>
    </>
  );
}
