'use strict';

const guessingNumber = () => {
  const inputNum = Number(document.querySelector('.number-input').value);

  if (!inputNum) {
    document.querySelector('.guess-message').textContent = 'Введите число от 1 до 20!';
  } else
    document.querySelector('.guess-message').textContent = `${inputNum}`;
};

document.querySelector('.check').addEventListener('click', guessingNumber);
