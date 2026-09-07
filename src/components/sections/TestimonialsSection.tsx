import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { TestimonialCard } from '@/components/shared/TestimonialCard'
import { testimonials } from '@/data/testimonials'
import { useInView } from '@/hooks/useInView'

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { ref, inView } = useInView({ threshold: 0.1 })

  const goTo = (index: number) => {
    setFading(true)
    setTimeout(() => {
      setCurrent((index + testimonials.length) % testimonials.length)
      setFading(false)
    }, 300)
  }

  const prev = () => { if (timerRef.current) clearTimeout(timerRef.current); goTo(current - 1) }
  const next = () => { if (timerRef.current) clearTimeout(timerRef.current); goTo(current + 1) }

  useEffect(() => {
    timerRef.current = setTimeout(() => goTo(current + 1), 5000)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [current])

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-padding bg-th-card border-y border-th-border transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="container-custom">
        <SectionHeading subtitle="Testimonials" title="What Clients Say" centered />
        <div className="relative max-w-3xl mx-auto">
          <div className={`transition-opacity duration-300 ${fading ? 'opacity-0' : 'opacity-100'}`}>
            <TestimonialCard
              quote={testimonials[current].quote}
              name={testimonials[current].name}
              title={testimonials[current].title}
              avatar={testimonials[current].avatar}
            />
          </div>
          <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-th-border flex items-center justify-center text-th-muted hover:border-th-accent hover:text-th-accent transition-colors duration-200" aria-label="Previous">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-200 ${i === current ? 'bg-th-accent w-6' : 'bg-th-border w-2'}`}
                  aria-label={`Go to ${i + 1}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-th-border flex items-center justify-center text-th-muted hover:border-th-accent hover:text-th-accent transition-colors duration-200" aria-label="Next">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
