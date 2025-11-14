'use client'

import { useEffect, useState } from 'react'
import type React from 'react'

type PuzzlePieceConfig = {
  id: number
  initialX: number
  initialY: number
  initialRotate: number
  finalX: number
  finalY: number
  finalRotate: number
  delay: number
}

// final positions: tight cluster suitable for a blueprint overlay
const pieces: PuzzlePieceConfig[] = [
  // top row
  { id: 1, initialX: -260, initialY: -220, initialRotate: -28, finalX: -130, finalY: -90, finalRotate: -4, delay: 0 },
  { id: 2, initialX: 260,  initialY: -210, initialRotate: 22,  finalX: 0,     finalY: -90, finalRotate: 0,  delay: 80 },
  { id: 3, initialX: 320,  initialY: -120, initialRotate: 16,  finalX: 130,   finalY: -90, finalRotate: 4,  delay: 140 },

  // middle row
  { id: 4, initialX: -320, initialY: 40,   initialRotate: -18, finalX: -130,  finalY: 30,  finalRotate: -3, delay: 200 },
  { id: 5, initialX: -230, initialY: 220,  initialRotate: -10, finalX: 0,     finalY: 30,  finalRotate: 0,  delay: 260 },
  { id: 6, initialX: 230,  initialY: 230,  initialRotate: 12,  finalX: 130,   finalY: 30,  finalRotate: 3,  delay: 320 },

  // bottom row
  { id: 7, initialX: -140, initialY: 260,  initialRotate: -6,  finalX: -65,   finalY: 140, finalRotate: -2, delay: 380 },
  { id: 8, initialX: 140,  initialY: 260,  initialRotate: 6,   finalX: 65,    finalY: 140, finalRotate: 2,  delay: 440 },
]

export function Law05Hero() {
  const [assembled, setAssembled] = useState(false)
  const [showCopy, setShowCopy] = useState(false)

  useEffect(() => {
    // scattered -> assembled
    const assembleTimer = window.setTimeout(() => {
      setAssembled(true)
    }, 700)

    // text fade-in
    const copyTimer = window.setTimeout(() => {
      setShowCopy(true)
    }, 1200)

    return () => {
      window.clearTimeout(assembleTimer)
      window.clearTimeout(copyTimer)
    }
  }, [])

  return (
    <section className="law05-hero">
      <div className="law05-hero-bg" />

      {/* tiles */}
      <div className="law05-pieces-layer" aria-hidden="true">
        {pieces.map((piece) => (
          <div
            key={piece.id}
            className={
              'law05-piece ' +
              (assembled ? 'law05-piece--assembled' : 'law05-piece--floating')
            }
            style={
              {
                '--initial-x': `${piece.initialX}px`,
                '--initial-y': `${piece.initialY}px`,
                '--initial-rotate': `${piece.initialRotate}deg`,
                '--final-x': `${piece.finalX}px`,
                '--final-y': `${piece.finalY}px`,
                '--final-rotate': `${piece.finalRotate}deg`,
                '--piece-delay': `${piece.delay}ms`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* blueprint overlay: draws in when tiles lock */}
      <div
        className={
          'law05-blueprint-layer' +
          (assembled ? ' law05-blueprint-layer--active' : '')
        }
        aria-hidden="true"
      />

      {/* optional subtle flash on lock-in */}
      <div
        className={
          'law05-pattern-overlay' +
          (assembled ? ' law05-pattern-overlay--active' : '')
        }
        aria-hidden="true"
      />

      {/* copy */}
      <div
        className={
          'law05-hero-content' +
          (showCopy ? ' law05-hero-content--visible' : ' law05-hero-content--hidden')
        }
      >
        <p className="law05-kicker">LAW 05</p>
        <h1 className="law05-title">See Beyond the Obvious</h1>
        <p className="law05-subtitle">
          The ability to recognize the deeper pattern — even when the pieces look disconnected.
        </p>
      </div>

      <div className="law05-scroll-indicator" aria-hidden="true">
        <span className="law05-scroll-line" />
        <span className="law05-scroll-label">SCROLL</span>
      </div>
    </section>
  )
}
