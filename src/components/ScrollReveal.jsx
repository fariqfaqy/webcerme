import { useEffect, useRef } from 'react'

/**
 * ScrollReveal - Wrapper component that animates children when scrolled into view.
 * Uses IntersectionObserver for performance.
 * 
 * @param {string} animation - "up" | "fade" | "scale" | "left" | "right"
 * @param {number} delay - delay in ms before animation starts
 * @param {string} duration - CSS duration string e.g. "0.6s"
 * @param {string} className - additional classes
 */
export default function ScrollReveal({
  children,
  animation = 'up',
  delay = 0,
  duration = '0.7s',
  className = '',
  as: Tag = 'div',
  ...props
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`scroll-reveal ${className}`}
      data-animation={animation}
      style={{
        animationDuration: duration,
        animationDelay: `${delay}ms`,
      }}
      {...props}
    >
      {children}
    </Tag>
  )
}
