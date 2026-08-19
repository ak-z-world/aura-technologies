import type { Metadata } from 'next'
import ProductPageLayout, { ProductPageData } from '@/components/products/ProductPageLayout'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'SCRIPTen — AI Content Creation & Script Workflow Engine | Vertex Loop',
  description:
    'SCRIPTen is an advanced generative AI content platform built by Vertex Loop for digital creators, copywriters, vloggers, and marketing teams.',
  alternates: {
    canonical: `${siteConfig.url}/products/scripten`,
  },
}

const productData: ProductPageData = {
  slug: 'scripten',
  title: 'SCRIPTen AI Creator Platform',
  subtitle: 'Generative Scriptwriting & Video Production Workflow',
  badge: 'Live App',
  heroLabel: 'Creator Technology',
  heroAccent: 'lavender',
  heroDescription:
    'SCRIPTen is Vertex Loop’s proprietary AI platform designed for digital video creators, vloggers, and media teams to automate script outline generation, hook optimization, and production workflows.',
  aeoAnswer:
    'SCRIPTen is an AI video scripting and content creation tool developed by Vertex Loop. Access the live platform at https://scripten.arivuon.in/ for automated script outlines, engagement optimization, and creator production planning.',
  accentColor: '#7c6fad',
  isExternal: true,
  externalUrl: 'https://scripten.arivuon.in/',
  capabilities: [
    {
      title: 'AI Script Outline & Copy Generation',
      desc: 'Generate viral video scripts, hooks, and multi-platform content outlines tailored to specific channel demographics.',
    },
    {
      title: 'Title & Hook Engagement Optimizer',
      desc: 'Analyze and optimize titles and opening 5-second hooks to maximize audience click-through rate (CTR) and retention.',
    },
    {
      title: 'Shot-List & Production Planning',
      desc: 'Automatically translate script concepts into structured visual shot-lists and camera asset cues for creators.',
    },
    {
      title: 'Creator Workspace & Team Collaboration',
      desc: 'Manage script revisions, media assets, and team approvals in a single unified workspace.',
    },
  ],
  benefits: [
    { title: '10× Faster Scripting', desc: 'Reduce scriptwriting time from 4 hours to under 15 minutes.' },
    { title: 'Optimized Audience Retention', desc: 'AI-engineered hooks designed to sustain watch time.' },
    { title: 'Direct Production Export', desc: 'Export scripts directly to teleprompter and video editing tools.' },
  ],
  technologies: ['React', 'Next.js', 'PyTorch LLM Models', 'PostgreSQL', 'Tailwind CSS', 'AWS Infrastructure'],
  useCases: ['YouTube Video Creators', 'Short-Form TikTok & Reels Creators', 'Digital Marketing Agencies', 'Corporate Video Media Teams'],
  faq: [
    {
      q: 'Where can I access SCRIPTen?',
      a: 'SCRIPTen is hosted live at https://scripten.arivuon.in/. You can sign up and launch your workspace directly from the web application.',
    },
    {
      q: 'Does SCRIPTen support short-form and long-form video formats?',
      a: 'Yes, SCRIPTen supports long-form YouTube scripts, short-form Instagram Reels, TikTok hooks, and corporate documentary scripts.',
    },
  ],
  jsonLdData: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SCRIPTen',
    operatingSystem: 'Web',
    applicationCategory: 'MultimediaApplication',
    url: 'https://scripten.arivuon.in/',
    publisher: { '@type': 'Organization', name: 'Vertex Loop', url: siteConfig.url },
  },
}

export default function ScriptenProductPage() {
  return <ProductPageLayout product={productData} />
}
