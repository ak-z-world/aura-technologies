import React from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/config/site'

export interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  id?: string
}

export default function Breadcrumb({ items, className = '', id }: BreadcrumbProps) {
  const allItems = [{ name: 'Home', url: siteConfig.url }, ...items]
  const schemaId = id || `breadcrumb-${items.map(i => i.name).join('-').toLowerCase().replace(/[^a-z0-9]+/g, '-')}-jsonld`

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url}`,
    })),
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} id={schemaId} />
      <nav aria-label="Breadcrumb" className={`flex items-center space-x-2 text-xs font-mono text-slate-dim ${className}`}>
        <Link href="/" className="hover:text-slate-ink flex items-center gap-1 transition-colors">
          <Home size={12} />
          <span className="sr-only">Home</span>
        </Link>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <React.Fragment key={item.url}>
              <ChevronRight size={11} className="text-slate-dim/60" />
              {isLast ? (
                <span className="text-slate-ink font-medium truncate max-w-[200px]" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.url} className="hover:text-slate-ink transition-colors truncate max-w-[150px]">
                  {item.name}
                </Link>
              )}
            </React.Fragment>
          )
        })}
      </nav>
    </>
  )
}
