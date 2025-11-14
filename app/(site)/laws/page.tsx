import Link from 'next/link'
import Image from 'next/image'
import { allLaws } from '@/lib/contentlayer'
import { ArrowRight, BookOpen } from 'lucide-react'

// Law content mapping with provided summaries
const lawsContent = [
  {
    order: 1,
    slug: 'trust-but-test',
    title: 'Trust, But Test',
    summary: 'Great leaders rely on instinct first — and verification second. This law teaches how to build fast intuitive filters for uncertainty, and when to pause and test assumptions before they become expensive mistakes.',
  },
  {
    order: 2,
    slug: 'the-dual-lens',
    title: 'The Dual Lens',
    summary: 'Seeing decisions through two lenses at once: what is true now, and what will be true later. This law prevents blind spots by forcing clarity across short-term moves and long-term consequences.',
  },
  {
    order: 3,
    slug: 'the-inner-compass',
    title: 'The Inner Compass',
    summary: 'Intuition becomes powerful when it is trained. This law explains how leaders develop instinct through patterns, contrasts, integrity, and lived experience — turning "gut feel" into an internal instrument.',
  },
  {
    order: 4,
    slug: 'the-learning-loop',
    title: 'The Learning Loop',
    summary: 'Judgment compounds through rapid iteration. This law introduces a cycle of acting, observing, recording, and refining — sharpening leadership instincts with every decision.',
  },
  {
    order: 5,
    slug: 'see-beyond-the-obvious',
    title: 'See Beyond the Obvious',
    summary: 'High-level leaders learn to detect early signals — weak data, subtle discomfort, silent anomalies — before they turn into crises. This law builds the skill of noticing what others overlook.',
  },
  {
    order: 6,
    slug: 'future-sense',
    title: 'Future Sense',
    summary: 'Leadership now requires understanding where systems, people, and technology are heading. This law blends AI, data, and intuition into future-oriented decision-making that avoids being blindsided.',
  },
  {
    order: 7,
    slug: 'the-integrity-test',
    title: 'The Integrity Test',
    summary: 'Your decisions must remain aligned with your principles. This law anchors leadership in integrity and trust so people will follow you when it matters most.',
  },
]

export default function LawsPage() {
  return (
    <div className="min-h-screen bg-background grain-texture">

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
            <div className="eyebrow mb-4">THE 7 LAWS</div>
            <h1 className="section-title mb-6 leading-[1.05]">
              A Framework for Intuitive Leadership
            </h1>
            <div className="gold-divider" />
            <p className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed max-w-3xl mx-auto font-light mt-6">
              Seven field-tested principles for clarity, confidence, and decisive action — distilled from decades of presidencies, institutional transformation, and real-world leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Paragraph Section */}
      <section className="py-12 md:py-16 border-b border-accent/10 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
              The 7 Laws are a practical decision-making system built around intuition, pattern recognition, and disciplined testing. They help leaders act when the data is incomplete, the stakes are high, and clarity matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Laws Grid Section */}
      <section className="py-16 md:py-20 border-b border-accent/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-3 md:space-y-4">
              {lawsContent.map((law) => {
                const lawData = allLaws.find((l) => l.slug === law.slug)
                const lawUrl = lawData?.url || `/laws/${law.slug}`
                
                return (
                  <Link
                    key={law.slug}
                    href={lawUrl}
                    className="group block p-5 border border-accent/20 rounded-xl bg-card hover:shadow-xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500"
                  >
                    <div className="mb-3">
                      <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
                        LAW {String(law.order).padStart(2, '0')}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                      {law.title}
                    </h2>
                    <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4">
                      {law.summary}
                    </p>
                    <div className="flex items-center text-accent font-medium group-hover:underline text-sm uppercase tracking-wider">
                      Read Law
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA: Read the Book Section */}
      <section className="py-16 md:py-20 border-b border-accent/10 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title mb-4">Read the Complete Framework</h2>
            <div className="gold-divider" />
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 mt-4 font-light">
              The full book expands each law with case studies, diagrams, and decision tools for real-world leadership.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent text-foreground rounded-xl hover:bg-accent/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <BookOpen className="w-5 h-5" />
              Explore the Book
            </Link>
          </div>
        </div>
      </section>

      {/* CTA: Join the Newsletter Section */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="p-8 md:p-10 border border-accent/20 rounded-xl bg-card">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-foreground">
                  Stay Sharp
                </h2>
                <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
                  Receive leadership insights, decision frameworks, and early signals twice a month.
                </p>
              </div>
              <div className="text-center">
                <Link
                  href="/newsletter"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent text-foreground rounded-xl hover:bg-accent/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Join the Newsletter
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
