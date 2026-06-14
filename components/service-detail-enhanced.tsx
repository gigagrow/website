'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import ServiceProcessIllustration from './service-process-illustration'

interface ServiceStep {
  number: number
  title: string
  description: string
  icon: React.ReactNode
}

interface ServiceDetailEnhancedProps {
  title: string
  description: string
  shortDescription: string
  coverImage: string
  steps: ServiceStep[]
  benefits: string[]
  features: string[]
}

function getServiceType(title: string): 'marketing' | 'branding' | 'development' | 'seo' | 'content' | 'pr' {
  if (title.includes('Web Development')) return 'development'
  if (title.includes('Digital Marketing')) return 'marketing'
  if (title.includes('Brand')) return 'branding'
  if (title.includes('SEO')) return 'seo'
  if (title.includes('Content')) return 'content'
  if (title.includes('Relations')) return 'pr'
  return 'marketing'
}

export default function ServiceDetailEnhanced({
  title,
  description,
  shortDescription,
  coverImage,
  steps,
  benefits,
  features,
}: ServiceDetailEnhancedProps) {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">{title}</h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">{description}</p>
              <Link href="/get-started">
                <button className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </button>
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <Image
                src={coverImage}
                alt={title}
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps Section with Interactive Illustration */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-400">Step-by-step approach to delivering exceptional results</p>
          </div>

          <ServiceProcessIllustration 
            steps={steps.map(step => ({
              number: step.number,
              title: step.title,
              description: step.description
            }))}
            serviceType={getServiceType(title)}
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Why Choose This Service</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <ArrowRight className="w-5 h-5 text-blue-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help your business succeed with {title.toLowerCase()}
          </p>
          <Link href="/get-started">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
