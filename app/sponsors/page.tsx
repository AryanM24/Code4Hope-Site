import { SponsorSlider } from "@/components/sponsor-slider"
import { BecomeSponsorSection } from "@/components/become-sponsor-section"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

const sponsors = [
  {
    name: "Nord Security",
    description: "World-leading cybersecurity tools for people and global businesses.",
    logo: "https://brandergroup.net/wp-content/uploads/2023/12/ISP-Carriers-Nord-1200x900.png",
    devpostLink: "#"
  },
  {
    name: "Flatlogic",
    description: "Business Software: AI Solutions at Speed",
    logo: "https://s3.amazonaws.com/challengepost/sponsors/logos/000/037/892/highres/Logo_%281%29.png",
    devpostLink: "#"
  },
  {
    name: "Desmos",
    description: "Business Software: AI Solutions at Speed",
    logo: "https://cdn.mos.cms.futurecdn.net/mfRWxBbBCSEL9rtoYmxDiR.jpg",
    devpostLink: "#"
  },
  {
    name: "Refact.ai",
    description: "Business Software: AI Solutions at Speed",
    logo: "https://web-summit-avenger.imgix.net/production/logos/original/7a7b2abcb3b7e15a1c643880b90cc2beb1ab68be.png?ixlib=rb-3.4.0&auto=format&fit=fill&fill=solid&fill-color=white",
    devpostLink: "#"
  }
]

export default function SponsorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <ScrollReveal>
          <section className="py-12 md:py-16 lg:py-20 bg-titleSectionBackground">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold mb-4">Our Superstar Sponsors</h1>
              <p className="text-gray-600 max-w-3xl">
                Sponsors provide our hackathons with funding so that young developers who participate can receive awards, 
                prizes, and workshops that can help them further develop their skills. Check out our 2024-2025 sponsors!
              </p>
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <SponsorSlider sponsors={sponsors} />
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <BecomeSponsorSection />
            </div>
          </section>
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  )
}

