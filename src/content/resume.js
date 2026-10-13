import { contact, experience, profile as siteProfile } from './site';

export const profile = {
  name: siteProfile.name,
  city: siteProfile.location,
  headline: siteProfile.role,
  tagline: siteProfile.valueProposition,
  email: contact.email,
  linkedin: contact.linkedin,
  linkedinHandle: contact.linkedinLabel,
};

export const chapters = [
  {
    id: 'who',
    number: '01',
    title: 'Who I Am',
    subtitle: 'Opening',
    blocks: [
      { type: 'lead', text: profile.tagline },
      {
        type: 'paragraph',
        text: 'I am a product owner and AI product builder in Ahmedabad. I connect discovery, agent behaviour, prototypes, and delivery.',
      },
      {
        type: 'meta',
        items: [
          { label: 'Location', value: profile.city },
          { label: 'Focus', value: 'Agentic AI, product strategy, and delivery' },
        ],
      },
    ],
  },
  {
    id: 'arc',
    number: '02',
    title: 'The Arc',
    subtitle: 'Employment',
    blocks: [
      {
        type: 'paragraph',
        text: 'The path runs from training, to reporting, to business analysis, and then to product ownership. Founder work sits outside this employment list.',
      },
      {
        type: 'timeline',
        items: experience.map((job) => ({
          period: job.dates,
          role: job.title,
          org: job.org,
          detail: job.summary,
        })),
      },
    ],
  },
  {
    id: 'altadx',
    number: '03',
    title: 'AltaDX, OMAP',
    subtitle: 'Professional work',
    blocks: [
      {
        type: 'paragraph',
        text: 'Since June 2025 I have been Product Owner and Project Manager for OMAP, an agentic AI platform for fitness and wellness operators.',
      },
      {
        type: 'list',
        title: 'What I own',
        items: [
          'Competitor research, client feedback, and capability prioritisation',
          'Agent behaviour, configuration flows, PRDs, and clickable HTML prototypes',
          'Stories and acceptance criteria with business analysts, in Jira Product Discovery',
          'Backlog, capacity, and sprint coordination across four pods',
        ],
      },
      {
        type: 'highlight',
        text: 'Platform-wide commercial figures are not published. A reporting correction improved accuracy. It did not shrink real scope from 64.5% to 7.5%.',
      },
    ],
  },
  {
    id: 'round1',
    number: '04',
    title: 'Round1',
    subtitle: 'Founder, not employment',
    blocks: [
      {
        type: 'paragraph',
        text: 'Round1 is a founder product for voice-based first-round screening. Building started in November 2025. The first client was onboarded on 2 July 2026.',
      },
      {
        type: 'quote',
        text: 'A client completed 153 interviews through Round1 over three months, as reported in October 2026.',
      },
      {
        type: 'list',
        title: 'Product rules',
        items: [
          'Questions follow the job description',
          'Technical weighting 80, communication 20, stated explicitly',
          'A minimum-answer gate sits in front of a full recommendation',
          'Integrity cues are signals, not proof of dishonesty',
        ],
      },
    ],
  },
  {
    id: 'abc',
    number: '05',
    title: 'Analystbychance',
    subtitle: 'Founder initiative',
    blocks: [
      {
        type: 'paragraph',
        text: 'Analystbychance is mentorship for recruiters, HR professionals, and staffing professionals moving into Business Analyst, Scrum Master, and Product Owner roles while staying employed. It is separate from the AI product case studies.',
      },
    ],
  },
  {
    id: 'craft',
    number: '06',
    title: 'How I Work',
    subtitle: 'Approach',
    blocks: [
      {
        type: 'paragraph',
        text: 'Discover, frame, define, prototype and validate, then deliver and learn. AI behaviour needs a failure state, and a simpler workflow can beat another feature.',
      },
      {
        type: 'chips',
        title: 'Certifications',
        items: ['CSM', 'SAFe 6 POPM', 'Salesforce AI Associate', 'Registered Scrum Basics'],
      },
    ],
  },
  {
    id: 'proof',
    number: '07',
    title: 'Proof',
    subtitle: 'Approved figures only',
    blocks: [
      {
        type: 'stats',
        items: [
          { value: '4', label: 'Delivery pods coordinated at AltaDX' },
          { value: '153', label: 'Interviews a Round1 client completed' },
          { value: '30%', label: 'Onboarding efficiency at KTek' },
          { value: '40%', label: 'Less manual reporting at Wealth IT Global' },
        ],
      },
    ],
  },
  {
    id: 'contact',
    number: '08',
    title: 'Contact',
    subtitle: 'Email and LinkedIn',
    blocks: [
      {
        type: 'paragraph',
        text: 'Email and LinkedIn are the contact paths.',
      },
      {
        type: 'links',
        items: [
          { label: 'Email', href: `mailto:${profile.email}`, value: profile.email },
          { label: 'LinkedIn', href: profile.linkedin, value: profile.linkedinHandle },
        ],
      },
    ],
  },
];
