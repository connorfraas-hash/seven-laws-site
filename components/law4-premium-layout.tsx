import Link from 'next/link'
import { ArrowRight, Quote, BookOpen, Mail, ChevronLeft, ChevronRight } from 'lucide-react'
import { Law04Hero } from '@/components/laws/law04-hero'

export function Law4PremiumLayout() {
  return (
    <div className="min-h-screen bg-[#020617] grain-texture">
      {/* Hero Section */}
      <Law04Hero />

      {/* Signature Definition */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">The Essence of Law 04</h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p className="text-lg">
                The Learning Loop is the discipline of treating every decision as a cycle — not a
                verdict.
              </p>
              <p className="font-semibold">Great leaders don&apos;t chase perfection; they chase signal.</p>
              <p>
                They run small, fast, intelligent tests that reveal what&apos;s true, what needs
                adjustment, and what deserves commitment. Over time, these micro-cycles compound into
                mastery — not by luck, but by deliberate iteration.
              </p>
              <p className="font-semibold">
                In a world that rewards speed and punishes assumption, the leaders who learn fastest win.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Law 04 Matters */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">Why Law 04 Matters</h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                Most leadership failure doesn&apos;t come from bad ideas — it comes from untested ideas.
              </p>

              <p>
                Teams stall because they try to &apos;get it right&apos; on the first swing.
                Institutions overcommit too early. Entrepreneurs burn time and capital searching for
                certainty that doesn&apos;t exist.
              </p>

              <p>The Learning Loop protects leaders from:</p>

              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Analysis paralysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Betting the organization on unproven assumptions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Reacting emotionally instead of empirically</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Mistaking noise for information</span>
                </li>
              </ul>

              <p className="font-semibold text-lg">Mastery is not a moment. It&apos;s a rhythm.</p>
            </div>
          </div>
        </div>
      </section>


      {/* A Decision in Motion */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">A Leadership Moment That Reveals the Loop</h2>

            <div className="space-y-6 text-foreground leading-relaxed">
              <p>A college president faced pressure to launch a new workforce initiative.</p>
              <p>The board wanted speed. The region needed talent. The data looked promising — but untested.</p>

              <p>Instead of committing to the full investment, she applied the Learning Loop.</p>

              <ol className="space-y-3 ml-6 list-decimal">
                <li>She narrowed the idea to one pilot group.</li>
                <li>Ran a small test for six weeks.</li>
                <li>Measured only meaningful signals — demand, cost-to-run, employer response.</li>
                <li>Adjusted the design and ran it again.</li>
              </ol>

              <p>
                The result wasn&apos;t luck — it was intelligence in motion.
                <br />
                The final initiative launched stronger, faster, and with dramatically less risk.
              </p>

              <p className="text-sm text-foreground/70 italic">
                This story reflects the pattern — the full case studies live in the book.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Great Builders Use Law 04 */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title mb-6 text-left">How Great Builders Use Law 04</h2>
            <p className="text-lg text-foreground/80 mb-12">
              Elite leaders across domains — founders, strategists, presidents, operators — use the
              Learning Loop to create unfair advantage:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                  Portfolio of Small Shots
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  Instead of betting everything on one idea, they run three versions at once to see
                  which reveals the clearest signal.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                  Transparent Debriefs
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  They treat feedback as fuel — not shame. Every cycle ends with a tight,
                  structured review.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                  Compounding Insight
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  Each iteration sharpens instinct and strategy. You aren&apos;t just improving the
                  decision — you&apos;re improving the decision-maker.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Learning Loop Framework */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">The Learning Loop Framework</h2>
            <p className="text-lg text-foreground/80 mb-8">
              This is the working tool leaders use to move fast without being reckless:
            </p>

            <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-8 shadow-sm">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span className="text-foreground">
                    <strong>Define the Shot</strong> — What&apos;s the smallest version of the idea
                    that could reveal the truth?
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span className="text-foreground">
                    <strong>Set the Test</strong> — What signals matter? What would &quot;no,&quot;
                    &quot;yes,&quot; or &quot;adjust&quot; look like?
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span className="text-foreground">
                    <strong>Take the Shot</strong> — Execute small. Fast. Controlled.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span className="text-foreground">
                    <strong>Read the Feedback</strong> — Distill only the meaningful information —
                    not noise.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span className="text-foreground">
                    <strong>Adjust the Next Shot</strong> — What changes make the next iteration
                    stronger?
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span className="text-foreground">
                    <strong>Repeat</strong> — This is where mastery is built.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Voices that Echo Law 04 */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title mb-6 text-left">Voices that Echo Law 04</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-6 shadow-sm">
                <Quote className="w-6 h-6 text-accent mb-4" />
                <blockquote className="text-lg italic font-serif leading-relaxed mb-4 text-foreground">
                  &quot;Learning is not compulsory… neither is survival.&quot;
                </blockquote>
                <cite className="text-sm font-semibold text-foreground/80">
                  — W. Edwards Deming
                </cite>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-6 shadow-sm">
                <Quote className="w-6 h-6 text-accent mb-4" />
                <blockquote className="text-lg italic font-serif leading-relaxed mb-4 text-foreground">
                  &quot;If you double the number of experiments you do per year, you&apos;re going
                  to double your inventiveness.&quot;
                </blockquote>
                <cite className="text-sm font-semibold text-foreground/80">— Jeff Bezos</cite>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-6 shadow-sm">
                <Quote className="w-6 h-6 text-accent mb-4" />
                <blockquote className="text-lg italic font-serif leading-relaxed mb-4 text-foreground">
                  &quot;Success is about stretching yourself to learn something new — becoming
                  smarter, not just looking smart.&quot;
                </blockquote>
                <cite className="text-sm font-semibold text-foreground/80">— Carol Dweck</cite>
              </div>
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
                href="/laws/see-beyond-the-obvious"
                className="group flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors"
              >
                <span className="font-semibold">Next: Law 05 — See Beyond the Obvious →</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
