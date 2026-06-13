import PortfolioDetail from "@/components/portfolio-detail"
import Navbar from "@/components/navbar"
import AnimatedFooter from "@/components/animated-footer"

const portfolioProjects = [
  {
    id: 1,
    slug: "ecommerce-platform",
    title: "E-Commerce Platform Redesign",
    description: "Complete redesign and development of a high-traffic e-commerce platform, increasing conversion by 45%.",
    fullDescription:
      "This project involved a complete overhaul of an existing e-commerce platform for a leading online retailer. We redesigned the user interface, optimized the checkout process, and implemented advanced personalization features. The result was a 45% increase in conversion rates and a 60% boost in average order value.",
    category: "ecommerce",
    image: "/placeholder.svg?height=600&width=1000",
    technologies: ["Next.js", "React", "Stripe", "Tailwind CSS", "PostgreSQL", "Redis"],
    results: ["+45% Conversion Rate", "+60% Average Order Value", "-2s Load Time"],
    features: [
      "Personalized product recommendations",
      "One-click checkout process",
      "Real-time inventory management",
      "Advanced analytics dashboard",
      "Mobile-optimized experience",
      "Payment integration with Stripe",
    ],
  },
  {
    id: 2,
    slug: "restaurant-management",
    title: "Restaurant Chain Management System",
    description: "Custom web application for managing multiple restaurant locations with inventory, scheduling, and analytics.",
    fullDescription:
      "We developed a comprehensive management system for a restaurant chain with 30+ locations. The platform provides real-time inventory tracking, staff scheduling, and detailed analytics across all locations.",
    category: "web",
    image: "/placeholder.svg?height=600&width=1000",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "React", "TailwindCSS"],
    results: ["30+ Locations", "Real-time Analytics", "Staff Management"],
    features: [
      "Multi-location management",
      "Real-time inventory tracking",
      "Employee scheduling system",
      "Sales analytics and reporting",
      "POS integration",
      "Customer loyalty program",
    ],
  },
  {
    id: 3,
    slug: "healthcare-portal",
    title: "Healthcare Provider Portal",
    description: "Secure patient portal with appointment booking, medical records, and telemedicine integration.",
    fullDescription:
      "A HIPAA-compliant patient portal that enables secure communication between healthcare providers and patients. Features include appointment scheduling, medical records access, prescription management, and integrated telemedicine capabilities.",
    category: "web",
    image: "/placeholder.svg?height=600&width=1000",
    technologies: ["React", "HIPAA Compliant", "AWS", "Node.js", "MongoDB"],
    results: ["500+ Active Users", "HIPAA Certified", "98% Uptime"],
    features: [
      "Secure patient authentication",
      "Appointment booking system",
      "Medical records access",
      "Telemedicine integration",
      "Prescription management",
      "Encrypted messaging",
    ],
  },
  {
    id: 4,
    slug: "saas-dashboard",
    title: "SaaS Dashboard Application",
    description: "Complete analytics dashboard for B2B SaaS company with real-time data visualization and reporting.",
    fullDescription:
      "A comprehensive analytics platform for a B2B SaaS company with over 10,000 active users. The dashboard provides real-time data visualization, custom reporting, and advanced analytics capabilities.",
    category: "web",
    image: "/placeholder.svg?height=600&width=1000",
    technologies: ["Next.js", "Charts.js", "WebSockets", "PostgreSQL", "TypeScript"],
    results: ["10K+ Users", "$2M ARR", "Real-time Analytics"],
    features: [
      "Real-time data visualization",
      "Custom report generation",
      "Advanced filtering and sorting",
      "User role management",
      "API integration",
      "Data export capabilities",
    ],
  },
  {
    id: 5,
    slug: "fitness-mobile-app",
    title: "Mobile App Development",
    description: "Cross-platform mobile app for fitness tracking with social features and AI-powered recommendations.",
    fullDescription:
      "A feature-rich fitness tracking application available on iOS and Android with 50,000+ downloads. The app includes workout tracking, nutrition logging, social challenges, and AI-powered personalized recommendations.",
    category: "mobile",
    image: "/placeholder.svg?height=600&width=1000",
    technologies: ["React Native", "Firebase", "ML Kit", "Node.js", "MongoDB"],
    results: ["50K Downloads", "4.8 Star Rating", "100K+ Active Users"],
    features: [
      "Workout tracking and logging",
      "Nutrition tracking",
      "Social features and challenges",
      "AI-powered recommendations",
      "Wearable device integration",
      "Progress analytics",
    ],
  },
  {
    id: 6,
    slug: "brand-identity",
    title: "Brand Identity Design",
    description: "Complete brand identity system including logo, color palette, typography, and brand guidelines.",
    fullDescription:
      "A comprehensive brand identity system created for a growing technology startup. This included logo design, color palette development, typography selection, and detailed brand guidelines.",
    category: "branding",
    image: "/placeholder.svg?height=600&width=1000",
    technologies: ["Figma", "Adobe Suite", "Design Systems"],
    results: ["Complete Brand System", "Brand Guidelines", "Marketing Assets"],
    features: [
      "Logo design and variations",
      "Color palette development",
      "Typography guidelines",
      "Brand guidelines documentation",
      "Marketing asset templates",
      "Social media kit",
    ],
  },
]

export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  const project = portfolioProjects.find((p) => p.slug === params.slug)

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <a href="/portfolio" className="text-blue-400 hover:text-blue-300">
            Back to Portfolio
          </a>
        </div>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <PortfolioDetail project={project} />
      <AnimatedFooter />
    </>
  )
}
