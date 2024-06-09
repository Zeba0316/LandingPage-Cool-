import React from 'react';
import "../css/nav.scss";

const Nav = () => {
    return (
        <div className="Nav">
            <div className="navD13">
                <div className="buy">
                    <p className="buyPara">Buy</p>
                    <p className="buyPara">Now</p>
                </div>
            </div>
            <div className="navD2">
                <div className="categoryContainer">
                    <p className='category categories'>About</p>
                    <p className='category categories'>Products</p>
                    <p className='category categories'>Gallery</p>
                    <p className='category categories'>Contact</p>
                </div>
            </div>
            <div className="navD13" style={{ backgroundColor: "rgb(238,119,74)" }}>
                <p className="para">Grab Your Can</p>
            </div>
        </div>
    );
}

export default Nav;
