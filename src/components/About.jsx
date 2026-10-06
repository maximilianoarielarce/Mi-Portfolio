// components/About.jsx

import Reveal from './Reveal'

/** Full stack / construcción de software */
const SKILLS_DEV = [
  'JavaScript (ES6+)', 'Python', 'C#', 'SQL', 'NoSQL', 'PowerShell', 'Visual Basic',

  // 🌐 Desarrollo Web (MERN)
  'React.js', 'Node.js', 'Express.js', 'MongoDB',
  'HTML5', 'CSS3',

  'REST APIs', 'JSON', 'MVC Architecture',
  'Git', 'GitHub', 'Visual Studio', 'Visual Studio Code',
  'Postman', 'XAMPP', 'Cursor',
]

/** Soporte técnico, infra corporativa y operaciones */
const SKILLS_SUPPORT = [
  'Active Directory', 'Microsoft 365', 'Microsoft Intune',
  'Google Workspace', 'VMware (Horizon, vSphere)', 'Citrix',
  'Technical Support', 'Troubleshooting',
  'Windows', 'Linux', 'macOS',
  'InvGate', 'Jira', 'HP service manager', 'MuleSoft', 'Anypoint Platform', 'Nagios',
]

function AboutSkillGroup({ label, title, items }) {
  return (
    <div style={{ marginTop: '1.75rem' }}>
      <div className="section-label" style={{ marginBottom: '0.5rem' }}>{label}</div>
      <h3
        style={{
          fontFamily:   'var(--display)',
          fontWeight:   600,
          fontSize:     '1.05rem',
          color:        'var(--text)',
          marginBottom: '0.65rem',
          lineHeight:   1.25,
        }}
      >
        {title}
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {items.map((skill) => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  )
}

const TERMINAL_FIELDS = [
  ['name',       '"Maximiliano Ariel Arce"'],
  ['alias',      '"Zero Cool"'],
  ['location',   '"Berazategui, Argentina"'],
  ['experience', '"10+ años"'],
]

const TERMINAL_ROLES = [
  'Soporte técnico TI',
  'Desarrollo Full Stack (MERN+)',
]

/** Resumen en el terminal; el detalle completo sigue en las tags verdes. */
const TERMINAL_STACK_DEV = [
  'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB',
  'REST APIs', 'SQL', 'NoSQL', 'Git',
]

const TERMINAL_STACK_SUPPORT = [
  'Active Directory', 'Microsoft 365', 'Intune',
  'VMware', 'Citrix', 'Jira', 'Technical Support',
]

function TerminalJsonStringArray({ name, items }) {
  return (
    <>
      <div>
        &nbsp;&nbsp;
        <span style={{ color: '#a78bca' }}>&quot;{name}&quot;</span>
        <span style={{ color: 'var(--text-faint)' }}>: [</span>
      </div>
      {items.map((s, i, arr) => (
        <div key={s}>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span style={{ color: 'var(--accent3)' }}>&quot;{s}&quot;</span>
          <span style={{ color: 'var(--text-faint)' }}>{i < arr.length - 1 ? ',' : ''}</span>
        </div>
      ))}
      <div>
        &nbsp;&nbsp;
        <span style={{ color: 'var(--text-faint)' }}>],</span>
      </div>
    </>
  )
}

function Terminal() {
  return (
    <div
      style={{
        background:  'var(--bg3)',
        border:      '1px solid rgba(0,245,212,0.15)',
        borderRadius: 8,
        overflow:    'hidden',
        boxShadow:   '0 20px 60px rgba(0,0,0,0.5)',
      }}
    >
      {/* Barra de título */}
      <div
        style={{
          background:   'rgba(0,245,212,0.06)',
          padding:      '10px 16px',
          display:      'flex',
          alignItems:   'center',
          gap:          8,
          borderBottom: '1px solid rgba(0,245,212,0.1)',
        }}
      >
        {['#ff5f57', '#febc2e', '#28c840'].map((color) => (
          <div key={color} style={{ width: 10, height: 10, borderRadius: '50%', background: color }} />
        ))}
        <span
          style={{
            fontFamily:    'var(--mono)',
            fontSize:      '0.62rem',
            color:         'var(--text-faint)',
            marginLeft:    8,
            letterSpacing: 1,
          }}
        >
          ~/maximiliano-arce $ whoami
        </span>
      </div>

      {/* Cuerpo */}
      <div style={{ padding: 24, fontFamily: 'var(--mono)', fontSize: '0.78rem', lineHeight: 2 }}>
        <div>
          <span style={{ color: 'var(--accent)' }}>➜</span>{' '}
          <span style={{ color: 'var(--text)' }}>cat profile.json</span>
        </div>
        <br />
        <div style={{ color: 'var(--text-faint)' }}>{'{'}</div>

        {TERMINAL_FIELDS.map(([key, val]) => (
          <div key={key}>
            &nbsp;&nbsp;
            <span style={{ color: '#a78bca' }}>"{key}"</span>
            <span style={{ color: 'var(--text-faint)' }}>: </span>
            <span style={{ color: '#90e0ef' }}>{val}</span>
            <span style={{ color: 'var(--text-faint)' }}>,</span>
          </div>
        ))}

        <TerminalJsonStringArray name="roles" items={TERMINAL_ROLES} />
        <TerminalJsonStringArray name="stack_dev" items={SKILLS_DEV} />
        <TerminalJsonStringArray name="stack_support" items={SKILLS_SUPPORT} />

        <div>
          &nbsp;&nbsp;
          <span style={{ color: '#a78bca' }}>"status"</span>
          <span style={{ color: 'var(--text-faint)' }}>: </span>
          <span style={{ color: '#28c840' }}>"activo & disponible"</span>
        </div>
        <div style={{ color: 'var(--text-faint)' }}>{'}'}</div>
        <br />
        <div>
          <span style={{ color: 'var(--accent)' }}>➜</span>{' '}
          <span style={{ color: 'var(--text)' }}>_</span>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <section id="about" style={{ padding: '100px 5%', background: 'var(--bg2)' }}>
      <div
        className="section-inner about-grid"
        style={{
          display:             'grid',
          gridTemplateColumns: '1fr 1.3fr',
          gap:                 '5rem',
          alignItems:          'center',
        }}
      >
        {/* Terminal */}
        <Reveal>
          <Terminal />
        </Reveal>

        {/* Texto */}
        <Reveal delay={100}>
          <div className="section-label">// SOBRE MÍ</div>
          <h2 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: '1.6rem', color: 'var(--text)', marginBottom: '1rem', lineHeight: 1.3 }}>
            IT Specialist que también{' '}
            <span style={{ color: 'var(--accent)' }}>escribe código.</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', marginBottom: '1rem', fontSize: '0.95rem' }}>
            Soy Maximiliano — IT Support Specialist con experiencia en ambientes freelance y corporativos. Desde dar soporte en mis comienzos solo por mi cuenta en mi barrio con mi propio proyecto a tener años de experiencia corporativa trabajando en proyectos y empresas importantes.
          </p>
          <p style={{ color: 'var(--text-dim)', marginBottom: '1rem', fontSize: '0.95rem' }}>
            Me formé recientemente en 2025 en Educacion IT certificado por ellos y la universidad manhattan university de New York como{' '}
            <strong style={{ color: 'var(--text)' }}>Full Stack Developer</strong>
            {' '}sumando la capacidad de construir soluciones web completas. Abajo separé las tecnologías por perfil para que sea más claro qué aplica a cada tipo de trabajo.
          </p>

          <AboutSkillGroup
            label="// DESARROLLO"
            title="Stack de desarrollo"
            items={SKILLS_DEV}
          />
          <AboutSkillGroup
            label="// SOPORTE TÉCNICO TI"
            title="Stack de soporte"
            items={SKILLS_SUPPORT}
          />
        </Reveal>
      </div>
    </section>
  )
}

export default About
