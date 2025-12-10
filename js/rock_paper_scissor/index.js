let currentCount = 5;
let currentInterval = null;
let playerMove = null;
const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";
const validMoves = [ROCK, PAPER, SCISSOR];

function startCountDown() {
  const countdown = document.getElementById("countdown");
  currentInterval = setInterval(() => {
    if (currentCount === 0) {
      clearInterval(currentInterval);
      currentCount = 0;
      if (!playerMove) {
        countdown.innerText = "Sorry your time expired!, click restart";
        hideAllOptions();
        return;
      }
    }
    countdown.innerText = currentCount--;
  }, 1000);
}

function hideAllOptions() {
  const div = document.getElementById("options");
  div.className = "hide";
}

function setupPlayerButtons() {
  const rock = document.getElementById("rock-btn");
  const paper = document.getElementById("paper-btn");
  const scissor = document.getElementById("scissor-btn");

  rock.addEventListener("click", () => handlePlayerMove(ROCK));
  paper.addEventListener("click", () => handlePlayerMove(PAPER));
  scissor.addEventListener("click", () => handlePlayerMove(SCISSOR));
}

function handlePlayerMove(userMove) {
  const computerMove = getRandomValueForRPC();
  const result = findResults(userMove, computerMove);
  alert(`You ${result}`);
  clearInterval(currentInterval);
}

function findResults(userMove, computerMove) {
  console.log({ userMove, computerMove });
  const tie = "tied";
  const win = "won";
  const loose = "lost";
  if (userMove === ROCK) {
    if (computerMove === ROCK) {
      return tie;
    } else if (computerMove === PAPER) {
      return loose;
    } else if (computerMove === SCISSOR) {
      return win;
    }
  }
  if (userMove === PAPER) {
    if (computerMove === ROCK) {
      return win;
    } else if (computerMove === PAPER) {
      return tie;
    } else if (computerMove === SCISSOR) {
      return loose;
    }
  }
  if (userMove === SCISSOR) {
    if (computerMove === ROCK) {
      return win;
    } else if (computerMove === PAPER) {
      return loose;
    } else if (computerMove === SCISSOR) {
      return draw;
    }
  }
}

function getRandomValueForRPC() {
  const randomVal = Math.random() * 10;
  const randomIdx = parseInt(randomVal) % 3;
  console.log({ randomIdx });
  return validMoves[randomIdx];
}

function setupRestButton() {
  const button = document.getElementById("reset");
  button.addEventListener("click", () => {
    window.location.reload();
  });
}

function main() {
  startCountDown();
  setupPlayerButtons();
  setupRestButton();
}

main();
