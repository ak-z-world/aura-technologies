/**
 * Vertex Loop Pvt Ltd — Anti-Spam & Rate Limiting Engine
 * 
 * Implements sliding-window IP rate limiting, honeypot detection,
 * and form timing analysis to block automated submission spam.
 */

interface RateLimitRecord {
  count: number
  firstRequestTime: number
  lastRequestTime: number
}

// In-memory sliding window bucket store
const ipStore = new Map<string, RateLimitRecord>()

// Configuration
const MAX_REQUESTS_PER_WINDOW = 5 // Max 5 submissions
const WINDOW_DURATION_MS = 10 * 60 * 1000 // 10 minutes window
const MIN_SUBMISSION_TIME_MS = 2000 // Minimum 2 seconds to complete form (anti-bot)
const MAX_SUBMISSION_TIME_MS = 24 * 60 * 60 * 1000 // 24 hours max form freshness

// Automatic garbage collection every 15 minutes
setInterval(() => {
  const now = Date.now()
  for (const [ip, record] of ipStore.entries()) {
    if (now - record.lastRequestTime > WINDOW_DURATION_MS * 2) {
      ipStore.delete(ip)
    }
  }
}, 15 * 60 * 1000)

export interface RateLimitResult {
  allowed: boolean
  remaining: number
  resetTime: number
  reason?: string
}

/**
 * Checks if the client IP is within allowed rate limits
 */
export function checkRateLimit(ip: string): RateLimitResult {
  const now = Date.now()
  const cleanIp = ip || 'anonymous'
  const record = ipStore.get(cleanIp)

  if (!record) {
    ipStore.set(cleanIp, {
      count: 1,
      firstRequestTime: now,
      lastRequestTime: now,
    })
    return {
      allowed: true,
      remaining: MAX_REQUESTS_PER_WINDOW - 1,
      resetTime: now + WINDOW_DURATION_MS,
    }
  }

  // If window expired, reset
  if (now - record.firstRequestTime > WINDOW_DURATION_MS) {
    record.count = 1
    record.firstRequestTime = now
    record.lastRequestTime = now
    return {
      allowed: true,
      remaining: MAX_REQUESTS_PER_WINDOW - 1,
      resetTime: now + WINDOW_DURATION_MS,
    }
  }

  // If within window and exceeded limit
  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    const timeUntilReset = Math.ceil((record.firstRequestTime + WINDOW_DURATION_MS - now) / 1000)
    return {
      allowed: false,
      remaining: 0,
      resetTime: record.firstRequestTime + WINDOW_DURATION_MS,
      reason: `Too many submissions from this connection. Please wait ${timeUntilReset} seconds before trying again, or call us directly at +91 94457 70160.`,
    }
  }

  // Increment counter
  record.count += 1
  record.lastRequestTime = now
  return {
    allowed: true,
    remaining: MAX_REQUESTS_PER_WINDOW - record.count,
    resetTime: record.firstRequestTime + WINDOW_DURATION_MS,
  }
}

/**
 * Verifies if honeypot was populated (bots fill hidden inputs)
 */
export function isHoneypotTriggered(payload: { _hp_company_url?: string }): boolean {
  if (payload._hp_company_url && typeof payload._hp_company_url === 'string' && payload._hp_company_url.trim().length > 0) {
    return true
  }
  return false
}

/**
 * Verifies that the form was not submitted too fast by an automated bot script
 */
export function isFormTimingValid(formLoadedAt?: number): { isValid: boolean; reason?: string } {
  if (!formLoadedAt || typeof formLoadedAt !== 'number') {
    // If client did not provide timestamp, permit it but log or continue
    return { isValid: true }
  }

  const now = Date.now()
  const elapsed = now - formLoadedAt

  // If submitted in less than 2 seconds
  if (elapsed < MIN_SUBMISSION_TIME_MS) {
    return {
      isValid: false,
      reason: 'Submission received too quickly. Please take a moment to review your message before sending.',
    }
  }

  // If timestamp is from more than 24 hours ago
  if (elapsed > MAX_SUBMISSION_TIME_MS) {
    return {
      isValid: false,
      reason: 'The form session has expired. Please refresh the page and try again.',
    }
  }

  return { isValid: true }
}
