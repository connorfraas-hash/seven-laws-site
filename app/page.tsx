import Link from 'next/link'
import Image from 'next/image'
import { HomeHero } from '@/components/home/HomeHero'
import { HomeAuthoritySection } from '@/components/home-authority-section'
import { HomeValueProposition } from '@/components/home-value-proposition'
import { HomeSocialProof } from '@/components/home-social-proof'
import { HomeFrameworkIndex } from '@/components/home/home-framework-index'
import { ScrollRevealProvider } from '@/components/layout/ScrollRevealProvider'

export default function Home() {

  return (
    <ScrollRevealProvider>
      <div className="min-h-screen bg-[#020617] grain-texture">
        {/* Cinematic Hero Section with Dynamic Compass */}
        <HomeHero />

        {/* Authority & Resonance Section */}
        <section className="reveal-on-scroll">
          <HomeAuthoritySection />
        </section>

        {/* Meet the Author Section */}
        <section className="home-author reveal-on-scroll">
        <div className="home-author-inner">
          <div className="home-author-text">
            <p className="home-author-kicker">Meet the Author</p>
            <h2 className="home-author-title">
              The mind behind the 7 Laws framework.
            </h2>
            <p className="home-author-body">
              Ron Kraft has spent his career helping leaders make high–stakes decisions
              without losing their integrity. The 7 Laws of Intuitive Leadership grew
              out of years of walking alongside presidents, senior teams, and emerging
              builders who needed a way to trust their instincts while staying grounded
              in reality.
            </p>
            <p className="home-author-body">
              This book is the distilled playbook: seven repeatable disciplines that
              turn intuition into a reliable asset instead of a gamble.
            </p>

            <div className="home-author-tags">
              <span className="home-author-tag">Author &amp; leadership strategist</span>
              <span className="home-author-tag">Advisor to senior decision-makers</span>
              <span className="home-author-tag">Teacher of intuitive leadership</span>
            </div>

            <div className="home-author-actions">
              <Link href="/author" className="home-author-button primary">
                Learn more about Ron
              </Link>
              <Link href="/book" className="home-author-button ghost">
                Explore the book
              </Link>
            </div>
          </div>

          <div className="home-author-visual">
            <div className="home-author-photo-card">
              <div className="home-author-photo-wrap author-photo-box">
                <Image
                  src="/images/ronald-kraft-hero.jpg"
                  alt="Portrait of Ron Kraft, author of The 7 Laws of Intuitive Leadership"
                  width={400}
                  height={400}
                  className="home-author-photo"
                  loading="lazy"
                />
              </div>
              <div className="home-author-photo-meta">
                <p className="home-author-name">Ron Kraft</p>
                <p className="home-author-role">Author, The 7 Laws of Intuitive Leadership</p>
              </div>
            </div>

            <div className="home-author-book-card">
              <div className="home-author-book-wrap">
                <Image
                  src="/images/book-cover-7-laws.jpg"
                  alt="Cover of The 7 Laws of Intuitive Leadership"
                  width={300}
                  height={450}
                  className="home-author-book"
                />
              </div>
              <p className="home-author-book-caption">
                A practical framework for leaders who need clarity, courage, and alignment
                in high-pressure environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="reveal-on-scroll">
        <HomeValueProposition />
      </section>

      {/* Social Proof Section */}
      <section className="reveal-on-scroll">
        <HomeSocialProof />
      </section>

      {/* 7 Laws Framework Index Section */}
      <section className="reveal-on-scroll">
        <HomeFrameworkIndex />
      </section>
      </div>
    </ScrollRevealProvider>
  )
}
