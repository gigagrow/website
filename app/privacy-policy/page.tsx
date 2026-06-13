import Navbar from "@/components/navbar"
import AnimatedFooter from "@/components/animated-footer"
import { motion } from "framer-motion"

export const metadata = {
  title: "Privacy Policy | GigaGrowth Web Solutions",
  description: "Learn how GigaGrowth Web Solutions collects, uses, and protects your personal information.",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-400 text-lg">Last Updated: June 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-invert max-w-none space-y-8"
          >
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                GigaGrowth Web Solutions (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the gigagrowthwebsolutions.com website (the &ldquo;Service&rdquo;). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Information Collection and Use</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
              <h3 className="text-xl font-semibold text-white mb-3">Types of Data Collected:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Company name and industry</li>
                <li>Website URL (if applicable)</li>
                <li>Usage Data (pages visited, time spent, etc.)</li>
                <li>Cookie and tracking data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Use of Data</h2>
              <p className="text-gray-300 leading-relaxed mb-4">GigaGrowth Web Solutions uses the collected data for various purposes:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features</li>
                <li>To provide customer support and respond to inquiries</li>
                <li>To gather analysis or valuable information to improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To send promotional emails and updates (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Security of Data</h2>
              <p className="text-gray-300 leading-relaxed">
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 mt-4 text-gray-300">
                <p>Email: <a href="mailto:info@gigagrowthwebsolutions.com" className="text-blue-400 hover:text-blue-300">info@gigagrowthwebsolutions.com</a></p>
                <p>Phone: <a href="tel:+19292209371" className="text-blue-400 hover:text-blue-300">+1 (929) 220-9371</a></p>
                <p>Address: Lakeland, Miami</p>
              </div>
            </section>
          </motion.div>
        </div>
      </main>

      <AnimatedFooter />
    </div>
  )
}
