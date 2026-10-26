export const dayJobHero = {
  kicker: 'Product owner at AltaDX · AI product management',
  title: 'My day job: owning OMAP®',
  lede:
    'At AltaDX I own OMAP® (Outcomes Micro Agent Platform). It replaces generic AI chatbots with a fleet of 11 specialized digital hires tied to revenue, retention, and staff efficiency for health clubs and fitness enterprises.',
};

export const dayJobStats = [
  { value: '11', label: 'Specialized AI agents' },
  { value: '4', label: 'Delivery pods, 25+ people' },
  { value: '7 MRMs', label: 'Club systems integrated' },
  { value: '2-week', label: 'Sprint release cadence' },
];

export const dayJobPillars = [
  {
    id: 'growth',
    name: 'Growth',
    title: 'Lead conversion and capacity',
    body: 'Calling and texting new gym leads within minutes to book club tours, and filling under-used off-peak studio classes.',
    agents: 'Sales · Yield',
  },
  {
    id: 'retention',
    name: 'Retention',
    title: 'Churn defense and dues recovery',
    body: 'Turning phone and paper cancellations into save or freeze offers, and recovering overdue balances through a one-tap checkout link.',
    agents: 'Click2Save · Collections',
  },
  {
    id: 'efficiency',
    name: 'Efficiency',
    title: 'Front-desk and back-office relief',
    body: 'Answering inbound club calls around the clock, auditing member billing to the cent, guiding staff on SOPs, and posting class no-show fees.',
    agents: 'Receptionist · Audit · Playbook · No-Show · Compliance',
  },
  {
    id: 'experience',
    name: 'Experience',
    title: 'Member self-service',
    body: 'Resolving everyday member requests across web, mobile, email, and voice, and clustering feedback across 35 languages.',
    agents: 'Concierge · Feedback',
  },
];

