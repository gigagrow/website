"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import AnimatedButton from "./animated-button"

export default function PortfolioDetail({ project }: { project: any }) {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/portfolio" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">{project.title}</h1>
          <p className="text-xl text-gray-400 max-w-3xl">{project.description}</p>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 rounded-2xl overflow-hidden border border-gray-800"
        >
          <img src={project.image} alt={project.title} className="w-full h-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {project.fullDescription || project.description}
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3 mb-12">
                {project.technologies.map((tech: string) => (
                  <span key={tech} className="px-4 py-2 bg-gray-900 border border-gray-800 text-gray-300 rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
              <ul className="space-y-3 mb-8">
                {(project.features || [
                  "Responsive Design",
                  "Performance Optimized",
                  "User-Friendly Interface",
                  "Scalable Architecture",
                ]).map((feature: string, i: number) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-1"
          >
            {/* Results */}
            <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-white mb-6">Results</h3>
              <div className="space-y-4">
                {project.results.map((result: string, i: number) => (
                  <div key={i}>
                    <p className="text-gray-300 text-sm">{result}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link href="/get-started" className="block">
              <AnimatedButton size="lg" className="w-full bg-white text-black hover:bg-gray-100">
                Get Started
              </AnimatedButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
