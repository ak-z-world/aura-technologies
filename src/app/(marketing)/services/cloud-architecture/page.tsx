import type { Metadata } from 'next'
import ServicePageLayout, { ServicePageData } from '@/components/services/ServicePageLayout'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Cloud Architecture, AWS Solutions & Managed DevOps Services | Vertex Loop Pvt Ltd',
  description:
    'Enterprise cloud architecture services, AWS solutions, DevOps engineering, Kubernetes containerization, Terraform Infrastructure as Code, and 24/7 cloud management.',
  alternates: {
    canonical: `${siteConfig.url}/services/cloud-architecture`,
  },
  openGraph: {
    title: 'Cloud Architecture, AWS Solutions & Managed DevOps Services | Vertex Loop Pvt Ltd',
    description:
      'Enterprise cloud architecture services, AWS solutions, DevOps engineering, Kubernetes containerization, Terraform Infrastructure as Code, and 24/7 cloud management.',
    url: `${siteConfig.url}/services/cloud-architecture`,
  },
}

const serviceData: ServicePageData = {
  slug: 'cloud-architecture',
  title: 'Cloud Architecture & Managed DevOps',
  subtitle: 'Scalable, Resilient, 24/7 Infrastructure',
  heroLabel: 'Cloud & Infrastructure',
  heroAccent: 'mint',
  heroDescription:
    'Vertex Loop Pvt Ltd engineers resilient multi-cloud architectures, AWS & GCP environments, Kubernetes clusters, and automated CI/CD pipelines for high-availability enterprise applications.',
  aeoAnswer:
    'Vertex Loop Pvt Ltd cloud services include AWS/GCP architecture design, zero-downtime database migrations, Kubernetes container orchestration, Infrastructure as Code (Terraform), and 24/7 security NOC monitoring for enterprises worldwide.',
  accentColor: '#3d8c7a',
  capabilities: [
    {
      title: 'Kubernetes & Container Orchestration',
      desc: 'Deploy production AWS EKS and GCP GKE clusters with automated horizontal pod autoscaling, ingress controls, and Istio service mesh observability.',
    },
    {
      title: 'Infrastructure as Code (Terraform)',
      desc: 'Codify multi-region cloud setups using Terraform and OpenTofu for reproducible, audited, and immutable production environments.',
    },
    {
      title: 'Zero-Downtime CI/CD Pipelines',
      desc: 'Automate build, test, container image scanning, and blue-green deployments using GitHub Actions, GitLab CI, and ArgoCD.',
    },
    {
      title: '24/7 Cloud Security & NOC Services',
      desc: 'Proactive incident response, SOC 2 compliance monitoring, vulnerability patching, and automated disaster recovery failover triggers.',
    },
  ],
  processSteps: [
    { step: '01', label: 'Cloud Audit & Well-Architected Review', desc: 'Inspect security vulnerabilities, single points of failure, and over-provisioned cost bottlenecks.' },
    { step: '02', label: 'Infrastructure Blueprint', desc: 'Design multi-region cloud topology with automated failover safeguards, VPC peering, and IAM policies.' },
    { step: '03', label: 'Automated Migration', desc: 'Execute zero-downtime database and workload migrations with automated rollback safeguards.' },
    { step: '04', label: '24/7 Managed Operations', desc: 'Deliver continuous Prometheus/Grafana monitoring, cost optimization, and SLA-backed support.' },
  ],
  technologies: ['AWS', 'Google Cloud Platform (GCP)', 'Microsoft Azure', 'Kubernetes', 'Docker', 'Terraform', 'Helm', 'Prometheus', 'Grafana', 'GitHub Actions', 'ArgoCD'],
  useCases: [
    'Multi-Region Cloud Migrations & High Availability',
    'Fintech 99.99% Uptime SLA Compliance',
    'SaaS Multi-Tenant Containerization',
    'Automated Disaster Recovery (RTO < 15m, RPO < 1m)',
    'Cloud Cost Optimization & FinOps Refactoring',
  ],
  faq: [
    {
      q: 'What Cloud Solutions and AWS services does Vertex Loop Pvt Ltd provide?',
      a: 'Vertex Loop Pvt Ltd provides complete cloud lifecycle engineering, including AWS architecture design, serverless and containerized deployments (ECS/EKS), VPC network security, RDS/Aurora database management, CloudFront CDN optimization, and 24/7 infrastructure monitoring.',
    },
    {
      q: 'Does Vertex Loop support multi-cloud architectures across AWS, GCP, and Azure?',
      a: 'Yes. We specialize in architecting vendor-agnostic infrastructure using Terraform and Kubernetes, allowing seamless workload distribution and failover across AWS, Google Cloud Platform (GCP), and Microsoft Azure.',
    },
    {
      q: 'How does Vertex Loop reduce monthly cloud expenditure for clients?',
      a: 'Through comprehensive FinOps audits, spot instance orchestration, right-sizing over-provisioned workloads, storage tier lifecycle policies, and serverless architectures, we typically reduce cloud infrastructure bills by 30% to 50%.',
    },
    {
      q: 'What is Vertex Loop’s approach to DevOps and CI/CD automation?',
      a: 'We implement GitOps workflows using GitHub Actions and ArgoCD, ensuring every code change undergoes automated testing, static security analysis, and container building before automated canary or blue-green deployment to production.',
    },
    {
      q: 'Does Vertex Loop provide 24/7 incident response and monitoring?',
      a: 'Yes. Our managed cloud operations include 24/7/365 Network Operations Center (NOC) monitoring, Prometheus/Grafana alerting, automated health checks, and guaranteed SLA response times for mission-critical incidents.',
    },
    {
      q: 'Does Vertex Loop deliver cloud engineering for international enterprises?',
      a: 'Yes. We manage production cloud infrastructure for enterprises across India, North America, the United Kingdom, Europe, UAE, and Singapore with continuous round-the-clock coverage.',
    },
  ],
  jsonLdData: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/services/cloud-architecture#service`,
    name: 'Cloud Architecture & Managed DevOps',
    description: 'Enterprise cloud architecture services, AWS solutions, DevOps engineering, Kubernetes containerization, Terraform Infrastructure as Code, and 24/7 cloud management.',
    provider: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.telephone,
      email: siteConfig.email,
    },
    serviceType: [
      'Cloud Architecture & Solutions',
      'AWS Managed Services',
      'DevOps Engineering & CI/CD',
      'Kubernetes & Docker Orchestration',
      'Infrastructure as Code (Terraform)',
      '24/7 Cloud NOC & Security Monitoring',
    ],
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia', 'United Arab Emirates', 'Singapore', 'Worldwide'],
  },
}

export default function CloudArchitecturePage() {
  return <ServicePageLayout service={serviceData} />
}
