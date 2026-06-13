import Navbar from "@/components/navbar"
import AboutUs from "@/components/about-us"
import AnimatedFooter from "@/components/animated-footer"

export const metadata = {
  title: "About Us | GigaGrowth Web Solutions",
  description: "Learn about GigaGrowth Web Solutions, our mission, values, and journey to becoming a trusted web development partner.",
}

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <AboutUs />
      <AnimatedFooter />
    </div>
  )
}
