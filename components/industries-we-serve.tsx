"use client"

import { motion } from "framer-motion"
import { Building2, ShoppingCart, Stethoscope, BookOpen, UtensilsCrossed, Hammer, Briefcase, Zap } from "lucide-react"
import Link from "next/link"
import AnimatedButton from "./animated-button"

export default function IndustriesWeServe() {
  const industries = [
    {
      title: "E-Commerce",
      slug: "e-commerce",
      description: "Custom online stores with payment processing, inventory management, and conversion optimization.",
      icon: <ShoppingCart className="w-12 h-12" />,
      color: "blue",
      benefits: ["Online Store Setup", "Payment Integration", "Inventory System", "Customer Analytics"],
    },
    {
      title: "Healthcare",
      slug: "healthcare",
      description: "HIPAA-compliant websites for medical practices, clinics, and health professionals.",
      icon: <Stethoscope className="w-12 h-12" />,
      color: "green",
      benefits: ["Appointment Booking", "Patient Portal", "Secure Records", "Compliance Ready"],
    },
    {
      title: "Real Estate",
      slug: "real-estate",
      description: "Property showcase websites with virtual tours, listings, and lead management systems.",
      icon: <Building2 className="w-12 h-12" />,
      color: "purple",
      benefits: ["Property Listings", "Virtual Tours", "Lead Management", "CRM Integration"],
    },
    {
      title: "Education",
      slug: "education",
      description: "Learning management systems and educational websites for schools and online courses.",
      icon: <BookOpen className="w-12 h-12" />,
      color: "orange",
      benefits: ["Course Management", "Student Portals", "Enrollment System", "Progress Tracking"],
    },
    {
      title: "Restaurants & Hospitality",
      slug: "restaurants-hospitality",
      description: "Reservation systems, menus, and online ordering platforms for food businesses.",
      icon: <UtensilsCrossed className="w-12 h-12" />,
      color: "red",
      benefits: ["Online Ordering", "Reservations", "Menu Management", "Delivery Integration"],
    },
    {
      title: "Construction & Trades",
      slug: "construction-trades",
      description: "Portfolio websites and project management tools for contractors and construction companies.",
      icon: <Hammer className="w-12 h-12" />,
      color: "yellow",
      benefits: ["Project Portfolio", "Service Catalog", "Estimate Tools", "Client Testimonials"],
    },
    {
      title: "Professional Services",
      slug: "professional-services",
      description: "Consulting, accounting, and legal firm websites that build trust and attract clients.",
      icon: <Briefcase className="w-12 h-12" />,
      color: "indigo",
      benefits: ["Team Profiles", "Case Studies", "Appointment Booking", "Secure Communications"],
    },
    {
      title: "Manufacturing & Industry",
      slug: "manufacturing",
      description: "B2B websites showcasing products, capabilities, and technical specifications.",
      icon: <Zap className="w-12 h-12" />,
      color: "cyan",
      benefits: ["Product Showcase", "Technical Specs", "Supply Chain", "B2B Integration"],
    },
  ]

  const getColorClasses = (color: string) => {
    const colors: Record<string, any> = {
      blue: { text: "text-blue-400", border: "border-blue-500/30", bg: "bg-blue-500/10", hover: "hover:border-blue-400/50" },
      green: { text: "text-green-400", border: "border-green-500/30", bg: "bg-green-500/10", hover: "hover:border-green-400/50" },
      purple: { text: "text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/10", hover: "hover:border-purple-400/50" },
      orange: { text: "text-orange-400", border: "border-orange-500/30", bg: "bg-orange-500/10", hover: "hover:border-orange-400/50" },
      red: { text: "text-red-400", border: "border-red-500/30", bg: "bg-red-500/10", hover: "hover:border-red-400/50" },
      yellow: { text: "text-yellow-400", border: "border-yellow-500/30", bg: "bg-yellow-500/10", hover: "hover:border-yellow-400/50" },
      indigo: { text: "text-indigo-400", border: "border-indigo-500/30", bg: "bg-indigo-500/10", hover: "hover:border-indigo-400/50" },
      cyan: { text: "text-cyan-400", border: "border-cyan-500/30", bg: "bg-cyan-500/10", hover: "hover:border-cyan-400/50" },
    }
    return colors[color] || colors.blue
  }

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Industries We Serve</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From e-commerce to healthcare, we have the expertise to build solutions for any industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const colors = getColorClasses(industry.color)
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`bg-gray-900/30 border ${colors.border} rounded-2xl p-6 backdrop-blur-sm ${colors.hover} transition-all duration-300 group`}
              >
                <div className={`${colors.text} mb-4`}>{industry.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{industry.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{industry.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {industry.benefits.slice(0, 3).map((benefit) => (
                    <li key={benefit} className="text-xs text-gray-500">
                      ✓ {benefit}
                    </li>
                  ))}
                </ul>

                <Link href={`/industries/${industry.slug}`}>
                  <button className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center group/link">
                    Learn More
                    <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">→</span>
                  </button>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gray-900/30 border border-gray-800 rounded-3xl p-12 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">Don&apos;t See Your Industry?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              We work with businesses across all industries. Contact us today to discuss your unique needs and how we can help your business grow online.
            </p>
            <Link href="/contact">
              <AnimatedButton className="bg-white text-black">Get In Touch</AnimatedButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
