import { useState, useEffect, useRef } from 'react'

/**
 * CountUp - Animates a number counting up from 0 to the target value.
 * Triggers when the element scrolls into view.
 * 
 * @param {number} end - The target number to count to
 * @param {number} duration - Duration in ms (default 1500)
 * @param {string} suffix - Optional suffix like "+" 
 */
export default function CountUp({ end, duration = 1500, suffix = '', className = '' }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const [pop, setPop] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let startTime = null
    let frame = null

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))

      if (progress < 1) {
        frame = requestAnimationFrame(animate)
      } else {
        setCount(end)
        setPop(true)
        setTimeout(() => setPop(false), 300)
      }
    }

    frame = requestAnimationFrame(animate)
    return () => frame && cancelAnimationFrame(frame)
  }, [hasStarted, end, duration])

  return (
    <span ref={ref} className={`${className} ${pop ? 'count-pop' : ''}`} style={{ display: 'inline-block' }}>
      {count}{suffix}
    </span>
  )
}
