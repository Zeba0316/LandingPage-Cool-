import React from 'react'
import "../css/product.scss"
import Card from './Card'
function Product() {
    return (
        <div className='product'>
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

export default Product