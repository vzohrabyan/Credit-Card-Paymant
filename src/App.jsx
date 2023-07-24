import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import Form from './components/form/Form';
import Card from './components/card/Card';

function App() {

  const dispatch = useDispatch();
  const a = useSelector((state) => {return state.z.a});

  const [inputs, setInputs] = useState({
    name: "",
    surname: "",
    card_number: "",
    card_date: "",
    card_cvv: ""
})

  return (
    <div className="App">
      <Form inputs={inputs} setInputs={setInputs} />
      <Card inputs={inputs}  />
    </div>
  );
}

export default App;
