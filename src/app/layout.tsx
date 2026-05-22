import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Vertex Loop — Next-Generation Technology Ecosystem',

  description:
    'Vertex Loop is a next-generation technology company spanning AI product development, software engineering, IT services, tech education, and digital marketing.',

  keywords: [
    'AI Products',
    'Software Engineering',
    'Tech Academy',
    'IT Services',
    'Digital Marketing',
    'Artificial Intelligence',
    'Technology Company',
  ],

  authors: [{ name: 'Vertex Loop' }],
  creator: 'Vertex Loop',

  metadataBase: new URL('https://vertex-loop.vercel.app'),

  openGraph: {
    title: 'Vertex Loop — Next-Generation Technology Ecosystem',

    description:
      'Vertex Loop offers AI products, software engineering, digital marketing, IT services, and tech training to help businesses innovate, scale, and grow globally',

    url: 'https://vertex-loop.vercel.app',

    siteName: 'Vertex Loop',

    locale: 'en_US',

    type: 'website',

    images: [
      {
        url: 'https://vertex-loop.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vertex Loop Technology Ecosystem',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Vertex Loop — Next-Generation Technology Ecosystem',

    description:
    'Vertex Loop delivers AI products, software engineering, digital marketing, IT services, and technology education to help businesses innovate, scale, and grow globally.',

    creator: '@LoopVertex99532',

    images: ['https://vertex-loop.vercel.app/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#f6f4f0',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}