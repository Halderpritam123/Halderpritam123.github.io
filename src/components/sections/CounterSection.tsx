import { useRef } from 'react'
import { Briefcase, Users, Award, Clock } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { CounterItem } from '@/components/shared/CounterItem'
import { staggerContainer, staggerItem } from '@/lib/motion'

const counters = [
  { icon: <Briefcase className="w-8 h-8" />, target: 20,   label: 'Projects Delivered',        suffix: '+' },
  { icon: <Users    className="w-8 h-8" />, target: 5000,  label: 'SonarCloud Issues Fixed',    suffix: '+' },
  { icon: <Award    className="w-8 h-8" />, target: 40,    label: 'Operational Efficiency Gain',suffix: '%' },
  { icon: <Clock    className="w-8 h-8" />, target: 3,     label: 'Years Experience',            suffix: '.5' },
]

export function CounterSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="bg-th-card border-y border-th-border py-16">
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {counters.map((c, i) => (
            <motion.div key={i} variants={staggerItem}>
              <CounterItem icon={c.icon} target={c.target} label={c.label} suffix={c.suffix} enabled={inView} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
