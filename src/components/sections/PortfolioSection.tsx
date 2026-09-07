import { useState } from 'react'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { PortfolioCard } from '@/components/shared/PortfolioCard'
import { portfolioItems } from '@/data/portfolio'
import { useInView } from '@/hooks/useInView'

const filterTabs = ['All', 'Web Design', 'Development', 'Branding', 'Photography']

interface PortfolioSectionProps {
  limit?: number
}

export function PortfolioSection({ limit }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState('All')
  const { ref, inView } = useInView({ threshold: 0.1 })

  const filtered = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter)

  const displayed = limit ? filtered.slice(0, limit) : filtered

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-padding bg-th-bg transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="container-custom">
        <SectionHeading subtitle="My Work" title="Recent Projects" centered />
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {filterTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === tab
                  ? 'bg-th-accent text-darkBg'
                  : 'bg-th-card border border-th-border text-th-muted hover:border-th-accent hover:text-th-accent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map(item => (
            <PortfolioCard key={item.id} image={item.image} title={item.title} category={item.category} />
          ))}
        </div>
      </div>
    </section>
  )
}
