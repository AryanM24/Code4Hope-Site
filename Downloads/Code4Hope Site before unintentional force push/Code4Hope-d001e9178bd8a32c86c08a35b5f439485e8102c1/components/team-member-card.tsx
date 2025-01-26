import Image from "next/image"
import Link from "next/link"
import { LinkedinIcon, InstagramIcon } from 'lucide-react'
import { TiktokIcon } from "@/components/icons"

interface TeamMemberCardProps {
  name: string
  title: string
  image: string
  socials: {
    linkedin: string
    instagram: string
    tiktok: string
  }
}

export function TeamMemberCard({ name, title, image, socials }: TeamMemberCardProps) {
  return (
    <div className="rounded-lg border-2 border-[#826CB8] p-6 flex flex-col items-center">
      <div className="w-48 h-48 mb-4">
        <Image
          src={image}
          alt={name}
          width={192}
          height={192}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-600 mb-4 text-center">{title}</p>
      <div className="flex gap-3">
        <Link
          href={socials.linkedin}
          className="bg-black rounded-full p-2 hover:opacity-80 transition-opacity"
        >
          <LinkedinIcon className="h-5 w-5 text-white" />
        </Link>
        <Link
          href={socials.instagram}
          className="bg-black rounded-full p-2 hover:opacity-80 transition-opacity"
        >
          <InstagramIcon className="h-5 w-5 text-white" />
        </Link>
        <Link
          href={socials.tiktok}
          className="bg-black rounded-full p-2 hover:opacity-80 transition-opacity"
        >
          <TiktokIcon className="h-5 w-5 text-white" />
        </Link>
      </div>
    </div>
  )
}

