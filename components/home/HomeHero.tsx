import Link from 'next/link'

export function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero-bg-orbit">
        <div className="home-hero-ring ring-outer"></div>
        <div className="home-hero-ring ring-middle"></div>
        <div className="home-hero-ring ring-inner"></div>

        <div className="home-hero-orbit-dot dot-1"></div>
        <div className="home-hero-orbit-dot dot-2"></div>
        <div className="home-hero-orbit-dot dot-3"></div>
        <div className="home-hero-orbit-dot dot-4"></div>
        <div className="home-hero-orbit-dot dot-5"></div>
        <div className="home-hero-orbit-dot dot-6"></div>
        <div className="home-hero-orbit-dot dot-7"></div>
      </div>

      <div className="home-hero-copy reveal-on-scroll">
        <p className="home-hero-kicker">7 Laws</p>
        <h1 className="home-hero-title">7 Laws of Intuitive Leadership</h1>
        <p className="home-hero-subtitle">
          Lead with clarity. Build with purpose. Navigate with instinct.
        </p>
        <div className="home-hero-cta-row">
          <Link href="/laws" className="btn-hero-primary">
            EXPLORE THE FRAMEWORK
          </Link>
        </div>
      </div>
    </section>
  )
}

