import type { Division, ValueProposition, NavLink } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Crack Leap', href: 'https://crackleap.vertexloop.in' },
  { label: 'Who We Are', href: '/about' },
  { label: 'Ecosystem', href: '/ecosystem' },
  { label: 'Why Us', href: '/why-us' },
  { label: 'Contact', href: '/contact' },
]

export const SERVICES_NAV = [
  { label: 'AI Development & Agents', href: '/services/ai-development', description: 'LLM fine-tuning, RAG architecture, and custom AI solutions' },
  { label: 'Custom Software Development', href: '/services/custom-software-development', description: 'Enterprise platforms, APIs, microservices, and bespoke software' },
  { label: 'Cloud Architecture & DevOps', href: '/services/cloud-architecture', description: 'Managed cloud infrastructure, CI/CD, and scaling' },
  { label: 'Digital Marketing & Tech SEO', href: '/services/digital-marketing', description: 'Data-driven growth, AEO/GEO, and performance marketing' },
  { label: 'Crack Leap Tech Academy', href: 'https://crackleap.vertexloop.in', description: 'Vertex Loop’s technology education platform for developer upskilling', external: true },
]

export const PRODUCTS_NAV = [
  { label: 'SCRIPTen', href: 'https://scripten.arivuon.in/', tag: 'Creator Tech', description: 'AI video creation & script workflow platform for creators', external: true },
  { label: 'Vertex Loop ERP', href: '/products/erp', tag: 'Enterprise', description: 'Modular cloud ERP system for inventory, finance, and operations' },
  { label: 'Invoicing Platform', href: '/products/invoicing', tag: 'SaaS', description: 'Automated billing, recurring invoicing, and financial management' },
  { label: 'HRMS Platform', href: '/products/hrms', tag: 'Enterprise', description: 'Cloud workforce management, attendance, and HR automation' },
]

export const DIVISIONS: Division[] = [
  {
    id: 'ai-products',
    title: 'AI Products & Solutions',
    tagline: 'Intelligence, Productized',
    description:
      'We conceptualize, architect, and launch AI-native software products that operate at the frontier of what machines can do. From LLM-powered SaaS platforms to autonomous agent systems, we ship intelligence.',
    capabilities: [
      'LLM Integration & Fine-Tuning',
      'AI SaaS Platform Development',
      'Autonomous Agent Architecture',
      'RAG & Vector Search Systems',
      'Multimodal AI Applications',
    ],
    icon: 'Cpu',
    gradient: { from: '#e8e4f3', to: '#d8d2ec', glow: 'rgba(184,174,216,0.4)' },
    accentColor: '#7c6fad',
    stats: { label: 'AI Products Launched', value: '18+' },
  },
  {
    id: 'software',
    title: 'Software Engineering',
    tagline: 'Code That Scales With Ambition',
    description:
      'Bespoke software engineering at architectural depth. We design and deliver complex platforms, APIs, data pipelines, and distributed systems using battle-tested engineering principles and cutting-edge patterns.',
    capabilities: [
      'Distributed Systems Architecture',
      'API Design & Microservices',
      'Real-Time Data Pipelines',
      'Platform & SDK Engineering',
      'Performance Optimization',
    ],
    icon: 'Code2',
    gradient: { from: '#faf0e6', to: '#f0e6c8', glow: 'rgba(212,168,83,0.3)' },
    accentColor: '#a07830',
    stats: { label: 'Systems Deployed', value: '85+' },
  },
  {
    id: 'it-services',
    title: 'Cloud Architecture & IT',
    tagline: 'Infrastructure That Never Sleeps',
    description:
      'Enterprise-grade managed IT services, cloud infrastructure design, cybersecurity frameworks, and 24/7 operational support. We are the technological backbone for organizations that refuse to compromise on reliability.',
    capabilities: [
      'Managed Cloud Infrastructure',
      'Cybersecurity & Compliance',
      'Enterprise System Integration',
      'IT Strategy & Consulting',
      '24/7 NOC & Support Services',
    ],
    icon: 'Server',
    gradient: { from: '#d8ede8', to: '#c2e2db', glow: 'rgba(157,207,196,0.4)' },
    accentColor: '#3d8c7a',
    stats: { label: 'Uptime Guaranteed', value: '99.97%' },
  },
  {
    id: 'academy',
    title: 'Crack Leap',
    tagline: 'Technology Education Ecosystem',
    description:
      'Crack Leap is Vertex Loop’s dedicated technology education ecosystem, forging software engineers, AI developers, and cloud architects through intensive, industry-aligned training and upskilling programs.',
    capabilities: [
      'AI & Machine Learning Programs',
      'Full-Stack Web Development',
      'Cloud & DevOps Engineering',
      'Data Science & Analytics',
      'Corporate Engineering Upskilling',
    ],
    icon: 'GraduationCap',
    gradient: { from: '#dde9f4', to: '#c8ddef', glow: 'rgba(180,208,234,0.4)' },
    accentColor: '#4a7fa5',
    stats: { label: 'Engineers Upskilled', value: '2,400+' },
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & SEO',
    tagline: 'Narratives That Convert',
    description:
      'Data-driven, AI-augmented digital marketing strategy that transforms brand narratives into measurable growth. We orchestrate campaigns across channels with precision, creativity, and obsessive performance focus.',
    capabilities: [
      'AI-Powered Campaign Strategy',
      'SEO & Content Architecture',
      'Performance Marketing & PPC',
      'Brand Identity & Positioning',
      'Marketing Analytics & Attribution',
    ],
    icon: 'TrendingUp',
    gradient: { from: '#fce8e8', to: '#f5d5d5', glow: 'rgba(220,160,160,0.35)' },
    accentColor: '#b04a4a',
    stats: { label: 'Average ROAS', value: '4.8×' },
  },
]

