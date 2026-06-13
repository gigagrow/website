'use client'

import BackgroundStripes from "@/components/background-stripes"
import AnimatedBackground from "@/components/animated-background"
import Navbar from "@/components/navbar"
import ServiceDetailEnhanced from "@/components/service-detail-enhanced"
import AnimatedFooter from "@/components/animated-footer"
import BackgroundPaths from "@/components/background-paths"
import { Palette, Users, Target, Lightbulb, Zap, CheckCircle } from "lucide-react"

export default function BrandStrategyPage() {
  const steps = [
    {
      number: 1,
      title: "Discovery Workshop",
      description: "Understand your mission, values, and unique selling proposition.",
      icon: <Users className="w-8 h-8 text-blue-400" />,
    },
    {
      number: 2,
      title: "Market Research",
      description: "Analyze your industry, competitors, and target audience.",
      icon: <Target className="w-8 h-8 text-purple-400" />,
    },
    {
      number: 3,
      title: "Brand Strategy",
      description: "Develop your brand positioning, messaging, and personality.",
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
    },
    {
      number: 4,
      title: "Visual Identity",
      description: "Create logo, color palette, and design system.",
      icon: <Palette className="w-8 h-8 text-pink-400" />,
    },
    {
      number: 5,
      title: "Brand Guidelines",
      description: "Document standards for consistent brand implementation.",
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
    },
    {
      number: 6,
      title: "Launch & Rollout",
      description: "Implement brand across all touchpoints.",
      icon: <Zap className="w-8 h-8 text-blue-400" />,
    },
  ]

  return (
    <div className="relative min-h-screen bg-black">
      <BackgroundPaths />
      <AnimatedBackground />
      <BackgroundStripes />

      <div className="relative z-10">
        <Navbar />
        <ServiceDetailEnhanced
          title="Brand Strategy & Identity"
          description="Build a powerful brand that stands out and resonates with your audience. We create complete brand identities from strategy to visual design."
          shortDescription="Create a Brand That Stands Out"
          coverImage="/placeholder.svg?height=400&width=600"
          steps={steps}
          benefits={[
            "Clear brand positioning in your market",
            "Compelling brand story that engages customers",
            "Professional visual identity and logo",
            "Consistent brand messaging across channels",
            "Builds customer trust and loyalty",
            "Differentiates you from competitors",
            "Increases brand value and recognition",
            "Guidelines for consistent implementation",
          ]}
          features={[
            "Logo Design & Visual Identity",
            "Brand Guidelines & Specifications",
            "Brand Voice & Messaging Strategy",
            "Market Positioning Strategy",
            "Competitor Analysis",
            "Color Palette & Typography",
            "Brand Story Development",
            "Launch & Implementation Support",
          ]}
        />
        <AnimatedFooter />
      </div>
    </div>
  )
}
