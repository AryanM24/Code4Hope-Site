import Image from "next/image"
import { cn } from "@/lib/utils"

interface ContentSectionProps {
  title: string
  content: string
  imageSrc: string
  imageAlt: string
  reversed?: boolean
}

export function ContentSection({ 
  title, 
  content, 
  imageSrc, 
  imageAlt, 
  reversed = false 
}: ContentSectionProps) {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className={cn(
        "grid gap-8 items-center",
        reversed ? "md:grid-cols-[1fr,400px]" : "md:grid-cols-[400px,1fr]"
      )}>
        <div className={cn(
          "relative aspect-video rounded-xl overflow-hidden",
          reversed && "md:order-last"
        )}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </div>
  )
}

