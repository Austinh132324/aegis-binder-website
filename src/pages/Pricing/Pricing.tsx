import { useEffect, useState } from 'react';
import { Container } from '../../components/ui/Container';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { CallToActionBand } from '../../components/sections/CallToActionBand';
import {
  PRICING_INTRO,
  ANNUAL_NOTE,
  TRUST_COPY,
  DISCLAIMER,
  PRICING_PLANS,
  type PricingPlan,
  type PriceValue,
} from '../../data/pricing';
import './Pricing.css';

type Billing = 'monthly' | 'annual';

const PORTAL_SIGNUP_URL = 'https://portal.surecompanion.com/signup';

function formatPrice(value: PriceValue): { amount: string; suffix: string } {
  if (value === 'Custom') return { amount: 'Custom', suffix: '' };
  return { amount: `$${value}`, suffix: '/ user / month' };
}

function planCtaTarget(
  plan: PricingPlan,
  billing: Billing,
): { to?: string; href?: string } {
  // Enterprise routes to sales via the contact page.
  if (plan.id === 'enterprise') return { to: plan.cta.to };
  // Self-serve plans hand off to the portal's signup with plan + billing preselected.
  return {
    href: `${PORTAL_SIGNUP_URL}?plan=${plan.id}&billing=${billing}`,
  };
}

function PlanCard({ plan, billing }: { plan: PricingPlan; billing: Billing }) {
  const value = billing === 'annual' ? plan.annualPrice : plan.monthlyPrice;
  const { amount, suffix } = formatPrice(value);
  const { to, href } = planCtaTarget(plan, billing);

  return (
    <article
      className={`ab-price-card${plan.highlight ? ' ab-price-card--featured' : ''}`}
      aria-labelledby={`plan-${plan.id}-name`}
    >
      {plan.badge ? <span className="ab-price-card__badge">{plan.badge}</span> : null}

      <header className="ab-price-card__head">
        <h3 id={`plan-${plan.id}-name`} className="ab-price-card__name">
          {plan.name}
        </h3>
        <div className="ab-price-card__price">
          <span className="ab-price-card__amount">{amount}</span>
          {suffix ? <span className="ab-price-card__suffix">{suffix}</span> : null}
        </div>
        <span className="ab-price-card__ai-tier">{plan.aiTier}</span>
        <p className="ab-price-card__best-for">{plan.bestFor}</p>
      </header>

      {href ? (
        <Button
          href={href}
          variant={plan.highlight ? 'primary' : 'secondary'}
          size="lg"
          fullWidth
        >
          {plan.cta.label}
        </Button>
      ) : (
        <Button
          to={to!}
          variant={plan.highlight ? 'primary' : 'secondary'}
          size="lg"
          fullWidth
        >
          {plan.cta.label}
        </Button>
      )}

      <div className="ab-price-card__lists">
        <div className="ab-price-card__list">
          <h4 className="ab-price-card__list-heading">Includes</h4>
          <ul>
            {plan.includes.map((item) => (
              <li key={item}>
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="ab-price-card__list">
          <h4 className="ab-price-card__list-heading ab-price-card__list-heading--ai">
            AI features
          </h4>
          <ul>
            {plan.aiFeatures.map((item) => (
              <li key={item}>
                <SparkIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 8l3.5 3.5L13 4" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 1.5l1.6 4.4 4.4 1.6-4.4 1.6L8 13.5l-1.6-4.4L2 7.5l4.4-1.6z" />
    </svg>
  );
}

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>('monthly');

  useEffect(() => {
    document.title = 'Pricing | Sure Companion';
  }, []);

  return (
    <>
      <section className="ab-page-header">
        <Container>
          <SectionHeading
            eyebrow={PRICING_INTRO.eyebrow}
            title={
              <>
                Modern insurance software with{' '}
                <span className="ab-aegis">Aegis</span>
              </>
            }
            description={PRICING_INTRO.description}
            align="center"
          />

          <div className="ab-pricing-toggle" role="group" aria-label="Billing period">
            <span
              className="ab-pricing-toggle__indicator"
              aria-hidden="true"
              data-active={billing}
            />
            <button
              type="button"
              className={`ab-pricing-toggle__btn${billing === 'monthly' ? ' ab-pricing-toggle__btn--active' : ''}`}
              onClick={() => setBilling('monthly')}
              aria-pressed={billing === 'monthly'}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`ab-pricing-toggle__btn${billing === 'annual' ? ' ab-pricing-toggle__btn--active' : ''}`}
              onClick={() => setBilling('annual')}
              aria-pressed={billing === 'annual'}
            >
              Annual
            </button>
          </div>
          <p className="ab-pricing-toggle__note">{ANNUAL_NOTE}</p>
        </Container>
      </section>

      <section className="ab-pricing">
        <Container>
          <div className="ab-pricing__grid">
            {PRICING_PLANS.map((plan) => (
              <PlanCard key={plan.id} plan={plan} billing={billing} />
            ))}
          </div>

          <p className="ab-pricing__trust">{TRUST_COPY}</p>
          <p className="ab-pricing__disclaimer">{DISCLAIMER}</p>
        </Container>
      </section>

      <CallToActionBand />
    </>
  );
}
