import type { Metadata } from 'next'
import ServicePageLayout, { ServicePageData } from '@/components/services/ServicePageLayout'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Custom Software Engineering & Architecture | Vertex Loop',
  description:
    'Custom software development company delivering scalable backend microservices, high-concurrency APIs, enterprise SaaS platforms, and modern web architectures.',
  alternates: {
    canonical: `${siteConfig.url}/services/custom-software-development`,
  },
}

const serviceData: ServicePageData = {
  slug: 'custom-software-development',
  title: 'Custom Software Development & Architecture',
  subtitle: 'High-Concurrency Backends & Scalable Platforms',
  heroLabel: 'Custom Engineering',
  heroAccent: 'gold',
  heroDescription:
    'We design and build complex distributed systems, microservices, high-performance APIs, and enterprise web applications with long-term architectural integrity.',
  aeoAnswer:
    'Vertex Loop custom software engineering delivers production-grade microservices, Next.js web applications, REST/GraphQL APIs, distributed data pipelines, and enterprise legacy software modernizations.',
  accentColor: '#a07830',
  capabilities: [
    {
      title: 'Enterprise Microservices & APIs',
      desc: 'Architect high-throughput RESTful and gRPC APIs with robust rate limiting, authentication, and sub-50ms latency.',
    },
    {
      title: 'Scalable Web Applications',
      desc: 'Build modern frontend interfaces with Next.js, React 19, TypeScript, and Tailwind CSS optimized for Core Web Vitals.',
    },
    {
      title: 'Distributed Database Engineering',
      desc: 'Design and optimize relational PostgreSQL, Redis caching, and event-driven Kafka architectures.',
    },
    {
      title: 'Legacy System Modernization',
      desc: 'Refactor monolithic legacy codebases into modular cloud-native architectures with zero operational downtime.',
    },
  ],
  processSteps: [
    { step: '01', label: 'Technical Discovery', desc: 'Identify system bottlenecks, performance requirements, and data models.' },
    { step: '02', label: 'System Design', desc: 'Author detailed API specs, database schemas, and architectural blueprints.' },
    { step: '03', label: 'Agile Delivery', desc: 'Deliver sprint-based releases with automated CI/CD and automated test coverage.' },
    { step: '04', label: 'Handoff & Support', desc: 'Provide full technical documentation, training, and ongoing SLA maintenance.' },
  ],
  technologies: ['Next.js', 'React', 'Node.js', 'Go', 'PostgreSQL', 'Redis', 'GraphQL', 'Docker', 'TypeScript'],
  useCases: ['High-Volume Fintech Platforms', 'Supply Chain Management Systems', 'Enterprise Multi-Tenant SaaS', 'Real-Time Streaming Systems'],
  faq: [
    {
      q: 'What languages and frameworks does Vertex Loop specialize in?',
      a: 'We specialize in TypeScript, Next.js, React, Node.js, Go, Python, and PostgreSQL, focusing on modern cloud-native ecosystems.',
    },
    {
      q: 'Does Vertex Loop handle legacy software migration?',
      a: 'Yes, we perform phased, zero-downtime refactoring of legacy monoliths into scalable microservices architectures.',
    },
  ],
  jsonLdData: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom Software Development & Architecture',
    provider: { '@type': 'Organization', name: 'Vertex Loop', url: siteConfig.url },
    serviceType: 'Software Engineering Services',
  },
}

export default function CustomSoftwarePage() {
  return <ServicePageLayout service={serviceData} />
}
