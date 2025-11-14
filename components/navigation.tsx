'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { SiteIndexOverlay } from './site-index-overlay'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showIndex, setShowIndex] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-background/98 backdrop-blur-md shadow-sm border-b border-accent/20'
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-3 group"
            >
              <div className="w-10 h-10 rounded-full border-2 border-accent/60 group-hover:border-accent transition-colors duration-300 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-accent/60 group-hover:border-accent rounded-full transition-colors duration-300" />
              </div>
              <span className="font-serif text-xl md:text-2xl font-bold tracking-tight">7 Laws</span>
            </Link>

            {/* INDEX Button */}
            <button
              onClick={() => setShowIndex(true)}
              className="relative text-xs md:text-sm font-medium uppercase tracking-[0.15em] text-foreground/80 hover:text-accent transition-all duration-300 group"
            >
              <span className="relative z-10">INDEX</span>
              <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </div>
        </div>
      </nav>
      <SiteIndexOverlay open={showIndex} onClose={() => setShowIndex(false)} />
    </>
  )
}

