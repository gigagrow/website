'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Award, Users, Zap } from 'lucide-react'
import AnimatedButton from './animated-button'
import EnhancedTimeline from './enhanced-timeline'
import Link from 'next/link'

export default function AboutUs() {
  const values = [
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable outcomes that directly impact your revenue and growth.',
      color: 'from-blue-500/20 to-blue-600/10',
      borderColor: 'border-blue-500/20',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborative',
      description: 'Your success is our success. We work closely with you as true partners every step of the way.',
      color: 'from-purple-500/20 to-purple-600/10',
      borderColor: 'border-purple-500/20',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we create and deliver.',
      color: 'from-pink-500/20 to-pink-600/10',
      borderColor: 'border-pink-500/20',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We leverage cutting-edge technologies and strategies to keep your business ahead.',
      color: 'from-cyan-500/20 to-cyan-600/10',
      borderColor: 'border-cyan-500/20',
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background shapes */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Building Digital{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              At GigaGrowth Web Solutions, we transform ambitious ideas into powerful digital experiences that drive
              measurable business growth. Since 2015, we've partnered with 200+ businesses to create exceptional digital
              solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              These principles guide every decision we make and every project we undertake
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${value.color} border ${value.borderColor} rounded-xl p-8 hover:border-opacity-40 transition-all duration-300`}
              >
                <div className="text-blue-400 mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <EnhancedTimeline />
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-10 hover:border-blue-500/40 transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To empower businesses of all sizes with cutting-edge digital solutions that drive meaningful growth,
                increase profitability, and create lasting competitive advantages in their markets.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-10 hover:border-purple-500/40 transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To be the trusted partner of choice for businesses seeking to transform their digital presence, known
                for innovation, reliability, and delivering exceptional results that exceed expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Grow Together?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how GigaGrowth can help you achieve your digital goals and accelerate your business growth.
            </p>
            <Link href="/get-started">
              <AnimatedButton size="lg" className="bg-white text-black hover:bg-gray-100">
                Start Your Project
              </AnimatedButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
