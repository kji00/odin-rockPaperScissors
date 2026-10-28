let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
const btn = document.querySelectorAll(".btn");
const resetBtn = document.querySelector("#reset-btn");
const scoreBoard = document.querySelector("#scoreboard");
const theScore = document.querySelector("#score");
const theWinner = document.createElement("p");

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    tieScore = 0;
    theScore.textContent = `Player Wins: ${humanScore} Cpu Wins: ${computerScore} Ties: ${tieScore}`;
    theWinner.remove();
}

resetBtn.addEventListener('click', resetGame);

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3) + 1;

  if (compChoice === 1) {
    return "rock";
  } else if (compChoice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  btn.forEach((button) => {
    button.addEventListener("click", (e) => {
      const selection = e.target.dataset.choice;
      playRound(selection, getComputerChoice());
    });
  });
}

function playRound(selection, cpuChoice) {
  const player = selection;
  const cpu = cpuChoice;

  if (humanScore === 5 || computerScore === 5) {
    return;
  }

  if (player === "rock" && cpu === "scissors") {
    humanScore++;
  } else if (player === "rock" && cpu === "paper") {
    computerScore++;
  } else if (player === "rock" && cpu === "rock") {
    tieScore++;
  } else if (player === "paper" && cpu === "scissors") {
    computerScore++;
  } else if (player === "paper" && cpu === "paper") {
    tieScore++;
  } else if (player === "paper" && cpu === "rock") {
    humanScore++;
  } else if (player === "scissors" && cpu === "scissors") {
    tieScore++;
  } else if (player === "scissors" && cpu === "paper") {
    humanScore++;
  } else if (player === "scissors" && cpu === "rock") {
    computerScore++;
  }

  theScore.textContent = `Player Wins: ${humanScore} Cpu Wins: ${computerScore} Ties: ${tieScore}`;

  if (humanScore === 5) {
    theWinner.textContent = `Player Wins! Click the Reset button to restart the game.`;
    scoreBoard.appendChild(theWinner);
  } else if (computerScore === 5) {
    theWinner.textContent = `CPU Wins! Click the Reset button to restart the game.`;
    scoreBoard.appendChild(theWinner);
  }
}

getHumanChoice();
