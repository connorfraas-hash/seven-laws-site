'use client'

import React from 'react'
import Image from 'next/image'

export function Law02Hero() {
  return (
    <section className="law02-hero">
      {/* Base mountain image */}
      <div className="law02-base-layer">
        <Image
          src="/images/law02-hero-base.jpg"
          alt="Misty mountain ridge seen through layers of fog"
          fill
          priority
          sizes="100vw"
          className="law02-base-image"
        />
      </div>

      {/* Cloud drift overlay */}
      <div className="law02-cloud-layer" aria-hidden="true" />

      {/* Lens wrapper */}
      <div className="law02-lens-wrapper">
        <div className="law02-lens">
          <div className="law02-lens-inner" />
        </div>
      </div>

      {/* Text overlay */}
      <div className="law02-hero-text">
        <p className="law02-kicker">LAW 02</p>
        <h1 className="law02-title">The Dual Lens</h1>
        <p className="law02-subtitle">
          Two lenses on every decision: the world as it is, and the pattern your experience sees
          inside it.
        </p>
      </div>

      {/* Scroll hint */}
      <div className="law02-scroll-hint">
        <span className="law02-scroll-line" />
        <span className="law02-scroll-label">Scroll</span>
      </div>
    </section>
  )
}

