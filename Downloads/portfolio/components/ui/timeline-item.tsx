type TimelineItemProps = {
  title: string
  subtitle: string
  period: string
  description: string
}

export default function TimelineItem({ title, subtitle, period, description }: TimelineItemProps) {
  return (
    <div className="relative border-l-2 border-muted pl-6 pb-6">
      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
      <div className="bg-muted/30 p-4 rounded-lg">
        <div className="inline-block px-3 py-1 mb-2 text-xs font-medium rounded-full bg-primary/10 text-primary">
          {period}
        </div>
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="text-muted-foreground">{subtitle}</p>
        <p className="mt-2 text-sm">{description}</p>
      </div>
    </div>
  )
}

