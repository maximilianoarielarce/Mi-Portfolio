// components/Contact.jsx
// Formulario de contacto con estado local.
// El handleSubmit está listo para conectar con POST /api/contact

import { useState, useCallback } from 'react'
import emailjs from '@emailjs/browser'
import Reveal from './Reveal'
import SERVICES from '../data/services'

const EMAILJS_SERVICE_ID  = 'service_sb0c7l5'
const EMAILJS_TEMPLATE_ID = 'template_3w4fv0n'
const EMAILJS_PUBLIC_KEY  = '_LQFeYgZDwLX3BwvC'


const INITIAL_FORM = { name: '', email: '', service: '', message: '' }

const CONTACT_ITEMS = [
  {
    id:    'email',
    icon:  '📧',
    label: 'EMAIL',
    content: (
      <a href="mailto:maximilianoarielarce@hotmail.com" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
        maximilianoarielarce@hotmail.com
      </a>
    ),
  },
  {
    id:    'whatsapp',
    icon:  '📱',
    label: 'WHATSAPP',
    content: (
      <a href="https://wa.me/5491163616346" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
        +54 11 6361-6346
      </a>
    ),
  },
  {
    id:    'linkedin',
    icon:  '🔗',
    label: 'LINKEDIN',
    content: (
      <a href="https://www.linkedin.com/in/maximiliano-ariel-arce" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
        maximiliano-ariel-arce
      </a>
    ),
  },
  {
    id:    'github',
    icon:  '💻',
    label: 'GITHUB',
    content: (
      <a href="https://github.com/maximilianoarielarce" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
        maximiliano-ariel-arce
      </a>
    ),
  },
  {
    id:    'location',
    icon:  '📍',
    label: 'UBICACIÓN',
    content: (
      <span style={{ color: 'var(--text-dim)' }}>
        Berazategui, GBA Sur — Argentina
        <br />
        <small style={{ color: 'var(--text-faint)', fontSize: '0.8em' }}>
          Remoto · Presencial zona sur GBA
        </small>
      </span>
    ),
  },
]

// Estilos compartidos para inputs
const inputBase = {
  background:  'var(--bg3)',
  border:      '1px solid rgba(0,245,212,0.15)',
  color:       'var(--text)',
  padding:     '12px 16px',
  fontFamily:  'var(--mono)',
  fontSize:    '0.82rem',
  outline:     'none',
  width:       '100%',
  transition:  'border-color 0.2s, box-shadow 0.2s',
}

function FormField({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: 2, textTransform: 'uppercase' }}>
        {label}
      </label>
      {children}
    </div>
  )
}

function Contact() {
  const [form, setForm]     = useState(INITIAL_FORM)
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }, [])

  const handleFocus = (e) => {
    e.target.style.borderColor = 'var(--accent)'
    e.target.style.boxShadow   = 'var(--glow-sm)'
  }
  const handleBlur = (e) => {
    e.target.style.borderColor = 'rgba(0,245,212,0.15)'
    e.target.style.boxShadow   = 'none'
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm(INITIAL_FORM)
      setTimeout(() => setStatus(null), 5000)
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
    }
  }
  return (
    <section id="contact" style={{ padding: '100px 5%', background: 'var(--bg2)' }}>
      <div className="section-inner">
        <Reveal>
          <div className="section-label">// CONTACTO</div>
          <h2 className="section-title">
            ¿Tenés un proyecto <span>o un problema?</span>
          </h2>
        </Reveal>

        <div
          className="contact-grid"
          style={{
            display:             'grid',
            gridTemplateColumns: '1fr 1fr',
            gap:                 '5rem',
            alignItems:          'start',
            marginTop:           '1rem',
          }}
        >
          {/* Formulario */}
          <Reveal>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

              <FormField label="NOMBRE">
                <input
                  name="name" type="text" value={form.name}
                  onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}
                  placeholder="Tu nombre" required
                  style={inputBase}
                />
              </FormField>

              <FormField label="EMAIL">
                <input
                  name="email" type="email" value={form.email}
                  onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}
                  placeholder="tu@email.com" required
                  style={inputBase}
                />
              </FormField>

              <FormField label="SERVICIO">
                <select
                  name="service" value={form.service}
                  onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}
                  style={{ ...inputBase, appearance: 'none', cursor: 'pointer' }}
                >
                  <option value="">Seleccioná un servicio</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Otro">Otro</option>
                </select>
              </FormField>

              <FormField label="MENSAJE">
                <textarea
                  name="message" value={form.message}
                  onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}
                  placeholder="Describí tu problema o proyecto..." required
                  style={{ ...inputBase, minHeight: 120, resize: 'vertical' }}
                />
              </FormField>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary"
                style={{
                  alignSelf: 'flex-start',
                  border:    'none',
                  cursor:    status === 'loading' ? 'wait' : 'pointer',
                  opacity:   status === 'loading' ? 0.7 : 1,
                }}
              >
                {status === 'loading' ? 'ENVIANDO...' : 'ENVIAR MENSAJE →'}
              </button>

              {status === 'success' && (
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--accent)', padding: '12px 16px', border: '1px solid rgba(0,245,212,0.2)', background: 'rgba(0,245,212,0.04)' }}>
                  ✓ MENSAJE ENVIADO — te respondo pronto.
                </div>
              )}

              {status === 'error' && (
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--accent3)', padding: '12px 16px', border: '1px solid rgba(247,37,133,0.2)', background: 'rgba(247,37,133,0.04)' }}>
                  ✗ Error al enviar. Intentá de nuevo o escribime directamente.
                </div>
              )}
            </form>
          </Reveal>

          {/* Info de contacto */}
          <Reveal delay={100}>
            <div style={{ paddingTop: '0.5rem' }}>
              {CONTACT_ITEMS.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display:       'flex',
                    alignItems:    'flex-start',
                    gap:           '1rem',
                    marginBottom:  '2rem',
                    paddingBottom: '2rem',
                    borderBottom:  '1px solid rgba(0,245,212,0.06)',
                  }}
                >
                  <span style={{ fontSize: '1.3rem', flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--text-faint)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text)' }}>
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )

  
}

export default Contact
