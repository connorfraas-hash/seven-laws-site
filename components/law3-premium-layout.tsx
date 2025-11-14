import Link from 'next/link'
import { ArrowRight, Quote, BookOpen, Mail, ChevronLeft, ChevronRight } from 'lucide-react'
import { Law03Hero } from '@/components/laws/law03-hero'

export function Law3PremiumLayout() {
  return (
    <div className="min-h-screen bg-[#020617] grain-texture">
      {/* Hero Section */}
      <Law03Hero />

      {/* The Inner Compass System */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title mb-4 text-left">The Inner Compass System</h2>
            <p className="text-lg text-foreground/80 mb-12">A 3-layer navigation model for leaders.</p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">Direction</h3>
                <p className="text-foreground/90 leading-relaxed">
                  What future are you trying to create? What identity do you want your organization
                  to grow into? Direction creates the vector.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">Alignment</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Does this decision strengthen or dilute who we are? Does it match our values or
                  quietly compromise them? Alignment shows the truth.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">Discernment</h3>
                <p className="text-foreground/90 leading-relaxed">
                  What pressure is shaping this choice? What part of this is clarity, and what part
                  is rationalization? Discernment corrects the drift.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Law 03 Matters */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">Why Law 03 Matters</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Most leaders drift not because they are weak, but because pressure is strong. Law 03
              distinguishes noise from direction.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span className="text-foreground">Incentives can disguise drift</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span className="text-foreground">Urgency can fake clarity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span className="text-foreground">Success can camouflage misalignment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span className="text-foreground">Consensus can silence intuition</span>
              </li>
            </ul>

            <p className="text-lg text-foreground leading-relaxed mb-4">
              Leaders who follow their inner compass are not slower — they are cleaner. Their teams
              trust them faster. Their decisions age better. Their culture strengthens instead of
              frays.
            </p>

            <p className="text-xl font-semibold text-foreground">Direction is a competitive advantage.</p>
          </div>
        </div>
      </section>

      {/* Navigator Story */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">A Real Leadership Navigation Moment</h2>

            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                A university president faced a partnership that solved a short-term revenue problem.
                Politically safe. Strategically praised. Everything pushed toward "yes."
              </p>

              <p>
                But the partnership quietly bent the institution's identity — just slightly — in a
                direction that didn't feel true. Something subtle pulled back.
              </p>

              <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-6 shadow-sm my-6">
                <p className="font-semibold mb-4 text-foreground">She used the Inner Compass System:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-foreground">
                      <strong>Direction:</strong> "Where do we want to be in ten years?"
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-foreground">
                      <strong>Alignment:</strong> "Does this feel like us?"
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-foreground">
                      <strong>Discernment:</strong> "What pressure makes this irresistible?"
                    </span>
                  </li>
                </ul>
              </div>

              <p>
                She didn't reject the deal — she redesigned it. Alignment restored. Revenue kept.
                Identity protected.
              </p>

              <p className="font-semibold">This is modern leadership: navigation, not reaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inner Compass Science */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">The Science Behind the Inner Compass</h2>

            <ul className="space-y-6">
              <li>
                <h3 className="text-lg font-serif font-semibold mb-2 text-foreground">
                  Somatic Markers
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  The brain encodes experience as felt signals that help leaders detect risk and
                  misalignment.
                </p>
              </li>

              <li>
                <h3 className="text-lg font-serif font-semibold mb-2 text-foreground">
                  Cognitive Dissonance
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  When actions violate values, the nervous system raises alarms: stress, rumination,
                  decision fatigue.
                </p>
              </li>

              <li>
                <h3 className="text-lg font-serif font-semibold mb-2 text-foreground">
                  Coherence States
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  Alignment reduces internal conflict, enabling clearer communication and faster
                  follow-through.
                </p>
              </li>

              <li>
                <h3 className="text-lg font-serif font-semibold mb-2 text-foreground">
                  Identity-Based Decision Making
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  Leaders who act from identity instead of incentives build more stable cultures.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigator Tools */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title mb-6 text-left">Navigator Tools</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-6 shadow-sm">
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                  Compass Scan
                </h3>
                <p className="text-foreground/90 leading-relaxed mb-3">
                  A 3-point alignment ritual:
                </p>
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Does this strengthen who we are?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>What part of this feels clean?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>What version of this would future-me be proud of?</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-6 shadow-sm">
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                  Pressure Audit
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  List the pressures. Remove the illegitimate ones. Make the decision from alignment,
                  not fear.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-6 shadow-sm">
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                  Alignment Ledger
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  Left: the decision. Right: your non-negotiables. Where is the tension?
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-6 shadow-sm">
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                  Course Correction
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  What redesign makes this decision fully aligned?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Quotes */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title mb-6 text-left">How Great Builders Describe Inner Direction</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-6 shadow-sm">
                <Quote className="w-6 h-6 text-accent mb-4" />
                <blockquote className="text-lg italic font-serif leading-relaxed mb-4 text-foreground">
                  "The big question about how people behave is whether they've got an inner scorecard
                  or an outer scorecard."
                </blockquote>
                <cite className="text-sm font-semibold text-foreground/80">— Warren Buffett</cite>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-6 shadow-sm">
                <Quote className="w-6 h-6 text-accent mb-4" />
                <blockquote className="text-lg italic font-serif leading-relaxed mb-4 text-foreground">
                  "Your time is limited, so don't waste it living someone else's life."
                </blockquote>
                <cite className="text-sm font-semibold text-foreground/80">— Steve Jobs</cite>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-6 shadow-sm">
                <Quote className="w-6 h-6 text-accent mb-4" />
                <blockquote className="text-lg italic font-serif leading-relaxed mb-4 text-foreground">
                  "Integrity is the most valuable and respected quality of leadership."
                </blockquote>
                <cite className="text-sm font-semibold text-foreground/80">— Brian Tracy</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calibration Questions */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">Questions To Reset Direction</h2>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span className="text-foreground">What part of this feels true?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span className="text-foreground">What part feels like compromise?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span className="text-foreground">Am I motivated by clarity or pressure?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span className="text-foreground">Would I proudly explain this publicly?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span className="text-foreground">What is the cleanest version of this choice?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span className="text-foreground">
                  Who do I become if I keep choosing this way?
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="relative py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between gap-6">
              <Link
                href="/laws"
                className="group flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-semibold">← Back to All Laws</span>
              </Link>

              <Link
                href="/laws/the-learning-loop"
                className="group flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors"
              >
                <span className="font-semibold">Next: Law 04 — The Learning Loop →</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

