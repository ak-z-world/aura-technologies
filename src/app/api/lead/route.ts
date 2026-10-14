import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { siteConfig } from '@/config/site'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

interface LeadPayload {
  flow: string
  service?: string
  company?: string
  name: string
  phone: string
  email?: string
  website?: string
  budget?: string
  timing?: string
  background?: string
  niche?: string
  platform?: string
  role?: string
  portfolio?: string
  summary?: string
  timestamp?: string
}

function sanitizeText(str?: string): string {
  if (!str) return ''
  return String(str)
    .replace(/[<>]/g, '')
    .trim()
}

function getTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.zoho.in'
  const port = parseInt(process.env.SMTP_PORT || '465', 10)
  const secure = process.env.SMTP_SECURE === 'true' || port === 465
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASSWORD

  if (!user || !pass) {
    return null
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    requireTLS: port === 587,
    auth: { user, pass },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  })
}

function generateLeadWhatsAppUrl(payload: LeadPayload): string {
  const phone = '919445770160'
  const flowTag = payload.flow || 'Vertex Loop Inquiry'
  const lines = [
    `*New Website Chat Inquiry — Vertex Loop*`,
    `✦ *Interest:* ${flowTag}`,
    payload.service ? `• *Focus / Service:* ${payload.service}` : null,
    payload.company ? `• *Company:* ${payload.company}` : null,
    `• *Name:* ${payload.name}`,
    `• *Phone:* ${payload.phone}`,
    payload.email ? `• *Email:* ${payload.email}` : null,
    payload.website ? `• *Website:* ${payload.website}` : null,
    payload.budget ? `• *Budget:* ${payload.budget}` : null,
    payload.timing ? `• *Batch / Timing:* ${payload.timing}` : null,
    payload.background ? `• *Background:* ${payload.background}` : null,
    payload.platform ? `• *Platform:* ${payload.platform}` : null,
    payload.niche ? `• *Niche:* ${payload.niche}` : null,
    payload.role ? `• *Career Role:* ${payload.role}` : null,
    payload.portfolio ? `• *Portfolio:* ${payload.portfolio}` : null,
    ``,
    `_Hello Vertex Loop team, I connected with Kural on your website and would like to take this forward!_`
  ].filter(Boolean)

  const text = lines.join('\n')
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
}

