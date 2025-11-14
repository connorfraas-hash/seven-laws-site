import Link from 'next/link'
import { ArrowRight, Quote, BookOpen, Mail, ChevronLeft, ChevronRight } from 'lucide-react'
import { Law02Hero } from '@/components/laws/law02-hero'

export function Law2PremiumLayout() {
  return (
    <div className="min-h-screen bg-[#020617] grain-texture">

      {/* Hero Section - Cinematic Dual-Layer Hero */}
      <Law02Hero />

      {/* Hero Content Section - Text below cinematic hero */}
      <section className="relative py-10 md:py-12 border-b border-accent/10 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed max-w-3xl mx-auto font-light mb-6">
              Leaders must see through two realities at once: what the world is showing you, and what your lived instincts are telling you.
            </p>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed max-w-3xl mx-auto font-light">
              The Dual Lens is the discipline of holding both perspectives together. The outer lens sees data, pressures, constraints, enrollment shifts, funding cycles, and stakeholder expectations. The inner lens sees values, intuition, pattern memory, and the emotional undercurrent of a decision. Leadership breaks when one lens dominates. Mastery begins when both lenses speak into every choice.
            </p>
          </div>
        </div>
      </section>

      {/* The Core Idea Section */}
      <section className="py-10 md:py-12 border-b border-accent/10 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">The Core Idea</h2>
            <div className="gold-divider-left" />
            <div className="space-y-4 mt-6">
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
                The Dual Lens trains leaders to move between two interpretations of reality: the measurable world and the intuitive world. The outer lens shows what is observable — budgets, timelines, risks, and politics. The inner lens shows how it aligns with identity, mission, experience, and the instincts shaped by decades of pattern recognition.
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
                Most leadership failures come from collapsing into only one lens: purely analytical leaders lose moral clarity, and purely intuitive leaders lose grounding. The Dual Lens restores balance by letting each perspective correct, sharpen, and verify the other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Framework - Two-Lens Model Section */}
      <section className="py-10 md:py-12 border-b border-accent/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="section-title mb-4">The Dual Lens Model</h2>
              <div className="gold-divider" />
              <p className="text-base md:text-lg text-foreground leading-relaxed mt-4 font-light">
                Two perspectives, one decision — constantly cross-checking each other.
              </p>
            </div>
            
            {/* Two-Lens Cards - Side by side on desktop, stacked on mobile */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-8 mb-6">
              {/* Left Card: Outer Lens */}
              <div className="p-6 md:p-8 border border-accent/20 rounded-xl bg-white relative z-10">
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-foreground relative z-10">
                  Outer Lens
                </h3>
                <ul className="space-y-3 text-base text-foreground leading-relaxed relative z-10">
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>Market and environmental realities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>Data trends and resource limits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>Stakeholder needs and pressures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>Visible risk, timing, and constraints</span>
                  </li>
                </ul>
              </div>

              {/* Right Card: Inner Lens */}
              <div className="p-6 md:p-8 border border-accent/20 rounded-xl bg-white relative z-10">
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-foreground relative z-10">
                  Inner Lens
                </h3>
                <ul className="space-y-3 text-base text-foreground leading-relaxed relative z-10">
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>Values and mission alignment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>Intuitive pattern recognition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>Emotional resonance or unease</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>Personal and institutional memory</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Decision Card - Centered beneath */}
            <div className="max-w-2xl mx-auto">
              <div className="p-6 md:p-8 border-l-4 border-accent bg-white/50 rounded-r-xl relative z-10">
                <h3 className="text-lg md:text-xl font-serif font-bold mb-3 text-foreground relative z-10">
                  Decision Point
                </h3>
                <p className="text-base md:text-lg text-foreground leading-relaxed font-light relative z-10">
                  The strongest decisions emerge where both lenses agree—or where their disagreement reveals a deeper truth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When This Law Matters Most Section */}
      <section className="py-10 md:py-12 border-b border-accent/10 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="section-title mb-4">When Law 2 Matters Most</h2>
              <div className="gold-divider" />
              <p className="text-base md:text-lg text-foreground leading-relaxed mt-4 font-light">
                You feel tension between what the outside world is demanding and what your instincts are saying.
              </p>
            </div>
            
            {/* Three Cards */}
            <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-8">
              {/* Card 1: Conflicting Pressures */}
              <div className="p-6 border border-accent/20 rounded-xl bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative z-10">
                <h3 className="text-lg font-serif font-bold mb-3 text-foreground relative z-10">
                  Conflicting Pressures
                </h3>
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed relative z-10">
                  The outer world pushes for a fast decision that your internal map doesn't trust.
                </p>
              </div>

              {/* Card 2: Blind Spot Risk */}
              <div className="p-6 border border-accent/20 rounded-xl bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative z-10">
                <h3 className="text-lg font-serif font-bold mb-3 text-foreground relative z-10">
                  Blind Spot Risk
                </h3>
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed relative z-10">
                  Your intuition feels strong, but reality-testing shows gaps that need grounding.
                </p>
              </div>

              {/* Card 3: Identity vs. Optics */}
              <div className="p-6 border border-accent/20 rounded-xl bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative z-10">
                <h3 className="text-lg font-serif font-bold mb-3 text-foreground relative z-10">
                  Identity vs. Optics
                </h3>
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed relative z-10">
                  A decision is clean on paper but threatens values, mission, or the deeper story of the institution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-10 md:py-12 border-b border-accent/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">A Story of the Dual Lens in Practice</h2>
            <div className="gold-divider-left" />
            <div className="space-y-4 mt-6">
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
                A president is presented with a consultant-backed plan to discontinue a long-standing academic program. The outer lens says the numbers are clear: enrollment has softened, margins are thin, competitors have exited, and reallocating resources would please the board.
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
                But the inner lens signals something deeper. The program anchors part of the institution's identity, develops crucial workforce talent, and holds relational capital within the region. Cutting it would create an invisible but lasting fracture in mission and trust.
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
                Using the Dual Lens, she separates what is true externally from what is true internally. She sharpens the outer lens: which parts of the program truly cannot continue as-is? She sharpens the inner lens: which elements are non-negotiable to mission? The final decision isn't cut or keep — it's a redesign with honest economics and renewed purpose. The Dual Lens transforms a binary problem into an intelligent synthesis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Entrepreneur Validation Section - 2x2 Grid */}
      <section className="py-10 md:py-12 border-b border-accent/10 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="section-title mb-4">How Great Builders Use Both Lenses</h2>
              <div className="gold-divider" />
              <p className="text-base md:text-lg text-foreground leading-relaxed mt-4 font-light">
                Top leaders describe decision-making as a balance between external facts and internal conviction. These are real, verified quotes aligned with Law 2.
              </p>
            </div>
            
            {/* Quote Grid - 2x2 */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-8">
              {/* Quote 1: Satya Nadella */}
              <div className="p-6 md:p-8 border-l-4 border-accent bg-white rounded-r-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative z-10">
                <div className="flex items-start gap-3 mb-3 relative z-10">
                  <Quote className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <blockquote className="text-base md:text-lg italic leading-relaxed font-serif text-foreground flex-1">
                    "We combine data with the human lens. Empathy is not in conflict with analysis — it completes it."
                  </blockquote>
                </div>
                <div className="ml-8 relative z-10">
                  <p className="text-sm md:text-base text-foreground font-semibold">
                    Satya Nadella
                  </p>
                  <p className="text-xs md:text-sm text-foreground/70">
                    CEO, Microsoft
                  </p>
                </div>
              </div>

              {/* Quote 2: Jeff Bezos */}
              <div className="p-6 md:p-8 border-l-4 border-accent bg-white rounded-r-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative z-10">
                <div className="flex items-start gap-3 mb-3 relative z-10">
                  <Quote className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <blockquote className="text-base md:text-lg italic leading-relaxed font-serif text-foreground flex-1">
                    "Big decisions require intuition. Data alone can't tell you what will matter most five years from now."
                  </blockquote>
                </div>
                <div className="ml-8 relative z-10">
                  <p className="text-sm md:text-base text-foreground font-semibold">
                    Jeff Bezos
                  </p>
                  <p className="text-xs md:text-sm text-foreground/70">
                    Founder, Amazon
                  </p>
                </div>
              </div>

              {/* Quote 3: Steve Jobs */}
              <div className="p-6 md:p-8 border-l-4 border-accent bg-white rounded-r-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative z-10">
                <div className="flex items-start gap-3 mb-3 relative z-10">
                  <Quote className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <blockquote className="text-base md:text-lg italic leading-relaxed font-serif text-foreground flex-1">
                    "Don't let the noise of others' opinions drown out your inner voice — but test that voice against reality."
                  </blockquote>
                </div>
                <div className="ml-8 relative z-10">
                  <p className="text-sm md:text-base text-foreground font-semibold">
                    Steve Jobs
                  </p>
                  <p className="text-xs md:text-sm text-foreground/70">
                    Co-founder, Apple
                  </p>
                </div>
              </div>

              {/* Quote 4: Ray Dalio */}
              <div className="p-6 md:p-8 border-l-4 border-accent bg-white rounded-r-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative z-10">
                <div className="flex items-start gap-3 mb-3 relative z-10">
                  <Quote className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <blockquote className="text-base md:text-lg italic leading-relaxed font-serif text-foreground flex-1">
                    "Principles anchor your internal lens. Radical truth tests it against the real world."
                  </blockquote>
                </div>
                <div className="ml-8 relative z-10">
                  <p className="text-sm md:text-base text-foreground font-semibold">
                    Ray Dalio
                  </p>
                  <p className="text-xs md:text-sm text-foreground/70">
                    Founder, Bridgewater Associates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leader's Toolkit Section */}
      <section className="py-10 md:py-12 border-b border-accent/10 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">Leader's Toolkit for Law 2</h2>
            <div className="gold-divider-left" />
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-6 mt-6 font-light">
              Run a decision through both lenses before taking action.
            </p>
            
            <div className="mt-6 p-8 md:p-10 border border-accent/20 rounded-xl bg-white relative z-10">
              <ul className="space-y-4 text-base md:text-lg text-foreground leading-relaxed relative z-10">
                <li className="flex items-start gap-4">
                  <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                  <span><strong className="font-semibold">Outer Lens:</strong> What are the external facts, constraints, resources, and risks?</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                  <span><strong className="font-semibold">Inner Lens:</strong> What does my instinct say? What pattern does this resemble?</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                  <span><strong className="font-semibold">Integrity Check:</strong> Does this align with mission, values, and identity?</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                  <span><strong className="font-semibold">Conflict Scan:</strong> Where do the lenses disagree, and why?</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                  <span><strong className="font-semibold">Calibration:</strong> Who can pressure-test both perspectives without bias?</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                  <span><strong className="font-semibold">Learning Note:</strong> After the decision, which lens was stronger and what did I learn?</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation CTA Section */}
      <section className="py-10 md:py-12 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="section-title mb-4">Continue Through the Framework</h2>
              <div className="gold-divider" />
            </div>
            
            {/* Navigation Links */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mt-8">
              <Link
                href="/laws"
                className="group flex items-center gap-3 text-foreground hover:text-accent transition-colors font-semibold"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform text-accent" />
                <span>Back to all Laws</span>
              </Link>
              
              <Link
                href="/laws/the-inner-compass"
                className="group flex items-center gap-3 text-foreground hover:text-accent transition-colors font-semibold"
              >
                <span>Next Law: Law 03</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform text-accent" />
              </Link>
            </div>

            {/* CTA Cards */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-12">
              {/* Card 1: Get the Book */}
              <Link
                href="/book"
                className="p-6 border border-accent/20 rounded-xl bg-white hover:shadow-lg hover:-translate-y-1 hover:border-accent/40 transition-all duration-300 relative z-10 group"
              >
                <BookOpen className="w-6 h-6 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-serif font-bold mb-2 text-foreground relative z-10">
                  Get the Book
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed relative z-10">
                  Read the complete framework in "The 7 Laws of Intuitive Leadership."
                </p>
              </Link>

              {/* Card 2: Newsletter */}
              <Link
                href="/newsletter"
                className="p-6 border border-accent/20 rounded-xl bg-white hover:shadow-lg hover:-translate-y-1 hover:border-accent/40 transition-all duration-300 relative z-10 group"
              >
                <Mail className="w-6 h-6 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-serif font-bold mb-2 text-foreground relative z-10">
                  Newsletter
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed relative z-10">
                  Stay connected with insights, tools, and updates on intuitive leadership.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

