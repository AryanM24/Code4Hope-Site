import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Footer } from "@/components/footer"
import { SocialLinks } from "@/components/social-links"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <ScrollReveal>
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter text-black sm:text-4xl md:text-5xl lg:text-6xl">
                Code4Hope
              </h1>
              <p className="mx-auto max-w-[700px] text-black md:text-xl">
                A not-for-profit organization that hosts hackathons throughout the year, empowering students to innovate
                and make an impact for charitable causes.
              </p>
              <div className="space-x-4">
                <Button className="bg-[#826CB8] hover:bg-[#6f5c9d] text-white">Learn More</Button>
                <Button variant="secondary" className="bg-gray-200 hover:bg-gray-300 text-black">
                  Outreach
                </Button>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* About Section */}
      <ScrollReveal>
        <section id="about" className="w-full py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="border-2 border-[#826CB8] shadow-md rounded-xl p-6 bg-white">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/2">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image src="/placeholder.svg?height=40&width=40" alt="Code4Hope Logo" width={40} height={40} />
                    <h2 className="text-2xl font-bold">Code 4 Hope</h2>
                  </div>
                  <p className="text-gray-500 md:text-lg">
                    Code 4 Hope is fiscally sponsored by The Hope Foundation (it is a hack club), a 501(c)(3) nonprofit.
                    We host hackathons every 2-3 months on various topics and categories for charitable organizations.
                    Students from all over the world can participate regardless of their level of experience to show
                    their skills and contribute to innovation while making an impact.
                  </p>
                </div>
                <div className="md:w-1/2 aspect-video overflow-hidden rounded-xl">
                  <Image
                    alt="About Image"
                    className="object-cover w-full h-full"
                    height="300"
                    src="/placeholder.svg"
                    width="600"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Upcoming Events Section */}
      <ScrollReveal>
        <section id="events" className="w-full py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Events</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Throughout the year, Code4Hope hosts multiple hackathons, each on a different topic that relates to a
                current trend in the technology space. Sign up below.
              </p>
              <Button variant="outline" className="rounded-full">
                Previous Events
              </Button>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
              <Card className="p-0">
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Event Image"
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader className="p-6">
                  <CardTitle>Code4Hope &apos;25</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-sm text-gray-500">
                    Projects for a better world by solving real-world problems—whether they be health, wellness, and
                    education—where your ideas today shape a brighter, more sustainable tomorrow. All proceeds from this
                    hackathon will be donated to World Computer Exchange.
                  </p>
                  <Button className="mt-4 w-full bg-[#826CB8] hover:bg-[#6f5c9d]">Sign Up</Button>
                </CardContent>
              </Card>
              <Card className="p-0">
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Event Image"
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader className="p-6">
                  <CardTitle>ImpactX &apos;25</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-sm text-gray-500">
                    Projects for a better world by solving real-world problems—whether they be health, wellness, and
                    education—where your ideas today shape a brighter, more sustainable tomorrow. All proceeds from this
                    hackathon will be donated to World Computer Exchange.
                  </p>
                  <Button className="mt-4 w-full bg-[#826CB8] hover:bg-[#6f5c9d]">Sign Up</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Sponsors Section */}
      <ScrollReveal>
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sponsors</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sponsors provide our hackathons with funding so that young developers who participate can receive
                awards, prizes, and workshops that can help them further develop their skills.
              </p>
              <Button variant="outline" className="rounded-full">
                See more...
              </Button>
            </div>
            <div className="relative mt-12">
              <div className="container mx-auto px-4 md:px-6 relative">
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="flex overflow-hidden">
                  {/* Placeholder sponsors */}
                  {[1, 2, 3, 4].map((index) => (
                    <div key={index} className="flex-none w-1/4 px-4">
                      <div className="bg-gray-200 aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={`/placeholder.svg?text=Sponsor${index}`}
                          alt={`Sponsor ${index}`}
                          width={300}
                          height={169}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-10"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Recent Workshops Section */}
      <ScrollReveal>
        <section id="workshops" className="w-full py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recent Workshops</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Workshop lectures are excellent ways for young software engineers to learn from industry professionals
                and further hone their skills. During every Code4Hope hackathon, workshops will be available at for
                participants to watch live. However, if you did not get the chance to hear these amazing guest speakers,
                you, the participants, can access them here.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <Card className="p-0 border-2 border-[#826CB8] shadow-md rounded-xl overflow-hidden">
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Workshop Image"
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader className="p-6">
                  <CardTitle>Build Your Best Projects Faster with Refact.ai</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-sm text-gray-500">Refact AI @ ImpactX</p>
                </CardContent>
              </Card>
              <Card className="p-0 border-2 border-[#826CB8] shadow-md rounded-xl overflow-hidden">
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Workshop Image"
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader className="p-6">
                  <CardTitle>Unleashing the Power of Data and AI</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-sm text-gray-500">Rajesh Mittal, PrismView EHS @ ImpactX</p>
                </CardContent>
              </Card>
              <Card className="p-0 border-2 border-[#826CB8] shadow-md rounded-xl overflow-hidden">
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Workshop Image"
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader className="p-6">
                  <CardTitle>Ignite Your Journey to Entrepreneurship</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-sm text-gray-500">Prachi Kuradi @ ImpactX</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Social Links Section */}
      <ScrollReveal>
        <SocialLinks />
      </ScrollReveal>

      <Footer />
    </main>
  )
}

