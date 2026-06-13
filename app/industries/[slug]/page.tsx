'use client'

import { useParams } from 'next/navigation'
import Navbar from '@/components/navbar'
import AnimatedFooter from '@/components/animated-footer'
import IndustryDetail from '@/components/industry-detail'
import { Building2, Hospital, Home, Utensils, Stethoscope, Briefcase, Users, Zap } from 'lucide-react'

const industriesData: Record<string, any> = {
  'e-commerce': {
    title: 'E-Commerce',
    description:
      'Boost your online sales with a powerful e-commerce platform designed to convert visitors into customers. From product catalogs to secure payment processing, we build complete online stores.',
    icon: '🛒',
    coverImage: '/placeholder.svg?height=400&width=600',
    solutions: [
      {
        title: 'Custom Online Store Development',
        description: 'Build a fully functional e-commerce platform optimized for sales and user experience.',
        benefits: [
          'Secure payment processing integration',
          'Inventory management system',
          'Customer account management',
          'Mobile-responsive design',
        ],
      },
      {
        title: 'Performance Optimization',
        description: 'Ensure your store loads fast and converts visitors into buyers.',
        benefits: [
          'Page speed optimization',
          'SEO optimization for product listings',
          'Conversion rate optimization',
          'Analytics and reporting',
        ],
      },
      {
        title: 'Digital Marketing Integration',
        description: 'Drive traffic and increase sales with integrated marketing solutions.',
        benefits: [
          'Email marketing campaigns',
          'Social media integration',
          'Google Ads management',
          'Content marketing strategy',
        ],
      },
      {
        title: 'Customer Support Systems',
        description: 'Keep your customers happy with integrated support solutions.',
        benefits: [
          'Live chat integration',
          'Help desk system',
          'Customer feedback collection',
          'Review management',
        ],
      },
    ],
    testimonials: [
      {
        company: 'ElectroHub',
        role: 'Ecommerce Manager',
        quote: 'Our sales increased by 250% after launching the new website.',
        result: '+250% Revenue Growth',
      },
      {
        company: 'StyleStore',
        role: 'Founder',
        quote: 'The platform is so easy to manage and has great reporting tools.',
        result: '+180% Customer Base',
      },
      {
        company: 'TechMart',
        role: 'Operations Lead',
        quote: 'Best investment we made for our online business growth.',
        result: '+320% Order Volume',
      },
    ],
    keyStats: [
      { label: 'Average Revenue Increase', value: '+280%' },
      { label: 'Conversion Rate Improvement', value: '+150%' },
      { label: 'Customer Satisfaction', value: '98%' },
      { label: 'Page Load Speed', value: '<2s' },
    ],
  },
  healthcare: {
    title: 'Healthcare',
    description:
      'Help patients access your services with a dedicated healthcare portal. From appointment scheduling to patient records management, streamline your medical practice.',
    icon: '🏥',
    coverImage: '/placeholder.svg?height=400&width=600',
    solutions: [
      {
        title: 'Patient Portal',
        description: 'Allow patients to book appointments, view records, and communicate with your practice.',
        benefits: [
          'Online appointment scheduling',
          'Patient medical records access',
          'Secure messaging system',
          'HIPAA compliant platform',
        ],
      },
      {
        title: 'Telemedicine Platform',
        description: 'Offer virtual consultations to expand your reach and serve more patients.',
        benefits: [
          'Video conferencing integration',
          'Prescription management',
          'Digital health records',
          'Insurance billing integration',
        ],
      },
      {
        title: 'Website & Online Presence',
        description: 'Build trust with potential patients through a professional online presence.',
        benefits: [
          'Doctor profiles and credentials',
          'Services showcase',
          'Patient testimonials',
          'Blog for health education',
        ],
      },
      {
        title: 'Appointment Management',
        description: 'Reduce no-shows and improve patient flow with automated scheduling.',
        benefits: [
          'Automated reminders',
          'Multi-provider scheduling',
          'Waitlist management',
          'Analytics and reporting',
        ],
      },
    ],
    testimonials: [
      {
        company: 'MediCare Clinic',
        role: 'Practice Manager',
        quote: 'Appointment no-shows dropped by 60% with automated reminders.',
        result: '-60% No-Shows',
      },
      {
        company: 'HealthPlus Center',
        role: 'Medical Director',
        quote: 'Patients love the online portal. Reduced administrative burden significantly.',
        result: '+45% Patient Satisfaction',
      },
      {
        company: 'SmileDental',
        role: 'Clinic Owner',
        quote: 'The telemedicine feature helps us serve rural patients better.',
        result: '+200% Remote Consultations',
      },
    ],
    keyStats: [
      { label: 'Appointment Efficiency', value: '+85%' },
      { label: 'Patient Satisfaction', value: '96%' },
      { label: 'Administrative Time Saved', value: '-70%' },
      { label: 'Patient Retention', value: '+65%' },
    ],
  },
  'real-estate': {
    title: 'Real Estate',
    description:
      'Showcase properties with stunning visuals and virtual tours. Help buyers find their dream homes and streamline your sales process.',
    icon: '🏠',
    coverImage: '/placeholder.svg?height=400&width=600',
    solutions: [
      {
        title: 'Property Listing Platform',
        description: 'Display properties beautifully with photos, videos, and virtual tours.',
        benefits: [
          'High-resolution image galleries',
          'Virtual tour integration',
          '3D floor plans',
          'Property search filters',
        ],
      },
      {
        title: 'Lead Management System',
        description: 'Capture and nurture leads efficiently with automated systems.',
        benefits: [
          'Inquiry form integration',
          'Lead tracking dashboard',
          'Automated follow-ups',
          'CRM integration',
        ],
      },
      {
        title: 'Agent Websites',
        description: 'Give agents their own branded websites to showcase their properties.',
        benefits: [
          'Individual agent pages',
          'Market analysis tools',
          'Client testimonials',
          'Property comparison tools',
        ],
      },
      {
        title: 'Mobile App',
        description: 'Allow buyers to search properties on the go with a dedicated mobile app.',
        benefits: [
          'Push notifications for new listings',
          'Favorite properties saving',
          'Mortgage calculator',
          'Agent contact directly from app',
        ],
      },
    ],
    testimonials: [
      {
        company: 'Premium Realty',
        role: 'Sales Director',
        quote: 'Lead generation increased by 400% with the new platform.',
        result: '+400% Leads',
      },
      {
        company: 'Urban Homes',
        role: 'Managing Director',
        quote: 'Virtual tours reduced property visits by 30%, saving time for serious buyers.',
        result: '+65% Conversion Rate',
      },
      {
        company: 'Coast Properties',
        role: 'Operations Manager',
        quote: 'The CRM integration streamlined our entire sales process.',
        result: '-50% Sales Cycle',
      },
    ],
    keyStats: [
      { label: 'Lead Generation', value: '+380%' },
      { label: 'Virtual Tours Views', value: '+520%' },
      { label: 'Sales Conversion', value: '+60%' },
      { label: 'Time to Close', value: '-45%' },
    ],
  },
  'restaurants-hospitality': {
    title: 'Restaurants & Hospitality',
    description:
      'Serve your guests better with online reservations, menus, and ordering systems. Increase bookings and revenue.',
    icon: '🍽️',
    coverImage: '/placeholder.svg?height=400&width=600',
    solutions: [
      {
        title: 'Online Reservation System',
        description: 'Allow customers to book tables directly from your website.',
        benefits: [
          'Real-time table availability',
          'Automated confirmation emails',
          'Guest preferences recording',
          'Reservation analytics',
        ],
      },
      {
        title: 'Digital Menu & Ordering',
        description: 'Showcase your menu beautifully and allow online food ordering.',
        benefits: [
          'Interactive menu with photos',
          'Online ordering system',
          'Payment processing',
          'Delivery integration',
        ],
      },
      {
        title: 'Loyalty Program',
        description: 'Reward regular customers and increase repeat business.',
        benefits: [
          'Points-based rewards',
          'Exclusive offers for members',
          'Email marketing integration',
          'Customer analytics',
        ],
      },
      {
        title: 'Website & Branding',
        description: 'Create an appetizing online presence that drives foot traffic.',
        benefits: [
          'Food photography showcase',
          'Chef profiles and stories',
          'Event booking system',
          'Google Maps integration',
        ],
      },
    ],
    testimonials: [
      {
        company: 'Gourmet Bistro',
        role: 'Owner',
        quote: 'Reservations tripled after launching the online booking system.',
        result: '+300% Reservations',
      },
      {
        company: 'Pizza Paradise',
        role: 'Manager',
        quote: 'Online orders now account for 40% of our revenue.',
        result: '+40% Revenue',
      },
      {
        company: 'Seafood Palace',
        role: 'Operations Lead',
        quote: 'The loyalty program brought back 60% of one-time customers.',
        result: '+60% Repeat Customers',
      },
    ],
    keyStats: [
      { label: 'Reservation Increase', value: '+320%' },
      { label: 'Online Order Revenue', value: '+180%' },
      { label: 'Customer Loyalty', value: '+85%' },
      { label: 'Avg Order Value Increase', value: '+45%' },
    ],
  },
  education: {
    title: 'Education',
    description:
      'Enhance student learning with online platforms. From course management to student engagement, build your digital classroom.',
    icon: '📚',
    coverImage: '/placeholder.svg?height=400&width=600',
    solutions: [
      {
        title: 'Learning Management System',
        description: 'Deliver courses online with interactive content and quizzes.',
        benefits: [
          'Course creation tools',
          'Video hosting and streaming',
          'Assessment and quiz system',
          'Progress tracking',
        ],
      },
      {
        title: 'Student Portal',
        description: 'Centralize student information and communication.',
        benefits: [
          'Class schedule management',
          'Grade portal',
          'Assignment submission',
          'Parent communication tools',
        ],
      },
      {
        title: 'Virtual Classroom',
        description: 'Conduct live classes and lectures online.',
        benefits: [
          'Video conferencing integration',
          'Screen sharing capabilities',
          'Recording and playback',
          'Interactive whiteboards',
        ],
      },
      {
        title: 'School Website',
        description: 'Build credibility and attract students with a professional website.',
        benefits: [
          'Course catalogs',
          'Faculty profiles',
          'Admissions information',
          'Event calendars',
        ],
      },
    ],
    testimonials: [
      {
        company: 'Tech Institute',
        role: 'Director of Education',
        quote: 'Online courses expanded our reach to 50 countries.',
        result: '+50 Countries',
      },
      {
        company: 'Primary Academy',
        role: 'Principal',
        quote: 'Student engagement increased significantly with the online platform.',
        result: '+75% Engagement',
      },
      {
        company: 'University Online',
        role: 'Registrar',
        quote: 'Enrollment grew 5x after launching the new learning platform.',
        result: '+500% Enrollment',
      },
    ],
    keyStats: [
      { label: 'Students Reached', value: '+2500%' },
      { label: 'Course Completion Rate', value: '89%' },
      { label: 'Student Satisfaction', value: '94%' },
      { label: 'Geographic Expansion', value: '+45 Countries' },
    ],
  },
  manufacturing: {
    title: 'Manufacturing',
    description:
      'Streamline operations with digital solutions. From supply chain to customer management, improve efficiency and reduce costs.',
    icon: '⚙️',
    coverImage: '/placeholder.svg?height=400&width=600',
    solutions: [
      {
        title: 'Supply Chain Management',
        description: 'Optimize inventory and supply chain with real-time tracking.',
        benefits: [
          'Inventory tracking system',
          'Supplier management',
          'Order processing automation',
          'Real-time analytics',
        ],
      },
      {
        title: 'Production Management',
        description: 'Monitor and optimize production with data-driven insights.',
        benefits: [
          'Production scheduling',
          'Quality control tracking',
          'Machine maintenance scheduling',
          'Performance metrics',
        ],
      },
      {
        title: 'B2B Portal',
        description: 'Allow distributors and partners to order products online.',
        benefits: [
          'Customized pricing by partner',
          'Bulk ordering capabilities',
          'Automated invoicing',
          'Portal analytics',
        ],
      },
      {
        title: 'ERP Integration',
        description: 'Integrate all business systems for seamless operations.',
        benefits: [
          'Financial system integration',
          'HR system connection',
          'Real-time reporting',
          'Data synchronization',
        ],
      },
    ],
    testimonials: [
      {
        company: 'Industrial Solutions Inc',
        role: 'Plant Manager',
        quote: 'Production efficiency improved by 35% after system implementation.',
        result: '+35% Efficiency',
      },
      {
        company: 'Component Makers',
        role: 'Supply Chain Director',
        quote: 'Inventory costs reduced by 40% with better tracking.',
        result: '-40% Inventory Costs',
      },
      {
        company: 'Manufacturing Corp',
        role: 'Operations VP',
        quote: 'Order processing time cut in half with automation.',
        result: '-50% Processing Time',
      },
    ],
    keyStats: [
      { label: 'Production Efficiency', value: '+42%' },
      { label: 'Cost Reduction', value: '-35%' },
      { label: 'Order Accuracy', value: '99.8%' },
      { label: 'Lead Time Reduction', value: '-45%' },
    ],
  },
  'professional-services': {
    title: 'Professional Services',
    description:
      'Showcase expertise and attract clients with a professional website. From law firms to consulting, build client trust.',
    icon: '💼',
    coverImage: '/placeholder.svg?height=400&width=600',
    solutions: [
      {
        title: 'Professional Website',
        description: 'Build a sophisticated website that reflects your expertise.',
        benefits: [
          'Attorney/consultant profiles',
          'Case studies showcase',
          'Client testimonials',
          'Practice areas details',
        ],
      },
      {
        title: 'Client Portal',
        description: 'Provide secure access to case files and documents.',
        benefits: [
          'Document management system',
          'Secure messaging',
          'Invoice and payment portal',
          'Time tracking integration',
        ],
      },
      {
        title: 'Appointment & Meeting Scheduler',
        description: 'Manage client meetings and consultations efficiently.',
        benefits: [
          'Online booking system',
          'Calendar management',
          'Automated reminders',
          'Video conferencing integration',
        ],
      },
      {
        title: 'Business Development Tools',
        description: 'Generate leads and grow your practice.',
        benefits: [
          'SEO optimization',
          'Content marketing strategy',
          'Email marketing campaigns',
          'Analytics and reporting',
        ],
      },
    ],
    testimonials: [
      {
        company: 'Legal Associates LLP',
        role: 'Managing Partner',
        quote: 'New client inquiries increased by 200% after website launch.',
        result: '+200% Inquiries',
      },
      {
        company: 'Consulting Group',
        role: 'Principal',
        quote: 'The client portal saved us hours every week on document management.',
        result: '-10 Hours/Week',
      },
      {
        company: 'Advisory Services',
        role: 'Partner',
        quote: 'Professional website greatly improved client confidence in our firm.',
        result: '+85% Trust Score',
      },
    ],
    keyStats: [
      { label: 'Client Inquiries', value: '+280%' },
      { label: 'Administrative Time Saved', value: '-60%' },
      { label: 'Client Satisfaction', value: '97%' },
      { label: 'Project On-Time Delivery', value: '96%' },
    ],
  },
}

export default function IndustryPage() {
  const params = useParams()
  const slug = params.slug as string
  const industry = industriesData[slug]

  if (!industry) {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        <Navbar />
        <main className="flex-grow" />
        <AnimatedFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <IndustryDetail {...industry} />
      </main>
      <AnimatedFooter />
    </div>
  )
}
