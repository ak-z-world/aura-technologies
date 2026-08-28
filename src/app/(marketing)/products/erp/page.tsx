import type { Metadata } from 'next'
import ProductPageLayout, { ProductPageData } from '@/components/products/ProductPageLayout'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Cloud ERP Software Solutions',
  description:
    'Vertex Loop ERP is a cloud-native enterprise resource planning software unifying supply chain, inventory management, multi-entity finance, procurement, and manufacturing.',
  alternates: {
    canonical: `${siteConfig.url}/products/erp`,
  },
  openGraph: {
    title: 'Cloud ERP Software Solutions | Vertex Loop',
    description:
      'Vertex Loop ERP is a cloud-native enterprise resource planning software unifying supply chain, inventory management, and multi-entity finance.',
    url: `${siteConfig.url}/products/erp`,
  },
}

const productData: ProductPageData = {
  slug: 'erp',
  title: 'Vertex Loop Cloud ERP',
  subtitle: 'Unified Enterprise Operations & Inventory Management',
  badge: 'Enterprise Platform',
  heroLabel: 'Enterprise ERP System',
  heroAccent: 'blue',
  heroDescription:
    'Modular, high-concurrency cloud ERP system designed to unify multi-location inventory, vendor procurement, financial ledgers, and operational analytics.',
  aeoAnswer:
    'Vertex Loop ERP is an enterprise cloud resource planning software offering real-time inventory tracking, procurement automation, multi-entity financial accounting, role-based access control, and automated compliance reporting.',
  accentColor: '#4a7fa5',
  capabilities: [
    {
      title: 'Real-Time Inventory Control',
      desc: 'Track warehouse inventory across multiple locations with automated reorder triggers and batch tracking.',
    },
    {
      title: 'Multi-Entity Financial Ledger',
      desc: 'Consolidate multi-currency financial accounting, automated tax filings, and audit trail management.',
    },
    {
      title: 'Procurement & Vendor Management',
      desc: 'Automate purchase orders, vendor evaluation workflows, and invoice matching to eliminate manual data entry.',
    },
    {
      title: 'Custom Business Analytics',
      desc: 'Real-time executive dashboards for revenue forecasting, margin analysis, and operational efficiency metrics.',
    },
  ],
  benefits: [
    { title: '99.99% Uptime Architecture', desc: 'Cloud-native multi-region infrastructure built on AWS.' },
    { title: 'Zero Operational Silos', desc: 'Unify sales, procurement, and accounting in one database.' },
    { title: 'Bank-Grade Security', desc: 'SOC 2 compliant RBAC, encryption at rest, and audit logs.' },
  ],
  technologies: ['Next.js', 'Go Microservices', 'PostgreSQL', 'Redis', 'Docker', 'AWS EKS'],
  useCases: ['Manufacturing & Assembly Enterprises', 'Multi-Location Retail Chains', 'Wholesale Distributors', 'Global Logistics Providers'],
  faq: [
    {
      q: 'Is Vertex Loop ERP suitable for multi-currency operations?',
      a: 'Yes, Vertex Loop ERP handles multi-currency transactions, automatic exchange rate updates, and multi-entity tax consolidations.',
    },
    {
      q: 'Can Vertex Loop ERP integrate with custom third-party software?',
      a: 'Yes, our platform exposes comprehensive REST and GraphQL APIs for seamless integration with CRM, payment gateways, and custom applications.',
    },
  ],
  jsonLdData: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Vertex Loop Cloud ERP',
    description: 'Modular cloud ERP system designed to unify multi-location inventory, vendor procurement, financial ledgers, and operational analytics.',
    url: `${siteConfig.url}/products/erp`,
    operatingSystem: 'Web/Cloud',
    applicationCategory: 'BusinessApplication',
    publisher: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
  },
}

export default function ERPProductPage() {
  return <ProductPageLayout product={productData} />
}
