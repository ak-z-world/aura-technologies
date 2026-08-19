import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/ui/PageHero'
import Link from 'next/link'
import { FileText, ShieldAlert, CheckCircle2, Scale, ExternalLink, Mail, MapPin } from 'lucide-react'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Vertex Loop',
  description:
    'Terms and conditions governing the use of the Vertex Loop website, software products, and technology ecosystem services.',
  alternates: {
    canonical: `${siteConfig.url}/terms-conditions`,
  },
}

export default function TermsConditionsPage() {
  const lastUpdated = 'August 19, 2026'

  return (
    <main className="relative overflow-hidden bg-[#f6f4f0] text-slate-ink min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <PageHero
        label="Legal Agreement"
        labelAccent="gold"
        headline={
          <>
            Terms & <span className="italic font-normal text-[#a07830]">Conditions</span>
          </>
        }
        subline="These terms govern your access to and use of the Vertex Loop website, content, product showcases, and affiliated ecosystem properties."
        gradient={{
          orb1: 'rgba(235,224,200,0.5)',
          orb2: 'rgba(216,210,236,0.4)',
          orb3: 'rgba(193,218,240,0.3)',
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
          
          {/* Section 1: Introduction & Acceptance */}
          <div>
            <h2 className="text-display text-2xl font-semibold text-slate-ink mb-4 flex items-center gap-2">
              <Scale size={22} className="text-[#a07830]" /> 1. Introduction & Acceptance of Terms
            </h2>
            <p className="text-slate-mid text-sm leading-relaxed font-light mb-3">
              These Terms and Conditions ("Terms") govern your access to and use of <code>https://www.vertexloop.in</code> (the "Website"), operated by Vertex Loop ("Company", "we", "our", or "us").
            </p>
            <p className="text-slate-mid text-sm leading-relaxed font-light">
              By browsing, accessing, or interacting with this Website, you agree to comply with and be bound by these Terms. If you do not agree with any part of these Terms, you should discontinue use of the Website immediately.
            </p>
          </div>

          <div className="h-px bg-slate-200/80" />

          {/* Section 2: Intellectual Property */}
          <div>
            <h2 className="text-display text-2xl font-semibold text-slate-ink mb-4 flex items-center gap-2">
              <FileText size={22} className="text-[#a07830]" /> 2. Intellectual Property Rights
            </h2>
            <p className="text-slate-mid text-sm leading-relaxed font-light mb-3">
              All content on this Website—including logos, trademarks, text graphics, software code, system designs, illustrations, and product architecture descriptions—is the exclusive intellectual property of Vertex Loop or its licensors.
            </p>
            <p className="text-slate-mid text-sm leading-relaxed font-light">
              You are granted a limited, non-exclusive, non-transferable license to view Website materials for informational purposes only. Unauthorized reproduction, modification, distribution, or reverse engineering of any Website content or proprietary software assets is strictly prohibited.
            </p>
          </div>

          <div className="h-px bg-slate-200/80" />

          {/* Section 3: Engineering Services & Consulting */}
          <div>
            <h2 className="text-display text-2xl font-semibold text-slate-ink mb-4">3. Engineering Services & Consultations</h2>
            <p className="text-slate-mid text-sm leading-relaxed font-light mb-3">
              Information presented on this Website regarding our engineering capabilities (Custom AI Development, Enterprise Software Engineering, Cloud Architecture, and Digital Marketing & Technical SEO) is provided for general informational purposes.
            </p>
            <p className="text-slate-mid text-sm leading-relaxed font-light">
              Website content does not constitute a binding contract or formal service level agreement (SLA). Formal client engagements, deliverables, and SLAs are governed exclusively by executed Master Services Agreements (MSAs) or Statements of Work (SOWs).
            </p>
          </div>

          <div className="h-px bg-slate-200/80" />

          {/* Section 4: Proprietary Software Products & SCRIPTen */}
          <div>
            <h2 className="text-display text-2xl font-semibold text-slate-ink mb-4">4. Proprietary Software Products & SCRIPTen</h2>
            <p className="text-slate-mid text-sm leading-relaxed font-light mb-3">
              Vertex Loop develops proprietary business applications, including Vertex Loop ERP, Digital Invoicing Platform, Enterprise HRMS, and SCRIPTen.
            </p>
            <div className="p-5 rounded-2xl bg-white/60 border border-white/80 mb-4">
              <h3 className="font-semibold text-slate-ink text-sm mb-2 flex items-center gap-2">
                <span>SCRIPTen Platform Access</span>
                <ExternalLink size={14} className="text-[#a07830]" />
              </h3>
              <p className="text-slate-mid text-xs leading-relaxed font-light">
                SCRIPTen is accessible directly via its web portal at <code>https://scripten.arivuon.in/</code>. Access and usage of SCRIPTen are governed by the specific terms of use posted on the SCRIPTen platform.
              </p>
            </div>
            <p className="text-slate-mid text-sm leading-relaxed font-light">
              Product features under development are subject to modification without prior notice. Feature previews do not guarantee commercial availability timelines.
            </p>
          </div>

          <div className="h-px bg-slate-200/80" />

          {/* Section 5: Crack Leap Technology Education */}
          <div>
            <h2 className="text-display text-2xl font-semibold text-slate-ink mb-4">5. Crack Leap Technology Education Ecosystem</h2>
            <p className="text-slate-mid text-sm leading-relaxed font-light mb-3">
              Crack Leap is the dedicated technology education ecosystem associated with Vertex Loop, delivering software engineering bootcamps and enterprise team upskilling.
            </p>
            <p className="text-slate-mid text-sm leading-relaxed font-light">
              All official course catalogs, program schedules, and enrollment terms are hosted on the Crack Leap website at <code>https://crackleap.vertexloop.in</code>.
            </p>
          </div>

          <div className="h-px bg-slate-200/80" />

          {/* Section 6: Third-Party Links & Disclaimer */}
          <div>
            <h2 className="text-display text-2xl font-semibold text-slate-ink mb-4 flex items-center gap-2">
              <ShieldAlert size={22} className="text-[#a07830]" /> 6. Disclaimer & Limitation of Liability
            </h2>
            <p className="text-slate-mid text-sm leading-relaxed font-light mb-3">
              The Website and its contents are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied.
            </p>
            <p className="text-slate-mid text-sm leading-relaxed font-light">
              To the maximum extent permitted by applicable law, Vertex Loop disclaims liability for any indirect, incidental, or consequential damages resulting from your use of or inability to access the Website.
            </p>
          </div>

          <div className="h-px bg-slate-200/80" />

          {/* Section 7: Governing Law & Jurisdiction */}
          <div>
            <h2 className="text-display text-2xl font-semibold text-slate-ink mb-4">7. Governing Law & Modifications</h2>
            <p className="text-slate-mid text-sm leading-relaxed font-light mb-3">
              These Terms shall be interpreted and governed in accordance with applicable laws. <em>[Note: Formal legal jurisdiction and dispute resolution venue subject to final business and legal counsel confirmation.]</em>
            </p>
            <p className="text-slate-mid text-sm leading-relaxed font-light">
              We reserve the right to revise these Terms at any time. Continued use of the Website after updates are posted constitutes acceptance of the revised Terms.
            </p>
          </div>

          <div className="h-px bg-slate-200/80" />

          {/* Section 8: Contact */}
          <div className="bg-[#f0f4f8] rounded-2xl p-6 border border-[#c1dafo]">
            <h3 className="font-semibold text-slate-ink text-base mb-2">8. Contact Information</h3>
            <p className="text-slate-mid text-xs leading-relaxed font-light mb-4">
              If you have any questions regarding these Terms & Conditions, please contact us:
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-mono text-slate-ink">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#a07830]" />
                <a href="mailto:hello@vertexloop.in" className="hover:underline">
                  hello@vertexloop.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#a07830]" />
                <span>Vertex Loop Private Limited</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}