interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-th-card border border-th-border rounded-lg p-8 hover:border-th-accent transition-colors duration-300 group">
      <div className="text-th-accent mb-5 w-10 h-10 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-th-text text-xl font-semibold mb-3 group-hover:text-th-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="text-th-muted leading-relaxed">{description}</p>
    </div>
  )
}
