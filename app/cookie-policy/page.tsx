import Navbar from "@/components/navbar"
import AnimatedFooter from "@/components/animated-footer"
import { motion } from "framer-motion"

export const metadata = {
  title: "Cookie Policy | GigaGrowth Web Solutions",
  description: "Learn about how GigaGrowth Web Solutions uses cookies and similar technologies.",
}

export default function CookiePolicy() {
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
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Cookie Policy</h1>
            <p className="text-gray-400 text-lg">Last Updated: June 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-invert max-w-none space-y-8"
          >
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
              <p className="text-gray-300 leading-relaxed">
                Cookies are small pieces of data stored on your browser or device. They help websites recognize your device and remember information about your visit. This Cookie Policy explains how GigaGrowth Web Solutions uses cookies and similar technologies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Essential Cookies</h3>
              <p className="text-gray-300 leading-relaxed">
                These cookies are necessary for the website to function properly and enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Analytics Cookies</h3>
              <p className="text-gray-300 leading-relaxed">
                We use analytics cookies to understand how you interact with our website. This helps us improve our services and user experience. These cookies collect information such as the number of visitors, pages viewed, and time spent on pages.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Functional Cookies</h3>
              <p className="text-gray-300 leading-relaxed">
                These cookies remember your preferences and choices to provide a more personalized experience. For example, they may remember your language preferences or display settings.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Marketing Cookies</h3>
              <p className="text-gray-300 leading-relaxed">
                We may use marketing cookies to deliver personalized advertisements and track the effectiveness of our marketing campaigns. These cookies may be shared with third-party partners for advertising purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
              <p className="text-gray-300 leading-relaxed">
                We may allow third-party service providers to place cookies on your device to help us deliver better services, including analytics, customer service, and marketing. These third parties have their own cookie policies and we are not responsible for their practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>View what cookies are set on your device</li>
                <li>Delete cookies from your browser</li>
                <li>Block cookies from specific websites</li>
                <li>Block all third-party cookies</li>
                <li>Enable private browsing to prevent cookies from being stored</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Please note that disabling cookies may affect the functionality of our website and your user experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Do Not Track</h2>
              <p className="text-gray-300 leading-relaxed">
                Some browsers include a &ldquo;Do Not Track&rdquo; feature. Currently, there is no industry standard for recognizing DNT signals, and GigaGrowth Web Solutions does not respond to DNT browser signals. However, you can use other tools to control tracking and cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices, technology, or other factors. We will notify you of any material changes by updating the &ldquo;Last Updated&rdquo; date above.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this Cookie Policy, please contact us at:
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
