"use client"
import React, { useState } from 'react';
import "../css/nav.scss";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {
    const [select, setSelect] = useState(true);
    return (
        <div>

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
            {/* responsive navbar max-width : 768px */}
            <div className='responsiveNav'>
                <div className='hamburgerMenu'>
                    {select ?
                        <LuMenu onClick={() => { setSelect(false) }} className='menu' />
                        :
                        <RxCross2 onClick={() => { setSelect(true) }} className='cross' />
                    }
                </div>
                <div>
                    <p>Grab Your Can Now!</p>
                </div>
                <div className="buy">
                    <p className="buyPara">Buy</p>
                    <p className="buyPara">Now</p>
                </div>
            </div>
        </div>
    );
}

export default Nav;
