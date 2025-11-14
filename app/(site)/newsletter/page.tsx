import Image from 'next/image'
import { Quote } from 'lucide-react'

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-[#020617] grain-texture">

      {/* Hero Section */}
      <section className="py-16 md:py-20 border-b border-accent/10 newsletter-hero relative overflow-hidden">
        {/* Compass Image - premium editorial accent, extremely subtle */}
        <div className="absolute top-2 right-2 md:top-4 md:right-4 lg:top-6 lg:right-6 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 opacity-12 md:opacity-15 pointer-events-none z-0">
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
            <div className="eyebrow mb-4">NEWSLETTER</div>
            <h1 className="section-title mb-6 leading-[1.05]">
              The Intuitive Leader Newsletter
            </h1>
            <div className="gold-divider" />
            <p className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed max-w-3xl mx-auto font-light mt-6">
              Short, high-impact insights on leadership, intuition, decision-making, entrepreneurship, and AI — written by Ronald D. Kraft, PhD, a three-time university and college president, CEO, and executive advisor.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl mx-auto font-light mt-4">
              Designed for leaders who think deeply and act decisively.
            </p>
          </div>
        </div>
      </section>

      {/* Why Subscribe Section */}
      <section className="py-16 md:py-20 border-b border-accent/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="eyebrow mb-3">WHY SUBSCRIBE</div>
            <h2 className="section-title mb-4 text-left">Why Subscribe</h2>
            <div className="gold-divider-left" />
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4 mt-4">
              Leadership today demands more than dashboards and data.<br />
              It requires judgment — the kind you build through pattern recognition, intuition, and the ability to see early signals before anyone else.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4">
              Each issue delivers a focused insight drawn from Ron's experience in:
            </p>
            <ul className="space-y-2 text-base md:text-lg text-foreground leading-relaxed mb-4">
              <li className="flex items-start gap-4">
                <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                <span>Running colleges and universities during disruption</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                <span>Coaching CEOs, founders, and executive teams</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                <span>Applying AI to real-world organizational strategy</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                <span>Building partnerships across higher ed, healthcare, and private industry</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                <span>Turning intuition into a repeatable leadership tool</span>
              </li>
            </ul>
            <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
              No fluff. No noise. Just signal.
            </p>
          </div>
        </div>
      </section>

      {/* What Ron Writes About Section */}
      <section className="py-16 md:py-20 border-b border-accent/10 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="eyebrow mb-3">WHAT RON WRITES ABOUT</div>
            <h2 className="section-title mb-4 text-left">What Ron Writes About</h2>
            <div className="gold-divider-left" />
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 mt-4">
              A rotating mix of leadership essentials:
            </p>
            
            <div className="space-y-3 md:space-y-4">
              {/* Intuition & Decision Models */}
              <div className="p-5 border border-accent/20 rounded-xl bg-card hover:shadow-xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-foreground">
                  🧭 Intuition & Decision Models
                </h3>
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  How leaders read early signals, test assumptions, and act with clarity.
                </p>
              </div>

              {/* Leadership & Culture */}
              <div className="p-5 border border-accent/20 rounded-xl bg-card hover:shadow-xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-foreground">
                  🏛 Leadership & Culture
                </h3>
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  Insights from presidencies, crises, and executive strategy rooms.
                </p>
              </div>

              {/* Entrepreneurship & Scaling */}
              <div className="p-5 border border-accent/20 rounded-xl bg-card hover:shadow-xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-foreground">
                  🚀 Entrepreneurship & Scaling
                </h3>
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  Real lessons from advising founders, CEOs, and organizational builders.
                </p>
              </div>

              {/* AI & the Future of Work */}
              <div className="p-5 border border-accent/20 rounded-xl bg-card hover:shadow-xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-foreground">
                  🤖 AI & the Future of Work
                </h3>
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  How AI reshapes decision-making, teams, and direction — without hype.
                </p>
              </div>

              {/* Strategy Under Pressure */}
              <div className="p-5 border border-accent/20 rounded-xl bg-card hover:shadow-xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-foreground">
                  🎯 Strategy Under Pressure
                </h3>
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  Frameworks for high-stakes decisions when the playbook falls apart.
                </p>
              </div>

              {/* Tools, Models & Worksheets */}
              <div className="p-5 border border-accent/20 rounded-xl bg-card hover:shadow-xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-foreground">
                  🔬 Tools, Models & Worksheets
                </h3>
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  Simple thinking tools designed for better leadership judgment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Newsletter Section */}
      <section className="py-16 md:py-20 border-b border-accent/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="eyebrow mb-3 text-center">JOIN THE NEWSLETTER</div>
            <h2 className="section-title mb-4 text-center">Join the Newsletter</h2>
            <div className="gold-divider" />
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 mt-4 text-center">
              Receive one thoughtful insight at a time — never spam, never filler.
            </p>
            
            <div className="p-8 md:p-10 border border-accent/20 rounded-xl bg-card mt-4">
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    className="w-full px-6 py-4 border border-accent/20 rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/60 transition-colors text-base"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-10 py-5 bg-accent text-foreground rounded-xl hover:bg-accent/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Join the Newsletter
                </button>
              </form>
              <p className="text-sm text-foreground mt-4 text-center">
                Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Author Section */}
      <section className="py-16 md:py-20 border-b border-accent/10 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="eyebrow mb-3">ABOUT THE AUTHOR</div>
            <h2 className="section-title mb-4 text-left">About the Author</h2>
            <div className="gold-divider-left" />
            
            <div className="mt-4">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Content */}
                <div className="flex-1 md:pr-6">
                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4">
                    <strong className="text-foreground font-semibold">Ronald D. Kraft, PhD</strong> is a three-time college and university president, CEO, and executive advisor. His work spans higher education, healthcare strategy, entrepreneurship, and AI-driven organizational design.
                  </p>
                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4">
                    He serves as President of ICON Leaders International, advising CEOs, founders, and institutions on strategy, growth, clarity, and high-stakes decision-making.
                  </p>
                  <p className="text-lg md:text-xl text-foreground leading-relaxed">
                    This newsletter blends institutional leadership, entrepreneurial thinking, and cognitive science into practical, usable insights.
                  </p>
                </div>

                {/* Image */}
                <div className="flex-shrink-0 md:w-48 w-full max-w-xs mx-auto md:mx-0">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-accent/20 shadow-lg">
                    <Image
                      src="/images/ron-floating.jpg"
                      alt="Ronald D. Kraft portrait"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Note From Ron Section */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-10 border-l-4 border-accent bg-card rounded-r-xl">
              <div className="flex items-start gap-4 mb-4">
                <Quote className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <blockquote className="text-xl md:text-2xl italic leading-relaxed font-serif text-foreground flex-1">
                  "Leaders don't need more noise. They need sharper instincts and clearer thinking. My newsletter is a place to step back, reflect, and see what really matters."
                </blockquote>
              </div>
              <p className="text-base md:text-lg text-foreground font-semibold ml-10">
                — Ronald Kraft, PhD
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
