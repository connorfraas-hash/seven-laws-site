import React from 'react'

export function Law04Hero() {
  return (
    <section className="law04-hero">
      <div className="law04-bg-layer law04-bg-gradient" />
      <div className="law04-bg-layer law04-bg-noise" />

      <div className="law04-inner">
        <div className="law04-copy">
          <p className="law-label">LAW 04</p>
          <h1 className="law04-title">The Learning Loop</h1>
          <p className="law04-lead">
            Mastery isn&apos;t built in a single moment. The Learning Loop trains
            leaders to move fast, test small, and treat every outcome as
            information — not a verdict.
          </p>
          <p className="law04-body">
            Great builders don&apos;t bet the institution on untested ideas. They
            take disciplined shots: define a small experiment, act, review the
            feedback, then adjust the next move. Over time, these loops create
            unfair advantage — not through luck, but through deliberate practice.
          </p>
        </div>

        <div className="law04-visual">
          <svg
            className="law04-court"
            viewBox="0 0 600 260"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="law04-glow" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#facc15" stopOpacity="0.85" />
                <stop offset="40%" stopColor="#facc15" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0b1220" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="law04-lines" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fcd34d" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>

            {/* floor arc */}
            <path
              d="M40 210 Q 300 260 560 210"
              fill="none"
              stroke="url(#law04-lines)"
              strokeWidth="1.2"
              opacity="0.5"
            />

            {/* hoop stand */}
            <line
              x1="470"
              y1="110"
              x2="470"
              y2="200"
              stroke="#e5e7eb"
              strokeWidth="2"
              strokeOpacity="0.85"
            />
            <rect
              x="440"
              y="80"
              width="60"
              height="40"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="2"
              strokeOpacity="0.75"
              rx="4"
            />
            <ellipse
              cx="470"
              cy="135"
              rx="34"
              ry="7"
              fill="none"
              stroke="url(#law04-lines)"
              strokeWidth="2.4"
            />

            {/* faint motion arc */}
            <path
              className="law04-shot-arc"
              d="M140 185 Q 300 60 470 135 Q 300 210 140 185"
              fill="none"
              stroke="rgba(248, 250, 252, 0.15)"
              strokeWidth="1.2"
              strokeDasharray="4 6"
            />

            {/* stick figure shooter */}
            <g className="law04-shooter">
              {/* body */}
              <line
                x1="140"
                y1="150"
                x2="140"
                y2="205"
                stroke="#e5e7eb"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* legs */}
              <line
                x1="140"
                y1="205"
                x2="125"
                y2="230"
                stroke="#e5e7eb"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="140"
                y1="205"
                x2="155"
                y2="230"
                stroke="#e5e7eb"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* arms */}
              <line
                x1="140"
                y1="165"
                x2="165"
                y2="150"
                stroke="#e5e7eb"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="140"
                y1="165"
                x2="155"
                y2="180"
                stroke="#e5e7eb"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.85"
              />
              {/* head */}
              <circle
                cx="140"
                cy="135"
                r="10"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="2.2"
              />
            </g>

            {/* looping ball */}
            <g className="law04-ball">
              <circle
                r="8"
                fill="#facc15"
                stroke="#fde68a"
                strokeWidth="1.5"
              />
              <circle r="20" fill="url(#law04-glow)" opacity="0.65" />
            </g>
          </svg>

          <div className="law04-scroll-label">SCROLL</div>
        </div>
      </div>
    </section>
  )
}
