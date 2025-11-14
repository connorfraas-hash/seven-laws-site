import Link from 'next/link'
import { Law07Hero } from '@/components/laws/law07-hero'

export function Law7PremiumLayout() {
  return (
    <div className="min-h-screen bg-background grain-texture">
      {/* Hero Section */}
      <Law07Hero />

      {/* The Essence of Law 07 */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">The Essence of Law 07</h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p className="text-lg">
                The Integrity Test is where direction and values are forced to match. Under pressure,
                every leader eventually discovers whether their inner compass is true or merely
                convenient. Law 07 is the discipline of aligning choices with what you claim to stand
                for.
              </p>
              <p>
                Integrity is not perfection. It is coherence. The intentions you hold, the stories you
                tell, and the decisions you make all point in the same direction. When that happens,
                trust deepens and your influence compounds over time.
              </p>
              <p className="font-semibold text-lg">
                This law asks a simple question with serious weight: when it actually costs you
                something, does your compass still point north?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How the Integrity Test works */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">How the Integrity Test Works</h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                Every meaningful decision carries an integrity test inside it. There is a faster path
                and there is a truer path. The test appears when those paths diverge.
              </p>
              <p>
                In practice, Law 07 shows up as small moments: what you say in the meeting after the
                meeting, how you talk about people who are not in the room, what you do when you
                discover a mistake that no one else has seen yet.
              </p>
              <p>
                Over time, these micro decisions build a track record. Your team is not asking, "Is my
                leader perfect?" They are asking, "When it matters, do they tell the truth? Do they
                keep their word? Do their private decisions line up with their public story?"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What fails without integrity */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">What Fails Without Integrity</h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                Without integrity, every other law becomes unstable. Trust erodes. Intuition becomes
                self-serving. Learning is edited to protect ego. Future sensing turns into spin. People
                stop believing what you say and start watching only what you do.
              </p>
              <p>
                The cost is subtle at first: slower buy-in, guarded feedback, quiet disengagement. Then
                it becomes obvious: key people leave, customers drift, opportunities go to someone
                whose word carries more weight.
              </p>
              <p className="font-semibold text-lg">
                Law 07 exists because no amount of strategy or brilliance can compensate for a compass
                that consistently points away from what is true.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">A Moment When Integrity Was Tested</h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                A founder was offered a partnership that would double revenue in a year. The catch was
                subtle but real: the new partner wanted to "soften" how results were reported, pushing
                optimistic projections as if they were already achieved.
              </p>
              <p>
                On paper, the deal was a breakthrough. In reality, it would have required him to bend
                the way he told the truth to his team and customers. The pressure to say yes was
                enormous. Investors were watching. Cash was tight. The opportunity might not come back.
              </p>
              <p>
                Law 07 showed up as a simple internal question: "If this deal works, what kind of
                leader will I have to become to sustain it?" His answer made the decision clear. He
                walked away, absorbing short-term pain in order to protect long-term integrity.
              </p>
              <p>
                Years later, people still referenced that decision as the moment they decided to trust
                him fully. The missed deal hurt. The integrity it proved became priceless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How great builders apply Law 07 */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">How Great Builders Use Law 07</h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>Leaders who live the Integrity Test do a few things consistently:</p>

              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>They define non-negotiables.</strong> They are clear on what they will not
                    trade, even for growth.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>They invite honest mirrors.</strong> They keep people around who can tell
                    them when their actions drift from their values.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>They repair quickly.</strong> When they miss the mark, they own it, correct
                    it, and rebuild trust instead of hiding.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>They align incentives with values.</strong> They design compensation,
                    recognition, and goals so people are not rewarded for cutting ethical corners.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>They think in decades.</strong> They make decisions that their future self
                    and future team could look back on without regret.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integrity calibration checklist */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">The Integrity Calibration Checklist</h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                Use these questions to run your own Integrity Test on a decision or season:
              </p>
              <div className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm p-8 shadow-sm">
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>What story am I telling publicly, and is it fully true?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Where am I tempted to hide, exaggerate, or stay vague?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>If my team saw the full picture, would they feel more trust or less?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Is this choice aligned with the values I claim when it is easy?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>What would my future self thank me for in ten years?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Is there anyone I need to be more honest with before I move forward?</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section className="relative py-16 md:py-20 border-b border-accent/10">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6 text-left">Voices That Echo Law 07</h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <blockquote className="border-l-4 border-accent/60 pl-6 py-2 italic text-lg">
                "Integrity is doing the right thing, even when no one is watching."
                <footer className="mt-2 not-italic text-base text-foreground/70">— Often attributed to C.S. Lewis</footer>
              </blockquote>
              <blockquote className="border-l-4 border-accent/60 pl-6 py-2 italic text-lg">
                "Reputation is what others think of you; integrity is what you know about yourself."
                <footer className="mt-2 not-italic text-base text-foreground/70">— Leadership maxim</footer>
              </blockquote>
              <blockquote className="border-l-4 border-accent/60 pl-6 py-2 italic text-lg">
                "In the long run, every shortcut in integrity becomes a detour in impact."
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
                <span className="font-semibold">← Back to all laws</span>
              </Link>

              <Link
                href="/"
                className="group flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors"
              >
                <span className="font-semibold">Return to homepage →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

