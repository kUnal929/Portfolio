import { useEffect } from 'react'
import './App.css'
import Navbar from "./assets/Navbar/Navbar"
import Home from './assets/Home/Home'
import About from './assets/About/About'
import Skills from './assets/Skills/Skills'
import Projects from './assets/Projects/Projects'
import Contact from './assets/Contact/Contact'
import Footer from './assets/Footer/Footer'

function App() {
  // Intersection Observer for scroll-triggered section reveals
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible')
            entry.target.classList.remove('section-hidden')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.observe-section').forEach((el) => {
      el.classList.add('section-hidden')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#1a1a1a] dot-grid">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
