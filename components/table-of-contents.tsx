'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface TOCItem {
  id: string
  title: string
  level: number
}

interface TableOfContentsProps {
  headings: TOCItem[]
  className?: string
}

export function TableOfContents({ headings, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-100px 0px -66% 0px',
        threshold: 0,
      }
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      headings.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [headings])

  // Map section IDs to numbers
  const sectionMap: Record<string, number> = {
    'narrative': 1,
    'science': 2,
    'cases': 3,
    'exercises': 4,
  }

  if (headings.length === 0) return null

  return (
    <nav className={cn('h-fit', className)}>
      <div className="border-l-2 border-accent/30 pl-8">
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-8">
          Contents
        </h3>
        <ul className="space-y-4">
          {headings.map((heading) => {
            const sectionNum = sectionMap[heading.id] || 0
            const isActive = activeId === heading.id
            return (
              <li key={heading.id}>
                <a
                  href={`#${heading.id}`}
                  className={cn(
                    'group flex items-start gap-4 text-sm transition-all duration-300 hover:text-foreground hover:translate-x-1',
                    isActive
                      ? 'text-accent font-semibold translate-x-1'
                      : 'text-muted-foreground'
                  )}
                >
                  <span className={cn(
                    'text-xs uppercase tracking-[0.25em] font-mono mt-0.5 w-8 flex-shrink-0 transition-colors',
                    isActive ? 'text-accent' : 'text-muted-foreground/50 group-hover:text-accent/60'
                  )}>
                    {sectionNum > 0 ? String(sectionNum).padStart(2, '0') : '—'}
                  </span>
                  <span className="flex-1 leading-relaxed">{heading.title}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

