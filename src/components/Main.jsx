import { Die } from "./Die";
import { useState } from "react";

export function Main() {

  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    const generatedArray = [];

    for(let i = 0; i < 10; i++){
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      generatedArray.push(randomNumber);
    }

    return generatedArray;
  }

  console.log(generateAllNewDice());

  const diceElements = dice.map(num => <Die value={num} />)

  
  return(
    <main className="main-container">
      <div className="dice-container">
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
      </div>
    </main>
  );
}