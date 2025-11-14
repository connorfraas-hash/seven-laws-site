'use client'

import { useEffect, useState } from 'react'

export function Law07Hero() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setReady(true)
    }, 350)

    return () => {
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <section className="law07-hero">
      <div className="law07-hero-bg" />

      <div
        className={
          'law07-hero-inner' +
          (ready ? ' law07-hero-inner--visible' : ' law07-hero-inner--hidden')
        }
      >
        {/* Tug-of-war rope under tension */}
        <div className="law07-rope-wrap" aria-hidden="true">
          {/* Invisible force glows on each side */}
          <div className="law07-force law07-force--left" />
          <div className="law07-force law07-force--right" />

          {/* Left handle/anchor */}
          <div className="law07-handle law07-handle--left" />

          {/* Rope with segments */}
          <div className="law07-rope">
            <div className="law07-rope-segment" />
            <div className="law07-rope-segment" />
            <div className="law07-rope-segment" />
            <div className="law07-rope-segment" />
            <div className="law07-rope-segment" />
            <div className="law07-rope-segment" />
            <div className="law07-rope-segment" />
            <div className="law07-rope-segment" />
            <div className="law07-rope-segment" />
            <div className="law07-rope-segment" />
          </div>

          {/* Center marker/flag */}
          <div className="law07-center-marker" />

          {/* Right handle/anchor */}
          <div className="law07-handle law07-handle--right" />
        </div>

        {/* Text */}
        <div className="law07-text">
          <p className="law07-kicker">LAW 07</p>
          <h1 className="law07-title">The Integrity Test</h1>
          <p className="law07-subtitle">
            The must-win tug-of-war between pressure and principle.
          </p>
          <p className="law07-tagline">
            When the pull is real and you still hold the line.
          </p>
        </div>
      </div>

      <div className="law07-scroll-indicator" aria-hidden="true">
        <span className="law07-scroll-line" />
        <span className="law07-scroll-label">SCROLL</span>
      </div>
    </section>
  )
}
