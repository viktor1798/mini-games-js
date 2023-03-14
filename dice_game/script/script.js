"use strict";

const score0Element = document.querySelector("#score--0");
const score1Element = document.querySelector("#score--1");
const diceElement = document.querySelector(".dice");
const currentScorePlayer0 = document.querySelector('#current--0')
const currentScorePlayer1 = document.querySelector('#current--1')


const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

currentScorePlayer0.textContent = 0;
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.hidden = true;
let currentScore = 0

function diceRoll() {
  let diceNumber = Math.trunc(Math.random() * 6 + 1);
    
  console.log(diceNumber)

  diceElement.hidden=false
  diceElement.src=`./img/dice${diceNumber}.png`

  if(diceNumber!=1){
    currentScore+=diceNumber
    currentScorePlayer0.textContent =currentScore;
  }else {
    currentScore =0
    currentScorePlayer0.textContent = 0
}
}

btnRoll.addEventListener('click',diceRoll)