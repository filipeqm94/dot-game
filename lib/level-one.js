/*
 * DOTS: Level One
 *
 */
const levels = document.querySelectorAll(".level-nav li");
const scoreDisplay = document.querySelector(".js-score");
const dot = document.querySelector(".js-dot");

let score = 0;

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
    levels[1].style.display = "inline-block";
  }
}

dot.addEventListener(`click`, addScore);

levels.forEach((item, index) =>
  index !== 0
    ? (item.style.display = "none")
    : (item.style.display = "inline-block")
);
