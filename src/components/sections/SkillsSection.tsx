import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeading } from '@/components/shared/SectionHeading'

const skillGroups = [
  {
    category: 'Languages & Frameworks',
    color: 'from-yellow-500/20 to-yellow-500/5 border-yellow-500/40 text-yellow-400',
    dot: 'bg-yellow-400',
    skills: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Redux', 'Node.js', 'Express.js', 'FastAPI'],
  },
  {
    category: 'Distributed Systems',
    color: 'from-blue-500/20 to-blue-500/5 border-blue-500/40 text-blue-400',
    dot: 'bg-blue-400',
    skills: ['Microservices', 'Apache Kafka', 'REST APIs', 'Socket.IO', 'JWT', 'IAM / RBAC'],
  },
  {
    category: 'DevOps & Cloud',
    color: 'from-green-500/20 to-green-500/5 border-green-500/40 text-green-400',
    dot: 'bg-green-400',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Nginx', 'Linux', 'CI/CD', 'Vercel'],
  },
  {
    category: 'Architecture & Data',
    color: 'from-purple-500/20 to-purple-500/5 border-purple-500/40 text-purple-400',
    dot: 'bg-purple-400',
    skills: ['Single-SPA', 'DAG / Data Pipelines', 'MongoDB', 'Delta Lake'],
  },
  {
    category: 'Tooling & Practices',
    color: 'from-pink-500/20 to-pink-500/5 border-pink-500/40 text-pink-400',
    dot: 'bg-pink-400',
    skills: ['Git', 'GitHub', 'Jira', 'Postman', 'SonarCloud', 'Prompt Engineering', 'TDD', 'SOLID Principles', 'Agile / Scrum'],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-padding bg-th-card border-y border-th-border">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeading
            subtitle="My Skills"
            title="Technologies & Tools"
            description="A full picture of my technical stack — from frontend frameworks to distributed infrastructure."
            centered
          />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: gi * 0.1, duration: 0.55, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className={`bg-gradient-to-br ${group.color} border rounded-2xl p-6`}
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-4">
                <span className={`w-2.5 h-2.5 rounded-full ${group.dot}`} />
                <h3 className="text-th-text text-sm font-semibold uppercase tracking-widest">
                  {group.category}
                </h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: gi * 0.1 + si * 0.03, duration: 0.3 }}
                    whileHover={{ scale: 1.08 }}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-th-bg/60 border border-th-border text-th-text hover:border-th-accent hover:text-th-accent transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
