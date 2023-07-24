import React from 'react'

const CardFront = ({inputs}) => {
  return (
    <div style={{border: "solid"}}>
        <h1>{inputs.card_number}</h1>
        <div style={{display: "flex", gap: "10px"}}>
            <h2>{inputs.name}</h2>
            <h2>{inputs.surname}</h2>
            <h2>{inputs.card_date}</h2>
        </div>
    </div>
  )
}

export default CardFront