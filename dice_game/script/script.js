"use strict";

const score0Element = document.querySelector("#score--0");
const score1Element = document.querySelector("#score--1");
const diceElement = document.querySelector(".dice");
const currentScorePlayer0 = document.querySelector("#current--0");
const currentScorePlayer1 = document.querySelector("#current--1");
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

currentScorePlayer0.textContent = 0;
currentScorePlayer1.textContent = 0;
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.hidden = true;

let totalScoreArr = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let statePlayGame = true;

function checkActivePlayer() {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle("player--active");
  player1Element.classList.toggle("player--active");
}

function diceRoll() {
  if (statePlayGame) {
    diceElement.hidden = false;
    
    let diceNumber = Math.trunc(Math.random() * 6 + 1);
    diceElement.src = `./img/dice${diceNumber}.png`;

    if (diceNumber != 1) {
      currentScore += diceNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      checkActivePlayer();
    }
  }
}

function leavePoints() {
  if (statePlayGame) {
    
    totalScoreArr[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      totalScoreArr[activePlayer];

    if (totalScoreArr[activePlayer] >= 100 ) {
      statePlayGame = false;
      btnNew.disabled = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      checkActivePlayer();
    }
  }
}

function newGame() {
  currentScorePlayer0.textContent = 0;
  currentScorePlayer1.textContent = 0;
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  diceElement.hidden = true;
  btnNew.disabled = true


  totalScoreArr = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  statePlayGame = true;

  document.querySelector(`.player--0`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--winner");
  player0Element.classList.toggle("player--active");
}

btnRoll.addEventListener("click", diceRoll);
btnHold.addEventListener("click", leavePoints);
btnNew.addEventListener("click", newGame);
