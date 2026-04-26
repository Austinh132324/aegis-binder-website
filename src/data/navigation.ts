export interface NavLink {
  label: string;
  to?: string;
  href?: string;
}

export const PRIMARY_NAV: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/features' },
  { label: 'Security', to: '/security' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export const FOOTER_NAV: NavLink[] = [
  { label: 'Features', to: '/features' },
  { label: 'Security', to: '/security' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Login', href: 'https://portal.surecompanion.com' },
];
