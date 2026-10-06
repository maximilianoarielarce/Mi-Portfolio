// App.jsx
// Componente raíz — solo importa y ensambla las secciones.
// Cada sección es su propio componente independiente.

import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Services   from './components/Services'
import Projects   from './components/Projects'
import CVDownload from './components/CVDownload'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <CVDownload />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
