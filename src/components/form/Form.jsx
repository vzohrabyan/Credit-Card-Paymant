import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const Form = ({inputs, setInputs}) => {
  
    const dispatch = useDispatch();

  return (
    <form>
        <input
          type="text"
          placeholder="name"
          className="inputs-input"
          value={inputs.name}
          onChange={(e) => {
            setInputs((prev) => {
                return {
                    ...prev,
                    name: e.target.value
                }
            })
          }}
        />
        <input
          type="text"
          placeholder="surname"
          className="inputs-input"
          name="surname"
          value={inputs.surname}
          onChange={(e) => {
            setInputs((prev) => {
                return {
                    ...prev,
                    surname: e.target.value,
                }
            })
          }}
        />
        <input
          type="text"
          placeholder="enter card number"
          className="inputs-input"
          value={inputs.card_number}
          onChange={(e) => {
            setInputs((prev) => {
                return {
                    ...prev,
                    card_number: e.target.value
                }
            })
          }}
        />
        <input
          type="text"
          placeholder="enter card date"
          className="inputs-input"
          value={inputs.card_date}
          onChange={(e) => {
            setInputs((prev) => {
                return {
                    ...prev,
                    card_date: e.target.value
                }
            })
          }}
        />
        <input
        type="text"
        placeholder="enter card CVV"
        className="inputs-input"
        value={inputs.card_cvv}
        onChange={(e) => {
          setInputs((prev) => {
              return {
                  ...prev,
                  card_cvv: e.target.value
              }
          })
        }}
      />
        <button className="inputs-btn" onClick={() => {
            dispatch(
                {
                    type: "send",
                    payload: inputs
                }
            )
        }}>SEND</button>
    </form>
  )
}

export default Form