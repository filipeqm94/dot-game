/*
 * DOTS: Level Two
 *
 */
/*
 * DOTS: Level One
 *
 */
const levels = document.querySelectorAll(".level-nav li");
const scoreDisplay = document.querySelector(".js-score");
const dots = document.querySelectorAll(".js-dot");
const winner = document.querySelector(".level-winner");

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
    winner.classList.add("game-over");
    levels[2].style.display = "inline-block";
  }
}

// dots.forEach((dot) => dot.addEventListener(`click`, addScore));

levels.forEach((item, index) =>
  index <= 1
    ? (item.style.display = "inline-block")
    : (item.style.display = "none")
);

// console.log(
//   `html collection: `,
//   winner.children.forEach((item) => console.log(item))
// );

console.log(`\nnodelist: `, dots);
