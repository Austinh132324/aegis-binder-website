import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import shieldUrl from '../../assets/logo/aegis-binder-shield-ab.svg';
import { HERO } from '../../data/siteContent';
import './HeroSection.css';
import './HeroSection.mobile.css';

export function HeroSection() {
  return (
    <section className="ab-hero" aria-labelledby="hero-title">
      <div className="ab-hero__glow" aria-hidden="true" />
      <Container>
        <div className="ab-hero__grid">
          <div className="ab-hero__content">
            <span className="eyebrow">{HERO.eyebrow}</span>
            <h1 id="hero-title" className="ab-hero__title">
              {HERO.headline}
            </h1>
            <p className="ab-hero__subtitle">{HERO.subheadline}</p>
            <div className="ab-hero__ctas">
              <Button to={HERO.primaryCta.to} size="lg">
                {HERO.primaryCta.label}
              </Button>
              <Button to={HERO.secondaryCta.to} variant="secondary" size="lg">
                {HERO.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div className="ab-hero__visual" aria-hidden="true">
            <div className="ab-hero__visual-card">
              <img src={shieldUrl} alt="" className="ab-hero__shield" />
              <div className="ab-hero__ribbon ab-hero__ribbon--1">
                <div className="ab-hero__chip">Policy 2045</div>
                <div className="ab-hero__chip ab-hero__chip--muted">Renewal in 32 days</div>
              </div>
              <div className="ab-hero__ribbon ab-hero__ribbon--2">
                <div className="ab-hero__chip">Book health</div>
                <div className="ab-hero__chip ab-hero__chip--accent">+4.1%</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
