"use client"

import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import AnimatedButton from "./animated-button"

export default function ServiceDetail({ service }: { service: any }) {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          href="/services"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
          <div
            className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-${service.color}-500/20 text-${service.color}-400 border border-${service.color}-500/30`}
          >
            {service.title}
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">{service.description}</h1>

          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">{service.fullContent}</p>

          <div className="pt-8 grid md:grid-cols-2 gap-12 border-t border-gray-800">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Key Outcomes</h2>
              <ul className="space-y-4">
                {["Boost Revenue", "Tailored Solutions", "Measurable Results", "Global Scale"].map((item) => (
                  <li key={item} className="flex items-center text-gray-300">
                    <CheckCircle2 className={`mr-3 h-5 w-5 text-${service.color}-400`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-bold text-white mb-4">Ready to grow?</h3>
              <p className="text-gray-400 mb-8">Schedule your consultation today.</p>
              <Link href="/get-started" className="w-full">
                <AnimatedButton className="w-full bg-white text-black">Get Started</AnimatedButton>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
