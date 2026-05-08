import type React from "react"
import "@/app/globals.css"
import { DM_Sans } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LoadingProvider from "@/components/loading-provider"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

export const metadata = {
  title: "Code4Hope",
  description:
    "Code4Hope is a non-profit organization dedicated to providing free coding education and technology access to underserved communities.",
  keywords: "coding, education, technology, non-profit, digital literacy, computer science",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${dmSans.className} ${dmSans.variable} min-h-screen flex flex-col dynamic-bg`}>
        <LoadingProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  )
}
