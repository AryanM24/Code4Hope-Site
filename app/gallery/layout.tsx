import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Code4Hope hackathons, workshops, and community events, including ImpactX and the Code4Hope Hackathon.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Code4Hope Gallery",
    description: "Photos from our hackathons, workshops, and community events.",
    url: "/gallery",
  },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children
}