function generateLeadHtmlEmail(payload: LeadPayload): string {
  const submittedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Chatbot Lead — Kural / Vertex Loop</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f3ff; margin:0; padding:24px;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #ddd6fe; box-shadow: 0 4px 20px rgba(124, 58, 237, 0.08);">
    <div style="background: linear-gradient(135deg, #7c3aed, #4c1d95); padding: 24px; color: #ffffff;">
      <div style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: #c4b5fd;">✦ Kural Chatbot Lead</div>
      <h2 style="margin: 6px 0 0; font-size: 22px; font-weight: 700;">${payload.flow}</h2>
      <div style="font-size: 12px; color: #ede9fe; margin-top: 4px;">Submitted at ${submittedAt} IST</div>
    </div>
    
    <div style="padding: 28px;">
      <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 12px; padding: 18px; margin-bottom: 20px;">
        <table width="100%" cellpadding="6" cellspacing="0" style="font-size: 14px; color: #1e1b4b;">
          <tr>
            <td style="width: 35%; font-weight: 600; color: #6d28d9;">Prospect Name:</td>
            <td style="font-weight: 700;">${payload.name}</td>
          </tr>
          <tr>
            <td style="font-weight: 600; color: #6d28d9;">Phone / WhatsApp:</td>
            <td><a href="tel:${payload.phone}" style="color: #7c3aed; font-weight: 700; text-decoration: none;">${payload.phone}</a></td>
          </tr>
          ${payload.email ? `
          <tr>
            <td style="font-weight: 600; color: #6d28d9;">Work Email:</td>
            <td><a href="mailto:${payload.email}" style="color: #7c3aed; text-decoration: none;">${payload.email}</a></td>
          </tr>` : ''}
          ${payload.company ? `
          <tr>
            <td style="font-weight: 600; color: #6d28d9;">Company:</td>
            <td>${payload.company}</td>
          </tr>` : ''}
        </table>
      </div>

      <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #4c1d95; margin-bottom: 12px; border-bottom: 1px solid #f3e8ff; padding-bottom: 6px;">Lead Details</h3>
      <table width="100%" cellpadding="6" cellspacing="0" style="font-size: 14px; color: #334155;">
        ${payload.service ? `<tr><td style="width: 35%; color: #64748b;">Selected Focus:</td><td style="font-weight: 600; color: #0f172a;">${payload.service}</td></tr>` : ''}
        ${payload.budget ? `<tr><td style="color: #64748b;">Budget Bracket:</td><td style="font-weight: 600; color: #0f172a;">${payload.budget}</td></tr>` : ''}
        ${payload.website ? `<tr><td style="color: #64748b;">Website:</td><td><a href="${payload.website}" target="_blank" style="color: #7c3aed;">${payload.website}</a></td></tr>` : ''}
        ${payload.background ? `<tr><td style="color: #64748b;">Candidate Background:</td><td>${payload.background}</td></tr>` : ''}
        ${payload.timing ? `<tr><td style="color: #64748b;">Batch Timing:</td><td>${payload.timing}</td></tr>` : ''}
        ${payload.platform ? `<tr><td style="color: #64748b;">Creator Platform:</td><td>${payload.platform}</td></tr>` : ''}
        ${payload.niche ? `<tr><td style="color: #64748b;">Creator Niche:</td><td>${payload.niche}</td></tr>` : ''}
        ${payload.role ? `<tr><td style="color: #64748b;">Applied Role:</td><td>${payload.role}</td></tr>` : ''}
        ${payload.portfolio ? `<tr><td style="color: #64748b;">Portfolio / Profile:</td><td><a href="${payload.portfolio}" target="_blank" style="color: #7c3aed;">${payload.portfolio}</a></td></tr>` : ''}
      </table>

      <div style="margin-top: 28px; text-align: center;">
        <a href="https://wa.me/${payload.phone.replace(/[^0-9]/g, '')}" style="display: inline-block; background: #10b981; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 9999px; font-weight: 600; font-size: 14px; margin-right: 8px;">
          WhatsApp ${payload.name}
        </a>
        <a href="tel:${payload.phone}" style="display: inline-block; background: #7c3aed; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 9999px; font-weight: 600; font-size: 14px;">
          Call Direct
        </a>
      </div>
    </div>

    <div style="background: #faf5ff; border-top: 1px solid #e9d5ff; padding: 16px; text-align: center; font-size: 12px; color: #7c3aed;">
      Vertex Loop Pvt Ltd • Chennai • hello@vertexloop.in • +91 94457 70160
    </div>
  </div>
</body>
</html>
`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null)
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { success: false, message: 'Invalid payload format.' },
        { status: 400 }
      )
    }

    const payload: LeadPayload = {
      flow: sanitizeText(body.flow) || 'General Inquiry',
      service: sanitizeText(body.service),
      company: sanitizeText(body.company),
      name: sanitizeText(body.name),
      phone: sanitizeText(body.phone),
      email: sanitizeText(body.email),
      website: sanitizeText(body.website),
      budget: sanitizeText(body.budget),
      timing: sanitizeText(body.timing),
      background: sanitizeText(body.background),
      niche: sanitizeText(body.niche),
      platform: sanitizeText(body.platform),
      role: sanitizeText(body.role),
      portfolio: sanitizeText(body.portfolio),
      summary: sanitizeText(body.summary),
      timestamp: new Date().toISOString()
    }

    if (!payload.name || !payload.phone) {
      return NextResponse.json(
        { success: false, message: 'Name and phone are required to connect.' },
        { status: 400 }
      )
    }

    const whatsAppUrl = generateLeadWhatsAppUrl(payload)

    // Attempt Zoho SMTP email dispatch
    const transporter = getTransporter()
    if (transporter) {
      const fromName = process.env.SMTP_FROM_NAME || 'Kural from Vertex Loop'
      const fromEmail = process.env.SMTP_USER || siteConfig.email
      const toEmail = process.env.CONTACT_RECEIVER_EMAIL || siteConfig.email

      const subject = `[Kural Lead] ${payload.flow} — ${payload.name} (${payload.phone})`
      const html = generateLeadHtmlEmail(payload)

      try {
        await transporter.sendMail({
          from: `"${fromName}" <${fromEmail}>`,
          to: toEmail,
          replyTo: payload.email || fromEmail,
          subject,
          html,
          headers: {
            'X-Lead-Source': 'VertexLoop-Chatbot-Kural',
            'X-Priority': '1'
          }
        })
      } catch (err) {
        console.error('[Lead API] SMTP send error (non-fatal):', err)
      }
    } else {
      console.log('[Lead API] SMTP not configured. Logged chatbot lead:', payload)
    }

    return NextResponse.json({
      success: true,
      message: 'Lead received successfully.',
      leadId: `vert-${Date.now()}`,
      whatsAppUrl
    })

  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Server error'
    console.error('[Lead API] Unexpected error:', msg)
    return NextResponse.json(
      { success: false, message: 'Failed to process lead inquiry.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { success: false, message: 'Method Not Allowed. Use POST.' },
    { status: 405, headers: { Allow: 'POST' } }
  )
}
