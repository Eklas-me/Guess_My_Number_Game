let play = document.querySelector(".play");
let gameScreen = document.querySelector(".game-screen");
let audio = document.getElementById("audio");
let audio2 = document.getElementById("audio2");
let audio3 = document.getElementById("audio3");
let audio4 = document.getElementById("audio4");
let audio5 = document.getElementById("audio5");
let SCORE_TEXT = document.querySelector(".start_guess");
let HIGH_SCORE = document.querySelector(".high_score");
let TOTAL_SCORE = document.querySelector(".total_score");
let checkBtn = document.querySelector(".check-btn");
let input = document.querySelector(".guess-input");
let hide_Number = document.querySelector(".guess-the-number");
let playAgain = document.querySelector(".play-again");
let exitBtn = document.querySelector(".exit_btn");

// Variables
let SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let high_score = 0;
// First Play Button Function
play.addEventListener("click", function () {
  play.style.opacity = 0;
  play.style.visibility = "hidden";

  gameScreen.style.opacity = 1;
  gameScreen.style.visibility = "visible";
  audio.play();
});

function displayResultText(text) {
  SCORE_TEXT.textContent = text;
}

// Game Function
checkBtn.addEventListener("click", function () {
  audio2.play();
  const inputNumber = Number(input.value);

  if (!inputNumber) displayResultText("Enter a Valid Number");
  else if (inputNumber === SECRET_NUMBER) {
    displayResultText("You Win!");
    hide_Number.textContent = SECRET_NUMBER;
    hide_Number.style.color = "#acfc69";
    audio2.pause();
    audio3.play();

    if (score > high_score) {
      high_score = score;
      HIGH_SCORE.textContent = high_score;
    }
  } else if (inputNumber !== SECRET_NUMBER) {
    if (score > 1) {
      displayResultText(inputNumber > SECRET_NUMBER ? "Too High" : "Too Low");
      score--;
      TOTAL_SCORE.textContent = score;
    } else {
      displayResultText(" Game Over");
      TOTAL_SCORE.textContent = 0;
    }
  }
});

playAgain.addEventListener("click", function () {
  score = 20;
  TOTAL_SCORE.textContent = 20;
  SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
  SCORE_TEXT.textContent = "Start Guessing.....";
  hide_Number.textContent = "?";
  hide_Number.style.color = "#fff";
  input.value = "";
  audio5.play();
});

exitBtn.addEventListener("click", function () {
  play.style.opacity = 1;
  play.style.visibility = "visible";
  gameScreen.style.opacity = 0;
  gameScreen.style.visibility = "hidden";
  audio4.play();
});

console.log(SECRET_NUMBER);
