import { ContentSection } from "@/components/content-section"
import { FAQSection } from "@/components/faq-section"
import { JoinSection } from "@/components/join-section"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <ScrollReveal>
          <section className="py-12 md:py-16 lg:py-20 bg-titleSectionBackground">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold mb-4">About Us</h1>
              <p className="text-gray-600 max-w-3xl text-xl">
                Learn more about Code4Hope's mission, operations, and impact in the tech community.
              </p>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="py-12 md:py-16 lg:py-20 bg-background">
            <div className="container mx-auto px-4">
              <ContentSection
                title="Our Organization"
                content="Code4Hope is a not-for-profit organization dedicated to empowering students to leverage technology for social good. Our mission is to unite technology and creativity to drive social change, fostering a global community of young innovators addressing real-world challenges. Through our regular hackathons, we create opportunities for students to develop their skills while making a meaningful impact."
                imageSrc="/placeholder.svg"
                imageAlt="Students collaborating at a Code4Hope hackathon"
              />
              <ContentSection
                title="Outreach"
                content="Our outreach initiatives focus on connecting with students, educational institutions, and charitable organizations worldwide. We believe in the power of technology to create positive change, and through our programs, we encourage students to apply their skills to solve real-world problems. Our community extends beyond hackathons, creating lasting connections and opportunities for continued learning and impact."
                imageSrc="/placeholder.svg"
                imageAlt="Code4Hope outreach event"
                reversed
              />
              <ContentSection
                title="Operations"
                content="The Operations team is the backbone of Code4Hope's technical infrastructure. This dedicated subteam manages web development, ensures seamless hackathon experiences, and implements automation solutions to streamline our organization's processes. From maintaining our digital presence to developing innovative tools for outreach projects, the Operations team plays a crucial role in advancing our mission."
                imageSrc="/placeholder.svg"
                imageAlt="Code4Hope operations team at work"
              />
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <FAQSection className="text-center" />
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="py-12 md:py-16 lg:py-20 bg-white">
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

