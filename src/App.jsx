import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BentoGrid from './components/BentoGrid'
import MonolithModule from './components/MonolithModule'
import CoreCapabilities from './components/CoreCapabilities'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary-light selection:text-primary-dark">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <MonolithModule />
        <CoreCapabilities />
      </main>
      <Footer />
    </div>
  )
}

export default App
