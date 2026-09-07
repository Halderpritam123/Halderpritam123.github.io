import { Eye } from 'lucide-react'

interface PortfolioCardProps {
  image: string
  title: string
  category: string
}

export function PortfolioCard({ image, title, category }: PortfolioCardProps) {
  return (
    <div className="rounded-lg overflow-hidden group">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = 'https://picsum.photos/seed/fallback/600/450'
          }}
        />
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-th-accent w-12 h-12 flex items-center justify-center border-2 border-th-accent rounded-full">
            <Eye className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="bg-th-card border border-t-0 border-th-border px-4 py-3">
        <h3 className="text-th-text font-semibold text-sm">{title}</h3>
        <p className="text-th-accent text-xs mt-1">{category}</p>
      </div>
    </div>
  )
}
