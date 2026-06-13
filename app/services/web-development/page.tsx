'use client'

import BackgroundStripes from "@/components/background-stripes"
import AnimatedBackground from "@/components/animated-background"
import Navbar from "@/components/navbar"
import ServiceDetailEnhanced from "@/components/service-detail-enhanced"
import AnimatedFooter from "@/components/animated-footer"
import BackgroundPaths from "@/components/background-paths"
import { Code, Smartphone, Zap, Lock, Search, Palette } from "lucide-react"

export default function WebDevelopmentPage() {
  const steps = [
    {
      number: 1,
      title: "Discovery & Strategy",
      description: "We understand your business goals, target audience, and competitive landscape.",
      icon: <Search className="w-8 h-8 text-blue-400" />,
    },
    {
      number: 2,
      title: "Design & Wireframing",
      description: "Create wireframes and designs that reflect your brand and engage users.",
      icon: <Palette className="w-8 h-8 text-purple-400" />,
    },
    {
      number: 3,
      title: "Development",
      description: "Build your website with clean, efficient code and best practices.",
      icon: <Code className="w-8 h-8 text-blue-400" />,
    },
    {
      number: 4,
      title: "Optimization",
      description: "Optimize for performance, SEO, and search engine rankings.",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
    },
    {
      number: 5,
      title: "Testing",
      description: "Rigorous QA testing across devices and browsers.",
      icon: <Smartphone className="w-8 h-8 text-green-400" />,
    },
    {
      number: 6,
      title: "Launch & Support",
      description: "Deploy your site and provide ongoing maintenance and support.",
      icon: <Lock className="w-8 h-8 text-red-400" />,
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
          title="Web Development"
          description="Custom websites built for performance, conversions, and growth. From simple business sites to complex e-commerce platforms, we create digital solutions that drive real business results."
          shortDescription="Custom Websites Built for Performance & Conversions"
          coverImage="/placeholder.svg?height=400&width=600"
          steps={steps}
          benefits={[
            "Mobile-responsive design that works on all devices",
            "Lightning-fast page speeds for better user experience",
            "SEO optimized from the ground up",
            "Secure with SSL and regular backups",
            "Easy-to-update content management system",
            "High conversion rates through UX optimization",
            "Scalable architecture for future growth",
            "Ongoing support and maintenance included",
          ]}
          features={[
            "Custom Website Design tailored to your brand",
            "Responsive Development for all screen sizes",
            "E-commerce Solutions with payment processing",
            "Content Management System for easy updates",
            "Performance Optimization for fast loading",
            "SEO Setup with technical optimization",
            "Security & SSL Certificates",
            "Hosting & Maintenance Support",
          ]}
        />
        <AnimatedFooter />
      </div>
    </div>
  )
}
