"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";

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
function PolicyCard({ policy }: { policy: typeof legalPolicies[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-sm p-8 md:p-12 mb-8"
    >
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2 text-gray-800 border-l-4 border-primary pl-4">
          {policy.title}
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          <strong>Last Updated:</strong> {policy.lastUpdated}
        </p>
        <p className="text-gray-600 mb-6">{policy.description}</p>
      </div>
      
      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        {policy.content.sections.map((section, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{section.title}</h3>
            {section.content.map((content, contentIndex) => (
              <div key={contentIndex}>
                {renderContent(content)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState("All");
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
                return content.items.some((item: string) => item.toLowerCase().includes(query));
              }
              if (content.type === 'contact') {
                return content.text.toLowerCase().includes(query) || content.email.toLowerCase().includes(query);
              }
              return false;
            })
          )
      );
    }
    
    return result;
  }, [activeTab, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
              Legal Policies
            </h1>
            <p className="text-gray-600 text-lg">
              Our commitment to transparency and your rights
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policies Content */}
      <ScrollReveal>
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            {/* Controls Section */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                {/* Tab Navigation */}
                <div className="flex flex-wrap gap-2 w-full md:w-auto">
                  {policyCategories.map(category => (
                    <button
                      key={category}
                      onClick={() => setActiveTab(category)}
                      className={`px-3 md:px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 flex-shrink-0 ${
                        activeTab === category 
                          ? "bg-primary text-primary-foreground shadow-md" 
                          : "text-gray-600 hover:bg-white/50 hover:text-gray-800"
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
                    className="pl-10 pr-4 py-2 border rounded-full w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  />
                  <svg
                    className="absolute left-3 top-2.5 h-4 w-4 md:h-5 md:w-5 text-gray-600"
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
                <svg className="mx-auto h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-800">No policies found</h3>
                <p className="mt-1 text-gray-600">Try adjusting your search or filter criteria.</p>
                <button
                  onClick={() => {
                    setActiveTab("All")
                    setSearchQuery("")
                  }}
                  className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/80 transition"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
                {filteredPolicies.map(policy => (
                  <PolicyCard key={policy.id} policy={policy} />
                ))}
              </div>
            )}
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
