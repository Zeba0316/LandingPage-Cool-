import React from 'react'
import "../css/gallery.scss"
import Card from './Card'
function Gallery() {
    return (
        <div className='gallery'>
            <div className='up'>
                <p>Pick Your Favourite</p>
                <p>Flavour</p>
            </div>
            <div className='down'>
                <Card name={"Orange"} src={"orange"} color="rgb(220,126,18)" />
                <Card name={"Lemon"} src={"lemon"} color="rgb(224,204,19)" />
                <Card name={"Blueberry"} src={"blueberry"} color="rgb(37,118,159)" />
            </div>
        </div>
    )
}

export default Gallery