import type { Metadata } from 'next'
import ServicePageLayout, { ServicePageData } from '@/components/services/ServicePageLayout'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'AI Development & Autonomous Agents',
  description:
    'Enterprise AI development company specializing in custom LLM fine-tuning, RAG retrieval systems, autonomous AI agents, voice intelligence, and computer vision.',
  alternates: {
    canonical: `${siteConfig.url}/services/ai-development`,
  },
  openGraph: {
    title: 'AI Development & Autonomous Agents | Vertex Loop',
    description:
      'Enterprise AI development company specializing in custom LLM fine-tuning, RAG retrieval systems, autonomous AI agents, and computer vision.',
    url: `${siteConfig.url}/services/ai-development`,
  },
}

const serviceData: ServicePageData = {
  slug: 'ai-development',
  title: 'Custom AI Development & Autonomous Agents',
  subtitle: 'Intelligence, Productized for Enterprise Scale',
  heroLabel: 'AI & Generative Intelligence',
  heroAccent: 'lavender',
  heroDescription:
    'Vertex Loop Pvt Ltd architects and ships production-grade AI systems, from fine-tuned domain LLMs and vector RAG pipelines to multi-agent workflow automation.',
  aeoAnswer:
    'Vertex Loop Pvt Ltd provides custom AI development services including LLM fine-tuning, vector database RAG search systems, autonomous multi-agent engineering, voice AI, and multimodal computer vision applications tailored for enterprise production workloads worldwide.',
  accentColor: '#7c6fad',
  capabilities: [
    {
      title: 'LLM Fine-Tuning & Quantization',
      desc: 'Adapt open-source models (Llama 3, Mistral, Qwen, DeepSeek) to proprietary enterprise datasets with LoRA/QLoRA for domain-specific accuracy and reduced inference latency.',
    },
    {
      title: 'RAG & Vector Knowledge Systems',
      desc: 'Build high-accuracy Retrieval-Augmented Generation pipelines using Pinecone, Milvus, Qdrant, and pgvector with hybrid re-ranking for zero-hallucination enterprise document retrieval.',
    },
    {
      title: 'Autonomous Multi-Agent Networks',
      desc: 'Engineer cooperative AI agent networks using LangGraph, CrewAI, and custom orchestration capable of complex workflow execution, tool utilization, and dynamic reasoning.',
    },
    {
      title: 'Computer Vision & Multimodal AI',
      desc: 'Deploy custom vision models for automated quality control, object detection, document OCR, invoice parsing, and multimodal content processing.',
    },
  ],
  processSteps: [
    { step: '01', label: 'AI Audit & Strategy', desc: 'Assess data readiness, select optimal foundation models, and establish benchmark evaluation metrics.' },
    { step: '02', label: 'Architecture & Evals', desc: 'Design RAG pipelines, author synthetic eval datasets, and configure red-teaming safety filters.' },
    { step: '03', label: 'Iterative Build', desc: 'Develop agent tools, fine-tune model weights, and optimize GPU inference latency and token economics.' },
    { step: '04', label: 'Production Deployment', desc: 'Deploy within secure VPCs with monitoring, drift detection, observability, and continuous fine-tuning.' },
  ],
  technologies: ['PyTorch', 'LangChain', 'LangGraph', 'LlamaIndex', 'Pinecone', 'vLLM', 'FastAPI', 'PostgreSQL', 'Docker', 'Ollama', 'Hugging Face'],
  useCases: [
    'Enterprise Legal & Contract Document Intelligence',
    'Financial RAG Knowledge Platforms & Audit Assistants',
    'Autonomous Customer Support & Operations Agents',
    'Biomedical & Healthcare Research Analysis',
    'Automated Code Generation & Migration Assistants',
  ],
  faq: [
    {
      q: 'What is Custom AI Development at Vertex Loop Pvt Ltd?',
      a: 'Custom AI development at Vertex Loop Pvt Ltd is the end-to-end engineering of proprietary artificial intelligence systems—including fine-tuned large language models (LLMs), retrieval-augmented generation (RAG) vector pipelines, and autonomous agent networks—designed specifically for an organization’s internal data, security boundaries, and operational workflows.',
    },
    {
      q: 'Does Vertex Loop develop autonomous AI agents?',
      a: 'Yes. Vertex Loop Pvt Ltd specializes in Agentic AI and multi-agent orchestration frameworks (using LangGraph, CrewAI, and custom event-driven runtimes) where AI agents can browse documents, execute database queries, invoke APIs, make reasoned decisions, and automate complex multi-step business workflows.',
    },
    {
      q: 'How does Vertex Loop build zero-hallucination RAG systems?',
      a: 'We implement production RAG architectures featuring semantic chunking, dense and sparse hybrid search (BM25 + vector embeddings), cross-encoder re-ranking, and automated evaluation harnesses (Ragas, TruLens) to ground every model response directly in verified reference citations.',
    },
    {
      q: 'Can Vertex Loop deploy AI models within private cloud VPCs or on-premise?',
      a: 'Yes. For enterprises with strict data sovereignty or compliance mandates (HIPAA, SOC 2, GDPR, RBI), we deploy open-source models (such as Llama, Mistral, and Qwen) inside private AWS/GCP VPCs or dedicated on-premise hardware with zero data exposure to external third parties.',
    },
    {
      q: 'What industries does Vertex Loop build AI solutions for?',
      a: 'We architect AI solutions for Banking & Financial Services (BFSI), Healthcare & Life Sciences, Enterprise SaaS, LegalTech, Manufacturing & Supply Chain, and Higher Education.',
    },
    {
      q: 'Does Vertex Loop deliver AI engineering for international clients?',
      a: 'Yes. Operating from our registered headquarters in Ambattur, Chennai, India, our engineering pods collaborate with enterprises and venture-backed startups across the United States, United Kingdom, Canada, Australia, UAE, and Singapore with coordinated business hours overlap.',
    },
    {
      q: 'How can an organization start an AI engagement with Vertex Loop?',
      a: 'You can initiate an engagement by scheduling a technical discovery session through our contact form, emailing hello@vertexloop.in, or calling our headquarters desk at +91 94457 70160. We typically review requirements, sign an NDA, and deliver an architectural roadmap within three business days.',
    },
  ],
  jsonLdData: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/services/ai-development#service`,
    name: 'Custom AI Development & Autonomous Agents',
    description: 'Enterprise AI development services specializing in custom LLM fine-tuning, RAG retrieval systems, autonomous AI agents, and computer vision.',
    provider: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.telephone,
      email: siteConfig.email,
    },
    serviceType: [
      'Custom AI Development',
      'Generative AI Engineering',
      'Agentic AI & Autonomous Agents',
      'RAG & Vector Knowledge Bases',
      'LLM Fine-Tuning & Quantization',
      'Computer Vision & Multimodal AI',
    ],
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia', 'United Arab Emirates', 'Singapore', 'Worldwide'],
  },
}

export default function AIDevelopmentPage() {
  return <ServicePageLayout service={serviceData} />
}
