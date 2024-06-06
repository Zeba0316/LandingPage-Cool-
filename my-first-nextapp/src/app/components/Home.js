import React from 'react'
import "../css/home.scss"
import Nav from './Nav'

const Hero = () => {
    return (
        <div className='hero' >
            <div className='left'>
                <div>
                    <p>Our Summer Sale</p>
                    <p>is Still Going!</p>
                </div>
                <div>
                    <img src="./leftArrow.png" />
                    <img className='smallCan' src="./blueberry.png" />
                </div>
            </div>
            <div className='mid'>
                <p className='name'>Cool Can</p>
                <div>
                    <p className='offer'>Don't Miss</p>
                    <p className='cost'>Rs 80 only!</p>
                    <img className='bg' src='./homeCanBg.png' />
                </div>
                <img className='canBg' src='./lemon.png' />
            </div>
            <div className='right'>
                <div>
                    <div style={{
                        flex: 1
                    }}></div>
                    <div style={{ flex: 1 }}>
                        <p>we can our premium, organic</p>
                        <p>beans for 16 hours in cold filtered</p>
                        <p>water to extract all things you</p>
                        <p>love about coffee</p>
                    </div>
                </div>
                <div>
                    <img src="./leftArrow.png" />
                    <img className='smallCan' src="./orange.png" />
                </div>
            </div>
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