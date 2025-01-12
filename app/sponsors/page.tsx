import { SponsorSlider } from "@/components/sponsor-slider"
import { BecomeSponsorSection } from "@/components/become-sponsor-section"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

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
              <SponsorSlider sponsors={sponsors}  multiImage={false}/>
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

