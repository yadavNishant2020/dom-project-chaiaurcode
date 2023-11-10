let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Enter a valid number.");
  } else if (guess < 0 || guess > 100) {
    alert("Enter a number which is between 0 and 100.");
  } else {
    prevGuess.push(guess);
    if (numGuess == 11) {
      playGame = false;
      displayMessage(`Game Over.... Random number was ${randomNumber}.`);
      // console.log(displayMessage);
      endGame();
    } else {
      checkGuess(guess);
      displayGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == randomNumber) {
    displayMessage(`You guessed it right.... Random number is ${randomNumber}`);
    // console.log(displayMessage);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Your number is tooooo low.`);
    // console.log(displayMessage);
  } else if (guess > randomNumber) {
    displayMessage(`Your number is tooooo high.`);
    // console.log(displayMessage);
  }
}

function displayGuess(guess) {
  userInput.value = " ";
  guessSlot.innerHTML += `${guess}  |   `;
  numGuess++;
  console.log(numGuess);
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = message;
}

function endGame() {
  userInput.value = " ";
  userInput.setAttribute('disabled',' ');
  p.classList.add('button');
  p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild(p);
  playGame=false;
  newGame();
}

function newGame() {
 document.querySelector("#newGame").addEventListener("click", function(e){
  randomNumber = parseInt(Math.random() * 100 + 1);
  console.log(randomNumber);
  guessSlot.innerHTML = " ";
  numGuess = 1;
  playGame = true;
  remaining.innerHTML = `${11 - numGuess}`;
  userInput.removeAttribute("disabled");
  startOver.removeChild(p);
  playGame = true;
 })
}
