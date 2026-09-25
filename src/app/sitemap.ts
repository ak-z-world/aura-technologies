import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const currentDate = new Date().toISOString().split('T')[0]

  const canonicalRoutes: {
    path: string
    priority: number
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly'
  }[] = [
    { path: '', priority: 1.0, changeFrequency: 'daily' },
    { path: '/software', priority: 0.95, changeFrequency: 'weekly' },
    { path: '/marketing', priority: 0.95, changeFrequency: 'weekly' },
    { path: '/academy', priority: 0.95, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms-conditions', priority: 0.3, changeFrequency: 'yearly' },
  ]

  return canonicalRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
