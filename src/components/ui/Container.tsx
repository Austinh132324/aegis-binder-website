import type { HTMLAttributes, ReactNode } from 'react';
import './Container.css';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'narrow' | 'default' | 'wide';
  children: ReactNode;
}

export function Container({ size = 'default', className = '', children, ...rest }: ContainerProps) {
  const classes = ['ab-container', `ab-container--${size}`, className].filter(Boolean).join(' ');
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
