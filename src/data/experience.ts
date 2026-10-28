// The whole story, newest first by start date. Sourced from the October 2026
// resumes plus the 2022–23 ones for the pre-software years.
//
// `tracks` drives the lens in the timeline: a chapter is highlighted under every
// lens it lists. Anything wrapped in [[double brackets]] is unwritten and renders
// as a highlighted placeholder. `grep -rn '\[\[' src` finds them all.

export type Track = 'software' | 'leadership' | 'business' | 'service';

export interface Chapter {
  org: string;
  context: string;
  title: string;
  period: string;
  tracks: Track[];
  summary: string;
  highlights: string[];
  stack: string[];
}

export const tracks: { id: Track; label: string }[] = [
  { id: 'software', label: 'Software' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'business', label: 'Business & sales' },
  { id: 'service', label: 'Service' },
];

export const chapters: Chapter[] = [
  {
    org: 'GSTS · OCIANA',
    context: 'Maritime intelligence for supply chain and defence · Remote, Halifax',
    title: 'Engineering Manager, Full Stack',
    period: 'Dec 2024 – Oct 2026',
    tracks: ['leadership', 'software'],
    summary:
      'Sole engineering manager for the ten-person engineering org, then led a team of up to eight as it grew to sixteen — with zero turnover and several promotions.',
    highlights: [
      'Owned the OCIANA application and its internal tooling end to end, setting architecture and building several tools myself',
      'Significantly cut build and release times through CI/CD, build, and monitoring work',
      'Partnered with design and product from concept to delivery; supported hiring and investor discussions',
    ],
    stack: [],
  },
  {
    org: 'GSTS · OCIANA',
    context: 'Remote, Halifax',
    title: 'Senior Full Stack Software Engineer',
    period: 'Mar 2024 – Dec 2024',
    tracks: ['software'],
    summary:
      'Lead engineer integrating satellite and terrestrial data pipelines and AI/ML models into a collaborative platform for supply-chain and defence products.',
    highlights: [],
    stack: ['TypeScript', 'Node', 'React', 'Redux', 'AG Grid', 'AWS ECS · RDS · DynamoDB · Lambda · Cognito'],
  },
  {
    org: 'Scale AI',
    context: 'LLM training data · Remote',
    title: 'Team Lead / Queue Manager',
    period: 'Jan 2024 – Jul 2025',
    tracks: ['leadership', 'software'],
    summary:
      'Led LLM training-data projects for multiple AI customers, turning model goals into task guidelines, rubrics, and quality standards for tasker teams.',
    highlights: ['Managed throughput and quality across concurrent queues through reviews, audits, and feedback loops'],
    stack: [],
  },
  {
    org: 'Lighthouse Labs',
    context: 'Education',
    title: 'Diploma, Cyber Security',
    period: '2023',
    tracks: ['software'],
    summary: 'Now shapes how I approach secure design and code review.',
    highlights: [],
    stack: [],
  },
  {
    org: 'Ether Capital',
    context: 'Fintech · Remote',
    title: 'Full Stack Software Engineer',
    period: 'Aug 2022 – Jul 2023',
    tracks: ['software', 'business'],
    summary:
      'Led development of an Ethereum monitoring product for validators, turning on-chain data into insights and financial reports. Owned delivery end to end on a small team — CI/CD, database architecture, data collection, APIs, and front end.',
    highlights: [],
    stack: ['Django', 'Celery', 'React', 'RTK Query', 'GCP', 'Docker'],
  },
  {
    org: 'Maximus Health',
    context: 'Contracted to the BC Ministry of Health · Remote, Victoria',
    title: 'Application Developer',
    period: 'Jun 2021 – Jul 2022',
    tracks: ['software', 'leadership'],
    summary:
      'Managed Unix servers in Perl and built Java and Python projects; modernised monitoring with Splunk. Certified Scrum Master and project lead on a major project.',
    highlights: [],
    stack: ['Perl', 'Java', 'Python', 'Oracle', 'Splunk'],
  },
  {
    org: 'Lighthouse Labs',
    context: 'Coding bootcamp · Remote',
    title: 'Web Development Mentor',
    period: 'Feb 2021 – Jan 2022',
    tracks: ['software', 'leadership'],
    summary:
      'Mentored full-time bootcamp students through code reviews, topic discussions, and problem-solving.',
    highlights: [],
    stack: ['JavaScript', 'Node', 'React', 'PostgreSQL', 'Rails'],
  },
  {
    org: 'Royal Canadian Marine Search and Rescue',
    context: 'Station 37, Sooke · volunteer',
    title: 'Rescue Crew → Quartermaster → Coxswain',
    period: 'Nov 2020 – present',
    tracks: ['service', 'leadership'],
    summary:
      'Coxswain — vessel commander — for a 24/7 volunteer marine rescue service working alongside the Canadian Coast Guard. I lead crews on search-and-rescue missions and train them in seamanship, rescue operations, and safety.',
    highlights: [],
    stack: [],
  },
  {
    org: 'AbeBooks, an Amazon company',
    context: 'BookFinder.com & AbeBooks.com · Remote',
    title: 'Full Stack Software Developer (Intern)',
    period: 'Mar 2020 – Jun 2021',
    tracks: ['software'],
    summary: 'Where the engineering career started — in the same company I’d been supporting for five years.',
    highlights: [
      'Bot mitigation using a live-updated DynamoDB IP blocklist across multiple layers of the app',
      'Migrated Perl sendmail to AWS SES',
      'Built an internal feature-toggle app for marketing on Lambda, React, and API Gateway',
      'Moved legacy on-premise code to AWS CDK CI/CD pipelines',
    ],
    stack: ['Python', 'Flask', 'Java', 'Perl', 'AWS Lambda · EC2 · CDK'],
  },
  {
    org: 'Lighthouse Labs',
    context: 'Education',
    title: 'Diploma, Web Development',
    period: '2019',
    tracks: ['software'],
    summary: 'The intensive that turned a lifelong hobby into a career change.',
    highlights: [],
    stack: [],
  },
  {
    org: 'Fillz, an AbeBooks company',
    context: 'Victoria',
    title: 'Technical Account Manager',
    period: '2018 – Mar 2020',
    tracks: ['business', 'software'],
    summary:
      'Technical support and account management for Fillz customers, entirely through bash tooling. Wrote custom JavaScript pricing scripts and ran the daily priority meeting with the development team.',
    highlights: [],
    stack: [],
  },
  {
    org: 'AbeBooks, an Amazon company',
    context: 'Victoria',
    title: 'Customer Service → Tier 2 Technical Support',
    period: '2015 – 2018',
    tracks: ['leadership'],
    summary:
      'Second-tier support and escalation point. Trained new hires across offices in person and remotely, wrote the training material, and led mentoring to raise agents’ QA scores.',
    highlights: [],
    stack: [],
  },
  {
    org: 'Rock Doc',
    context: 'BC Place · special events',
    title: 'OFA Level 3 First Aid — Group Leader',
    period: '2013 – 2017',
    tracks: ['service', 'leadership'],
    summary: 'Led on-site first aid at major events alongside doctors and nurses.',
    highlights: [],
    stack: [],
  },
  {
    org: 'LG Photography',
    context: 'Own business · Victoria',
    title: 'Owner & Photographer',
    period: '2009 – 2016',
    tracks: ['business'],
    summary:
      'Commercial, product, and portrait photography in studio and on location. Ran everything: the shoots, the editing, the website, and finding the clients.',
    highlights: [],
    stack: [],
  },
  {
    org: 'Western Academy of Photography',
    context: 'Education',
    title: 'Diploma, Professional Photography',
    period: '2008 – 2009',
    tracks: ['business'],
    summary: '',
    highlights: [],
    stack: [],
  },
  {
    org: 'Future Shop',
    context: 'Consumer electronics retail',
    title: 'Sales → Floor Manager',
    period: '2007 – 2010',
    tracks: ['business', 'leadership'],
    summary:
      'Sold on the floor, and stepped up as floor manager at times — running the shift and the team on it.',
    highlights: [],
    stack: [],
  },
  {
    org: 'Camosun College',
    context: 'Business school',
    title: 'Diploma, Business — Finance',
    period: '2005 – 2008',
    tracks: ['business'],
    summary:
      'Why I still argue for engineering work in the language of cost and risk rather than elegance.',
    highlights: [],
    stack: [],
  },
  {
    org: '[[company]]',
    context: 'Operations',
    title: 'Technical Support → Operations Supervisor',
    period: '[[dates]]',
    tracks: ['leadership'],
    summary:
      'Started in technical support at 20; six promotions later, at 21, I was running 120 direct reports and six managers.',
    highlights: [],
    stack: [],
  },
];
