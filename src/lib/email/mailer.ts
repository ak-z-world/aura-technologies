/**
 * Vertex Loop Pvt Ltd — Production Zoho SMTP Mailer Engine
 * 
 * Production-grade Nodemailer transporter connecting securely to Zoho Mail (smtp.zoho.in).
 * Strictly requires valid SMTP credentials. No mock success or simulated dispatch.
 */

import nodemailer from 'nodemailer'
import type { Transporter } from 'nodemailer'
import { siteConfig } from '@/config/site'
import { SanitizedContactInquiry, escapeHtml } from '@/lib/validation/contact'

export interface SendMailResult {
  success: boolean
  messageId?: string
  error?: 'SMTP_UNCONFIGURED' | 'SMTP_DELIVERY_FAILED'
}

let cachedTransporter: Transporter | null = null

/**
 * Validates and retrieves the production Nodemailer transporter for Zoho Mail
 */
function getTransporter(): Transporter | null {
  const host = process.env.SMTP_HOST || 'smtp.zoho.in'
  const port = parseInt(process.env.SMTP_PORT || '465', 10)
  const secure = process.env.SMTP_SECURE === 'true' || port === 465
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASSWORD

  // Fail fast if credentials are not configured
  if (!user || !pass) {
    return null
  }

  if (!cachedTransporter) {
    cachedTransporter = nodemailer.createTransport({
      host,
      port,
      secure,
      requireTLS: port === 587,
      auth: {
        user,
        pass,
      },
      connectionTimeout: 10000, // 10s connection timeout
      greetingTimeout: 10000,
      socketTimeout: 15000,
      tls: {
        rejectUnauthorized: true, // Strict certificate validation
      },
    })
  }

  return cachedTransporter
}

/**
 * Builds clean plain-text email content
 */
function generatePlainTextEmail(inquiry: SanitizedContactInquiry): string {
  return `
================================================================================
NEW WEBSITE CONTACT INQUIRY — VERTEX LOOP PVT LTD
================================================================================

Submitted At: ${new Date(inquiry.submittedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
Source: Vertex Loop Website Contact Form (https://www.vertexloop.in/contact)

1. VISITOR DETAILS:
--------------------------------------------------------------------------------
Full Name:        ${inquiry.fullName}
Email Address:    ${inquiry.email}
Phone Number:     ${inquiry.phone}
Company Name:     ${inquiry.company || 'Not Specified'}
Role / Title:     ${inquiry.role || 'Not Specified'}
Country:          ${inquiry.country || 'Not Specified'}
Preferred Contact: ${inquiry.preferredContactMethod.toUpperCase()}

2. ENGAGEMENT SCOPE & DIVISIONS:
--------------------------------------------------------------------------------
Engagement Type:  ${inquiry.engagementType || 'Direct Inquiry'}
Divisions/Focus:  ${inquiry.divisions.length > 0 ? inquiry.divisions.join(', ') : (inquiry.service || 'General Engineering')}
Target Timeline:  ${inquiry.timeline || 'Flexible'}
Budget Bracket:   ${inquiry.budget || 'Not Disclosed'}
Referral Source:  ${inquiry.hearAbout || 'Direct Search / Website'}

3. PROJECT REQUIREMENTS / MESSAGE:
--------------------------------------------------------------------------------
${inquiry.message}

================================================================================
Note: You can reply directly to this email to respond to ${inquiry.fullName} (${inquiry.email}).
================================================================================
`.trim()
}

/**
 * Builds responsive, clean HTML email content
 */
