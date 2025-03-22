import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type ProjectCardProps = {
  title: string
  category: string
  description: string
  image: string
}

export default function ProjectCard({ title, category, description, image }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Button size="icon" variant="outline" className="h-9 w-9 rounded-full">
            <ExternalLink className="h-4 w-4" />
            <span className="sr-only">View project</span>
          </Button>
          <Button size="icon" variant="outline" className="h-9 w-9 rounded-full">
            <Github className="h-4 w-4" />
            <span className="sr-only">View code</span>
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="text-xs font-medium text-primary mb-1">{category}</div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

