import { useRef } from 'react'
import { Phone, Mail, MapPin, Github, Linkedin } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { ContactForm } from '@/components/shared/ContactForm'
import { fadeUp, slideLeft, slideRight, staggerContainer, staggerItem } from '@/lib/motion'

const contactInfo = [
  { icon: Phone,  label: 'Phone',   value: '+91 62956 96481',             href: 'tel:+916295696481' },
  { icon: Mail,   label: 'Email',   value: 'pritam.halder.dev@gmail.com', href: 'mailto:pritam.halder.dev@gmail.com' },
  { icon: MapPin, label: 'Address', value: 'Hyderabad, Telangana, India', href: '#' },
]

const socialLinks = [
  { icon: Github,   href: 'https://github.com/halderpritam123',        label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/pritam-halder-dev', label: 'LinkedIn' },
  { icon: null,     href: 'https://x.com/PHalderDev',              label: 'X' },
]

export function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-padding bg-th-card border-t border-th-border">
      <div className="container-custom">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0}>
          <SectionHeading subtitle="Get In Touch" title="Contact Me" centered />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-10">
          <motion.div variants={slideLeft} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0.1}>
            <ContactForm />
          </motion.div>

          <motion.div variants={slideRight} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0.2}>
            <h3 className="text-th-text text-xl font-semibold mb-4">Let's Talk</h3>
            <p className="text-th-muted leading-relaxed mb-8">
              Open to new opportunities, collaborations, or just a tech chat. Fill out the form or reach me directly through the channels below.
            </p>

            <motion.ul
              className="space-y-5 mb-8"
              variants={staggerContainer} initial="hidden" animate={inView ? 'show' : 'hidden'}
            >
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <motion.li key={label} variants={staggerItem} className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 bg-th-bg border border-th-border rounded-lg flex items-center justify-center shrink-0"
                  >
                    <Icon className="w-5 h-5 text-th-accent" />
                  </motion.div>
                  <div>
                    <p className="text-th-muted text-xs uppercase tracking-wider mb-0.5">{label}</p>
                    <a href={href} className="text-th-text text-sm hover:text-th-accent transition-colors">{value}</a>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full border border-th-border flex items-center justify-center text-th-muted hover:text-th-accent hover:border-th-accent transition-colors duration-200"
                >
                  {Icon ? (
                    <Icon className="w-4 h-4" />
                  ) : (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                    </svg>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
