export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: 'users' | 'shield' | 'chart' | 'workflow' | 'document' | 'spark';
}

export const FEATURES_PREVIEW: Feature[] = [
  {
    id: 'clients',
    title: 'Unified client management',
    description:
      'Every household, business, and policy in a single, searchable view — no more bouncing between tools.',
    icon: 'users',
  },
  {
    id: 'policy',
    title: 'Policy visibility',
    description:
      'See coverage, renewals, and gaps at a glance so you can have better conversations with your clients.',
    icon: 'document',
  },
  {
    id: 'insights',
    title: 'Reporting and insights',
    description:
      'Clean reports built around the way producers work — not someone else’s dashboard.',
    icon: 'chart',
  },
  {
    id: 'security',
    title: 'Security-minded foundation',
    description:
      'Designed with role-aware access and responsible data handling from day one.',
    icon: 'shield',
  },
];

export interface FeatureSection {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  icon: Feature['icon'];
}

export const FEATURE_SECTIONS: FeatureSection[] = [
  {
    id: 'client-management',
    eyebrow: 'Client management',
    title: 'A single home for every client relationship.',
    description:
      'Bring households, businesses, and contacts together with the context your producers need, from the first conversation through every renewal.',
    bullets: [
      'Complete client records with linked policies and documents.',
      'Shared notes and activity across producers and service.',
      'Quick lookup with fast search across the book.',
    ],
    icon: 'users',
  },
  {
    id: 'policy-visibility',
    eyebrow: 'Policy visibility',
    title: 'See the full picture of each policy.',
    description:
      'Aegis Binder surfaces the coverage details that drive your renewal conversations and client reviews.',
    bullets: [
      'Coverage summaries organized for the way producers work.',
      'Renewal and anniversary signals in one shared view.',
      'Attach and retrieve documents without hunting through folders.',
    ],
    icon: 'document',
  },
  {
    id: 'reporting',
    eyebrow: 'Reporting and insights',
    title: 'Reports that actually speak to producers.',
    description:
      'Look at your book from angles that matter: renewals, production, retention, and the signals worth a second look.',
    bullets: [
      'Core reports available without custom setup.',
      'Filters and views producers can actually use.',
      'Export options ready for carrier or leadership review.',
    ],
    icon: 'chart',
  },
  {
    id: 'workflow',
    eyebrow: 'Workflow efficiency',
    title: 'Cleaner handoffs and fewer lost steps.',
    description:
      'Move work through your agency with clarity — from the first quote request to post-renewal follow-up.',
    bullets: [
      'Shared task visibility across producers and service teams.',
      'Clear ownership on every open item.',
      'Fewer spreadsheets, fewer sticky notes, fewer missed steps.',
    ],
    icon: 'workflow',
  },
];
