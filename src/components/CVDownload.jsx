// components/CVDownload.jsx

import Reveal from './Reveal'

function CVDownload() {
  const handleDownload = () => {
    /**
     * 🔌 Cuando tengas el backend, registrá la descarga:
     *
     * fetch('/api/cv/download', { method: 'POST' })
     *   .catch(console.error)
     */
  }

  return (
    <section
      id="cv"
      style={{ padding: '100px 5%', background: 'var(--bg)', textAlign: 'center' }}
    >
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <Reveal>
          <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>
            // CURRICULUM VITAE
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Mi CV <span>actualizado.</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div
            style={{
              background: 'var(--bg3)',
              border:     '1px solid rgba(0,245,212,0.15)',
              padding:    '3rem',
              marginTop:  '2.5rem',
              position:   'relative',
              overflow:   'hidden',
            }}
          >
            {/* Glow interno */}
            <div
              style={{
                position:      'absolute',
                top: '-50%', left: '-50%',
                width: '200%', height: '200%',
                background:    'radial-gradient(circle at 50% 50%, rgba(0,245,212,0.04), transparent 60%)',
                pointerEvents: 'none',
              }}
            />

            <span style={{ display: 'block', fontSize: '3rem', marginBottom: '1rem' }}>📄</span>

            <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: '1.4rem', color: 'var(--text)', marginBottom: '0.5rem' }}>
              Maximiliano Ariel Arce
            </div>

            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--text-faint)', letterSpacing: 2, marginBottom: '1.5rem' }}>
              IT SUPPORT SPECIALIST · FULL STACK DEVELOPER · 2026
            </div>

            <p style={{ color: 'var(--text-dim)', fontSize: '0.87rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              CV optimizado para ATS con experiencia en soporte enterprise, herramientas como InvGate, MuleSoft y Jira, más stack MERN completo.
            </p>

            <a
              href="/MaximilianoArielArceCV.pdf"
              download
              onClick={handleDownload}
              className="btn-primary"
            >
              ⬇ DESCARGAR CV (.PDF)
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p
            style={{
              fontFamily:    'var(--mono)',
              fontSize:      '0.65rem',
              color:         'var(--text-faint)',
              letterSpacing: 1,
              marginTop:     '1.5rem',
            }}
          >
            También en LinkedIn →{' '}
            <a
              href="https://www.linkedin.com/in/maximilianoarielarce/"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--accent)', textDecoration: 'none' }}
            >
              linkedin.com/in/maximiliano-ariel-arce
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default CVDownload
