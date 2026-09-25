const rawUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  'https://vertexloop.in'

export const siteConfig = {
  name: 'Vertex Loop Pvt Ltd',
  shortName: 'Vertex Loop',
  legalName: 'Vertex Loop Pvt Ltd',
  brandName: 'Vertex Loop',
  academyName: 'CrackLeap',
  description:
    'Vertex Loop Pvt Ltd develops software products and technology solutions, provides digital marketing services, and delivers technology education through CrackLeap in India and internationally.',
  fullDescription:
    'Vertex Loop Pvt Ltd is a technology company focused on software products and technology solutions, digital marketing services, and technology education through CrackLeap. Its software scope includes web and mobile applications, SaaS, PaaS, cloud solutions and AI-enabled systems, while its marketing services cover search, content, social media, performance marketing, analytics and automation. CrackLeap is an education initiative focused on practical technology learning and training.',
  url: rawUrl,
  academyUrl: 'https://crackleap.vertexloop.in',
  ogImage: `${rawUrl}/og-image.png`,
  logo: `${rawUrl}/logo.png`,
  email: 'hello@vertexloop.in',
  telephone: '+91 94457 70160',
  phoneRaw: '9445770160',
  address: {
    streetAddress: 'G2, Venkatapuram, Ambattur',
    addressLocality: 'Ambattur, Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600053',
    addressCountry: 'IN',
    formatted: 'G2, Venkatapuram, Ambattur, Chennai - 600053, Tamil Nadu, India',
  },
  geo: {
    latitude: 13.1143,
    longitude: 80.1548,
  },
  links: {
    twitter: 'https://x.com/LoopVertex99532',
    github: 'https://github.com/vertexloop',
    linkedin: 'https://www.linkedin.com/company/vertex-loop',
  },
}

export type SiteConfig = typeof siteConfig