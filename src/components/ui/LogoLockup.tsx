import { Link } from 'react-router-dom';
import logoUrl from '../../assets/logo/aegis-binder-logo.svg';
import shieldUrl from '../../assets/logo/aegis-binder-shield-ab.svg';
import './LogoLockup.css';

interface LogoLockupProps {
  variant?: 'full' | 'shield';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  to?: string;
  title?: string;
}

export function LogoLockup({
  variant = 'full',
  size = 'md',
  asLink = true,
  to = '/',
  title = 'Aegis Binder',
}: LogoLockupProps) {
  const src = variant === 'shield' ? shieldUrl : logoUrl;
  const classes = ['ab-logo', `ab-logo--${variant}`, `ab-logo--${size}`].join(' ');

  const img = (
    <img src={src} alt={title} className={classes} />
  );

  if (!asLink) return img;

  return (
    <Link to={to} className="ab-logo-link" aria-label={`${title} — home`}>
      {img}
    </Link>
  );
}
