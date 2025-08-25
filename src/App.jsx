import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/navbatr/navbar'
import Home from './assets/home/home'
import About from './assets/About/About'
import Skills from './assets/Skills/Skills'
import Contact from './assets/Contact/Contact'
import Footer from './assets/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' bg-gray-800'>
      <Navbar />
      < Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
