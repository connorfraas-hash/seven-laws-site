import { notFound } from 'next/navigation'
import Link from 'next/link'
import { allLaws } from '@/lib/contentlayer'
import { TableOfContents } from '@/components/table-of-contents'
import { Book, Download, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Law1PremiumLayout } from '@/components/law1-premium-layout'
import { Law2PremiumLayout } from '@/components/law2-premium-layout'
import { Law3PremiumLayout } from '@/components/law3-premium-layout'
import { Law4PremiumLayout } from '@/components/law4-premium-layout'
import { Law5PremiumLayout } from '@/components/law5-premium-layout'
import { Law6PremiumLayout } from '@/components/law6-premium-layout'
import { Law7PremiumLayout } from '@/components/law7-premium-layout'

function extractHeadings(content: string): Array<{ id: string; title: string; level: number }> {
  const headingRegex = /^##\s+(.+)$/gm
  const headings: Array<{ id: string; title: string; level: number }> = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const title = match[1].trim()
    const lowerTitle = title.toLowerCase().trim()
    
    // Map common section names to specific IDs (matching MDX component logic)
    let id: string
    if (lowerTitle === 'narrative') {
      id = 'narrative'
    } else if (lowerTitle === 'the science') {
      id = 'science'
    } else if (lowerTitle === 'case studies') {
      id = 'cases'
    } else if (lowerTitle === 'exercises & worksheet' || lowerTitle === 'exercises & worksheets') {
      id = 'exercises'
    } else {
      // Default: generate ID from text
      id = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
    }
    
    headings.push({ id, title, level: 2 })
  }

  return headings
}

