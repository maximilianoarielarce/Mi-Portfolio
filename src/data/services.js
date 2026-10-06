// data/services.js
// Datos de los servicios de Zero Cool Tech Services.
// Cuando tengas el backend, estos pueden venir de GET /api/services

const SERVICES = [
  {
    id: 1,
    icon: '🖥️',
    title: 'Soporte Windows, Linux & Mac',
    badge: 'REMOTO / PRESENCIAL',
    desc: 'Formateo, instalación de software, eliminación de virus, actualización de sistema, optimización de rendimiento, resolucion de problemas  y configuración desde cero.',
    tags: ['Windows 10/11', 'macOS', 'Drivers', 'Antivirus'],
  },
  {
    id: 2,
    icon: '🌐',
    title: 'Redes & Conectividad',
    badge: 'REMOTO',
    desc: 'Configuración de routers, solucion de problemas, VPN, instalacion de impresoras, Wi-Fi y resolución de problemas.',
    tags: ['Router', 'VPN', 'Wi-Fi', 'TCP/IP'],
  },
  {
    id: 3,
    icon: '🔧',
    title: 'Reparación & Hardware',
    badge: 'HARDWARE',
    desc: 'Reparación de PC, notebooks y escritorio, cambio de pasta térmica, upgrade de RAM/SSD, recuperación de datos y reparación de impresoras.',
    tags: ['RAM', 'SSD', 'iPhone', 'iPad'],
  },
  {
    id: 4,
    icon: '☁️',
    title: 'Microsoft 365 & Office',
    badge: 'CONSULTORÍA',
    desc: 'Configuración y soporte completo de Microsoft 365: Teams, Outlook, OneDrive, SharePoint.',
    tags: ['Teams', 'OneDrive', 'Exchange', 'Intune'],
  },
  {
    id: 5,
    icon: '⚙️',
    title: 'Automatización & Scripts',
    badge: 'DEV',
    desc: 'Scripts en PowerShell y Python para automatizar tareas repetitivas: backups, reportes, gestión de usuarios, notificaciones.',
    tags: ['PowerShell', 'Python', 'Automation', 'Bash'],
  },
  {
    id: 6,
    icon: '🚀',
    title: 'Desarrollo Web MERN',
    badge: 'FULL STACK',
    desc: 'Aplicaciones web completas con MongoDB, Express, React y Node.js. APIs REST, paneles de administración y sitios institucionales.',
    tags: ['React', 'Node.js', 'MongoDB', 'API REST'],
  },
]

export default SERVICES
