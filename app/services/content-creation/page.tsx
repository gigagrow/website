'use client'

import BackgroundStripes from "@/components/background-stripes"
import AnimatedBackground from "@/components/animated-background"
import Navbar from "@/components/navbar"
import ServiceDetailEnhanced from "@/components/service-detail-enhanced"
import AnimatedFooter from "@/components/animated-footer"
import BackgroundPaths from "@/components/background-paths"
import { PenTool, Video, Camera, Lightbulb, BarChart3, Share2 } from "lucide-react"

export default function ContentCreationPage() {
  const steps = [
    {
      number: 1,
      title: "Content Strategy",
      description: "Develop a content calendar aligned with your business goals.",
      icon: <Lightbulb className="w-8 h-8 text-blue-400" />,
    },
    {
      number: 2,
      title: "Content Planning",
      description: "Plan topics, formats, and publishing schedule.",
      icon: <PenTool className="w-8 h-8 text-purple-400" />,
    },
    {
      number: 3,
      title: "Content Creation",
      description: "Write, film, and design high-quality content.",
      icon: <Video className="w-8 h-8 text-pink-400" />,
    },
    {
      number: 4,
      title: "SEO Optimization",
      description: "Optimize content for search engines and readability.",
      icon: <BarChart3 className="w-8 h-8 text-yellow-400" />,
    },
    {
      number: 5,
      title: "Publishing",
      description: "Publish and distribute across relevant channels.",
      icon: <Share2 className="w-8 h-8 text-green-400" />,
    },
    {
      number: 6,
      title: "Analysis & Optimization",
      description: "Track performance and optimize based on data.",
      icon: <Camera className="w-8 h-8 text-blue-400" />,
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
          title="Content Creation"
          description="Engage your audience with compelling content across all formats. From blog posts to videos, we create content that drives traffic and builds authority."
          shortDescription="Content That Drives Engagement"
          coverImage="/placeholder.svg?height=400&width=600"
          steps={steps}
          benefits={[
            "Establish thought leadership in your industry",
            "Engage and educate your target audience",
            "Boost SEO with fresh, relevant content",
            "Build trust and credibility",
            "Drive traffic and leads consistently",
            "Support your sales and marketing efforts",
            "Cost-effective long-term marketing",
            "Multi-format approach reaches more people",
          ]}
          features={[
            "Blog Posts & Articles Writing",
            "Video Content Production",
            "Photography & Image Design",
            "Social Media Content Creation",
            "Email Newsletter Creation",
            "Infographics & Data Visualization",
            "Content Calendar Management",
            "Performance Analytics & Reporting",
          ]}
        />
        <AnimatedFooter />
      </div>
    </div>
  )
}
