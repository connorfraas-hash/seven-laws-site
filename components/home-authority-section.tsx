'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export function HomeAuthoritySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Intersection Observer for fade-in animation
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
      className="home-authority relative overflow-hidden"
      aria-labelledby="authority-headline"
    >
      <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
        {/* A. BOOK + AUTHOR ROW */}
        <div
          className={`home-authority-book-author mb-16 md:mb-20 ${isVisible ? 'home-authority-book-author-visible' : ''}`}
        >
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: Book Cover */}
            <div className="home-authority-book-wrapper">
              <div className="home-authority-book-cover">
                <Image
                  src="/images/book-cover-7-laws.jpg"
                  alt="7 Laws of Intuitive Leadership Book Cover"
                  width={400}
                  height={600}
                  className="home-authority-book-image"
                  priority
                />
              </div>
            </div>

            {/* Right: Author Card */}
            <div className="home-authority-author-card">
              <div className="home-authority-author-header">
                <div className="home-authority-author-photo">
                  <Image
                    src="/images/ronald-kraft-hero.jpg"
                    alt="Ron Kraft"
                    width={120}
                    height={120}
                    className="home-author-photo"
                  />
                </div>
                <div className="home-authority-author-info">
                  <h3 className="home-authority-author-name">Ron Kraft</h3>
                  <p className="home-authority-author-line">Founder, strategist, and leadership educator.</p>
                </div>
              </div>

              <div className="home-authority-author-highlights">
                <div className="home-authority-highlight">
                  <span className="home-authority-highlight-bullet" />
                  <span>30+ years guiding institutions and leaders</span>
                </div>
                <div className="home-authority-highlight">
                  <span className="home-authority-highlight-bullet" />
                  <span>Deep background in organizational alignment and strategy</span>
                </div>
                <div className="home-authority-highlight">
                  <span className="home-authority-highlight-bullet" />
                  <span>Known for simplifying complex environments</span>
                </div>
                <div className="home-authority-highlight">
                  <span className="home-authority-highlight-bullet" />
                  <span>Helps leaders build clarity, stability, and momentum</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* B. WHY THESE LAWS MATTER TODAY */}
        <div
          className={`home-authority-why mb-16 md:mb-20 ${isVisible ? 'home-authority-why-visible' : ''}`}
        >
          <h3 className="home-authority-why-headline mb-6">Why These Laws Matter Today</h3>
          <div className="home-authority-why-content">
            <p>
              The modern leadership landscape demands a different kind of decision-making. As complexity multiplies
              and the pace of change accelerates, leaders face decision fatigue, information overload, and the
              constant pressure to act quickly. Traditional analytical frameworks alone are insufficient when the
              data is sparse, contradictory, or evolving in real-time. Intuitive leadership — the ability to
              recognize patterns, sense misalignment, and trust calibrated judgment — becomes essential. The 7 Laws
              framework trains leaders to blend systematic thinking with intuitive recognition, enabling them to
              navigate uncertainty while maintaining human alignment and organizational stability.
            </p>
          </div>
        </div>
      </div>

      {/* C. VOICES GRID - Full Width Section */}
      <section className="home-voices">
        <div className="home-voices-inner">
          <h2 className="home-voices-title">
            Voices that echo the 7 Laws
          </h2>
          <p className="home-voices-subtitle">
            Early readers describe the 7 Laws as a practical compass for leading with clarity, courage, and integrity.
          </p>

          <div className="home-voices-grid">
            <figure className="home-voice-card home-voice-card-1">
              <blockquote>
                "The 7 Laws gave our team a common language for making hard decisions without losing our values."
              </blockquote>
              <figcaption>
                <span className="home-voice-name">Senior University Leader</span>
                <span className="home-voice-role">Higher Education</span>
              </figcaption>
            </figure>

            <figure className="home-voice-card home-voice-card-2">
              <blockquote>
                "It captures what seasoned leaders learn the hard way, and turns it into something teachable."
              </blockquote>
              <figcaption>
                <span className="home-voice-name">Executive Coach</span>
                <span className="home-voice-role">Leadership Development</span>
              </figcaption>
            </figure>

            <figure className="home-voice-card home-voice-card-3">
              <blockquote>
                "This framework helps us move fast without feeling like we're gambling with our future."
              </blockquote>
              <figcaption>
                <span className="home-voice-name">Chief Strategy Officer</span>
                <span className="home-voice-role">Growth Organization</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </section>
  )
}

