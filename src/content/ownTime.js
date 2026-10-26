export const ownHero = {
  kicker: 'Things I built on my own time · 0-to-1',
  titleLead: 'I don’t just write PRDs.',
  title: 'I ship 0-to-1 AI products with real users and payments.',
  lede:
    'By day I am the product owner for OMAP at AltaDX: 4 pods, about 25 people, and 11 live enterprise agents. On nights and weekends I turn gaps from 6+ years in staffing, enterprise delivery, and Indian consumer markets into live products. I define the wedge, the scoring and anti-hallucination rules, and take the build from zero to someone who pays.',
};

export const ownStats = [
  {
    value: '200+',
    badge: '153+ client verified',
    label: 'Interviews run on Round1',
    note: '153+ were completed by Cliff Services, the first paying client. I did not conduct them. Their screens moved from 1–3 a day to 10–12, submitted the same day.',
  },
  {
    value: '6',
    badge: '0-to-1',
    label: 'Independent products',
    note: 'Round1, Chirppy, Ask Mandy, Nivesh Pustika, Analyst by Chance, and Tryfunzo. From the brief to checkout.',
  },
  {
    value: '50+',
    badge: '1-on-1',
    label: 'Career switchers guided',
    note: 'Recruiters and HR people moving into business analyst, Scrum master, and product owner roles through Analyst by Chance.',
  },
  {
    value: '98K+',
    badge: 'Daily sync',
    label: 'Kite instruments indexed',
    note: 'A daily NSE, BSE, and NFO lot-size and rupee P&L sync behind the Nivesh Pustika journal.',
  },
];

export const round1Origin = {
  kicker: '01 · Flagship',
  title: 'Round1, voice screening for the first round',
  summary:
    'I conceived it and shipped it over five months of nights and weekends, while working full-time, from a staffing problem to a paying agency client.',
  href: 'https://round1.in',
  pills: ['Live', 'Staffing and IT services', '$49 / $149 / $399'],
  heading: 'Six years in staffing showed the same blind spot',
  body: 'Recruiters shortlist five or six people for a client’s technical round from keywords and gut feel, because that role is not an engineering role. When all five miss the client’s bar, the agency loses credibility and still cannot tell whether the person was weak, coached, or simply the wrong fit.',
  quote:
    'I did not call Round1 “your own AI recruiter.” A competitor already owned that line, and an AI should not pretend to make the hire. Round1 screens and recommends. A human decides.',
  decisions: [
    {
      title: 'A fixed question count, not a countdown',
      tag: 'Fairness',
      body: 'Each seniority band gets the same 10 to 16 questions. The interview does not end early because someone talks fast.',
    },
    {
      title: 'Real transcripts changed the voice stack',
      tag: 'Quality',
      body: 'Five live transcripts showed six report and Safari audio problems. Speech moved server-side to Deepgram, the mute control that broke listening came out, and Growth recordings went from 30 to 45 minutes.',
    },
    {
      title: 'Credits, and a refund when nobody shows',
      tag: 'Pricing',
      body: 'Plans are $49, $149, and $399, plus a $199 light hire. Ten credits is one interview. A no-show returns the credit. Cliff Services, on the Growth plan, went from 1–3 screens a day to 10–12 and started submitting the same day.',
    },
  ],
};

