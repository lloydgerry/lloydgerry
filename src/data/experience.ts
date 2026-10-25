// The whole story, newest first. `tracks` drives the lens in the timeline:
// an entry is highlighted under every lens it lists.
//
// Anything wrapped in [[double brackets]] is unwritten and renders as a
// highlighted placeholder. `grep -rn '\[\[' src` finds them all.

export type Track = 'software' | 'leadership' | 'business';

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
];

export const chapters: Chapter[] = [
  {
    org: 'GSTS',
    context: 'Maritime intelligence for supply chain and defence',
    title: 'Senior Software Engineer → Engineering Manager',
    period: '[[start]] – Oct 2026',
    tracks: ['software', 'leadership'],
    summary:
      'Joined as a senior engineer on the platform, then took over the team of seven building it.',
    highlights: [
      'Introduced CI/CD and coding standards the team kept; releases stopped being an event',
      'Adopted AI tooling deliberately across the team',
      'Rebuilt how engineering worked with Product, QA, and senior leadership',
    ],
    stack: ['React', 'Node', 'AWS'],
  },
  {
    org: 'Lighthouse Labs',
    context: 'Coding bootcamp',
    title: 'Mentor',
    period: '[[dates]]',
    tracks: ['software', 'leadership'],
    summary: 'Mentored students through full-stack web development.',
    highlights: [],
    stack: [],
  },
  {
    org: 'Ether Capital',
    context: 'Fintech · Ethereum data',
    title: 'Software Engineer',
    period: '[[dates]]',
    tracks: ['software', 'business'],
    summary:
      'Built a dashboard on Google Cloud turning raw Ethereum data into financial reports the business could act on, then designed the interview program and ran hiring loops with the COO.',
    highlights: [],
    stack: ['Django', 'React', 'GCP'],
  },
  {
    org: 'Maximus Canada',
    context: 'Health Insurance BC · public sector',
    title: 'Software Developer & ScrumMaster',
    period: '[[dates]]',
    tracks: ['software', 'leadership'],
    summary:
      'ScrumMaster on a greenfield build for the Ministry, plus a monitoring and alerting overhaul for critical applications.',
    highlights: [],
    stack: ['Perl', 'Java'],
  },
  {
    org: 'AbeBooks, an Amazon company',
    context: 'BookFinder.com & AbeBooks.com',
    title: 'Software Development Engineer',
    period: '[[dates]]',
    tracks: ['software'],
    summary:
      'The engineering career started in the same building: bot mitigation with WAF and Lambda, sendmail to SES, and legacy services cut over to CDK pipelines.',
    highlights: [],
    stack: ['Python', 'Flask', 'AWS'],
  },
  {
    org: 'Amazon',
    context: 'Customer service · five years',
    title: 'Tier 2 Support → Customer Success Lead',
    period: '[[dates]]',
    tracks: ['leadership'],
    summary:
      'Wrote policy, ran the coaching program, did QA reviews across offices, and travelled internationally to train other trainers.',
    highlights: [],
    stack: [],
  },
  {
    org: '[[photography company name]]',
    context: 'Own business · eight years',
    title: 'Founder & Photographer',
    period: '[[dates]]',
    tracks: ['business'],
    summary: '[[what you shot, who the clients were, what running it taught you]]',
    highlights: [],
    stack: [],
  },
  {
    org: '[[company]]',
    context: '[[industry]]',
    title: '[[sales role]]',
    period: '[[dates]]',
    tracks: ['business', 'leadership'],
    summary: '[[what you sold, to whom, and the results — targets hit, team managed]]',
    highlights: [],
    stack: [],
  },
  {
    org: '[[business school]]',
    context: 'Finance',
    title: '[[degree or program]]',
    period: '[[years]]',
    tracks: ['business'],
    summary:
      'Studied finance before any of the software — which is why I still argue for engineering work in the language of cost and risk.',
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
