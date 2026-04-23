import type { ReactNode } from 'react';
import './SectionHeading.css';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  as: HeadingTag = 'h2',
}: SectionHeadingProps) {
  return (
    <div className={`ab-section-heading ab-section-heading--${align}`}>
      {eyebrow && <span className="eyebrow ab-section-heading__eyebrow">{eyebrow}</span>}
      <HeadingTag className="ab-section-heading__title">{title}</HeadingTag>
      {description && <p className="ab-section-heading__description">{description}</p>}
    </div>
  );
}
