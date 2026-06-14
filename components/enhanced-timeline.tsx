'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Zap, Users, Rocket, Target, Globe, Award } from 'lucide-react'

interface TimelineEvent {
  year: string
  title: string
  description: string
  milestone: string
  icon: React.ReactNode
}

const events: TimelineEvent[] = [
  {
    year: '2015',
    title: 'Foundation',
    description: 'GigaGrowth Web Solutions was founded with a vision to revolutionize digital solutions.',
    milestone: 'Started with 3 co-founders',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    year: '2017',
    title: 'First Major Win',
    description: 'Delivered our first enterprise-level project that transformed a retail business.',
    milestone: '50+ projects delivered',
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    year: '2019',
    title: 'Team Expansion',
    description: 'Grew our team to 25+ specialists across design, development, and strategy.',
    milestone: '25-person team',
    icon: <Users className="w-6 h-6" />,
  },
  {
    year: '2021',
    title: 'Market Recognition',
    description: 'Won multiple industry awards for innovation and client satisfaction.',
    milestone: '5 industry awards',
    icon: <Award className="w-6 h-6" />,
  },
  {
    year: '2023',
    title: 'Global Reach',
    description: 'Expanded operations to serve clients across 15 countries worldwide.',
    milestone: '200+ happy clients',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    year: '2024',
    title: 'Innovation Leader',
    description: 'Established ourselves as thought leaders in web development and digital strategy.',
    milestone: '$5M+ in client revenue generated',
    icon: <Target className="w-6 h-6" />,
  },
]

export default function EnhancedTimeline() {
  const { ref, inView } = useInView({ threshold: 0.1, once: false })

  return (
    <div className="w-full py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20" ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Our Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            From a small startup to an industry leader in digital transformation
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central line - animated */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"
            initial={{ height: 0, top: 0 }}
            animate={inView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            style={{ minHeight: `${events.length * 300}px` }}
          />

          {/* Timeline events */}
          <div className="space-y-24">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content - Left/Right alternating */}
                <div className="w-1/2">
                  <motion.div
                    whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                    className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 rounded-xl p-8 hover:border-gray-600 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-blue-400">{event.icon}</div>
                      <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-400 mb-4">{event.description}</p>
                    <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30">
                      {event.milestone}
                    </div>
                  </motion.div>
                </div>

                {/* Center dot - animated */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  className="w-1/2 flex justify-center"
                >
                  <motion.div
                    animate={inView ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-black flex items-center justify-center shadow-lg shadow-blue-500/50"
                  >
                    <div className="w-6 h-6 bg-black rounded-full" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { label: '200+', description: 'Happy Clients' },
            { label: '500+', description: 'Projects Delivered' },
            { label: '15+', description: 'Countries Served' },
            { label: '$5M+', description: 'Client Revenue Generated' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 text-center hover:border-blue-500/40 transition-all duration-300"
            >
              <motion.h4
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 + 0.7 }}
                className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
              >
                {stat.label}
              </motion.h4>
              <p className="text-gray-400 font-medium">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
