import { Link } from 'react-router-dom';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

interface CommonProps {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    to?: undefined;
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  to: string;
  href?: undefined;
  type?: undefined;
};

type ButtonAsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
    to?: undefined;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', fullWidth, className = '', children } = props;
  const classes = [
    'ab-button',
    `ab-button--${variant}`,
    `ab-button--${size}`,
    fullWidth ? 'ab-button--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    const { href, ...rest } = props as ButtonAsAnchor;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { variant: _v, size: _s, fullWidth: _fw, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
