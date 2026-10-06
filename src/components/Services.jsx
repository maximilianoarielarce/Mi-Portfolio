// components/Services.jsx

import { useState } from 'react'
import Reveal from './Reveal'
import useScrollReveal from '../hooks/useScrollReveal'
import SERVICES from '../data/services'

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false)
  const [ref, visible] = useScrollReveal()

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:          hovered ? 'var(--surface)' : 'var(--bg)',
        padding:             '2.5rem',
        position:            'relative',
        overflow:            'hidden',
        opacity:             visible ? 1 : 0,
        transform:           visible ? 'none' : 'translateY(28px)',
        transitionProperty:  'background, opacity, transform',
        transitionDuration:  '0.3s, 0.7s, 0.7s',
        transitionDelay:     `0ms, ${index * 80}ms, ${index * 80}ms`,
        transitionTimingFunction: 'ease',
      }}
    >
      {/* Barra izquierda animada */}
      <div
        style={{
          position:   'absolute',
          top: 0, left: 0,
          width:      3,
          background: 'var(--accent)',
          height:     hovered ? '100%' : 0,
          transition: 'height 0.4s ease',
        }}
      />

      <span style={{ display: 'block', fontSize: '2rem', marginBottom: '1rem' }}>
        {service.icon}
      </span>

      <div style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--accent)', letterSpacing: 2, marginBottom: '0.5rem' }}>
        {service.badge}
      </div>

      <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)', marginBottom: '0.75rem' }}>
        {service.title}
      </div>

      <p style={{ fontSize: '0.87rem', color: 'var(--text-dim)', lineHeight: 1.7, marginBottom: '1rem' }}>
        {service.desc}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {service.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily:  'var(--mono)',
              fontSize:    '0.6rem',
              padding:     '3px 10px',
              background:  'rgba(0,245,212,0.06)',
              color:       'var(--text-faint)',
              border:      '1px solid rgba(0,245,212,0.08)',
              letterSpacing: 1,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function Services() {
  return (
    <section
      id="services"
      style={{ padding: '100px 5%', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Texto de fondo decorativo */}
      <div
        style={{
          position:      'absolute',
          top: '50%', left: '50%',
          transform:     'translate(-50%,-50%)',
          fontFamily:    'var(--display)',
          fontWeight:    800,
          fontSize:      'clamp(80px, 18vw, 220px)',
          color:         'transparent',
          WebkitTextStroke: '1px rgba(0,245,212,0.04)',
          pointerEvents: 'none',
          whiteSpace:    'nowrap',
          letterSpacing: -8,
          userSelect:    'none',
        }}
      >
        ZERO COOL
      </div>

      <div className="section-inner" style={{ position: 'relative', zIndex: 2 }}>
        {/* Brand badge */}
        <Reveal>
          <div
            className="services-badge"
            style={{
              display:    'inline-flex',
              alignItems: 'center',
              gap:        16,
              background: 'linear-gradient(135deg, rgba(0,245,212,0.1), rgba(123,94,167,0.1))',
              border:     '1px solid rgba(0,245,212,0.2)',
              padding:    '12px 24px',
              marginBottom: '2rem',
              clipPath:   'polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)',
            }}
          >
            <span style={{ fontSize: '1.4rem' }}>⚡</span>
            <span className="services-badge-label" style={{ fontFamily: 'var(--mono)', fontSize: '0.9rem', color: 'var(--accent)', letterSpacing: 4, textShadow: 'var(--glow-sm)' }}>
              ZERO COOL TECH SERVICES
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="section-label">// SERVICIOS</div>
          <h2 className="section-title">
            Tu problema de IT <span>ya tiene solución.</span>
          </h2>
          <p className="section-desc">
            Soporte técnico para particulares y empresas.
          </p>
          <p className="section-desc">
            Trabajo remoto y presencial en zona GBA Sur
          </p>
        </Reveal>

        {/* Grid de servicios */}
        <div
          className="services-grid"
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap:                 '1.5px',
            background:          'rgba(0,245,212,0.08)',
            border:              '1px solid rgba(0,245,212,0.08)',
          }}
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Reveal>
            <a href="#contact" className="btn-primary">SOLICITAR PRESUPUESTO</a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Services
