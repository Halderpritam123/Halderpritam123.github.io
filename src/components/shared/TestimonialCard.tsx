interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  avatar: string
}

export function TestimonialCard({ quote, name, title, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-th-card border border-th-border rounded-lg p-8 md:p-10">
      <div className="text-th-accent text-7xl font-serif leading-none mb-4 select-none" aria-hidden="true">
        "
      </div>
      <p className="text-th-text italic text-lg leading-relaxed mb-8">{quote}</p>
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-[60px] h-[60px] rounded-full object-cover border-2 border-th-accent"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = 'https://picsum.photos/seed/avatar/60/60'
          }}
        />
        <div>
          <p className="text-th-text font-bold">{name}</p>
          <p className="text-th-muted text-sm">{title}</p>
        </div>
      </div>
    </div>
  )
}
