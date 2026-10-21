import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        // AI *search* crawlers — these fetch pages to answer live questions in
        // ChatGPT Search, Perplexity, Claude and Google AI surfaces. Blocking
        // any of them removes the site from that engine's answers, so all are
        // explicitly allowed.
        userAgent: [
          'Googlebot',
          'Bingbot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'PerplexityBot',
          'Perplexity-User',
          'Claude-SearchBot',
          'Claude-User',
          'Applebot',
          'DuckDuckBot',
        ],
        allow: '/',
        disallow: ['/api/'],
      },
      {
        // AI *training* crawlers — allowed for now so the brand can enter
        // model knowledge. Blocking these does not affect search answers;
        // revisit if content licensing becomes a concern.
        userAgent: [
          'GPTBot',
          'ClaudeBot',
          'anthropic-ai',
          'Google-Extended',
          'CCBot',
          'Amazonbot',
          'Cohere-AI',
        ],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