export const round1Scenarios = [
  {
    id: 'bluffer',
    label: 'Eloquent bluffer',
    hint: 'Polished, shallow',
    candidate: 'Candidate #104 · Full-stack engineer, 4 years',
    band: '12 fixed questions · mid-senior',
    recommendation: 'Borderline / hold for L1',
    overall: '61 / 100',
    tech: '54 / 100',
    comm: '89 / 100',
    integrity: 'Low (12%) · clean browser session',
    skills: [
      { name: 'React state and rendering', rating: '2.5 / 5', note: 'Vague on the follow-up' },
      { name: 'Node.js async and the event loop', rating: '3.0 / 5', note: 'Surface explanation' },
      { name: 'PostgreSQL indexes and query plans', rating: '2.0 / 5', note: 'Missed the composite index trade-off' },
      { name: 'GraphQL schema design, in the JD', rating: 'Not assessed', note: 'Not asked, so not scored down' },
    ],
    note: 'Without the 80/20 weight and the 58–64 calibration band, an 89 communication score would have lifted this person to about 72 and wasted an engineering lead’s L1 slot.',
  },
  {
    id: 'suspicion',
    label: 'Assisted signal',
    hint: 'Strong answers, odd pauses',
    candidate: 'Candidate #119 · Senior backend, 6 years',
    band: '14 fixed questions · senior',
    recommendation: 'Capped at review carefully',
    overall: '78 / 100, capped',
    tech: '81 / 100',
    comm: '66 / 100',
    integrity: 'High (74%) · 6 tab switches and a 9s pause',
    skills: [
      { name: 'Distributed locking and Redis', rating: '4.5 / 5', note: 'Textbook, after a 9 second pause' },
      { name: 'Microservices idempotency', rating: '4.0 / 5', note: 'Strong structure, stiff cadence' },
      { name: 'Live follow-up on their own project', rating: '2.5 / 5', note: 'Struggled when asked to go deeper' },
      { name: 'Kubernetes HPA tuning, in the JD', rating: 'Not assessed', note: 'Not asked, so not scored down' },
    ],
    note: 'A high signal caps the recommendation tier. It is a signal for the recruiter to read the transcript, not automatic proof.',
  },
  {
    id: 'strong',
    label: 'Ready for L1',
    hint: 'Depth, clean session',
    candidate: 'Candidate #142 · Senior React and TypeScript, 5 years',
    band: '14 fixed questions · senior',
    recommendation: 'Strong submit to client L1',
    overall: '84 / 100',
    tech: '85 / 100',
    comm: '80 / 100',
    integrity: 'Low (8%) · no tab switches',
    skills: [
      { name: 'Next.js App Router and SSR caching', rating: '4.5 / 5', note: 'Concrete production examples' },
      { name: 'TypeScript generics', rating: '4.0 / 5', note: 'Handled the follow-up' },
      { name: 'Web performance and Core Web Vitals', rating: '4.5 / 5', note: 'Named the bundle-split impact' },
      { name: 'CI/CD and Playwright', rating: '4.0 / 5', note: 'Checked against an earlier answer' },
    ],
    note: 'This is the packet Cliff Services attached. The scored PDF and transcript let them move from 1–3 screens a day to 10–12 and submit the same day.',
  },
];

export const ownFilters = [
  { id: 'all', label: 'All 6' },
  { id: 'voice', label: 'Voice' },
  { id: 'fintech', label: 'Fintech and consumer' },
  { id: 'career', label: 'Mentorship' },
];

