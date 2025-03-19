import { Die } from "./Die";
import dice1 from "../assets/one.svg"
import dice2 from "../assets/two.svg"
import dice3 from "../assets/three.svg"
import dice4 from "../assets/four.svg"
import dice5 from "../assets/five.svg"
import dice6 from "../assets/six.svg"

import { useState } from "react";

export function Main() {

  /* const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  const [diceNumber, setDiceNumber] = useState(1);

  
  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(randomNumber);
  } */

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