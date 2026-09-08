"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { X, FileText, Shield, Scale } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Legal policies data
const legalPolicies = [
  {
    id: "privacy",
    title: "Privacy Policy",
    category: "Privacy",
    lastUpdated: "January 1, 2025",
    description: "Our commitment to protecting your personal information and data privacy.",
    content: {
      sections: [
        {
          title: "1. Information We Collect",
          content: [
            "At Code4Hope, we collect information that you provide directly to us when you:",
            {
              type: "list",
              items: [
                "Register for our hackathons and events",
                "Subscribe to our newsletter",
                "Contact us through our website or social media",
                "Participate in our surveys or feedback forms"
              ]
            },
            "This may include your name, email address, school information, and any other information you choose to provide."
          ]
        },
        {
          title: "2. How We Use Your Information",
          content: [
            "We use the information we collect to:",
            {
              type: "list",
              items: [
                "Organize and manage our hackathons and events",
                "Send you updates about upcoming events and opportunities",
                "Communicate with you about your participation in our programs",
                "Improve our services and develop new programs",
                "Comply with legal obligations"
              ]
            }
          ]
        },
        {
          title: "3. Information Sharing",
          content: [
            "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:",
            {
              type: "list",
              items: [
                "To our trusted partners who help us operate our events (subject to confidentiality agreements)",
                "When required by law or to protect our rights and safety",
                "In connection with a merger, acquisition, or sale of assets (with notice to you)"
              ]
            }
          ]
        },
        {
          title: "4. Data Security",
          content: [
            "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure."
          ]
        },
        {
          title: "5. Your Rights",
          content: [
            "You have the right to:",
            {
              type: "list",
              items: [
                "Access, update, or delete your personal information",
                "Opt out of marketing communications",
                "Request information about how we use your data"
              ]
            },
            {
              type: "contact",
              text: "To exercise these rights, please contact us at",
              email: "events@code4hope.net"
            }
          ]
        },
        {
          title: "6. Contact Us",
          content: [
            {
              type: "contact",
              text: "If you have questions about this Privacy Policy, please contact us at",
              email: "events@code4hope.net"
            }
          ]
        }
      ]
    }
  },
  {
    id: "terms",
    title: "Terms of Service",
    category: "Terms",
    lastUpdated: "January 1, 2025",
    description: "The terms and conditions governing your use of our services and participation in our events.",
    content: {
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: [
            "By accessing and using Code4Hope's website and participating in our events, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services."
          ]
        },
        {
          title: "2. Description of Service",
          content: [
            "Code4Hope is a not-for-profit organization that hosts hackathons and educational events for students. Our services include event organization, educational resources, and community building activities."
          ]
        },
        {
          title: "3. User Conduct",
          content: [
            "When participating in our events or using our services, you agree to:",
            {
              type: "list",
              items: [
                "Behave respectfully and professionally toward all participants, organizers, and sponsors",
                "Follow all event rules and guidelines",
                "Not engage in harassment, discrimination, or inappropriate behavior",
                "Respect intellectual property rights",
                "Not disrupt or interfere with our events or services"
              ]
            },
            "We reserve the right to remove participants who violate these guidelines."
          ]
        },
        {
          title: "4. Intellectual Property",
          content: [
            "Projects created during our hackathons remain the intellectual property of their creators. However, by participating, you grant Code4Hope permission to:",
            {
              type: "list",
              items: [
                "Display your project information for promotional purposes",
                "Use your project as an example in educational materials",
                "Share information about winning projects with sponsors and partners"
              ]
            }
          ]
        },
        {
          title: "5. Liability and Disclaimers",
          content: [
            "Code4Hope provides services \"as is\" without warranties of any kind. We are not liable for:",
            {
              type: "list",
              items: [
                "Technical issues or service interruptions",
                "Loss of data or projects",
                "Indirect or consequential damages",
                "Actions of other participants or third parties"
              ]
            }
          ]
        },
        {
          title: "6. Privacy",
          content: [
            "Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information."
          ]
        },
        {
          title: "7. Changes to Terms",
          content: [
            "We may update these Terms of Service from time to time. We will notify you of any material changes by posting the new terms on our website. Your continued use of our services after such changes constitutes acceptance of the new terms."
          ]
        },
        {
          title: "8. Contact Information",
          content: [
            {
              type: "contact",
              text: "If you have questions about these Terms of Service, please contact us at",
              email: "events@code4hope.net"
            }
          ]
        }
      ]
    }
  }
];

