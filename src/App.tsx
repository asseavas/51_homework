import './App.css'
import Ball from './components/Ball/Ball';
import {useState} from "react";

const App = () => {
  const [numbers, setNumbers] = useState([5, 11, 16, 23, 32]);

  const changeNumbersArray =() => {
    const allNumbers = Array.from({ length: 32 }, (_, i) => i + 5);
    const mixedNumbers = allNumbers.sort(() => 0.5 - Math.random());
    const newNumbers = mixedNumbers.slice(0, 5).sort((a, b) => a - b);
    setNumbers(newNumbers);
  };

  return (
      <>
        <div className="balls-container">
          {numbers.map((number, index) => (
              <Ball key={index} number={number}/>
          ))}
        </div>
        <button className="numbers-button" onClick={changeNumbersArray}>
          New numbers
        </button>
      </>
  )
};

export default App