export const VALUE_PROPOSITIONS: ValueProposition[] = [
  {
    id: 'innovation',
    title: 'Frontier-First Innovation',
    description:
      'We build with technologies that are 18 months ahead of the market — not technologies the market has already commoditized. Every engagement pushes the frontier.',
    icon: 'Zap',
    metric: '3×',
    metricLabel: 'Faster to Market',
  },
  {
    id: 'engineering',
    title: 'Architectural Depth',
    description:
      'Our engineers do not write code — they design systems. Every solution we deliver is crafted with production-grade architecture, zero shortcuts, and long-term scalability as a non-negotiable.',
    icon: 'Layers',
    metric: '99.97%',
    metricLabel: 'System Reliability',
  },
  {
    id: 'ai-native',
    title: 'AI-Native by Design',
    description:
      'Across all five divisions, AI is not a feature we bolt on. It is the foundational layer. Our processes, products, and teams are designed from day one to operate in an AI-augmented world.',
    icon: 'Brain',
    metric: '100%',
    metricLabel: 'AI-Integrated Process',
  },
  {
    id: 'synergy',
    title: 'Cross-Division Synergy',
    description:
      'The Vertex Loop ecosystem creates compounding advantages. A client who trains with our Academy, builds with our Software team, and grows with our Marketing division experiences exponential returns.',
    icon: 'Network',
    metric: '5',
    metricLabel: 'Divisions, One Vision',
  },
  {
    id: 'talent',
    title: 'Elite Talent Network',
    description:
      'Every Vertex Loop professional is vetted through a rigorous multi-stage process. We do not staff projects — we assemble the precise team your challenge demands, optimized for outcome not billable hours.',
    icon: 'Users',
    metric: 'Top 3%',
    metricLabel: 'Global Talent Pool',
  },
  {
    id: 'results',
    title: 'Outcome Accountability',
    description:
      'We operate on a radical transparency model. Deliverables, milestones, and business impact are defined before the first line of code is written. We own outcomes, not just outputs.',
    icon: 'Target',
    metric: '94%',
    metricLabel: 'Client Retention Rate',
  },
]