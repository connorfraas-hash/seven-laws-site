import Link from 'next/link'
import Image from 'next/image'
import { Quote, ArrowRight, Linkedin } from 'lucide-react'

export default function PressPage() {
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="eyebrow mb-4">PRESS & MEDIA</div>
            <h1 className="section-title mb-6 leading-[1.05]">
              For Editors, Hosts, and Event Teams
            </h1>
            <div className="gold-divider" />
            <p className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed max-w-3xl mx-auto font-light mt-6">
              Background, talking points, and media assets for Ronald D. Kraft, PhD — author of The 7 Laws of Intuitive Leadership and a three-time president, CEO, and executive advisor.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="py-16 md:py-20 border-b border-accent/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="section-title mb-4">At a Glance</h2>
              <div className="gold-divider" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-6">
              {/* Card 1: Who */}
              <div className="p-5 border border-accent/20 rounded-xl bg-white hover:shadow-xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500 relative z-10">
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 text-foreground relative z-10">
                  Who
                </h3>
                <p className="text-base md:text-lg text-foreground leading-relaxed relative z-10">
                  Ronald D. Kraft, PhD — leadership strategist, former college and university president, and advisor to founders, boards, and executive teams.
                </p>
              </div>

              {/* Card 2: Focus */}
              <div className="p-5 border border-accent/20 rounded-xl bg-white hover:shadow-xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500 relative z-10">
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 text-foreground relative z-10">
                  Focus
                </h3>
                <p className="text-base md:text-lg text-foreground leading-relaxed relative z-10">
                  Intuitive leadership, decision-making under uncertainty, AI and the future of work, institutional transformation, and entrepreneurial strategy.
                </p>
              </div>

              {/* Card 3: Based In */}
              <div className="p-5 border border-accent/20 rounded-xl bg-white hover:shadow-xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500 relative z-10">
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 text-foreground relative z-10">
                  Based In
                </h3>
                <p className="text-base md:text-lg text-foreground leading-relaxed relative z-10">
                  Coeur d'Alene, Idaho · Available for in-person and virtual engagements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approved Bio Blurbs Section */}
      <section className="py-16 md:py-20 border-b border-accent/10 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="section-title mb-4">Approved Bio Blurbs</h2>
              <div className="gold-divider" />
              <p className="text-base md:text-lg text-foreground leading-relaxed mt-4 font-light">
                Use any of the versions below in programs, introductions, or show notes.
              </p>
            </div>
            
            <div className="p-8 md:p-10 border border-accent/20 rounded-xl bg-white mt-6 relative z-10">
              {/* Short Bio */}
              <div className="mb-8 pb-8 border-b border-accent/10 relative z-10">
                <div className="eyebrow mb-3">Short (40 words)</div>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Ronald D. Kraft, PhD is a leadership strategist, three-time college and university president, and author of The 7 Laws of Intuitive Leadership. He helps founders, CEOs, and institutions make sharper decisions in complex, high-stakes environments.
                </p>
              </div>

              {/* Standard Bio */}
              <div className="mb-8 pb-8 border-b border-accent/10 relative z-10">
                <div className="eyebrow mb-3">Standard (90 words)</div>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Ronald D. Kraft, PhD is a three-time college and university president, CEO, and executive advisor. His career spans higher education, healthcare strategy, institutional transformation, and entrepreneurial innovation. As the author of The 7 Laws of Intuitive Leadership, Ron helps leaders blend pattern recognition, intuition, and disciplined testing to make better decisions when the data is incomplete and the stakes are high. He consults with founders, boards, and executive teams on strategy, growth, and the future of work.
                </p>
              </div>

              {/* Extended Bio */}
              <div className="relative z-10">
                <div className="eyebrow mb-3">Extended (150 words)</div>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Ronald D. Kraft, PhD is a three-time college and university president, CEO, and executive advisor whose career spans higher education, public-private partnerships, healthcare strategy, and entrepreneurial ventures. He has led institutions through major transformation, guided boards and executive teams during disruption, and designed frameworks that help leaders act decisively in uncertain conditions. As the author of The 7 Laws of Intuitive Leadership, Ron distills decades of experience into practical tools for pattern recognition, intuitive judgment, and strategic clarity. He works with founders, CEOs, and organizations who need sharper insight, cleaner decisions, and leadership that can see around the corner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Assets Section */}
      <section className="py-16 md:py-20 border-b border-accent/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="section-title mb-4">Media Assets</h2>
              <div className="gold-divider" />
            </div>
            
            <div className="p-8 md:p-10 border border-accent/20 rounded-xl bg-white mt-6 relative z-10">
              <div className="space-y-8 relative z-10">
                {/* Headshots */}
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-foreground">
                    Headshots
                  </h3>
                  <ul className="space-y-2 text-base md:text-lg text-foreground leading-relaxed">
                    <li>
                      <Link href="#" className="text-accent hover:underline font-medium">
                        Formal Headshot (Color)
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-accent hover:underline font-medium">
                        Speaking Portrait
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Book Assets */}
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-foreground">
                    Book Assets
                  </h3>
                  <ul className="space-y-2 text-base md:text-lg text-foreground leading-relaxed">
                    <li>
                      <Link href="#" className="text-accent hover:underline font-medium">
                        Book Cover: The 7 Laws of Intuitive Leadership
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-accent hover:underline font-medium">
                        Compass Artwork
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Logos & Marks */}
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-foreground">
                    Logos & Marks
                  </h3>
                  <ul className="space-y-2 text-base md:text-lg text-foreground leading-relaxed">
                    <li>
                      <Link href="#" className="text-accent hover:underline font-medium">
                        7 Laws Wordmark
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-accent hover:underline font-medium">
                        Compass Icon
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Topics & Questions Section */}
      <section className="py-16 md:py-20 border-b border-accent/10 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="section-title mb-4">Sample Angles & Questions</h2>
              <div className="gold-divider" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-6">
              {/* Left Column: Suggested Topics */}
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-foreground">
                  Suggested Topics
                </h3>
                <ul className="space-y-3 text-base md:text-lg text-foreground leading-relaxed">
                  <li className="flex items-start gap-4">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>How leaders develop reliable intuition in high-stakes environments</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>Using The 7 Laws to make decisions when data is incomplete</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>The role of AI and human judgment in the future of leadership</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>What institutional crises teach us about pattern recognition and early signals</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>Bringing entrepreneurial thinking into universities and large organizations</span>
                  </li>
                </ul>
              </div>

              {/* Right Column: Suggested Questions */}
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-foreground">
                  Suggested Questions
                </h3>
                <ul className="space-y-3 text-base md:text-lg text-foreground leading-relaxed">
                  <li className="flex items-start gap-4">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>What is intuitive leadership, and why does it matter now?</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>How can leaders trust their instincts without becoming reckless?</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>Where does AI enhance — and where does it undermine — leadership judgment?</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>What patterns did you see across presidencies and executive roles that led to the 7 Laws?</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>What's one practical change a leader can make this week to improve their decision-making?</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Select Quotes / Praise Section */}
      <section className="py-16 md:py-20 border-b border-accent/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="section-title mb-4">What Colleagues Say</h2>
              <div className="gold-divider" />
            </div>
            
            <div className="space-y-6 mt-6">
              {/* Quote 1: Daniel Bronstein */}
              <div className="p-8 md:p-10 border-l-4 border-accent bg-white rounded-r-xl relative z-10">
                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <Quote className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <blockquote className="text-lg md:text-xl italic leading-relaxed font-serif text-foreground flex-1">
                    "Dr. Kraft understands the power of mentorship, purpose, and organizational vision… under his leadership at SCUHS, he helped transform a once-fledgling program into an academic beacon."
                  </blockquote>
                </div>
                <p className="text-base md:text-lg text-foreground font-semibold ml-10 relative z-10">
                  — Dr. Daniel Bronstein, DC DACCP
                </p>
              </div>

              {/* Quote 2: Steven Marcussen */}
              <div className="p-8 md:p-10 border-l-4 border-accent bg-white rounded-r-xl relative z-10">
                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <Quote className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <blockquote className="text-lg md:text-xl italic leading-relaxed font-serif text-foreground flex-1">
                    "Dr. Kraft is a highly educated and strategic leader. His work with the Board and faculty resulted in meaningful organizational progress."
                  </blockquote>
                </div>
                <p className="text-base md:text-lg text-foreground font-semibold ml-10 relative z-10">
                  — Steven Marcussen, Executive Director, Cushman & Wakefield
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Contact CTA Section */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title mb-4">Press & Booking Inquiries</h2>
            <div className="gold-divider" />
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 mt-4 font-light">
              For interviews, book coverage, or speaking requests, please use the contact page or connect with Ron on LinkedIn.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/press-contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent text-foreground rounded-xl hover:bg-accent/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Go to Contact
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/ronaldkraft"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-accent/60 text-foreground rounded-xl hover:bg-accent/10 hover:border-accent transition-all duration-300 font-semibold text-lg"
              >
                <Linkedin className="w-5 h-5" />
                View LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

