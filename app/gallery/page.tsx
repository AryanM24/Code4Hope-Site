import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { JoinSection } from "@/components/join-section"
import { Footer } from "@/components/footer"

const galleryImages = [
  { src: "/placeholder.svg", alt: "Gallery Image 1" },
  { src: "/placeholder.svg", alt: "Gallery Image 2" },
  { src: "/placeholder.svg", alt: "Gallery Image 3" },
  { src: "/placeholder.svg", alt: "Gallery Image 4" },
  { src: "/placeholder.svg", alt: "Gallery Image 5" },
  { src: "/placeholder.svg", alt: "Gallery Image 6" },
]

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <ScrollReveal>
          <section className="py-12">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold mb-4">Gallery</h1>
              <p className="text-gray-600 max-w-3xl">
                Explore moments from our past events and hackathons. These images showcase the creativity, collaboration, and impact of our Code4Hope community.
              </p>
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryImages.map((image, index) => (
                  <div key={index} className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-4 text-center">Want to be part of our next event?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-center mb-8">
                Join us at our upcoming hackathons and workshops. Be part of the innovation and make a difference with Code4Hope.
              </p>
              <div className="flex justify-center">
                <JoinSection />
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  )
}

