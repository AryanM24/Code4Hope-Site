// components/EventPopup.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui Button
import Link from "next/link";
import { X, CalendarDays, PartyPopper } from "lucide-react"; // Icons

interface EventPopupProps {
  eventPageUrl?: string;
  eventName?: string;
  eventDate?: string;
}

const EventPopup: React.FC<EventPopupProps> = ({
  eventPageUrl = "/events", // Default event page URL
  eventName = "Our Next Big Event!",
  eventDate = "Coming Soon!",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the popup after a short delay to be less intrusive
    const timer = setTimeout(() => {
      // Check if the popup has been dismissed before
      const dismissed = sessionStorage.getItem("eventPopupDismissed");
      if (!dismissed) {
        setIsVisible(true);
      }
    }, 1500); // 1.5-second delay

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Optionally, remember dismissal for the session
    sessionStorage.setItem("eventPopupDismissed", "true");
  };

  const handleRedirect = () => {
    setIsVisible(false);
    sessionStorage.setItem("eventPopupDismissed", "true");
    // No need to programmatically redirect if using Link,
    // but if it were a button doing other actions first:
    // router.push(eventPageUrl);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 p-6 rounded-xl shadow-2xl bg-card dark:bg-gray-800 border border-border dark:border-gray-700 w-full max-w-md text-foreground dark:text-white"
          role="alertdialog"
          aria-labelledby="event-popup-title"
          aria-describedby="event-popup-description"
        >
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 p-1 rounded-full text-muted-foreground hover:bg-muted dark:hover:bg-gray-700 transition-colors"
            aria-label="Close event notification"
          >
            <X size={20} />
          </button>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 mt-1">
              <PartyPopper size={36} className="text-primary" />
            </div>
            <div>
              <h2 id="event-popup-title" className="text-xl font-semibold mb-1">
                {eventName}
              </h2>
              <div className="flex items-center text-sm text-muted-foreground dark:text-gray-300 mb-3">
                <CalendarDays size={16} className="mr-2" />
                <span>{eventDate}</span>
              </div>
              <p id="event-popup-description" className="text-sm text-muted-foreground dark:text-gray-300 mb-5">
                Don't miss out on our upcoming event! Join us for an exciting experience.
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 sm:space-y-0">
                <Link href={eventPageUrl} passHref legacyBehavior>
                  <Button
                    onClick={handleRedirect}
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Learn More & Register
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  onClick={handleClose}
                  className="w-full sm:w-auto dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
                >
                  Maybe Later
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventPopup;
