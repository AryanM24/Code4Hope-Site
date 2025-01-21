"use client"

import Link from "next/link"
import { YoutubeIcon, InstagramIcon, TwitterIcon, GithubIcon } from "lucide-react"
import { TiktokIcon } from "@/components/icons"

const socialLinks = [
  { name: "YouTube", icon: YoutubeIcon, href: "#", color: "hover:bg-red-600" },
  { name: "Instagram", icon: InstagramIcon, href: "#", color: "hover:bg-pink-600" },
  { name: "TikTok", icon: TiktokIcon, href: "#", color: "hover:bg-black" },
  { name: "Twitter", icon: TwitterIcon, href: "#", color: "hover:bg-blue-400" },
  { name: "GitHub", icon: GithubIcon, href: "#", color: "hover:bg-gray-800" },
]

export function SocialLinks() {
  return (
    <div className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="border-2 border-[#826CB8] shadow-md rounded-[32px] p-8 bg-white">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-3xl font-bold text-black">Connect with Code4Hope</h2>
            <p className="text-gray-600 text-center max-w-2xl">
              Join our vibrant community! Follow us on social media for the latest updates, event information, and
              everything happening at Code4Hope.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className={`flex items-center justify-center w-12 h-12 rounded-full bg-[#826CB8] ${social.color} transition-all duration-300 hover:scale-110 active:scale-95`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="h-6 w-6 text-white" />
                </Link>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Stay connected and be part of our journey to empower students through technology!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

