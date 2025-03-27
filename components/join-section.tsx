"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function JoinSection() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 p-8 md:p-12 bg-primary/90">
              <div className="h-full flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Join Code4Hope
                </h2>
                <p className="text-white/90 text-lg mb-8 leading-relaxed">
                  Become part of our vibrant community and help create technology solutions that make a real difference for charitable causes.
                </p>
                <div className="mt-auto">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      className="bg-white text-primary hover:bg-gray-100 px-6 font-medium"
                      onClick={() => window.open("https://discord.gg/7ssCZx8Hme", "_blank")}
                    >
                      Join Our Community
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 p-8 md:p-12 bg-white dark:bg-gray-800 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-6 text-[#1F2937] dark:text-white">
                Explore Our Resources
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We've prepared comprehensive documentation to help you get started and understand everything about Code4Hope's mission, events, and how you can contribute.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { 
                    href: "https://docs.code4hope.net/", 
                    icon: <DocumentIcon className="h-6 w-6" />, 
                    label: "Official Documentation",
                    description: "Everything you need to know about Code4Hope"
                  },
                  { 
                    href: "https://docs.code4hope.net/get-started/join", 
                    icon: <UserPlusIcon className="h-6 w-6" />, 
                    label: "Join the Team",
                    description: "Apply to become a team member"
                  },
                  { 
                    href: "/events", 
                    icon: <CalendarIcon className="h-6 w-6" />, 
                    label: "Upcoming Events",
                    description: "Check out our event schedule"
                  }
                ].map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 10px 25px -5px rgba(130, 108, 184, 0.2), 0 8px 10px -6px rgba(130, 108, 184, 0.1)",
                      transition: { duration: 0.3 }
                    }}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md"
                  >
                    <Link
                      href={resource.href}
                      className="flex flex-col h-full p-5 hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                        <div className="text-primary">
                          {resource.icon}
                        </div>
                      </div>
                      <h4 className="font-semibold mb-2 text-[#1F2937] dark:text-white">{resource.label}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{resource.description}</p>
                      <div className="mt-auto pt-2 flex items-center text-sm font-medium text-primary">
                        <span>View</span>
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DocumentIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}

function UserPlusIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" y1="8" x2="19" y2="14" />
      <line x1="22" y1="11" x2="16" y2="11" />
    </svg>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}