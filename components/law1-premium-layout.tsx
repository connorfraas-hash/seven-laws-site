import Link from 'next/link'
import { ArrowRight, Quote, ExternalLink, BookOpen, Mail } from 'lucide-react'

// Fog Panel Component
type FogPanelProps = {
  image: string
  label: string
  title: string
  body?: string
}

function FogPanel({ image, label, title, body }: FogPanelProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-neutral-900/95 text-neutral-50 my-10 lg:my-16">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70 fog-drift-slow"
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Subtle top-to-bottom gradient so text is always readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
      <div className="relative px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16 max-w-2xl mx-auto">
        <p className="text-[0.7rem] tracking-[0.22em] uppercase text-amber-200/80">
          {label}
        </p>
        <h3 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-serif font-semibold tracking-tight">
          {title}
        </h3>
        {body && (
          <p className="mt-3 text-sm sm:text-base text-neutral-100/85 leading-relaxed font-light">
            {body}
          </p>
        )}
      </div>
    </section>
  )
}

export function Law1PremiumLayout() {
  return (
    <div className="min-h-screen bg-background grain-texture">

      {/* Hero Section - Smoke Drift Cinematic Intro */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden border-b border-accent/10">
        {/* Smoke Drift Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
          aria-hidden="true"
        >
          <source src="/videos/law1-smoke-loop.mp4" type="video/mp4" />
          {/* Fallback: If video fails to load, the gradient overlay will still provide a background */}
        </video>

        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 md:from-black/60 md:via-black/50 md:to-black/60 z-0" />

        {/* Hero Content */}
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10 py-12 md:py-0">
          <div className="max-w-4xl mx-auto text-center md:text-left md:ml-0">
            <div className="eyebrow mb-4 text-white/90">LAW 01</div>
            <h1 className="section-title mb-6 leading-[1.05] text-white">
              Trust, but Test
            </h1>
            <div className="gold-divider mb-6 md:mx-0" />
            <p className="text-xl md:text-2xl lg:text-3xl text-white/95 leading-relaxed max-w-3xl font-light mb-6">
              Intuition is your fastest sensor. Testing is your brake and your seatbelt.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl font-light">
              Leaders at every level feel early signals long before the data catches up: a shift in team energy, a strange movement in the market, a gut sense that something isn't aligned. Law 1 doesn't ask you to ignore that whisper. It asks you to treat it as a hypothesis and test it.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Strip - Opening Pull Quote */}
      <section className="py-10 md:py-12 border-b border-accent/10 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-10 border border-accent/20 bg-white rounded-xl relative z-10">
              <blockquote className="text-xl md:text-2xl lg:text-3xl italic leading-relaxed font-serif text-foreground text-center mb-4 relative z-10">
                "Intuition begins with a whisper. Learn to hear it — then verify it, before noise, fear, or bias drown it out."
              </blockquote>
              <div className="text-center relative z-10">
                <p className="text-base md:text-lg text-foreground/70 font-light">
                  — Ronald D. Kraft, PhD
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fog Panel 1 - After Quote, Before Narrative */}
      <div className="container mx-auto px-6 max-w-screen-2xl">
        <FogPanel
          image="/images/law1-fog-a.jpg"
          label="Law 01 · Atmosphere"
          title="When the signal first appears"
          body="Trust, but Test begins in the fog: a quiet internal nudge that something is off long before the data catches it."
        />
      </div>

      {/* Narrative Section - Shackleton Story */}
      <section className="py-10 md:py-12 border-b border-accent/10 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-6xl mx-auto">
            {/* Desktop: Two-column layout */}
            <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-12">
              {/* Left: Narrative Content */}
              <div className="md:col-span-2">
                <h2 className="section-title mb-6 text-left">Narrative</h2>
                <div className="gold-divider-left" />
                <div className="space-y-4 mt-6">
                  <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
                    Intuition often surfaces before the data catches up. Great leaders develop the ability to notice these early signals — a shift in team energy, a subtle change in market behavior, a gut recognition that something isn't aligned. Ernest Shackleton trusted his instinct that morale would determine survival, pairing this intuition with strict routines, controlled risk-taking, and constant evaluation. The result: all 28 men survived an impossible situation. This story illustrates how intuition starts as a whisper, a quiet signal that something is off or something could work, before noise, fear, or bias drown it out.
                  </p>
                </div>
              </div>

              {/* Right: Key Lesson Card */}
              <div className="md:col-span-1">
                <div className="p-6 border border-accent/20 rounded-xl bg-white sticky top-24 relative z-10">
                  <h3 className="text-lg md:text-xl font-serif font-bold mb-4 text-foreground relative z-10">
                    Key Lesson
                  </h3>
                  <ul className="space-y-3 text-base text-foreground leading-relaxed relative z-10">
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                      <span>Intuition surfaces first.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                      <span>Testing creates discipline.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                      <span>Survival came from both instinct and structure.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mobile: Stacked layout */}
            <div className="md:hidden space-y-6">
              <h2 className="section-title mb-6 text-left">Narrative</h2>
              <div className="gold-divider-left" />
              <div className="space-y-4 mt-6">
                <p className="text-lg text-foreground leading-relaxed font-light">
                  Intuition often surfaces before the data catches up. Great leaders develop the ability to notice these early signals — a shift in team energy, a subtle change in market behavior, a gut recognition that something isn't aligned. Ernest Shackleton trusted his instinct that morale would determine survival, pairing this intuition with strict routines, controlled risk-taking, and constant evaluation. The result: all 28 men survived an impossible situation. This story illustrates how intuition starts as a whisper, a quiet signal that something is off or something could work, before noise, fear, or bias drown it out.
                </p>
              </div>
              
              {/* Key Lesson Card */}
              <div className="p-6 border border-accent/20 rounded-xl bg-white relative z-10">
                <h3 className="text-lg font-serif font-bold mb-4 text-foreground relative z-10">
                  Key Lesson
                </h3>
                <ul className="space-y-3 text-base text-foreground leading-relaxed relative z-10">
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>Intuition surfaces first.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>Testing creates discipline.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                    <span>Survival came from both instinct and structure.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Science Section */}
      <section className="py-10 md:py-12 border-b border-accent/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">The Science</h2>
            <div className="gold-divider-left" />
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4 mt-6 font-light">
              Why intuition is real data — and why it still needs testing.
            </p>
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
                Neuroscience shows that intuition is not mystical; it is pattern recognition built from experience. System 1 thinking operates quickly and automatically, while System 2 provides deliberate, analytical processing. The insula tracks internal body signals, giving rise to "gut feelings." The amygdala tags situations with emotional meaning based on prior experiences.
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
                The prefrontal cortex evaluates options and adjusts judgment. Together, these create fast, subconscious evaluations that surface as intuition. However, intuition can be distorted by fear, stress, or bias. Testing introduces objectivity, friction, and accountability. The ideal is integrated decision-making, where instinct and analysis work together.
              </p>
            </div>
            <p className="text-sm md:text-base text-foreground/60 italic mt-6 font-light">
              "Law 1 blends fast pattern recognition with deliberate verification — not mysticism."
            </p>
          </div>
        </div>
      </section>

      {/* Law 1 Framework Strip Section */}
      <section className="py-10 md:py-12 border-b border-accent/10 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="section-title mb-4">The Law 1 Framework</h2>
              <div className="gold-divider" />
              <p className="text-base md:text-lg text-foreground leading-relaxed mt-4 font-light">
                A five-step loop you can run in minutes, not weeks.
              </p>
            </div>
            
            {/* Framework Process Strip */}
            <div className="mt-8 p-6 md:p-8 border border-accent/20 rounded-xl bg-white relative z-10">
              {/* Desktop: Horizontal Layout */}
              <div className="hidden md:flex items-center gap-2 lg:gap-4 relative z-10">
                {/* Step 1: Intuition */}
                <div className="flex-1 p-4 border-r border-accent/10">
                  <div className="text-sm md:text-base font-semibold text-foreground mb-2">
                    Intuition
                  </div>
                  <div className="text-xs md:text-sm text-foreground/70 leading-relaxed">
                    Your fast read of what's really going on.
                  </div>
                </div>

                {/* Arrow */}
                <div className="text-accent/40 text-lg lg:text-xl flex-shrink-0 px-1">→</div>

                {/* Step 2: Assumption */}
                <div className="flex-1 p-4 border-r border-accent/10">
                  <div className="text-sm md:text-base font-semibold text-foreground mb-2">
                    Assumption
                  </div>
                  <div className="text-xs md:text-sm text-foreground/70 leading-relaxed">
                    Name what would have to be true for that read to be right.
                  </div>
                </div>

                {/* Arrow */}
                <div className="text-accent/40 text-lg lg:text-xl flex-shrink-0 px-1">→</div>

                {/* Step 3: Micro-Test */}
                <div className="flex-1 p-4 border-r border-accent/10">
                  <div className="text-sm md:text-base font-semibold text-foreground mb-2">
                    Micro-Test
                  </div>
                  <div className="text-xs md:text-sm text-foreground/70 leading-relaxed">
                    Find a small, fast, low-risk way to check it.
                  </div>
                </div>

                {/* Arrow */}
                <div className="text-accent/40 text-lg lg:text-xl flex-shrink-0 px-1">→</div>

                {/* Step 4: Adjust */}
                <div className="flex-1 p-4 border-r border-accent/10">
                  <div className="text-sm md:text-base font-semibold text-foreground mb-2">
                    Adjust
                  </div>
                  <div className="text-xs md:text-sm text-foreground/70 leading-relaxed">
                    Update your view based on what reality tells you.
                  </div>
                </div>

                {/* Arrow */}
                <div className="text-accent/40 text-lg lg:text-xl flex-shrink-0 px-1">→</div>

                {/* Step 5: Decide */}
                <div className="flex-1 p-4">
                  <div className="text-sm md:text-base font-semibold text-foreground mb-2">
                    Decide
                  </div>
                  <div className="text-xs md:text-sm text-foreground/70 leading-relaxed">
                    Make the call with both instinct and evidence in view.
                  </div>
                </div>
              </div>

              {/* Mobile: Vertical Layout */}
              <div className="md:hidden space-y-4 relative z-10">
                {/* Step 1: Intuition */}
                <div className="p-4 border-b border-accent/10">
                  <div className="text-base font-semibold text-foreground mb-2">
                    Intuition
                  </div>
                  <div className="text-sm text-foreground/70 leading-relaxed">
                    Your fast read of what's really going on.
                  </div>
                </div>

                {/* Step 2: Assumption */}
                <div className="p-4 border-b border-accent/10">
                  <div className="text-base font-semibold text-foreground mb-2">
                    Assumption
                  </div>
                  <div className="text-sm text-foreground/70 leading-relaxed">
                    Name what would have to be true for that read to be right.
                  </div>
                </div>

                {/* Step 3: Micro-Test */}
                <div className="p-4 border-b border-accent/10">
                  <div className="text-base font-semibold text-foreground mb-2">
                    Micro-Test
                  </div>
                  <div className="text-sm text-foreground/70 leading-relaxed">
                    Find a small, fast, low-risk way to check it.
                  </div>
                </div>

                {/* Step 4: Adjust */}
                <div className="p-4 border-b border-accent/10">
                  <div className="text-base font-semibold text-foreground mb-2">
                    Adjust
                  </div>
                  <div className="text-sm text-foreground/70 leading-relaxed">
                    Update your view based on what reality tells you.
                  </div>
                </div>

                {/* Step 5: Decide */}
                <div className="p-4">
                  <div className="text-base font-semibold text-foreground mb-2">
                    Decide
                  </div>
                  <div className="text-sm text-foreground/70 leading-relaxed">
                    Make the call with both instinct and evidence in view.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fog Panel 2 - Between Framework and Case Studies */}
      <div className="container mx-auto px-6 max-w-screen-2xl">
        <FogPanel
          image="/images/law1-fog-b.jpg"
          label="Law 01 · Pattern Recognition"
          title="Seeing the pattern beneath the noise"
          body="Intuition is pattern recognition. Testing forces the pattern into the real world."
        />
      </div>

      {/* Case Studies / Real-World Application Section */}
      <section className="py-10 md:py-12 border-b border-accent/10 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">How This Law Shows Up in Real Decisions</h2>
            <div className="gold-divider-left" />
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 mt-6 font-light italic">
              Executives who recover quickly from crises share a pattern: someone trusted an early signal and then tested it, fast.
            </p>
            <div className="space-y-6">
              <div className="p-5 border-l-4 border-accent/40 bg-white/50 rounded-r-lg relative z-10">
                <p className="text-base md:text-lg text-foreground font-semibold mb-2 relative z-10">
                  A first signal
                </p>
                <p className="text-base md:text-lg text-foreground leading-relaxed font-light relative z-10">
                  Executives in fast-moving crises report that the first signal — "something is wrong" — arrives before any dashboard shows a problem.
                </p>
              </div>
              <div className="p-5 border-l-4 border-accent/40 bg-white/50 rounded-r-lg relative z-10">
                <p className="text-base md:text-lg text-foreground font-semibold mb-2 relative z-10">
                  A micro-test
                </p>
                <p className="text-base md:text-lg text-foreground leading-relaxed font-light relative z-10">
                  The leaders who succeed act on the signal and verify with fast data and tight feedback cycles. Extra scenario modeling, reference checks, or a pilot run.
                </p>
              </div>
              <div className="p-5 border-l-4 border-accent/40 bg-white/50 rounded-r-lg relative z-10">
                <p className="text-base md:text-lg text-foreground font-semibold mb-2 relative z-10">
                  A decisive pivot
                </p>
                <p className="text-base md:text-lg text-foreground leading-relaxed font-light relative z-10">
                  Companies that recover quickly share a common pattern: someone in leadership trusted a subtle internal cue, tested it, and made a decisive pivot before the problem was obvious.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entrepreneur Validation Section - Static Grid */}
      <section className="py-10 md:py-12 border-b border-accent/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="section-title mb-4">How Builders Talk About Law 1</h2>
              <div className="gold-divider" />
              <p className="text-base md:text-lg text-foreground leading-relaxed mt-4 font-light">
                The best founders don't ignore their instincts — they build systems to test them.
              </p>
            </div>
            
            {/* Quote Grid */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-8">
              {/* Quote 1: Jeff Bezos */}
              <div className="p-6 md:p-8 border-l-4 border-accent bg-white rounded-r-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative z-10">
                <div className="flex items-start gap-3 mb-3 relative z-10">
                  <Quote className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <blockquote className="text-base md:text-lg italic leading-relaxed font-serif text-foreground flex-1">
                    "We are stubborn on vision. We are flexible on details."
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

              {/* Quote 2: Ray Dalio */}
              <div className="p-6 md:p-8 border-l-4 border-accent bg-white rounded-r-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative z-10">
                <div className="flex items-start gap-3 mb-3 relative z-10">
                  <Quote className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <blockquote className="text-base md:text-lg italic leading-relaxed font-serif text-foreground flex-1">
                    "Truth — an accurate understanding of reality — is the essential foundation for any good outcome."
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

              {/* Quote 3: Eric Ries */}
              <div className="p-6 md:p-8 border-l-4 border-accent bg-white rounded-r-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative z-10">
                <div className="flex items-start gap-3 mb-3 relative z-10">
                  <Quote className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <blockquote className="text-base md:text-lg italic leading-relaxed font-serif text-foreground flex-1">
                    "Test assumptions you've made about your business, its customers, and how you're serving them."
                  </blockquote>
                </div>
                <div className="ml-8 relative z-10">
                  <p className="text-sm md:text-base text-foreground font-semibold">
                    Eric Ries
                  </p>
                  <p className="text-xs md:text-sm text-foreground/70">
                    Author, The Lean Startup
                  </p>
                </div>
              </div>

              {/* Quote 4: Reid Hoffman */}
              <div className="p-6 md:p-8 border-l-4 border-accent bg-white rounded-r-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative z-10">
                <div className="flex items-start gap-3 mb-3 relative z-10">
                  <Quote className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <blockquote className="text-base md:text-lg italic leading-relaxed font-serif text-foreground flex-1">
                    "If you are not embarrassed by the first version of your product, you've launched too late."
                  </blockquote>
                </div>
                <div className="ml-8 relative z-10">
                  <p className="text-sm md:text-base text-foreground font-semibold">
                    Reid Hoffman
                  </p>
                  <p className="text-xs md:text-sm text-foreground/70">
                    Co-founder, LinkedIn
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
            <h2 className="section-title mb-6 text-left">Leader's Toolkit: Practicing Law 1</h2>
            <div className="gold-divider-left" />
            
            <div className="mt-6 p-8 md:p-10 border border-accent/20 rounded-xl bg-white relative z-10">
              <ol className="space-y-6 text-base md:text-lg text-foreground leading-relaxed relative z-10">
                <li className="flex items-start gap-4">
                  <span className="text-accent text-xl font-bold flex-shrink-0 mt-0">1.</span>
                  <div>
                    <strong className="font-semibold">Intuition → Test → Action Loop</strong>
                    <p className="mt-2 font-light">Write the initial signal. Define the smallest test possible. Capture the outcome. Adjust.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent text-xl font-bold flex-shrink-0 mt-0">2.</span>
                  <div>
                    <strong className="font-semibold">The Contrarian Test</strong>
                    <p className="mt-2 font-light">Ask: "What evidence would prove me wrong?" This prevents blind spots.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent text-xl font-bold flex-shrink-0 mt-0">3.</span>
                  <div>
                    <strong className="font-semibold">Emotional Calibration</strong>
                    <p className="mt-2 font-light">Identify whether the signal is intuition (calm, persistent) or fear (urgent, chaotic). Keep a decision journal to track patterns over time.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Insight Section - Video Links */}
      <section className="py-10 md:py-12 border-b border-accent/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="section-title mb-4">Recommended Insight</h2>
              <div className="gold-divider" />
              <p className="text-base md:text-lg text-foreground leading-relaxed mt-4 font-light">
                Talks that reinforce the habit of trusting the signal and testing it fast.
              </p>
            </div>
            
            {/* Video Link Cards */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-8">
              {/* Card 1: Build, Measure, Learn */}
              <div className="p-5 border border-accent/20 rounded-xl bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative z-10">
                <div className="flex items-start justify-between gap-4 relative z-10">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-serif font-bold mb-2 text-foreground">
                      "Build, Measure, Learn"
                    </h3>
                    <p className="text-sm md:text-base text-foreground/70 leading-relaxed mb-4">
                      A talk or conversation from Eric Ries on testing assumptions before scaling.
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-sm md:text-base transition-colors"
                    >
                      Watch the talk
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2: Principles for Radical Truth */}
              <div className="p-5 border border-accent/20 rounded-xl bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative z-10">
                <div className="flex items-start justify-between gap-4 relative z-10">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-serif font-bold mb-2 text-foreground">
                      "Principles for Radical Truth"
                    </h3>
                    <p className="text-sm md:text-base text-foreground/70 leading-relaxed mb-4">
                      Ray Dalio on seeking reality over comfort in decision-making.
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-sm md:text-base transition-colors"
                    >
                      Watch the talk
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 3: Deciding Under Uncertainty */}
              <div className="p-5 border border-accent/20 rounded-xl bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 md:col-span-2 relative z-10">
                <div className="flex items-start justify-between gap-4 relative z-10">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-serif font-bold mb-2 text-foreground">
                      "Deciding Under Uncertainty"
                    </h3>
                    <p className="text-sm md:text-base text-foreground/70 leading-relaxed mb-4">
                      A leadership talk on making calls with incomplete data.
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-sm md:text-base transition-colors"
                    >
                      Watch the talk
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fog Panel 3 - Between Recommended Insight and CTA */}
      <div className="container mx-auto px-6 max-w-screen-2xl">
        <FogPanel
          image="/images/law1-fog-a.jpg"
          label="Law 01 · From Insight to Action"
          title="Close the loop: act, learn, refine"
          body="Leaders who sharpen intuition test early, act quickly, and learn continuously."
        />
      </div>

      {/* CTA Row Section - Tighter Layout */}
      <section className="py-10 md:py-12 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="section-title mb-4">Keep Moving Through the Framework</h2>
              <div className="gold-divider" />
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed mt-4 font-light">
                Get the full book, stay close through the newsletter, or continue to Law 2.
              </p>
            </div>
            
            {/* Three CTA Cards */}
            <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-8">
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

              {/* Card 3: Next Law */}
              <Link
                href="/laws/the-dual-lens"
                className="p-6 border border-accent/20 rounded-xl bg-white hover:shadow-lg hover:-translate-y-1 hover:border-accent/40 transition-all duration-300 relative z-10 group"
              >
                <ArrowRight className="w-6 h-6 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-serif font-bold mb-2 text-foreground relative z-10">
                  Next Law →
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed relative z-10">
                  Continue to Law 2: The Dual Lens
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

