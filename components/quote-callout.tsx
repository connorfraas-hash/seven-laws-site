import * as React from 'react'
import { cn } from '@/lib/utils'

interface QuoteCalloutProps {
  children: React.ReactNode
  className?: string
}

export function QuoteCallout({ children, className }: QuoteCalloutProps) {
  return (
    <div
      className={cn(
        'fade-in my-16 rounded-xl border-l-4 border-accent/60 bg-gradient-to-r from-accent/8 to-accent/2 p-10 md:p-12 shadow-lg',
        className
      )}
    >
      <blockquote className="text-2xl md:text-3xl italic leading-relaxed font-serif text-foreground">
        "{children}"
      </blockquote>
    </div>
  )
}

