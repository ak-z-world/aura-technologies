import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import { getAllIndexableLocations } from '@/lib/geoData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const currentDate = new Date().toISOString().split('T')[0]

  const coreRoutes = [
    '',
    '/about',
    '/ecosystem',
    '/why-us',
    '/contact',
    '/services',
    '/services/ai-development',
    '/services/custom-software-development',
    '/services/cloud-architecture',
    '/services/digital-marketing',
    '/products',
    '/products/erp',
    '/products/invoicing',
    '/products/hrms',
    '/products/scripten',
    '/academy',
    '/locations',
    '/privacy-policy',
    '/terms-conditions',
  ]

  const locationRoutes = getAllIndexableLocations().map(
    (loc) => `/locations/${loc.slugPath.join('/')}`
  )

  const allRoutes = [...coreRoutes, ...locationRoutes]

  return allRoutes.map((route) => {
    let priority = 0.8
    let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' = 'weekly'

    if (route === '') {
      priority = 1.0
      changeFrequency = 'daily'
    } else if (route === '/services' || route === '/locations' || route === '/academy') {
      priority = 0.95
      changeFrequency = 'weekly'
    } else if (route.startsWith('/services/') || route.startsWith('/products/')) {
      priority = 0.9
      changeFrequency = 'weekly'
    } else if (route.startsWith('/locations/')) {
      priority = 0.85
      changeFrequency = 'weekly'
    } else if (route === '/about' || route === '/ecosystem' || route === '/why-us' || route === '/contact') {
      priority = 0.8
      changeFrequency = 'monthly'
    } else if (route === '/privacy-policy' || route === '/terms-conditions') {
      priority = 0.3
      changeFrequency = 'yearly'
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency,
      priority,
    }
  })
}

