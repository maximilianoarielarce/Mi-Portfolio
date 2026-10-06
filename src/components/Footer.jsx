// components/Footer.jsx

function Footer() {
  return (
    <footer
      style={{
        background:     'var(--bg)',
        borderTop:      '1px solid rgba(0,245,212,0.08)',
        padding:        '2rem 5%',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'space-between',
        flexWrap:       'wrap',
        gap:            '1rem',
      }}
    >
      <div style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--text-faint)' }}>
        <span style={{ color: 'var(--accent)' }}>ZERO COOL</span>
        {' // MAXIMILIANO ARIEL ARCE'}
      </div>

      <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--text-faint)' }}>
        © 2026 — BUILT WITH MERN STACK & ☕
      </div>
    </footer>
  )
}

export default Footer
