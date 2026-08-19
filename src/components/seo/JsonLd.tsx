import Script from 'next/script'

interface JsonLdProps {
  data: Record<string, any> | Array<Record<string, any>>
  id?: string
}

export default function JsonLd({ data, id }: JsonLdProps) {
  const scriptId = id || `json-ld-${Math.random().toString(36).substring(2, 9)}`

  return (
    <Script
      id={scriptId}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      strategy="afterInteractive"
    />
  )
}
