import { notFound } from "next/navigation"
import ServiceDetail from "@/components/service-detail"

const services = {
  "brand-strategy": {
    title: "Brand Strategy & Identity",
    description: "Build a brand that commands attention and loyalty.",
    fullContent:
      "GigaGrowth Web Solutions provides custom brand development, focusing on tailored solutions for businesses to boost their online presence. Our strategy includes logo design, brand guidelines, and positioning.",
    color: "purple",
  },
  "digital-marketing": {
    title: "Digital Marketing Campaigns",
    description: "Scale your revenue with data-driven performance marketing.",
    fullContent:
      "We offer everything from SEO and SMM to targeted ads, ensuring measurable results for clients globally.",
    color: "blue",
  },
  "web-development": {
    title: "Web Development",
    description: "Custom e-commerce and web platforms built for speed.",
    fullContent:
      "From CMS integration to high-performance e-commerce platforms, we build tools that attract customers and increase sales.",
    color: "green",
  },
  "seo-analytics": {
    title: "SEO & Analytics",
    description: "Data-driven organic growth strategies.",
    fullContent:
      "Leveraging ETL pipelines (Azure Data Factory) and Power BI dashboards to provide transparency and real value.",
    color: "orange",
  },
  "content-creation": {
    title: "Content Creation",
    description: "Engaging media that converts browsers to buyers.",
    fullContent: "High-quality video, photography, and copywriting tailored to your business goals.",
    color: "pink",
  },
  "public-relations": {
    title: "Public Relations",
    description: "Strategic outreach to build authority and trust.",
    fullContent: "Media relations and influencer partnerships designed to expand your brand's reach.",
    color: "indigo",
  },
}

export default function Page({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services]
  if (!service) notFound()

  return <ServiceDetail service={service} />
}