function generateHtmlEmail(inquiry: SanitizedContactInquiry): string {
  const safeFullName = escapeHtml(inquiry.fullName)
  const safeEmail = escapeHtml(inquiry.email)
  const safePhone = escapeHtml(inquiry.phone)
  const safeCompany = escapeHtml(inquiry.company || 'Direct / Individual')
  const safeRole = escapeHtml(inquiry.role || 'Not Specified')
  const safeCountry = escapeHtml(inquiry.country || 'Global / India')
  const safeTimeline = escapeHtml(inquiry.timeline || 'Flexible')
  const safeBudget = escapeHtml(inquiry.budget || 'To be discussed')
  const safeHearAbout = escapeHtml(inquiry.hearAbout || 'Website')
  const safeDivisions = inquiry.divisions.map(d => escapeHtml(d)).join(', ') || escapeHtml(inquiry.service || 'General Inquiry')
  const safeMessage = escapeHtml(inquiry.message).replace(/\n/g, '<br/>')
  const formattedDate = new Date(inquiry.submittedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Website Inquiry — Vertex Loop Pvt Ltd</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 32px 16px;">
    <tr>
      <td align="center">
        <!-- Main Card -->
        <table role="presentation" width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;" cellspacing="0" cellpadding="0">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #0f172a; padding: 28px 32px; text-align: left;">
              <table width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <div style="font-size: 20px; font-weight: 700; color: #ffffff; letter-spacing: -0.02em;">
                      Vertex<span style="color: #a5b4fc;">Loop</span> <span style="font-size: 13px; font-weight: 400; color: #94a3b8; font-family: monospace;">Pvt Ltd</span>
                    </div>
                    <div style="font-size: 11px; font-family: monospace; color: #38bdf8; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 4px;">
                      ✦ Inbound Website Inquiry
                    </div>
                  </td>
                  <td align="right">
                    <span style="font-size: 11px; font-family: monospace; color: #cbd5e1; background-color: rgba(255,255,255,0.1); padding: 4px 10px; border-radius: 6px;">
                      ${formattedDate} IST
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px;">

              <!-- Primary Contact Highlights Box -->
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <table width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="padding-bottom: 12px; width: 50%;">
                      <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #64748b; margin-bottom: 2px;">Full Name</div>
                      <div style="font-size: 16px; font-weight: 600; color: #0f172a;">${safeFullName}</div>
                    </td>
                    <td style="padding-bottom: 12px; width: 50%;">
                      <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #64748b; margin-bottom: 2px;">Company / Org</div>
                      <div style="font-size: 15px; font-weight: 500; color: #0f172a;">${safeCompany}</div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top: 8px;">
                      <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #64748b; margin-bottom: 2px;">Email Address</div>
                      <a href="mailto:${safeEmail}" style="font-size: 14px; color: #4338ca; text-decoration: none; font-weight: 500;">${safeEmail}</a>
                    </td>
                    <td style="padding-top: 8px;">
                      <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #64748b; margin-bottom: 2px;">Direct Phone</div>
                      <a href="tel:${safePhone}" style="font-size: 14px; color: #0f766e; text-decoration: none; font-weight: 500;">${safePhone}</a>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Scope & Focus Details -->
              <div style="margin-bottom: 24px;">
                <div style="font-size: 12px; font-family: monospace; font-weight: 700; text-transform: uppercase; color: #475569; letter-spacing: 0.05em; margin-bottom: 12px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;">
                  Engagement Specifications
                </div>
                <table width="100%" cellspacing="0" cellpadding="6" style="font-size: 13px;">
                  <tr>
                    <td style="width: 35%; color: #64748b; font-weight: 500;">Divisions / Focus:</td>
                    <td style="color: #0f172a; font-weight: 600;">${safeDivisions}</td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; font-weight: 500;">Role / Title:</td>
                    <td style="color: #0f172a;">${safeRole}</td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; font-weight: 500;">Location / Country:</td>
                    <td style="color: #0f172a;">${safeCountry}</td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; font-weight: 500;">Target Timeline:</td>
                    <td style="color: #0f172a;">${safeTimeline}</td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; font-weight: 500;">Budget Estimate:</td>
                    <td style="color: #0f172a;">${safeBudget}</td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; font-weight: 500;">Referral Source:</td>
                    <td style="color: #0f172a;">${safeHearAbout}</td>
                  </tr>
                </table>
              </div>

              <!-- Message Body -->
              <div>
                <div style="font-size: 12px; font-family: monospace; font-weight: 700; text-transform: uppercase; color: #475569; letter-spacing: 0.05em; margin-bottom: 12px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;">
                  Project Message & Requirements
                </div>
                <div style="background-color: #f8fafc; border-left: 4px solid #6366f1; padding: 16px 20px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #1e293b;">
                  ${safeMessage}
                </div>
              </div>

              <!-- Reply Action CTA -->
              <div style="margin-top: 32px; text-align: center;">
                <a href="mailto:${safeEmail}?subject=Re:%20Inquiry%20with%20Vertex%20Loop%20Pvt%20Ltd" style="display: inline-block; background-color: #0f172a; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 10px; font-size: 14px; font-weight: 600;">
                  Reply Directly to ${safeFullName}
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px 32px; text-align: center; font-size: 11px; color: #94a3b8;">
              <p style="margin: 0 0 6px 0;">
                This inquiry was submitted through the official website contact form at <a href="${siteConfig.url}/contact" style="color: #6366f1; text-decoration: none;">vertexloop.in/contact</a>.
              </p>
              <p style="margin: 0;">
                <strong>Vertex Loop Pvt Ltd</strong> · G2, Venkatapuram, Ambattur, Chennai - 600053, Tamil Nadu, India · 📞 +91 94457 70160
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim()
}

/**
 * Dispatches the contact inquiry to Vertex Loop via Zoho SMTP.
 * Performs real SMTP dispatch only. No simulation or mock fallbacks.
 */
export async function sendContactEmail(inquiry: SanitizedContactInquiry): Promise<SendMailResult> {
  const transporter = getTransporter()

  if (!transporter) {
    return {
      success: false,
      error: 'SMTP_UNCONFIGURED',
    }
  }

  const fromName = process.env.SMTP_FROM_NAME || siteConfig.name
  const fromEmail = process.env.SMTP_USER || siteConfig.email
  const toEmail = process.env.CONTACT_RECEIVER_EMAIL || fromEmail

  // Construct structured sanitized subject
  const divisionTag = inquiry.divisions[0] || inquiry.service || 'Project'
  const companyTag = inquiry.company ? `(${inquiry.company})` : ''
  const subject = `[Website Inquiry] ${divisionTag} — ${inquiry.fullName} ${companyTag}`.trim()

  const textContent = generatePlainTextEmail(inquiry)
  const htmlContent = generateHtmlEmail(inquiry)

  try {
    const info = await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      replyTo: `"${inquiry.fullName}" <${inquiry.email}>`,
      to: toEmail,
      subject,
      text: textContent,
      html: htmlContent,
      headers: {
        'X-Entity-Ref-ID': `vertexloop-inquiry-${Date.now()}`,
        'X-Priority': '1',
      },
    })

    return {
      success: true,
      messageId: info.messageId,
    }
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : 'Unknown SMTP delivery error'
    // Log server-side only; NEVER expose credentials or visitor details
    console.error('[Contact API] Failed to deliver inquiry via Zoho SMTP:', errMessage)
    return {
      success: false,
      error: 'SMTP_DELIVERY_FAILED',
    }
  }
}