export const dayJobAgents = [
  {
    id: 'sales',
    name: 'Sales Agent',
    pillar: 'Growth',
    status: 'Live',
    subtitle: 'Outbound inside-sales rep, voice and SMS',
    hook: 'Calls and texts new gym leads within minutes, branches on the reply, and books the club tour in the member system.',
    problem:
      'New membership leads sit uncalled for hours, or get uneven follow-up, because the front desk is busy checking members in.',
    journey: [
      'A new lead submits a web form or guest pass and enters a voice and SMS cadence.',
      'The agent places a voice call and sends a follow-up text that changes based on whether the lead answered or replied.',
      'It checks club hours, books the tour, schedules a callback, and stops once the tour is booked.',
    ],
    decision:
      'A booked tour ends the sequence, and a callback queue keeps converted leads from being contacted again.',
    kpis: ['Speed to lead', 'Tour booking conversion', 'Outbound hours given back to staff'],
    stack: 'Python and FastAPI, a workflow engine, ElevenLabs and Twilio. Tools include book tour, request callback, and opt out of texts.',
  },
  {
    id: 'receptionist',
    name: 'Receptionist Agent',
    pillar: 'Efficiency',
    status: 'Live',
    subtitle: 'Inbound front-desk voice agent',
    hook: 'Answers the club phone, handles common member and guest requests, or transfers to staff with a short briefing.',
    problem:
      'At peak check-in the phone and the member at the desk compete for the same person.',
    journey: [
      'Answers the club number with that club’s greeting and knowledge.',
      'Handles guest passes, tours, and hours immediately. Account changes wait for a three-step email check.',
      'Books classes, reads invoices, texts a confirmation, or transfers the call with a whisper: who is calling and whether they are verified.',
    ],
    decision:
      'Staff hear the briefing before they pick up, and a lock stops the same caller from being transferred twice.',
    kpis: ['Calls handled without staff', 'Resolved on the first call', 'Peak calls that still get an answer'],
    stack: 'Python and FastAPI, member-system voice tools, and a short-lived lock so a transfer happens once.',
  },
  {
    id: 'concierge',
    name: 'Concierge Agent',
    pillar: 'Experience',
    status: 'Live',
    subtitle: 'Member support across web, app, email, and voice',
    hook: 'Answers member questions and runs account actions on the website, in the app, by email, and by voice.',
    problem:
      'Members wait on hold or email support for a balance, a profile change, a class booking, or a freeze.',
    journey: [
      'Sits on the club site and app, and reads inbound email, using the club’s pages, PDFs, and help-center sources.',
      'Asks the member to verify before it runs a live account action.',
      'For email, it replies, drafts for staff, or sends a sensitive thread to a person.',
    ],
    decision:
      'Voice replies stay inside a short latency budget, and freeze or cancel intent hands off to Click2Save through a tokenized link.',
    kpis: ['Support tickets deflected', 'First response inside a minute', 'Members who finish without staff'],
    stack: 'Python and FastAPI, a vector store fed by the site and connectors, realtime voice, and authenticated member-system tools.',
  },
  {
    id: 'click2save',
    name: 'Click2Save Agent',
    pillar: 'Retention',
    status: 'Live',
    subtitle: 'Cancellation defense and freeze',
    hook: 'Turns a cancellation into a save or freeze offer, checks proof documents, and writes the result back to the club system.',
    problem:
      'Savable members leave through a phone or paper process. Staff also spend hours checking move and medical proof, and clubs apply contract rules unevenly.',
    journey: [
      'The member opens a secure link and picks a reason to cancel or freeze.',
      'The agent offers a save, such as a discounted freeze or lower dues, inside that member’s cooldown rules.',
      'If proof is required, it redacts personal details, checks the document, and applies the freeze or cancel in the club system.',
    ],
    decision:
      'An eight-step onboarding copilot lets a multi-club operator load per-location contract rules from a spreadsheet.',
    kpis: ['Members saved', 'Freeze chosen instead of cancel', 'Proof approved without a manual review'],
    stack: 'Python and Django, a document check that redacts personal details, and per-club rules for freeze length and cancel notice.',
  },
  {
    id: 'collections',
    name: 'Collections Agent',
    pillar: 'Retention',
    status: 'Live',
    subtitle: 'Past-due dues recovery',
    hook: 'Recovers overdue dues with timed texts and email, and a short checkout link the member can pay in one tap.',
    problem:
      'Failed cards sit in the billing system until staff call, or until a generic reminder goes out.',
    journey: [
      'Each day it reads past-due balances and skips anyone outside the invoice age, send window, or billing blackout.',
      'It sends a short link that opens a checkout for about 30 minutes.',
      'The member pays on the card on file or a new card, and can ask a billing assistant about the invoice.',
    ],
    decision:
      'Revenue counts both the link payment and a front-desk payment that happens after the outreach.',
    kpis: ['Past-due dollars recovered', 'Link payments and front-desk payments', 'Fewer members lost to a failed card'],
    stack: 'Node and Express, email and SMS, and a delivery record that only moves forward: sent, delivered, opened, clicked.',
  },
  {
    id: 'audit',
    name: 'Audit Agent',
    pillar: 'Efficiency',
    status: 'Live',
    subtitle: 'Membership and billing integrity',
    hook: 'Checks memberships, agreements, and invoices to the cent, and writes a plain explanation for every anomaly.',
    problem:
      'Wrong plan rates, bad profit centers, duplicate members, and missing add-ons leak dues without anyone noticing.',
    journey: [
      'Runs scheduled audits across active members, agreements, invoices, and payments.',
      'Applies fixed money rules and leaves out frozen, pending-cancel, and cash accounts.',
      'Writes a plain explanation so a controller can fix the leak without a spreadsheet hunt.',
    ],
    decision:
      'The math stays deterministic. The model only explains the finding.',
    kpis: ['Dues leakage caught', 'Active members covered', 'Spreadsheet hours removed'],
    stack: 'Python and FastAPI. Rules cover dues above range, invalid profit centers, duplicate members, and missing add-on masters.',
  },
  {
    id: 'playbook',
    name: 'Playbook Agent',
    pillar: 'Efficiency',
    status: 'Live',
    subtitle: 'Staff SOP copilot',
    hook: 'Gives staff a cited answer from club handbooks and Drive folders, with a source link that expires.',
    problem:
      'Turnover means the front desk keeps interrupting a manager for the same policy questions.',
    journey: [
      'An admin uploads manuals, PDFs, a sitemap, or a Drive folder.',
      'Staff ask in the internal portal and get the steps.',
      'Each answer cites the source through a short-lived link.',
    ],
    decision:
      'Signed requests and links that expire in two minutes keep internal procedures available without leaving them open.',
    kpis: ['Time for a new hire to ramp', 'Fewer manager interruptions', 'The same answer across the club'],
    stack: 'Python and FastAPI, file search over a vector store, and signed source links.',
  },
  {
    id: 'noshow',
    name: 'Class No-Show Fee Agent',
    pillar: 'Efficiency',
    status: 'Custom live',
    subtitle: 'Roster check and fee posting',
    hook: 'Compares the class roster with club check-ins overnight and posts a no-show fee once, after a warning period.',
    problem:
      'A booked bike or mat sits empty while the waitlist is full.',
    journey: [
      'Each night, per location, it compares bookings with check-ins in a window around the class.',
      'An event rule beats a category rule. A future effective date sends a warning email instead of a charge.',
      'It posts the fee once, emails the member, and queues a failed charge for a person.',
    ],
    decision:
      'A dry run and a warning-only period let an operator check the match before anyone is charged.',
    kpis: ['Prime classes filled', 'Fewer no-shows', 'Waitlist members who get a spot'],
    stack: 'A nightly batch, a check-in window, a key that prevents a second charge, and encrypted org credentials.',
  },
  {
    id: 'compliance',
    name: 'Compliance Agent',
    pillar: 'Efficiency',
    status: 'In development',
    subtitle: 'Hourly labor and shift monitor',
    hook: 'Flags meal-break, overtime, minimum-wage, and split-shift issues, then walks a manager through a resolution.',
    problem:
      'Missed breaks, unapproved overtime, and split shifts become statutory penalties across locations.',
    journey: [
      'Compares shifts and timecards with labor rules.',
      'Sends at most one alert per employee, rule, and work date, ranked by severity.',
      'Moves each alert from open to acknowledged, then resolved or disputed.',
    ],
    decision:
      'The resolution states stay strict so every flagged shift has an audit trail.',
    kpis: ['Penalty risk reduced', 'Time to close a violation', 'A trail a multi-club audit can follow'],
    stack: 'A statutory rule catalog. Payroll ingestion is still in development.',
  },
  {
    id: 'yield',
    name: 'Yield Agent',
    pillar: 'Growth',
    status: 'Suite roadmap',
    subtitle: 'Class and court capacity',
    hook: 'Reads past fill rates and recommends off-peak credits or a price change for a manager to approve.',
    problem:
      'Prime classes waitlist while midday studios and courts stay open at one flat price.',
    journey: [
      'Reads schedules and attendance across studio, court, and personal training.',
      'Groups slots into off-peak, standard, and prime by location and instructor.',
      'Recommends a credit or a price change. Nothing member-facing changes until a manager approves it.',
    ],
    decision:
      'A manager stays in the loop before a price reaches the schedule.',
    kpis: ['Off-peak fill', 'Revenue per open slot', 'Prime demand that moves earlier'],
    stack: 'Uses the same class-schedule connectors as the rest of OMAP, plus a fill-rate scorer.',
  },
  {
    id: 'feedback',
    name: 'Feedback Agent',
    pillar: 'Experience',
    status: 'Suite roadmap',
    subtitle: 'Sentiment across 35 languages',
    hook: 'Groups member conversations into facility and service themes, and escalates a detractor before they cancel.',
    problem:
      'A manager hears about a dirty locker room or an unpopular class only after the cancellation form.',
    journey: [
      'Reads finished conversations in hourly batches, across 35 languages.',
      'Groups praise and complaints into equipment, cleanliness, billing, and staffing.',
      'Flags a negative member for follow-up, and stops automation if the thread signals a safety risk.',
    ],
    decision:
      'It sits on the live sentiment processor, so chat logs become an early signal instead of a report after the fact.',
    kpis: ['Detractors reached early', 'Sentiment by location', 'Time to notice a facility issue'],
    stack: 'Hourly batches, a 35-language classifier, and the feedback monitor from the build-your-own studio.',
  },
];

