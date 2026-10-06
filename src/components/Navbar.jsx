// components/Navbar.jsx

import { useState, useEffect } from 'react'

const LINKS = [
  { href: '#about',    label: './about'    },
  { href: '#services', label: './services' },
  { href: '#projects', label: './projects' },
  { href: '#cv',       label: './cv'       },
  { href: '#contact',  label: './contact'  },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position:       'fixed',
        top: 0, left: 0, right: 0,
        zIndex:         100,
        padding:        '0 5%',
        minHeight:      64,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'space-between',
        background:     scrolled ? 'rgba(6,8,16,0.95)' : 'rgba(6,8,16,0.7)',
        backdropFilter: 'blur(20px)',
        borderBottom:   '1px solid rgba(0,245,212,0.1)',
        transition:     'background 0.3s',
      }}
    >
      <div style={{ fontFamily: 'var(--mono)', fontSize: '0.9rem', color: 'var(--accent)', letterSpacing: 2 }}>
        M<span style={{ color: 'var(--text-dim)' }}>.</span>ARCE
        <span style={{ color: 'var(--text-dim)' }}> // </span>
        ZERO_COOL
      </div>

      <ul className="nav-desktop" style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        {LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                fontFamily:     'var(--mono)',
                fontSize:       '0.72rem',
                color:          'var(--text-dim)',
                textDecoration: 'none',
                letterSpacing:  1,
                textTransform:  'uppercase',
                transition:     'color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.target.style.color      = 'var(--accent)'
                e.target.style.textShadow = 'var(--glow-sm)'
              }}
              onMouseLeave={(e) => {
                e.target.style.color      = 'var(--text-dim)'
                e.target.style.textShadow = 'none'
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="nav-toggle"
        aria-label="Abrir menú"
        onClick={() => setMenuOpen((prev) => !prev)}
        style={{
          display: 'none',
          background: 'transparent',
          border: '1px solid rgba(0,245,212,0.25)',
          color: 'var(--accent)',
          fontSize: '1.3rem',
          width: 40,
          height: 40,
          borderRadius: 6,
          cursor: 'pointer',
        }}
      >
        ☰
      </button>

      {menuOpen && (
        <ul
          className="nav-mobile"
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: '5%',
            left: '5%',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            listStyle: 'none',
            background: 'rgba(6,8,16,0.96)',
            border: '1px solid rgba(0,245,212,0.15)',
            padding: '1rem',
          }}
        >
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--mono)',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  fontSize: '0.7rem',
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
