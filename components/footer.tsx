import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-ink py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-2 space-y-6">
            <Image
              src="/c4hlogo.png"
              alt="Code4Hope Logo"
              width={100}
              height={100}
              className="h-16 w-auto rounded-2xl"
            />
            <p className="max-w-sm text-sm leading-relaxed text-white/60">Empowering students to innovate and make impact for charitable causes.</p>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-4">
              <a
                href="https://www.instagram.com/code4hope_/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/55 transition-colors hover:text-brand-blue-700"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/code4hope"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/55 transition-colors hover:text-brand-blue-700"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@code4hopeofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/55 transition-colors hover:text-brand-blue-700"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.10z" />
                </svg>
              </a>
              <a
                href="https://x.com/code4hope_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/55 transition-colors hover:text-brand-blue-700"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="https://github.com/Code4Hope"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/55 transition-colors hover:text-brand-blue-700"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-6">Resources</h3>
            <div className="space-y-3">
              <Link
                href="/events"
                className="block text-sm text-white/55 transition-colors hover:text-brand-blue-700"
              >
                Upcoming Events
              </Link>
              <Link
                href="/#previous-winners"
                className="block text-sm text-white/55 transition-colors hover:text-brand-blue-700"
              >
                Past Winners
              </Link>
              <Link
                href="/#workshops"
                className="block text-sm text-white/55 transition-colors hover:text-brand-blue-700"
              >
                Workshops
              </Link>
              <Link
                href="/gallery"
                className="block text-sm text-white/55 transition-colors hover:text-brand-blue-700"
              >
                Gallery
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-6">Community</h3>
            <div className="space-y-3">
              <Link href="/team" className="block text-sm text-white/55 transition-colors hover:text-brand-blue-700">
                Our Team
              </Link>
              <Link href="/about" className="block text-sm text-white/55 transition-colors hover:text-brand-blue-700">
                About Us
              </Link>
              <a 
                href="mailto:events@code4hope.net" 
                className="block text-sm text-white/55 transition-colors hover:text-brand-blue-700"
              >
                Contact
              </a>
              <Link
                href="/sponsors"
                className="block text-sm text-white/55 transition-colors hover:text-brand-blue-700"
              >
                Become a Sponsor
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-6">Legal</h3>
            <div className="space-y-3">
              <Link
                href="/legal"
                className="block text-sm text-white/55 transition-colors hover:text-brand-blue-700"
              >
                Legal Policies
              </Link>
              <Link
                href="/legal#privacy"
                className="block text-sm text-white/55 transition-colors hover:text-brand-blue-700"
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal#terms"
                className="block text-sm text-white/55 transition-colors hover:text-brand-blue-700"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/55">© 2025 Code4Hope 501(c)(3). All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
