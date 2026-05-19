"use client"

import { useEffect, useState } from "react"
import { useReCaptcha } from "next-recaptcha-v3"
import dynamic from "next/dynamic"
import { UIOverlay } from "@/components/layout/UIOverlay"

// 1. The Canvas sits in the normal HTML DOM, so it gets the HTML loading spinner.
const DynamicCanvas = dynamic(() => import('@react-three/fiber').then(mod => mod.Canvas), { 
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600"></div>
    </div>
  )
})

// 2. Scene3D sits INSIDE the 3D Canvas. It cannot render HTML, so we return null while it loads.
const Scene3D = dynamic(() => import("@/components/layout/Scene3D").then(mod => mod.Scene3D), {
  ssr: false,
  loading: () => null 
})
export default function Home() {
  const { executeRecaptcha } = useReCaptcha()
  const [securityStatus, setSecurityStatus] = useState("Analyzing visitor...")

  // Invisible Captcha Execution on Page Load
  useEffect(() => {
    const verifyHumanity = async () => {
      try {
        const token = await executeRecaptcha("page_load")
        if (token) {
          // Send token to your /api/verify-bot to validate server-side if needed
          setSecurityStatus("Secure connection established.")
        }
      } catch (error) {
        setSecurityStatus("Security check failed.")
      }
    }
    verifyHumanity()
  }, [executeRecaptcha])

  return (
    <main className="relative h-screen w-full overflow-hidden bg-slate-50 selection:bg-blue-600/20">
      
      {/* 3D WebGL Background Layer */}
      <div className="absolute inset-0 z-0">
        <DynamicCanvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Scene3D />
        </DynamicCanvas>
      </div>

      {/* HTML DOM Overlay Layer (Passes security status to the UI) */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <UIOverlay securityStatus={securityStatus} />
      </div>

    </main>
  )
}