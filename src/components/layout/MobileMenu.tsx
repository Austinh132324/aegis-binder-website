import { NavLink } from 'react-router-dom';
import { Button } from '../ui/Button';
import { PRIMARY_NAV } from '../../data/navigation';
import './MobileMenu.css';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      id="ab-mobile-menu"
      className={`ab-mobile-menu${open ? ' ab-mobile-menu--open' : ''}`}
      aria-hidden={!open}
    >
      <button
        type="button"
        className="ab-mobile-menu__scrim"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
      />
      <nav className="ab-mobile-menu__panel" aria-label="Mobile">
        <ul className="ab-mobile-menu__list">
          {PRIMARY_NAV.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `ab-mobile-menu__link${isActive ? ' ab-mobile-menu__link--active' : ''}`
                }
                onClick={onClose}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="ab-mobile-menu__footer">
          <Button to="/login" variant="primary" fullWidth size="lg">
            Login
          </Button>
        </div>
      </nav>
    </div>
  );
}
