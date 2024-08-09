"use strict";

const newGame = document.querySelector(".newGame");
const dice = document.querySelector(".dice");
const rollDice = document.querySelector(".rollDice");
const holdBtn = document.querySelector(".hold");

const scores = [0, 0];

let activePlayer = 0;
let totalScore = 0;
let currentScore = 0;
let playing = true;

// reset new game
function reset() {
  document.querySelector(".currScore0").textContent = 0;
  document.querySelector(".currScore1").textContent = 0;
  document.querySelector(".totalScore0").textContent = 0;
  document.querySelector(".totalScore1").textContent = 0;
  dice.textContent = "0";
  activePlayer = 1;
  playing = true;
  totalScore = 0;

  scores = [0, 0];
  currentScore = 0;
}
newGame.addEventListener("click", reset);

function init() {
  document.querySelector(`.currScore${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 1 ? 0 : 1;
}
// roll dice or generate random number
rollDice.addEventListener("click", function (e) {
  if (!playing) return;
  const random = Math.floor(Math.random() * 6) + 1;
  dice.textContent = random;
  if (random !== 1) {
    currentScore += random;
    document.querySelector(`.currScore${activePlayer}`).textContent =
      currentScore;
  } else {
    init();
  }
});

// hold event
holdBtn.addEventListener("click", function () {
  // add currentscore to the totalscore variables
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`.totalScore${activePlayer}`).textContent =
      scores[activePlayer];

    // check scores is >=100
    if (scores[activePlayer] >= 100) {
      alert(`Player${activePlayer + 1} wins!`);
      playing = false;
      dice.textContent = 0;
      activePlayer = activePlayer === 1 ? 0 : 1;
    } else {
      init();
    }
    // switch to player next
    init();
  }
});
