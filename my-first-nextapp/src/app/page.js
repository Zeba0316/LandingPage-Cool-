import React from 'react'
import Home from './components/Home'
import Footer from './components/Footer'

function page() {
  return (
    <div style={{ flex: 1, }}>
      <Home />
      <Footer/>
    </div>
  )
}

export default page