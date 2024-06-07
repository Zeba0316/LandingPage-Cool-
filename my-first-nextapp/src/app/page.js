import React from 'react'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Gallery from './components/Gallery'
import Product from './components/Product'

function page() {
  return (
    <div style={{ flex: 1, }}>
      <Home />
      <About />
      <Gallery/>
      <Product/>
      <Footer />
    </div>
  )
}

export default page