function getExcerpt(content: string, maxLength: number = 300): string {
  const text = content
    .replace(/^#+\s+/gm, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .trim()
  
  const paragraphs = text.split(/\n\n+/)
  const firstParagraph = paragraphs.find(p => p.trim().length > 50) || paragraphs[0] || ''
  
  if (firstParagraph.length > maxLength) {
    return firstParagraph.substring(0, maxLength).trim() + '...'
  }
  
  return firstParagraph.trim()
}

export async function generateStaticParams() {
  try {
    return allLaws.map((law) => ({ slug: law.slug }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const law = allLaws.find((law) => law.slug === params.slug)
    if (!law) return {}
    return { title: law.title }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {}
  }
}

export default function LawPage({ params }: { params: { slug: string } }) {
  const law = allLaws.find((law) => law.slug === params.slug)

  if (!law) {
    notFound()
  }

  // Check if this is Law 01 (Trust, but Test) - use premium layout
  if (law.slug === 'trust-but-test' || law.order === 1) {
    return <Law1PremiumLayout />
  }

  // Check if this is Law 02 (The Dual Lens) - use premium layout
  if (law.slug === 'the-dual-lens' || law.order === 2) {
    return <Law2PremiumLayout />
  }

  // Check if this is Law 03 (The Inner Compass) - use premium layout
  if (law.slug === 'the-inner-compass' || law.order === 3) {
    return <Law3PremiumLayout />
  }

  // Check if this is Law 04 (The Learning Loop) - use premium layout
  if (law.slug === 'the-learning-loop' || law.order === 4) {
    return <Law4PremiumLayout />
  }

  // Check if this is Law 05 (See Beyond the Obvious) - use premium layout
  if (law.slug === 'see-beyond-the-obvious' || law.order === 5) {
    return <Law5PremiumLayout />
  }

  // Check if this is Law 06 (Future Sense) - use premium layout
  if (law.slug === 'future-sense' || law.order === 6) {
    return <Law6PremiumLayout />
  }

  // Check if this is Law 07 (The Integrity Test) - use premium layout
  if (law.slug === 'the-integrity-test' || law.order === 7) {
    return <Law7PremiumLayout />
  }

  // For all other laws, use the standard MDX layout (not used - all laws use premium layouts)
  const headings: Array<{ id: string; title: string; level: number }> = []
  const excerpt = ''

  // Get previous and next laws
  const laws = allLaws.sort((a, b) => a.order - b.order)
  const currentIndex = laws.findIndex(l => l.slug === law.slug)
  const previousLaw = currentIndex > 0 ? laws[currentIndex - 1] : null
  const nextLaw = currentIndex < laws.length - 1 ? laws[currentIndex + 1] : null

  // Map section titles to numbers
  const sectionMap: Record<string, number> = {
    'narrative': 1,
    'science': 2,
    'cases': 3,
    'exercises': 4,
  }

  return (
    <article className="min-h-screen bg-background grain-texture">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 border-b border-accent/10 cinematic-hero">
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <div className="eyebrow mb-8">LAW {String(law.order).padStart(2, '0')}</div>
            <h1 className="section-title mb-10 leading-[1.05] tracking-tight">
              {law.title.replace(/^Law \d+ — /, '')}
            </h1>
            <div className="gold-divider" />
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
              {excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 md:py-48 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="flex gap-16 lg:gap-24">
            {/* Main Article Content */}
            <div className="flex-1 max-w-[800px] mx-auto">
              {/* Pull Quote near top */}
              <div className="mb-16 fade-in">
                <div className="relative p-10 border-l-4 border-accent bg-gradient-to-r from-accent/5 to-transparent rounded-r-xl">
                  <blockquote className="text-2xl md:text-3xl italic leading-relaxed font-serif text-foreground">
                    "Intuition begins with a whisper. Learn to hear it — then verify it — before noise, fear, or bias drown it out."
                  </blockquote>
                </div>
              </div>

              <div className="prose prose-lg md:prose-xl max-w-none">
                {/* MDX content not used - all laws use premium layouts */}
              </div>

              {/* Bottom CTA Strip */}
              <div className="mt-32 pt-20 border-t border-accent/20">
                <div className="bg-gradient-to-br from-accent/8 to-transparent rounded-2xl p-12 md:p-16 border border-accent/20">
                  <div className="grid md:grid-cols-3 gap-6">
                    <Link
                      href="/book"
                      className="group flex flex-col items-center justify-center p-8 border-2 border-accent/40 rounded-xl hover:bg-accent/10 hover:border-accent transition-all duration-300"
                    >
                      <Book className="w-8 h-8 mb-4 text-accent group-hover:scale-110 transition-transform" />
                      <span className="font-semibold text-center uppercase tracking-wider text-sm">Get the Book</span>
                    </Link>
                    <Link
                      href="/newsletter"
                      className="group flex flex-col items-center justify-center p-8 border-2 border-accent/40 rounded-xl hover:bg-accent/10 hover:border-accent transition-all duration-300"
                    >
                      <Download className="w-8 h-8 mb-4 text-accent group-hover:scale-110 transition-transform" />
                      <span className="font-semibold text-center uppercase tracking-wider text-sm">Newsletter</span>
                    </Link>
                    {nextLaw && (
                      <Link
                        href={nextLaw.url}
                        className="group flex flex-col items-center justify-center p-8 border-2 border-accent/40 rounded-xl hover:bg-accent/10 hover:border-accent transition-all duration-300"
                      >
                        <ArrowRight className="w-8 h-8 mb-4 text-accent group-hover:translate-x-2 transition-transform" />
                        <span className="font-semibold text-center uppercase tracking-wider text-sm">Next Law →</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {/* Previous/Next Navigation */}
              {(previousLaw || nextLaw) && (
                <div className="mt-20 pt-16 border-t border-accent/20">
                  <div className="flex items-center justify-between">
                    {previousLaw ? (
                      <Link
                        href={previousLaw.url}
                        className="group flex items-center gap-5 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform text-accent" />
                        <div className="flex flex-col">
                          <span className="text-xs uppercase tracking-[0.2em] text-accent mb-2">Previous</span>
                          <span className="font-semibold text-base">{previousLaw.title.replace(/^Law \d+ — /, '')}</span>
                        </div>
                      </Link>
                    ) : (
                      <div />
                    )}
                    
                    {nextLaw && (
                      <Link
                        href={nextLaw.url}
                        className="group flex items-center gap-5 text-muted-foreground hover:text-foreground transition-colors text-right"
                      >
                        <div className="flex flex-col">
                          <span className="text-xs uppercase tracking-[0.2em] text-accent mb-2">Next</span>
                          <span className="font-semibold text-base">{nextLaw.title.replace(/^Law \d+ — /, '')}</span>
                        </div>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform text-accent" />
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Sticky TOC Sidebar */}
            {headings.length > 0 && (
              <aside className="hidden lg:block w-72 flex-shrink-0">
                <div className="sticky top-32">
                  <TableOfContents headings={headings} />
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>
    </article>
  )
}
