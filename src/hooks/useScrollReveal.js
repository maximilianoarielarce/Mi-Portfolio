// hooks/useScrollReveal.js
// Hook custom que usa IntersectionObserver para detectar
// cuando un elemento entra en el viewport y disparar la animación.

import { useState, useEffect, useRef } from 'react'

function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el) // se dispara una sola vez
        }
      },
      {
        threshold:   0.1,
        rootMargin: '0px 0px -40px 0px',
        ...options,
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}

export default useScrollReveal
