import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import "./CardForm.scss";
import { useState } from 'react';
import verifyCard from '../../verifyCard';
import { formatString } from '../../formatString';

const CardForm = ({ inputs, setInputs, setSide, setLoading, setComplete }) => {
  const dispatch = useDispatch();
  const data = JSON.parse(localStorage.getItem("data"));

  const [sendNum, setSendNum] = useState("");
  const [price, setPrice] = useState("");
  
  const verify = useRef(null);
  const cardNumberRef = useRef(null);
  const getterCardNumberRef = useRef(null);
  const cvvRef = useRef(null);
  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const priceRef = useRef(null);
  const dateRef = useRef(null);
  console.log(verify);
  // if (verify.current) {
    
  // }

  const handleSubmit = () => {
    if (cardNumberRef.current && cardNumberRef.current.value.length !== 16) {
      cardNumberRef.current.style.borderBottom = "1px solid red";
      return;
    } else {
      cardNumberRef.current.style.borderBottom = "1px solid #C3B7B7";
    }

    if (getterCardNumberRef.current && getterCardNumberRef.current.value.length !== 16) {
      getterCardNumberRef.current.style.borderBottom = "1px solid red";
      return;
    } else {
      getterCardNumberRef.current.style.borderBottom = "1px solid #C3B7B7";
    }

    if (cvvRef.current && cvvRef.current.value.length !== 3) {
      cvvRef.current.style.borderBottom = "1px solid red";
      return;
    } else {
      cvvRef.current.style.borderBottom = "1px solid #C3B7B7";
    }

    if (nameRef.current && !nameRef.current.value) {
      nameRef.current.style.borderBottom = "1px solid red";
      return;
    } else {
      nameRef.current.style.borderBottom = "1px solid #C3B7B7";
    }

    if (surnameRef.current && !surnameRef.current.value) {
      surnameRef.current.style.borderBottom = "1px solid red";
      return;
    } else {
      surnameRef.current.style.borderBottom = "1px solid #C3B7B7";
    }

    if (dateRef.current && !dateRef.current.value) {
      dateRef.current.style.borderBottom = "1px solid red";
      return;
    } else {
      dateRef.current.style.borderBottom = "1px solid #C3B7B7";
    }

    if (priceRef.current && !priceRef.current.value) {
      priceRef.current.style.borderBottom = "1px solid red";
      return;
    } else {
      priceRef.current.style.borderBottom = "1px solid #C3B7B7";
    }

    setLoading(true);
    verifyCard(data, inputs, sendNum, verify, price, dispatch, setComplete);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  };

  return (
    <form>
      <label htmlFor="name">
        <span>Name:</span>
        <input
          type="text"
          maxLength="8"
          ref={nameRef}
          id="name"
          placeholder="Name"
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
      </label>
      <label htmlFor="surname">
        <span>Surname:</span>
        <input
          type="text"
          maxLength="14"
          ref={surnameRef}
          id="surname"
          placeholder="Surname"
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
      </label>
      <label htmlFor="card_number">
        <span>Card Number:</span>
        <input
          ref={cardNumberRef} 
          type="number"
          name='card_number'
          placeholder="**** **** **** ****"
          value={inputs.card_number}
          onChange={(e) => {
            setInputs((prev) => {
              return {
                ...prev,
                card_number: e.target.value.slice(0, 16)
              }
            })
          }}
        />
      </label>
      <label htmlFor="date">
        <span>Date:</span>
        <input
          id="card_date"
          maxLength='5'
          ref={dateRef}
          placeholder="MM/YY"
          type="text"
          onKeyUp={formatString}
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
      </label>
      <label htmlFor="cvv">
        <span>CVV:</span>
        <input
          ref={cvvRef}
          type="number"
          maxLength='3'
          placeholder="CVV"
          name='cvv'
          value={inputs.card_cvv}
          onChange={(e) => {
            setSide(false)
            setInputs((prev) => {
              return {
                ...prev,
                card_cvv: e.target.value.slice(0, 3)
              }
            })
          }}
        />
        <label htmlFor="card_number">
        <span>Recipient's Card Number։</span>
        <input
          ref={getterCardNumberRef} 
          type="number"
          name='getter_card_number'
          placeholder="**** **** **** ****"
          value={sendNum}
          onChange={(e) => {
            setSendNum(e.target.value.slice(0,16))
          }}
        />
      </label>
      </label>
      <label htmlFor="balance">
        <span>Price:</span>
        <input
        ref={priceRef}
          id="balance"
          type="number"
          name='balance'
          placeholder="Price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value)
          }}
        />
      </label>
      <button type='button' onClick={handleSubmit}>Pay Now</button>
    </form>
  )
}

export default CardForm;
