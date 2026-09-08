import type React from "react"
import type { Metadata } from "next"
import "@/app/globals.css"
import { DM_Sans } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LoadingProvider from "@/components/loading-provider"
import { SITE_URL, eventsJsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/seo"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Code4Hope | Student-Run Nonprofit Hackathons for Charitable Causes",
    template: "%s | Code4Hope",
  },
  description:
    "Code4Hope is a student-run nonprofit that hosts hackathons for high school students, fiscally sponsored by The Hack Foundation (Hack Club), a 501(c)(3). We run ImpactX and the Code4Hope Hackathon, and donate proceeds to charitable causes.",
  applicationName: "Code4Hope",
  keywords: [
    "Code4Hope",
    "high school hackathon",
    "student hackathon",
    "hackathon for teens",
    "ImpactX hackathon",
    "nonprofit hackathon",
    "virtual hackathon for high school students",
    "coding competition for teenagers",
    "STEM nonprofit",
    "hackathon sponsorship",
    "Hack Club fiscal sponsorship",
  ],
  authors: [{ name: "Code4Hope", url: SITE_URL }],
  creator: "Code4Hope",
  publisher: "Code4Hope",
  category: "Nonprofit",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Code4Hope",
    title: "Code4Hope | Student-Run Nonprofit Hackathons for Charitable Causes",
    description:
      "A student-run nonprofit hosting hackathons for high school students. Fiscally sponsored by The Hack Foundation (Hack Club), a 501(c)(3).",
    url: SITE_URL,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Code4Hope - student-run nonprofit hackathons for charitable causes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@code4hope_",
    creator: "@code4hope_",
    title: "Code4Hope | Student-Run Nonprofit Hackathons",
    description:
      "A student-run nonprofit hosting hackathons for high school students, with proceeds going to charitable causes.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/c4hlogo.png",
  },
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
        {/* Machine-readable summary of the organisation for search engines and
            AI agents. A longer prose version lives at /llms.txt. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {/* Event graph. Rendered site-wide from the root head because a
            <script> emitted by a nested layout only reaches the RSC payload,
            not the served HTML, so crawlers would never see it. Each Event
            carries its own canonical /events URL. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd) }}
        />
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
