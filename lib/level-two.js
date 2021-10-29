//const variables
/* grabbing the html elements */
const levels = document.querySelectorAll(".level-nav li");
const scoreDisplay = document.querySelector(".js-score");
const dots = document.querySelectorAll(".js-dot");
const winner = document.querySelector(".level-winner");
const timerDisplay = document.querySelector(".timer span");
const arena = document.querySelector(".level-arena");
//let variables
/* setting changeable variables */
let score = 0;
let timer = 20;

//functions
/* declaring functions */
function addScore() {
  //checking if score + 10 is lass than 10k, if so add 10 to score, if not set score to 9999
  score = score + 10 < 10000 ? (score += 10) : (score = 9999);

  //calls setScoreDisplay function - see function below
  setScoreDisplay();

  //winner condition: if score is greater than or equal to 100:
  if (score >= 100) {
    //adds `game-over` class to winner element declared above
    winner.classList.add("game-over");
    //clear countDown setInterval so timer stops running
    clearInterval(countDown);
    //removes event add/decreaseScore event listeners from dot and arena element
    dots.forEach((dot) => dot.removeEventListener("click", addScore));
    arena.removeEventListener("click", decreaseScore);
    //display go to level 2
    levels[1].style.display = "inline-block";
  }
}

//decrease score
function decreaseScore() {
  //check to see is score - 10 is less than 0, if so, set score to 0
  score = score - 10 > 0 ? (score -= 10) : (score = 0);

  //see function below
  setScoreDisplay();

  //if score is 0
  if (score === 0) {
    //stops timer
    clearInterval(countDown);
    //se function below
    gameOver();
  }
}

//score display function
function setScoreDisplay() {
  //checks the length of score as a string and add 0s to it if it less than 4
  if (String(score).length === 1) {
    scoreDisplay.innerText = `000${score}`;
  } else if (String(score).length === 2) {
    scoreDisplay.innerText = `00${score}`;
  } else if (String(score).length === 3) {
    scoreDisplay.innerText = `0${score}`;
  } else {
    scoreDisplay.innerText = score;
  }
}

//show game over modal
function gameOver() {
  //change the first element child inner text of the winner element to "Game Over"
  winner.children[0].innerText = "Game Over";
  //Hides the second child of the winner element
  winner.children[1].style.display = "none";

  //creates retry anchor tag
  const retry = document.createElement("a");
  //adds text to retry
  retry.innerText = "Retry";
  //sets retyr's attributes
  retry.setAttribute("href", "level-two.html");
  //append retry to winner element
  winner.appendChild(retry);

  //adds game-over class to winner element
  winner.classList.add("game-over");

  //removes event listeners from dot and arena elements
  dots.forEach((dot) => dot.removeEventListener("click", addScore));
  arena.removeEventListener("click", decreaseScore);
}

//format timer to look like a gameclock
function setTimerDisplay() {
  //if timer is less than 10, adds 0 in front of it
  timerDisplay.innerText =
    timer < 10
      ? (timerDisplay.innerText = `0${timer}`)
      : (timerDisplay.innerText = timer);
}

//script
//set timer format
setTimerDisplay();

//add click event listeners to game
dots.forEach((dot) => dot.addEventListener("click", addScore));
arena.addEventListener("click", decreaseScore);

//hides level 2 and 3
levels.forEach((item, index) =>
  index === 2
    ? (item.style.display = "none")
    : (item.style.display = "inline-block")
);

//starts timer
const countDown = setInterval(() => {
  //decrement timer after each iteration
  timer--;
  //stops timer when timer variable value reaches 0
  if (timer <= 0) {
    gameOver();
    clearInterval(countDown);
  }
  //sets timerdisplay to be formated according to setTimerDisplay function
  setTimerDisplay();
}, 1000);
