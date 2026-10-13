import { contact, education, profile } from './site';

export const resumeDownload = {
  filename: 'Kandarp_Mathur_Resume.pdf',
  summary:
    'AI Product Manager and Product Owner in Ahmedabad. I turn complex business problems into useful AI products, from discovery and product definition to prototypes, delivery, and continuous improvement. At AltaDX I define OMAP product behaviour and coordinate delivery across four pods. I also founded Round1, a voice interview product, and I build independent products to test product decisions directly.',

  competencies: [
    'Product discovery and problem framing',
    'Agentic AI workflows and evaluation guardrails',
    'PRDs, user journeys, and acceptance criteria',
    'Clickable prototypes',
    'Roadmap prioritisation and MVP definition',
    'Backlog management and multi-pod delivery',
    'Sprint and release reporting',
    'SQL, Power BI, and API collaboration',
  ],

  experience: [
    {
      title: 'Product Owner and Project Manager, OMAP',
      company: 'AltaDX',
      location: 'Ahmedabad, India',
      period: 'Jun 2025 to present',
      bullets: [
        'Define agent behaviour, configuration flows, and business rules for non-technical operators at fitness and wellness businesses.',
        'Research competitors and client feedback to decide which capabilities to build, improve, or remove.',
        'Write PRDs and clickable HTML prototypes, then work with business analysts on Jira Product Discovery items, stories, and acceptance criteria.',
        'Coordinate backlog, capacity, sprint planning, ceremonies, risks, and stakeholder updates across four delivery pods.',
        'Corrected sprint reporting by separating QA Hold and defects found in QA from new scope, so the reported growth matched the work that had actually been added.',
      ],
    },
    {
      title: 'Business Analyst',
      company: 'KTek Resourcing',
      location: 'India',
      period: 'Jan 2019 to Mar 2025',
      bullets: [
        'Led requirements, solution design, and delivery coordination for recruitment systems, API integrations, and enterprise reporting.',
        'Translated stakeholder needs into specifications, user stories, and testable acceptance criteria.',
        'Improved onboarding efficiency by 30% through workflow redesign, automation, and tighter feedback loops.',
      ],
    },
    {
      title: 'Reporting Analyst',
      company: 'Wealth IT Global',
      location: 'India',
      period: 'Jan 2014 to Dec 2018',
      bullets: [
        'Built reporting in Excel, Power BI, and SQL for leadership and operations.',
        'Reduced manual reporting effort by 40% through automation, scheduled refreshes, and standardised KPI definitions.',
      ],
    },
    {
      title: 'Trainer',
      company: 'Qpid Outsourcing',
      location: 'India',
      period: 'Jun 2013 to Dec 2013',
      bullets: [
        'Designed and delivered learning programmes, SOPs, and cross-functional workshops.',
      ],
    },
  ],

  products: [
    {
      name: 'Round1, founder, not employment',
      period: 'Nov 2025 to present. First client onboarded 2 Jul 2026.',
      tagline: 'Voice screening for a first-round interview, with explicit scoring limits.',
      bullets: [
        'A client completed 153 interviews through Round1 over three months, as reported in October 2026. That is product usage, not interviews I conducted.',
        'Described rules include job-description-led questions, an 80/20 technical-to-communication weight, a minimum-answer gate, recommendation bands, and an integrity signal that is not proof of dishonesty.',
        'No hire-quality, bias, time-saved, or revenue result is claimed.',
      ],
    },
    {
      name: 'Chirppy, independent weekend project',
      period: 'Demo-ready MVP',
      tagline: 'Buyer answers grounded in a developer’s own brochures and price lists.',
      bullets: [
        'Qualifies interest, estimates EMI, and supports site-visit booking without inventing prices or RERA claims.',
        'A review found a tenant-isolation issue. Isolation is treated as a product requirement. Self-serve readiness is not claimed.',
      ],
    },
    {
      name: 'Ask Mandy, independent weekend project',
      period: 'In progress',
      tagline: 'No-account voice practice that scores only answered questions.',
      bullets: [
        'One role-relevant question at a time, progressive difficulty, and an early-exit path.',
        'No public price or usage figure is listed. A prior price note is not treated as current.',
      ],
    },
    {
      name: 'Nivesh Pustika, independent weekend project',
      period: 'Public site: niveshpustika.in',
      tagline: 'A free journal for closed trades in Indian markets.',
      bullets: [
        'Manual entry, rupee P&L, futures and options lot sizes, win rate, profit factor, and an equity curve.',
        'No broker sync and no investment advice. Launch review included OTP abuse limits, bot protection, and error handling.',
      ],
    },
    {
      name: 'Analystbychance, founder initiative',
      period: 'Separate from the AI product case studies',
      tagline: 'Mentorship for recruiters and HR professionals moving into BA, Scrum Master, and Product Owner roles.',
      bullets: [
        'One-to-one guidance, a three to five month sequence, three live sessions a week, mock interviews, and placement support.',
      ],
    },
  ],

  education: [
    {
      degree: education[0].title,
      school: education[0].org,
      period: 'In progress, October 2026',
      note: 'Currently pursuing. Not completed.',
    },
    {
      degree: education[1].title,
      school: education[1].org,
      period: '2009 to 2013',
      note: 'Engineering training later used in analytical product work.',
    },
  ],

  certifications: [
    'Certified ScrumMaster (CSM®)',
    'SAFe® 6 Product Owner / Product Manager',
    'Salesforce Certified AI Associate',
    'Registered Scrum Basics™',
  ],

  skills: {
    'Product strategy and discovery': [
      'Discovery',
      'Competitor research',
      'Problem framing',
      'Prioritisation',
      'MVP definition',
      'Product metrics',
    ],
    'AI product management': [
      'Agent behaviour',
      'Retrieval grounding',
      'Scoring guardrails',
      'Failure states',
      'Human-in-the-loop design',
    ],
    'Delivery and tools': [
      'Jira and Jira Product Discovery',
      'Confluence',
      'Four-pod coordination',
      'SQL',
      'Power BI',
      'Excel',
    ],
  },

  highlights: [
    '4 delivery pods coordinated at AltaDX (scope of coordination, October 2026).',
    '153 interviews completed by a Round1 client over three months, reported October 2026.',
    '30% onboarding efficiency improvement at KTek Resourcing.',
    '40% reduction in manual reporting effort at Wealth IT Global.',
  ],

  contact: {
    name: profile.name,
    city: profile.location,
    headline: profile.role,
    email: contact.email,
    linkedin: contact.linkedin,
    linkedinHandle: contact.linkedinLabel,
  },
};
