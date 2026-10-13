/**
 * Public portfolio facts. October 2026 knowledge base.
 * Render a metric only when publiclyApproved is true.
 * Platform-wide OMAP commercial figures are not copied here.
 * Add them only after public disclosure is approved.
 */

export const siteUrl = '';

export const profile = {
  name: 'Kandarp Mathur',
  location: 'Ahmedabad, India',
  role: 'AI Product Manager | Agentic AI | Product Strategy & Delivery',
  valueProposition:
    'I turn complex business problems into useful AI products, from discovery and product definition to prototypes, delivery, and continuous improvement.',
  supporting:
    'I connect discovery, agent behaviour, requirements, prototypes, and cross-functional delivery.',
};

export const pageMeta = {
  title: 'Kandarp Mathur | AI Product Manager',
  description:
    'Kandarp Mathur is an AI Product Manager who turns complex business problems into useful AI products, from discovery and product definition through prototypes, delivery, and improvement.',
};

export const navigation = [
  { id: 'work', label: 'Selected work', href: '/#work' },
  { id: 'projects', label: 'Projects', href: '/#projects' },
  { id: 'approach', label: 'Approach', href: '/#approach' },
  { id: 'experience', label: 'Experience', href: '/#experience' },
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
];

export const contact = {
  email: 'mathurkandarp@gmail.com',
  mailto: 'mailto:mathurkandarp@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kandarpmathur14/',
  linkedinLabel: 'linkedin.com/in/kandarpmathur14',
  location: 'Ahmedabad, India',
};

/**
 * Static resume file. Drop the PDF at public/Kandarp_Mathur_Resume.pdf
 * when a designed file should replace the generated download.
 * Until that file exists, the site prepares Kandarp_Mathur_Resume.pdf in the browser.
 */
export const resumeAsset = {
  filename: 'Kandarp_Mathur_Resume.pdf',
  publicPath: '/Kandarp_Mathur_Resume.pdf',
  placeholder: 'public/Kandarp_Mathur_Resume.pdf',
};

export const metrics = [
  {
    id: 'pods',
    value: '4',
    label: 'Delivery pods coordinated',
    scope: 'AltaDX product delivery. This is coordination scope, not a headcount claim.',
    asOf: 'October 2026',
    publiclyApproved: true,
    sourceNote: 'Knowledge base proof strip.',
  },
  {
    id: 'round1-interviews',
    value: '153',
    label: 'Interviews a client completed',
    scope: 'Round1 product usage over three months. Kandarp did not conduct these interviews.',
    asOf: 'Reported October 2026',
    publiclyApproved: true,
    sourceNote: 'One client. Not a revenue or customer-count claim.',
  },
  {
    id: 'ktek-onboarding',
    value: '30%',
    label: 'Onboarding efficiency improvement',
    scope: 'KTek Resourcing, through workflow redesign, automation, and tighter feedback loops.',
    asOf: 'January 2019 to March 2025',
    publiclyApproved: true,
    sourceNote: 'Employment outcome.',
  },
  {
    id: 'wealth-reporting',
    value: '40%',
    label: 'Less manual reporting effort',
    scope: 'Wealth IT Global, through automation, scheduled refreshes, and standard KPI definitions.',
    asOf: 'January 2014 to December 2018',
    publiclyApproved: true,
    sourceNote: 'Employment outcome.',
  },
];

export function getPublicMetrics() {
  return metrics.filter((metric) => metric.publiclyApproved === true && metric.value);
}

export const processSteps = [
  {
    id: 'discover',
    step: '01',
    title: 'Discover',
    text: 'Understand the user, the business context, the current workflow, the evidence, and the constraints.',
  },
  {
    id: 'frame',
    step: '02',
    title: 'Frame',
    text: 'Define the problem, the desired outcome, the assumptions, the risks, and what success means.',
  },
  {
    id: 'define',
    step: '03',
    title: 'Define',
    text: 'Prioritise the MVP, write requirements, map journeys, and specify AI behaviour and failure states.',
  },
  {
    id: 'prototype',
    step: '04',
    title: 'Prototype and validate',
    text: 'Build clickable or working prototypes, test realistic cases, review edge cases, and refine.',
  },
  {
    id: 'deliver',
    step: '05',
    title: 'Deliver and learn',
    text: 'Align teams, keep the backlog and release honest, inspect usage and feedback, and iterate.',
  },
];

