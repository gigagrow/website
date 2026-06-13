'use client'

import { motion } from 'framer-motion'
import { CheckCircle, TrendingUp } from 'lucide-react'
import Image from 'next/image'

interface IndustryTestimonial {
  company: string
  role: string
  quote: string
  result: string
}

interface IndustrySolution {
  title: string
  description: string
  benefits: string[]
}

interface IndustryDetailProps {
  title: string
  description: string
  icon: React.ReactNode
  coverImage: string
  solutions: IndustrySolution[]
  testimonials: IndustryTestimonial[]
  keyStats: { label: string; value: string }[]
}

export default function IndustryDetail({
  title,
  description,
  icon,
  coverImage,
  solutions,
  testimonials,
  keyStats,
}: IndustryDetailProps) {
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
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl text-blue-400">{icon}</div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">{title}</h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">{description}</p>
              <a href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Consulting
              </a>
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

      {/* Key Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {keyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How We Help {title}</h2>
            <p className="text-xl text-gray-400">Tailored solutions for your industry's unique needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-blue-500 transition-colors"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <div className="space-y-2">
                  {solution.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-gray-400">See how we've helped {title.toLowerCase()} businesses succeed</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-8"
              >
                <div className="mb-4">
                  <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-2 text-green-400 font-semibold">
                    <TrendingUp className="w-5 h-5" />
                    {testimonial.result}
                  </div>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-semibold text-white">{testimonial.company}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Transform Your {title} Business?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our solutions can help your business grow
          </p>
          <a href="/contact" className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  )
}
