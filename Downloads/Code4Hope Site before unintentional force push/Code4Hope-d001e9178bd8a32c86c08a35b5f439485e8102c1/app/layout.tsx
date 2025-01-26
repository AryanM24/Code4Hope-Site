import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Code4Hope",
  description: "A not-for-profit organization that hosts hackathons throughout the year",
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
      <div className="max-w-[1920px] mx-auto">
        <Header />
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </div>
      </body>
      </html>
  )
}

