import { Link } from 'react-router-dom'

interface BlogCardProps {
  image: string
  category: string
  title: string
  date: string
  excerpt: string
  slug: string
}

export function BlogCard({ image, category, title, date, excerpt }: BlogCardProps) {
  return (
    <Link to="/blog" className="block group">
      <article className="bg-th-card border border-th-border rounded-lg overflow-hidden hover:border-th-accent transition-colors duration-300 h-full">
        <div className="relative overflow-hidden aspect-[16/9]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = 'https://picsum.photos/seed/blogfallback/800/500'
            }}
          />
        </div>
        <div className="p-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-th-accent bg-th-accent/10 px-2 py-1 rounded mb-3">
            {category}
          </span>
          <h3 className="text-th-text font-semibold text-lg mb-2 leading-snug group-hover:text-th-accent transition-colors duration-200">
            {title}
          </h3>
          <p className="text-th-muted text-xs mb-3">{date}</p>
          <p className="text-th-muted text-sm leading-relaxed line-clamp-3">{excerpt}</p>
        </div>
      </article>
    </Link>
  )
}
