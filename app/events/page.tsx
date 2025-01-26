import { EventSlider } from "@/components/event-slider"
import { JoinSection } from "@/components/join-section"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import impactX from "@/components/assets/images/event/ImpactX.png";
import c4h2025 from "@/components/assets/images/event/c4h2025.png";



export default function EventsPage() {
  const events = [
    {
      name: "Code4Hope 2025",
      description: "Scheduled for March 31, 2025, Code4Hope’s first in-person hackathon will take place at the Microsoft Center in Times Square, promising an exciting event with innovative challenges, impactful projects, and incredible prizes.",
      logo: c4h2025,
      devpostLink: "https://c4h2025.devpost.com/"
    },
    {
      name: "ImpactX'24",
      description: "Hosted in December of 2024, ImpactX was C4H's debut hackathon, with over 130+ participants and 25k+ in prizes",
      logo: impactX,
      devpostLink: "https://impactx-code4hope.devpost.com/"
    }
  ]
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <ScrollReveal>
          <section className="w-full py-12 md:py-16 lg:py-20 bg-titleSectionBackground">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold mb-4">Events</h1>
              <p className="text-gray-500 text-xl">
                Here is where you can find info about our previous events!
              </p>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <EventSlider events={events} />
            </div>
          </section>
        </ScrollReveal>
        
        <ScrollReveal>
          <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <JoinSection />
            </div>
          </section>
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  )
}