// Helper function to render content
const renderContent = (content: any) => {
  if (typeof content === 'string') {
    return <p className="mb-4">{content}</p>;
  }
  
  if (content.type === 'list') {
    return (
      <ul className="list-disc pl-6 space-y-2 mb-4">
        {content.items.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  
  if (content.type === 'contact') {
    return (
      <p className="mb-4">
        {content.text}{" "}
        <a href={`mailto:${content.email}`} className="text-primary hover:underline">
          {content.email}
        </a>
      </p>
    );
  }
  
  return null;
};

// Policy Card Component
function PolicyCard({ policy, onReadMore }: { policy: typeof legalPolicies[0]; onReadMore: (policy: typeof legalPolicies[0]) => void }) {
  const Icon = policy.id === "privacy" ? Shield : Scale;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-canvas border rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row">
        <div className="flex-shrink-0 w-full md:w-52 h-48 md:h-52 relative bg-surface flex items-center justify-center">
          <div className="bg-canvas p-6 rounded-2xl shadow-sm border border-brand-blue-100">
            <Icon size={64} className="text-primary" />
          </div>
        </div>
        <div className="p-4 md:p-6 flex flex-col justify-between flex-grow">
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <h3 className="text-lg md:text-xl font-bold text-ink line-clamp-2">{policy.title}</h3>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-surface text-slate whitespace-nowrap self-start sm:self-auto">
                {policy.category}
              </span>
            </div>

            <div className="text-sm">
              <p className="font-semibold text-primary">Last Updated: {policy.lastUpdated}</p>
            </div>

            <p className="text-slate text-sm leading-relaxed line-clamp-3">{policy.description}</p>
          </div>

          <div className="mt-4 pt-4">
            <Button
              onClick={() => onReadMore(policy)}
              className="w-full sm:w-auto text-sm"
              size="sm"
            >
              Read Policy
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Detailed Policy Modal Component
function PolicyDetailModal({ policy, onClose }: { policy: typeof legalPolicies[0] | null; onClose: () => void }) {
  if (!policy) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-stretch p-2 md:p-4 overflow-y-auto"
      style={{ maxHeight: '100vh' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-canvas rounded-lg md:rounded-xl shadow-2xl w-full max-w-4xl flex flex-col max-h-full overflow-hidden relative"
        style={{ maxHeight: '100%', minHeight: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Header */}
        <div className="sticky top-0 bg-canvas p-4 md:p-6 border-b flex justify-between items-start">
          <div className="flex-1 mr-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 pr-8">{policy.title}</h2>
            <div className="text-sm md:text-base">
              <p className="text-primary font-semibold">Last Updated: {policy.lastUpdated}</p>
            </div>
            <p className="text-slate mt-2 text-sm md:text-base">{policy.description}</p>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 text-slate hover:text-ink p-1"
          >
            <X size={20} className="md:w-6 md:h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto min-h-0">
          <div className="p-4 md:p-6">
            <div className="max-w-none space-y-8">
              {policy.content.sections.map((section, index) => (
                <section key={index}>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold border-l-4 border-brand-blue-700 pl-4 mb-4">
                    {section.title}
                  </h3>
                  <div className="text-slate text-sm md:text-base leading-relaxed space-y-4">
                    {section.content.map((content, contentIndex) => (
                      <div key={contentIndex}>
                        {renderContent(content)}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function LegalPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("All");
  const [selectedPolicy, setSelectedPolicy] = useState<typeof legalPolicies[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const policyCategories = useMemo(() => {
    const categories = new Set(legalPolicies.map(policy => policy.category));
    return ["All", ...Array.from(categories)];
  }, []);

  const filteredPolicies = useMemo(() => {
    let result = legalPolicies;
    
    // Filter by tab
    if (activeTab !== "All") {
      result = result.filter(policy => policy.category === activeTab);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (policy) =>
          policy.title.toLowerCase().includes(query) ||
          policy.description.toLowerCase().includes(query) ||
          policy.content.sections.some(section => 
            section.title.toLowerCase().includes(query) ||
            section.content.some(content => {
              if (typeof content === 'string') {
                return content.toLowerCase().includes(query);
              }
              if (content.type === 'list') {
                return Array.isArray(content.items) && content.items.some((item: string) => item.toLowerCase().includes(query));
              }
              if (content.type === 'contact') {
                return Boolean(
                  content.text?.toLowerCase().includes(query) ||
                  content.email?.toLowerCase().includes(query)
                );
              }
              return false;
            })
          )
      );
    }
    
    return result;
  }, [activeTab, searchQuery]);

  // Handle URL-based modal opening
  useEffect(() => {
    const policyId = searchParams.get('policy');
    if (policyId) {
      const policy = legalPolicies.find(p => p.id === policyId);
      if (policy) {
        setSelectedPolicy(policy);
      }
    } else {
      setSelectedPolicy(null);
    }
  }, [searchParams]);

  const handleReadMore = (policy: typeof legalPolicies[0]) => {
    const url = new URL(window.location.href);
    url.searchParams.set('policy', policy.id);
    window.history.pushState({}, '', url.toString());
    setSelectedPolicy(policy);
  };

  const handleCloseModal = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('policy');
    window.history.pushState({}, '', url.toString());
    setSelectedPolicy(null);
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const policyId = new URLSearchParams(window.location.search).get('policy');
      if (policyId) {
        const policy = legalPolicies.find(p => p.id === policyId);
        setSelectedPolicy(policy || null);
      } else {
        setSelectedPolicy(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <>
      <AnimatePresence>
        {selectedPolicy && <PolicyDetailModal policy={selectedPolicy} onClose={handleCloseModal} />}
      </AnimatePresence>

      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-20 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="container mx-auto px-4 text-center"
            >
              <h1 className="text-5xl font-semibold leading-[1.1] tracking-[-0.05em] text-ink md:text-6xl lg:text-[80px] mb-4">
                Legal Policies
              </h1>
              <p className="text-slate text-lg max-w-2xl mx-auto">
                Our commitment to transparency and your rights. Learn more about how we protect your data and the terms of participating in our events.
              </p>
            </motion.div>
          </section>

          {/* Policies Content */}
          <ScrollReveal>
            <section className="py-8 md:py-12">
              <div className="container mx-auto px-4">
                {/* Controls Section */}
                <div className="max-w-4xl mx-auto mb-8">
                  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    {/* Tab Navigation */}
                    <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-start">
                      {policyCategories.map(category => (
                        <button
                          key={category}
                          onClick={() => setActiveTab(category)}
                          className={`px-3 md:px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 flex-shrink-0 ${
                            activeTab === category 
                              ? "bg-primary text-primary-foreground shadow-md" 
                              : "text-slate hover:bg-canvas/50 hover:text-ink"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                    
                    {/* Search Bar */}
                    <div className="relative w-full md:w-auto md:min-w-[250px]">
                      <input
                        type="text"
                        placeholder="Search policies..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 pr-4 py-2 border rounded-full w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-canvas"
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
                  </div>
                </div>
                
                {/* Policies List */}
                {filteredPolicies.length === 0 ? (
                  <div className="text-center py-12">
                    <svg className="mx-auto h-12 w-12 text-slate" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <h3 className="mt-2 text-lg font-medium text-ink">No policies found</h3>
                    <p className="mt-1 text-slate">Try adjusting your search or filter criteria.</p>
                    <button
                      onClick={() => {
                        setActiveTab("All")
                        setSearchQuery("")
                      }}
                      className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-charcoal transition"
                    >
                      Reset filters
                    </button>
                  </div>
                ) : (
                  <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
                    {filteredPolicies.map(policy => (
                      <PolicyCard key={policy.id} policy={policy} onReadMore={handleReadMore} />
                    ))}
                  </div>
                )}
              </div>
            </section>
          </ScrollReveal>
        </main>
      </div>
    </>
  );
}

export default function LegalPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-surface" />}>
      <LegalPageContent />
    </Suspense>
  );
}
