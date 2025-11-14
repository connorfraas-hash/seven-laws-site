import * as React from 'react'
import Link from 'next/link'
import { Download } from 'lucide-react'
import { cn } from '@/lib/utils'

interface WorksheetDownloadProps {
  title: string
  href: string
  className?: string
}

export function WorksheetDownload({
  title,
  href,
  className,
}: WorksheetDownloadProps) {
  return (
    <Link
      href={href}
      className={cn(
        'fade-in inline-flex items-center gap-3 rounded-lg bg-foreground px-6 py-3 text-base font-semibold text-background hover:bg-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl',
        className
      )}
      download
    >
      <Download className="h-5 w-5" />
      {title}
    </Link>
  )
}

