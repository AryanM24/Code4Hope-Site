/**
 * Canonical site facts and schema.org structured data.
 *
 * This is the single source of truth for the organisation's public identity:
 * the metadata in app/layout.tsx, the per-route metadata, the sitemap and the
 * JSON-LD blocks all read from here, so there is one place to correct a fact.
 *
 * Keep this in sync with public/llms.txt and public/llms-full.txt, which carry
 * the same facts in prose for AI agents that do not parse JSON-LD.
 */

export const SITE_URL = "https://code4hope.net"

export const ORG = {
  name: "Code4Hope",
  alternateNames: ["Code 4 Hope", "C4H"],
  tagline: "Empowering students to innovate and make an impact for charitable causes.",
  description:
    "Code4Hope is a student-run nonprofit organization that hosts hackathons throughout the year for high school students. Events are open to any experience level, and proceeds are donated to charitable organizations. Code4Hope is fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit.",
  email: "events@code4hope.net",
  founder: "Aryan Mittal",
  fiscalSponsor: "The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit",
  donateUrl: "https://hcb.hackclub.com/donations/start/code-4-hope",
  discordUrl: "https://discord.gg/hu8e25c6cy",
  socials: [
    "https://www.instagram.com/code4hope_/",
    "https://x.com/code4hope_",
    "https://www.tiktok.com/@code4hopeofficial",
    "https://linkedin.com/company/code4hope",
  ],
} as const

/** Public routes, used for the sitemap and for the route list in llms.txt. */
export const ROUTES = [
  { path: "/", changeFrequency: "weekly", priority: 1.0, title: "Home" },
  { path: "/about", changeFrequency: "monthly", priority: 0.8, title: "About" },
  { path: "/events", changeFrequency: "weekly", priority: 0.9, title: "Events" },
  { path: "/team", changeFrequency: "monthly", priority: 0.7, title: "Team" },
  { path: "/gallery", changeFrequency: "monthly", priority: 0.6, title: "Gallery" },
  { path: "/sponsors", changeFrequency: "monthly", priority: 0.7, title: "Sponsors" },
  { path: "/legal", changeFrequency: "yearly", priority: 0.3, title: "Privacy Policy" },
] as const

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${SITE_URL}/#organization`,
  name: ORG.name,
  alternateName: [...ORG.alternateNames],
  url: SITE_URL,
  logo: `${SITE_URL}/c4hlogo.png`,
  image: `${SITE_URL}/og-image.png`,
  slogan: ORG.tagline,
  description: ORG.description,
  email: ORG.email,
  founder: {
    "@type": "Person",
    name: ORG.founder,
    jobTitle: "Founder & Executive Director",
  },
  parentOrganization: {
    "@type": "NGO",
    name: "The Hack Foundation",
    alternateName: "Hack Club",
    description: "501(c)(3) nonprofit that fiscally sponsors Code4Hope.",
  },
  knowsAbout: [
    "Hackathons",
    "Computer science education",
    "STEM outreach",
    "High school student programming competitions",
  ],
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
    audienceType: "High school students, typically ages 13-18",
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide (virtual events) with in-person events in the New York City metropolitan area",
  },
  sameAs: [...ORG.socials],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "General enquiries and event questions",
    email: ORG.email,
    availableLanguage: "English",
  },
  potentialAction: {
    "@type": "DonateAction",
    target: ORG.donateUrl,
  },
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: ORG.name,
  description: ORG.description,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US",
}

/**
 * Summary of every Code4Hope hackathon, oldest first.
 *
 * Mirrors the detailed `events` array in app/events/page.tsx - keep both in
 * sync when an event is added. This compact form feeds the Event structured
 * data and the event history published for AI agents.
 */
export const EVENTS = [
  {
    id: "impactx-24",
    name: "ImpactX'24",
    startDate: "2024-12-13",
    endDate: "2024-12-15",
    status: "Completed",
    mode: "Virtual",
    summary:
      "The first ImpactX hackathon. Students built projects addressing social issues across sustainability, education, and health and wellness.",
  },
  {
    id: "c4h-2025",
    name: "Code4Hope Hackathon 2025",
    startDate: "2025-06-27",
    endDate: "2025-07-10",
    status: "Completed",
    mode: "Hybrid: online round 1, in-person round 2 in New York City",
    summary:
      "A two-round hackathon modelled on entrepreneurship competitions. Teams solved a critical issue for a randomly assigned fictional company across four tracks: sustainability, health, education, and finance. Round 2 was held in person in Times Square, New York City.",
  },
  {
    id: "divergent-c4h-2025",
    name: "Divergent Teams and Code4Hope Hackathon 2025",
    startDate: "2025-11-11",
    endDate: "2025-11-11",
    status: "Completed",
    mode: "In person",
    summary: "A one-day hackathon run jointly with Divergent Teams.",
  },
  {
    id: "impactx-25",
    name: "ImpactX'25",
    startDate: "2025-12-05",
    endDate: "2025-12-07",
    status: "Completed",
    mode: "Virtual",
    summary:
      "The second annual ImpactX. A global virtual hackathon with tracks in sustainability, education, and health and wellness.",
  },
  {
    id: "impactx-26",
    name: "ImpactX'26",
    startDate: "2026-12-04",
    endDate: "2026-12-06",
    status: "Upcoming",
    mode: "Virtual",
    summary:
      "The third annual ImpactX. A fully virtual weekend hackathon open to high school students worldwide, with tracks in sustainability, education, and health and wellness. Prizes, judges, and registration to be announced.",
  },
] as const

/** schema.org Event entries, one per hackathon. */
export const eventsJsonLd = EVENTS.map((event) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "@id": `${SITE_URL}/events?event=${event.id}`,
  name: event.name,
  description: event.summary,
  startDate: event.startDate,
  endDate: event.endDate,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: event.mode.toLowerCase().startsWith("in person")
    ? "https://schema.org/OfflineEventAttendanceMode"
    : event.mode.toLowerCase().startsWith("hybrid")
      ? "https://schema.org/MixedEventAttendanceMode"
      : "https://schema.org/OnlineEventAttendanceMode",
  location: event.mode.toLowerCase().startsWith("virtual")
    ? { "@type": "VirtualLocation", url: `${SITE_URL}/events?event=${event.id}` }
    : { "@type": "Place", name: event.mode },
  organizer: { "@id": `${SITE_URL}/#organization` },
  url: `${SITE_URL}/events?event=${event.id}`,
  image: `${SITE_URL}/og-image.png`,
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
    audienceType: "High school students",
  },
}))
