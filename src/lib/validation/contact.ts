/**
 * Vertex Loop Pvt Ltd — Contact Form Validation & Sanitization Engine
 * 
 * Provides robust validation, type checks, and sanitization for contact inquiries
 * on both server-side Route Handlers and client-side form components.
 */

export interface ContactInquiryPayload {
  // Required identity & contact
  firstName: string
  lastName?: string
  name?: string
  email: string
  phone: string

  // Business & scope
  company?: string
  role?: string
  country?: string

  // Intent & service categories
  engagementType?: string
  divisions?: string[]
  service?: string
  preferredContactMethod?: 'email' | 'phone' | 'whatsapp' | 'any'

  // Project details
  timeline?: string
  budget?: string
  message: string
  hearAbout?: string

  // Anti-spam tokens
  _hp_company_url?: string
  _form_loaded_at?: number
}

export interface ValidationResult {
  isValid: boolean
  errors: Record<string, string>
  sanitized?: SanitizedContactInquiry
}

export interface SanitizedContactInquiry {
  fullName: string
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  role: string
  country: string
  engagementType: string
  divisions: string[]
  service: string
  preferredContactMethod: string
  timeline: string
  budget: string
  message: string
  hearAbout: string
  submittedAt: string
}

// RFC 5322 compliant simplified email regex
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/

// International phone regex allowing +, digits, spaces, dots, dashes, parentheses (7 to 20 digits total)
const PHONE_REGEX = /^\+?[\d\s().-]{7,20}$/

/**
 * Escapes unsafe HTML characters to prevent XSS or HTML injection in email clients
 */
export function escapeHtml(unsafe: string): string {
  if (!unsafe) return ''
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

/**
 * Strips carriage returns and newlines to prevent SMTP Header Injection
 */
export function stripHeaderInjection(str: string): string {
  if (!str) return ''
  return str.replace(/[\r\n]+/g, ' ').trim()
}

/**
 * Validates and sanitizes a contact form inquiry payload
 */
export function validateContactInquiry(raw: unknown): ValidationResult {
  const errors: Record<string, string> = {}

  if (!raw || typeof raw !== 'object') {
    return {
      isValid: false,
      errors: { general: 'Invalid submission payload format.' },
    }
  }

  const payload = raw as Partial<ContactInquiryPayload>

  // 1. First / Full Name
  const rawFullName = typeof (payload as { fullName?: string }).fullName === 'string' ? (payload as { fullName?: string }).fullName!.trim() : ''
  const rawFirstName = typeof payload.firstName === 'string' ? payload.firstName.trim() : ''
  const rawName = typeof payload.name === 'string' ? payload.name.trim() : ''
  const effectiveFirstName = rawFirstName || rawFullName.split(' ')[0] || rawName.split(' ')[0] || ''

  if (!effectiveFirstName) {
    errors.name = 'Your name is required.'
  } else if (effectiveFirstName.length < 2) {
    errors.name = 'Name must be at least 2 characters.'
  } else if (effectiveFirstName.length > 70) {
    errors.name = 'Name cannot exceed 70 characters.'
  } else if (/[\r\n]/.test(effectiveFirstName)) {
    errors.name = 'Invalid characters in name.'
  }

  // 2. Last Name (optional)
  const rawLastName = typeof payload.lastName === 'string' ? payload.lastName.trim() : ''
  if (rawLastName.length > 50) {
    errors.lastName = 'Last name cannot exceed 50 characters.'
  }

  const fullName = rawFullName || [effectiveFirstName, rawLastName].filter(Boolean).join(' ') || rawName

  // 3. Email
  const rawEmail = typeof payload.email === 'string' ? payload.email.trim().toLowerCase() : ''
  if (!rawEmail) {
    errors.email = 'Email address is required.'
  } else if (rawEmail.length > 254) {
    errors.email = 'Email address is too long.'
  } else if (!EMAIL_REGEX.test(rawEmail)) {
    errors.email = 'Please provide a valid corporate or personal email address.'
  } else if (/[\r\n]/.test(rawEmail)) {
    errors.email = 'Invalid email format.'
  }

  // 4. Phone Number (Required)
  const rawPhone = typeof payload.phone === 'string' ? payload.phone.trim() : ''
  const digitsOnly = rawPhone.replace(/\D/g, '')

  if (!rawPhone) {
    errors.phone = 'Phone number is required so our team can reach you.'
  } else if (digitsOnly.length < 7 || digitsOnly.length > 15 || !PHONE_REGEX.test(rawPhone)) {
    errors.phone = 'Please provide a valid international or domestic phone number (e.g. +91 94457 70160).'
  }

  // 5. Message (Required)
  const rawMessage = typeof payload.message === 'string' ? payload.message.trim() : ''
  if (!rawMessage) {
    errors.message = 'Please describe your project or inquiry.'
  } else if (rawMessage.length < 15) {
    errors.message = 'Please provide at least 15 characters describing your requirements.'
  } else if (rawMessage.length > 5000) {
    errors.message = 'Message cannot exceed 5,000 characters.'
  }

  // 6. Optional string fields with length guards
  const company = typeof payload.company === 'string' ? payload.company.trim().slice(0, 150) : ''
  const role = typeof payload.role === 'string' ? payload.role.trim().slice(0, 100) : ''
  const country = typeof payload.country === 'string' ? payload.country.trim().slice(0, 100) : ''
  const hearAbout = typeof payload.hearAbout === 'string' ? payload.hearAbout.trim().slice(0, 200) : ''
  const timeline = typeof payload.timeline === 'string' ? payload.timeline.trim().slice(0, 50) : ''
  const budget = typeof payload.budget === 'string' ? payload.budget.trim().slice(0, 50) : ''
  const engagementType = typeof payload.engagementType === 'string' ? payload.engagementType.trim().slice(0, 50) : ''
  const service = typeof payload.service === 'string' ? payload.service.trim().slice(0, 100) : ''

  // 7. Preferred contact method
  let preferredContactMethod = 'email'
  if (payload.preferredContactMethod && ['email', 'phone', 'whatsapp', 'any'].includes(payload.preferredContactMethod)) {
    preferredContactMethod = payload.preferredContactMethod
  }

  // 8. Divisions array
  let divisions: string[] = []
  if (Array.isArray(payload.divisions)) {
    divisions = payload.divisions
      .filter((d): d is string => typeof d === 'string')
      .map(d => d.trim().slice(0, 50))
      .slice(0, 10)
  }

  if (Object.keys(errors).length > 0) {
    return { isValid: false, errors }
  }

  const sanitized: SanitizedContactInquiry = {
    fullName: stripHeaderInjection(fullName),
    firstName: stripHeaderInjection(effectiveFirstName),
    lastName: stripHeaderInjection(rawLastName),
    email: stripHeaderInjection(rawEmail),
    phone: stripHeaderInjection(rawPhone),
    company: stripHeaderInjection(company),
    role: stripHeaderInjection(role),
    country: stripHeaderInjection(country),
    engagementType: stripHeaderInjection(engagementType),
    divisions,
    service: stripHeaderInjection(service),
    preferredContactMethod,
    timeline: stripHeaderInjection(timeline),
    budget: stripHeaderInjection(budget),
    message: rawMessage,
    hearAbout: stripHeaderInjection(hearAbout),
    submittedAt: new Date().toISOString(),
  }

  return {
    isValid: true,
    errors: {},
    sanitized,
  }
}
