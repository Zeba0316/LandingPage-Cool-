import React from 'react'
import "../css/home.scss"
import Nav from './Nav'
import Footer from './Footer'

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
                    <img style={{ position: "absolute", top: "15%", height: "150px", width: "150px" }} src="./blueberry.png" />
                </div>
            </div>
            <div className='mid'>
                <div>
                    <img src='./homeCanBg.png'/>
                </div>
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
                    <img style={{ position: "absolute", top: "15%", height: "150px", width: "150px" }} src="./orange.png" />
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
            <Footer/>
        </div>
    )
}

export default Home