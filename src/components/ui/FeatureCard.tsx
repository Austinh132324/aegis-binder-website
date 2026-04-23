import type { Feature } from '../../data/features';
import './FeatureCard.css';

interface FeatureCardProps {
  feature: Feature;
}

const ICONS: Record<Feature['icon'], JSX.Element> = {
  users: (
    <path d="M10 17a5 5 0 1 1 10 0M18 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0M19 17a5 5 0 0 1 5 0M24 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M6 10a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M6 17a5 5 0 0 0-5 0" />
  ),
  shield: (
    <path d="M15 3l9 4v7c0 6-4 10-9 12-5-2-9-6-9-12V7l9-4zm-4 11l3 3 6-6" />
  ),
  chart: (
    <path d="M4 20V8m6 12V4m6 16v-8m6 8v-6M3 24h24" />
  ),
  workflow: (
    <path d="M6 7h8M6 14h8M6 21h8M18 7h6M18 14h6M18 21h6M16 7h2M16 14h2M16 21h2" />
  ),
  document: (
    <path d="M8 3h9l5 5v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM17 3v5h5M10 13h10M10 17h10M10 21h6" />
  ),
  spark: (
    <path d="M15 3v6M15 19v6M3 15h6M19 15h6M7 7l4 4M19 19l4 4M7 23l4-4M19 11l4-4" />
  ),
};

function FeatureIcon({ name }: { name: Feature['icon'] }) {
  return (
    <svg
      viewBox="0 0 28 28"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <article className="ab-feature-card">
      <div className="ab-feature-card__icon">
        <FeatureIcon name={feature.icon} />
      </div>
      <h3 className="ab-feature-card__title">{feature.title}</h3>
      <p className="ab-feature-card__description">{feature.description}</p>
    </article>
  );
}
