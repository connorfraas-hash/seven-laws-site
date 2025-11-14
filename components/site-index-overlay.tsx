'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { allLaws } from '@/lib/contentlayer'

interface SiteIndexOverlayProps {
  open: boolean
  onClose: () => void
}

export function SiteIndexOverlay({ open, onClose }: SiteIndexOverlayProps) {
  const pathname = usePathname()
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onClose()
      }
    }

    if (open) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
      setIsAnimating(true)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
      setIsAnimating(false)
    }
  }, [open, onClose])

  // Close on overlay background click
  useEffect(() => {
    const handleOverlayClick = (e: MouseEvent) => {
      if (open && overlayRef.current && e.target === overlayRef.current) {
        onClose()
      }
    }

    if (open) {
      overlayRef.current?.addEventListener('click', handleOverlayClick)
      return () => {
        overlayRef.current?.removeEventListener('click', handleOverlayClick)
      }
    }
  }, [open, onClose])

  // Focus trap
  useEffect(() => {
    if (open && contentRef.current) {
      const focusableElements = contentRef.current.querySelectorAll(
        'a, button, [tabindex]:not([tabindex="-1"])'
      )
      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement?.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
      }

      document.addEventListener('keydown', handleTabKey)
      firstElement?.focus()

      return () => {
        document.removeEventListener('keydown', handleTabKey)
      }
    }
  }, [open])

  const pages = [
    { href: '/', label: 'Home' },
    { href: '/laws', label: 'The 7 Laws' },
    { href: '/book', label: 'The Book' },
    { href: '/author', label: 'Author' },
    { href: '/speaking', label: 'Speaking' },
    { href: '/newsletter', label: 'Newsletter' },
    { href: '/press-contact', label: 'Press & Contact' },
  ]

  const laws = allLaws.sort((a, b) => a.order - b.order)

  if (!open) return null

  return (
    <div
      ref={overlayRef}
      className={cn(
        'fixed inset-0 z-[9999] backdrop-blur-md',
        'transition-all duration-350 ease-out',
        isAnimating ? 'opacity-100' : 'opacity-0',
        'grain-texture grid-overlay'
      )}
      style={{
        backgroundColor: 'rgba(11, 15, 25, 0.98)',
        animation: open ? 'fadeInUp 0.35s ease-out forwards' : 'none',
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="index-overlay-title"
    >
      <div
        ref={contentRef}
        className="h-full overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="container mx-auto px-6 max-w-screen-2xl py-12 md:py-20 lg:py-24 relative z-10">
          {/* Close Button */}
          <div className="flex justify-end mb-12 md:mb-16">
            <button
              onClick={onClose}
              className="text-white hover:text-[#C4A05A] transition-all duration-300 p-2 group"
              aria-label="Close index"
            >
              <X className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
            {/* Left Column - Pages */}
            <div className="fade-in">
              <h2
                id="index-overlay-title"
                className="text-xs uppercase tracking-[0.2em] text-[#C4A05A] mb-10 font-semibold"
              >
                PAGES
              </h2>
              <nav className="space-y-5">
                {pages.map((page, index) => {
                  const isActive = pathname === page.href || (page.href === '/' && pathname === '/')
                  return (
                    <Link
                      key={page.href}
                      href={page.href}
                      onClick={onClose}
                      className={cn(
                        'group flex items-center gap-6 text-white hover:text-[#C4A05A] transition-all duration-300',
                        isActive && 'text-[#C4A05A] font-semibold'
                      )}
                    >
                      <span className={cn(
                        'text-xs uppercase tracking-[0.25em] font-mono w-8 transition-colors',
                        isActive ? 'text-[#C4A05A]' : 'text-white/70 group-hover:text-[#C4A05A]'
                      )}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-lg md:text-xl font-serif flex-1 relative text-white">
                        {page.label}
                        <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C4A05A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      </span>
                      {isActive && (
                        <span className="ml-auto text-xs uppercase tracking-wider text-[#C4A05A]">Current</span>
                      )}
                    </Link>
                  )
                })}
              </nav>
            </div>

            {/* Right Column - Index */}
            <div className="fade-in-delay-1">
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#C4A05A] mb-10 font-semibold">
                SITE INDEX
              </h2>

              {/* The 7 Laws */}
              <div className="mb-16">
                <h3 className="text-sm uppercase tracking-[0.15em] text-white/90 mb-8 font-medium">
                  THE 7 LAWS
                </h3>
                <nav className="space-y-4">
                  {laws.map((law) => {
                    const isActive = pathname === law.url
                    return (
                      <Link
                        key={law.slug}
                        href={law.url}
                        onClick={onClose}
                        className={cn(
                          'group flex items-start gap-4 text-white hover:text-[#C4A05A] transition-all duration-300',
                          isActive && 'text-[#C4A05A] font-semibold'
                        )}
                      >
                        <span className={cn(
                          'text-xs uppercase tracking-[0.25em] font-mono mt-1 w-12 flex-shrink-0 transition-colors',
                          isActive ? 'text-[#C4A05A]' : 'text-white/70 group-hover:text-[#C4A05A]'
                        )}>
                          {String(law.order).padStart(2, '0')}
                        </span>
                        <span className="text-base md:text-lg font-serif leading-snug flex-1 text-white">
                          {law.title.replace(/^Law \d+ — /, '')}
                        </span>
                      </Link>
                    )
                  })}
                </nav>
              </div>

              {/* Newsletter */}
              <div className="mb-16">
                <h3 className="text-sm uppercase tracking-[0.15em] text-white/90 mb-8 font-medium">
                  NEWSLETTER
                </h3>
                <nav className="space-y-4">
                  <Link
                    href="/newsletter"
                    onClick={onClose}
                    className={cn(
                      'group flex items-center gap-4 text-white hover:text-[#C4A05A] transition-all duration-300',
                      pathname === '/newsletter' && 'text-[#C4A05A] font-semibold'
                    )}
                  >
                    <span className={cn(
                      'text-xs uppercase tracking-[0.25em] font-mono w-8 transition-colors',
                      pathname === '/newsletter' ? 'text-[#C4A05A]' : 'text-white/70 group-hover:text-[#C4A05A]'
                    )}>
                      01
                    </span>
                    <span className="text-base md:text-lg font-serif text-white">Newsletter</span>
                  </Link>
                </nav>
              </div>

              {/* Press & Contact */}
              <div>
                <h3 className="text-sm uppercase tracking-[0.15em] text-white/90 mb-8 font-medium">
                  PRESS & CONTACT
                </h3>
                <nav className="space-y-4">
                  <Link
                    href="/press-contact"
                    onClick={onClose}
                    className={cn(
                      'group flex items-center gap-4 text-white hover:text-[#C4A05A] transition-all duration-300',
                      pathname === '/press-contact' && 'text-[#C4A05A] font-semibold'
                    )}
                  >
                    <span className={cn(
                      'text-xs uppercase tracking-[0.25em] font-mono w-8 transition-colors',
                      pathname === '/press-contact' ? 'text-[#C4A05A]' : 'text-white/70 group-hover:text-[#C4A05A]'
                    )}>
                      01
                    </span>
                    <span className="text-base md:text-lg font-serif text-white">Press & Contact</span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
