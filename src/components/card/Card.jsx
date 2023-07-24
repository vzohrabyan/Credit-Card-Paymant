import React, { useState } from 'react'
import CardBehind from './cardBehind/CardBehind'
import CardFront from './cardFront/CardFront'

const User = ({inputs}) => {
  const [side, setSide] = useState(true);
  return (
    <>
      <button onClick={() => {setSide((prev) => {return !prev})}}>rotate</button>
      {side ? <CardFront inputs={inputs} /> : <CardBehind inputs={inputs} />}
    </>
  )
}

export default User