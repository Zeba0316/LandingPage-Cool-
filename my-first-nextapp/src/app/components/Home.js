import React from 'react'
import "../css/home.scss"
import Nav from './Nav'

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
        </div>
    )
}

export default Home