export const ownVentures = [
  {
    id: 'round1',
    name: 'Round1',
    domain: 'round1.in',
    href: 'https://round1.in',
    filter: 'voice',
    status: 'Live · paying client',
    role: 'Founder and solo product builder, Nov 2025 – now',
    hook: 'A voice screen between the recruiter shortlist and the client’s first technical round.',
    oneliner:
      'The recruiter pastes a job description. The candidate joins in the browser. The packet is a recommendation, 80/20 skill ratings, a transcript, an integrity signal, and a PDF.',
    frictionTitle: 'Non-technical recruiters gating technical submissions',
    friction:
      'Five shortlisted people fail the client’s engineering bar, and the agency still cannot tell why.',
    wedgeTitle: 'No login for the candidate',
    wedge: [
      'The recruiter pastes the JD. The candidate opens a browser link.',
      'The interview is 10 to 16 questions for that seniority, and it probes a vague answer.',
      'The packet is a recommendation, 1-to-5 skill ratings, the transcript, the integrity signal, and a PDF.',
    ],
    guardTitle: '80/20 scoring, and unasked skills stay unasked',
    guard: [
      'Technical substance is 80 percent. Communication is 20, calibrated so an average candidate lands around 58–64. A polished talker cannot hide a thin answer.',
      'A skill the interview never reached is “not assessed,” not a zero.',
      'Five live transcripts fixed six report issues, removed the mute button that broke listening, and moved speech to Deepgram Nova-2 so phones and Safari stay in the room.',
    ],
    tractionTitle: '200+ interviews, and a paying staffing client',
    traction: [
      'Cliff Services, on the Growth plan, completed 153 of them. I did not conduct the interviews. Their volume went from 1–3 a day to 10–12, submitted the same day.',
      'Credits are $49, $149, and $399 a month, plus a $199 light hire. Ten credits is one interview. A no-show returns the credit through Dodo.',
      'Alongside the product: a 318-company, 636-contact outbound tracker, LinkedIn sequences for the business development hire, and a /try demo.',
    ],
    stack: ['Next.js', 'TypeScript', 'Deepgram Nova-2', 'ElevenLabs Flash v2.5', 'GPT-4o', 'Supabase', 'Dodo Payments'],
  },
  {
    id: 'chirppy',
    name: 'Chirppy',
    domain: 'getchirppy.com',
    href: 'https://getchirppy.com',
    filter: 'voice',
    status: 'Demo-ready',
    role: 'Founder, 2026 weekend build',
    hook: 'A Hinglish sales widget for Indian developers, grounded in the brochure, with EMI and site-visit cards.',
    oneliner:
      'Buyers ask about a project after the office closes. Answers come from the brochure, the EMI math is inline, and a site visit can be booked.',
    frictionTitle: 'Portal spend goes cold after 8 PM IST',
    friction:
      'Developers pay for portal leads, then a contact form sits until the sales team calls the next morning.',
    wedgeTitle: 'Hinglish chat, EMI, and a visit slot',
    wedge: [
      'The buyer can ask in Hinglish, Hindi, or English, including carpet area and the RERA number.',
      'EMI, with principal and interest, and a visit between 9 AM and 8 PM IST sit inside the chat.',
      'The number that matters is leads captured outside 9 AM to 8 PM IST.',
    ],
    guardTitle: 'No invented price, area, possession date, or RERA number',
    guard: [
      'Brochures, price sheets, floor plans, and RERA documents go into pgvector, plus up to 20 pages on the same domain.',
      'If a fact is not in the brochure, the chat asks for a visit instead of guessing.',
      'Each developer account stays isolated, up to three projects.',
    ],
    tractionTitle: 'A prospect can try it on their own site',
    traction: [
      'A live preview lays the widget over a screenshot of the project site.',
      'Starter, Growth, and Pro tiers, with a six-step go-live checklist.',
    ],
    stack: ['Next.js 16', 'TypeScript', 'Claude Haiku 4.5', 'Supabase pgvector', 'Voyage embeddings', 'Tailwind v4'],
  },
  {
    id: 'ask-mandy',
    name: 'Ask Mandy',
    domain: 'askmandy.us',
    href: 'https://askmandy.us',
    filter: 'voice',
    status: 'Live micro-SaaS',
    role: 'Founder, 2026 weekend build',
    hook: 'A ₹99 voice mock interview. No account. Score only what was answered.',
    oneliner:
      'Someone with an interview tomorrow picks a role, pays ₹99, and gets a private room by email. Mandy scores only the questions they actually answered.',
    frictionTitle: 'Last-minute practice should not need a subscription',
    friction:
      'They want to speak the answers for tomorrow’s role, not open another account or a monthly plan.',
    wedgeTitle: '₹99, then a private link',
    wedge: [
      'Role, skill chips or a pasted JD, and 15 or 30 minutes. A blank JD still gets a tailored one.',
      '₹99 by UPI or card. The room link arrives by email.',
      'Speech submits after about 4 seconds of silence. The room is two panels: Mandy and the live caption.',
    ],
    guardTitle: 'Score only what was answered',
    guard: [
      'Questions get harder as time passes: intro, core, senior, close.',
      'Unasked questions are not scored, so leaving early is not a penalty.',
      '“I didn’t understand” rephrases the question. A refresh can recover the room twice.',
    ],
    tractionTitle: 'Payment through report, without a person in the loop',
    traction: [
      'Payment, the JD, the email, the voice session, and the debrief run on their own.',
      'A missed webhook can be matched back to the latest unpaid session for that email.',
    ],
    stack: ['Next.js', 'TypeScript', 'Web Speech en-IN', 'GPT-4o mini + TTS', 'Dodo Payments', 'Postmark', 'Supabase'],
  },
  {
    id: 'nivesh',
    name: 'Nivesh Pustika',
    domain: 'niveshpustika.in',
    href: 'https://niveshpustika.in',
    filter: 'fintech',
    status: 'Live',
    role: 'Founder, weekend build',
    hook: 'A free Indian trading journal, with lot sizes and rupee P&L.',
    oneliner:
      'Equity and F&O traders log closed trades. Lot size, brokerage, and P&L are in rupees, from a daily sync of about 98,000 Kite instruments.',
    frictionTitle: 'Global journals do not understand an Indian F&O lot',
    friction:
      'Spreadsheets break when the lot size changes. Dollar journals do not know NSE instruments.',
    wedgeTitle: 'Look up the symbol, then the rupee result',
    wedge: [
      'A daily job syncs about 98,000 NSE, BSE, and NFO instruments from Kite.',
      'Net rupee P&L, lot multipliers, streaks, and setup tags are calculated.',
      'It installs as a PWA for the review after the market closes.',
    ],
    guardTitle: 'Closed trades first, not a live broker connection',
    guard: [
      'The journal is for the trade you already closed. A live broker token is a later problem.',
      'Signup and the API sit behind Turnstile, with row-level security on the data.',
    ],
    tractionTitle: 'Free, and the instrument sync is the hard part',
    traction: [
      'No subscription for the person reviewing their own trades.',
      'The daily sync is the proof that the data pipe holds.',
    ],
    stack: ['Next.js PWA', 'TypeScript', 'Zerodha Kite', 'Supabase', 'Cloudflare Turnstile'],
  },
  {
    id: 'analyst',
    name: 'Analyst by Chance',
    domain: 'analystbychance.com',
    href: 'https://analystbychance.com',
    filter: 'career',
    status: 'Live, 50+ guided',
    role: 'Founder and mentor',
    hook: 'Recruiters and HR folks moving into BA, Scrum, or product seats.',
    oneliner:
      'You fill IT roles. Take one yourself. Three to five months, one to one, without quitting the job you have.',
    frictionTitle: 'They screen for the role and still cannot see the way in',
    friction:
      'Recruiters already read those JDs and talk to those hiring managers. A generic course never shows how that work becomes the seat.',
    wedgeTitle: 'A narrow audience, and a plan instead of a PDF',
    wedge: [
      'The audience is recruiters, HR, and staffing. I came from staffing and crossed into IT without a map.',
      'A staffing transition plan and a role-mapping call replaced a static brochure.',
      'Eight to twelve hours a week, three to five months, three live sessions a week, mocks, then placement support.',
    ],
    guardTitle: 'No “learn to code in 30 days”',
    guard: [
      'It is for people whose work already touches hiring, roles, and managers.',
      'Leads, Indian phone numbers, and booking times are checked, and the brochure goes out by email.',
    ],
    tractionTitle: '50+ people through it',
    traction: [
      'I mentor them one to one through BRDs, user stories, Jira, mocks, and the offer conversation.',
      'It is the same path I took, from staffing into the product seat.',
    ],
    stack: ['React', 'Vite', 'Tailwind', 'Vercel', 'India lead checks'],
  },
  {
    id: 'tryfunzo',
    name: 'Tryfunzo',
    domain: 'tryfunzo.com',
    href: '',
    filter: 'fintech',
    status: 'In development',
    role: 'Founder, prototype',
    hook: 'Table games for the 15 to 25 minutes between the order and the food. No ads.',
    oneliner:
      'A QR on the table opens a shared lobby for that table, at /t/[tableId]. No app, no account, no ads. The site is not up yet.',
    frictionTitle: 'Fifteen to twenty-five quiet minutes after the order',
    friction:
      'The group goes back to their phones. The restaurant has no calm touchpoint on the table.',
    wedgeTitle: 'The QR is the table',
    wedge: [
      'Scan the stand and land in that table’s lobby.',
      'No download, no account, no ad network.',
      'Diners play. The venue manages tables on a separate screen.',
    ],
    guardTitle: 'Prototype first, backend second',
    guard: [
      'The diner journey and the operator journey are clickable before a heavy backend.',
      'The Next.js 14 shell and a Supabase Realtime client are started. The public site is not live, so it is named here and not linked.',
    ],
    tractionTitle: 'Shown as a prototype, not a launch',
    traction: [
      'Lobby, game, and table routing are designed.',
      'It is here so the early stage is visible, not dressed up as shipped.',
    ],
    stack: ['Next.js 14', 'TypeScript', 'Supabase Realtime', 'Table routing'],
  },
];

