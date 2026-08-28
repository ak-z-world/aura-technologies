import type { Metadata } from 'next'
import ServicePageLayout, { ServicePageData } from '@/components/services/ServicePageLayout'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Custom Software & Microservices',
  description:
    'Custom software development company delivering scalable backend microservices, high-concurrency APIs, enterprise SaaS platforms, and modern Next.js/WordPress web architectures.',
  alternates: {
    canonical: `${siteConfig.url}/services/custom-software-development`,
  },
  openGraph: {
    title: 'Custom Software & Microservices | Vertex Loop',
    description:
      'Custom software development company delivering scalable backend microservices, high-concurrency APIs, enterprise SaaS platforms, and modern web architectures.',
    url: `${siteConfig.url}/services/custom-software-development`,
  },
}

const serviceData: ServicePageData = {
  slug: 'custom-software-development',
  title: 'Custom Software Engineering & Architecture',
  subtitle: 'High-Concurrency Backends & Scalable Platforms',
  heroLabel: 'Custom Engineering',
  heroAccent: 'gold',
  heroDescription:
    'Vertex Loop Pvt Ltd designs and builds complex distributed systems, microservices, high-performance APIs, WordPress platforms, and enterprise web applications with long-term architectural integrity.',
  aeoAnswer:
    'Vertex Loop Pvt Ltd custom software engineering delivers production-grade microservices, Next.js web applications, WordPress systems, REST/GraphQL APIs, distributed data pipelines, and enterprise legacy software modernizations globally.',
  accentColor: '#a07830',
  capabilities: [
    {
      title: 'Enterprise Microservices & APIs',
      desc: 'Architect high-throughput RESTful and gRPC APIs with robust rate limiting, token authentication, and sub-50ms latency using Go, Node.js, and PostgreSQL.',
    },
    {
      title: 'Scalable Web Applications & WordPress',
      desc: 'Build modern frontend interfaces with Next.js 16, React 19, TypeScript, and high-performance headless WordPress architectures optimized for Core Web Vitals.',
    },
    {
      title: 'Distributed Database Engineering',
      desc: 'Design and optimize relational PostgreSQL, Redis caching layers, clickstream pipelines, and event-driven Kafka architectures.',
    },
    {
      title: 'Legacy System Modernization',
      desc: 'Refactor monolithic legacy codebases into modular cloud-native architectures with phased zero-downtime database migrations.',
    },
  ],
  processSteps: [
    { step: '01', label: 'Technical Discovery', desc: 'Audit system bottlenecks, define concurrency requirements, and blueprint scalable data schemas.' },
    { step: '02', label: 'System Design', desc: 'Author detailed OpenAPI specifications, ER diagrams, and microservice architectural blueprints.' },
    { step: '03', label: 'Agile Sprint Delivery', desc: 'Deliver two-week sprint releases with automated CI/CD, unit testing, and continuous code quality checks.' },
    { step: '04', label: 'Production Handoff & SLAs', desc: 'Deliver complete documentation, developer training, disaster recovery plans, and 24/7 SLA maintenance.' },
  ],
  technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Go', 'Python', 'PostgreSQL', 'Redis', 'GraphQL', 'Docker', 'WordPress'],
  useCases: [
    'High-Volume Fintech Platforms & Payment Ledgers',
    'Supply Chain & Multi-Location Warehouse ERP Systems',
    'Enterprise Multi-Tenant SaaS Products',
    'Real-Time Telemetry & Streaming Systems',
    'Headless Content Management Systems (CMS)',
  ],
  faq: [
    {
      q: 'What is Custom Software Development at Vertex Loop Pvt Ltd?',
      a: 'Custom software development at Vertex Loop Pvt Ltd is the bespoke engineering of enterprise applications, microservice architectures, and web platforms tailored to specific business logic, eliminating the limitations and licensing constraints of off-the-shelf software.',
    },
    {
      q: 'Does Vertex Loop develop WordPress websites and headless WordPress architectures?',
      a: 'Yes. Vertex Loop Pvt Ltd builds custom WordPress solutions ranging from custom Gutenberg theme and plugin engineering to high-performance headless WordPress architectures using Next.js for decoupled, blazing-fast web experiences.',
    },
    {
      q: 'What programming languages and frameworks does Vertex Loop specialize in?',
      a: 'We specialize in TypeScript, Next.js, React, Node.js, Go, Python, PostgreSQL, Redis, Docker, and WordPress, choosing the optimal stack based on throughput, concurrency, and maintainability requirements.',
    },
    {
      q: 'How does Vertex Loop handle legacy software modernization without downtime?',
      a: 'We utilize the Strangler Fig pattern to incrementally decompose monolithic applications into containerized microservices behind an API gateway, enabling seamless zero-downtime cutovers and continuous feature delivery.',
    },
    {
      q: 'Does Vertex Loop deliver custom software for international organizations?',
      a: 'Yes. Operating from our registered headquarters in Ambattur, Chennai, India, we build enterprise software for clients in India, North America, the UK, Europe, Australia, UAE, and Singapore with full time-zone alignment.',
    },
    {
      q: 'How does Vertex Loop ensure code ownership and intellectual property security?',
      a: 'All intellectual property, source code, and design assets are 100% owned by the client upon project delivery. We work directly inside your version control repositories under strict bilateral NDAs and IP assignment agreements.',
    },
  ],
  jsonLdData: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/services/custom-software-development#service`,
    name: 'Custom Software Development & Architecture',
    description: 'Custom software development company delivering scalable backend microservices, high-concurrency APIs, enterprise SaaS platforms, and modern web architectures.',
    provider: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.telephone,
      email: siteConfig.email,
    },
    serviceType: [
      'Custom Software Development',
      'Enterprise Microservices Engineering',
      'Web Application Architecture',
      'WordPress & Headless CMS Development',
      'Database Architecture & Optimization',
      'Legacy System Modernization',
    ],
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia', 'United Arab Emirates', 'Singapore', 'Worldwide'],
  },
}

export default function CustomSoftwarePage() {
  return <ServicePageLayout service={serviceData} />
}
