import { useState } from 'react';
import './App.css';

import DiceImage1 from "./assets/Dice1.png";
import DiceImage2 from "./assets/Dice2.png";
import DiceImage3 from "./assets/Dice3.png";
import DiceImage4 from "./assets/Dice4.png";
import DiceImage5 from "./assets/Dice5.png";
import DiceImage6 from "./assets/Dice6.png";

function App() 
{
  var diceImages = [
    DiceImage1,
    DiceImage2,
    DiceImage3,
    DiceImage4,
    DiceImage5,
    DiceImage6
  ]

  const [image, setNewImage] = useState(diceImages[0])
  const [image2, setNewImage2] = useState(diceImages[1])

  const rollDice = () => {
    // Generate random number
    var randomNum1 = Math.floor(Math.random() * 6);
    var randomNum2 = Math.floor(Math.random() * 6);
    setNewImage(diceImages[randomNum1]);
    setNewImage2(diceImages[randomNum2]);
  }


  return (
    <div className="App flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-4xl font-bold mb-8">Tira los dados</h1>
    <div className='flex items-center justify-center mb-8'>
        <img className='w-24 h-24' src={image} alt="Dice"></img>
        <div className="mx-2"></div>
        <img className='w-24 h-24' src={image2} alt="Dice"></img>
    </div>
    <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={rollDice}>Roll Dice</button>
</div>
  );
}

export default App;