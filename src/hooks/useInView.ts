import { useEffect, useRef, useState } from 'react'

/**
 * Detects when a referenced element enters the viewport using IntersectionObserver.
 * SSR-safe: guards with `typeof window !== 'undefined'` before using the API.
 * Falls back to `inView: true` if IntersectionObserver is not available.
 * Triggered once — unobserves after the element first enters the viewport.
 */
export function useInView(options: IntersectionObserverInit = { threshold: 0.1 }) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState<boolean>(false)

  useEffect(() => {
    // SSR-safe guard and feature detection fallback
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setInView(true)
      return
    }

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          // Triggered once — stop observing after first intersection
          observer.unobserve(element)
        }
      },
      options
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return { ref, inView }
}
