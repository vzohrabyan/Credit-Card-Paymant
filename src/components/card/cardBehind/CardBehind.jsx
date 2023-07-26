import React from 'react'
import Card from "../../../Assets/Card.png"
import "../Card.scss"

const CardBehind = ({inputs}) => {
  return (
    <div style={{backgroundImage: `url(${Card})`}} className="card">
        <div className="card-line"></div>
        <p className='silver-text' style={{fontSize: "22px", fontWeight: "200"}}>{inputs.card_cvv ? inputs.card_cvv : "CVV"}</p>
    </div>
  )
}

export default CardBehind