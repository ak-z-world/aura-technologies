import type { Metadata } from 'next'
import ProductPageLayout, { ProductPageData } from '@/components/products/ProductPageLayout'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Enterprise HRMS & Payroll Software',
  description:
    'Cloud enterprise HRMS software managing payroll, attendance, employee lifecycle, performance reviews, and HR compliance automation.',
  alternates: {
    canonical: `${siteConfig.url}/products/hrms`,
  },
  openGraph: {
    title: 'Enterprise HRMS & Payroll Software | Vertex Loop',
    description:
      'Cloud enterprise HRMS software managing payroll, attendance, employee lifecycle, and HR compliance automation.',
    url: `${siteConfig.url}/products/hrms`,
  },
}

const productData: ProductPageData = {
  slug: 'hrms',
  title: 'Enterprise HRMS Platform',
  subtitle: 'Workforce Management, Payroll & Employee Self-Service',
  badge: 'Enterprise Platform',
  heroLabel: 'HR & Workforce System',
  heroAccent: 'gold',
  heroDescription:
    'Complete HR Management System providing automated payroll calculations, biometric attendance tracking, leave workflows, employee onboarding, and compliance reporting.',
  aeoAnswer:
    'Vertex Loop HRMS is a cloud-based human resource management software featuring automated payroll processing, employee self-service portals, biometric attendance integration, performance reviews, and statutory tax compliance.',
  accentColor: '#a07830',
  capabilities: [
    {
      title: 'Automated Payroll Processing',
      desc: 'Calculate salary structures, tax deductions, bonuses, and generate compliant payslips automatically.',
    },
    {
      title: 'Biometric & Geofenced Attendance',
      desc: 'Integrate hardware biometric scanners and mobile GPS geofencing for real-time remote attendance logging.',
    },
    {
      title: 'Employee Self-Service Portal',
      desc: 'Empower employees to apply for leave, submit expense claims, download tax documents, and view performance metrics.',
    },
    {
      title: 'Performance & Onboarding Workflows',
      desc: 'Streamline digital onboarding, document verification, KPI tracking, and annual review cycles.',
    },
  ],
  benefits: [
    { title: '100% Payroll Accuracy', desc: 'Eliminate manual calculation errors and tax compliance penalties.' },
    { title: 'Self-Service Efficiency', desc: 'Reduce HR administrative inquiry volume by 75%.' },
    { title: 'Scalable for 10,000+ Staff', desc: 'High-concurrency cloud platform built for enterprise workforces.' },
  ],
  technologies: ['React', 'Next.js', 'Go Backend', 'PostgreSQL', 'Redis', 'Docker'],
  useCases: ['Growing IT & Technology Enterprises', 'Healthcare & Hospital Systems', 'Retail & Franchise Operations', 'Corporate Business Groups'],
  faq: [
    {
      q: 'Does Vertex Loop HRMS support statutory tax compliance?',
      a: 'Yes, our HRMS calculates local statutory deductions including Provident Fund, Professional Tax, and Income Tax withholdings automatically.',
    },
    {
      q: 'Can employees access HRMS features on mobile devices?',
      a: 'Yes, the platform features a mobile-responsive web portal for attendance check-ins, leave requests, and payslip downloads.',
    },
  ],
  jsonLdData: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Enterprise HRMS Platform',
    description: 'Complete HR Management System providing automated payroll calculations, biometric attendance tracking, leave workflows, and compliance reporting.',
    url: `${siteConfig.url}/products/hrms`,
    operatingSystem: 'Web/Mobile',
    applicationCategory: 'BusinessApplication',
    publisher: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
  },
}

export default function HRMSProductPage() {
  return <ProductPageLayout product={productData} />
}
