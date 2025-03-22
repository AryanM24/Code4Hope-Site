import type { LucideIcon } from "lucide-react"

type ContactItemProps = {
  icon: LucideIcon
  title: string
  value: string
}

export default function ContactItem({ icon: Icon, title, value }: ContactItemProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="rounded-full bg-primary/10 p-3 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground">{value}</p>
      </div>
    </div>
  )
}

