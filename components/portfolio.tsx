"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLink } from "lucide-react"
import AnimatedButton from "./animated-button"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "web", "ecommerce", "mobile", "branding"]

  const projects = [
    {
      id: 1,
      slug: "ecommerce-platform",
      title: "E-Commerce Platform Redesign",
      description: "Complete redesign and development of a high-traffic e-commerce platform, increasing conversion by 45%.",
      category: "ecommerce",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "React", "Stripe", "Tailwind CSS"],
      results: ["+45% Conversion Rate", "+60% Average Order Value", "-2s Load Time"],
    },
    {
      id: 2,
      slug: "restaurant-management",
      title: "Restaurant Chain Management System",
      description: "Custom web application for managing multiple restaurant locations with inventory, scheduling, and analytics.",
      category: "web",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "React"],
      results: ["30+ Locations", "Real-time Analytics", "Staff Management"],
    },
    {
      id: 3,
      slug: "healthcare-portal",
      title: "Healthcare Provider Portal",
      description: "Secure patient portal with appointment booking, medical records, and telemedicine integration.",
      category: "web",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "HIPAA Compliant", "AWS", "Node.js"],
      results: ["500+ Active Users", "HIPAA Certified", "98% Uptime"],
    },
    {
      id: 4,
      slug: "saas-dashboard",
      title: "SaaS Dashboard Application",
      description: "Complete analytics dashboard for B2B SaaS company with real-time data visualization and reporting.",
      category: "web",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "Charts.js", "WebSockets", "PostgreSQL"],
      results: ["10K+ Users", "$2M ARR", "Real-time Analytics"],
    },
    {
      id: 5,
      slug: "fitness-mobile-app",
      title: "Mobile App Development",
      description: "Cross-platform mobile app for fitness tracking with social features and AI-powered recommendations.",
      category: "mobile",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React Native", "Firebase", "ML Kit", "Node.js"],
      results: ["50K Downloads", "4.8 Star Rating", "100K+ Active Users"],
    },
    {
      id: 6,
      slug: "brand-identity",
      title: "Brand Identity Design",
      description: "Complete brand identity system including logo, color palette, typography, and brand guidelines.",
      category: "branding",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Figma", "Adobe Suite", "Design Systems"],
      results: ["Complete Brand System", "Brand Guidelines", "Marketing Assets"],
    },
  ]

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Our Portfolio</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcase of our best work across web development, e-commerce, mobile apps, and brand design
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
                selectedCategory === category
                  ? "bg-white text-black"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-gray-900/30 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-gray-700 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="text-xs">
                      <p className="text-green-400 font-semibold">{result.split(" ")[0]}</p>
                      <p className="text-gray-400 text-xs">{result.split(" ").slice(1).join(" ")}</p>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-100 px-4 py-2 rounded-lg font-medium transition-all"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Stories Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 pt-24 border-t border-gray-800"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Client Success Stories</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how we've helped businesses of all sizes achieve their digital goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO",
                company: "TechStart Inc.",
                testimonial: "GigaGrowth transformed our online presence. Within 3 months, our website traffic increased by 300% and our sales doubled.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Founder",
                company: "FitLife Co.",
                testimonial: "The team delivered an exceptional mobile app that exceeded all expectations. The user feedback has been overwhelming positive.",
                rating: 5,
              },
              {
                name: "Emma Williams",
                role: "Marketing Director",
                company: "BrandNew Agency",
                testimonial: "Their branding and web design work is top-notch. We've won multiple awards since launching our new website.",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm hover:border-gray-700 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.testimonial}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Let's work together to create something amazing for your business
          </p>
          <a href="/contact">
            <AnimatedButton size="lg" className="bg-white text-black hover:bg-gray-100">
              Get Started Today
            </AnimatedButton>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
