/*
 * DOTS: Level One
 *
 */
const levels = document.querySelectorAll(".level-nav li");
const scoreDisplay = document.querySelector(".js-score");
const dot = document.querySelector(".js-dot");
const winner = document.querySelector(".level-winner");
const timerDisplay = document.querySelector(".timer span");

let score = 0;
let timer = 3;

function addScore() {
  score = score + 10 < 10000 ? (score += 10) : (score = 9999);

  if (String(score).length === 2) {
    scoreDisplay.innerText = `00${score}`;
  } else if (String(score).length === 3) {
    scoreDisplay.innerText = `0${score}`;
  } else {
    scoreDisplay.innerText = score;
  }

  if (score >= 100) {
    winner.classList.add("game-over");
    clearInterval(countDown);
    levels[1].style.display = "inline-block";
  }
}

timerDisplay.innerText =
  timer < 10
    ? (timerDisplay.innerText = `0${timer}`)
    : (timerDisplay.innerText = timer);

dot.addEventListener(`click`, addScore);

levels.forEach((item, index) =>
  index !== 0
    ? (item.style.display = "none")
    : (item.style.display = "inline-block")
);

const countDown = setInterval(() => {
  timer--;
  timer < 10
    ? (timerDisplay.innerText = `0${timer}`)
    : (timerDisplay.innerText = timer);
}, 1000);

setTimeout(() => {
  clearInterval(countDown);
  winner.firstElementChild.innerText = "Game Over";
  winner.children[1].style.display = "none";

  //add retry
  //create anchor tag element
  const retry = document.createElement("a");
  //add text to retry element
  retry.innerText = "Retry";
  //set retry element attributes
  retry.setAttribute("href", "level-one.html");
  //append to parent element
  winner.appendChild(retry);

  winner.classList.add("game-over");
  dot.removeEventListener("click", addScore);
}, timer * 1000 + 1000);
