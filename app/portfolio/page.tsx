"use client"

import { useEffect } from "react"
import BackgroundStripes from "@/components/background-stripes"
import AnimatedBackground from "@/components/animated-background"
import Navbar from "@/components/navbar"
import Portfolio from "@/components/portfolio"
import AnimatedFooter from "@/components/animated-footer"
import BackgroundPaths from "@/components/background-paths"

export default function PortfolioPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen bg-black">
      <BackgroundPaths />
      <AnimatedBackground />
      <BackgroundStripes />

      <div className="relative z-10">
        <Navbar />
        <Portfolio />
        <AnimatedFooter />
      </div>
    </div>
  )
}
