import { useState } from 'react';
let defaultDiceNumber = '../../img/dice-empty.png';
let diceNumber = '../../img/dice-empty.png';

function randomNumber(maximo = 6, minimo = 1) {
  return Math.round(Math.random() * (maximo - minimo) + 1);
}

function CreateDice() {
  diceNumber = randomNumber();
  return '../../img/dice' + diceNumber + '.png';
}

function Dice() {
  const [dicePicture, setDicePicture] = useState(CreateDice());
  const [diceRoll, setDiceRoll] = useState(false);

  function diceToggle() {
    if (diceRoll) {
      return;
    }
    setDicePicture(defaultDiceNumber);
    setDiceRoll(true);
    setTimeout(() => {
      setDicePicture(CreateDice());
      setDiceRoll(false);
    }, 1000);
  }

  return (
    <div>
      <img onClick={diceToggle} src={dicePicture} alt="Dice" height="300px" />
    </div>
  );
}
export default Dice;
