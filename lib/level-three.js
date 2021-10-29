/*
 * DOTS: Level Three
 *
 */
/*
 * DOTS: Level Two
 *
 */
/*
 * DOTS: Level One
 *
 */
const scoreDisplay = document.querySelector(".js-score");
const dots = document.querySelectorAll(".js-dot");
const winner = document.querySelector(".level-winner");

let score = 0;

dots.forEach((dot) =>
  dot.addEventListener(`click`, function () {
    increment = Number(dot.dataset.increment);
    score = score + increment < 10000 ? (score += increment) : (score = 9999);

    if (String(score).length === 1) {
      scoreDisplay.innerText = `000${score}`;
    } else if (String(score).length === 2) {
      scoreDisplay.innerText = `00${score}`;
    } else if (String(score).length === 3) {
      scoreDisplay.innerText = `0${score}`;
    } else {
      scoreDisplay.innerText = score;
    }

    if (score >= 100) {
      winner.classList.add("game-over");
    }
  })
);
