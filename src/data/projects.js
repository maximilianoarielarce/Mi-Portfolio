// data/projects.js
// Proyectos personales de Maximiliano Arce.
// Cuando tengas el backend, estos pueden venir de GET /api/projects

const PROJECTS = [
  {
    id: 1,
    type: 'Landing Page',
    name: 'Nápoles Cucina Italiana',
    status: 'EN PRODUCCIÓN',
    statusColor: '#00f5d4',
    desc: 'Sitio web para un restaurante italiano de Berazategui. Incluye menú por categorías, reservas, eventos y reseñas de Google.',
    stack: ['Next.js', 'React', 'TypeScript', 'SCSS'],
    github: 'https://github.com/maximilianoarielarce/Napoles-Proyecto',
    live: 'https://napoles-proyecto.vercel.app/',
  },
  {
    id: 2,
    type: 'E-COMMERCE / TURISMO',
    name: 'Descubriendo Rumbos',
    status: 'EN PRODUCCIÓN',
    statusColor: '#00f5d4',
    desc: 'Catálogo de viajes con carrito, pago online y un panel privado para gestionar paquetes y fotos.',
    stack: ['React', 'Vite', 'Express', 'MongoDB', 'Mercado Pago'],
    github: 'https://github.com/maximilianoarielarce/Descubriendo-Rumbos',
    live: 'https://descubriendo-rumbos.vercel.app/',
  },
  {
    id: 3,
    type: 'API REST',
    name: 'IT Tools API',
    status: 'PRÓXIMAMENTE',
    statusColor: '#00f5d4',
    desc: 'API pública para IT: diagnóstico de red, consulta DNS, ping masivo, info de hardware. Documentada con Swagger y deployada en Railway.',
    stack: ['Node.js', 'Express', 'MongoDB', 'Swagger', 'Railway'],
    github: 'https://github.com/maximiliano-ariel-arce',
    live: null,
  },
]

export default PROJECTS
