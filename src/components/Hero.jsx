// components/Hero.jsx

import useTypewriter from '../hooks/useTypewriter'

const PHRASES = [
  'IT Support Specialist.',
  'Full Stack Developer.',
  /* 'MERN Stack.', */
  'Zero Cool Services.',
  'Resolviendo problemas desde 2012.',
]

const STATS = [
  { num: '10+',  label: 'Años de experiencia Freelance + Corp' },
  /* { num: '3',    label: 'Empresas en prod.'   }, */
  /* { num: 'MERN', label: 'Stack dominado'      }, */
  { num: '∞',    label: 'Problemas resueltos' },
]

function Hero() {
  const text = useTypewriter(PHRASES)

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        minHeight:   '100vh',
        display:     'grid',
        placeItems:  'center',
        padding:     '80px 5% 40px',
        position:    'relative',
        overflow:    'hidden',
      }}
    >
      {/* Fondo de grilla */}
      <div
        style={{
          position:        'absolute',
          inset:           0,
          backgroundImage: 'linear-gradient(rgba(0,245,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,212,0.04) 1px, transparent 1px)',
          backgroundSize:  '60px 60px',
          maskImage:       'radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)',
        }}
      />

      {/* Glow central */}
      <div
        style={{
          position:   'absolute',
          width:      600,
          height:     600,
          background: 'radial-gradient(circle, rgba(0,245,212,0.07) 0%, transparent 70%)',
          top:        '50%',
          left:       '50%',
          transform:  'translate(-50%,-50%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position:   'relative',
          zIndex:     2,
          maxWidth:   900,
          textAlign:  'center',
          width:      '100%',
        }}
      >
        {/* Badge */}
        <div
          style={{
            display:        'inline-block',
            fontFamily:     'var(--mono)',
            fontSize:       '0.68rem',
            color:          'var(--accent)',
            letterSpacing:  3,
            textTransform:  'uppercase',
            border:         '1px solid rgba(0,245,212,0.3)',
            padding:        '6px 16px',
            marginBottom:   '2rem',
            animation:      'fadeDown 0.8s ease both',
          }}
        >
          // DISPONIBLE PARA PROYECTOS
        </div>

        {/* Nombre con glitch */}
        <h1
          style={{
            fontFamily:    'var(--display)',
            fontWeight:    800,
            fontSize:      'clamp(3.5rem, 10vw, 7rem)',
            lineHeight:    1,
            letterSpacing: -2,
            color:         'var(--text)',
            animation:     'fadeDown 0.8s 0.1s ease both',
            marginBottom:  '0.4rem',
          }}
        >
          <span
            className="glitch"
            data-text="ZERO"
            style={{ color: 'var(--accent)', position: 'relative' }}
          >
            ZERO
          </span>
          <br />
          COOL
        </h1>

        {/* Typewriter */}
        <p
          style={{
            fontFamily:  'var(--mono)',
            fontSize:    'clamp(0.85rem, 2vw, 1.1rem)',
            color:       'var(--text-dim)',
            marginBottom:'2.5rem',
            animation:   'fadeDown 0.8s 0.2s ease both',
            minHeight:   '1.6em',
          }}
        >
          {text}
          <span
            style={{
              display:        'inline-block',
              width:          2,
              height:         '1em',
              background:     'var(--accent)',
              animation:      'blink 1s infinite',
              verticalAlign:  'middle',
              marginLeft:     2,
            }}
          />
        </p>

        {/* CTAs */}
        <div
          className="hero-cta-group"
          style={{
            display:       'flex',
            gap:           '1rem',
            justifyContent:'center',
            flexWrap:      'wrap',
            animation:     'fadeDown 0.8s 0.3s ease both',
          }}
        >
          <a href="#services" className="btn-primary">VER SERVICIOS</a>
          <a href="#cv"       className="btn-outline">DESCARGAR CV</a>
        </div>

        {/* Stats */}
        <div
          className="hero-stats"
          style={{
            display:        'flex',
            justifyContent: 'center',
            gap:            '3rem',
            marginTop:      '4rem',
            paddingTop:     '2rem',
            borderTop:      '1px solid rgba(0,245,212,0.1)',
            animation:      'fadeDown 0.8s 0.4s ease both',
            flexWrap:       'wrap',
          }}
        >
          {STATS.map((stat) => (
            <div key={stat.num} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily:  'var(--display)',
                  fontSize:    '2rem',
                  fontWeight:  800,
                  color:       'var(--accent)',
                  textShadow:  'var(--glow-sm)',
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontFamily:    'var(--mono)',
                  fontSize:      '0.62rem',
                  color:         'var(--text-faint)',
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
