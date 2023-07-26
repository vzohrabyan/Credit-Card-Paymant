const verifyCard = (data, inputs,sendNum,verify, price, dispatch, setComplete) => {
    let sender = null;
    let getter = null;
    let balance = price;
    data.forEach(({ id, name, surname, code, date }) => {
      if (
        name === inputs.name &&
        surname === inputs.surname &&
        code.main_code.toString() === inputs.card_number &&
        code.cvv.toString() === inputs.card_cvv &&
        date.month.toString() + "/" + date.year.toString() === inputs.card_date
      ) {
        sender = id;
      }
    });
  
    data.forEach(({ id, name, surname, code }) => {
      if (code.main_code.toString() === sendNum) {
        getter = id;
      }
    });
  
    if(sender && getter && Number(balance)) {
      dispatch({
        type: "pay",
        payload: {
          sender: sender,
          getter: getter,
          price: balance,
          complete: setComplete
        }
      });
    } else {
        setComplete("there is no such card")
    }
    console.log(sender, getter, balance);
    verify.current = false;
  };
  
  export default verifyCard;
  