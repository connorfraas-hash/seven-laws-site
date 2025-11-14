import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, ShoppingCart, Quote } from 'lucide-react'

export default function BookPage() {
  return (
    <div className="min-h-screen bg-background grain-texture">

      {/* Hero Section */}
      <section className="py-16 md:py-20 border-b border-accent/10 newsletter-hero relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          {/* Two-column layout: text left, book cover right on desktop; cover top, text below on mobile */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Left Column: Text Content */}
              <div className="order-2 md:order-1">
                <div className="eyebrow mb-4">THE BOOK</div>
                <h1 className="section-title mb-6 leading-[1.05]">
                  The 7 Laws of Intuitive Leadership
                </h1>
                <div className="gold-divider-left" />
                <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light mt-6">
                  A practical framework for high-stakes decision making — forged in presidencies, crises, boardrooms, and real-world institutions.
                </p>
                <p className="text-lg md:text-xl text-foreground leading-relaxed font-light mt-4">
                  The 7 Laws of Intuitive Leadership distills more than three decades of executive experience into a clear, usable system for better decisions. Drawing on presidencies, higher education, healthcare, entrepreneurship, and AI-driven strategy, Dr. Ronald D. Kraft shows leaders how to develop sharper instincts, read early signals, and act with confidence when the stakes are high.
                </p>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-light mt-4">
                  By Ronald D. Kraft, PhD — three-time university and college president, CEO, and executive advisor.
                </p>
              </div>

              {/* Right Column: Book Cover Card */}
              <div className="order-1 md:order-2 flex justify-center md:justify-end">
                <div className="relative w-full max-w-sm md:max-w-md">
                  <div className="relative p-4 md:p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-accent/20 hover:shadow-2xl transition-all duration-500">
                    <div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden bg-gradient-to-br from-accent/5 to-accent/10">
                      <Image
                        src="/images/book-cover-7-laws.jpg"
                        alt="Book cover of The 7 Laws of Intuitive Leadership by Ronald D. Kraft, PhD"
                        width={400}
                        height={600}
                        className="w-full h-full object-cover"
                        priority
                        unoptimized={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What the Book Teaches Section */}
      <section className="py-16 md:py-20 border-b border-accent/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="eyebrow mb-3">INSIDE THE FRAMEWORK</div>
            <h2 className="section-title mb-4 text-left">What the Book Teaches</h2>
            <div className="gold-divider-left" />
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 mt-4">
              Each law captures a piece of how real leaders think under pressure — combining intuition, pattern recognition, and disciplined testing. Together they form a practical decision model you can return to in every high-stakes moment.
            </p>
            
            <div className="space-y-3 md:space-y-4">
              {/* Law 1: Trust, But Test */}
              <div className="p-5 border border-accent/20 rounded-xl bg-card hover:shadow-xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-foreground">
                  Trust, But Test
                </h3>
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  Why great leaders rely on instinct first — and verification second. How to build fast filters for uncertainty, and when to slow down and test assumptions before they become expensive mistakes.
                </p>
              </div>

              {/* Law 2: The Dual Lens */}
              <div className="p-5 border border-accent/20 rounded-xl bg-card hover:shadow-xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-foreground">
                  The Dual Lens
                </h3>
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  Seeing decisions through two time horizons at once: what works right now, and what compounds over years. A method for avoiding blind spots and short-term wins that damage long-term outcomes.
                </p>
              </div>

              {/* Law 3: The Inner Compass */}
              <div className="p-5 border border-accent/20 rounded-xl bg-card hover:shadow-xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-foreground">
                  The Inner Compass
                </h3>
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  A structured way to strengthen intuition through patterns, contrasts, and lived experience. How leaders can turn "gut feel" into a trained internal instrument instead of a guess.
                </p>
              </div>

              {/* Law 4: The Learning Loop */}
              <div className="p-5 border border-accent/20 rounded-xl bg-card hover:shadow-xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-foreground">
                  The Learning Loop
                </h3>
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  A deliberate cycle for sharpening judgment: act, observe, record, and refine. How to use micro-feedback, reflection, and decision journaling to compound wisdom faster.
                </p>
              </div>

              {/* Law 5: See Beyond the Obvious */}
              <div className="p-5 border border-accent/20 rounded-xl bg-card hover:shadow-xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-foreground">
                  See Beyond the Obvious
                </h3>
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  The discipline of reading early signals — weak data, quiet discomfort, small anomalies — before they turn into crises. Practical tools for sensing opportunity and risk before the crowd.
                </p>
              </div>

              {/* Law 6: Future Sense */}
              <div className="p-5 border border-accent/20 rounded-xl bg-card hover:shadow-xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-foreground">
                  Future Sense
                </h3>
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  How AI, data, and human intuition fit together. Building a leadership mindset that uses technology without becoming dependent on it, and that anticipates where systems and people are really heading.
                </p>
              </div>

              {/* Law 7: The Integrity Test */}
              <div className="p-5 border border-accent/20 rounded-xl bg-card hover:shadow-xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-foreground">
                  The Integrity Test
                </h3>
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  The final law that keeps leaders grounded, credible, and aligned. How to filter decisions through integrity, mission, and trust so that people will follow you when it matters most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Book Serves Section */}
      <section className="py-16 md:py-20 border-b border-accent/10 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="eyebrow mb-3">WHO IT'S FOR</div>
            <h2 className="section-title mb-4 text-left">Who This Book Serves</h2>
            <div className="gold-divider-left" />
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4 mt-4">
              The 7 Laws is written for leaders who are responsible for real people, real budgets, and real consequences.
            </p>
            <ul className="space-y-2 text-base md:text-lg text-foreground leading-relaxed mb-4">
              <li className="flex items-start gap-4">
                <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                <span>CEOs, founders, and organizational builders who make daily high-impact decisions.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                <span>University leaders, deans, and public-sector executives navigating complex systems.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                <span>Healthcare and clinical leaders working at the intersection of care, regulation, and innovation.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                <span>Entrepreneurs and operators who need to move fast without losing judgment.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                <span>Emerging leaders who want to build instincts early instead of learning only from painful mistakes.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 md:py-20 border-b border-accent/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="eyebrow mb-3">WHY IT MATTERS</div>
            <h2 className="section-title mb-4 text-left">Why Intuitive Leadership Matters Now</h2>
            <div className="gold-divider-left" />
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4 mt-4">
              Dashboards and reports are no longer enough. By the time a metric moves, the real decision was made days or weeks earlier — often on instinct.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4">
              Leaders today operate in environments shaped by AI, volatility, and information overload. The ones who thrive combine intuition, disciplined testing, and clear principles to make decisions when the data is noisy, incomplete, or conflicting.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              This book is a toolkit for that kind of leadership — a way to turn intuition into something you can refine, teach, and rely on.
            </p>
          </div>
        </div>
      </section>

      {/* About the Author Section */}
      <section className="py-16 md:py-20 border-b border-accent/10 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="eyebrow mb-3">ABOUT THE AUTHOR</div>
            <h2 className="section-title mb-4 text-left">About Ronald D. Kraft, PhD</h2>
            <div className="gold-divider-left" />
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4 mt-4">
              Ronald D. Kraft, PhD is a three-time college and university president, CEO, and executive advisor. His career spans higher education, healthcare strategy, entrepreneurship, and AI-driven organizational design. He has led statewide college systems, transformed institutions during disruption, and advised founders and executives on growth, clarity, and high-stakes decision-making.
            </p>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              The 7 Laws of Intuitive Leadership is the distilled playbook from that work.
            </p>
          </div>
        </div>
      </section>

      {/* Endorsements Section */}
      <section className="py-16 md:py-20 border-b border-accent/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="eyebrow mb-3">WHAT LEADERS SAY</div>
            <h2 className="section-title mb-4 text-left">Endorsements</h2>
            <div className="gold-divider-left" />
            
            <div className="space-y-6 mt-6">
              {/* Endorsement 1: Daniel Bronstein */}
              <div className="p-8 md:p-10 border-l-4 border-accent bg-card rounded-r-xl">
                <div className="flex items-start gap-4 mb-4">
                  <Quote className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <blockquote className="text-lg md:text-xl italic leading-relaxed font-serif text-foreground flex-1">
                    "Between 2007 and 2008, Dr. Kraft served as president of the school where I earned my Doctorate of Chiropractic. He is a rare entrepreneur who understands the power of mentorship, vision, and purpose. Under his leadership, a once-fledgling university became an academic beacon — and the students who studied there are better doctors because of his persistence and hard work."
                  </blockquote>
                </div>
                <p className="text-base md:text-lg text-foreground font-semibold ml-10">
                  — Daniel Bronstein, Clinic Director/Owner at Beacon Chiropractic
                </p>
              </div>

              {/* Endorsement 2: Steven Marcussen */}
              <div className="p-8 md:p-10 border-l-4 border-accent bg-card rounded-r-xl">
                <div className="flex items-start gap-4 mb-4">
                  <Quote className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <blockquote className="text-lg md:text-xl italic leading-relaxed font-serif text-foreground flex-1">
                    "Dr. Kraft is a highly educated and strategic leader. He developed strategies and implementation plans that changed the direction of SCUHS and improved its performance. His work with the Board and faculty resulted in meaningful organizational progress."
                  </blockquote>
                </div>
                <p className="text-base md:text-lg text-foreground font-semibold ml-10">
                  — Steven Marcussen, Executive Director, Cushman & Wakefield
                </p>
              </div>

              {/* Endorsement 3: Irina Thornton */}
              <div className="p-8 md:p-10 border-l-4 border-accent bg-card rounded-r-xl">
                <div className="flex items-start gap-4 mb-4">
                  <Quote className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <blockquote className="text-lg md:text-xl italic leading-relaxed font-serif text-foreground flex-1">
                    "When Ron became President of Maas Co., he immediately earned the trust and support of employees through his professionalism, friendliness, and enthusiasm. His vision and ability to inspire and lead opened new directions for growth and attracted a high-performing team. Working with Ron was a rare combination of day-to-day discipline and continual opportunities for personal and organizational growth."
                  </blockquote>
                </div>
                <p className="text-base md:text-lg text-foreground font-semibold ml-10">
                  — Irina Thornton, Accountant, Maas Companies, Inc.
                </p>
              </div>

              {/* Endorsement 4: Dr. Mechele Manno */}
              <div className="p-8 md:p-10 border-l-4 border-accent bg-card rounded-r-xl">
                <div className="flex items-start gap-4 mb-4">
                  <Quote className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <blockquote className="text-lg md:text-xl italic leading-relaxed font-serif text-foreground flex-1">
                    "Ron's leadership is a joy to work under. He is generous with his time and deeply open to input. His greatest strength is how he considers all aspects of an issue and arrives at solutions that leave no one behind."
                  </blockquote>
                </div>
                <p className="text-base md:text-lg text-foreground font-semibold ml-10">
                  — Dr. Mechele Manno, Ed.D, Entrepreneur, Consultant, Researcher, and Professor
                </p>
              </div>

              {/* Endorsement 5: Teresa Moore */}
              <div className="p-8 md:p-10 border-l-4 border-accent bg-card rounded-r-xl">
                <div className="flex items-start gap-4 mb-4">
                  <Quote className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <blockquote className="text-lg md:text-xl italic leading-relaxed font-serif text-foreground flex-1">
                    "Dr. Kraft is an outstanding leader and strategic thinker. He empowers individuals to collaborate, think creatively, and find solutions outside the box. I'm deeply appreciative of his willingness to listen, support my development, and create real learning opportunities."
                  </blockquote>
                </div>
                <p className="text-base md:text-lg text-foreground font-semibold ml-10">
                  — Teresa Moore, Higher Education and Insurance Professional
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inside the Book Section */}
      <section className="py-16 md:py-20 border-b border-accent/10 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="eyebrow mb-3">INSIDE THE BOOK</div>
            <h2 className="section-title mb-4 text-left">What You'll Find Inside</h2>
            <div className="gold-divider-left" />
            
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              {/* Card 1: Frameworks & Models */}
              <div className="p-5 border border-accent/20 rounded-xl bg-card hover:shadow-xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500">
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 text-foreground">
                  Frameworks & Models
                </h3>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Clear diagrams and thinking tools for mapping decisions, testing assumptions, and capturing intuitive insights.
                </p>
              </div>

              {/* Card 2: Real Case Studies */}
              <div className="p-5 border border-accent/20 rounded-xl bg-card hover:shadow-xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500">
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 text-foreground">
                  Real Case Studies
                </h3>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Stories from presidencies, crises, institutional shifts, and entrepreneurial moves where the laws were applied under pressure.
                </p>
              </div>

              {/* Card 3: Practical Applications */}
              <div className="p-5 border border-accent/20 rounded-xl bg-card hover:shadow-xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500">
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 text-foreground">
                  Practical Applications
                </h3>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Exercises, prompts, and decision journal structures you can plug directly into your leadership practice or team offsites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get the Book CTA Section */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="eyebrow mb-3 text-center">GET THE BOOK</div>
            <h2 className="section-title mb-4 text-center">Get Your Copy</h2>
            <div className="gold-divider" />
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 mt-4 text-center">
              Use this section to drive action. You can wire these buttons to live retailer links later; for now they should be styled, but point to placeholders.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent text-foreground rounded-xl hover:bg-accent/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <ShoppingCart className="w-5 h-5" />
                Buy on Amazon
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-accent/60 text-foreground rounded-xl hover:bg-accent/10 hover:border-accent transition-all duration-300 font-semibold text-lg"
              >
                <BookOpen className="w-5 h-5" />
                Other Retailers
              </Link>
            </div>
            
            <p className="text-sm md:text-base text-foreground/80 text-center mt-6">
              Bulk orders or speaking requests? Use the <Link href="/press-contact" className="text-accent hover:underline">Contact page</Link> to connect directly with Ron.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
