import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/ui/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'
import Link from 'next/link'
import { ShieldCheck, Lock, Eye, FileText, Mail, MapPin } from 'lucide-react'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Privacy Policy | Vertex Loop',
  description:
    'Learn how Vertex Loop collects, uses, and protects user information across our website and technology ecosystem properties.',
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
}

export default function PrivacyPolicyPage() {
  const lastUpdated = 'August 19, 2026'

  return (
    <main className="relative overflow-hidden bg-[#f6f4f0] text-slate-ink min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <PageHero
        label="Legal & Transparency"
        labelAccent="lavender"
        headline={
          <>
            Privacy <span className="italic font-normal text-[#7c6fad]">Policy</span>
          </>
        }
        subline="Vertex Loop is committed to respecting user privacy, safeguarding data, and maintaining transparent information practices across our technology ecosystem."
        gradient={{
          orb1: 'rgba(216,210,236,0.5)',
          orb2: 'rgba(193,218,240,0.4)',
          orb3: 'rgba(193,226,219,0.3)',
          base: '#f4f1f9',
        }}
      >
        <div className="text-xs font-mono text-slate-dim bg-white/60 px-4 py-2 rounded-full border border-white/80 w-fit">
          Last Updated: {lastUpdated}
        </div>
      </PageHero>

      {/* Main Content Area */}
      <section className="relative py-16 section-padding max-w-4xl mx-auto">
        <div className="glass-card-strong rounded-3xl p-8 sm:p-12 border border-white/80 shadow-glass-lg space-y-10">
          
          {/* Section 1: Introduction */}
          <div>
            <h2 className="text-display text-2xl font-semibold text-slate-ink mb-4 flex items-center gap-2">
              <ShieldCheck size={22} className="text-[#7c6fad]" /> 1. Introduction
            </h2>
            <p className="text-slate-mid text-sm leading-relaxed font-light mb-3">
              Vertex Loop ("Company", "we", "our", or "us") operates the website <code>https://www.vertexloop.in</code> and affiliated digital platforms. This Privacy Policy outlines how we collect, store, process, and protect information when you visit our website or interact with our consulting services and software product showcases.
            </p>
            <p className="text-slate-mid text-sm leading-relaxed font-light">
              By accessing or using our website, you acknowledge the terms set forth in this policy. If you have any questions regarding our privacy practices, please contact us at <code>hello@vertexloop.in</code>.
            </p>
          </div>

          <div className="h-px bg-slate-200/80" />

          {/* Section 2: Information We May Collect */}
          <div>
            <h2 className="text-display text-2xl font-semibold text-slate-ink mb-4 flex items-center gap-2">
              <Eye size={22} className="text-[#7c6fad]" /> 2. Information We May Collect
            </h2>
            <p className="text-slate-mid text-sm leading-relaxed font-light mb-4">
              We distinguish between information you voluntarily provide and technical data collected automatically during your visit.
            </p>
            
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/60 border border-white/80">
                <h3 className="font-semibold text-slate-ink text-sm mb-2">A. Information You Voluntarily Provide</h3>
                <ul className="list-disc pl-5 text-slate-mid text-xs space-y-1.5 font-light">
                  <li>Full name, email address, and phone number submitted via contact forms.</li>
                  <li>Company name, project details, and inquiry descriptions.</li>
                  <li>Communication correspondence sent directly to our official email addresses.</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-white/60 border border-white/80">
                <h3 className="font-semibold text-slate-ink text-sm mb-2">B. Information Collected Automatically</h3>
                <ul className="list-disc pl-5 text-slate-mid text-xs space-y-1.5 font-light">
                  <li>Device and browser parameters (browser type, operating system, language preferences).</li>
                  <li>IP address and approximate non-precise geographical region.</li>
                  <li>Page view activity, referral URLs, time spent on pages, and navigation paths.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px bg-slate-200/80" />

          {/* Section 3: How We Use Information */}
          <div>
            <h2 className="text-display text-2xl font-semibold text-slate-ink mb-4 flex items-center gap-2">
              <FileText size={22} className="text-[#7c6fad]" /> 3. How We Use Information
            </h2>
            <p className="text-slate-mid text-sm leading-relaxed font-light mb-3">
              We utilize collected information solely for legitimate operational, business, and security purposes:
            </p>
            <ul className="list-disc pl-5 text-slate-mid text-xs space-y-2 font-light">
              <li>To respond to architectural inquiries, project requests, and consultation bookings.</li>
              <li>To evaluate and improve website performance, user experience, and content structure.</li>
              <li>To analyze anonymized website usage metrics and traffic patterns.</li>
              <li>To protect our infrastructure against security threats, abuse, and unauthorized access.</li>
              <li>To fulfill legitimate legal and contractual obligations.</li>
            </ul>
          </div>

          <div className="h-px bg-slate-200/80" />

          {/* Section 4: Analytics & Cookies */}
          <div>
            <h2 className="text-display text-2xl font-semibold text-slate-ink mb-4 flex items-center gap-2">
              <Lock size={22} className="text-[#7c6fad]" /> 4. Analytics & Cookies
            </h2>
            <p className="text-slate-mid text-sm leading-relaxed font-light mb-3">
              We utilize Google Analytics 4 (Measurement ID: <code>G-91YN9MYRL0</code>) to analyze anonymized traffic data and aggregate user engagement. Google Analytics uses first-party cookies to collect non-personally identifiable metrics regarding page visits and session durations.
            </p>
            <p className="text-slate-mid text-sm leading-relaxed font-light">
              You can control or disable cookie settings directly within your browser preferences. Disabling cookies will not restrict your access to basic content on the Vertex Loop website.
            </p>
          </div>

          <div className="h-px bg-slate-200/80" />

          {/* Section 5: Third-Party Services & Links */}
          <div>
            <h2 className="text-display text-2xl font-semibold text-slate-ink mb-4">5. Third-Party Services & External Links</h2>
            <p className="text-slate-mid text-sm leading-relaxed font-light mb-3">
              Our website contains external links to affiliated ecosystem properties, including:
            </p>
            <ul className="list-disc pl-5 text-slate-mid text-xs space-y-1.5 font-light mb-4">
              <li>Crack Leap Technology Education Platform (<code>https://crackleap.vertexloop.in</code>)</li>
              <li>SCRIPTen AI Creator Platform (<code>https://scripten.arivuon.in/</code>)</li>
            </ul>
            <p className="text-slate-mid text-sm leading-relaxed font-light">
              External websites operate under their own independent privacy policies and terms of service. Vertex Loop is not responsible for the privacy practices of third-party domains.
            </p>
          </div>

          <div className="h-px bg-slate-200/80" />

          {/* Section 6: Data Security & Retention */}
          <div>
            <h2 className="text-display text-2xl font-semibold text-slate-ink mb-4">6. Data Security & Retention</h2>
            <p className="text-slate-mid text-sm leading-relaxed font-light mb-3">
              We deploy industry-standard technical and organizational security measures, including SSL/TLS encryption and strict access controls, to protect submitted information.
            </p>
            <p className="text-slate-mid text-sm leading-relaxed font-light">
              Inquiry records are retained only for as long as necessary to fulfill communication requirements, support business operations, or meet statutory legal recordkeeping mandates.
            </p>
          </div>

          <div className="h-px bg-slate-200/80" />

          {/* Section 7: International Visitors */}
          <div>
            <h2 className="text-display text-2xl font-semibold text-slate-ink mb-4">7. International Visitors</h2>
            <p className="text-slate-mid text-sm leading-relaxed font-light">
              Vertex Loop operates globally. Information submitted through this website may be processed on servers located outside your jurisdiction. We take appropriate measures to ensure data is handled securely across international boundaries.
            </p>
          </div>

          <div className="h-px bg-slate-200/80" />

          {/* Section 8: Contact & Inquiries */}
          <div className="bg-[#f0f4f8] rounded-2xl p-6 border border-[#c1dafo]">
            <h3 className="font-semibold text-slate-ink text-base mb-2">8. Privacy Contact & Inquiries</h3>
            <p className="text-slate-mid text-xs leading-relaxed font-light mb-4">
              For any questions regarding this Privacy Policy or to exercise applicable data subject rights, please reach out to our privacy communications office:
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-mono text-slate-ink">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#7c6fad]" />
                <a href="mailto:hello@vertexloop.in" className="hover:underline">
                  hello@vertexloop.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#7c6fad]" />
                <span>Vertex Loop Operations Hub</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}