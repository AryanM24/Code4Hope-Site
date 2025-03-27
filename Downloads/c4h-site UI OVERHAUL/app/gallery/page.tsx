"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

// Enhanced gallery data with categories and descriptions
const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Hackathon Winners 2024",
    category: "hackathon",
    description: "Our winning team presenting their solution at the 2024 Climate Tech Hackathon.",
    date: "March 2024",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Workshop Session",
    category: "workshop",
    description: "Participants engaged in our AI for Good workshop series.",
    date: "January 2024",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Community Outreach",
    category: "community",
    description: "Code4Hope volunteers teaching coding basics at the local community center.",
    date: "February 2024",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Project Demo Day",
    category: "hackathon",
    description: "Teams demonstrating their projects to judges and community partners.",
    date: "November 2023",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Youth Coding Camp",
    category: "workshop",
    description: "Summer coding camp for underrepresented youth in tech.",
    date: "July 2023",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Networking Event",
    category: "community",
    description: "Tech professionals and community members connecting at our monthly meetup.",
    date: "October 2023",
  },
]

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
  const [filteredImages, setFilteredImages] = useState(galleryImages)
  const [selectedImage, setSelectedImage] = useState(null)
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
  const openLightbox = (image) => {
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
        <section className="py-16 bg-[#F9FAFB] dark:bg-gray-900">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#1F2937] dark:text-white">Gallery</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Explore moments from our past events and hackathons. These images showcase the creativity, collaboration,
              and impact of our Code4Hope community.
            </p>
          </motion.div>
        </section>

        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
              {/* Filter tabs */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-[#826CB8] text-white shadow-md"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              {/* Search and view toggle */}
              <div className="flex items-center space-x-4 w-full md:w-auto">
                <div className="relative flex-grow md:flex-grow-0">
                  <input
                    type="text"
                    placeholder="Search gallery..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border rounded-full w-full focus:outline-none focus:ring-2 focus:ring-[#826CB8]"
                  />
                  <svg
                    className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
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

                <div className="flex space-x-2">
                  <button
                    onClick={() => setIsGridView(true)}
                    className={`p-2 rounded ${isGridView ? "bg-green-100 text-[#826CB8]" : "text-gray-500"}`}
                    aria-label="Grid view"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setIsGridView(false)}
                    className={`p-2 rounded ${!isGridView ? "bg-green-100 text-[#826CB8]" : "text-gray-500"}`}
                    aria-label="List view"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">No images found</h3>
                <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("all")
                    setSearchQuery("")
                  }}
                  className="mt-4 px-4 py-2 bg-[#826CB8] text-white rounded-md hover:bg-green-600 transition"
                >
                  Reset filters
                </button>
              </div>
            ) : isGridView ? (
              // Grid View
              <AnimatePresence>
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredImages.map((image) => (
                    <motion.div
                      key={image.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer"
                      onClick={() => openLightbox(image)}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                        <h3 className="text-white font-bold text-lg">{image.alt}</h3>
                        <p className="text-white/80 text-sm">{image.date}</p>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="bg-[#826CB8]/90 text-white text-xs px-2 py-1 rounded-full capitalize">
                          {image.category}
                        </span>
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
                    className="flex flex-col md:flex-row gap-6 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div
                      className="relative md:w-1/3 h-60 md:h-auto cursor-pointer"
                      onClick={() => openLightbox(image)}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col md:w-2/3">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-[#1F2937]">{image.alt}</h3>
                        <span className="bg-[#826CB8] text-white text-xs px-2 py-1 rounded-full capitalize">
                          {image.category}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-2">{image.date}</p>
                      <p className="text-gray-700 flex-grow">{image.description}</p>
                      <button
                        onClick={() => openLightbox(image)}
                        className="mt-4 self-start px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
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
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0" onClick={closeLightbox}></div>
            <div className="relative z-10 max-w-6xl w-full max-h-full flex flex-col">
              <div className="relative h-[70vh] bg-black rounded-t-lg overflow-hidden">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="bg-white p-6 rounded-b-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2937]">{selectedImage.alt}</h3>
                    <p className="text-gray-500">{selectedImage.date}</p>
                    <p className="mt-2 text-gray-700">{selectedImage.description}</p>
                  </div>
                  <button
                    onClick={closeLightbox}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Close lightbox"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

