import { createStore } from "redux"
import config from "../config"

localStorage.setItem("data", JSON.stringify(config));
console.log("mtela");
const reducer = (state = config, action) => {
    if (action.type === "pay") {
      const { sender, getter, price, complete } = action.payload;
      let newState = [];
      if(state[sender - 1].balance >= (+price)) {
        newState = state.map((card, index) => {
          if (index === sender - 1) {
            console.log(card.balance, price);
            return {
              ...card,
              balance: card.balance - +price
            };
          }
          if (index === getter - 1) {
            console.log(card.balance, price);
            return {
              ...card,
              balance: card.balance + +price
            };
          }
          complete("done")
          return card;
        });
      } else {
        complete("dont have enough balance")
        return state
      }
      localStorage.setItem("data", JSON.stringify(newState ));
      return newState;
    }
  }
  
const store = createStore(reducer);

export default store;