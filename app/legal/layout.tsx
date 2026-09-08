import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Code4Hope collects, uses, and protects personal information from participants, subscribers, and website visitors.",
  alternates: { canonical: "/legal" },
  robots: { index: true, follow: true },
}

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return children
}
