/**
 * Vertex Loop Pvt Ltd — Production Contact Inquiry API Route Handler
 * 
 * Secure, rate-limited, validated POST endpoint for inbound contact inquiries.
 * Dispatches inquiries to Vertex Loop's official inbox via Zoho SMTP (smtp.zoho.in).
 * 
 * Strict Production Rules:
 * - No mock success or simulated delivery.
 * - HTTP 200 is returned IF AND ONLY IF the email is accepted by Zoho SMTP.
 * - If SMTP is unconfigured or fails, returns HTTP 503 with safe client guidance.
 * - Never exposes credentials, stack traces, or internal error logs.
 */

import { NextRequest, NextResponse } from 'next/server'
import { validateContactInquiry } from '@/lib/validation/contact'
import { checkRateLimit, isHoneypotTriggered, isFormTimingValid } from '@/lib/email/rateLimiter'
import { sendContactEmail } from '@/lib/email/mailer'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const MAX_PAYLOAD_BYTES = 64 * 1024 // 64 KB maximum payload

/**
 * Extracts client IP address safely for in-memory rate limiting
 */
function getClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }
  const realIp = req.headers.get('x-real-ip')
  if (realIp) {
    return realIp.trim()
  }
  return '127.0.0.1'
}

export async function POST(req: NextRequest) {
  try {
    // 1. Enforce Content-Type
    const contentType = req.headers.get('content-type') || ''
    if (!contentType.includes('application/json')) {
      return NextResponse.json(
        {
          success: false,
          message: 'Unsupported content format. Expected application/json.',
        },
        { status: 415 }
      )
    }

    // 2. Enforce Payload Size Limit
    const contentLength = req.headers.get('content-length')
    if (contentLength && parseInt(contentLength, 10) > MAX_PAYLOAD_BYTES) {
      return NextResponse.json(
        {
          success: false,
          message: 'Payload exceeds permissible size limit.',
        },
        { status: 413 }
      )
    }

    // 3. Extract Client IP & Check Rate Limiting
    const clientIp = getClientIp(req)
    const rateLimit = checkRateLimit(clientIp)

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: rateLimit.reason || 'Too many submissions. Please wait a few minutes before trying again or call +91 94457 70160.',
        },
        {
          status: 429,
          headers: {
            'Retry-After': '600',
          },
        }
      )
    }

    // 4. Safely Parse JSON Body
    let body: unknown
    try {
      body = await req.json()
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid submission payload format.',
        },
        { status: 400 }
      )
    }

    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        {
          success: false,
          message: 'Missing or malformed request payload.',
        },
        { status: 400 }
      )
    }

    const payload = body as Record<string, unknown>

    // 5. Anti-Spam: Honeypot Verification
    if (isHoneypotTriggered(payload)) {
      // Discard bot submissions silently without dispatching email
      return NextResponse.json({
        success: true,
        message: 'Thank you. Your message has been received.',
      })
    }

    // 6. Anti-Spam: Form Submission Timing
    const timingCheck = isFormTimingValid(payload._form_loaded_at as number | undefined)
    if (!timingCheck.isValid) {
      return NextResponse.json(
        {
          success: false,
          message: timingCheck.reason || 'Submission received too quickly. Please review your message before sending.',
        },
        { status: 400 }
      )
    }

    // 7. Deep Server-Side Validation & Sanitization
    const validation = validateContactInquiry(payload)
    if (!validation.isValid || !validation.sanitized) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please correct the highlighted fields.',
          fieldErrors: validation.errors,
        },
        { status: 400 }
      )
    }

    // 8. Real Zoho SMTP Email Dispatch
    const mailResult = await sendContactEmail(validation.sanitized)

    if (!mailResult.success) {
      if (mailResult.error === 'SMTP_UNCONFIGURED') {
        return NextResponse.json(
          {
            success: false,
            message: 'The contact service is temporarily unavailable. Please email hello@vertexloop.in directly.',
          },
          { status: 503 }
        )
      }

      return NextResponse.json(
        {
          success: false,
          message: "We couldn't send your inquiry right now. Please email hello@vertexloop.in directly.",
        },
        { status: 503 }
      )
    }

    // 9. Real Success Confirmation (SMTP Accepted)
    return NextResponse.json({
      success: true,
      message: 'Thank you. Your inquiry has been sent successfully. Our team will review it and get back to you.',
    })

  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown server error'
    // Log server-side only; NEVER expose internal details to client
    console.error('[Contact API Error] Unhandled exception:', errorMsg)

    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected server error occurred. Please contact hello@vertexloop.in.',
      },
      { status: 500 }
    )
  }
}

// Reject unsupported HTTP methods with 405 Method Not Allowed
export async function GET() {
  return NextResponse.json(
    { success: false, message: 'Method Not Allowed. Use POST.' },
    { status: 405, headers: { Allow: 'POST' } }
  )
}

export async function PUT() {
  return NextResponse.json(
    { success: false, message: 'Method Not Allowed. Use POST.' },
    { status: 405, headers: { Allow: 'POST' } }
  )
}

export async function DELETE() {
  return NextResponse.json(
    { success: false, message: 'Method Not Allowed. Use POST.' },
    { status: 405, headers: { Allow: 'POST' } }
  )
}