export const dayJobWizard = [
  {
    step: '01',
    label: 'No blank page',
    title: 'Brand from the club site',
    body: 'The operator pastes the club URL. The branding step reads the site and fills the agent name, greeting, tone, and colors.',
    outcome: 'Setup starts in under a minute',
  },
  {
    step: '02',
    label: 'Operator control',
    title: 'Behavior and skill toggles',
    body: 'A manager sets where the agent must hand off, and which club actions it may run: booking, billing, or a freeze.',
    outcome: 'Permissions stay explicit',
  },
  {
    step: '03',
    label: 'Knowledge that stays current',
    title: 'Sources that refresh',
    body: 'The agent can use the site, PDFs, Drive, Zendesk, Litmos, Widen, and FranConnect, and pick up changes on a schedule.',
    outcome: 'Answers follow the current club',
  },
  {
    step: '04',
    label: 'Publish with a way back',
    title: 'Compare, test, and restore',
    body: 'The operator tries voice or chat in the browser, compares the draft with live, publishes, and can restore the previous version.',
    outcome: 'A bad publish is reversible',
  },
];

export const dayJobByoa = [
  {
    id: 'reengage',
    label: 'Client re-engagement',
    title: 'Member win-back coach',
    prompt:
      'Build an agent that checks HubSpot every morning at 9 AM for members who have not visited in 21 days and sends a warm text and email.',
    note: 'The operator never edits a schema. The studio fills the five cards while they type.',
    brain: 'Supportive coach. Warm, not pushy. Invite someone back after 21 quiet days.',
    knowledge: 'Class schedule and the we-miss-you offer rules.',
    tools: 'HubSpot search, text, and email.',
    trigger: 'Every day at 9:00 club time, without sending twice.',
    channels: 'Two-way text and email.',
  },
  {
    id: 'ptremind',
    label: 'PT appointment reminder',
    title: 'PT session coordinator',
    prompt:
      'Remind members 24 hours before personal training by text and WhatsApp, and log a reschedule note in HubSpot.',
    note: 'A training director gets the coordinator from the tools already connected to the studio.',
    brain: 'Crisp and helpful. Holds the 24-hour reschedule rule.',
    knowledge: 'The late-cancel and reschedule policy.',
    tools: 'HubSpot deals and notes, text, and WhatsApp.',
    trigger: '24 hours before the booked session.',
    channels: 'Text and WhatsApp.',
  },
  {
    id: 'gmanalyst',
    label: 'Weekly GM analyst',
    title: 'Weekly pipeline analyst',
    prompt:
      'Summarize weekly membership conversions in HubSpot and email the general manager every Monday at 7 AM.',
    note: 'The Monday briefing does not require a custom report.',
    brain: 'Short and numeric. Calls out the week-to-week change in tours and closes.',
    knowledge: 'Club targets and how each KPI is defined.',
    tools: 'HubSpot deals, a pipeline summary, and an email digest.',
    trigger: 'Mondays at 7:00.',
    channels: 'Email to the manager.',
  },
  {
    id: 'npsmonitor',
    label: 'Detractor alert',
    title: 'Feedback sentinel',
    prompt:
      'Watch new feedback notes in HubSpot, mark negative sentiment, and text the club manager when a member is unhappy.',
    note: 'A bad visit reaches the manager before it becomes a cancellation.',
    brain: 'Empathetic, and urgent when it escalates.',
    knowledge: 'The service-recovery playbook.',
    tools: 'HubSpot notes, a contact update, and a manager text.',
    trigger: 'A short poll for new feedback notes.',
    channels: 'Text and email to the manager.',
  },
  {
    id: 'renewal',
    label: 'Annual renewal',
    title: 'Renewal concierge',
    prompt:
      'Reach members 30 days before an annual membership expires, offer the loyalty renewal, and log the reply in HubSpot.',
    note: 'Renewals that used to live on a front-desk spreadsheet go out on their own.',
    brain: 'Appreciative. Treats the renewal as a thank-you, not a dunning note.',
    knowledge: 'The current year’s renewal perks.',
    tools: 'HubSpot search, a deal-stage update, text, and email.',
    trigger: 'Daily, inside the 30-day expiry window.',
    channels: 'Email and two-way text.',
  },
];

