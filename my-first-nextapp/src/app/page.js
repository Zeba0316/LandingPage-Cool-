import React from 'react'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'

function page() {
  return (
    <div style={{ flex: 1, }}>
      <Home />
      <About />
      <Footer />
    </div>
  )
}

export default page