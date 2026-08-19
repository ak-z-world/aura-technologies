import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const currentDate = new Date().toISOString().split('T')[0]

  const routes = [
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
    '/privacy-policy',
    '/terms-conditions',
  ]

  return routes.map((route) => {
    let priority = 0.8
    if (route === '') priority = 1.0
    else if (route.startsWith('/products/') || route.startsWith('/services/')) priority = 0.9
    else if (route === '/academy' || route === '/ecosystem') priority = 0.85
    else if (route === '/privacy-policy' || route === '/terms-conditions') priority = 0.3

    return {
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: route === '' ? 'daily' : 'weekly',
      priority,
    }
  })
}
