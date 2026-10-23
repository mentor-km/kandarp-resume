import { getCaseStudy } from '../content/caseStudies';
import { founderInitiative, tryfunzo } from '../content/site';
import { AppLink } from '../hooks/useRoute';
import { ExternalLink } from '../components/portfolio/Chrome';
import ExperimentFrame from '../components/portfolio/ExperimentFrame';

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

export default function BuiltPage() {
  const round1 = getCaseStudy('round1');

  return (
    <ExperimentFrame
      tone="built"
      title="What I built | Kandarp Mathur"
      description="Products Kandarp Mathur founded or built: Round1, Analystbychance, Chirppy, Ask Mandy, Nivesh Pustika, and Tryfunzo."
    >
      <p className="exp-kicker">Founder and mentor</p>
      <h1>Explore what I built</h1>
      <p className="exp-lede">Round1, the mentoring practice, and the other products I have taken from an idea toward something a person can use.</p>

      <article className="exp-block">
        <p className="exp-kicker">Live · round1.in</p>
        <h2>Round1</h2>
        <p>
          I built a voice interview for the first round. The interview follows the job description, then the recruiter
          gets a debrief: recommendation, skill ratings, transcript, integrity signals, and a PDF. One staffing client
          completed 153 interviews on it over three months. I did not conduct those interviews. Plans are credit-based,
          from $49 to $399 a month.
        </p>
        <p>
          Scoring is weighted 80/20 technical to communication, with a minimum-answer gate. Integrity signals can hold
          a recommendation back. They do not invent a penalty. Speech moved off the browser API onto Deepgram so phones
          and Safari stay in the room.
        </p>
        <p className="exp-links">
          {round1 ? (
            <AppLink className="text-link" to={round1.path}>
              Read the Round1 case study
            </AppLink>
          ) : null}
          <ExternalLink className="text-link" href="https://round1.in">
            round1.in
          </ExternalLink>
        </p>
      </article>

      <article className="exp-block">
        <p className="exp-kicker">Live · analystbychance.com</p>
        <h2>Analystbychance</h2>
        <p>{founderInitiative.summary}</p>
        <p>About 50 people have gone through it into business analysis, Scrum, or product roles.</p>
        <p className="exp-links">
          <ExternalLink className="text-link" href={founderInitiative.href}>
            analystbychance.com
          </ExternalLink>
        </p>
      </article>

      <div className="exp-grid">
        {products.map((item) => {
          const study = getCaseStudy(item.study);
          if (!study) return null;
          return (
            <article key={item.study} className="exp-block">
              <p className="exp-kicker">
                {study.statusLabel} · {study.site}
              </p>
              <h2>{study.cardTitle || study.title}</h2>
              <p>{item.summary}</p>
              <p className="exp-links">
                <AppLink className="text-link" to={study.path}>
                  Case study
                </AppLink>
                {study.links?.[0]?.href ? (
                  <ExternalLink className="text-link" href={study.links[0].href}>
                    {study.site}
                  </ExternalLink>
                ) : null}
              </p>
            </article>
          );
        })}
        <article className="exp-block">
          <p className="exp-kicker">
            {tryfunzo.status} · {tryfunzo.site}
          </p>
          <h2>{tryfunzo.name}</h2>
          <p>{tryfunzo.summary}</p>
          <p>{tryfunzo.points[1]}</p>
        </article>
      </div>
    </ExperimentFrame>
  );
}
