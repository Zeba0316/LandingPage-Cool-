import React from 'react'
import "../css/about.scss"

function About() {
    return (
        <div className='about'>
            {/* upper section */}
            <div className='up'>
                <div>
                    <p>Live Your Life With Full</p>
                    <p>Of Freshness</p>
                </div>
                <div className='bubbleContainer'>
                    <div>
                        <p>Only 100</p>
                        <p>Calories</p>
                    </div>
                    <div>
                        <p>Zero</p>
                        <p>Percentage</p>
                        <p>Sugar</p>
                    </div>
                    <div>
                        <p>Gluten Free</p>
                        <p>Product</p>
                    </div>
                    <div>
                        <p>Lightly</p>
                        <p>Carbonated</p>
                    </div>
                </div>
            </div>
            {/* lower section */}
            <div className="down">
                <div>
                    <div>
                        <p>The benefits you will</p>
                        <p>get from company</p>
                        <p>we can our premium, organic beans for 16 hours in cold filteredwater to extract all things youlove about coffee</p>
                    </div>
                    <div>
                        <div>
                            <p>We always provide </p>
                            <p>best offers </p>
                        </div>
                        <div>
                            <p>Lucky Draw</p>
                            <p>Contest</p>
                        </div>

                    </div>
                </div>
                <div>
                    <p>BUU NOW</p>
                    <p>WE'VE FEW STOCKS LEFT!</p>
                </div>
            </div>
        </div>
    )
}

export default About