export interface Sponsor {
  name: string
  description: string
  logo: string
  link: string
}

export const sponsors: Sponsor[] = [
  {
    name: "Drift",
    description:
      "A calm personal planning app that brings your calendar, email, and tasks together into one clear view of what's next.",
    logo: "/sponsors/drift.svg",
    link: "https://usedrift.us",
  },
  {
    name: "Nord Security",
    description: "World-leading cybersecurity tools for people and global businesses.",
    logo: "/placeholder.svg",
    link: "#",
  },
  {
    name: "Flatlogic",
    description: "Business Software: AI Solutions at Speed",
    logo: "/placeholder.svg",
    link: "#",
  },
]
