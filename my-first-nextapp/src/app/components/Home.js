import React from 'react'
import "../css/home.scss"
import Nav from './Nav'
import Footer from './Footer'

const Hero = () => {
    return (
        <div className='hero' >
            <div className='left'></div>
            <div className='mid'></div>
            <div className='right'></div>
        </div>
    )
}

function Home() {
    return (
        <div className='home'>
            <Nav />
            <Hero />
            <Footer/>
        </div>
    )
}

export default Home