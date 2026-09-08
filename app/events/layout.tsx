import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events",
  description:
    "Every Code4Hope hackathon, past and upcoming, including ImpactX'26 (December 4-6, 2026), ImpactX'25, the Code4Hope Hackathon 2025, and ImpactX'24. Open to high school students worldwide.",
  alternates: { canonical: "/events" },
  openGraph: {
    title: "Code4Hope Events",
    description:
      "Past and upcoming Code4Hope hackathons, including ImpactX'26 on December 4-6, 2026.",
    url: "/events",
  },
}

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children
}
