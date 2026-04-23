import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { LogoLockup } from '../ui/LogoLockup';
import { MobileMenu } from './MobileMenu';
import { PRIMARY_NAV } from '../../data/navigation';
import './Header.css';
import './Header.mobile.css';

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (open) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  return (
    <header className="ab-header">
      <Container>
        <div className="ab-header__inner">
          <div className="ab-header__brand">
            <LogoLockup size="md" />
          </div>

          <nav className="ab-header__nav" aria-label="Primary">
            <ul className="ab-header__nav-list">
              {PRIMARY_NAV.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `ab-header__nav-link${isActive ? ' ab-header__nav-link--active' : ''}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ab-header__actions">
            <Button to="/login" variant="primary">
              Login
            </Button>
          </div>

          <button
            type="button"
            className="ab-header__menu-btn"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="ab-mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`ab-header__bars${open ? ' ab-header__bars--open' : ''}`} aria-hidden>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </Container>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
