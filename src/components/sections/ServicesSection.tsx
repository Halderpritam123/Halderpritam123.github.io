import * as Icons from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { ServiceCard } from '@/components/shared/ServiceCard'
import { services } from '@/data/services'
import { staggerContainer, staggerItem, fadeUp } from '@/lib/motion'

export function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-padding bg-th-bg">
      <div className="container-custom">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0}>
          <SectionHeading subtitle="What I Do" title="My Services" centered />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {services.map(service => {
            const Icon = Icons[service.icon as keyof typeof Icons] as React.ElementType
            return (
              <motion.div key={service.id} variants={staggerItem} whileHover={{ y: -6, transition: { duration: 0.2 } }}>
                <ServiceCard
                  icon={Icon ? <Icon className="w-8 h-8" /> : null}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
