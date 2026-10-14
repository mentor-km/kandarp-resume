/**
 * Case studies and project cards, written in my own voice.
 * Status labels and figures are the ones I have approved for public use.
 * Links are listed only after the site was checked.
 */

export const caseStudies = [
  {
    slug: 'omap-agentic-ai',
    path: '/work/omap-agentic-ai',
    title: 'Making agent setup match how operators already work',
    cardTitle: 'OMAP at AltaDX',
    outcome:
      'Defined configurable agent behaviour, removed duplicated setup, and corrected sprint reporting so scope reflected delivery work.',
    category: 'professional',
    categoryLabel: 'Professional experience',
    role: 'Product Owner and Project Manager',
    status: 'in-progress',
    statusLabel: 'In delivery',
    year: '2025 to present',
    dates: 'June 2025 to present',
    featured: true,
    site: 'omapagents.ai',
    summary:
      'I define and deliver OMAP, an agentic AI platform that lets fitness and wellness businesses configure digital agents inside their operational workflows.',
    audience:
      'I build for non-technical operators at fitness and wellness businesses, and for the internal pods who design, build, and release agent capabilities.',
    context:
      'OMAP is an enterprise platform at AltaDX. Businesses use it to configure digital agents for operational work rather than replacing the systems they already run. I joined in June 2025 and the role is current.',
    problem:
      'Agent concepts stall when setup is duplicated, behaviour is unbounded, or a release commits to tickets and features that are no longer real. Sprint reports can also mix QA states into new scope and make delivery look worse, or better, than it is.',
    ownership: [
      'Competitor research and client feedback, used to prioritise capabilities to build, improve, or remove.',
      'Agent behaviour, user journeys, configuration flows, and business rules.',
      'PRDs, product documentation, and clickable HTML prototypes.',
      'Backlog management, capacity planning, and sprint and release coordination across four pods.',
      'Stakeholder reporting, product metrics, and release communication.',
    ],
    boundaries:
      'I own product definition and delivery coordination. Business analysts turn PRDs into roadmap items, stories, and acceptance criteria with me. Design and engineering implement the product. I do not treat platform-wide commercial results as a personal outcome, and I do not publish those figures.',
    constraints: [
      'Operators configuring agents are not expected to be technical.',
      'Delivery runs across four pods, so capacity and dependencies shape what can be committed.',
      'Public writing cannot name customers, ticket IDs, source code, private roadmaps, or member data.',
    ],
    assumptions: [
      'Operators will complete setup if it follows the way they already manage channels and dues.',
      'Outreach recommendations are only useful when the underlying event data can support them.',
      'A release plan that has not been checked against the current system will accumulate false scope.',
    ],
    evidenceInputs: [
      'Competitor research and client feedback on which capabilities mattered.',
      'PRDs compared with the current product and with Jira before scope was committed.',
      'Sprint reporting after QA Hold and QA-found defects were classified separately from new commitments.',
    ],
    decisions: [
      {
        problem: 'Collections outreach could sound more certain than the event data allowed.',
        decision:
          'Outreach intelligence stays advisory and cohort-level. Recommendations have to be grounded in available event data. A person decides what to do next.',
        tradeoff:
          'The product is less autonomous. It also avoids treating a thin data trail as a reason to contact someone.',
        evidence:
          'The rule follows from the data that is actually available, not from a claim that the agent can judge an individual.',
      },
      {
        problem: 'Email and SMS setup was duplicated, and recurring dues import sat in the wrong place.',
        decision:
          'Remove the duplicated channel configuration. Move recurring dues import to a dedicated Dues Management page.',
        tradeoff:
          'Dues import takes its own step in the journey. Setup stops asking operators to maintain the same channel settings twice.',
        evidence:
          'Client-facing configuration and the existing setup flow showed the duplication. The change is a simplification, not a new channel.',
      },
      {
        problem: 'A Receptionist Agent PRD was ready to become committed scope.',
        decision:
          'Check the PRD against the source of the current product and against Jira before the release was locked.',
        tradeoff:
          'Validation slows the commitment. It also stops the team from planning work that the product can no longer do.',
        evidence:
          'The check found ticket references that did not exist and a routing feature that had already been deleted. I do not publish ticket IDs.',
      },
      {
        problem: 'Sprint reports mixed QA Hold and defects found in QA into the picture of new scope.',
        decision:
          'Separate QA Hold from development work, and separate new commitments from defects found in QA.',
        tradeoff:
          'The corrected view can look like a large improvement in scope control. It is a measurement fix. It is not a reduction in the work that was actually added.',
        evidence:
          'After reclassification, the revised view showed 7.5% scope growth, compared with 64.5% in the earlier report. Reporting became more accurate. Actual scope growth was not reduced from 64.5% to 7.5%.',
      },
    ],
    journey: [
      { title: 'Research', detail: 'Review competitors and client feedback before adding a capability.' },
      { title: 'Prioritise', detail: 'Choose what to build, improve, or remove within pod capacity.' },
      { title: 'Specify', detail: 'Write the behaviour, the setup flow, the PRD, and a clickable HTML prototype.' },
      { title: 'Translate', detail: 'With business analysts, create stories and acceptance criteria in Jira Product Discovery.' },
      { title: 'Release', detail: 'Plan, review, and report across four pods, then correct the spec when the system disagrees.' },
    ],
    rules: {
      title: 'AI guardrails',
      items: [
        {
          title: 'Ground the recommendation',
          detail: 'Outreach advice has to come from available event data.',
          failure: 'If the events are missing, the product should not invent a next action.',
        },
        {
          title: 'Stay at cohort level',
          detail: 'Guidance is about a group pattern, not a judgement of one person.',
          failure: 'An individual record is not treated as proof of intent.',
        },
        {
          title: 'Keep a person in the decision',
          detail: 'The agent advises. It does not send the action on its own.',
          failure: 'Uncertainty stays visible instead of being hidden inside an automatic outreach.',
        },
      ],
    },
    collaboration:
      'Business analysts share the translation from PRD to stories and acceptance criteria. I coordinate sprint planning, closure, ceremonies, reviews, risks, and stakeholder updates across four pods. Engineering and design own implementation.',
    outcomes: [
      {
        kind: 'Qualitative',
        text: 'Setup no longer duplicates email and SMS configuration, and recurring dues import has a dedicated place.',
      },
      {
        kind: 'Qualitative',
        text: 'A Receptionist Agent release was checked before commitment. Nonexistent ticket references and a deleted routing feature were caught in the PRD.',
      },
      {
        kind: 'Measured, reporting only',
        text: 'A revised sprint view showed 7.5% scope growth versus 64.5% previously reported, after QA Hold and QA-found defects were reclassified. This improved reporting accuracy during the June 2025 to present engagement. It is not a claim that delivered scope shrank.',
      },
    ],
    lessons: [
      'Removing a duplicated step can be more useful than adding another agent capability.',
      'Agent behaviour is a product decision: what it may say, what data it may use, and when a person must decide.',
      'Delivery reports have to distinguish new scope from QA Hold and from defects found in QA.',
    ],
    next: [
      'Confirm which agent names and any platform-wide figures are approved for public use. They are omitted until then.',
      'Validate whether the dues-page split reduces setup errors. That has not been measured here.',
      'Learn whether operators act on advisory outreach or ignore it. Usage of that advice is not claimed.',
    ],
    links: [
      {
        label: 'omapagents.ai',
        href: 'https://omapagents.ai',
        verified: true,
        verifiedAsOf: '14 October 2026',
      },
    ],
    media: {
      title: 'Setup and outreach rules',
      caption: 'Illustrative interface. Not a production screenshot.',
      rows: [
        { label: 'Channels', value: 'Email and SMS share one setup' },
        { label: 'Dues', value: 'Recurring import sits on Dues Management' },
        { label: 'Outreach', value: 'Advisory, cohort-level, tied to events' },
        { label: 'Missing data', value: 'No invented next action' },
      ],
    },
  },
  {
    slug: 'round1',
    path: '/work/round1',
    title: 'A first-round interview that will not over-score a thin conversation',
    cardTitle: 'Round1',
    outcome:
      'A client completed 153 interviews through Round1 over three months, as reported in October 2026. Scoring rules are explicit, and integrity cues stay signals.',
    category: 'founder',
    categoryLabel: 'Founder, not employment',
    role: 'Founder and product builder',
    status: 'live',
    statusLabel: 'Live',
    year: '2025 to present',
    dates: 'Building from November 2025. First client onboarded 2 July 2026.',
    featured: true,
    site: 'round1.in',
    summary:
      'I built Round1 for AI voice screening in a first-round interview. The flow follows the job description, and the report is bounded by scoring rules rather than an open-ended judgement.',
    audience:
      'I built it for recruiters and hiring teams who need a consistent first screen, and for candidates who join a voice interview from a browser.',
    context:
      'Round1 is a founder product, not a full-time employment role. I started building it in November 2025. The first client was onboarded on 2 July 2026. The public site is round1.in.',
    problem:
      'A resume is a weak first screen, and an unconstrained interview model can sound confident about a conversation that was too short, or treat an integrity cue as proof of dishonesty.',
    ownership: [
      'Product definition, scoring rules, interview flow, and packaging.',
      'The working product, built as founder work rather than as an AltaDX responsibility.',
    ],
    boundaries:
      'This is not an AltaDX product and not a role on the employment timeline. I do not claim that Round1 improved hire quality, reduced bias, or saved a measured amount of recruiter time. Those outcomes are not evidenced here.',
    constraints: [
      'Candidates need a mobile-first interview room and a path that does not require an account for the demo.',
      'Speech is captured on the server so the interview is not only a browser-local recording.',
      'A single founder sets the pace. Packaging has to include trial terms and cancellation or no-show refund rules.',
    ],
    assumptions: [
      'Recruiters can use a recommendation only when the band and the weighting are visible.',
      'A fixed technical-to-communication weight is acceptable when it is declared, and it will not fit every role family.',
      'Integrity events are context for a human review, not a verdict.',
    ],
    evidenceInputs: [
      'Product rules for weighting, a minimum-answer gate, and recommendation bands.',
      'Usage reported in October 2026: one client completed 153 interviews over three months.',
      'Onboarding date for that first client: 2 July 2026.',
    ],
    decisions: [
      {
        problem: 'An interview that does not follow the role will produce a generic score.',
        decision:
          'The interview adapts from the job description. Skill ratings and recommendation bands are part of the recruiter-facing result, with a transcript and a PDF report.',
        tradeoff:
          'Adaptation takes more product definition than a fixed script. A fixed script would be easier to compare and worse at matching the role.',
        evidence:
          'The flow is a described product capability. The usage evidence is that a client ran interviews through the product, not a lab study of question quality.',
      },
      {
        problem: 'A short or abandoned interview can still be written up as if it were complete.',
        decision:
          'A minimum-answer gate sits in front of a full recommendation. Recommendation bands are explicit.',
        tradeoff:
          'Some reports will be incomplete on purpose. That is preferable to a confident score built on too few answers.',
        evidence:
          'The gate is a product rule. I am not publishing a claim that it changed hiring outcomes.',
      },
      {
        problem: 'Hidden weights make two candidates hard to compare, and they are easy to over-trust.',
        decision:
          'Technical skill is weighted at 80 and communication at 20. The split is stated rather than left inside the model.',
        tradeoff:
          'The split is consistent, and it will under-serve roles where communication is the job. Changing it by role is a later test, not a current claim.',
        evidence:
          'The weighting is a described rule. There is no published study here of its effect on who gets advanced.',
      },
      {
        problem: 'Tab changes, off-screen time, or similar cues can be misread as proof of cheating.',
        decision:
          'Integrity is a signal that can constrain how a recommendation is read. It is not proof of dishonesty.',
        tradeoff:
          'Reviewers get less of a yes-or-no integrity verdict. They also get less false certainty.',
        evidence:
          'No result in this case study shows that the signal identified misconduct. It is a review aid only.',
      },
    ],
    journey: [
      { title: 'Set the role', detail: 'The recruiter provides the job context that the interview should follow.' },
      { title: 'Join', detail: 'The candidate enters a mobile-first room. A no-account demo path exists.' },
      { title: 'Interview', detail: 'Questions adapt from the job description. Speech is captured on the server.' },
      { title: 'Limit the score', detail: 'The minimum-answer gate and the 80/20 weighting bound the recommendation.' },
      { title: 'Report', detail: 'The recruiter receives ratings, a recommendation band, an integrity signal, a transcript, and a PDF.' },
    ],
    rules: {
      title: 'AI guardrails',
      items: [
        {
          title: 'Do not score a thin interview as a full one',
          detail: 'The minimum-answer gate withholds a full recommendation when there is not enough answer.',
          failure: 'Missing answers stay missing. They are not filled in to complete a score.',
        },
        {
          title: 'Show the weight',
          detail: 'Technical 80 and communication 20 is an explicit rule, not an invisible preference.',
          failure: 'A recruiter can disagree with the weight. The product does not pretend the split is neutral for every job.',
        },
        {
          title: 'Integrity is a signal',
          detail: 'Cues can change how carefully a recommendation is read.',
          failure: 'A cue is not displayed as proof that the candidate was dishonest.',
        },
      ],
    },
    collaboration:
      'Round1 is founder work. I defined the product and built it. The employment team at AltaDX is not the delivery team for this product. Packaging covers trial terms and cancellation or no-show refund rules. Those commercial details are part of the product definition, not a revenue result.',
    outcomes: [
      {
        kind: 'Measured usage',
        text: 'A client completed 153 interviews through Round1 over the three months reported in October 2026. These were product usage by that client, not interviews I conducted.',
      },
      {
        kind: 'Dated milestone',
        text: 'The first client was onboarded on 2 July 2026. Building started in November 2025.',
      },
      {
        kind: 'Not claimed',
        text: 'Hire quality, bias reduction, time saved, and revenue are not reported. A usage count is not evidence of those outcomes.',
      },
    ],
    lessons: [
      'A screening product is easier to trust when the score cannot outrun the interview that actually happened.',
      'Publishing the weight is a product decision. Consistency and role fit pull in different directions.',
      'An integrity signal that is written as proof will be used as proof. The interface has to refuse that reading.',
    ],
    next: [
      'Compare recommendation bands with the decisions recruiters actually make. That comparison does not exist yet.',
      'Test whether 80/20 should vary for communication-heavy roles. It is fixed for now.',
      'Keep the 153 interviews labeled as one client’s usage, and refresh the figure when a newer count is approved.',
    ],
    links: [
      {
        label: 'round1.in',
        href: 'https://round1.in',
        verified: true,
        verifiedAsOf: '12 October 2026',
      },
    ],
    media: {
      title: 'What the report is allowed to say',
      caption: 'Illustrative report structure. Not a candidate record and not a production screenshot.',
      rows: [
        { label: 'Gate', value: 'Full band only after enough answers' },
        { label: 'Weight', value: 'Technical 80 / communication 20' },
        { label: 'Integrity', value: 'Signal for review, not a finding' },
        { label: 'Output', value: 'Ratings, band, transcript, PDF' },
      ],
    },
  },
  {
    slug: 'chirppy',
    path: '/work/chirppy',
    title: 'Buyer answers that stay inside the uploaded documents',
    cardTitle: 'Chirppy',
    outcome:
      'A demo-ready real-estate assistant that answers from a developer’s own material, and is not described as self-serve-ready.',
    category: 'independent',
    categoryLabel: 'Independent weekend project',
    role: 'Product builder',
    status: 'demo-ready',
    statusLabel: 'Demo-ready',
    year: 'Weekend project',
    dates: 'Independent project. Public site checked 12 October 2026.',
    featured: false,
    site: 'getchirppy.com',
    summary:
      'I built Chirppy as an AI lead assistant for Indian real-estate developers. It answers from brochures and price lists, qualifies interest, estimates EMI, and supports site-visit booking.',
    audience:
      'I built it for Indian developers responding to buyers, and for buyers asking about a specific project in English, Hindi, or Hinglish.',
    context:
      'Chirppy is a weekend product I built on my own. It is not employment and not one of my founder companies. It is a demo-ready MVP, and I do not call it self-serve-ready. The public site is getchirppy.com.',
    problem:
      'Buyers ask the same brochure questions, and a general model will invent a price or a RERA claim when the document does not contain one. A second failure is quieter: one developer’s content answering inside another developer’s project.',
    ownership: [
      'Retrieval rules, onboarding, and the buyer journey.',
      'The product decision to treat tenant isolation, found in review, as a requirement rather than a later hardening task.',
    ],
    boundaries:
      'I am not publishing customer names, adoption, or revenue. Demo-ready does not mean a developer can onboard alone. I do not repeat the pricing from the public site here, because a live price list can change.',
    constraints: [
      'Answers have to come from the developer’s own brochures and price lists.',
      'Conversations may be in Hinglish as well as English or Hindi.',
      'The MVP is demo-ready. Self-serve onboarding is not claimed.',
    ],
    assumptions: [
      'A buyer would rather hear a limit than a fluent guess about price or RERA status.',
      'EMI and site-visit booking are useful only after the factual answer is grounded.',
      'Isolation between developers is part of the product promise, not only an infrastructure concern.',
    ],
    evidenceInputs: [
      'The product rule that responses are grounded in uploaded brochures and price lists.',
      'A review that found a tenant-isolation issue.',
      'A public site check on 12 October 2026. No usage metric is attached to that check.',
    ],
    decisions: [
      {
        problem: 'A helpful model will fill gaps in a price list.',
        decision:
          'Answers are retrieval-grounded. Prices and RERA claims are allowed only when they are in the approved material.',
        tradeoff:
          'The assistant is narrower than a general chatbot. It will fail closed on facts it does not have.',
        evidence:
          'The rule is a product constraint. I am not publishing a measured rate of refused answers.',
      },
      {
        problem: 'Lead capture can become an open conversation with no job to finish.',
        decision:
          'The journey is qualify, estimate EMI, and support a site-visit booking, after a grounded answer.',
        tradeoff:
          'Fewer free-form capabilities. A clearer path from question to a next step the sales team can use.',
        evidence:
          'The journey is defined for the MVP. Conversion is not claimed.',
      },
      {
        problem: 'A review found that tenant content isolation was not safe to ignore.',
        decision:
          'Treat isolation as a product requirement before describing the MVP as something a developer can run without help.',
        tradeoff:
          'Self-serve readiness waits. A demo that mixes two developers’ documents would be a product failure, not only a bug.',
        evidence:
          'The issue was found during review. This write-up does not describe the mechanism.',
      },
    ],
    journey: [
      { title: 'Onboard', detail: 'Approved brochures and price lists are the only source for factual answers.' },
      { title: 'Ask', detail: 'A buyer asks in English, Hindi, or Hinglish.' },
      { title: 'Answer or stop', detail: 'The assistant uses the uploaded material, or it says the fact is not there.' },
      { title: 'Qualify', detail: 'Interest is qualified without inventing project facts.' },
      { title: 'Next step', detail: 'EMI estimation and site-visit booking sit on top of a grounded answer.' },
    ],
    rules: {
      title: 'AI guardrails',
      items: [
        {
          title: 'No invented commercial facts',
          detail: 'Price and RERA claims have to be present in the developer’s approved documents.',
          failure: 'If the document does not contain the fact, the assistant does not estimate it.',
        },
        {
          title: 'One tenant’s material stays there',
          detail: 'Isolation is a requirement of the product, not a later cleanup.',
          failure: 'A demo that can leak another project’s content is not self-serve-ready.',
        },
        {
          title: 'Uncertainty is an answer',
          detail: 'The useful failure is a clear limit, plus a path to a person.',
          failure: 'Fluency is not used to cover a missing fact.',
        },
      ],
    },
    collaboration:
      'Weekend product work. I defined the grounding rules, the onboarding and buyer journeys, and the response to the isolation finding. There is no enterprise delivery pod on this project.',
    outcomes: [
      {
        kind: 'Status',
        text: 'Demo-ready MVP as of October 2026. I do not describe it as self-serve-ready.',
      },
      {
        kind: 'Qualitative',
        text: 'Grounding rules and a tenant-isolation requirement are part of the product definition. No adoption or lead-volume figure is approved.',
      },
    ],
    lessons: [
      'For a document assistant, the refusal is the product. A guessed price is a worse outcome than a gap.',
      'Tenant isolation is visible to the buyer if it fails, so it belongs in the product requirements.',
    ],
    next: [
      'Test whether a developer can upload material and get a safe assistant without hands-on help. Self-serve is not claimed today.',
      'Review whether refusals tell the buyer what is missing. That quality bar is not measured here.',
    ],
    links: [
      {
        label: 'getchirppy.com',
        href: 'https://getchirppy.com',
        verified: true,
        verifiedAsOf: '12 October 2026',
      },
    ],
    media: {
      title: 'A question the documents cannot answer',
      caption: 'Illustrative conversation. Not a production screenshot and not a real buyer.',
      messages: [
        { from: 'Buyer', text: 'What is the 3 BHK price, and what is the RERA number?' },
        {
          from: 'Assistant',
          text: 'I can only use the brochure and price list uploaded for this project. Those facts are not in the material I have, so I will not estimate them. I can ask the sales team to follow up.',
        },
      ],
    },
  },
  {
    slug: 'ask-mandy',
    path: '/work/ask-mandy',
    title: 'Score the answers that happened, and nothing else',
    cardTitle: 'Ask Mandy',
    outcome:
      'A no-account voice mock interview whose score excludes questions the candidate did not answer.',
    category: 'independent',
    categoryLabel: 'Independent weekend project',
    role: 'Product builder',
    status: 'in-progress',
    statusLabel: 'In progress',
    year: 'Weekend project',
    dates: 'Independent project. Public site checked 14 October 2026.',
    featured: false,
    site: 'askmandy.us',
    summary:
      'I built Ask Mandy as a voice mock interview for job-seekers. Booking is by role, and feedback is scored only on the questions the candidate actually answered.',
    audience:
      'I built it for job-seekers practising a role-specific interview, without creating an account first.',
    context:
      'Ask Mandy is a weekend project I built on my own. It is not employment and it is not Round1. Round1 is my recruiter product. Ask Mandy is practice for the candidate. The public site is askmandy.us. I do not show a price because the current price is not confirmed.',
    problem:
      'Mock-interview scores often punish silence. A candidate who exits early, or who is not asked the whole set, can look weaker because unanswered questions were treated as failed ones.',
    ownership: [
      'The interview rules: one role-relevant question at a time, progressive difficulty, an early-exit path, and a score limited to answered questions.',
      'Role-based booking and a feedback report that follows those rules.',
    ],
    boundaries:
      'I am not claiming job outcomes, score validity against real interviews, or a public launch. A prior note mentioned a price of ₹99. It is omitted until the current price is confirmed.',
    constraints: [
      'No account is required.',
      'The session is voice, and the question has to stay relevant to the booked role.',
      'An early exit is a valid end, not a broken session to be patched with empty scores.',
    ],
    assumptions: [
      'Candidates can use feedback when they can see which answers it covers.',
      'One question at a time is clearer than a long script, at the cost of a shorter snapshot.',
      'Progressive difficulty is only fair if skipped questions never enter the score.',
    ],
    evidenceInputs: [
      'The product rules as defined for the weekend build.',
      'No usage count, completion rate, or pricing confirmation is available for publication.',
    ],
    decisions: [
      {
        problem: 'A full rubric on a partial interview invents performance.',
        decision: 'Scoring uses only the questions the candidate answered.',
        tradeoff:
          'Two candidates who answered different amounts are not on one complete scale. The report is honest about its coverage and weaker as a ranking tool.',
        evidence:
          'This is a product rule. I have not run a validity study on it.',
      },
      {
        problem: 'A block of questions encourages skipping ahead or freezing.',
        decision: 'Ask one role-relevant question at a time, and raise difficulty only as the candidate continues.',
        tradeoff:
          'The session reveals less range when someone stops early. It also avoids a score built on questions they never faced.',
        evidence: 'The pacing rule is defined. Completion behaviour is not measured here.',
      },
      {
        problem: 'Leaving mid-interview can be coded as failure.',
        decision: 'Provide an early-exit path. The report covers the answers already given.',
        tradeoff:
          'More sessions will look unfinished. Unfinished is a better description than a failing grade on silence.',
        evidence: 'The exit rule is specified. I am not publishing how often people use it.',
      },
    ],
    journey: [
      { title: 'Book', detail: 'The candidate picks a role. No account is required.' },
      { title: 'Answer one', detail: 'The interview asks a single role-relevant question.' },
      { title: 'Continue or leave', detail: 'Difficulty can progress. An early exit remains available.' },
      { title: 'Score the overlap', detail: 'The report rates answered questions and leaves the rest out.' },
    ],
    rules: {
      title: 'AI guardrails',
      items: [
        {
          title: 'Coverage matches the score',
          detail: 'Unanswered questions are outside the score.',
          failure: 'Silence is not converted into a low mark.',
        },
        {
          title: 'One question in front of the candidate',
          detail: 'The next prompt stays role-relevant and arrives after the current answer, or not at all if they exit.',
          failure: 'The product does not backfill a full interview after an early exit.',
        },
        {
          title: 'Difficulty does not imply a complete scale',
          detail: 'Progressive difficulty describes the path taken, not a percentile against every other candidate.',
          failure: 'The report should not read like a certified assessment. That evidence does not exist.',
        },
      ],
    },
    collaboration:
      'Independent weekend work. There is no client delivery team. The rules above are the product contract for scoring.',
    outcomes: [
      {
        kind: 'Status',
        text: 'In progress as a weekend project. The site is live at askmandy.us. I am not publishing a usage figure or a price yet.',
      },
      {
        kind: 'Qualitative',
        text: 'The scoring boundary is defined: feedback covers answered questions only, with an early-exit path.',
      },
    ],
    lessons: [
      'An assessment feels fairer when the denominator is the questions that were actually asked and answered.',
      'Practice products and hiring products should not share a claim of validity. Ask Mandy is practice.',
    ],
    next: [
      'Confirm the current price before showing it. A prior ₹99 note is not treated as current.',
      'Test whether candidates understand which answers were scored. I have not run that comprehension check yet.',
    ],
    links: [
      {
        label: 'askmandy.us',
        href: 'https://www.askmandy.us',
        verified: true,
        verifiedAsOf: '14 October 2026',
      },
    ],
    media: {
      title: 'What is in the score',
      caption: 'Illustrative feedback structure. Not a real session and not a production screenshot.',
      rows: [
        { label: 'Booking', value: 'One role, no account' },
        { label: 'Pacing', value: 'One question, then the next' },
        { label: 'Exit', value: 'Leaving early keeps the answers already given' },
        { label: 'Score', value: 'Unanswered questions stay out' },
      ],
    },
  },
  {
    slug: 'nivesh-pustika',
    path: '/work/nivesh-pustika',
    title: 'A journal for closed trades, without a broker in the middle',
    cardTitle: 'Nivesh Pustika',
    outcome:
      'A free trading journal for Indian markets, scoped to manual entry of closed trades rather than broker sync or advice.',
    category: 'independent',
    categoryLabel: 'Independent weekend project',
    role: 'Product builder',
    status: 'live',
    statusLabel: 'Live',
    year: 'Weekend project',
    dates: 'Independent project. Public site checked 12 October 2026.',
    featured: false,
    site: 'niveshpustika.in',
    summary:
      'I built Nivesh Pustika as a free web app and PWA for Indian traders to review closed trades: rupee P&L, futures and options lot sizes, win rate, profit factor, and an equity curve.',
    audience:
      'I built it for Indian traders who want to review their own closed trades in rupees, including futures and options, on the web or as an installed web app.',
    context:
      'Nivesh Pustika is a weekend project I built on my own. The public site is niveshpustika.in. It is a journal, not a broker and not an advice service. The sample numbers on the marketing page are interface examples, not results.',
    problem:
      'Traders can describe performance in tools that do not understand lot sizes, rupees, or the difference between an open idea and a closed trade. A broader product would start with broker connections before the review job is clear.',
    ownership: [
      'MVP scope: closed trades, manual entry, rupee P&L, lot-size handling, and the review metrics.',
      'The decision not to sync a broker, and the launch risks reviewed before treating signup as safe.',
    ],
    boundaries:
      'I do not give investment advice through this product or this case study. I do not claim returns, win rates, or a user count. Figures shown on the marketing site as interface samples are not outcomes.',
    constraints: [
      'Entry is manual. There is no broker sync.',
      'The journal focuses on closed trades.',
      'Contracts need lot-size handling for futures and options, and P&L is in rupees.',
      'Launch review included OTP abuse limits, bot protection, and error handling.',
    ],
    assumptions: [
      'The core job is reviewing trades that are already closed, not capturing every open position automatically.',
      'Manual entry is acceptable if the review is trustworthy.',
      'Broker sync would add risk and scope before that job is proven.',
    ],
    evidenceInputs: [
      'The scope decision recorded for the MVP: closed trades and manual entry.',
      'A launch review that named OTP abuse limits, bot protection, and error handling as risks.',
      'A public site check on 12 October 2026. No usage metric is taken from that check.',
    ],
    decisions: [
      {
        problem: 'A trading product can sprawl into sync, advice, and open positions.',
        decision:
          'The MVP records closed trades by hand and computes review stats: rupee P&L, win rate, profit factor, and an equity curve, with lot sizes for futures and options.',
        tradeoff:
          'Manual entry is slower than a broker connection and will miss trades the user does not log. The journal stays understandable and does not imply a live brokerage link.',
        evidence:
          'Scope is documented as a product choice. There is no measured comparison against broker-sync tools.',
      },
      {
        problem: 'Signup and error paths can fail in public even when the journal maths is right.',
        decision:
          'Treat OTP abuse limits, bot protection, and error handling as launch risks, not as polish after release.',
        tradeoff:
          'More release checks before a simple journal feels finished. Fewer ways for signup traffic to overwhelm the product.',
        evidence:
          'The risks were part of my review. I am not describing how the limits are implemented.',
      },
    ],
    journey: [
      { title: 'Open the journal', detail: 'The app is free, on the web, and installable as a PWA.' },
      { title: 'Log a closed trade', detail: 'The user enters it manually, including lot size where the contract needs it.' },
      { title: 'Read performance', detail: 'P&L is in rupees. Win rate, profit factor, and the equity curve describe closed trades.' },
      { title: 'Stop at review', detail: 'The product does not place trades, sync a broker, or tell the user what to buy.' },
    ],
    rules: {
      title: 'Product boundaries',
      items: [
        {
          title: 'Closed trades only',
          detail: 'The review is about trades that have finished.',
          failure: 'Open positions and broker state are out of scope.',
        },
        {
          title: 'No advice',
          detail: 'Stats describe the log the user entered.',
          failure: 'A curve is not a recommendation to trade.',
        },
        {
          title: 'No broker connection',
          detail: 'Nothing is pulled from a trading account.',
          failure: 'If it was not entered, it is not in the journal.',
        },
      ],
    },
    collaboration:
      'Independent weekend work. Launch review covered abuse limits, bot protection, and error handling alongside the journal scope. No implementation detail is included here.',
    outcomes: [
      {
        kind: 'Status',
        text: 'Public site niveshpustika.in was reachable on 12 October 2026. The product is a free journal. No user count is approved.',
      },
      {
        kind: 'Scope',
        text: 'Shipped capability in the product definition: manual closed trades, rupee P&L, futures and options lot sizes, win rate, profit factor, and performance views. Broker sync is intentionally absent.',
      },
    ],
    lessons: [
      'The first version should do the review job completely before it connects to anyone else’s system.',
      'A performance chart without a boundary will be read as advice. The boundary has to be part of the product.',
    ],
    next: [
      'Watch whether manual entry is enough for a real review habit before considering any integration.',
      'See whether the launch protections hold in actual signup traffic. No incident figure is published.',
    ],
    links: [
      {
        label: 'niveshpustika.in',
        href: 'https://niveshpustika.in',
        verified: true,
        verifiedAsOf: '12 October 2026',
      },
    ],
    media: {
      title: 'A closed trade, entered by hand',
      caption: 'Illustrative journal row. Not a production screenshot and not a real return.',
      rows: [
        { label: 'Status', value: 'Closed trade' },
        { label: 'Size', value: 'Lot size applied for F&O' },
        { label: 'Result', value: 'P&L in rupees' },
        { label: 'Broker', value: 'Not connected' },
      ],
    },
  },
];

export function getCaseStudy(slug) {
  return caseStudies.find((study) => study.slug === slug) ?? null;
}

export function getFeaturedStudies() {
  return caseStudies.filter((study) => study.featured);
}

export function getIndependentStudies() {
  return caseStudies.filter((study) => study.category === 'independent');
}
