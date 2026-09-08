import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description:
    "How Code4Hope started, what we do, and who we serve: a student-run nonprofit running free hackathons for high school students, fiscally sponsored by The Hack Foundation (Hack Club), a 501(c)(3).",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Code4Hope",
    description:
      "A student-run nonprofit running free hackathons for high school students, with proceeds donated to charitable causes.",
    url: "/about",
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
