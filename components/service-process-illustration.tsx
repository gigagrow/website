'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

interface ProcessStep {
  number: number
  title: string
  description: string
}

interface ServiceProcessIllustrationProps {
  steps: ProcessStep[]
  serviceType: 'marketing' | 'branding' | 'development' | 'seo' | 'content' | 'pr'
}

const gradientMap = {
  marketing: 'from-blue-500 to-cyan-500',
  branding: 'from-purple-500 to-pink-500',
  development: 'from-green-500 to-emerald-500',
  seo: 'from-orange-500 to-red-500',
  content: 'from-indigo-500 to-blue-500',
  pr: 'from-rose-500 to-pink-500',
}

export default function ServiceProcessIllustration({
  steps,
  serviceType,
}: ServiceProcessIllustrationProps) {
  const { ref, inView } = useInView({ threshold: 0.2, once: true })
  const gradientClass = gradientMap[serviceType]

  return (
    <div ref={ref} className="w-full">
      <div className="max-w-5xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-6 gap-3 items-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${gradientClass} flex items-center justify-center text-white font-bold text-xl shadow-lg`}
              >
                {step.number}
              </motion.div>
              <p className="text-sm font-semibold text-white mt-3 text-center">{step.title}</p>
              <p className="text-xs text-gray-400 text-center mt-2">{step.description}</p>
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className={`absolute left-full w-12 h-1 bg-gradient-to-r ${gradientClass} origin-left`}
                  style={{ top: '32px', marginLeft: '24px' }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`w-14 h-14 rounded-full bg-gradient-to-br ${gradientClass} flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg`}
              >
                {step.number}
              </motion.div>
              <div className="pt-1">
                <p className="text-sm font-semibold text-white">{step.title}</p>
                <p className="text-xs text-gray-400 mt-1">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className={`absolute left-7 top-14 w-1 h-8 bg-gradient-to-b ${gradientClass} origin-top`}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
