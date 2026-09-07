import { PageBanner } from '@/components/shared/PageBanner'
import { BlogCard } from '@/components/shared/BlogCard'
import { blogPosts } from '@/data/blog'

// Derive categories and tags from data
const allCategories = Array.from(new Set(blogPosts.map(p => p.category)))
const allTags = ['React', 'TypeScript', 'Tailwind', 'Performance', 'Design', 'DevOps', 'Accessibility', 'CSS']

export function BlogPage() {
  return (
    <>
      <PageBanner title="Blog" breadcrumb="Home / Blog" />

      <section className="section-padding bg-th-bg transition-colors duration-300">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {blogPosts.map(post => (
                  <BlogCard
                    key={post.id}
                    image={post.image}
                    category={post.category}
                    title={post.title}
                    date={post.date}
                    excerpt={post.excerpt}
                    slug={post.slug}
                  />
                ))}
              </div>
            </div>

            <aside className="space-y-8">
              <div className="bg-th-card border border-th-border rounded-lg p-6">
                <h3 className="text-th-text font-bold text-lg mb-4 pb-3 border-b border-th-border">Categories</h3>
                <ul className="space-y-2">
                  {allCategories.map(cat => {
                    const count = blogPosts.filter(p => p.category === cat).length
                    return (
                      <li key={cat} className="flex items-center justify-between">
                        <span className="text-th-muted text-sm hover:text-th-accent cursor-pointer transition-colors">{cat}</span>
                        <span className="bg-th-bg text-th-accent text-xs font-semibold px-2 py-0.5 rounded-full">{count}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="bg-th-card border border-th-border rounded-lg p-6">
                <h3 className="text-th-text font-bold text-lg mb-4 pb-3 border-b border-th-border">Recent Posts</h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 4).map(post => (
                    <li key={post.id} className="flex gap-3">
                      <img src={post.image} alt={post.title} className="w-16 h-12 rounded object-cover shrink-0"
                        onError={(e) => { (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/recent/64/48' }} />
                      <div>
                        <p className="text-th-text text-xs font-medium leading-snug hover:text-th-accent cursor-pointer transition-colors line-clamp-2">{post.title}</p>
                        <p className="text-th-muted text-xs mt-1">{post.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-th-card border border-th-border rounded-lg p-6">
                <h3 className="text-th-text font-bold text-lg mb-4 pb-3 border-b border-th-border">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map(tag => (
                    <span key={tag} className="text-xs text-th-muted border border-th-border px-3 py-1 rounded-full hover:border-th-accent hover:text-th-accent cursor-pointer transition-colors">{tag}</span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
