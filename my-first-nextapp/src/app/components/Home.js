import React from 'react'
import "../css/home.scss"

const Hero = () => {
    return (
        <div>
            {/* Responsive Hero Section max-width : 900px  */}
            <div className='responsiveHero'>
                <div>
                    <img className='bg' src="./homeCanBg.png" />
                    <p className='name'>Cool Can</p>
                    <p className='offer'>Don't Miss</p>
                    <p className='cost'>Rs 80 only!</p>
                    <img className='canBg' src="./lemon.png" />
                </div>
            </div>
            {/* Hero Section */}
            <div className='hero' >
                <p className='name'>Cool Can</p>
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
                            <p>Few Left</p>
                            <p>In Stock</p>
                            <p>Grab Now</p>
                        </div>
                    </div>
                    <div>
                        <img src="./leftArrow.png" />
                        <img className='smallCan' src="./orange.png" />
                    </div>
                </div>
            </div>
        </div>

    )
}

function Home() {
    return (
        <div className='home'>
            <Hero />
        </div>
    )
}

export default Home