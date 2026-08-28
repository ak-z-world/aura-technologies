/**
 * Vertex Loop — SEO Title & Metadata Optimization Utility
 * 
 * Enforces strict length limits (<=70 chars, ideally 45-65 chars) and
 * consistent "Primary Topic | Vertex Loop" branding across all static & dynamic routes.
 */

export const MAX_TITLE_LENGTH = 70
export const BRAND_NAME = 'Vertex Loop'

/**
 * Formats a clean, concise SEO title with the Vertex Loop brand suffix.
 * Ensures the title never exceeds 70 characters.
 */
export function formatSeoTitle(topic: string): string {
  if (!topic || typeof topic !== 'string') {
    return `Global Technology & Software Solutions | ${BRAND_NAME}`
  }

  // Remove existing brand suffixes if present to prevent duplication
  const cleanTopic = topic
    .replace(/\s*\|\s*Vertex Loop(\s+Pvt\s+Ltd)?(\s+Private\s+Limited)?$/i, '')
    .replace(/\s*—\s*Vertex Loop(\s+Pvt\s+Ltd)?(\s+Private\s+Limited)?$/i, '')
    .trim()

  const candidate = `${cleanTopic} | ${BRAND_NAME}`

  if (candidate.length <= MAX_TITLE_LENGTH) {
    return candidate
  }

  // If candidate is too long, intelligently trim secondary qualifiers
  const shortenedTopic = cleanTopic
    .replace(/Enterprise\s+/gi, '')
    .replace(/Comprehensive\s+/gi, '')
    .replace(/Proprietary\s+/gi, '')
    .replace(/Technology\s+Solutions/gi, 'Solutions')
    .replace(/Technology\s+Ecosystem/gi, 'Ecosystem')
    .trim()

  const shortenedCandidate = `${shortenedTopic} | ${BRAND_NAME}`
  if (shortenedCandidate.length <= MAX_TITLE_LENGTH) {
    return shortenedCandidate
  }

  // Fallback safe slice without cutting words
  const words = cleanTopic.split(' ')
  let resultTopic = ''
  for (const word of words) {
    const next = resultTopic ? `${resultTopic} ${word}` : word
    if (`${next} | ${BRAND_NAME}`.length <= MAX_TITLE_LENGTH) {
      resultTopic = next
    } else {
      break
    }
  }

  return `${resultTopic || cleanTopic.slice(0, 50)} | ${BRAND_NAME}`
}

/**
 * Validates whether a rendered title string conforms to the <= 70 character SEO standard.
 */
export function validateTitleLength(title: string): { isValid: boolean; length: number; title: string } {
  const length = (title || '').length
  return {
    isValid: length > 0 && length <= MAX_TITLE_LENGTH,
    length,
    title,
  }
}
