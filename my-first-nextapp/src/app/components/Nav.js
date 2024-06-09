"use client"
import React, { useState } from 'react';
import "../css/nav.scss";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {
    const [select, setSelect] = useState(true);
    const handleMenuItemClick = (sectionId) => {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
        setSelect(true);
    };
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
                        <p onClick={() => { handleMenuItemClick("home") }} className='category categories'>Home</p>
                        <p onClick={() => { handleMenuItemClick("about") }} className='category categories'>About</p>
                        <p onClick={() => { handleMenuItemClick("gallery") }} className='category categories'>Gallery</p>
                        <p onClick={() => { handleMenuItemClick("product") }} className='category categories'>Products</p>
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
                <div style={{ opacity: select ? 1 : 0 }}>
                    <p>Grab Your Can Now!</p>
                </div>
                <div className='menuItems' style={{ display: select ? "none" : "flex", opacity: select ? 0 : 1, transition: "1s ease" }}>
                    <p onClick={() => { handleMenuItemClick("home") }} className=' categories'>Home</p>
                    <p onClick={() => { handleMenuItemClick("about") }} className='categories'>About</p>
                    <p onClick={() => { handleMenuItemClick("gallery") }} className=' categories'>Gallery</p>
                    <p onClick={() => { handleMenuItemClick("product") }} className=' categories'>Products</p>
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
