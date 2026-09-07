import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PageBanner } from '@/components/shared/PageBanner'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { CounterSection } from '@/components/sections/CounterSection'
import { slideLeft, slideRight, fadeUp, staggerContainer, staggerItem, withDelay } from '@/lib/motion'

const timeline = [
  {
    type: 'Education',
    items: [
      { year: '2019–2022', title: 'Bachelor of Computer Applications', place: 'University, India' },
    ],
  },
  {
    type: 'Experience',
    items: [
      { year: 'Feb 2023–Sep 2023', title: 'Software Engineer Intern', place: 'Masai School, Remote' },
      { year: 'Oct 2023–Present', title: 'Associate Software Engineer', place: 'Infor (India) Pvt Ltd, Hyderabad' },
    ],
  },
]

export function AboutPage() {
  const bioRef = useRef(null)
  const bioInView = useInView(bioRef, { once: true, margin: '-80px' })

  const timelineRef = useRef(null)
  const timelineInView = useInView(timelineRef, { once: true, margin: '-80px' })

  return (
    <>
      <PageBanner title="About Me" breadcrumb="Home / About" />

      {/* Bio */}
      <section ref={bioRef} className="section-padding bg-th-bg transition-colors duration-300">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <motion.div
              className="flex justify-center"
              variants={slideLeft} initial="hidden" animate={bioInView ? 'show' : 'hidden'}
            >
              <motion.img
                src="/profile.jpeg"
                alt="Pritam Halder"
                className="w-full max-w-sm rounded-2xl object-cover border border-th-border shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <div>
              <motion.p
                className="text-th-accent uppercase tracking-widest text-sm font-semibold mb-2"
                variants={withDelay(0)} initial="hidden" animate={bioInView ? 'show' : 'hidden'}
              >
                About Me
              </motion.p>
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-th-text mb-6"
                variants={withDelay(0.05)} initial="hidden" animate={bioInView ? 'show' : 'hidden'}
              >
                Software Engineer &<br />Distributed Systems Builder
              </motion.h2>
              <div className="h-[3px] w-[60px] bg-th-accent rounded-full mb-6" />
              <motion.p
                className="text-th-muted leading-relaxed mb-4"
                variants={withDelay(0.1)} initial="hidden" animate={bioInView ? 'show' : 'hidden'}
              >
                I'm Pritam Halder, a Software Engineer based in Hyderabad, India with 3.5 years of experience building scalable, enterprise-grade distributed systems and AI-augmented applications.
              </motion.p>
              <motion.p
                className="text-th-muted leading-relaxed mb-6"
                variants={withDelay(0.15)} initial="hidden" animate={bioInView ? 'show' : 'hidden'}
              >
                Skilled in React, Node.js, Python (FastAPI), Microservices, Kafka, Docker, Kubernetes, and AWS. Proven track record of owning system architecture, building node-based pipeline engines, and modernizing legacy infrastructures.
              </motion.p>
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={staggerContainer} initial="hidden" animate={bioInView ? 'show' : 'hidden'}
              >
                {[
                  ['Name', 'Pritam Halder'],
                  ['Email', 'pritam.halder.dev@gmail.com'],
                  ['Location', 'Hyderabad, Telangana, India'],
                  ['Availability', 'Open to opportunities'],
                ].map(([label, val]) => (
                  <motion.div key={label} variants={staggerItem}>
                    <p className="text-th-muted text-xs uppercase tracking-wider">{label}</p>
                    <p className="text-th-text font-medium mt-0.5">{val}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <SkillsSection />

      {/* Timeline */}
      <section ref={timelineRef} className="section-padding bg-th-bg transition-colors duration-300">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            variants={fadeUp} initial="hidden" animate={timelineInView ? 'show' : 'hidden'}
          >
            <p className="text-th-accent uppercase tracking-widest text-sm font-semibold mb-2">My Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-th-text mb-4">Education &amp; Experience</h2>
            <div className="h-[3px] w-[60px] bg-th-accent rounded-full mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {timeline.map((group, gi) => (
              <motion.div
                key={group.type}
                variants={gi === 0 ? slideLeft : slideRight}
                initial="hidden"
                animate={timelineInView ? 'show' : 'hidden'}
              >
                <h3 className="text-xl font-bold text-th-text mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-th-accent rounded-full flex items-center justify-center text-darkBg text-xs font-bold">
                    {group.type[0]}
                  </span>
                  {group.type}
                </h3>
                <div className="relative pl-6 border-l-2 border-th-border space-y-8">
                  {group.items.map((item, i) => (
                    <motion.div
                      key={i}
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.3 + i * 0.15, duration: 0.5, ease: 'easeOut' }}
                    >
                      <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-th-accent border-2 border-th-bg" />
                      <p className="text-th-accent text-xs font-semibold uppercase tracking-wider mb-1">{item.year}</p>
                      <h4 className="text-th-text font-semibold">{item.title}</h4>
                      <p className="text-th-muted text-sm mt-0.5">{item.place}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CounterSection />
    </>
  )
}
