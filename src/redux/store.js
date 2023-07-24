import { createStore } from "redux"
import config from "../config"

localStorage.setItem("data", JSON.stringify(config));

const reducer = (state, action) => {

}
const initalState = JSON.parse(localStorage.getItem("data"))

const store = createStore(reducer, initalState);

export default store;