import { useState } from 'react'


import './App.css'
import Navbar from './assets/Navbar/Navbar'
import Home from './assets/Home/Home'
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
