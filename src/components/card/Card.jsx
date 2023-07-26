import React, { useState } from 'react'
import CardBehind from './cardBehind/CardBehind'
import CardFront from './cardFront/CardFront'

const User = ({inputs, side, setSide}) => {
  return (
    <div className='live-view'>
      <button onClick={() => {setSide((prev) => {return !prev})}}>Rotate</button>
      {side ? <CardFront inputs={inputs} /> : <CardBehind inputs={inputs} />}
    </div>
  )
}

export default User