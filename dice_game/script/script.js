"use strict";

const score0Element = document.querySelector("#score--0");
const score1Element = document.querySelector("#score--1");
const diceElement = document.querySelector(".dice");
const currentScorePlayer0 = document.querySelector("#current--0");
const currentScorePlayer1 = document.querySelector("#current--1");
const player0Element = document.querySelector('.player--0')
const player1Element = document.querySelector('.player--1')

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

currentScorePlayer0.textContent = 0;
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.hidden = true;

let currentScore = 0;
let activePlayer = 0;

function diceRoll() {
  let diceNumber = Math.trunc(Math.random() * 6 + 1);

  console.log(diceNumber);

  diceElement.hidden = false;
  diceElement.src = `./img/dice${diceNumber}.png`;

  if (diceNumber != 1) {
    currentScore += diceNumber;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore; 
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Element.classList.toggle('player--active')
    player1Element.classList.toggle('player--active')
  }
}

function leavePoints(){
alert('poshelNahui')
}


btnRoll.addEventListener("click", diceRoll);
btnHold.addEventListener("click", leavePoints);
