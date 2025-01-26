import { MerchSection } from "@/components/merch-section"
import { JoinSection } from "@/components/join-section"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import Image from "next/image";

export default function InfoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <ScrollReveal>
          <section className="w-full py-12 md:py-16 lg:py-20 bg-titleSectionBackground">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold mb-4">Information and Updates</h1>
              <p className="text-gray-500 text-xl">
                lorem ipsum lorem ipsum etc. etc. oh yea
              </p>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <MerchSection />
                <div className="border rounded-lg p-8 bg-card">
                  <div className="flex flex-col items-center gap-6">
                    <Image
                      src="/placeholder.svg?text=Spotlight+Event"
                      alt="Spotlight Event"
                      width={400}
                      height={225}
                      className="w-full rounded-lg"
                    />
                    <h2 className="text-2xl font-bold">Our Spotlight Event</h2>
                    <p className="text-gray-600 text-center">
                      Join us for our upcoming flagship hackathon event. Be part of something extraordinary!
                    </p>
                    <Button 
                      className="w-full bg-[#826CB8] hover:bg-[#6f5c9d] text-white py-6 text-lg h-auto"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
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

