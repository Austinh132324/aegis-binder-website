import { Container } from '../ui/Container';
import { TRUST_BAR } from '../../data/siteContent';
import './TrustBar.css';

export function TrustBar() {
  return (
    <section className="ab-trust" aria-label={TRUST_BAR.eyebrow}>
      <Container>
        <ul className="ab-trust__list">
          {TRUST_BAR.items.map((item) => (
            <li key={item.title} className="ab-trust__item">
              <h3 className="ab-trust__title">{item.title}</h3>
              <p className="ab-trust__detail">{item.detail}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
