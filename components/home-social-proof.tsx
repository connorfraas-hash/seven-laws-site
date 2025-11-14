'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface LogoItem {
  name: string
  image?: string
  svg?: JSX.Element
}

// Placeholder logos - replace with actual logo assets
const logos: LogoItem[] = [
  {
    name: 'Institution 1',
    svg: (
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="100" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M20 20 L40 20 M60 20 L80 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Institution 2',
    svg: (
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="20" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="60" cy="20" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="90" cy="20" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    name: 'Institution 3',
    svg: (
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 20 L50 10 L85 20 L50 30 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    name: 'Institution 4',
    svg: (
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="15" width="20" height="10" rx="1" fill="currentColor" opacity="0.3" />
        <rect x="50" y="15" width="20" height="10" rx="1" fill="currentColor" opacity="0.3" />
        <rect x="80" y="15" width="20" height="10" rx="1" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    name: 'Institution 5',
    svg: (
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 15 L35 25 L45 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M65 15 L75 25 L85 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    name: 'Institution 6',
    svg: (
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="20" x2="100" y2="20" stroke="currentColor" strokeWidth="2" />
        <line x1="30" y1="10" x2="50" y2="20" stroke="currentColor" strokeWidth="1.5" />
        <line x1="70" y1="20" x2="90" y2="10" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
]

const metrics = [
  {
    value: '[XX]+',
    label: 'leaders trained or certified',
  },
  {
    value: '[XX]+',
    label: 'organizations integrating the framework',
  },
]

interface Testimonial {
  quote: string
  author: string
  title: string
  image?: string
}

const testimonial: Testimonial = {
  quote:
    'Adopting the 7 Laws framework transformed how we navigate complexity. We now move at speed, without losing our foundation.',
  author: 'Dr. [Full Name]',
  title: '[Title], [Organization]',
  // image: '/images/testimonials/testimonial-1.jpg', // Add when available
}

export function HomeSocialProof() {
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
      className="home-social-proof relative overflow-hidden"
      aria-labelledby="social-proof-headline"
    >
      <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
        {/* Headline Area */}
        <div
          className={`home-social-headline-area text-center mb-16 md:mb-20 ${isVisible ? 'home-social-headline-area-visible' : ''}`}
        >
          <h2
            id="social-proof-headline"
            className="home-social-headline mb-6"
          >
            Leaders and institutions engage with the 7 Laws framework.
          </h2>
          <p className="home-social-subheadline max-w-3xl mx-auto">
            From emerging teams to seasoned organizations, the methodology is being adopted by leaders who demand
            clarity, alignment and momentum.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left Column: Logos + Metrics */}
          <div className={`home-social-logos ${isVisible ? 'home-social-logos-visible' : ''}`}>
            {/* Metrics */}
            <div className="home-social-metrics mb-12">
              {metrics.map((metric, index) => (
                <div
                  key={metric.value}
                  className="home-social-metric"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="home-social-metric-value">{metric.value}</div>
                  <div className="home-social-metric-label">{metric.label}</div>
                </div>
              ))}
            </div>

              {/* Book Cover Badge - First Position */}
              <div
                className="home-social-logo-item home-social-book-badge"
                style={{ animationDelay: '0s' }}
                role="img"
                aria-label="7 Laws of Intuitive Leadership Book Cover"
              >
                {/* Book cover will go here - replace with actual image */}
                <div className="home-social-book-cover">
                  <svg width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="5" width="70" height="110" rx="2" fill="rgba(251, 191, 36, 0.1)" stroke="rgba(251, 191, 36, 0.3)" strokeWidth="1.5" />
                    <rect x="10" y="15" width="60" height="8" rx="1" fill="rgba(248, 250, 252, 0.3)" />
                    <rect x="10" y="28" width="60" height="4" rx="1" fill="rgba(248, 250, 252, 0.2)" />
                    <rect x="10" y="36" width="40" height="4" rx="1" fill="rgba(248, 250, 252, 0.2)" />
                    <rect x="10" y="50" width="60" height="50" rx="1" fill="rgba(248, 250, 252, 0.05)" stroke="rgba(248, 250, 252, 0.1)" strokeWidth="1" />
                  </svg>
                </div>
              </div>

              {/* Logos Grid */}
            <div className="home-social-logos-grid">
              {logos.map((logo, index) => (
                <div
                  key={logo.name}
                  className="home-social-logo-item"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                  role="img"
                  aria-label={logo.name}
                >
                  {logo.image ? (
                    <Image
                      src={logo.image}
                      alt={logo.name}
                      width={120}
                      height={40}
                      className="home-social-logo-image"
                    />
                  ) : (
                    <div className="home-social-logo-placeholder">{logo.svg}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Featured Testimonial */}
          <div className={`home-social-testimonial ${isVisible ? 'home-social-testimonial-visible' : ''}`}>
            <div className="home-social-testimonial-card">
              {/* Quote Marks */}
              <div
                className="home-social-quote-mark"
                aria-hidden="true"
              >
                "
              </div>

              {/* Testimonial Content */}
              <blockquote className="home-social-testimonial-quote">
                <p>{testimonial.quote}</p>
              </blockquote>

              {/* Author Info */}
              <div className="home-social-testimonial-author">
                {testimonial.image ? (
                  <div className="home-social-testimonial-photo">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={120}
                      height={120}
                      className="home-social-testimonial-image"
                    />
                  </div>
                ) : (
                  <div className="home-social-testimonial-photo-placeholder">
                    <svg
                      width="120"
                      height="120"
                      viewBox="0 0 120 120"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="60"
                        cy="60"
                        r="60"
                        fill="rgba(248, 250, 252, 0.1)"
                      />
                      <circle
                        cx="60"
                        cy="45"
                        r="20"
                        fill="rgba(248, 250, 252, 0.3)"
                      />
                      <path
                        d="M30 95 Q30 75 60 75 Q90 75 90 95"
                        stroke="rgba(248, 250, 252, 0.3)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  </div>
                )}
                <div className="home-social-testimonial-info">
                  <div className="home-social-testimonial-name">{testimonial.author}</div>
                  <div className="home-social-testimonial-title">{testimonial.title}</div>
                </div>
              </div>

              {/* Link */}
              <Link
                href="/testimonials"
                className="home-social-testimonial-link"
              >
                Read more leadership stories →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

