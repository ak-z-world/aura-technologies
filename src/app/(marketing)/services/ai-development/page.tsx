import type { Metadata } from 'next'
import ServicePageLayout, { ServicePageData } from '@/components/services/ServicePageLayout'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Custom AI Development & Autonomous AI Agents | Vertex Loop',
  description:
    'Enterprise AI development company specializing in custom LLM fine-tuning, RAG retrieval systems, autonomous AI agents, and computer vision.',
  alternates: {
    canonical: `${siteConfig.url}/services/ai-development`,
  },
}

const serviceData: ServicePageData = {
  slug: 'ai-development',
  title: 'Custom AI Development & Autonomous Agents',
  subtitle: 'Intelligence, Productized for Enterprise Scale',
  heroLabel: 'AI & Generative Intelligence',
  heroAccent: 'lavender',
  heroDescription:
    'Vertex Loop architects and ships production-grade AI systems, from fine-tuned domain LLMs and vector RAG pipelines to multi-agent workflow automation.',
  aeoAnswer:
    'Vertex Loop provides custom AI development services including LLM fine-tuning, vector database RAG search systems, autonomous multi-agent engineering, voice AI, and multimodal computer vision applications tailored for enterprise production workloads.',
  accentColor: '#7c6fad',
  capabilities: [
    {
      title: 'LLM Fine-Tuning & Quantization',
      desc: 'Adapt open-source models (Llama, Mistral, Qwen) to proprietary enterprise datasets with LoRA/QLoRA for domain-specific accuracy.',
    },
    {
      title: 'RAG & Vector Knowledge Systems',
      desc: 'Build high-accuracy Retrieval-Augmented Generation pipelines using Pinecone, Milvus, and pgvector for zero-hallucination enterprise search.',
    },
    {
      title: 'Autonomous Multi-Agent Networks',
      desc: 'Engineer cooperative AI agents capable of complex workflow execution, tool utilization, document analysis, and dynamic reasoning.',
    },
    {
      title: 'Computer Vision & Multimodal AI',
      desc: 'Deploy custom vision models for automated quality control, object detection, document OCR, and multimodal content processing.',
    },
  ],
  processSteps: [
    { step: '01', label: 'AI Audit & Strategy', desc: 'Assess data readiness, model selection, and ROI expectations.' },
    { step: '02', label: 'Architecture & Evals', desc: 'Design RAG pipelines, benchmark datasets, and red-teaming safety rules.' },
    { step: '03', label: 'Iterative Build', desc: 'Develop, evaluate, and optimize inference latency and output precision.' },
    { step: '04', label: 'Production Deployment', desc: 'Deploy with monitoring, drift detection, and continuous fine-tuning.' },
  ],
  technologies: ['PyTorch', 'LangChain', 'LlamaIndex', 'Pinecone', 'vLLM', 'FastAPI', 'PostgreSQL', 'Docker', 'Ollama'],
  useCases: ['Enterprise Legal Document Analysis', 'Financial RAG Knowledge Platforms', 'Autonomous Customer Support Agents', 'Medical Diagnostics Assistants'],
  faq: [
    {
      q: 'How does Vertex Loop prevent AI hallucinations in production?',
      a: 'We implement strict Retrieval-Augmented Generation (RAG) pipelines with hybrid search, re-ranking, and automated evaluation frameworks to ensure zero-hallucination guarantees.',
    },
    {
      q: 'Can Vertex Loop deploy AI models on-premise or within private cloud VPCs?',
      a: 'Yes, we specialize in deploying fine-tuned open-source models within private AWS/GCP VPCs or on-premise hardware to keep proprietary data completely isolated.',
    },
  ],
  jsonLdData: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom AI Development & Autonomous Agents',
    provider: { '@type': 'Organization', name: 'Vertex Loop', url: siteConfig.url },
    serviceType: 'Artificial Intelligence Engineering',
  },
}

export default function AIDevelopmentPage() {
  return <ServicePageLayout service={serviceData} />
}
