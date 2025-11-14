import Link from 'next/link'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { Law06Hero } from '@/components/laws/law06-hero'

export function Law6PremiumLayout() {
  return (
    <div className="min-h-screen bg-[#020617] grain-texture">
      {/* Hero Section */}
      <Law06Hero />

      {/* The Essence of Law 06 */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">The Essence of Law 06</h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p className="text-lg">
                Law 06 is about building stability on purpose, not by accident. Great leaders do not
                rely on heroics and willpower alone. They design structures, rhythms, and safeguards
                that keep the system upright even when stress hits.
              </p>
              <p>
                Stability is not slowness. It is the ability to move quickly without tearing the
                organization apart. It is the safety rail that lets people ship, experiment, and adapt
                without fear that one mistake will collapse the whole effort.
              </p>
              <p className="font-semibold text-lg">
                When a leader operates with Law 06, the team feels grounded. Pressure increases, but
                the system does not fracture. Direction remains clear. Execution remains consistent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Design for Stability */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">Why Design for Stability</h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                Organizations rarely fail because people are lazy. They fail because the structures
                around those people are fragile. Roles are unclear. Feedback loops are slow or broken.
                Critical decisions depend on one person being at their best every single day.
              </p>
              <p>
                In that environment, stress exposes every crack. Turnover spikes. Conflicts get
                personal. Projects stall. The leader ends up firefighting instead of steering.
              </p>
              <p className="font-semibold text-lg">
                Law 06 matters because it shifts the question from "Can my people handle this?" to "Can
                our system absorb this?" The leader's job becomes designing a container strong enough
                to hold growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A Moment Where Stability Won */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">A Moment Where Stability Won</h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                A senior leader inherited a team that hit every deadline at the cost of burnout. They
                were praised for "pushing through," but the structure underneath was brittle. Every surge
                of work required heroics. One absence or crisis would have snapped the system.
              </p>
              <p>
                Instead of demanding more effort, she rebuilt the architecture:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">–</span>
                  <span>clarified lanes so decisions moved faster</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">–</span>
                  <span>created weekly check-ins to spot overload early</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">–</span>
                  <span>added simple guardrails around deadlines and approvals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">–</span>
                  <span>designed "slack capacity" so one person's absence did not halt the work</span>
                </li>
              </ul>
              <p>
                When volume spiked six months later, the team felt the pressure — but the system held.
                People were tired, not broken. Delivery stayed on track. The difference was not tougher
                people; it was a smarter design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Great Builders Use Law 06 */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">How Great Builders Use Law 06</h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>Leaders who live this law design stability in several ways:</p>

              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>Clear lanes.</strong> They define who owns what so that decisions do not
                    bounce between people for weeks.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>Rhythms and cadences.</strong> They establish simple cycles for planning,
                    checking progress, and adjusting course.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>Guardrails, not cages.</strong> They create constraints that prevent disaster
                    while still leaving room for creativity.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>Redundancy for key roles.</strong> They make sure that if one person is out,
                    the system still functions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>Deliberate stress tests.</strong> They occasionally "shake" the system on purpose to
                    reveal where it is fragile before real pressure hits.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* System Builder's Checklist */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">System Builder's Checklist</h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                Use this quick scan when you're about to scale, launch, or take on more load:
              </p>
              <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-8 shadow-sm">
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      <strong>Ownership:</strong> Is it clear who decides, who executes, and who is informed?
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      <strong>Cadence:</strong> Where in the calendar do we regularly review load and capacity?
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      <strong>Guardrails:</strong> What are the hard "no's" that keep us from breaking the system?
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      <strong>Slack:</strong> Where is there intentional buffer — time, people, or budget — to absorb surprises?
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      <strong>Backup:</strong> If a key person disappeared for 30 days, what would fail first?
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      <strong>Signal:</strong> How will we know our system is approaching its limit before it actually breaks?
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voices That Echo Law 06 */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">Voices That Echo Law 06</h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <blockquote className="border-l-4 border-accent/60 pl-6 py-2 italic text-lg">
                "You do not rise to the level of your goals. You fall to the level of your systems."
                <footer className="mt-2 not-italic text-base text-foreground/70">— James Clear</footer>
              </blockquote>
              <blockquote className="border-l-4 border-accent/60 pl-6 py-2 italic text-lg">
                "Stability is not immobility; it is the capacity to absorb disturbance and still move
                forward."
                <footer className="mt-2 not-italic text-base text-foreground/70">— Adapted from resilience thinking</footer>
              </blockquote>
              <blockquote className="border-l-4 border-accent/60 pl-6 py-2 italic text-lg">
                "If you want it to scale, design it to survive your own absence."
                <footer className="mt-2 not-italic text-base text-foreground/70">— Builder's principle</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>


      {/* Navigation */}
      <section className="relative py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <Link
                href="/laws"
                className="group flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-semibold">← Back to All Laws</span>
              </Link>

              <Link
                href="/laws/the-integrity-test"
                className="group flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors"
              >
                <span className="font-semibold">Next: Law 07 — The Integrity Test →</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
