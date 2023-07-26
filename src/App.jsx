import { useState } from 'react';
import './App.scss';
import Form from './components/form/CardForm';
import Card from './components/card/Card';
import Loading from './components/loading/Loading';

function App() {

  const [side, setSide] = useState(true);
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    surname: "",
    card_number: "",
    card_date: "",
    card_cvv: ""
})

  return (
    <div className="App">
      {loading ? <Loading complete={complete} /> : (
        <>
          <Form inputs={inputs} setInputs={setInputs} setSide={setSide} setLoading={setLoading} setComplete={setComplete}/>
          <Card inputs={inputs}  side={side} setSide={setSide}/>
        </>
      )}
      
    </div>
  );
}

export default App;
