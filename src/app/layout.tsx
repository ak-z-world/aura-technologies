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
      'Five divisions. One vision. Engineering the frontier of technology.',

    type: 'website',
    locale: 'en_US',

    url: 'https://vertex-loop.vercel.app',

    siteName: 'Vertex Loop',

    images: [
      {
        url: 'https://vertex-loop.vercel.app/og-image.png',
        width: 1080,
        height: 1080,
        alt: 'Vertex Loop Technology Ecosystem',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Vertex Loop — Next-Generation Technology Ecosystem',

    description:
      'Five divisions. One vision. Engineering the frontier of technology.',

    creator: '@vertexloop',

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