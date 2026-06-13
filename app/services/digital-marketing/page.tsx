'use client'

import BackgroundStripes from "@/components/background-stripes"
import AnimatedBackground from "@/components/animated-background"
import Navbar from "@/components/navbar"
import ServiceDetailEnhanced from "@/components/service-detail-enhanced"
import AnimatedFooter from "@/components/animated-footer"
import BackgroundPaths from "@/components/background-paths"
import { Target, BarChart3, Mail, Share2, Lightbulb, TrendingUp } from "lucide-react"

export default function DigitalMarketingPage() {
  const steps = [
    {
      number: 1,
      title: "Audit & Analysis",
      description: "We analyze your current digital presence and competitive landscape.",
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
    },
    {
      number: 2,
      title: "Strategy Development",
      description: "Create a customized marketing strategy aligned with your business goals.",
      icon: <Target className="w-8 h-8 text-purple-400" />,
    },
    {
      number: 3,
      title: "Campaign Setup",
      description: "Launch targeted campaigns across multiple channels.",
      icon: <Share2 className="w-8 h-8 text-pink-400" />,
    },
    {
      number: 4,
      title: "Content Creation",
      description: "Develop engaging content that resonates with your audience.",
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
    },
    {
      number: 5,
      title: "Monitoring & Optimization",
      description: "Track performance and continuously optimize campaigns.",
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
    },
    {
      number: 6,
      title: "Reporting",
      description: "Provide detailed reports showing ROI and campaign performance.",
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
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
          title="Digital Marketing"
          description="Data-driven marketing campaigns that reach your target audience and drive conversions. From social media to email marketing, we execute strategies that deliver measurable results."
          shortDescription="Targeted Campaigns That Drive Growth"
          coverImage="/placeholder.svg?height=400&width=600"
          steps={steps}
          benefits={[
            "Targeted campaigns reach the right audience",
            "Data-driven strategies increase ROI",
            "Multi-channel approach maximizes reach",
            "Continuous optimization improves performance",
            "Transparent reporting shows real results",
            "Expert team stays updated with trends",
            "Cost-effective marketing solutions",
            "Proven track record of success",
          ]}
          features={[
            "Social Media Marketing & Management",
            "Google Ads & PPC Campaigns",
            "Email Marketing Campaigns",
            "Content Marketing Strategy",
            "SEO & Organic Traffic Growth",
            "Analytics & Performance Tracking",
            "A/B Testing & Optimization",
            "Monthly Reports & Insights",
          ]}
        />
        <AnimatedFooter />
      </div>
    </div>
  )
}
