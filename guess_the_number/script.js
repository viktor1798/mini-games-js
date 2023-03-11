'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;
let scoreCount = 20;
let highscore = 0;

console.log(secretNum);

const guessingNumber = () => {
  const inputNum = Number(document.querySelector('.number-input').value);

  if (!inputNum || inputNum > 20 || inputNum < 1) {
    document.querySelector('.guess-message').textContent =
      'Введите число от 1 до 20!';
  } else if (inputNum === secretNum) {
    if (highscore < scoreCount) {
      document.querySelector('.highscore').textContent = `${scoreCount}`;
    }
    document.querySelector('.score').textContent = `${scoreCount}`;
    document.querySelector('.guess-message').textContent = 'Правильно';
    document.querySelector('.question').textContent = `Congratulations `;
    document.querySelector('body').style.backgroundColor = `#09fa15`;
    document.querySelector('.question').style.width = `70rem`;
  } else if (inputNum < secretNum) {
    if (scoreCount > 1) {
      document.querySelector('.question').textContent = `Мало`;
      scoreCount--;
      document.querySelector('.score').textContent = `${scoreCount}`;
    } else {
      document.querySelector('.guess-message').textContent = 'Игра окончена!';
      document.querySelector('.score').textContent = `0`;
      document.querySelector('.question').textContent = `Game Over!!!`;
      document.querySelector('body').style.backgroundColor = `#ff0000`;
      document.querySelector('.question').style.width = `55rem`;
    }
  } else if (inputNum > secretNum) {
    if (scoreCount > 1) {
      document.querySelector('.question').textContent = `Много`;
      scoreCount--;
      document.querySelector('.score').textContent = `${scoreCount}`;
    } else {
      document.querySelector('.guess-message').textContent = 'Игра окончена!';
      document.querySelector('.score').textContent = `0`;
      document.querySelector('.question').textContent = `???`;
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
//   Number(document.querySelector('.number-input').value) = 1;
};

document.querySelector('.check').addEventListener('click', guessingNumber);
document.querySelector('.again').addEventListener('click', restartGame);
