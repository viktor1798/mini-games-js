'use strict';

const secretNum = Math.trunc(Math.random() * 20) + 1;
let scoreCount = 20;

console.log(secretNum);

// document.querySelector('.question').textContent = `${secretNum}`;

const guessingNumber = () => {
  const inputNum = Number(document.querySelector('.number-input').value);

  if (!inputNum || inputNum > 20 || inputNum < 1) {
    document.querySelector('.guess-message').textContent =
      'Введите число от 1 до 20!';
  } else if (inputNum === secretNum) {
    document.querySelector('.guess-message').textContent = 'Правильно';
    document.querySelector('.question').textContent = `???`;
    document.querySelector('.highscore').textContent = `${scoreCount}`;
  } else if (inputNum < secretNum) {
    if (scoreCount > 1) {
      document.querySelector('.question').textContent = `Мало`;
      scoreCount--;
      document.querySelector('.score').textContent = `${scoreCount}`;
    } else {
      document.querySelector('.guess-message').textContent = 'Игра окончена!';
      document.querySelector('.score').textContent = `0`;
      document.querySelector('.question').textContent = `???`;
    }
  } else if (inputNum > secretNum) {
    if (scoreCount > 1) {
      document.querySelector('.question').textContent = `Много`;
      scoreCount--;
      document.querySelector('.score').textContent = `${scoreCount}`;
    }else {
        document.querySelector('.guess-message').textContent = 'Игра окончена!';
        document.querySelector('.score').textContent = `0`;
        document.querySelector('.question').textContent = `???`;
      }
  }
};

document.querySelector('.check').addEventListener('click', guessingNumber);
