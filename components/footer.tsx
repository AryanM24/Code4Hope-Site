import Image from "next/image"
import Link from "next/link"
import { YoutubeIcon, InstagramIcon } from 'lucide-react'
import { TiktokIcon } from "@/components/icons"
import white_logo from "@/components/assets/images/white_logo_horizontal.png";

export function Footer() {
  return (
      <footer className="w-full py-6 bg-[#826CB8] text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Image
                src={white_logo}
                alt="Code4Hope Logo"
                width={154}
                height={38}
                className="h-10"
            />
            <div className="flex flex-col items-center">
              <p className="text-sm">© Code4Hope 2025. All Rights Reserved.</p>
              <p className="text-sm">made with ❤️ by the C4H E-Board</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-medium">Follow Our Socials!</span>
              <div className="flex space-x-4">
                <Link href="#" className="text-white hover:text-gray-200">
                  <YoutubeIcon className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-white hover:text-gray-200">
                  <InstagramIcon className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-white hover:text-gray-200">
                  <TiktokIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

