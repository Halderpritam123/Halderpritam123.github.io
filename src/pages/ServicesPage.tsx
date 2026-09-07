import * as Icons from 'lucide-react'
import { PageBanner } from '@/components/shared/PageBanner'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { ServiceCard } from '@/components/shared/ServiceCard'
import { services } from '@/data/services'

export function ServicesPage() {
  return (
    <>
      <PageBanner title="Services" breadcrumb="Home / Services" />

      <section className="section-padding bg-th-bg transition-colors duration-300">
        <div className="container-custom">
          <SectionHeading subtitle="What I Do" title="My Services" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => {
              const Icon = Icons[service.icon as keyof typeof Icons] as React.ElementType
              return (
                <ServiceCard
                  key={service.id}
                  icon={Icon ? <Icon className="w-8 h-8" /> : null}
                  title={service.title}
                  description={service.description}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
