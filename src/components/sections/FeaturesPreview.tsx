import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { FeatureCard } from '../ui/FeatureCard';
import { SectionHeading } from '../ui/SectionHeading';
import { FEATURES_PREVIEW } from '../../data/features';
import './FeaturesPreview.css';
import './FeaturesPreview.mobile.css';

export function FeaturesPreview() {
  return (
    <section className="ab-features-preview" aria-labelledby="features-preview-title">
      <Container>
        <div className="ab-features-preview__header">
          <SectionHeading
            eyebrow="What you get"
            title={<span id="features-preview-title">The essentials, built the way agents actually work.</span>}
            description="Aegis Binder focuses on the flows that matter most: clients, policies, insight, and responsible security."
          />
          <Button to="/features" variant="secondary">
            See all features
          </Button>
        </div>

        <ul className="ab-features-preview__grid">
          {FEATURES_PREVIEW.map((feature) => (
            <li key={feature.id}>
              <FeatureCard feature={feature} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
