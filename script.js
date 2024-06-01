'use strict';

// Declare variables - random number, score, high score
let secretNumber = Math.trunc(Math.random() * 5) + 1;
let score = 20;
let highScore = 0;

// A to-do list:
// #TODO: Create a function that changes the text property of the message element

// #TODO: Add an event-listener to the check button that compares the input number to the secret number - and calls the displayMessage function

// When guess is wrong:
// #TODO: Add an if statement that checks if the input number is equal to the secret number

// #TODO: Add an else-if statement that checks if the input number is less or greater than the secret number

// #TODO: Decrease the score if the above is true

// Display message
// This function takes a parameter 'message'. It selects an element with the class name "message" using document.querySelector and sets its textContent property to the value of the message parameter.
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Add event-listener to check
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Well this doesn't work ⬇️
  // let scoreText = document.querySelector('.score').textContent;

  // If no input:
  if (!guess) {
    displayMessage('🚫 No Number');
  }

  // If correct input:
  else if (guess === secretNumber) {
    displayMessage('🎉 You Win!');

    // Reveal
    document.querySelector('.number').textContent = secretNumber;

    // Background change
    document.querySelector('body').style.backgroundColor = '#60b347';
  }

  // If incorrect input:
  if (guess > secretNumber) {
    displayMessage('⬆️ Too high');
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    displayMessage('⬇️ Too low');
    score--;
    document.querySelector('.score').textContent = score;
  }
});
