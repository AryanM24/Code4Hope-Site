import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Team",
  description:
    "The Code4Hope executive board and directors - the high school students who organize our hackathons, outreach, operations, and community programs.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "The Code4Hope Team",
    description: "Meet the student executive board and directors behind Code4Hope.",
    url: "/team",
  },
}

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children
}
