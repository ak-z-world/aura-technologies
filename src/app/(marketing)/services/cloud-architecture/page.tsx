import type { Metadata } from 'next'
import ServicePageLayout, { ServicePageData } from '@/components/services/ServicePageLayout'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Cloud Architecture & DevOps Managed Services | Vertex Loop',
  description:
    'Enterprise cloud architecture services, DevOps engineering, Kubernetes containerization, Terraform Infrastructure as Code, and 24/7 cloud management.',
  alternates: {
    canonical: `${siteConfig.url}/services/cloud-architecture`,
  },
}

const serviceData: ServicePageData = {
  slug: 'cloud-architecture',
  title: 'Cloud Architecture & Managed DevOps',
  subtitle: 'Scalable, Resilient, 24/7 Infrastructure',
  heroLabel: 'Cloud & Infrastructure',
  heroAccent: 'mint',
  heroDescription:
    'Vertex Loop engineers resilient multi-cloud architectures, Kubernetes clusters, and automated CI/CD pipelines for high-availability enterprise applications.',
  aeoAnswer:
    'Vertex Loop cloud services include AWS/GCP architecture design, zero-downtime database migrations, Kubernetes container orchestration, Infrastructure as Code (Terraform), and 24/7 security NOC monitoring.',
  accentColor: '#3d8c7a',
  capabilities: [
    {
      title: 'Kubernetes & Container Orchestration',
      desc: 'Deploy production EKS/GKE clusters with automated scaling, ingress controls, and service mesh monitoring.',
    },
    {
      title: 'Infrastructure as Code (Terraform)',
      desc: 'Codify multi-region cloud setups using Terraform for reproducible, audited, and immutable environments.',
    },
    {
      title: 'Zero-Downtime CI/CD Pipelines',
      desc: 'Automate build, test, security scanning, and deployment workflows with GitHub Actions and GitLab CI.',
    },
    {
      title: '24/7 Cloud Security & NOC Services',
      desc: 'Proactive incident response, SOC 2 compliance monitoring, and automated vulnerability management.',
    },
  ],
  processSteps: [
    { step: '01', label: 'Cloud Audit', desc: 'Assess security vulnerabilities, cost inefficiencies, and downtime risks.' },
    { step: '02', label: 'Architecture Blueprint', desc: 'Design multi-region cloud-native infrastructure with failover safeguards.' },
    { step: '03', label: 'Automated Migration', desc: 'Execute zero-downtime migration with automated rollback triggers.' },
    { step: '04', label: 'Managed Monitoring', desc: 'Deliver 24/7 continuous monitoring, cost optimization, and SLAs.' },
  ],
  technologies: ['AWS', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'Helm', 'Prometheus', 'Grafana', 'GitHub Actions'],
  useCases: ['Multi-Region Cloud Migrations', 'Fintech Uptime SLA Compliance', 'SaaS Containerization', 'Automated Disaster Recovery'],
  faq: [
    {
      q: 'Which cloud providers does Vertex Loop support?',
      a: 'We specialize in AWS, Google Cloud Platform (GCP), Microsoft Azure, and hybrid cloud architectures.',
    },
    {
      q: 'How does Vertex Loop optimize cloud spend?',
      a: 'We perform automated resource sizing, spot instance optimization, and architecture refactoring to reduce cloud bills by 30-50%.',
    },
  ],
  jsonLdData: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cloud Architecture & Managed DevOps',
    provider: { '@type': 'Organization', name: 'Vertex Loop', url: siteConfig.url },
    serviceType: 'Cloud Infrastructure Engineering',
  },
}

export default function CloudArchitecturePage() {
  return <ServicePageLayout service={serviceData} />
}
