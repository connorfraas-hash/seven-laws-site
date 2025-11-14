'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface BenefitItem {
  title: string
  description: string
  icon: JSX.Element
}

const benefits: BenefitItem[] = [
  {
    title: 'Clarity in Action',
    description: 'See what matters and act with precision, not reaction.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M32 12 L32 32 L42 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="32" r="3" fill="currentColor" />
        <path d="M32 4 L32 8 M32 56 L32 60 M4 32 L8 32 M56 32 L60 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Anchored Alignment',
    description: 'Create a culture grounded in values and direction, not drift.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 8 L20 24 L44 24 Z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M32 24 L20 40 L44 40 Z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M32 40 L26 52 L38 52 Z" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="32" cy="18" r="2" fill="currentColor" />
        <circle cx="32" cy="32" r="2" fill="currentColor" />
        <circle cx="32" cy="46" r="2" fill="currentColor" />
        <line x1="32" y1="12" x2="32" y2="50" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Adaptive Momentum',
    description: 'Move quickly while your system holds strong under pressure.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 32 L20 20 L28 28 L36 16 L44 24 L52 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M12 40 L20 28 L28 36 L36 24 L44 32 L52 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6" />
        <circle cx="12" cy="32" r="3" fill="currentColor" />
        <circle cx="52" cy="32" r="3" fill="currentColor" />
        <path d="M8 48 L56 48" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <path d="M8 52 L56 52" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      </svg>
    ),
  },
]

export function HomeValueProposition() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="home-value-prop relative overflow-hidden"
      aria-labelledby="value-prop-headline"
    >
      <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center py-24 md:py-32">
          {/* Left Column: Content */}
          <div
            className={`home-value-content ${isVisible ? 'home-value-content-visible' : ''}`}
          >
            <h2
              id="value-prop-headline"
              className="home-value-headline mb-6"
            >
              Lead differently. Build resilient. Navigate the unseen.
            </h2>
            <p className="home-value-subheadline mb-10">
              Deploy the 7 Laws of Intuitive Leadership to unlock clarity, alignment and momentum for your institution.
            </p>

            {/* Benefits List */}
            <div className="home-value-benefit-wrapper mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="home-value-benefit group"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="home-value-benefit-icon">
                    {benefit.icon}
                  </div>
                  <div className="home-value-benefit-content">
                    <h3 className="home-value-benefit-title">{benefit.title}</h3>
                    <p className="home-value-benefit-description">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/laws"
              className="home-value-cta"
            >
              Explore the 7 Laws
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right Column: Visual */}
          <div
            className={`home-value-visual ${isVisible ? 'home-value-visual-visible' : ''}`}
          >
            <div className="home-pillars-board">
              <div className="chess-board">
                {[
                  // rank 8
                  ['r','n','b','q','k','b','n','r'],
                  // rank 7
                  ['p','p','p','p','p','p','p','p'],
                  // rank 6
                  ['','','','','','','',''],
                  // rank 5
                  ['','','','','','','',''],
                  // rank 4
                  ['','','','','','','',''],
                  // rank 3
                  ['','','','','','','',''],
                  // rank 2
                  ['P','P','P','P','P','P','P','P'],
                  // rank 1
                  ['R','N','B','Q','K','B','N','R'],
                ].map((rank, rankIndex) =>
                  rank.map((piece, fileIndex) => {
                    const file = String.fromCharCode('a'.charCodeAt(0) + fileIndex)
                    const boardRank = 8 - rankIndex
                    const square = `${file}${boardRank}`

                    return (
                      <div
                        key={square}
                        className="chess-square"
                        data-square={square}
                        data-piece={piece}
                      />
                    )
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

