"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { LocationIcon } from "@/components/icons";
import { upcomingEvents } from "@/lib/data/home-data";
import { isRemoteImage } from "@/lib/utils"

// Layout adapts to how many events we actually have, so a single event is
// centred rather than stranded in the left third of a 3-column grid.
const GRID_BY_COUNT: Record<number, string> = {
  1: "md:grid-cols-1 max-w-sm",
  2: "md:grid-cols-2 max-w-3xl",
  3: "md:grid-cols-3 max-w-none",
};

export function EventsSection() {
  // Show only the three most recent events of the current calendar year. The
  // year is read off startDate as a string so it never shifts by timezone.
  const currentYear = new Date().getFullYear();
  const events = upcomingEvents
    .filter((event) => Number(event.startDate.slice(0, 4)) === currentYear)
    .sort((a, b) => a.startDate.localeCompare(b.startDate))
    .slice(-3);

  if (events.length === 0) return null;

  return (
    <ScrollReveal>
      <section id="events" className="w-full py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-ink">Upcoming Events</h2>
            <p className="text-slate">
              Throughout the year, we host multiple hackathons, each focusing on a different technology trend
              that supports charitable causes.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block mt-4"
            >
            </motion.div>
          </motion.div>

          <div
            className={`grid grid-cols-1 gap-8 mt-6 mx-auto ${
              GRID_BY_COUNT[events.length] ?? GRID_BY_COUNT[3]
            }`}
          >
            {events.map((event, index) => (
              <div key={index} className="flex flex-col h-full">
                <div className="card rounded-lg overflow-hidden h-full shadow-md bg-canvas">
                  <div className="relative">
                    <div className="aspect-[4/3] overflow-hidden">
                      <Image
                        src={event.image}
                        unoptimized={isRemoteImage(event.image)}
                        alt={event.title}
                        width={320}
                        height={240}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="absolute top-3 right-3 bg-primary text-white px-2 py-0.5 rounded-full text-xs font-medium">
                      {event.date}
                    </div>
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold mb-1 text-ink">{event.title}</h3>
                    <div className="flex items-center text-slate mb-2">
                      <LocationIcon className="h-4 w-4 mr-1" />
                      <span className="text-xs">{event.location}</span>
                    </div>
                    <p className="text-slate mb-4 text-sm line-clamp-3">
                      {event.description}
                    </p>
                    <div className="mt-auto pt-2 flex">
                      <div className="w-full">
                        {event.isOver ? (
                          <Button
                            className="w-full bg-hairline text-muted cursor-not-allowed text-sm py-1.5"
                            disabled
                          >
                            Event Over
                          </Button>
                        ) : (
                          <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full"
                          >
                            <Button
                              className="w-full bg-primary hover:bg-primary text-white text-sm py-1.5"
                              onClick={() => window.open(event.link, "_self")}
                            >
                              Register Now
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
