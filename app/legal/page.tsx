"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState("privacy");

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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

      {/* Navigation */}
      <section className="bg-white sticky top-16 z-40 border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-1 py-4">
            <Button
              variant={activeTab === "privacy" ? "default" : "outline"}
              onClick={() => scrollToSection("privacy")}
              className="px-6"
            >
              Privacy Policy
            </Button>
            <Button
              variant={activeTab === "terms" ? "default" : "outline"}
              onClick={() => scrollToSection("terms")}
              className="px-6"
            >
              Terms of Service
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Privacy Policy Section */}
          <ScrollReveal>
            <section id="privacy" className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm p-8 md:p-12"
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-800 border-l-4 border-primary pl-4">
                  Privacy Policy
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                  <p className="text-sm text-gray-500 mb-8">
                    <strong>Last Updated:</strong> January 1, 2025
                  </p>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">1. Information We Collect</h3>
                    <p className="mb-4">
                      At Code4Hope, we collect information that you provide directly to us when you:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>Register for our hackathons and events</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Contact us through our website or social media</li>
                      <li>Participate in our surveys or feedback forms</li>
                    </ul>
                    <p>
                      This may include your name, email address, school information, and any other information you choose to provide.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">2. How We Use Your Information</h3>
                    <p className="mb-4">We use the information we collect to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Organize and manage our hackathons and events</li>
                      <li>Send you updates about upcoming events and opportunities</li>
                      <li>Communicate with you about your participation in our programs</li>
                      <li>Improve our services and develop new programs</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">3. Information Sharing</h3>
                    <p className="mb-4">
                      We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>To our trusted partners who help us operate our events (subject to confidentiality agreements)</li>
                      <li>When required by law or to protect our rights and safety</li>
                      <li>In connection with a merger, acquisition, or sale of assets (with notice to you)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">4. Data Security</h3>
                    <p>
                      We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">5. Your Rights</h3>
                    <p className="mb-4">You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access, update, or delete your personal information</li>
                      <li>Opt out of marketing communications</li>
                      <li>Request information about how we use your data</li>
                    </ul>
                    <p className="mt-4">
                      To exercise these rights, please contact us at{" "}
                      <a href="mailto:privacy@code4hope.net" className="text-primary hover:underline">
                        privacy@code4hope.net
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">6. Contact Us</h3>
                    <p>
                      If you have questions about this Privacy Policy, please contact us at{" "}
                      <a href="mailto:privacy@code4hope.net" className="text-primary hover:underline">
                        privacy@code4hope.net
                      </a>
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>
          </ScrollReveal>

          {/* Terms of Service Section */}
          <ScrollReveal>
            <section id="terms" className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm p-8 md:p-12"
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-800 border-l-4 border-primary pl-4">
                  Terms of Service
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                  <p className="text-sm text-gray-500 mb-8">
                    <strong>Last Updated:</strong> January 1, 2025
                  </p>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">1. Acceptance of Terms</h3>
                    <p>
                      By accessing and using Code4Hope's website and participating in our events, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">2. Description of Service</h3>
                    <p>
                      Code4Hope is a not-for-profit organization that hosts hackathons and educational events for students. Our services include event organization, educational resources, and community building activities.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">3. User Conduct</h3>
                    <p className="mb-4">When participating in our events or using our services, you agree to:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>Behave respectfully and professionally toward all participants, organizers, and sponsors</li>
                      <li>Follow all event rules and guidelines</li>
                      <li>Not engage in harassment, discrimination, or inappropriate behavior</li>
                      <li>Respect intellectual property rights</li>
                      <li>Not disrupt or interfere with our events or services</li>
                    </ul>
                    <p>
                      We reserve the right to remove participants who violate these guidelines.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">4. Intellectual Property</h3>
                    <p className="mb-4">
                      Projects created during our hackathons remain the intellectual property of their creators. However, by participating, you grant Code4Hope permission to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Display your project information for promotional purposes</li>
                      <li>Use your project as an example in educational materials</li>
                      <li>Share information about winning projects with sponsors and partners</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">5. Liability and Disclaimers</h3>
                    <p className="mb-4">
                      Code4Hope provides services "as is" without warranties of any kind. We are not liable for:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Technical issues or service interruptions</li>
                      <li>Loss of data or projects</li>
                      <li>Indirect or consequential damages</li>
                      <li>Actions of other participants or third parties</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">6. Privacy</h3>
                    <p>
                      Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">7. Changes to Terms</h3>
                    <p>
                      We may update these Terms of Service from time to time. We will notify you of any material changes by posting the new terms on our website. Your continued use of our services after such changes constitutes acceptance of the new terms.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">8. Contact Information</h3>
                    <p>
                      If you have questions about these Terms of Service, please contact us at{" "}
                      <a href="mailto:legal@code4hope.net" className="text-primary hover:underline">
                        legal@code4hope.net
                      </a>
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
