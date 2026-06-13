import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import SmoothScroll from "@/components/smooth-scroll"
import PageLoader from "@/components/page-loader"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GigaGrowth Web Solutions - Custom Web & Digital Marketing",
  description:
    "GigaGrowth Web Solutions provides tailored web design, app development, and digital marketing services to boost your online presence and drive revenue.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <ScrollToTop />
        <PageLoader />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
