import type { Metadata } from 'next'
import ServicePageLayout, { ServicePageData } from '@/components/services/ServicePageLayout'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Digital Marketing, Technical SEO & AEO/GEO Visibility | Vertex Loop',
  description:
    'Data-driven digital marketing agency specializing in technical SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and performance marketing.',
  alternates: {
    canonical: `${siteConfig.url}/services/digital-marketing`,
  },
}

const serviceData: ServicePageData = {
  slug: 'digital-marketing',
  title: 'Digital Marketing & Technical SEO (AEO/GEO)',
  subtitle: 'Engineering Search Authority for AI & Google',
  heroLabel: 'Search & Growth Engineering',
  heroAccent: 'rose',
  heroDescription:
    'Vertex Loop combines deep technical SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and performance marketing to dominate organic and AI search engines.',
  aeoAnswer:
    'Vertex Loop provides specialized digital marketing and technical SEO services, including Core Web Vitals optimization, JSON-LD structured data engineering, Answer Engine Optimization for ChatGPT/Perplexity/Gemini, and ROI-focused performance campaigns.',
  accentColor: '#b04a4a',
  capabilities: [
    {
      title: 'Technical SEO & Core Web Vitals',
      desc: 'Optimize LCP, INP, CLS, render-blocking scripts, and server response times for maximum Google crawling efficiency.',
    },
    {
      title: 'AEO & GEO Search Optimization',
      desc: 'Position your brand as an authoritative entity in AI search engines (ChatGPT, Claude, Perplexity, Gemini, Bing Copilot).',
    },
    {
      title: 'Structured Data & Schema Engineering',
      desc: 'Inject rich JSON-LD schema markup across all pages to win Google rich snippets and knowledge graph placement.',
    },
    {
      title: 'Performance Marketing & PPC',
      desc: 'Execute data-backed search and social advertising campaigns engineered for low CAC and high return on ad spend (ROAS).',
    },
  ],
  processSteps: [
    { step: '01', label: 'Technical & GEO Audit', desc: 'Inspect crawler performance, Core Web Vitals, entity presence, and gap analysis.' },
    { step: '02', label: 'Content & Schema Blueprint', desc: 'Map keywords, direct AEO query answers, and JSON-LD schemas.' },
    { step: '03', label: 'Execution & Optimization', desc: 'Implement site optimizations, publish topical assets, and launch paid campaigns.' },
    { step: '04', label: 'Analytics & Attribution', desc: 'Track organic keywords, GA4 conversions, AI search mentions, and revenue.' },
  ],
  technologies: ['Google Analytics 4', 'Search Console', 'Ahrefs', 'Screaming Frog', 'Semrush', 'Schema.org', 'Meta Ads', 'Google Ads'],
  useCases: ['Enterprise B2B SaaS Growth', 'E-commerce Search Optimization', 'Brand AI Entity Establishment', 'Global Multi-Region Organic Scale'],
  faq: [
    {
      q: 'What is Generative Engine Optimization (GEO)?',
      a: 'GEO is the discipline of optimizing website content, structured data, and citations so AI search engines like ChatGPT and Perplexity recommend your company in query responses.',
    },
    {
      q: 'How long does technical SEO optimization take to show results?',
      a: 'Technical fixes like Core Web Vitals and schema enhancements often produce indexing and ranking improvements within 2 to 6 weeks.',
    },
  ],
  jsonLdData: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Digital Marketing & Technical SEO (AEO/GEO)',
    provider: { '@type': 'Organization', name: 'Vertex Loop', url: siteConfig.url },
    serviceType: 'Search Engine Optimization & Marketing',
  },
}

export default function DigitalMarketingPage() {
  return <ServicePageLayout service={serviceData} />
}