export const experience = [
  {
    id: 'altadx',
    org: 'AltaDX',
    title: 'Product Owner and Project Manager, OMAP',
    dates: 'June 2025 to present',
    location: 'Ahmedabad, India',
    summary:
      'Product definition and delivery for an agentic AI platform serving fitness and wellness operators.',
    points: [
      'Research competitors and client feedback to decide which capabilities to build, improve, or remove.',
      'Define agent behaviour, user journeys, setup flows, and business rules so non-technical operators can configure agents.',
      'Write PRDs and product documentation, and create clickable HTML prototypes and early screen concepts.',
      'Work with business analysts to convert ideas and PRDs into Jira Product Discovery items, stories, and acceptance criteria.',
      'Manage backlog, capacity planning, sprint planning and closure, ceremonies, reviews, delivery risks, and stakeholder updates across four pods.',
      'Refine product metrics and release communication, including a reporting correction that separated QA Hold and QA-found defects from new scope.',
    ],
  },
  {
    id: 'ktek',
    org: 'KTek Resourcing',
    title: 'Business Analyst',
    dates: 'January 2019 to March 2025',
    location: 'India',
    summary:
      'Requirements, solution design, and delivery coordination for recruitment systems, API integrations, and enterprise reporting.',
    points: [
      'Translated stakeholder needs into specifications, user stories, and testable acceptance criteria.',
      'Improved onboarding efficiency by 30% through workflow redesign, automation, and tighter stakeholder feedback loops.',
    ],
  },
  {
    id: 'wealth',
    org: 'Wealth IT Global',
    title: 'Reporting Analyst',
    dates: 'January 2014 to December 2018',
    location: 'India',
    summary: 'Reporting and analytics for leadership and operations.',
    points: [
      'Reduced manual reporting effort by 40% through automation, scheduled refreshes, and standardised KPI definitions in Excel, Power BI, and SQL.',
    ],
  },
  {
    id: 'qpid',
    org: 'Qpid Outsourcing',
    title: 'Trainer',
    dates: 'June 2013 to December 2013',
    location: 'India',
    summary: 'Learning programmes and operating consistency.',
    points: [
      'Designed and delivered learning programmes, SOPs, and cross-functional workshops.',
    ],
  },
];

export const about = {
  lead:
    'I am a product owner and AI product builder. I turn complex workflows into products people can use.',
  paragraphs: [
    'The work combines discovery, requirements, AI behaviour, evaluation guardrails, prototyping, prioritisation, and delivery. At AltaDX I help lead product definition and delivery for OMAP. Outside that role I build independent products so the decisions stay concrete.',
    'The career path runs from training, to reporting and analytics, to recruitment systems and business analysis, and then to product ownership and AI product building. That path is an evolution toward product leadership: users, workflows, data, requirements, and delivery in one line of work.',
  ],
};

export const founderInitiative = {
  name: 'Analystbychance',
  role: 'Founder and mentor',
  category: 'Founder initiative',
  href: 'https://analystbychance.com',
  verified: true,
  verifiedAsOf: '12 October 2026',
  summary:
    'One-to-one mentorship for recruiters, HR professionals, and staffing professionals who want to move into Business Analyst, Scrum Master, and Product Owner roles while staying employed. The sequence runs about three to five months, with three live sessions a week, mock interviews, and placement support.',
  note: 'This is founder and mentoring work. It is separate from full-time employment and from the AI product case studies.',
};

export const skillGroups = [
  {
    id: 'strategy',
    title: 'Product strategy and discovery',
    items: [
      'Product discovery',
      'Market and competitor research',
      'Customer feedback',
      'Problem framing',
      'Capability prioritisation',
      'Roadmap planning',
      'MVP definition',
      'Product metrics',
      'Pricing and packaging',
      'Go-to-market basics',
    ],
  },
  {
    id: 'ai',
    title: 'AI product management',
    items: [
      'Agentic AI workflows',
      'Agent behaviour definition',
      'Retrieval-grounded generation',
      'Evaluation and scoring guardrails',
      'Human-in-the-loop design',
      'AI quality review',
      'Conversation design',
      'Failure-state design',
    ],
  },
  {
    id: 'design',
    title: 'Product design and analysis',
    items: [
      'PRDs',
      'User journeys',
      'Business rules',
      'Process documentation',
      'Clickable HTML prototypes',
      'User stories',
      'Acceptance criteria',
      'KPI frameworks',
      'Requirements traceability',
      'UAT',
    ],
  },
  {
    id: 'delivery',
    title: 'Delivery leadership',
    items: [
      'Cross-functional coordination',
      'Four-pod delivery coordination',
      'Capacity planning',
      'Backlog management',
      'Sprint planning',
      'Agile ceremonies',
      'Sprint and release reporting',
      'Dependency and risk tracking',
      'Stakeholder updates',
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    items: [
      'Jira',
      'Jira Product Discovery',
      'Confluence',
      'Slack workflows',
      'Cursor',
      'Claude Code',
    ],
  },
  {
    id: 'technical',
    title: 'Technical fluency',
    items: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'OpenAI',
      'Deepgram',
      'ElevenLabs',
      'APIs',
      'SQL',
      'Power BI',
      'Excel',
      'Snowflake',
      'Databricks',
    ],
  },
];

export const education = [
  {
    id: 'bitsom',
    title: 'Product Management with Gen and Agentic AI',
    org: 'BITSoM-Masai',
    dates: 'In progress as of October 2026',
    note: 'Currently pursuing. This programme is not completed.',
  },
  {
    id: 'rgpv',
    title: 'Bachelor of Engineering, Mechanical Engineering',
    org: 'Rajiv Gandhi Prodyogiki Vishwavidyalaya (RGPV)',
    dates: '2009 to 2013',
    note: 'Engineering training that later supported analytical product work.',
  },
];

export const certifications = [
  'Certified ScrumMaster (CSM®)',
  'SAFe® 6 Product Owner / Product Manager',
  'Salesforce Certified AI Associate',
  'Registered Scrum Basics™',
];
