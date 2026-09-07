import { useEffect, useRef, useState } from 'react'

interface UseCountUpOptions {
  target: number
  duration?: number
  enabled: boolean
}

/**
 * Animates a number from 0 to `target` over `duration` milliseconds using
 * requestAnimationFrame. Animation only starts when `enabled` is true.
 * Cleans up the animation frame on unmount.
 */
export function useCountUp({ target, duration = 2000, enabled }: UseCountUpOptions): number {
  const [count, setCount] = useState<number>(0)
  const frameRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (!enabled) return

    // Reset before starting a new animation
    setCount(0)
    startTimeRef.current = null

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }

      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)

      // Ease-out: smooth deceleration toward the target
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [enabled, target, duration])

  return count
}
