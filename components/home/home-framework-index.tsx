"use client";

import Link from "next/link";

const LAWS = [
  {
    number: "01",
    slug: "trust-but-test",
    name: "Trust, but Test",
    tag: "Decision Filter",
    summary:
      "Build high–trust environments without being naive. Pair confidence in people with clear verification."
  },
  {
    number: "02",
    slug: "the-dual-lens",
    name: "The Dual Lens",
    tag: "Pattern Lens",
    summary:
      "Train yourself to see both: the world as it is, and the pattern your experience reads inside it."
  },
  {
    number: "03",
    slug: "the-inner-compass",
    name: "The Inner Compass",
    tag: "Alignment",
    summary:
      "Anchor big decisions in alignment, not noise. Hold direction, alignment, and discernment together."
  },
  {
    number: "04",
    slug: "the-learning-loop",
    name: "The Learning Loop",
    tag: "Practice System",
    summary:
      "Move fast without gambling the institution. Take disciplined shots, learn quickly, then adjust."
  },
  {
    number: "05",
    slug: "see-beyond-the-obvious",
    name: "See Beyond the Obvious",
    tag: "Insight Engine",
    summary:
      "Recognize deeper patterns before others see them. Read what the scattered pieces are quietly forming."
  },
  {
    number: "06",
    slug: "future-sense",
    name: "Future Sense",
    tag: "Foresight",
    summary:
      "Read early signals, see around corners, and position your team before the next wave hits."
  },
  {
    number: "07",
    slug: "the-integrity-test",
    name: "The Integrity Test",
    tag: "Non-Negotiables",
    summary:
      "Protect what must never be traded. Run every move through a simple test that keeps courage and character intact."
  }
];

export function HomeFrameworkIndex() {
  return (
    <section className="home-laws-section" aria-labelledby="home-laws-heading">
      <div className="home-laws-inner">
        <header className="home-laws-header">
          <p className="home-laws-kicker">Framework Index</p>
          <h2 id="home-laws-heading" className="home-laws-title">
            The 7 Laws, at a glance.
          </h2>
          <p className="home-laws-subtitle">
            Each law is a repeatable discipline. Scan the grid, then open the one
            your leadership needs most right now.
          </p>
        </header>

        <div className="home-laws-grid">
          {LAWS.map((law) => (
            <Link
              key={law.slug}
              href={`/laws/${law.slug}`}
              className="home-law-card"
            >
              <div className="home-law-card-glow" aria-hidden="true" />
              <div className="home-law-card-content">
                <div className="home-law-card-top">
                  <span className="home-law-number">{law.number}</span>
                  <span className="home-law-tag">{law.tag}</span>
                </div>
                <h3 className="home-law-name">{law.name}</h3>
                <p className="home-law-summary">{law.summary}</p>
                <div className="home-law-cta-row">
                  <span className="home-law-cta-text">Open this law</span>
                  <span className="home-law-cta-arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
