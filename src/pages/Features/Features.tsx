import { useEffect } from 'react';
import { Container } from '../../components/ui/Container';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { CallToActionBand } from '../../components/sections/CallToActionBand';
import { FEATURE_SECTIONS } from '../../data/features';
import type { Feature } from '../../data/features';
import './Features.css';

const ICONS: Record<Feature['icon'], JSX.Element> = {
  users: (
    <path d="M10 17a5 5 0 1 1 10 0M18 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0M19 17a5 5 0 0 1 5 0M24 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M6 10a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M6 17a5 5 0 0 0-5 0" />
  ),
  shield: <path d="M15 3l9 4v7c0 6-4 10-9 12-5-2-9-6-9-12V7l9-4zm-4 11l3 3 6-6" />,
  chart: <path d="M4 20V8m6 12V4m6 16v-8m6 8v-6M3 24h24" />,
  workflow: (
    <path d="M6 7h8M6 14h8M6 21h8M18 7h6M18 14h6M18 21h6M16 7h2M16 14h2M16 21h2" />
  ),
  document: (
    <path d="M8 3h9l5 5v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM17 3v5h5M10 13h10M10 17h10M10 21h6" />
  ),
  spark: <path d="M15 3v6M15 19v6M3 15h6M19 15h6M7 7l4 4M19 19l4 4M7 23l4-4M19 11l4-4" />,
};

export default function Features() {
  useEffect(() => {
    document.title = 'Features | Aegis Binder';
  }, []);

  return (
    <>
      <section className="ab-page-header">
        <Container>
          <SectionHeading
            eyebrow="Features"
            title="A platform shaped around producing agencies."
            description="Every feature in Aegis Binder is there because it supports the way real insurance teams work with clients, policies, and data."
          />
        </Container>
      </section>

      <section className="ab-feature-sections">
        <Container>
          {FEATURE_SECTIONS.map((section, index) => (
            <article
              key={section.id}
              className={`ab-feature-section${index % 2 === 1 ? ' ab-feature-section--reverse' : ''}`}
            >
              <div className="ab-feature-section__copy">
                <span className="eyebrow">{section.eyebrow}</span>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ab-feature-section__visual" aria-hidden="true">
                <svg
                  viewBox="0 0 28 28"
                  width="72"
                  height="72"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {ICONS[section.icon]}
                </svg>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <CallToActionBand />
    </>
  );
}
