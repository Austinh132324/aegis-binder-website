export type PriceValue = number | 'Custom';

export interface PricingPlanCta {
  label: string;
  to?: string;
  href?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: PriceValue;
  annualPrice: PriceValue;
  badge?: string;
  highlight?: boolean;
  bestFor: string;
  aiTier: string;
  includes: string[];
  aiFeatures: string[];
  cta: PricingPlanCta;
}

export const PRICING_INTRO = {
  eyebrow: 'Pricing',
  title: 'Modern insurance software with Aegis',
  description:
    'Every plan includes AI—start with essential insights, then scale into advanced automation and intelligence.',
};

export const ANNUAL_NOTE = 'Save 15% with annual billing';

export const TRUST_COPY =
  'AI is included in every plan. No separate add-ons or hidden fees.';

export const DISCLAIMER =
  'AI usage is subject to fair use limits depending on plan tier. Messaging and SMS may include usage-based costs.';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 29,
    annualPrice: 25,
    bestFor: 'Solo agents or small teams getting organized with AI assistance',
    aiTier: 'Basic AI Included',
    includes: [
      'Client CRM',
      'Policy management',
      'Secure document storage',
      'Basic dashboard',
      'Renewal date tracking',
      'Notes and activity history',
    ],
    aiFeatures: [
      'Policy document summarization',
      'Basic coverage extraction',
      'Simple client summaries',
      'Limited AI prompts per month',
    ],
    cta: { label: 'Start with Starter', to: '/contact' },
  },
  {
    id: 'growth',
    name: 'Growth',
    monthlyPrice: 49,
    annualPrice: 42,
    badge: 'Most Popular',
    highlight: true,
    bestFor: 'Agencies that want automation, reminders, and smarter insights',
    aiTier: 'AI Max Included',
    includes: [
      'Everything in Starter',
      'Renewal reminders',
      'Task management',
      'KPI dashboard',
      'Email templates',
      'Agent performance tracking',
      'Policy opportunity tracking',
    ],
    aiFeatures: [
      'Advanced policy parsing',
      'Coverage gap detection',
      'Risk insights',
      'Smart renewal recommendations',
      'AI-generated client emails',
      'Higher usage limits',
    ],
    cta: { label: 'Choose Growth', to: '/contact' },
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: 79,
    annualPrice: 67,
    bestFor: 'Agencies that want client-facing tools and deeper intelligence',
    aiTier: 'AI Max Included',
    includes: [
      'Everything in Growth',
      'Client-facing portal',
      'Policy comparison tools',
      'Advanced analytics',
      'SMS/email automation',
      'Coverage gap insights',
      'Priority support',
    ],
    aiFeatures: [
      'Full policy intelligence engine',
      'Cross-policy comparisons',
      'Client-level risk scoring',
      'Automated upsell suggestions',
      'Workflow-triggered AI actions',
    ],
    cta: { label: 'Choose Pro', to: '/contact' },
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyPrice: 'Custom',
    annualPrice: 'Custom',
    bestFor: 'Larger agencies and brokerages needing scale and customization',
    aiTier: 'AI Max Included (Enhanced)',
    includes: [
      'Everything in Pro',
      'White-label branding',
      'Custom integrations',
      'API access',
      'Advanced permissions',
      'Dedicated onboarding',
      'Priority support',
    ],
    aiFeatures: [
      'Custom AI workflows',
      'Agency-specific tuning',
      'Bulk document processing',
      'API-level AI access',
      'Priority processing limits',
    ],
    cta: { label: 'Contact Sales', to: '/contact' },
  },
];
