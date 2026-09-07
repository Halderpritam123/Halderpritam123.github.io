import { SectionHeading } from '@/components/shared/SectionHeading'
import { BlogCard } from '@/components/shared/BlogCard'
import { blogPosts } from '@/data/blog'
import { useInView } from '@/hooks/useInView'

export function BlogSection() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-padding bg-th-bg transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="container-custom">
        <SectionHeading subtitle="Latest News" title="From The Blog" centered />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map(post => (
            <BlogCard key={post.id} image={post.image} category={post.category} title={post.title} date={post.date} excerpt={post.excerpt} slug={post.slug} />
          ))}
        </div>
      </div>
    </section>
  )
}
