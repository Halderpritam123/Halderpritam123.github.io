import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { withDelay, slideRight, scaleIn } from '@/lib/motion'

const roles = ['Software Engineer', 'Full-Stack Developer', 'Distributed Systems Engineer']

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setRoleIndex(prev => (prev + 1) % roles.length)
        setVisible(true)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-th-bg flex items-center relative overflow-hidden transition-colors duration-300">
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        aria-hidden="true"
      />

      <div className="container-custom w-full py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <motion.p
              className="text-th-accent uppercase tracking-widest text-sm font-semibold mb-3"
              variants={withDelay(0)} initial="hidden" animate="show"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-th-text mb-4 leading-tight"
              variants={withDelay(0.1)} initial="hidden" animate="show"
            >
              Pritam Halder
            </motion.h1>

            <motion.div
              className="h-12 mb-6 flex items-center justify-center md:justify-start"
              variants={withDelay(0.25)} initial="hidden" animate="show"
            >
              <p className={`text-2xl md:text-3xl font-semibold text-th-accent transition-opacity duration-400 ${visible ? 'opacity-100' : 'opacity-0'}`}>
                {roles[roleIndex]}
              </p>
            </motion.div>

            <motion.p
              className="text-th-muted text-lg leading-relaxed mb-8 max-w-md mx-auto md:mx-0"
              variants={withDelay(0.35)} initial="hidden" animate="show"
            >
              Software Engineer with 3.5 years of experience building scalable, enterprise-grade distributed systems and AI-augmented applications.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              variants={withDelay(0.45)} initial="hidden" animate="show"
            >
              <Link to="/contact" className="inline-flex items-center gap-2 bg-th-accent text-darkBg font-bold px-8 py-3 rounded-lg hover:opacity-90 hover:scale-105 transition-all duration-200">
                Hire Me <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="/pritam_halder_resume.pdf" download className="inline-flex items-center gap-2 border border-th-accent text-th-accent font-semibold px-8 py-3 rounded-lg hover:bg-th-accent hover:text-darkBg hover:scale-105 transition-all duration-200">
                Download CV <Download className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="order-1 md:order-2 flex justify-center md:justify-end"
            variants={slideRight} initial="hidden" animate="show"
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-th-accent scale-105"
                initial={{ opacity: 0 }} animate={{ opacity: 0.4 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                aria-hidden="true"
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-th-accent scale-110"
                initial={{ opacity: 0 }} animate={{ opacity: 0.2 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                aria-hidden="true"
              />
              <motion.img
                src="/profile.jpeg"
                alt="Pritam Halder"
                className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-th-accent relative z-10"
                variants={scaleIn} initial="hidden" animate="show"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
