import { Link } from 'react-router-dom';
import shieldUrl from '../../assets/logo/sure-companion-shield.png';
import logoAlternateUrl from '../../assets/logo/sure-companion-logo-alternate.png';
import logoWhiteUrl from '../../assets/logo/sure-companion-logo-white.png';
import './LogoLockup.css';

interface LogoLockupProps {
  variant?: 'full' | 'shield';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  to?: string;
  /** Surface the logo sits on. 'dark' (blue/non-white) uses the alternate logo;
   *  'light' (white) uses the white-named logo. Defaults to 'dark'. */
  theme?: 'dark' | 'light';
}

export function LogoLockup({
  variant = 'full',
  size = 'md',
  asLink = true,
  to = '/',
  theme = 'dark',
}: LogoLockupProps) {
  const fullLogoSrc = theme === 'light' ? logoWhiteUrl : logoAlternateUrl;

  const content =
    variant === 'shield' ? (
      <img
        src={shieldUrl}
        alt="Sure Companion"
        className={`ab-logo__shield-only ab-logo__shield-only--${size}`}
      />
    ) : (
      <img
        src={fullLogoSrc}
        alt="Sure Companion"
        className={`ab-logo__full ab-logo__full--${size}`}
      />
    );

  if (!asLink) return content;

  return (
    <Link to={to} className="ab-logo-link" aria-label="Sure Companion — home">
      {content}
    </Link>
  );
}
