import { useRef } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { PageBanner } from '@/components/shared/PageBanner'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { ContactForm } from '@/components/shared/ContactForm'
import { fadeUp, staggerContainer, staggerItem, slideLeft, slideRight } from '@/lib/motion'

const contactCards = [
  { icon: Phone,  label: 'Phone',   value: '+91 62956 96481',             href: 'tel:+916295696481' },
  { icon: Mail,   label: 'Email',   value: 'pritam.halder.dev@gmail.com', href: 'mailto:pritam.halder.dev@gmail.com' },
  { icon: MapPin, label: 'Address', value: 'Hyderabad, Telangana, India', href: '#' },
]

export function ContactPage() {
  const cardsRef = useRef(null)
  const cardsInView = useInView(cardsRef, { once: true, margin: '-60px' })

  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: '-60px' })

  return (
    <>
      <PageBanner title="Contact" breadcrumb="Home / Contact" />

      <section ref={cardsRef} className="bg-th-card border-b border-th-border py-12 transition-colors duration-300">
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            variants={staggerContainer} initial="hidden" animate={cardsInView ? 'show' : 'hidden'}
          >
            {contactCards.map(({ icon: Icon, label, value, href }) => (
              <motion.a
                key={label}
                href={href}
                variants={staggerItem}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="flex flex-col items-center text-center bg-th-bg border border-th-border rounded-lg p-6 hover:border-th-accent transition-colors duration-200 group"
              >
                <motion.div
                  className="w-12 h-12 bg-th-accent/10 border border-th-accent/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-th-accent/20 transition-colors"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <Icon className="w-5 h-5 text-th-accent" />
                </motion.div>
                <p className="text-th-muted text-xs uppercase tracking-wider mb-1">{label}</p>
                <p className="text-th-text font-medium text-sm">{value}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      <section ref={formRef} className="section-padding bg-th-bg transition-colors duration-300">
        <div className="container-custom">
          <motion.div variants={fadeUp} initial="hidden" animate={formInView ? 'show' : 'hidden'}>
            <SectionHeading subtitle="Get In Touch" title="Send Me a Message" centered />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-10">
            <motion.div variants={slideLeft} initial="hidden" animate={formInView ? 'show' : 'hidden'}>
              <ContactForm />
            </motion.div>

            <motion.div
              variants={slideRight} initial="hidden" animate={formInView ? 'show' : 'hidden'}
              className="bg-th-card border border-th-border rounded-lg overflow-hidden"
            >
              <div className="h-64 bg-th-border/30 flex flex-col items-center justify-center gap-4">
                <motion.div
                  className="w-16 h-16 bg-th-card border border-th-border rounded-full flex items-center justify-center"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <MapPin className="w-7 h-7 text-th-accent" />
                </motion.div>
                <div className="text-center">
                  <p className="text-th-text font-semibold mb-1">Find Me Here</p>
                  <p className="text-th-muted text-sm">Hyderabad, Telangana, India</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-th-muted text-sm leading-relaxed">
                  Based in Hyderabad, Telangana, India. Available for remote work and on-site opportunities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
