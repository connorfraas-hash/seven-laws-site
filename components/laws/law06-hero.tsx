'use client'

import { useEffect, useState } from 'react'

export function Law06Hero() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setReady(true)
    }, 400)

    return () => {
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <section className="law06-hero">
      <div className="law06-hero-bg" />

      <div
        className={
          'law06-hero-inner' +
          (ready ? ' law06-hero-inner--visible' : ' law06-hero-inner--hidden')
        }
      >
        {/* Left: copy */}
        <div className="law06-copy">
          <p className="law06-kicker">LAW 06</p>
          <h1 className="law06-title">Design for Stability</h1>
          <p className="law06-subtitle">
            Build systems that hold under pressure. Law 06 is about designing rhythms, guardrails,
            and load-bearing structures so your team can move fast without the wheels coming off.
          </p>
          <p className="law06-tagline">
            Less firefighting. More architecture.
          </p>
        </div>

        {/* Right: Stability Console */}
        <div className="law06-console" aria-hidden="true">
          {/* Card 1: System Health */}
          <div className="law06-card">
            <div className="law06-card-header">
              <span className="law06-card-title">System Health</span>
              <span className="law06-pill law06-pill--good">Stable</span>
            </div>
            <div className="law06-metric-row">
              <span className="law06-metric-label">Load</span>
              <div className="law06-meter">
                <div className="law06-meter-fill law06-meter-fill--primary" />
              </div>
              <span className="law06-metric-value">67%</span>
            </div>
            <div className="law06-metric-row">
              <span className="law06-metric-label">Slack Capacity</span>
              <div className="law06-meter">
                <div className="law06-meter-fill law06-meter-fill--secondary" />
              </div>
              <span className="law06-metric-value">24%</span>
            </div>
            <div className="law06-metric-footnote">
              Designed to flex under spikes without snapping.
            </div>
          </div>

          {/* Card 2: Guardrails */}
          <div className="law06-card">
            <div className="law06-card-header">
              <span className="law06-card-title">Guardrails</span>
              <span className="law06-pill">3 active</span>
            </div>
            <ul className="law06-list">
              <li>
                <span className="law06-dot law06-dot--good" />
                <span className="law06-list-text">Clear decision lanes</span>
              </li>
              <li>
                <span className="law06-dot law06-dot--good" />
                <span className="law06-list-text">Weekly check-in rhythm</span>
              </li>
              <li>
                <span className="law06-dot law06-dot--warn" />
                <span className="law06-list-text">Single-point-of-failure review</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Stress Test */}
          <div className="law06-card law06-card--highlight">
            <div className="law06-card-header">
              <span className="law06-card-title">Stress Test</span>
              <span className="law06-pill law06-pill--accent">Ready</span>
            </div>
            <p className="law06-card-text">
              If volume doubled next quarter, where would the first crack appear?
            </p>
            <div className="law06-status-grid">
              <div className="law06-status-chip law06-status-chip--ok">
                <span className="law06-status-dot" />
                <span>Ops cadence</span>
              </div>
              <div className="law06-status-chip law06-status-chip--ok">
                <span className="law06-status-dot" />
                <span>Financial runway</span>
              </div>
              <div className="law06-status-chip law06-status-chip--risk">
                <span className="law06-status-dot" />
                <span>People load</span>
              </div>
              <div className="law06-status-chip law06-status-chip--ok">
                <span className="law06-status-dot" />
                <span>Customer support</span>
              </div>
              <div className="law06-status-chip law06-status-chip--ok">
                <span className="law06-status-dot" />
                <span>Decision bottlenecks</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="law06-scroll-indicator" aria-hidden="true">
        <span className="law06-scroll-line" />
        <span className="law06-scroll-label">SCROLL</span>
      </div>
    </section>
  )
}
