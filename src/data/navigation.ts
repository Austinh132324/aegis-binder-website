export interface NavLink {
  label: string;
  to?: string;
  href?: string;
}

export interface PrimaryNavLink {
  label: string;
  to: string;
}

export const PRIMARY_NAV: PrimaryNavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/features' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Security', to: '/security' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export const FOOTER_NAV: NavLink[] = [
  { label: 'Features', to: '/features' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Security', to: '/security' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Login', href: 'https://portal.surecompanion.com' },
];
