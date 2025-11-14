import Link from 'next/link'
import { allLaws } from '@/lib/contentlayer'

export function Footer() {
  const laws = allLaws.sort((a, b) => a.order - b.order).slice(0, 3)

  return (
    <footer className="bg-foreground text-background mt-32 relative overflow-hidden">
      {/* Compass Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="w-64 h-64 rounded-full border-4 border-background flex items-center justify-center">
          <div className="w-32 h-32 border-4 border-background rounded-full" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 max-w-screen-2xl py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20 mb-16">
          {/* Column 1: About + Author */}
          <div className="fade-in">
            <h3 className="font-serif text-lg font-bold mb-8 uppercase tracking-wider text-accent">About</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/author" className="text-background/70 hover:text-accent transition-colors text-base">
                  Author
                </Link>
              </li>
              <li>
                <Link href="/press-contact" className="text-background/70 hover:text-accent transition-colors text-base">
                  Press & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Book + Laws */}
          <div className="fade-in-delay-1">
            <h3 className="font-serif text-lg font-bold mb-8 uppercase tracking-wider text-accent">The Book</h3>
            <ul className="space-y-4 mb-8">
              <li>
                <Link href="/book" className="text-background/70 hover:text-accent transition-colors text-base">
                  Get the Book
                </Link>
              </li>
              <li>
                <Link href="/laws" className="text-background/70 hover:text-accent transition-colors text-base">
                  Explore the 7 Laws
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-background/70 hover:text-accent transition-colors text-base">
                  Newsletter
                </Link>
              </li>
            </ul>
            <div className="pt-8 border-t border-background/20">
              <h4 className="font-serif text-sm font-bold mb-4 uppercase tracking-wider text-background/50">Featured Laws</h4>
              <ul className="space-y-3">
                {laws.map((law) => (
                  <li key={law.slug}>
                    <Link href={law.url} className="text-background/60 hover:text-accent transition-colors text-sm">
                      {law.title.replace(/^Law \d+ — /, '')}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="fade-in-delay-2">
            <h3 className="font-serif text-lg font-bold mb-8 uppercase tracking-wider text-accent">Connect</h3>
            <ul className="space-y-4 mb-8">
              <li>
                <a href="mailto:hello@7lawsofleadership.com" className="text-background/70 hover:text-accent transition-colors text-base">
                  hello@7lawsofleadership.com
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-accent transition-colors text-base">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-accent transition-colors text-base">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-accent/20 text-center">
          <p className="text-background/50 text-sm uppercase tracking-wider">
            © {new Date().getFullYear()} 7 Laws of Intuitive Leadership. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

