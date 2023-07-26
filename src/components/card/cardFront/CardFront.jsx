import React from 'react'
import "../Card.scss"
import Chip from "../../../Assets/Chip.svg"
import Card from "../../../Assets/Card.png"
import Mastercard from "../../../Assets/Mastercard.svg"
import {FaWifi} from "react-icons/fa"

const CardFront = ({inputs}) => {
  return (
    <div style={{backgroundImage: `url(${Card})`}} className='card'>
        <img src={Chip} alt="Chip" />
        <FaWifi className='card-wifi' />
        <h1 className='silver-text'>{inputs.card_number ? inputs.card_number : "****************"}</h1>
        <div className="card-date">
            <div className="card-date-text" style={{display: "flex", flexDirection: "column"}}><span>VALID</span>THRU</div>
            <h3 className='silver-text'>{inputs.card_date ? inputs.card_date : "MM/YY"}</h3>
        </div>
        <div className='card-user'>
            <h2 className='silver-text'>{inputs.name ? inputs.name : "Name"}</h2>
            <h2 className='silver-text'>{inputs.surname ? inputs.surname : "Surname"}</h2>
        </div>
        <div className='card-master'>
            <img src={Mastercard} alt="MasterCard" />
        </div>
    </div>
  )
}

export default CardFront