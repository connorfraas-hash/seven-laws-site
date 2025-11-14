'use client'

import { useEffect, useState } from 'react'

export function Law03Hero() {
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
    <section className="law03-hero">
      <div className="law03-hero-bg" />

      <div
        className={
          'law03-hero-inner' +
          (ready ? ' law03-hero-inner--visible' : ' law03-hero-inner--hidden')
        }
      >
        {/* Compass cluster */}
        <div className="law03-compass-wrapper" aria-hidden="true">
          {/* soft background glow */}
          <div className="law03-compass-glow" />

          {/* expanding pulse ring */}
          <div className="law03-compass-pulse" />

          {/* main ring */}
          <div className="law03-compass-ring">
            <div className="law03-compass-hash law03-compass-hash--n" />
            <div className="law03-compass-hash law03-compass-hash--e" />
            <div className="law03-compass-hash law03-compass-hash--s" />
            <div className="law03-compass-hash law03-compass-hash--w" />
          </div>

          {/* inner core */}
          <div className="law03-compass-core" />

          {/* needle */}
          <div className="law03-compass-needle">
            <div className="law03-needle-body" />
            <div className="law03-needle-tip" />
          </div>
        </div>

        {/* Text block */}
        <div className="law03-text">
          <p className="law03-kicker">LAW 03</p>
          <h1 className="law03-title">The Inner Compass</h1>
          <p className="law03-subtitle">
            The skill of sensing true north in complex situations — and trusting it enough to act.
          </p>
          <p className="law03-tagline">
            When the inner signal is clear, decisions become simpler.
          </p>
        </div>
      </div>
    </section>
  )
}
