'use client'

import BackgroundStripes from "@/components/background-stripes"
import AnimatedBackground from "@/components/animated-background"
import Navbar from "@/components/navbar"
import ServiceDetailEnhanced from "@/components/service-detail-enhanced"
import AnimatedFooter from "@/components/animated-footer"
import BackgroundPaths from "@/components/background-paths"
import { Search, BarChart3, Zap, LinkIcon, FileText, TrendingUp } from "lucide-react"

export default function SEOPage() {
  const steps = [
    {
      number: 1,
      title: "SEO Audit",
      description: "Comprehensive analysis of your website's SEO performance.",
      icon: <Search className="w-8 h-8 text-blue-400" />,
    },
    {
      number: 2,
      title: "Keyword Research",
      description: "Identify high-value keywords your audience is searching for.",
      icon: <FileText className="w-8 h-8 text-purple-400" />,
    },
    {
      number: 3,
      title: "On-Page Optimization",
      description: "Optimize content, meta tags, and page structure.",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
    },
    {
      number: 4,
      title: "Technical SEO",
      description: "Fix crawlability, speed, and indexation issues.",
      icon: <Search className="w-8 h-8 text-green-400" />,
    },
    {
      number: 5,
      title: "Link Building",
      description: "Build high-quality backlinks from authoritative sites.",
      icon: <LinkIcon className="w-8 h-8 text-pink-400" />,
    },
    {
      number: 6,
      title: "Monitoring & Reporting",
      description: "Track rankings and provide monthly performance reports.",
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
          title="SEO & Analytics"
          description="Increase organic traffic and improve search rankings with comprehensive SEO strategy. We combine technical optimization with content strategy for sustainable growth."
          shortDescription="Rank Higher in Search Results"
          coverImage="/placeholder.svg?height=400&width=600"
          steps={steps}
          benefits={[
            "Increase organic traffic from search engines",
            "Sustainable long-term growth",
            "Targeted traffic from high-intent keywords",
            "Competitive advantage in your industry",
            "Cost-effective compared to paid ads",
            "Builds website authority and trust",
            "Improved user experience and engagement",
            "Detailed analytics and reporting",
          ]}
          features={[
            "Technical SEO Audit & Fixes",
            "Keyword Research & Strategy",
            "On-Page Content Optimization",
            "Meta Tags & Schema Markup",
            "Link Building & Backlink Strategy",
            "Local SEO Optimization",
            "Google Analytics Setup",
            "Monthly Ranking & Traffic Reports",
          ]}
        />
        <AnimatedFooter />
      </div>
    </div>
  )
}
