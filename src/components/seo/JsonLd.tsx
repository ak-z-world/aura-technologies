import Script from 'next/script'

interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>
  id?: string
}

export default function JsonLd({ data, id }: JsonLdProps) {
  const scriptId = id || 'json-ld-schema'

  return (
    <Script
      id={scriptId}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      strategy="afterInteractive"
    />
  )
}

