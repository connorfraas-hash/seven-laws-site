import Link from 'next/link'
import Image from 'next/image'
import { Quote, ArrowRight } from 'lucide-react'

export default function SpeakingPage() {
  return (
    <div className="min-h-screen bg-[#020617] grain-texture">

      {/* Hero Section */}
      <section className="py-16 md:py-20 border-b border-accent/10 newsletter-hero relative overflow-hidden">
        {/* Compass Image - premium editorial accent, extremely subtle */}
        <div className="absolute top-2 right-2 md:top-4 md:right-4 lg:top-6 lg:right-6 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 opacity-8 md:opacity-10 pointer-events-none z-0">
          <Image
            src="/images/visuals/newsletter-compass.svg"
            alt=""
            width={112}
            height={112}
            className="w-full h-full object-contain mix-blend-soft-light"
            aria-hidden="true"
            priority={false}
          />
        </div>
        
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          {/* Two-column layout: text left, photo right on desktop; photo top, text below on mobile */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Left Column: Text Content */}
              <div className="order-2 md:order-1">
                <div className="eyebrow mb-4">SPEAKING</div>
                <h1 className="section-title mb-6 leading-[1.05]">
                  Speaking & Keynotes
                </h1>
                <div className="gold-divider-left" />
                <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light mt-6">
                  Leadership, intuition, institutional strategy, entrepreneurship, and AI — delivered with clarity, experience, and practical depth.
                </p>
              </div>

              {/* Right Column: Speaker Photo */}
              <div className="order-1 md:order-2 flex justify-center md:justify-end">
                <div className="relative w-full max-w-sm">
                  <div className="relative rounded-xl overflow-hidden shadow-lg border border-accent/20">
                    <Image
                      src="/images/ron-speaker.jpg"
                      alt="Ronald D. Kraft Speaking Portrait"
                      width={380}
                      height={480}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ron Speaks Section */}
      <section className="py-16 md:py-20 border-b border-accent/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-4">Why Ronald D. Kraft, PhD</h2>
            <div className="gold-divider" />
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 mt-4 font-light">
              Ron is a three-time college and university president, CEO, and executive advisor. His career spans higher education, healthcare strategy, institutional transformation, entrepreneurship, and AI-driven organizational design. He brings unmatched clarity and depth to rooms where leaders must think sharper and decide faster.
            </p>
            <ul className="space-y-3 text-base md:text-lg text-foreground leading-relaxed text-left max-w-xl mx-auto">
              <li className="flex items-start gap-4">
                <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                <span>30+ years leading institutions, boards, and executive teams</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                <span>Expertise blending intuition, strategy, and emerging technology</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                <span>Field-tested leadership frameworks applied in real-world crises</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Signature Topics Section */}
      <section className="py-16 md:py-20 border-b border-accent/10 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="section-title mb-4">Signature Keynotes & Workshops</h2>
              <div className="gold-divider" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-3 md:gap-4 mt-6">
              {/* Card 1: The 7 Laws */}
              <div className="p-5 border border-accent/20 rounded-xl bg-card hover:shadow-xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-foreground">
                  The 7 Laws of Intuitive Leadership
                </h3>
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  How leaders read early signals, test assumptions, and make decisive choices when the data is incomplete.
                </p>
              </div>

              {/* Card 2: Decision-Making Under Uncertainty */}
              <div className="p-5 border border-accent/20 rounded-xl bg-card hover:shadow-xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-foreground">
                  Decision-Making Under Uncertainty
                </h3>
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  Tools for navigating ambiguity, complexity, and high-stakes environments — drawn from presidencies, crises, and institutional transformation.
                </p>
              </div>

              {/* Card 3: AI, Human Intuition & The Future of Work */}
              <div className="p-5 border border-accent/20 rounded-xl bg-card hover:shadow-xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-foreground">
                  AI, Human Intuition & The Future of Work
                </h3>
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  How AI enhances human judgment, strengthens teams, and reshapes leadership in the next era of work.
                </p>
              </div>

              {/* Card 4: Entrepreneurial Thinking */}
              <div className="p-5 border border-accent/20 rounded-xl bg-card hover:shadow-xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-foreground">
                  Entrepreneurial Thinking for Founders & Executives
                </h3>
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  Frameworks for scaling, pattern recognition, and strategic clarity — grounded in real advisory work with founders and organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formats & Audiences Section */}
      <section className="py-16 md:py-20 border-b border-accent/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="section-title mb-4">Formats Ron Delivers</h2>
              <div className="gold-divider" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-6">
              {/* Left Column */}
              <div>
                <ul className="space-y-3 text-base md:text-lg text-foreground leading-relaxed">
                  <li className="flex items-start gap-4">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>Keynote speeches</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>Executive offsites</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>Leadership retreats</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>Founder groups</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>Higher education conferences</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>Healthcare leadership teams</span>
                  </li>
                </ul>
              </div>

              {/* Right Column */}
              <div>
                <ul className="space-y-3 text-base md:text-lg text-foreground leading-relaxed">
                  <li className="flex items-start gap-4">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>Workshops (1–3 hours)</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>Multi-day strategy sessions</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>Board and cabinet briefings</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>Entrepreneurial accelerators</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>AI + leadership hybrid sessions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-20 border-b border-accent/10 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-10 border-l-4 border-accent bg-card rounded-r-xl">
              <div className="flex items-start gap-4 mb-4">
                <Quote className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <blockquote className="text-lg md:text-xl italic leading-relaxed font-serif text-foreground flex-1">
                  "Ron's leadership is a joy to work under. He is generous with his time and deeply open to input. He creates clarity without leaving anyone behind."
                </blockquote>
              </div>
              <p className="text-base md:text-lg text-foreground font-semibold ml-10">
                — Dr. Mechele Manno, Ed.D, Entrepreneur, Consultant, Researcher, and Professor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title mb-4">Book Ron for Your Next Event</h2>
            <div className="gold-divider" />
            <div className="mt-6">
              <Link
                href="/press-contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent text-foreground rounded-xl hover:bg-accent/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Request Speaking
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-sm md:text-base text-foreground/80 mt-6 font-light">
              Ron responds to all speaking inquiries personally.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
