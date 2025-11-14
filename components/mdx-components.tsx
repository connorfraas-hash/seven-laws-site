import * as React from 'react'
import Link from 'next/link'
import { QuoteCallout } from './quote-callout'
import { WorksheetDownload } from './worksheet-download'

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={`hidden ${className}`}
      {...props}
    />
  ),
  h2: ({ className, id, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    // Generate ID from text content if not provided
    const getTextContent = (children: React.ReactNode): string => {
      if (typeof children === 'string') return children
      if (Array.isArray(children)) {
        return children.map(getTextContent).join('')
      }
      if (typeof children === 'object' && children !== null && 'props' in children) {
        return getTextContent(children.props.children)
      }
      return ''
    }
    
    const textContent = getTextContent(children)
    let headingId = id
    let sectionNumber = 0
    
    if (!headingId && textContent) {
      // Map common section names to specific IDs and numbers
      const lowerText = textContent.toLowerCase().trim()
      if (lowerText === 'narrative') {
        headingId = 'narrative'
        sectionNumber = 1
      } else if (lowerText === 'the science') {
        headingId = 'science'
        sectionNumber = 2
      } else if (lowerText === 'case studies') {
        headingId = 'cases'
        sectionNumber = 3
      } else if (lowerText === 'exercises & worksheet' || lowerText === 'exercises & worksheets') {
        headingId = 'exercises'
        sectionNumber = 4
      } else {
        // Default: generate ID from text
        headingId = textContent
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '')
      }
    } else if (headingId) {
      // Map existing IDs to section numbers
      const sectionMap: Record<string, number> = {
        'narrative': 1,
        'science': 2,
        'cases': 3,
        'exercises': 4,
      }
      sectionNumber = sectionMap[headingId] || 0
    }
    
    return (
      <h2
        id={headingId}
        className={`fade-in mt-32 mb-12 text-[32px] md:text-[40px] font-semibold leading-[1.2] tracking-tight scroll-mt-32 border-b border-accent/20 pb-5 ${className}`}
        {...props}
      >
        {sectionNumber > 0 && (
          <span className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3 font-mono">
            SECTION {String(sectionNumber).padStart(2, '0')}
          </span>
        )}
        {children}
      </h2>
    )
  },
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={`text-2xl font-semibold tracking-tight mt-6 mb-3 ${className}`}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={`text-xl font-semibold tracking-tight mt-4 mb-2 ${className}`}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={`fade-in text-[18px] md:text-[20px] leading-[1.8] mb-8 tracking-wide ${className}`} {...props} />
  ),
  a: ({ className, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    // If it's an external link or has a protocol, use regular anchor
    if (href && (href.startsWith('http') || href.startsWith('//') || href.startsWith('mailto:'))) {
      return (
        <a
          href={href}
          className={`font-medium text-primary underline underline-offset-4 ${className}`}
          {...props}
        />
      )
    }
    // Otherwise, use Next.js Link for internal links
    return (
      <Link
        href={href || '#'}
        className={`font-medium text-primary underline underline-offset-4 ${className}`}
        {...props}
      />
    )
  },
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={`fade-in my-8 ml-6 list-disc space-y-4 ${className}`} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={`fade-in my-8 ml-6 list-decimal space-y-4 ${className}`} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={`text-[18px] md:text-[20px] leading-[1.8] tracking-wide ${className}`} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={`fade-in mt-8 mb-8 border-l-4 border-accent pl-8 italic text-xl md:text-2xl leading-relaxed font-serif ${className}`}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm ${className}`}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={`mb-4 mt-6 overflow-x-auto rounded-lg bg-muted p-4 ${className}`}
      {...props}
    />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-16 border-0 border-t border-border/50 w-full" {...props} />
  ),
  QuoteCallout,
  WorksheetDownload,
}

export { components as Mdx }

