import BackgroundStripes from "@/components/background-stripes"
import AnimatedBackground from "@/components/animated-background"
import Navbar from "@/components/navbar"
import AnimatedFooter from "@/components/animated-footer"
import IndustriesWeServe from "@/components/industries-we-serve"
import BackgroundPaths from "@/components/background-paths"

export default function Industries() {
  return (
    <div className="relative min-h-screen bg-black">
      <BackgroundPaths />
      <AnimatedBackground />
      <BackgroundStripes />

      <div className="relative z-10">
        <Navbar />
        <IndustriesWeServe />
        <AnimatedFooter />
      </div>
    </div>
  )
}
