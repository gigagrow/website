'use client'

import BackgroundStripes from "@/components/background-stripes"
import AnimatedBackground from "@/components/animated-background"
import Navbar from "@/components/navbar"
import ServiceDetailEnhanced from "@/components/service-detail-enhanced"
import AnimatedFooter from "@/components/animated-footer"
import BackgroundPaths from "@/components/background-paths"
import { Megaphone, Users, FileText, Star, TrendingUp, Radio } from "lucide-react"

export default function PublicRelationsPage() {
  const steps = [
    {
      number: 1,
      title: "PR Strategy Development",
      description: "Create a comprehensive PR strategy aligned with business goals.",
      icon: <Megaphone className="w-8 h-8 text-blue-400" />,
    },
    {
      number: 2,
      title: "Media Relations",
      description: "Build relationships with journalists and media outlets.",
      icon: <Radio className="w-8 h-8 text-purple-400" />,
    },
    {
      number: 3,
      title: "Press Release Creation",
      description: "Craft compelling press releases that grab media attention.",
      icon: <FileText className="w-8 h-8 text-pink-400" />,
    },
    {
      number: 4,
      title: "Media Pitching",
      description: "Pitch stories to relevant media outlets and journalists.",
      icon: <Users className="w-8 h-8 text-yellow-400" />,
    },
    {
      number: 5,
      title: "Crisis Management",
      description: "Manage and mitigate potential PR issues.",
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
    },
    {
      number: 6,
      title: "Coverage Tracking",
      description: "Monitor and report on PR coverage and impact.",
      icon: <Star className="w-8 h-8 text-blue-400" />,
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
          title="Public Relations"
          description="Build brand authority and manage your reputation through strategic PR. From media relations to crisis management, we handle all aspects of public relations."
          shortDescription="Build Authority & Manage Your Reputation"
          coverImage="/placeholder.svg?height=400&width=600"
          steps={steps}
          benefits={[
            "Increase brand visibility and awareness",
            "Build credibility through media coverage",
            "Generate earned media value",
            "Strengthen stakeholder relationships",
            "Manage brand reputation proactively",
            "Crisis management and response",
            "Third-party validation and endorsements",
            "Competitive advantage in your industry",
          ]}
          features={[
            "PR Strategy & Planning",
            "Media Relations & Outreach",
            "Press Release Writing & Distribution",
            "Media Kit Development",
            "Crisis Management & Communications",
            "Influencer & Partnership Development",
            "Event Coordination & Coverage",
            "Media Coverage Tracking & Reports",
          ]}
        />
        <AnimatedFooter />
      </div>
    </div>
  )
}
