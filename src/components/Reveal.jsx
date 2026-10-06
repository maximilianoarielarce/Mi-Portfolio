// components/Reveal.jsx
// Componente reutilizable que envuelve cualquier elemento
// y le aplica la animación de entrada al hacer scroll.
// Uso: <Reveal delay={100}><MiComponente /></Reveal>

import useScrollReveal from '../hooks/useScrollReveal'

function Reveal({ children, delay = 0, style = {} }) {
  const [ref, visible] = useScrollReveal()

  return (
    <div
      ref={ref}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'none' : 'translateY(28px)',
        transition: `opacity 0.7s ${delay}ms ease, transform 0.7s ${delay}ms ease`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default Reveal
