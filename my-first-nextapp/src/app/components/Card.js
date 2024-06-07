import React from 'react'
import "../css/card.scss"
function Card({ src, name, color }) {
  return (
    <div className='card' style={{ backgroundColor: `${color}` }}>
      <div className='cost'>
        <p>Rs 80</p>
      </div>
      <div style={{ backgroundImage: `url('/${src}bg.jpg')` }}>
        <img className="imgCan" src={`./${src}.png`} />
      </div>
      <p>{name}</p>

    </div>
  )
}

export default Card