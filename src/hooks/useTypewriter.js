// hooks/useTypewriter.js
// Hook custom que simula el efecto de escritura de una terminal.
// Recibe un array de frases y va ciclando entre ellas.

import { useState, useEffect, useRef } from 'react'

function useTypewriter(phrases, speed = 80, deleteSpeed = 40, pause = 2000) {
  const [text, setText] = useState('')

  // useRef para no recrear el effect en cada render
  const state = useRef({ phraseIdx: 0, charIdx: 0, deleting: false })

  useEffect(() => {
    let timeout

    const tick = () => {
      const { phraseIdx, charIdx, deleting } = state.current
      const current = phrases[phraseIdx]

      if (!deleting) {
        // Escribiendo
        const next = charIdx + 1
        setText(current.slice(0, next))
        state.current.charIdx = next

        if (next === current.length) {
          // Llegó al final → pausa antes de borrar
          state.current.deleting = true
          timeout = setTimeout(tick, pause)
          return
        }
      } else {
        // Borrando
        const next = charIdx - 1
        setText(current.slice(0, next))
        state.current.charIdx = next

        if (next === 0) {
          // Terminó de borrar → siguiente frase
          state.current.deleting = false
          state.current.phraseIdx = (phraseIdx + 1) % phrases.length
          timeout = setTimeout(tick, 400)
          return
        }
      }

      timeout = setTimeout(tick, deleting ? deleteSpeed : speed)
    }

    timeout = setTimeout(tick, speed)
    return () => clearTimeout(timeout)
  }, [phrases, speed, deleteSpeed, pause])

  return text
}

export default useTypewriter
