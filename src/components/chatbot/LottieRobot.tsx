'use client'

import React, { useEffect, useState } from 'react'
import { Lottie } from 'lottie-react'
import robotAnimationData from '../../../public/lottie/robot-waving.json'

interface LottieRobotProps {
  className?: string
  width?: number | string
  height?: number | string
}

export default function LottieRobot({ className, width = '100%', height = '100%' }: LottieRobotProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div
        className={`flex items-center justify-center text-3xl select-none ${className || ''}`}
        style={{ width, height }}
      >
        <span className="animate-pulse">🤖</span>
      </div>
    )
  }

  return (
    <div className={`overflow-hidden flex items-center justify-center pointer-events-none select-none ${className || ''}`} style={{ width, height }}>
      <Lottie
        src={robotAnimationData}
        loop={true}
        autoplay={true}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice'
        }}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
