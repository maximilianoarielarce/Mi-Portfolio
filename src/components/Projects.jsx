// components/Projects.jsx

import { useState } from 'react'
import Reveal from './Reveal'
import useScrollReveal from '../hooks/useScrollReveal'
import PROJECTS from '../data/projects'

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const [ref, visible] = useScrollReveal()

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:   'var(--bg3)',
        border:       '1px solid rgba(0,245,212,0.1)',
        overflow:     'hidden',
        position:     'relative',
        opacity:      visible ? 1 : 0,
        transform:    visible ? (hovered ? 'translateY(-6px)' : 'none') : 'translateY(28px)',
        boxShadow:    hovered ? '0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(0,245,212,0.08)' : 'none',
        transition:   `opacity 0.7s ${index * 100}ms ease, transform 0.3s ease, box-shadow 0.3s ease`,
      }}
    >
      {/* Badge de estado */}
      {project.status && (
        <div
          style={{
            position:     'absolute',
            top: '1rem', right: '1rem',
            fontFamily:   'var(--mono)',
            fontSize:     '0.55rem',
            letterSpacing: 2,
            padding:      '4px 10px',
            background:   `${project.statusColor}18`,
            color:        project.statusColor,
            border:       `1px solid ${project.statusColor}33`,
            textTransform:'uppercase',
          }}
        >
          {project.status}
        </div>
      )}

      {/* Header */}
      <div
        style={{
          padding:      '2rem 2rem 1.5rem',
          borderBottom: '1px solid rgba(0,245,212,0.08)',
          background:   'linear-gradient(135deg, rgba(0,245,212,0.04), transparent)',
        }}
      >
        <div style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--accent)', letterSpacing: 3, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          {project.type}
        </div>
        <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: '1.3rem', color: 'var(--text)' }}>
          {project.name}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '1.5rem 2rem 2rem' }}>
        <p style={{ fontSize: '0.87rem', color: 'var(--text-dim)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
          {project.desc}
        </p>

        {/* Stack pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1.5rem' }}>
          {project.stack.map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily:  'var(--mono)',
                fontSize:    '0.62rem',
                padding:     '4px 12px',
                borderRadius: 2,
                background:  'rgba(123,94,167,0.12)',
                color:       '#a78bca',
                border:      '1px solid rgba(123,94,167,0.2)',
                letterSpacing: '0.5px',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--accent)', textDecoration: 'none', letterSpacing: 1, textTransform: 'uppercase' }}
            >
              → GitHub
            </a>
          )}
          {project.live && project.live !== '#' && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--text-dim)', textDecoration: 'none', letterSpacing: 1, textTransform: 'uppercase' }}
            >
              ↗ Live
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 5%', background: 'var(--bg2)' }}>
      <div className="section-inner">
        <Reveal>
          <div className="section-label">// PROYECTOS</div>
          <h2 className="section-title">
            Lo que estoy <span>construyendo.</span>
          </h2>
          <p className="section-desc">
            Proyectos personales. Cada uno es un paso más en mi camino como desarrollador.
          </p>
        </Reveal>

        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap:                 '1.5rem',
          }}
          className="projects-grid"
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
