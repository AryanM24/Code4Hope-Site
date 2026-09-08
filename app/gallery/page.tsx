"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

type GalleryImage = {
  id: number
  src: string
  alt: string
  category: string
  description: string
  date: string
}

// Enhanced gallery data with categories and descriptions
const rawGalleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/c4h@hackjps25/c4h@hackjps1.jpeg",
    alt: "Code4Hope Workshop at HackJPS",
    category: "workshop",
    description: "At JPS Robotics Team 2554's Annual Hackathon, HackJPS, we hosted a 30-minute lecture on turning hackathon projects into real-world startups, guiding students through the process of validating ideas, building MVPs, and pitching to investors. We shared actionable strategies for identifying target users, collecting feedback, and leveraging free tools to scale early-stage products. By using examples from successful high school-led ventures and highlighting common pitfalls, we aimed to inspire attendees to take their projects beyond the weekend and continue innovating. ",
    date: "June 15, 2025",
  },
  {
    id: 2,
    src: "/c4h@c4h.JPG",
    alt: "Code4Hope Workshop on Entrepenuership at Code4Hope '25",
    category: "workshop",
    description: "At our summer event, Code4Hope'25 or Code4Hope's 2025 STEM Hackathon, we hosted a workshop on entrepreneurship that empowered students to think beyond coding and explore the fundamentals of building a startup. To make the session engaging and hands-on, we led an interactive segment where participants were given a humorous yet relatable problem—“melting ice cream”—and challenged to come up with a one-minute startup pitch. One team applied real science by proposing a solution based on endothermic phase change materials to keep the ice cream cool using thermal regulation, while another team embraced the issue by turning melted ice cream into a trendy dessert drink, pitching it as a nostalgic, sweet beverage. The creative range of ideas sparked both laughter and insightful discussion, showing students how even the silliest problems can inspire real entrepreneurial thinking.",
    date: "July 10, 2025",
  },
  {
    id: 3,
    src: "/angel@c4h.JPG",
    alt: "Angel Rodriguez at Code4Hope '25",
    category: "workshop",
    description: "College Professor and Microsoft Technology Strategist Abel Angel Rodriguez hosted a workshop on DevOps and Cloud Computing that introduced students to the tools and practices used in modern software development. Instead of a traditional lecture, he led a discussion-style session that participants really enjoyed, encouraging questions and real-time interaction. The workshop gave attendees a clear, practical understanding of how professional developers streamline deployment and maintain reliability in real-world projects.",
    date: "July 10, 2025",
  },
  {
    id: 4,
    src: "/c4h2025round2.JPG",
    alt: "A Room Full of Innovators",
    category: "hackathon",
    description: "About 40 finalists joined us in-person and online for the second round of Code4Hope '25 (Code4Hope's 2025 STEM Hackathon), where they presented their innovative solutions to real-world challenges in health, sustainability, education, and finance. Each team delivered a 10-minute pitch to judges, showcasing their prototypes, research, and impact. The energy was high, the ideas were bold, and the presentations reflected weeks of hard work, creativity, and collaboration.",
    date: "July 10, 2025",
  },
  {
    id: 5,
    src: "/ProjectCARE@c4h25.JPG",
    alt: "Exploring Health and Wellness with Project CARE",
    category: "community",
    description: "At Code4Hope '25, Project CARE hosted a heartwarming workshop that began with an overview of their mission to support children battling cancer through acts of kindness and community engagement. After sharing their story and impact, the session transitioned into an interactive segment where participants created handmade cards filled with encouraging messages and colorful designs for kids undergoing treatment. The activity brought a powerful sense of empathy and purpose to the event, reminding everyone that technology and compassion can go hand in hand.",
    date: "July 10, 2025",
  },
  {
    id: 6,
    src: "/limitdigital@c4h25.JPG",
    alt: "Learning about healthy digital habits with Limit Digital",
    category: "Community",
    description: "At Code4Hope '25, Limit Digital led a thoughtful workshop focused on promoting healthy digital habits among youth. They began by sharing their mission to help students build a balanced relationship with technology, emphasizing the importance of mindfulness, screen time awareness, and mental wellness. The interactive discussion encouraged participants to reflect on their own tech usage and left them with practical strategies for creating a healthier digital lifestyle.",
    date: "July 10, 2025",
  },
  {
    id: 7,
    src: "/c4hxdivergent-team.JPG",
    alt: "Code4Hope x Divergent Teams 2025",
    category: "hackathon",
    description: "Landing back in New York for Code4Hope and Divergent Teams 2025 felt like a homecoming for our team. The energy inside Microsoft's Times Square office was unmistakable—nearly 60 students dove into a one-day sprint hackathon, building products and pitches at lightning speed before presenting to a panel of Microsoft judges. The format rewarded urgency and clarity; teams had just hours to form ideas, gather feedback from mentors, and show how technology could turn community challenges into working impact.",
    date: "November 12, 2025",
  },
  {
    id: 8,
    src: "/c4hxdivergent-speech.JPG",
    alt: "Code4Hope's Send-off at C4H x Divergent 2025",
    category: "community",
    description: "Before the judging window opened, Code4Hope took the stage to set the tone for the day. Founder Aryan Mittal and the Code4Hope executive board got the crowd hype for a day full of fun and building with an electric speech.",
    date: "November 12, 2025",
  },
  {
    id: 9,
    src: "/c4hxdivergent-workshop.JPG",
    alt: "\"Hack to Business\" Workshop at C4H x Divergent 2025",
    category: "workshop",
    description: "Our \"Hack to Business\" workshop returned for an encore after its debut at C4H'25, this time adapted for Divergent Teams. Participants, judges, and even volunteers pulled chairs into a tight circle while we explored how to validate users, prototype fast, and pitch like founders. The live prompt was familiar—take a playful problem and craft a market-ready fix in minutes—but the dialogue felt new. Students and volunteers worked together and rushed to find creative ideas before presenting in front of our board, who gave them feedback and advice on their product.",
    date: "November 12, 2025",
  },
  {
    id: 10,
    src: "/c4hworkshophackjps.jpeg",
    alt: "Code4Hope Workshop at HackJPS",
    category: "workshop",
    description: "At JPS Robotics Team 2554's Annual Hackathon, HackJPS, we hosted a 30-minute lecture on turning hackathon projects into real-world startups, guiding students through the process of validating ideas, building MVPs, and pitching to investors. We shared actionable strategies for identifying target users, collecting feedback, and leveraging free tools to scale early-stage products. By using examples from successful high school-led ventures and highlighting common pitfalls, we aimed to inspire attendees to take their projects beyond the weekend and continue innovating.",
    date: "June 15, 2025",
  },
]

