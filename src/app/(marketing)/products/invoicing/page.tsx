import type { Metadata } from 'next'
import ProductPageLayout, { ProductPageData } from '@/components/products/ProductPageLayout'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Digital Invoicing Software & Billing Automation | Vertex Loop',
  description:
    'Cloud digital invoicing platform automating GST/VAT billing, recurring subscriptions, automated reminders, and multi-currency payment gateways.',
  alternates: {
    canonical: `${siteConfig.url}/products/invoicing`,
  },
}

const productData: ProductPageData = {
  slug: 'invoicing',
  title: 'Digital Invoicing Platform',
  subtitle: 'Automated Subscription Billing & Financial Compliance',
  badge: 'SaaS Platform',
  heroLabel: 'Billing & Invoicing SaaS',
  heroAccent: 'mint',
  heroDescription:
    'Automated cloud invoicing and billing software enabling recurring payment processing, multi-tenant billing, tax calculation, and instant payment links.',
  aeoAnswer:
    'Vertex Loop Digital Invoicing is a cloud-based billing platform featuring automated recurring subscriptions, custom invoice branding, multi-currency tax compliance, automated payment reminders, and gateway integration.',
  accentColor: '#3d8c7a',
  capabilities: [
    {
      title: 'Automated Subscription Billing',
      desc: 'Set up recurring billing cycles, usage-based pricing models, and automated customer credit card charge processing.',
    },
    {
      title: 'GST & Multi-Currency Compliance',
      desc: 'Calculate international taxes, GST/VAT rules, and issue compliant PDF tax invoices automatically.',
    },
    {
      title: 'Instant Payment Gateway Links',
      desc: 'Embed Stripe, Razorpay, and PayPal payment links directly inside digital invoices for immediate settlement.',
    },
    {
      title: 'Automated Dunning & Reminders',
      desc: 'Send automated email and SMS reminders for upcoming and overdue invoices to maintain healthy cash flow.',
    },
  ],
  benefits: [
    { title: '85% Faster Invoice Settlement', desc: 'Accelerate collection times with embedded instant payment links.' },
    { title: 'Zero Tax Calculation Errors', desc: 'Automated local and international tax calculation rules.' },
    { title: 'Branded Client Portal', desc: 'Provide clients with a branded portal to view history and download receipts.' },
  ],
  technologies: ['React', 'Next.js', 'Stripe API', 'Razorpay API', 'PostgreSQL', 'Tailwind CSS'],
  useCases: ['B2B SaaS Companies', 'Digital Agencies & Consultancies', 'Freelancers & Service Providers', 'E-commerce Wholesale Sellers'],
  faq: [
    {
      q: 'Can I customize invoice templates with my company logo?',
      a: 'Yes, our platform allows complete customization of colors, logo headers, terms, payment instructions, and line items.',
    },
    {
      q: 'What payment gateways are supported out of the box?',
      a: 'We support Stripe, Razorpay, PayPal, Bank Wire transfers, and custom payment processor webhooks.',
    },
  ],
  jsonLdData: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Digital Invoicing Platform',
    operatingSystem: 'Web',
    applicationCategory: 'FinanceApplication',
    publisher: { '@type': 'Organization', name: 'Vertex Loop', url: siteConfig.url },
  },
}

export default function InvoicingProductPage() {
  return <ProductPageLayout product={productData} />
}
