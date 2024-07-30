let randomNumber = parseInt(Math.random() * 100 + 1);

const submitButton = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numberOfGuesses = 1;

let playGame = true;

if (playGame) {
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const guessNumber = parseInt(userInput.value);
    validateGuess(guessNumber);
  });
}

const validateGuess = (guess) => {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 01');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);

    if (numberOfGuesses === 11) {
      cleanupGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      cleanupGuess(guess);
      checkGuess(guess);
    }
  }
};

const checkGuess = (guess) => {
  if (guess === randomNumber) {
    displayMessage('You guess it rightly');
  } else if (guess < randomNumber) {
    displayMessage('Number is Law.');
  } else if (guess > randomNumber) {
    displayMessage('Number is High.');
  }
};

const cleanupGuess = (guess) => {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numberOfGuesses++;
  remaining.innerHTML = `${11 - numberOfGuesses} `;
};

const displayMessage = (message) => {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
};

const endGame = () => {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
};
const newGame = () => {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', () => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numberOfGuesses = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numberOfGuesses} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
};
