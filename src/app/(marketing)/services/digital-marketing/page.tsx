import type { Metadata } from 'next'
import ServicePageLayout, { ServicePageData } from '@/components/services/ServicePageLayout'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Digital Marketing, Technical SEO, AEO & GEO Search Visibility | Vertex Loop Pvt Ltd',
  description:
    'Data-driven digital marketing agency specializing in technical SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and performance marketing.',
  alternates: {
    canonical: `${siteConfig.url}/services/digital-marketing`,
  },
  openGraph: {
    title: 'Digital Marketing, Technical SEO, AEO & GEO Search Visibility | Vertex Loop Pvt Ltd',
    description:
      'Data-driven digital marketing agency specializing in technical SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and performance marketing.',
    url: `${siteConfig.url}/services/digital-marketing`,
  },
}

const serviceData: ServicePageData = {
  slug: 'digital-marketing',
  title: 'Digital Marketing & Technical SEO (AEO/GEO)',
  subtitle: 'Engineering Search Authority for AI & Google',
  heroLabel: 'Search & Growth Engineering',
  heroAccent: 'rose',
  heroDescription:
    'Vertex Loop Pvt Ltd combines deep technical SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and performance marketing to dominate organic and AI search engines.',
  aeoAnswer:
    'Vertex Loop Pvt Ltd provides specialized digital marketing and technical SEO services, including Core Web Vitals optimization, JSON-LD structured data engineering, Answer Engine Optimization for ChatGPT/Perplexity/Gemini/Claude, and ROI-focused performance campaigns for international clients.',
  accentColor: '#b04a4a',
  capabilities: [
    {
      title: 'Technical SEO & Core Web Vitals',
      desc: 'Optimize LCP, INP, CLS, render-blocking scripts, server response times (TTFB), and mobile viewport rendering for maximum Google search indexation efficiency.',
    },
    {
      title: 'AEO & GEO Search Optimization',
      desc: 'Position your brand, services, and executive leadership as authoritative entities in AI search engines (ChatGPT, Claude, Perplexity, Google Gemini, and Bing Copilot).',
    },
    {
      title: 'Structured Data & Knowledge Graph Engineering',
      desc: 'Author and inject rich Schema.org JSON-LD graphs (Organization, Service, Course, Product, FAQPage) to win Google rich snippets and knowledge panel entity establishment.',
    },
    {
      title: 'Performance Marketing & PPC Growth',
      desc: 'Execute high-intent search and social advertising campaigns on Google Ads, Meta Ads, and LinkedIn Ads engineered for low CAC and maximum return on ad spend (ROAS).',
    },
  ],
  processSteps: [
    { step: '01', label: 'Technical, AEO & Entity Audit', desc: 'Audit crawlability, Core Web Vitals, Schema.org validity, and brand entity citations across AI search indexes.' },
    { step: '02', label: 'Content & Schema Blueprint', desc: 'Map search intent keywords, direct AEO question capsules, topical clusters, and JSON-LD entity graphs.' },
    { step: '03', label: 'Execution & Infrastructure', desc: 'Implement frontend code optimizations, publish authoritative topical content, and launch targeted paid campaigns.' },
    { step: '04', label: 'Analytics & Attribution', desc: 'Track organic impressions, GA4 conversion attribution, AI search citations, and customer acquisition cost.' },
  ],
  technologies: ['Google Analytics 4', 'Search Console', 'Ahrefs', 'Semrush', 'Screaming Frog', 'Schema.org', 'Meta Ads', 'Google Ads', 'LinkedIn Campaign Manager'],
  useCases: [
    'Enterprise B2B SaaS Global Organic Growth',
    'AI Search Engine Entity Establishment & Brand Defense',
    'E-Commerce Search & Conversion Rate Optimization',
    'High-Value Lead Generation for Consulting & Agency Firms',
    'Technical Core Web Vitals Remediation for Next.js Sites',
  ],
  faq: [
    {
      q: 'What is Generative Engine Optimization (GEO) at Vertex Loop Pvt Ltd?',
      a: 'Generative Engine Optimization (GEO) is the technical discipline of structuring website architecture, Schema.org knowledge graphs, direct factual content capsules, and credible digital citations so AI systems (such as ChatGPT, Perplexity, Gemini, and Claude) cite and recommend your company in generative AI query responses.',
    },
    {
      q: 'What is Answer Engine Optimization (AEO)?',
      a: 'Answer Engine Optimization (AEO) focuses on structuring web content into concise, direct, question-and-answer format accompanied by FAQPage and Service structured data to win Google Featured Snippets, Voice Search answers, and direct AI summary cards.',
    },
    {
      q: 'How does Vertex Loop optimize Next.js websites for Core Web Vitals?',
      a: 'We eliminate render-blocking JavaScript, optimize font loading strategies, implement responsive image formatting (WebP/AVIF), minimize server response latency (TTFB), and optimize layout shifts to consistently achieve green scores (95+) on Google PageSpeed Insights.',
    },
    {
      q: 'Does Vertex Loop manage paid performance marketing (PPC)?',
      a: 'Yes. We engineer data-driven Google Ads, LinkedIn B2B, and Meta campaigns targeting high-intent search keywords and decision-maker demographics with precision conversion tracking in Google Analytics 4.',
    },
    {
      q: 'Does Vertex Loop deliver digital marketing and SEO for global clients?',
      a: 'Yes. We deliver international SEO, AEO, and GEO growth campaigns for enterprises across India, North America, the United Kingdom, UAE, and Singapore.',
    },
    {
      q: 'How soon can an organization expect measurable SEO results?',
      a: 'Technical SEO fixes, schema injection, and Core Web Vitals optimizations typically yield improved crawl rates and ranking improvements within 2 to 6 weeks, while comprehensive topical authority campaigns compound over 3 to 6 months.',
    },
  ],
  jsonLdData: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/services/digital-marketing#service`,
    name: 'Digital Marketing & Technical SEO (AEO/GEO)',
    description: 'Data-driven digital marketing agency specializing in technical SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and performance marketing.',
    provider: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.telephone,
      email: siteConfig.email,
    },
    serviceType: [
      'Digital Marketing & Growth',
      'Technical SEO & Core Web Vitals',
      'Answer Engine Optimization (AEO)',
      'Generative Engine Optimization (GEO)',
      'Structured Data & Knowledge Graph Engineering',
      'Performance Marketing & PPC Management',
    ],
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia', 'United Arab Emirates', 'Singapore', 'Worldwide'],
  },
}

export default function DigitalMarketingPage() {
  return <ServicePageLayout service={serviceData} />
}
