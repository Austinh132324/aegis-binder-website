import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { LogoLockup } from '../ui/LogoLockup';
import { FOOTER_NAV } from '../../data/navigation';
import { FOOTER } from '../../data/siteContent';
import './Footer.css';

export function Footer() {
  return (
    <footer className="ab-footer">
      <Container>
        <div className="ab-footer__top">
          <div className="ab-footer__brand">
            <LogoLockup size="md" />
            <p className="ab-footer__blurb">{FOOTER.blurb}</p>
          </div>

          <nav className="ab-footer__nav" aria-label="Footer">
            <h4 className="ab-footer__heading">Explore</h4>
            <ul className="ab-footer__list">
              {FOOTER_NAV.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="ab-footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ab-footer__trust">
            <h4 className="ab-footer__heading">Trust</h4>
            <p className="ab-footer__blurb">{FOOTER.trust}</p>
          </div>
        </div>

        <div className="ab-footer__bottom">
          <span>{FOOTER.copyright}</span>
          <span className="ab-footer__meta">Crafted for insurance professionals.</span>
        </div>
      </Container>
    </footer>
  );
}