// Function to parse date string to Date object
function parseDate(dateString: string): Date {
  return new Date(dateString)
}

// Sort gallery images by date (newest to oldest)
const galleryImages = [...rawGalleryImages].sort((a, b) => {
  const dateA = parseDate(a.date)
  const dateB = parseDate(b.date)
  return dateB.getTime() - dateA.getTime() // Newest first
})

// Gallery filter categories
const categories = [
  { id: "all", label: "All" },
  { id: "hackathon", label: "Hackathons" },
  { id: "workshop", label: "Workshops" },
  { id: "community", label: "Community" },
]

export default function GalleryPage() {
  // State for filtering and interaction
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(galleryImages)
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [isGridView, setIsGridView] = useState(true)

  // Handle filtering based on category and search query
  useEffect(() => {
    let result = galleryImages

    if (selectedCategory !== "all") {
      result = result.filter((image) => image.category === selectedCategory)
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (image) =>
          image.alt.toLowerCase().includes(query) ||
          image.description.toLowerCase().includes(query) ||
          image.date.toLowerCase().includes(query),
      )
    }

    setFilteredImages(result)
  }, [selectedCategory, searchQuery])

  // Open lightbox with selected image
  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image)
    document.body.style.overflow = "hidden"
  }

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Parallax Hero Section */}
        <section className="py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-8"
          >
            <h1 className="text-5xl font-semibold leading-[1.1] tracking-[-0.05em] text-ink md:text-6xl lg:text-[80px] mb-6">Gallery</h1>
            <p className="text-slate">
              Explore moments from our past events and hackathons. These images showcase the creativity, collaboration,
              and impact of our Code4Hope community.
            </p>
          </motion.div>
        </section>

        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
              {/* Filter tabs */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={cn(
                      "px-3 md:px-4 py-2 text-sm rounded-full transition-all duration-300 flex-shrink-0",
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-surface text-slate hover:bg-surface/80 "
                    )}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              {/* Search and view toggle */}
              <div className="flex items-center space-x-2 md:space-x-4 w-full md:w-auto">
                <div className="relative flex-grow md:flex-grow-0 md:min-w-[200px]">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border rounded-full w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <svg
                    className="absolute left-3 top-2.5 h-4 w-4 md:h-5 md:w-5 text-slate"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                <div className="flex space-x-1 md:space-x-2 flex-shrink-0">
                  <button
                    onClick={() => setIsGridView(true)}
                    className={cn(
                      "p-2 rounded text-xs md:text-sm",
                      isGridView
                        ? "bg-brand-blue-200 text-brand-blue-deep"
                        : "text-slate hover:bg-surface"
                    )}
                    aria-label="Grid view"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setIsGridView(false)}
                    className={cn(
                      "p-2 rounded text-xs md:text-sm",
                      !isGridView
                        ? "bg-brand-blue-200 text-brand-blue-deep"
                        : "text-slate hover:bg-surface"
                    )}
                    aria-label="List view"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {filteredImages.length === 0 ? (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-slate" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-ink">No images found</h3>
                <p className="mt-1 text-slate">Try adjusting your search or filter criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("all")
                    setSearchQuery("")
                  }}
                  className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-charcoal transition"
                >
                  Reset filters
                </button>
              </div>
            ) : isGridView ? (
              // Grid View
              <AnimatePresence>
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                  {filteredImages.map((image) => (
                    <motion.div
                      key={image.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer bg-canvas"
                      onClick={() => openLightbox(image)}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 md:p-4 flex flex-col justify-end">
                        <h3 className="text-white font-bold text-sm md:text-lg line-clamp-2">{image.alt}</h3>
                        <p className="text-white/80 text-xs md:text-sm">{image.date}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            ) : (
              // List View
              <div className="space-y-6">
                {filteredImages.map((image) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col md:flex-row gap-4 md:gap-6 bg-canvas rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 "
                  >
                    <div
                      className="relative md:w-1/3 h-48 md:h-60 cursor-pointer flex-shrink-0"
                      onClick={() => openLightbox(image)}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-4 md:p-6 flex flex-col md:w-2/3">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                        <h3 className="text-lg md:text-xl font-bold text-ink line-clamp-2">{image.alt}</h3>
                      </div>
                      <p className="text-slate text-sm mb-3">{image.date}</p>
                      <p className="text-slate text-sm md:text-base flex-grow leading-relaxed">{image.description}</p>
                      <button
                        onClick={() => openLightbox(image)}
                        className="mt-4 self-start px-4 py-2 text-sm bg-surface hover:bg-surface-soft rounded-md transition-colors"
                      >
                        View full image
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 md:p-4">
            <div className="absolute inset-0" onClick={closeLightbox}></div>
            <div className="relative z-10 max-w-6xl w-full max-h-full flex flex-col">
              <div className="relative h-[60vh] md:h-[70vh] bg-black rounded-t-lg overflow-hidden">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <div className="bg-canvas p-4 md:p-6 rounded-b-lg max-h-[30vh] overflow-y-auto">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                  <div className="flex-grow">
                    <h3 className="text-lg md:text-xl font-bold text-ink pr-8 md:pr-0">{selectedImage.alt}</h3>
                    <p className="text-slate text-sm">{selectedImage.date}</p>
                    <p className="mt-2 text-slate text-sm md:text-base leading-relaxed">{selectedImage.description}</p>
                  </div>
                  <button
                    onClick={closeLightbox}
                    className="absolute top-4 right-4 md:relative md:top-auto md:right-auto text-slate hover:text-ink bg-canvas md:bg-transparent rounded-full p-2 md:p-0"
                    aria-label="Close lightbox"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
