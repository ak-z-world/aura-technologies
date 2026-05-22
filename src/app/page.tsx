import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import EcosystemSection from "@/components/sections/EcosystemSection"
import WhyUsSection from "@/components/sections/WhyUsSection"
// import CtaSection from "@/components/sections/CtaSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Navbar />

      <HeroSection />

      <AboutSection />

      <EcosystemSection />

      <WhyUsSection />

      {/* <CtaSection /> */}

      <Footer />
    </main>
  )
}