export const ownPrinciples = [
  {
    kicker: '01 · Fairness',
    title: 'Recommend. Don’t silently punish.',
    body: 'Round1 and Ask Mandy weight substance over polish, leave unasked skills unmarked, and let an integrity signal cap the recommendation instead of rejecting the person.',
    proof: 'Round1 80/20 rubric. Ask Mandy scores only answered questions.',
  },
  {
    kicker: '02 · Grounding',
    title: 'No invented price, area, or registration number.',
    body: 'Chirppy answers from the brochure and the price sheet. If the fact is not there, it asks for a site visit.',
    proof: 'Brochure retrieval, and each developer’s projects stay separate.',
  },
  {
    kicker: '03 · Friction',
    title: 'Don’t make them create an account first.',
    body: 'Round1 candidates use a link. Ask Mandy is a ₹99 payment and an email. Tryfunzo starts from the QR on the table.',
    proof: 'The first screen is the task, not a signup.',
  },
  {
    kicker: '04 · After launch',
    title: 'Read the real transcripts.',
    body: 'Five Round1 transcripts found six report problems before the volume grew. Nivesh Pustika stayed on closed trades instead of a fragile broker login.',
    proof: 'Findings first. Scope stays on the job the user actually has.',
  },
];

export const ownCareer = [
  {
    title: 'Product owner, OMAP at AltaDX',
    when: 'Jun 2025 – now',
    body: 'Four pods and about 25 people, shipping the live agent fleet for fitness clubs. Q3 2026 leadership award, and two team excellence awards.',
  },
  {
    title: 'Senior business analyst, KTek Resourcing',
    when: 'Jan 2019 – Mar 2025',
    body: 'Requirements, ATS integrations, and reporting for US and India staffing. Onboarding efficiency improved about 30 percent. That work is why Round1 and Analyst by Chance exist.',
  },
  {
    title: 'Reporting analyst, Wealth IT Global',
    when: 'Jan 2014 – Dec 2018',
    body: 'Manual financial and operational reporting dropped about 40 percent, with SQL, Power BI, and scheduled KPI pipelines.',
  },
];

export const ownCerts = [
  { name: 'AWS certified', org: 'AI Business Strategist' },
  { name: 'BITSoM – Masai', org: 'PM with generative and agentic AI' },
  { name: 'SAFe 6 POPM', org: 'Product owner / product manager' },
  { name: 'Certified ScrumMaster', org: 'Scrum Alliance' },
  { name: 'Salesforce certified', org: 'AI Associate' },
  { name: 'B.E. Mechanical', org: 'RGPV, 2009 – 2013' },
];
