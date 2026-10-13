import { getFeaturedStudies, getIndependentStudies } from '../../content/caseStudies';
import {
  about,
  certifications,
  contact,
  education,
  experience,
  founderInitiative,
  getPublicMetrics,
  processSteps,
  profile,
  skillGroups,
} from '../../content/site';
import { AppLink } from '../../hooks/useRoute';
import { ExternalLink, ResumeButton } from './Chrome';

function ProjectCard({ study, featured = false }) {
  return (
    <article className={featured ? 'project-card project-card--featured' : 'project-card'}>
      <p className="card-kicker">
        <span>{study.categoryLabel}</span>
        <span aria-hidden="true">/</span>
        <span>{study.statusLabel}</span>
      </p>
      <h3>{study.cardTitle}</h3>
      <p className="card-role">
        {study.role}
        <span className="card-year">{study.year}</span>
      </p>
      <p className="card-summary">{study.summary}</p>
      <AppLink className="text-link" to={study.path}>
        Read case study
      </AppLink>
    </article>
  );
}

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="eyebrow">{profile.location}</p>
        <p className="hero-name">{profile.name}</p>
        <p className="hero-role">{profile.role}</p>
        <h1 id="hero-heading">{profile.valueProposition}</h1>
        <p className="hero-support">{profile.supporting}</p>
        <div className="hero-actions">
          <AppLink className="button" to="/#work">
            Explore selected work
          </AppLink>
          <ResumeButton />
          <ExternalLink className="text-link" href={contact.linkedin}>
            Connect on LinkedIn
          </ExternalLink>
        </div>
      </div>
      <aside className="hero-motif" aria-label="Product workflow">
        <p className="eyebrow">From discovery to delivery</p>
        <ol>
          {processSteps.map((step) => (
            <li key={step.id}>
              <span>{step.step}</span>
              <AppLink to="/#approach">{step.title}</AppLink>
            </li>
          ))}
        </ol>
      </aside>
    </section>
  );
}

export function ProofStrip() {
  const items = getPublicMetrics();

  return (
    <section className="proof" aria-labelledby="proof-heading">
      <h2 id="proof-heading" className="sr-only">
        Approved evidence
      </h2>
      {items.length === 0 ? (
        <p className="empty-state">No publicly approved proof points are marked for display.</p>
      ) : (
        <ul className="proof-grid">
          {items.map((metric) => (
            <li key={metric.id}>
              <p className="proof-value">{metric.value}</p>
              <p className="proof-label">{metric.label}</p>
              <p className="proof-scope">{metric.scope}</p>
              <p className="proof-asof">{metric.asOf}</p>
            </li>
          ))}
        </ul>
      )}
      <p className="proof-note">
        The Round1 count is product usage by a client. It is not a count of interviews Kandarp conducted.
        The pod count is coordination scope. The percentages are earlier employment outcomes.
      </p>
    </section>
  );
}

export function FeaturedWork() {
  const studies = getFeaturedStudies();

  return (
    <section className="section" id="work" aria-labelledby="work-heading">
      <div className="section-intro">
        <p className="eyebrow">Featured work</p>
        <h2 id="work-heading">OMAP and Round1</h2>
        <p className="lede">
          OMAP is full-time product work at AltaDX. Round1 is a founder product. They are not the same kind of role, and the pages keep that boundary visible.
        </p>
      </div>
      {studies.length === 0 ? (
        <p className="empty-state">Featured case studies are not available.</p>
      ) : (
        <div className="card-grid card-grid--featured">
          {studies.map((study) => (
            <ProjectCard key={study.slug} study={study} featured />
          ))}
        </div>
      )}
    </section>
  );
}

export function IndependentWork() {
  const studies = getIndependentStudies();

  return (
    <section className="section section--tight" id="projects" aria-labelledby="projects-heading">
      <div className="section-intro">
        <p className="eyebrow">Independent projects</p>
        <h2 id="projects-heading">Weekend products</h2>
        <p className="lede">
          Chirppy, Ask Mandy, and Nivesh Pustika are independent weekend projects. They are separate from employment and from founder companies.
        </p>
      </div>
      {studies.length === 0 ? (
        <p className="empty-state">Independent projects are not available.</p>
      ) : (
        <div className="card-grid card-grid--three">
          {studies.map((study) => (
            <ProjectCard key={study.slug} study={study} />
          ))}
        </div>
      )}
    </section>
  );
}

export function Approach() {
  return (
    <section className="section" id="approach" aria-labelledby="approach-heading">
      <div className="section-intro">
        <p className="eyebrow">How I work</p>
        <h2 id="approach-heading">Five steps, used as a guide rather than a script</h2>
        <p className="lede">
          Not every project passes through these steps in order. The sequence is how I keep an AI idea tied to a workflow, a rule, and a release.
        </p>
      </div>
      <ol className="process-list">
        {processSteps.map((step) => (
          <li key={step.id}>
            <span className="process-step">{step.step}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
      <ul className="principle-list">
        <li>AI behaviour is a product-design problem, not only a prompt.</li>
        <li>Guardrails need a failure state: grounded retrieval, explicit scores, a way out, and honest uncertainty.</li>
        <li>Simplifying a workflow can be worth more than another feature.</li>
        <li>A delivery report should separate new scope from QA Hold and from defects found in QA.</li>
        <li>A prototype can test an assumption early. It is not automatically ready for customers.</li>
      </ul>
    </section>
  );
}

export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-heading">
      <div className="section-intro">
        <p className="eyebrow">Experience</p>
        <h2 id="experience-heading">Employment timeline</h2>
        <p className="lede">
          Full-time roles only. Round1 and Analystbychance are founder work and sit outside this list.
        </p>
      </div>
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.id}>
            <p className="timeline-dates">{job.dates}</p>
            <div className="timeline-body">
              <h3>{job.title}</h3>
              <p className="timeline-org">
                {job.org}
                <span>{job.location}</span>
              </p>
              <p>{job.summary}</p>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <div className="section-intro">
        <p className="eyebrow">About</p>
        <h2 id="about-heading">Career evolution</h2>
        <p className="lede">{about.lead}</p>
      </div>
      <div className="prose">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <aside className="founder-note">
        <p className="card-kicker">
          <span>{founderInitiative.category}</span>
          <span aria-hidden="true">/</span>
          <span>{founderInitiative.role}</span>
        </p>
        <h3>{founderInitiative.name}</h3>
        <p>{founderInitiative.summary}</p>
        <p className="founder-boundary">{founderInitiative.note}</p>
        <ExternalLink className="text-link" href={founderInitiative.href}>
          analystbychance.com
        </ExternalLink>
      </aside>
    </section>
  );
}

export function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-heading">
      <div className="section-intro">
        <p className="eyebrow">Skills</p>
        <h2 id="skills-heading">What I use in the work</h2>
        <p className="lede">
          Labels, not ratings. Technical fluency means I can specify and prototype with these tools. It is not a claim that I am a specialist engineer.
        </p>
      </div>
      <div className="skill-grid">
        {skillGroups.map((group) => (
          <section key={group.id} aria-labelledby={`skill-${group.id}`}>
            <h3 id={`skill-${group.id}`}>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section className="section" id="education" aria-labelledby="education-heading">
      <div className="section-intro">
        <p className="eyebrow">Education and certifications</p>
        <h2 id="education-heading">Study and credentials</h2>
      </div>
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
    </section>
  );
}

export function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-heading">
      <div className="contact-panel">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-heading">Start with the work, then write</h2>
        <p className="lede">
          Email and LinkedIn are the contact paths. There is no form on this site.
        </p>
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
    </section>
  );
}
