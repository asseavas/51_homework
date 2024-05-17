import './App.css'
import Ball from './components/Ball/Ball';
import {useState} from "react";

const App = () => {
  const [numbers] = useState([5, 11, 16, 23, 32]);


  return (
      <>
        <div className="balls-container">
          {numbers.map((number, index) => (
              <Ball key={index} number={number}/>
          ))}
        </div>
        <button className="numbers-button" >
          New numbers
        </button>
      </>
  )
};

export default App
