import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ThreeDomainsSection from '@/components/sections/ThreeDomainsSection'
import SoftwareSection from '@/components/sections/SoftwareSection'
import MarketingSection from '@/components/sections/MarketingSection'
import AcademySection from '@/components/sections/AcademySection'
import HowWeWorkSection from '@/components/sections/HowWeWorkSection'
import OurApproachSection from '@/components/sections/OurApproachSection'
import CapabilitiesSection from '@/components/sections/CapabilitiesSection'
import FinalCtaSection from '@/components/sections/FinalCtaSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f5] text-[#111827] overflow-x-hidden">
      {/* 1. Header */}
      <Navbar />

      {/* 2. Hero */}
      <HeroSection />

      {/* 3. Three Domains */}
      <ThreeDomainsSection />

      {/* 4. 01 / Software */}
      <SoftwareSection />

      {/* 5. 02 / Digital Marketing */}
      <MarketingSection />

      {/* 6. 03 / Academy */}
      <AcademySection />

      {/* 7. How We Work */}
      <HowWeWorkSection />

      {/* 8. Our Approach */}
      <OurApproachSection />

      {/* 9. Capabilities */}
      <CapabilitiesSection />

      {/* 10. Final CTA */}
      <FinalCtaSection />

      {/* 11. Footer */}
      <Footer />
    </main>
  )
}