import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "The companies and organizations that sponsor Code4Hope hackathons, funding prizes, workshops, and awards for student participants. Includes information on becoming a sponsor.",
  alternates: { canonical: "/sponsors" },
  openGraph: {
    title: "Code4Hope Sponsors",
    description:
      "Sponsors fund prizes, workshops, and awards for the students who take part in our hackathons.",
    url: "/sponsors",
  },
}

export default function SponsorsLayout({ children }: { children: React.ReactNode }) {
  return children
}
