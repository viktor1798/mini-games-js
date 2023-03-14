'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;
let scoreCount = 20;
let highscore = 0;

console.log(secretNum);

const gameOver = () => {
  document.querySelector('.guess-message').textContent = 'Игра окончена!';
  document.querySelector('.score').textContent = `0`;
  document.querySelector('.question').textContent = `Game Over!!!`;
  document.querySelector('body').style.backgroundColor = `#ff0000`;
  document.querySelector('.question').style.width = `55rem`;
};

const numberGuessed = () => {
  if (highscore < scoreCount) {
    highscore = scoreCount;
    document.querySelector('.highscore').textContent = `${highscore}`;
  }
  document.querySelector('.score').textContent = `${scoreCount}`;
  document.querySelector('.guess-message').textContent = 'Правильно';
  document.querySelector('.question').textContent = `Congratulations `;
  document.querySelector('body').style.backgroundColor = `#09fa15`;
  document.querySelector('.question').style.width = `70rem`;
};

const score = () => {
  scoreCount--;
  document.querySelector('.score').textContent = `${scoreCount}`;
};

const guessingNumber = () => {
  let inputNum = Number(document.querySelector('.number-input').value);

  if (!inputNum || inputNum > 20 || inputNum < 1) {
    document.querySelector('.guess-message').textContent =
      'Введите число от 1 до 20!';
  } else if (inputNum === secretNum) {
    numberGuessed();
  } else if (inputNum < secretNum) {
    if (scoreCount > 1) {
      document.querySelector('.question').textContent = `${inputNum}`;
      document.querySelector('.guess-message').textContent = `Мало`;
      score();
    } else {
      gameOver();
    }
  } else if (inputNum > secretNum) {
    if (scoreCount > 1) {
      document.querySelector('.question').textContent = `${inputNum}`;
      document.querySelector('.guess-message').textContent = `Много`;
      score();
    } else {
      gameOver();
    }
  }
};

const restartGame = () => {
  secretNum = Math.trunc(Math.random() * 20) + 1;
  scoreCount = 20;

  document.querySelector('.guess-message').textContent = 'Начни угадывать!';
  document.querySelector('.score').textContent = `${scoreCount}`;
  document.querySelector('.question').textContent = `???`;
  document.querySelector('body').style.backgroundColor = `#000000`;
  document.querySelector('.question').style.width = `25rem`;
};

document.querySelector('.check').addEventListener('click', guessingNumber);
document.querySelector('.again').addEventListener('click', restartGame);