export const dayJobGuardrails = [
  {
    pillar: 'Identity',
    title: 'Verification before an account change',
    body: 'Concierge and Receptionist cannot open an invoice, edit a profile, or freeze a contract until the member passes location, barcode or email, and a one-time code. That check lives in the service, not in the prompt.',
    tradeoff: 'Three lookups, three code attempts, three resends. The session lasts two hours.',
  },
  {
    pillar: 'Messages',
    title: 'One gate for outbound text',
    body: 'Sales and Collections texts check consent, the club’s send window, billing blackouts, and opt-out. “STOP” and “take me off your list” both count.',
    tradeoff: 'If the opt-out check fails, the text does not send.',
  },
  {
    pillar: 'Safety',
    title: 'A safety line stops the agent',
    body: 'The feedback pass reads chats and email in 35 languages. One sentence about self-harm, abuse, or physical danger stops the automated reply and routes the thread to staff.',
    tradeoff: 'No automated reply on a safety-flagged thread.',
  },
  {
    pillar: 'Money and voice',
    title: 'No double charge and no double dial',
    body: 'No-show fees can run in a dry mode first. A charge key stops a second post. A transfer lock stops a second dial.',
    tradeoff: 'Edge cases wait in a review queue instead of guessing.',
  },
];

export const dayJobLeadership = [
  {
    kicker: 'Delivery',
    title: '4 pods, every two weeks',
    body: 'The roadmap runs across voice and acquisition, member experience, revenue and retention, and the platform connectors. Production ships on a two-week cadence.',
  },
  {
    kicker: 'Platform',
    title: 'One contract, seven club systems',
    body: 'Seven member-management systems sit behind one action layer, about 20 to 35 operations each, so a new agent is not a one-off bot for a single chain.',
  },
  {
    kicker: 'Onboarding',
    title: 'Policy setup in eight steps',
    body: 'An onboarding copilot reads the operator’s policy sheet and sets per-club freeze and cancellation rules without a custom project.',
  },
];

export const dayJobArchitecture = [
  {
    tag: '01 · Model router',
    title: 'One library, three providers',
    body: 'Requests can go to Anthropic, OpenAI, or Gemini, with a timeout, retries, a cap on tool calls, a trace, and encrypted bring-your-own-key support.',
  },
  {
    tag: '02 · Club systems',
    title: 'Seven connectors, one shape',
    body: 'Separate functions for ABC Financial, Club Automation, Daxko, ASF, Crunch+, Exerp, and GroupEx Pro. Each call is an operation in and a status, data, and message out.',
  },
  {
    tag: '03 · Channels',
    title: 'Phone, text, email, and web',
    body: 'ElevenLabs and Twilio for phone, realtime voice on the web, Twilio, Sinch, and OneSignal for text, and email with delivery, open, and click recorded in order.',
  },
  {
    tag: '04 · Product shell',
    title: 'A host for each agent UI',
    body: 'A React host mounts each agent over Python and Node services, with PostgreSQL, MongoDB, and short locks where two actions must not overlap.',
  },
];
