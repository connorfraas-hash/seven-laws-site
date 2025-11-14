import Link from 'next/link'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { Law05Hero } from '@/components/laws/law05-hero'

export function Law5PremiumLayout() {
  return (
    <div className="min-h-screen bg-background grain-texture">
      {/* Hero Section */}
      <Law05Hero />

      {/* The Essence of Law 05 */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">The Essence of Law 05</h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p className="text-lg">
                Law 05 reveals the discipline of pattern recognition.
              </p>
              <p className="font-semibold">
                Great leaders don&apos;t react to the surface noise — they sense the deeper structure underneath.
              </p>
              <p>
                Most problems look chaotic at first: scattered facts, contradicting signals, moving pieces. But
                beneath that mess is a pattern. Law 05 trains leaders to spot that pattern faster than others.
              </p>
              <p className="font-semibold">
                When the puzzle looks disconnected, the builder with Law 05 sees the invisible shape forming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Law 05 Matters */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">Why Law 05 Matters</h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                Most leadership failures come from misreading the problem.
              </p>
              <p>
                Not because leaders are unintelligent — but because the obvious answer is almost always wrong.
              </p>

              <p>This law matters because:</p>

              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Pressure exaggerates the wrong signals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Data often hides the real driver</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Teams can mistake motion for direction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>The first explanation is rarely the real one</span>
                </li>
              </ul>

              <p className="font-semibold text-lg">
                Law 05 teaches leaders to pause, step back, and see the pattern forming behind the noise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A Real Moment of Pattern Recognition */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">A Real Moment of Pattern Recognition</h2>

            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                A division leader faced declining student engagement across programs.
              </p>
              <p>
                The surface explanation — &quot;students are less motivated now&quot; — was repeated in meetings,
                dashboards, and national reports.
              </p>
              <p>But the deeper pattern said something else.</p>

              <p>When she applied Law 05, the puzzle snapped into place:</p>

              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>The drop wasn&apos;t global — it was concentrated in certain subgroups.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    Those subgroups experienced schedule conflicts, not disengagement.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    Attendance dips aligned perfectly with shifts in bus routes and faculty office hours.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>The &quot;motivation crisis&quot; was really a logistics mismatch.</span>
                </li>
              </ul>

              <p>
                Once she saw the deeper pattern, the solution took weeks — not years.
              </p>
              <p className="font-semibold">
                This is the power of Law 05.
              </p>
              <p>
                Leaders make better moves when they diagnose the real problem, not the noisy one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Great Builders Use Law 05 */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title mb-6 text-left">How Great Builders Use Law 05</h2>
            <p className="text-lg text-foreground/80 mb-12">
              Real builders apply this law constantly:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                  Pattern Snapshots
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  They capture fragments of reality and check whether they point toward the same underlying
                  issue.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                  Second Explanation Test
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  If the obvious answer comes too fast, they ask: &quot;What is the deeper pattern this
                  resembles?&quot;
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                  Structural Thinking
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  They don&apos;t just see events — they see systems: feedback loops, incentives, rhythms,
                  hidden constraints.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                  Edge Signal Sensitivity
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  They pay attention to weak signals, not just loud ones. Small anomalies often reveal the true
                  structure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes for Law 05 */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title mb-6 text-left">Voices that Echo Law 05</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-6 shadow-sm">
                <Quote className="w-6 h-6 text-accent mb-4" />
                <blockquote className="text-lg italic font-serif leading-relaxed mb-4 text-foreground">
                  &quot;The obvious is often the enemy of the true.&quot;
                </blockquote>
                <cite className="text-sm font-semibold text-foreground/80">— Daniel Kahneman</cite>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-6 shadow-sm">
                <Quote className="w-6 h-6 text-accent mb-4" />
                <blockquote className="text-lg italic font-serif leading-relaxed mb-4 text-foreground">
                  &quot;The pattern is always there. Most people just look too quickly to see it.&quot;
                </blockquote>
                <cite className="text-sm font-semibold text-foreground/80">— Nassim Nicholas Taleb</cite>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-6 shadow-sm">
                <Quote className="w-6 h-6 text-accent mb-4" />
                <blockquote className="text-lg italic font-serif leading-relaxed mb-4 text-foreground">
                  &quot;The real voyage of discovery consists not in seeking new landscapes, but in having new
                  eyes.&quot;
                </blockquote>
                <cite className="text-sm font-semibold text-foreground/80">— Marcel Proust</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigator Tools */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">Navigator Tools</h2>
            <p className="text-lg text-foreground/80 mb-8">
              These tools match the pattern-driven behavior of Law 05:
            </p>

            <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-8 shadow-sm">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span className="text-foreground">
                    <strong>The Pattern Scan</strong> — What repeated shape does this resemble? What past
                    decision shares this structure?
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span className="text-foreground">
                    <strong>Noise Filter</strong> — Which variables matter? Which are just emotional smoke?
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span className="text-foreground">
                    <strong>Signal Amplifier</strong> — Which weak signals point toward the deeper issue?
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span className="text-foreground">
                    <strong>The Hidden Cause Prompt</strong> — What&apos;s the underlying structure that would
                    make all these symptoms make sense?
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span className="text-foreground">
                    <strong>The 80% Frame</strong> — What is the explanation that fits 80% of the evidence
                    without forcing it?
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="relative py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <Link
                href="/laws"
                className="group flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-semibold">← Back to All Laws</span>
              </Link>

              <Link
                href="/laws/future-sense"
                className="group flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors"
              >
                <span className="font-semibold">Next: Law 06 — Future Sense →</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}