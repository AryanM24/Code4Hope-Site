"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { galleryImages } from "@/lib/data/home-data";
import { isRemoteImage } from "@/lib/utils"

export function GallerySection() {
  return (
    <ScrollReveal>
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-ink">Our Impact in Pictures</h2>
            <p className="text-slate">Glimpses of our work and the students we serve</p>
          </motion.div>

          {/* Mobile: a horizontally swiped, snapping row that bleeds to the
              screen edges, with the next card peeking so the affordance is
              obvious without arrows. From sm up it is the usual grid. */}
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-4 px-4 no-scrollbar sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="relative w-[78%] shrink-0 snap-start overflow-hidden rounded-lg shadow-md group sm:w-auto sm:shrink"
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={image.src || "https://placehold.co/400x400/CCCCCC/FFFFFF?text=Image+Missing"}
                    unoptimized={isRemoteImage(image.src)}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = `https://placehold.co/${target.width || 400}x${target.height || 400}/CCCCCC/FFFFFF?text=Error`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                    <h3 className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {image.alt}
                    </h3>
                    <p className="text-white/70 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Button asChild className="bg-primary hover:bg-primary text-white">
              <Link href="/gallery">See Full Gallery</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </ScrollReveal>
  );
}
