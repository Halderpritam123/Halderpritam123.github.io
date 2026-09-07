import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { portfolioItems } from '@/data/portfolio'
import { skills } from '@/data/skills'
import { SectionHeading } from '@/components/shared/SectionHeading'

const PROJECTS = portfolioItems.slice(0, 6)
const CARD_H = 'calc(80vh)'

// Auto-cycling image for projects with multiple images
function ProjectImage({ project, height }: { project: typeof PROJECTS[0]; height: string }) {
  const images = project.images && project.images.length > 1 ? project.images : [project.image]
  const [imgIndex, setImgIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const t = setInterval(() => {
      setImgIndex(i => (i + 1) % images.length)
    }, 3000)
    return () => clearInterval(t)
  }, [images.length])

  return (
    <div className="relative overflow-hidden w-full" style={{ height }}>
      <AnimatePresence mode="sync">
        <motion.img
          key={imgIndex}
          src={images[imgIndex]}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          onError={(e) => { (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/fallback/600/450' }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-th-card/70 to-transparent pointer-events-none" />
      {/* Dots for multiple images */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <div key={i} className={`rounded-full transition-all duration-300 ${i === imgIndex ? 'w-3 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50'}`} />
          ))}
        </div>
      )}
    </div>
  )
}

export function ProjectSkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState<'up' | 'down'>('up')
  const prevIndexRef = useRef(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    return scrollYProgress.on('change', v => {
      const idx = Math.min(PROJECTS.length - 1, Math.floor(v * PROJECTS.length))
      if (idx !== prevIndexRef.current) {
        setDirection(idx > prevIndexRef.current ? 'up' : 'down')
        prevIndexRef.current = idx
        setActiveIndex(idx)
      }
    })
  }, [scrollYProgress])

  const activeProject = PROJECTS[activeIndex]
  const activeSkillSet = new Set(activeProject.skills)

  const variants = {
    enter: (dir: 'up' | 'down') => ({
      y: dir === 'up' ? '100%' : '-100%',
      opacity: 0,
      scale: 0.92,
    }),
    center: {
      y: '0%',
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
    exit: (dir: 'up' | 'down') => ({
      y: dir === 'up' ? '-100%' : '100%',
      opacity: 0,
      scale: 0.92,
      transition: { duration: 0.45, ease: 'easeOut' as const },
    }),
  }

  // Shared project card content
  const ProjectCard = ({ mobile = false }: { mobile?: boolean }) => (
    <AnimatePresence custom={direction} mode="sync">
      <motion.div
        key={activeIndex}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        className="absolute inset-0 flex flex-col rounded-2xl overflow-hidden border border-th-accent bg-th-card shadow-2xl shadow-th-accent/10"
      >
        {/* Image — 60% on mobile, fills remaining on desktop */}
        <div className="relative shrink-0" style={{ height: mobile ? '60%' : undefined, flex: mobile ? undefined : 1 }}>
          <ProjectImage project={activeProject} height="100%" />
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-th-accent text-darkBg text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {activeIndex + 1} / {PROJECTS.length}
            </span>
          </div>
        </div>

        {/* Content — 40% on mobile with scroll, auto on desktop */}
        <div
          className="shrink-0 flex flex-col p-5 gap-2 border-t border-th-border/40"
          style={{ height: mobile ? '40%' : 'auto' }}
        >
          <h3 className={`font-bold text-th-accent leading-tight shrink-0 ${mobile ? 'text-base' : 'text-xl'}`}>
            {activeProject.title}
          </h3>
          <p className={`text-th-muted text-sm leading-relaxed ${mobile ? 'overflow-y-auto flex-1' : ''}`}>
            {activeProject.description}
          </p>
          <div className="flex gap-4 pt-2 border-t border-th-border shrink-0">
            {activeProject.github && (
              <a href={activeProject.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-th-muted hover:text-th-accent transition-colors font-medium">
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
            )}
            {activeProject.live && (
              <a href={activeProject.live} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-th-muted hover:text-th-accent transition-colors font-medium">
                <ExternalLink className="w-3.5 h-3.5" /> Live Demo
              </a>
            )}
            {mobile && (
              <div className="ml-auto flex gap-1.5 items-center">
                {PROJECTS.map((_, i) => (
                  <div key={i} className={`rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'w-4 h-2 bg-th-accent' : 'w-2 h-2 bg-th-border'
                  }`} />
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )

  // Shared skills panel content
  const SkillsPanel = ({ compact = false }: { compact?: boolean }) => (
    <div className={`bg-th-card border border-th-border rounded-2xl flex flex-col overflow-hidden h-full ${compact ? 'p-4' : 'p-8'}`}>
      <div className={compact ? 'mb-2' : 'mb-6'}>
        <p className="text-th-accent uppercase tracking-widest text-xs font-semibold mb-1">Skills used in</p>
        <AnimatePresence mode="wait">
          <motion.h3
            key={activeIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className={`text-th-text font-bold leading-snug ${compact ? 'text-sm' : 'text-2xl'}`}
          >
            {activeProject.title}
          </motion.h3>
        </AnimatePresence>
        <div className="h-[2px] w-8 bg-th-accent rounded-full mt-2" />
      </div>
      <div className={`flex flex-wrap overflow-y-auto flex-1 content-start ${compact ? 'gap-1.5' : 'gap-3 justify-start'}`}>
        {skills.map((skill, i) => {
          const isUsed = activeSkillSet.has(skill.label)
          return (
            <motion.span
              key={`${activeIndex}-${skill.id}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.01, duration: 0.2 }}
              className={`rounded-full font-medium border transition-all duration-300 ${
                compact ? 'px-2.5 py-1 text-xs' : 'px-5 py-2.5 text-sm'
              } ${
                isUsed
                  ? 'bg-th-accent/15 border-th-accent text-th-accent shadow-sm'
                  : 'bg-transparent border-th-border text-th-muted opacity-50'
              }`}
            >
              {skill.label}
            </motion.span>
          )
        })}
      </div>
      {!compact && (
        <div className="pt-5 border-t border-th-border flex items-center justify-between mt-4">
          <div className="flex gap-1.5">
            {PROJECTS.map((_, i) => (
              <div key={i} className={`rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-5 h-2 bg-th-accent' : 'w-2 h-2 bg-th-border'
              }`} />
            ))}
          </div>
          <div className="flex items-center gap-4 text-xs text-th-muted">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-th-accent" /> Used</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-th-border" /> Not used</span>
          </div>
        </div>
      )}
    </div>
  )

  return (
    <section>
      <div className="container-custom pt-20 pb-4">
        <SectionHeading subtitle="Work & Skills" title="Projects & Technologies" centered />
      </div>

      <div ref={containerRef} style={{ height: `${PROJECTS.length * 100}vh` }} className="relative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden py-4">
          <div className="container-custom w-full">

            {/* ── Desktop: side-by-side ── */}
            <div className="hidden lg:flex gap-8" style={{ height: CARD_H }}>
              <div className="w-1/2 relative overflow-hidden rounded-2xl" style={{ height: CARD_H }}>
                <ProjectCard />
              </div>
              <div className="w-1/2 flex flex-col" style={{ height: CARD_H }}>
                <SkillsPanel />
              </div>
            </div>

            {/* ── Mobile: card + skills stacked ── */}
            <div className="lg:hidden flex flex-col gap-3" style={{ height: '88vh' }}>
              <div className="relative overflow-hidden rounded-2xl" style={{ height: '48%' }}>
                <ProjectCard mobile />
              </div>
              <div style={{ height: '48%' }}>
                <SkillsPanel compact />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
